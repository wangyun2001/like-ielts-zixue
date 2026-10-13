const PRACTICE_STORAGE_KEY = "ielts-eight-week-planner-v1";
const PRACTICE_CATEGORIES = {
  starter: "入门",
  listening: "听力",
  reading: "阅读",
  speaking: "口语",
  writing: "写作",
  vocabulary: "词汇",
  review: "复盘",
};

const practiceEls = {
  profileName: document.querySelector("#practiceProfileName"),
  profileId: document.querySelector("#practiceProfileId"),
  testList: document.querySelector("#testList"),
  eyebrow: document.querySelector("#practiceEyebrow"),
  title: document.querySelector("#practiceTitle"),
  intro: document.querySelector("#practiceIntro"),
  minutes: document.querySelector("#practiceMinutes"),
  externalLink: document.querySelector("#externalPracticeLink"),
  copyLink: document.querySelector("#copyPracticeLink"),
  materialHeading: document.querySelector("#materialHeading"),
  material: document.querySelector("#practiceMaterial"),
  playAudio: document.querySelector("#playAudio"),
  form: document.querySelector("#practiceForm"),
  question: document.querySelector("#practiceQuestion"),
  choiceAnswers: document.querySelector("#choiceAnswers"),
  textAnswerWrap: document.querySelector("#textAnswerWrap"),
  answer: document.querySelector("#practiceAnswer"),
  confidence: document.querySelector("#confidenceRating"),
  speakingTimer: document.querySelector("#speakingTimer"),
  timerValue: document.querySelector("#timerValue"),
  timerButton: document.querySelector("#timerButton"),
  showReference: document.querySelector("#showReference"),
  referencePanel: document.querySelector("#referencePanel"),
  referenceList: document.querySelector("#referenceList"),
  attemptCount: document.querySelector("#attemptCount"),
  attemptList: document.querySelector("#attemptList"),
  toast: document.querySelector("#practiceToast"),
};

let practiceState = loadPracticeState();
let activeTest = getRequestedTest();
let timerHandle = null;
let timerRemaining = activeTest.timerSeconds || 0;
let toastHandle = null;

function loadPracticeState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PRACTICE_STORAGE_KEY));
    if (!saved || typeof saved !== "object") return { triedTips: {}, tipAttempts: [], profile: {} };
    return {
      ...saved,
      triedTips: saved.triedTips || {},
      tipAttempts: Array.isArray(saved.tipAttempts) ? saved.tipAttempts : [],
      profile: saved.profile && typeof saved.profile === "object" ? saved.profile : {},
    };
  } catch {
    return { triedTips: {}, tipAttempts: [], profile: {} };
  }
}

function savePracticeState() {
  localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(practiceState));
}

function getRequestedTest() {
  const requestedId = new URLSearchParams(window.location.search).get("tip");
  return TIP_TESTS[requestedId] || Object.values(TIP_TESTS)[0];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localDate(value = new Date()) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function showPracticeToast(message) {
  practiceEls.toast.textContent = message;
  practiceEls.toast.classList.add("is-visible");
  clearTimeout(toastHandle);
  toastHandle = setTimeout(() => practiceEls.toast.classList.remove("is-visible"), 2600);
}

function renderProfileIdentity() {
  practiceEls.profileName.textContent = practiceState.profile?.displayName?.trim() || "本地学习者";
  practiceEls.profileId.textContent = practiceState.profile?.id || "IELTS-LOCAL";
}

function renderTestList() {
  practiceEls.testList.innerHTML = Object.values(TIP_TESTS).map((test, index) => `
    <a href="./practice.html?tip=${encodeURIComponent(test.id)}" class="${test.id === activeTest.id ? "is-active" : ""}" ${test.id === activeTest.id ? 'aria-current="page"' : ""}>
      <b>${String(index + 1).padStart(2, "0")}</b>
      <span>${PRACTICE_CATEGORIES[test.category]} · ${escapeHTML(test.title)}</span>
    </a>
  `).join("");
}

function renderActiveTest() {
  document.title = `${activeTest.title}｜学习小技巧测试`;
  practiceEls.eyebrow.textContent = activeTest.eyebrow;
  practiceEls.title.textContent = activeTest.title;
  practiceEls.intro.textContent = activeTest.intro;
  practiceEls.minutes.textContent = activeTest.minutes;
  practiceEls.materialHeading.textContent = activeTest.materialLabel;
  practiceEls.material.textContent = activeTest.material;
  practiceEls.question.textContent = activeTest.question;
  practiceEls.answer.placeholder = activeTest.placeholder || "在这里作答";
  practiceEls.answer.value = "";
  practiceEls.confidence.value = "2";

  const isChoice = activeTest.mode === "choice";
  practiceEls.choiceAnswers.hidden = !isChoice;
  practiceEls.textAnswerWrap.hidden = isChoice;
  practiceEls.choiceAnswers.innerHTML = isChoice
    ? activeTest.options.map((option) => `
        <label>
          <input type="radio" name="practiceChoice" value="${escapeHTML(option.value)}" />
          <span>${escapeHTML(option.label)}</span>
        </label>
      `).join("")
    : "";

  practiceEls.playAudio.hidden = !activeTest.audioText;
  practiceEls.playAudio.disabled = false;
  practiceEls.playAudio.innerHTML = '<span aria-hidden="true">▶</span> 只播放一次';

  const hasTimer = activeTest.mode === "speaking";
  practiceEls.speakingTimer.hidden = !hasTimer;
  resetTimer();

  practiceEls.externalLink.hidden = !activeTest.externalUrl;
  if (activeTest.externalUrl) {
    practiceEls.externalLink.href = activeTest.externalUrl;
    practiceEls.externalLink.innerHTML = `${escapeHTML(activeTest.externalLabel || "打开对应线上项目")} <span aria-hidden="true">↗</span>`;
  }

  practiceEls.referencePanel.hidden = true;
  practiceEls.referenceList.innerHTML = activeTest.reference.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  renderAttempts();
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replaceAll(/\s+/g, " ").replaceAll(/[，。！？,.!?]/g, "");
}

function evaluateAnswer(answer) {
  if (!activeTest.correctAnswers?.length) return null;
  const normalized = normalizeAnswer(answer);
  return activeTest.correctAnswers.some((item) => {
    const expected = normalizeAnswer(item);
    return normalized === expected || (activeTest.mode === "text" && normalized.includes(expected));
  });
}

function getCurrentAnswer() {
  if (activeTest.mode === "choice") {
    return document.querySelector('input[name="practiceChoice"]:checked')?.value || "";
  }
  return practiceEls.answer.value.trim();
}

function renderAttempts() {
  const attempts = practiceState.tipAttempts
    .filter((attempt) => attempt.tipId === activeTest.id)
    .slice(0, 6);
  practiceEls.attemptCount.textContent = `${attempts.length} 次`;
  if (!attempts.length) {
    practiceEls.attemptList.innerHTML = '<div class="attempt-empty">还没有记录。完成并保存一次练习后，这里会显示结果。</div>';
    return;
  }

  practiceEls.attemptList.innerHTML = attempts.map((attempt) => {
    const result = attempt.correct === true ? "答对" : attempt.correct === false ? "待改" : `自评 ${attempt.confidence}/3`;
    return `
      <article class="attempt-item">
        <b>${escapeHTML(attempt.date)}</b>
        <p title="${escapeHTML(attempt.answer)}">${escapeHTML(attempt.answer)}</p>
        <span class="attempt-result${attempt.correct === true ? " is-correct" : ""}">${result}</span>
      </article>
    `;
  }).join("");
}

function saveAttempt(event) {
  event.preventDefault();
  const answer = getCurrentAnswer();
  if (!answer) {
    showPracticeToast("请先完成题目或写下练后记录。");
    return;
  }

  const attempt = {
    id: `attempt-${Date.now()}`,
    tipId: activeTest.id,
    title: activeTest.title,
    date: localDate(),
    createdAt: new Date().toISOString(),
    answer,
    confidence: Number(practiceEls.confidence.value),
    correct: evaluateAnswer(answer),
  };
  practiceState.tipAttempts.unshift(attempt);
  practiceState.triedTips[activeTest.id] = localDate();
  savePracticeState();
  renderAttempts();
  practiceEls.referencePanel.hidden = false;
  showPracticeToast(attempt.correct === true ? "回答正确，记录已保存。" : "练习已保存，请对照检查要点复盘。" );
}

function playAudioOnce() {
  if (!activeTest.audioText || !("speechSynthesis" in window)) {
    showPracticeToast("当前浏览器不支持语音播放，请查看检查要点中的原句。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(activeTest.audioText);
  utterance.lang = "en-GB";
  utterance.rate = 0.92;
  practiceEls.playAudio.disabled = true;
  practiceEls.playAudio.textContent = "正在播放…";
  utterance.onend = () => {
    practiceEls.playAudio.innerHTML = '<span aria-hidden="true">✓</span> 已播放一次';
  };
  utterance.onerror = () => {
    practiceEls.playAudio.disabled = false;
    practiceEls.playAudio.innerHTML = '<span aria-hidden="true">▶</span> 重新尝试播放';
  };
  window.speechSynthesis.speak(utterance);
}

function resetTimer() {
  clearInterval(timerHandle);
  timerHandle = null;
  timerRemaining = activeTest.timerSeconds || 60;
  practiceEls.timerValue.textContent = timerRemaining;
  practiceEls.timerButton.textContent = "开始计时";
  practiceEls.timerButton.disabled = false;
}

function toggleTimer() {
  if (timerHandle) {
    resetTimer();
    return;
  }
  timerRemaining = activeTest.timerSeconds || 60;
  practiceEls.timerValue.textContent = timerRemaining;
  practiceEls.timerButton.textContent = "重新开始";
  timerHandle = setInterval(() => {
    timerRemaining -= 1;
    practiceEls.timerValue.textContent = Math.max(timerRemaining, 0);
    if (timerRemaining <= 0) {
      clearInterval(timerHandle);
      timerHandle = null;
      practiceEls.timerButton.textContent = "再练一次";
      showPracticeToast("计时结束。请写下一个停顿、重复或可补充的细节。");
    }
  }, 1000);
}

async function copyDirectLink() {
  const directUrl = new URL("./practice.html", window.location.href);
  directUrl.searchParams.set("tip", activeTest.id);
  try {
    await navigator.clipboard.writeText(directUrl.href);
    showPracticeToast("本题网址已复制。");
  } catch {
    window.prompt("复制下面的网址：", directUrl.href);
  }
}

practiceEls.form.addEventListener("submit", saveAttempt);
practiceEls.playAudio.addEventListener("click", playAudioOnce);
practiceEls.timerButton.addEventListener("click", toggleTimer);
practiceEls.copyLink.addEventListener("click", copyDirectLink);
practiceEls.showReference.addEventListener("click", () => {
  practiceEls.referencePanel.hidden = !practiceEls.referencePanel.hidden;
  practiceEls.showReference.textContent = practiceEls.referencePanel.hidden ? "查看检查要点" : "收起检查要点";
});

renderProfileIdentity();
renderTestList();
renderActiveTest();
