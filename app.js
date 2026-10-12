const STORAGE_KEY = "ielts-eight-week-planner-v1";
const VERIFIED_DATE = "2026-10-12";

const SUBJECTS = {
  vocabulary: { label: "词汇", en: "VOCAB", color: "#719d12" },
  listening: { label: "听力", en: "LISTEN", color: "#2251e6" },
  speaking: { label: "口语", en: "SPEAK", color: "#f05432" },
  writing: { label: "写作", en: "WRITE", color: "#7d43c2" },
  practice: { label: "周验收", en: "CHECK", color: "#272a24" },
};

const COURSES = {
  speakingCore: {
    id: "speakingCore",
    subject: "speaking",
    title: "15节课｜6小时雅思口语速成",
    creator: "莱斯莉的英语频道",
    url: "https://www.bilibili.com/video/BV1dg4y1y7EG/",
    bv: "BV1dg4y1y7EG",
    scope: "15 节 · Part 1–3",
    reason: "从评分标准到 Part 1、Part 2、Part 3，结构完整，适合八周主线学习。",
  },
  speakingPart2: {
    id: "speakingPart2",
    subject: "speaking",
    title: "Part 2 素材｜拼图游戏",
    creator: "Naya英语笔记",
    url: "https://www.bilibili.com/video/BV1DhotYyEV8/",
    bv: "BV1DhotYyEV8",
    scope: "短素材 · 影子跟读",
    reason: "短而密集，适合用“听—跟读—脱稿复述”训练语音与叙事节奏。",
  },
  speakingPart3: {
    id: "speakingPart3",
    subject: "speaking",
    title: "Part 3 素材｜独立决策",
    creator: "Naya英语笔记",
    url: "https://www.bilibili.com/video/BV19fkHYcEt1/",
    bv: "BV19fkHYcEt1",
    scope: "35 条系列素材",
    reason: "可快速积累观点展开方式，适合每日 10 分钟影子跟读和复述。",
  },
  listeningCore: {
    id: "listeningCore",
    subject: "listening",
    title: "全10集｜雅思听力保姆级课程",
    creator: "Sun老师教雅思",
    url: "https://www.bilibili.com/video/BV1Um4y177Zy/",
    bv: "BV1Um4y177Zy",
    scope: "11 P · 全题型",
    reason: "覆盖填空、单选、多选、配对、地图和 Part 4，适合按题型逐一攻克。",
  },
  listeningMockClassic: {
    id: "listeningMockClassic",
    subject: "listening",
    title: "手把手听力模考｜审题到复盘",
    creator: "天狗吃月亮128",
    url: "https://www.bilibili.com/video/BV1jx411M7j9/",
    bv: "BV1jx411M7j9",
    scope: "模考示范",
    reason: "完整展示审题、定位和时间分配，适合第一次建立模考流程。",
  },
  listeningMock2026: {
    id: "listeningMock2026",
    subject: "listening",
    title: "2026 听力完整模考｜40题",
    creator: "IELTS雅思听力真题模拟",
    url: "https://www.bilibili.com/video/BV1GKt76gEEf/",
    bv: "BV1GKt76gEEf",
    scope: "4 Sections · 40 题",
    reason: "一套完整计时练习，适合冲刺周验证真实节奏和稳定性。",
  },
  vocabularyCore: {
    id: "vocabularyCore",
    subject: "vocabulary",
    title: "21天学完6600雅思单词",
    creator: "lexi学姐教雅思",
    url: "https://www.bilibili.com/video/BV1yyGy6PELM/",
    bv: "BV1yyGy6PELM",
    scope: "26 P · 22 主题",
    reason: "按主题重组词汇，带词根、例句和频率标签；比随机背词更容易形成语义网络。",
  },
  writingCore: {
    id: "writingCore",
    subject: "writing",
    title: "14节课｜8小时雅思写作全套课",
    creator: "lexi学姐教雅思",
    url: "https://www.bilibili.com/video/BV1gtV8zXEvT/",
    bv: "BV1gtV8zXEvT",
    scope: "17 P · Task 1 + Task 2",
    reason: "覆盖小作文六类图表及大作文常见题型，适合先搭完整框架再限时输出。",
  },
  writingTask1: {
    id: "writingTask1",
    subject: "writing",
    title: "静态柱状图 7+ 写作拆解",
    creator: "Yuqi脑丝爱写作",
    url: "https://www.bilibili.com/video/BV1z7421o7fu/",
    bv: "BV1z7421o7fu",
    scope: "23 分钟 · Task 1",
    reason: "把信息筛选、概述段、对比和表达逐步拆开，适合补强静态图。",
  },
  writingTask2: {
    id: "writingTask2",
    subject: "writing",
    title: "经典大作文25题串讲",
    creator: "雅思老师 Omar",
    url: "https://www.bilibili.com/video/BV1qf4y1H7EH/",
    bv: "BV1qf4y1H7EH",
    scope: "25 题 · Task 2",
    reason: "用经典题训练审题、论点和段落推进，适合基础课后的专题迁移。",
  },
};

const WEEKS = [
  {
    number: 1,
    title: "建立底线",
    phase: "BASELINE",
    goal: "理解四科评分逻辑，建立错误日志；先留下真实基线，再开始提速。",
    acceptance: [
      "完成 1 段两分钟口语基线录音",
      "20 分钟写完 1 篇 Task 1 基线稿",
      "听力错题能归入拼写、定位或同义替换",
      "本周词汇抽测正确率达到 70%",
    ],
  },
  {
    number: 2,
    title: "题型拆解",
    phase: "MECHANICS",
    goal: "掌握 Part 1 扩展、听力 Part 2 和小作文常见图表的基本动作。",
    acceptance: [
      "连续回答 8 道 Part 1，每题 20–30 秒",
      "Part 2 单选/多选错题能写出干扰项原因",
      "四类小作文都能在 3 分钟内列出结构",
      "本周新词至少 20 个进入输出句",
    ],
  },
  {
    number: 3,
    title: "表达成型",
    phase: "STRUCTURE",
    goal: "把零散语言组织成完整答案：口语有故事线，写作有段落推进。",
    acceptance: [
      "完成 1 个两分钟 Part 2 且中断少于 3 次",
      "地图/配对题定位正确率达到 70%",
      "能写出有明确中心句的 Task 2 主体段",
      "教育与语言主题词汇可脱稿复述",
    ],
  },
  {
    number: 4,
    title: "中段整合",
    phase: "MIDPOINT",
    goal: "把技巧放入半套或整套任务，第一次用计时结果检验稳定性。",
    acceptance: [
      "完成一次正式计时听力模考",
      "Part 3 事实题能给出原因与例子",
      "40 分钟完成 1 篇优缺点类大作文",
      "整理前三周高频错误 Top 5",
    ],
  },
  {
    number: 5,
    title: "复杂题突破",
    phase: "COMPLEXITY",
    goal: "处理信息密度更高的 Part 3/4，并让观点表达从模板走向清晰论证。",
    acceptance: [
      "Part 4 填空拼写错误不超过 3 个",
      "Part 3 观点题能完成“观点—原因—例子”",
      "讨论类与观点类大作文不混淆立场",
      "法律/政府词汇能各造 5 个有效句",
    ],
  },
  {
    number: 6,
    title: "全流程输出",
    phase: "FULL FLOW",
    goal: "结束四科主线课，开始整场输出；把反馈写进下一次练习。",
    acceptance: [
      "独立完成 11–14 分钟口语模拟",
      "听力四个 Section 都有固定复盘模板",
      "40 分钟完成 Task 2 并留 3 分钟检查",
      "词汇复述不依赖中文词表",
    ],
  },
  {
    number: 7,
    title: "专项补洞",
    phase: "REPAIR",
    goal: "只针对数据暴露的弱点练习，以重做和改写代替继续堆新课。",
    acceptance: [
      "最弱听力题型正确率提高至少 10%",
      "重录 3 个旧口语答案且明显更流畅",
      "重写 1 篇旧作文并标注所有改动",
      "完成动物、植物、场所主题抽测",
    ],
  },
  {
    number: 8,
    title: "考场化",
    phase: "SIMULATION",
    goal: "压缩新输入，用两次完整模拟固定考试节奏，并写好考前清单。",
    acceptance: [
      "完成 2 次分时段完整模拟",
      "口语能在陌生题下 3 秒内开始回答",
      "写作大小作文在 60 分钟内完成",
      "形成考前 72 小时个人检查清单",
    ],
  },
];

const TASKS = [
  task("w1-vocab", 1, 0, "vocabulary", "课程导学 + 时间日期 + 饮食健康", "完成工具设置；从课程词汇中挑 20 个词造句。", 105, "vocabularyCore", 1),
  task("w1-listen", 1, 1, "listening", "听力导学 + Part 1 填空题", "做课后练习；建立“拼写 / 定位 / 语音”错因标签。", 70, "listeningCore", 1),
  task("w1-speak", 1, 2, "speaking", "考试流程 + 四项评分标准", "录一段 2 分钟基线回答，不暂停、不重录。", 105, "speakingCore", 1),
  task("w1-write", 1, 3, "writing", "小作文导学 + 动态图（上 / 下）", "20 分钟完成 1 篇动态折线图基线稿。", 120, "writingCore", 1),
  task("w1-check", 1, 5, "practice", "周验收｜保存第一版能力快照", "抽测 80 词 + 口语录音 + 小作文；写下三项最明显短板。", 100, "speakingCore", 1, false),

  task("w2-vocab", 2, 0, "vocabulary", "身心健康 + 社会角色 + 行为动作", "每章提炼 8 个主动词汇，口头讲一个健康习惯。", 120, "vocabularyCore", 5),
  task("w2-listen", 2, 1, "listening", "Part 2 单选题 + 多选题", "每个干扰项写一句“为什么错”。", 70, "listeningCore", 3),
  task("w2-speak", 2, 2, "speaking", "Part 1 回应问题 + 拓展答案", "完成 8 题录音，每题 20–30 秒。", 65, "speakingCore", 5),
  task("w2-write", 2, 3, "writing", "静态图 + 混合图 + 流程图 + 地图", "每类题用 3 分钟列出概述与两段分组。", 135, "writingCore", 4),
  task("w2-check", 2, 5, "practice", "周验收｜一次小作文改写", "选周一至周四最差输出，按反馈完整重做一次。", 90, "writingTask1", null, false),

  task("w3-vocab", 3, 0, "vocabulary", "语言演化 + 学校教育（上 / 下）", "用 12 个新词完成 90 秒“教育”观点复述。", 145, "vocabularyCore", 8),
  task("w3-listen", 3, 1, "listening", "Part 2 配对题 + 地图题", "画定位词路线；同义替换至少整理 12 组。", 65, "listeningCore", 5),
  task("w3-speak", 3, 2, "speaking", "Part 2 人物 / 地点 / 物品 / 事件", "四类各列一张故事卡，并完整讲 1 题。", 125, "speakingCore", 7),
  task("w3-write", 3, 3, "writing", "大作文导学 + 任务回应 + 连贯衔接", "完成 1 个开头段和 2 个带中心句的主体段。", 70, "writingCore", 8),
  task("w3-check", 3, 5, "practice", "周验收｜半套输出串联", "Section 2 计时练习 + Part 2 录音 + 主体段改写。", 110, "listeningCore", 5, false),

  task("w4-vocab", 4, 0, "vocabulary", "科技发明 + 文化历史 + 娱乐运动", "每主题做 10 张双向卡片，并脱稿解释 6 个词。", 120, "vocabularyCore", 11),
  task("w4-listen", 4, 1, "listening", "Part 3 单选题 + 多选题", "做完立即复盘“谁说了什么 / 态度如何变化”。", 70, "listeningCore", 7),
  task("w4-speak", 4, 2, "speaking", "Part 3 引入 + 事实类（上）", "练 6 题“结论—原因—例子”，每题 45 秒。", 55, "speakingCore", 11),
  task("w4-write", 4, 3, "writing", "词汇语法 + 审题 + 优缺点类", "40 分钟完成 1 篇优缺点类作文。", 115, "writingCore", 11),
  task("w4-check", 4, 5, "practice", "中期模考｜第一次完整听力流程", "只播放一次；统计分数、题型正确率和失分原因。", 95, "listeningMockClassic", null, false),

  task("w5-vocab", 5, 0, "vocabulary", "时尚潮流 + 国家政府 + 法律法规", "选 15 个词组成两套社会议题观点链。", 115, "vocabularyCore", 14),
  task("w5-listen", 5, 1, "listening", "Part 3 配对题 + Part 4 填空（1）", "重点记录信号词与长句中的答案边界。", 70, "listeningCore", 9),
  task("w5-speak", 5, 2, "speaking", "Part 3 事实类（中 / 下）+ 观点类", "完成 8 道题；每题至少包含一个具体例子。", 85, "speakingCore", 13),
  task("w5-write", 5, 3, "writing", "观点类 + 讨论类大作文", "各做 1 次 8 分钟审题列纲，完成其中 1 篇。", 115, "writingCore", 14),
  task("w5-check", 5, 5, "practice", "周验收｜复杂题型重做", "重做本周最差的听力 Section 与口语 Part 3 录音。", 100, "speakingCore", 13, false),

  task("w6-vocab", 6, 0, "vocabulary", "社会经济 + 冲突竞争 + 交通旅行", "用新词分别完成一段写作论证和一段口语回答。", 125, "vocabularyCore", 17),
  task("w6-listen", 6, 1, "listening", "Part 4 填空（2）+ 全课错题回看", "整理一页个人听力检查清单。", 75, "listeningCore", 11),
  task("w6-speak", 6, 2, "speaking", "Naya Part 2 / Part 3 影子跟读", "每条做 3 遍：跟读、遮字幕复述、换成自己的例子。", 55, "speakingPart2", null),
  task("w6-write", 6, 3, "writing", "报告类 + 混合类大作文", "完成两次列纲，并限时写完其中 1 篇。", 85, "writingCore", 16),
  task("w6-check", 6, 5, "practice", "全流程验收｜口语模拟 + Task 2", "口语 11–14 分钟不停机；Task 2 严格限时 40 分钟。", 105, "speakingPart3", null, false),

  task("w7-vocab", 7, 0, "vocabulary", "建筑场所 + 物质材料 + 植物 + 动物", "四主题混合抽测；错词当日造句、次日再测。", 140, "vocabularyCore", 20),
  task("w7-listen", 7, 1, "listening", "专项补洞｜完整计时模考", "与第 4 周比较题型正确率，选择唯一弱项重练。", 65, "listeningMockClassic", null),
  task("w7-speak", 7, 2, "speaking", "重录 3 个旧答案", "保留原录音，对比停顿、重复和展开深度。", 65, "speakingPart3", null),
  task("w7-write", 7, 3, "writing", "静态图补强 + 大作文 25 题前半", "重写 1 篇旧作文，逐句标注为什么改。", 105, "writingTask1", null),
  task("w7-check", 7, 5, "practice", "弱项日｜只重做，不开新课", "从错误日志中选 Top 3，各完成一次闭卷重做。", 120, "writingTask2", null, false),

  task("w8-vocab", 8, 0, "vocabulary", "自然地理（上 / 下）+ 太空探索 + 总复习", "完成 22 主题终测，保留 50 个考前活跃词。", 135, "vocabularyCore", 24),
  task("w8-listen", 8, 1, "listening", "2026 完整听力模考｜40 题", "正式计时、只播放一次；复盘控制在 60 分钟内。", 65, "listeningMock2026", null),
  task("w8-speak", 8, 2, "speaking", "最终口语模拟｜Part 1–3", "陌生题 3 秒内开口；结束后只改最影响分数的 3 点。", 60, "speakingCore", 1),
  task("w8-write", 8, 3, "writing", "25 题后半 + 大小作文套写", "60 分钟完成 Task 1 + Task 2，留 5 分钟检查。", 120, "writingTask2", null),
  task("w8-check", 8, 5, "practice", "终局验收｜完整模拟与考前清单", "汇总四科趋势，写出考前 72 小时安排和 D+30 复习日。", 150, "listeningMock2026", null, false),
];

const REVIEW_STAGES = [
  {
    days: 0,
    afterMinutes: 20,
    code: "T+20M",
    name: "即时提取",
    minutes: 8,
    method: "关掉视频，写出 3 个要点、2 个例子和 1 个疑问；只回看没想起来的部分。",
  },
  { days: 1, code: "D+1", name: "速记", minutes: 10, method: "关掉视频写出 5 个关键词，只回看遗漏处。" },
  { days: 3, code: "D+3", name: "复述", minutes: 12, method: "用自己的话讲一遍方法，并完成 3 道口头自测。" },
  { days: 7, code: "D+7", name: "小测", minutes: 18, method: "闭卷完成一个同类小题，按原课标准自评。" },
  { days: 14, code: "D+14", name: "迁移", minutes: 22, method: "换一个陌生题型或主题，强制使用本课方法。" },
  { days: 30, code: "D+30", name: "归档", minutes: 25, method: "再测一次；掌握则归档，仍错则加入弱项清单。" },
];

function task(id, week, day, subject, title, output, duration, course, part, reviewable = true) {
  return { id, week, day, subject, title, output, duration, course, part, reviewable };
}

function getDefaultState() {
  return {
    startDate: toISO(startOfToday()),
    completedTasks: {},
    completedTaskTimes: {},
    completedReviews: {},
    selectedWeek: 1,
    view: "today",
    reviewFilter: "due",
    libraryFilter: "all",
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return getDefaultState();
    return {
      ...getDefaultState(),
      ...saved,
      completedTasks: saved.completedTasks || {},
      completedTaskTimes: saved.completedTaskTimes || {},
      completedReviews: saved.completedReviews || {},
    };
  } catch {
    return getDefaultState();
  }
}

let state = loadState();
let resetArmed = false;
let resetTimer = null;
let toastTimer = null;

const els = {
  startDate: document.querySelector("#startDate"),
  headerStatus: document.querySelector("#headerStatus"),
  progressFraction: document.querySelector("#progressFraction"),
  progressPercent: document.querySelector("#progressPercent"),
  progressCircle: document.querySelector("#progressCircle"),
  studyHours: document.querySelector("#studyHours"),
  reviewCount: document.querySelector("#reviewCount"),
  streakCount: document.querySelector("#streakCount"),
  todayDate: document.querySelector("#todayDate"),
  todayWeekBadge: document.querySelector("#todayWeekBadge"),
  focusBrief: document.querySelector("#focusBrief"),
  todayTasks: document.querySelector("#todayTasks"),
  dueReviewNumber: document.querySelector("#dueReviewNumber"),
  weekRail: document.querySelector("#weekRail"),
  weekDetail: document.querySelector("#weekDetail"),
  reviewList: document.querySelector("#reviewList"),
  reviewSummary: document.querySelector("#reviewSummary"),
  libraryFilters: document.querySelector("#libraryFilters"),
  courseGrid: document.querySelector("#courseGrid"),
  resetProgress: document.querySelector("#resetProgress"),
  toast: document.querySelector("#toast"),
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
}

function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}

function toISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

function formatDate(date, options = { month: "numeric", day: "numeric", weekday: "short" }) {
  return new Intl.DateTimeFormat("zh-CN", options).format(date);
}

function formatDateRange(start, end) {
  return `${formatDate(start, { month: "2-digit", day: "2-digit" })} — ${formatDate(end, {
    month: "2-digit",
    day: "2-digit",
  })}`;
}

function getTaskDate(item) {
  return addDays(parseISO(state.startDate), (item.week - 1) * 7 + item.day);
}

function getCourseUrl(item) {
  const course = COURSES[item.course];
  if (!course) return "";
  return item.part ? `${course.url}?p=${item.part}` : course.url;
}

function getReviewEvents() {
  return TASKS.filter((item) => item.reviewable).flatMap((item) =>
    REVIEW_STAGES.map((stage) => {
      const completionDate = state.completedTasks[item.id];
      const scheduledBase = completionDate ? parseISO(completionDate) : getTaskDate(item);
      const storedTime = state.completedTaskTimes[item.id];
      const completedAt = storedTime && !Number.isNaN(Date.parse(storedTime))
        ? new Date(storedTime)
        : scheduledBase;
      const date = stage.afterMinutes
        ? addMinutes(completedAt, stage.afterMinutes)
        : addDays(scheduledBase, stage.days);
      const id = `${item.id}-review-${stage.days}`;
      return {
        id,
        task: item,
        stage,
        date,
        unlocked: Boolean(state.completedTasks[item.id]),
        done: Boolean(state.completedReviews[id]),
      };
    }),
  );
}

function isReviewDue(event, now = new Date()) {
  if (event.stage.afterMinutes) return event.date <= now;
  return event.date <= startOfToday();
}

function getPlanWeek(date = startOfToday()) {
  const delta = daysBetween(parseISO(state.startDate), date);
  if (delta < 0) return 0;
  if (delta >= 56) return 9;
  return Math.floor(delta / 7) + 1;
}

function getStreak() {
  const completionDates = [
    ...Object.values(state.completedTasks),
    ...Object.values(state.completedReviews),
  ].filter((value) => /^\d{4}-\d{2}-\d{2}$/.test(value));
  if (!completionDates.length) return 0;

  const unique = new Set(completionDates);
  let cursor = startOfToday();
  if (!unique.has(toISO(cursor))) cursor = addDays(cursor, -1);

  let streak = 0;
  while (unique.has(toISO(cursor))) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function subjectChip(subject) {
  const config = SUBJECTS[subject];
  return `<span class="subject-chip" data-subject="${subject}">${config.en} · ${config.label}</span>`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2600);
}

function renderProgress() {
  const completed = TASKS.filter((item) => state.completedTasks[item.id]).length;
  const percent = Math.round((completed / TASKS.length) * 100);
  const circumference = 421;
  const completedMinutes = TASKS.filter((item) => state.completedTasks[item.id]).reduce(
    (sum, item) => sum + item.duration,
    0,
  );

  els.progressFraction.textContent = `${completed} / ${TASKS.length} TASKS`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressCircle.style.strokeDashoffset = String(circumference - (circumference * percent) / 100);
  els.studyHours.textContent = (completedMinutes / 60).toFixed(1);
  els.reviewCount.textContent = Object.keys(state.completedReviews).length;
  els.streakCount.textContent = getStreak();
}

function renderHeaderStatus() {
  const week = getPlanWeek();
  if (week === 0) {
    const days = daysBetween(startOfToday(), parseISO(state.startDate));
    els.headerStatus.textContent = `${days} 天后开始`;
  } else if (week === 9) {
    els.headerStatus.textContent = "8周计划已结束";
  } else {
    els.headerStatus.textContent = `第 ${week} 周进行中`;
  }
}

function taskCard(item, preview = false) {
  const complete = Boolean(state.completedTasks[item.id]);
  const course = COURSES[item.course];
  const taskDate = getTaskDate(item);
  return `
    <article class="task-card${complete ? " is-complete" : ""}">
      <button
        class="task-check"
        type="button"
        data-task-id="${item.id}"
        aria-label="${complete ? "取消完成" : "标记完成"}：${item.title}"
        aria-pressed="${complete}"
      >✓</button>
      <div class="task-body">
        <div class="task-meta">
          ${subjectChip(item.subject)}
          <span>${formatDate(taskDate, { month: "2-digit", day: "2-digit", weekday: "short" })}</span>
          <span>·</span>
          <span>${item.duration} MIN</span>
          ${preview ? "<span>· 下一项</span>" : ""}
        </div>
        <h3 class="task-title">${item.title}</h3>
        <p class="task-output">产出：${item.output}</p>
      </div>
      <div class="task-actions">
        <a class="button button-light button-compact course-link" href="${getCourseUrl(item)}" target="_blank" rel="noopener noreferrer">
          <span class="link-icon" aria-hidden="true">B</span>
          ${course ? "去 B 站" : "查看"}
        </a>
      </div>
    </article>
  `;
}

function renderToday() {
  const today = startOfToday();
  const now = new Date();
  const todayISO = toISO(today);
  const planWeek = getPlanWeek(today);
  const displayWeek = planWeek >= 1 && planWeek <= 8 ? planWeek : planWeek === 0 ? 1 : 8;
  const week = WEEKS[displayWeek - 1];
  const reviews = getReviewEvents();
  const dueReviews = reviews.filter((item) => item.unlocked && !item.done && isReviewDue(item, now));

  els.todayDate.textContent = formatDate(today, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).toUpperCase();
  els.todayWeekBadge.textContent = planWeek === 0 ? "尚未开始" : planWeek === 9 ? "计划已结束" : `WEEK ${String(planWeek).padStart(2, "0")}`;
  els.focusBrief.dataset.week = String(displayWeek).padStart(2, "0");
  els.focusBrief.innerHTML = `
    <span>${week.phase} · WEEK ${String(displayWeek).padStart(2, "0")}</span>
    <h3>${week.title}</h3>
    <p>${week.goal}</p>
  `;
  els.dueReviewNumber.textContent = dueReviews.length;

  let items = TASKS.filter((item) => toISO(getTaskDate(item)) === todayISO);
  let preview = false;
  if (!items.length) {
    items = TASKS.filter((item) => !state.completedTasks[item.id] && getTaskDate(item) > today)
      .sort((a, b) => getTaskDate(a) - getTaskDate(b))
      .slice(0, 2);
    preview = true;
  }
  if (!items.length) {
    items = TASKS.filter((item) => !state.completedTasks[item.id]).slice(0, 2);
  }

  if (items.length) {
    els.todayTasks.innerHTML = items.map((item) => taskCard(item, preview)).join("");
  } else {
    els.todayTasks.innerHTML = `
      <div class="empty-state">
        <strong>全部 40 项周任务都已完成</strong>
        <p>继续处理 D+14 和 D+30 复习节点，让成绩稳定下来。</p>
      </div>
    `;
  }
}

function renderWeekRail() {
  els.weekRail.innerHTML = WEEKS.map((week) => {
    const active = state.selectedWeek === week.number;
    return `
      <button
        class="week-tab${active ? " is-active" : ""}"
        type="button"
        role="tab"
        aria-selected="${active}"
        data-week="${week.number}"
      >
        <strong>W${String(week.number).padStart(2, "0")}</strong>
        <small>${week.title}</small>
      </button>
    `;
  }).join("");
}

function renderWeekDetail() {
  const week = WEEKS[state.selectedWeek - 1];
  const items = TASKS.filter((item) => item.week === state.selectedWeek);
  const completed = items.filter((item) => state.completedTasks[item.id]).length;
  const percent = Math.round((completed / items.length) * 100);
  const weekStart = addDays(parseISO(state.startDate), (state.selectedWeek - 1) * 7);
  const weekEnd = addDays(weekStart, 6);

  els.weekDetail.innerHTML = `
    <aside class="week-brief">
      <span class="week-brief-index">${week.phase} / WEEK ${String(week.number).padStart(2, "0")}</span>
      <h3>${week.title}</h3>
      <p class="week-goal">${week.goal}</p>
      <div class="week-progress-wrap">
        <div class="week-progress-label">
          <span>本周完成度</span>
          <span>${completed} / ${items.length}</span>
        </div>
        <div class="week-progress-track" aria-label="本周完成度 ${percent}%">
          <div class="week-progress-value" style="width: ${percent}%"></div>
        </div>
      </div>
      <div class="acceptance">
        <h4>WEEKLY ACCEPTANCE / 本周验收</h4>
        <ul>${week.acceptance.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </aside>
    <div class="week-schedule">
      <div class="week-schedule-heading">
        <h4>刷课与输出安排</h4>
        <span class="week-date-range">${formatDateRange(weekStart, weekEnd)}</span>
      </div>
      <div class="schedule-list">
        ${items.map(scheduleRow).join("")}
      </div>
    </div>
  `;
}

function scheduleRow(item) {
  const date = getTaskDate(item);
  const complete = Boolean(state.completedTasks[item.id]);
  const course = COURSES[item.course];
  return `
    <article class="schedule-row${complete ? " is-complete" : ""}">
      <div class="schedule-day">
        <strong>${formatDate(date, { weekday: "short" })}</strong>
        <span>${formatDate(date, { month: "2-digit", day: "2-digit" })}</span>
      </div>
      <button
        class="task-check"
        type="button"
        data-task-id="${item.id}"
        aria-label="${complete ? "取消完成" : "标记完成"}：${item.title}"
        aria-pressed="${complete}"
      >✓</button>
      <div class="schedule-copy">
        ${subjectChip(item.subject)}
        <h5>${item.title}</h5>
        <p>${item.duration} 分钟 · ${item.output}</p>
      </div>
      <a class="schedule-action" href="${getCourseUrl(item)}" target="_blank" rel="noopener noreferrer" aria-label="打开 ${course.title}">
        B站直达 <span aria-hidden="true">↗</span>
      </a>
    </article>
  `;
}

function renderPlan() {
  renderWeekRail();
  renderWeekDetail();
}

function reviewStatus(event, today, now) {
  if (event.done) return "已完成";
  if (!event.unlocked) return "待解锁";
  if (event.stage.afterMinutes) {
    if (event.date > now) {
      const minutesLeft = Math.max(1, Math.ceil((event.date - now) / 60000));
      return `${minutesLeft}分钟后`;
    }
    if (toISO(event.date) !== toISO(today)) return "已逾期";
    return "现在提取";
  }
  if (event.date < today) return "已逾期";
  if (toISO(event.date) === toISO(today)) return "今天";
  return "待复习";
}

function renderReviews() {
  const today = startOfToday();
  const now = new Date();
  let events = getReviewEvents().sort((a, b) => a.date - b.date || a.task.week - b.task.week);

  if (state.reviewFilter === "due") {
    events = events.filter((item) => item.unlocked && !item.done && isReviewDue(item, now));
  } else if (state.reviewFilter === "upcoming") {
    events = events.filter((item) => !item.done && !isReviewDue(item, now));
  } else if (state.reviewFilter === "done") {
    events = events.filter((item) => item.done);
  }

  document.querySelectorAll("[data-review-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.reviewFilter === state.reviewFilter);
  });
  els.reviewSummary.textContent = `${events.length} 个节点`;

  if (!events.length) {
    const copy = state.reviewFilter === "due"
      ? "今天没有待处理复习。完成一节核心课后，对应的记忆节点会自动解锁。"
      : "当前筛选下没有复习节点。";
    els.reviewList.innerHTML = `<div class="empty-state"><strong>队列清空</strong><p>${copy}</p></div>`;
    return;
  }

  els.reviewList.innerHTML = events.map((event) => {
    const status = reviewStatus(event, today, now);
    const due = isReviewDue(event, now);
    const canCheck = event.unlocked && (event.done || due);
    const overdue = event.unlocked && !event.done && toISO(event.date) !== toISO(today) && event.date < now;
    const day = String(event.date.getDate()).padStart(2, "0");
    const month = `${String(event.date.getMonth() + 1).padStart(2, "0")}月`;
    const time = new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(event.date);
    const datePrimary = event.stage.afterMinutes ? time : day;
    const dateSecondary = event.stage.afterMinutes
      ? `${month}${day}日 · 即时`
      : `${month} · ${formatDate(event.date, { weekday: "short" })}`;
    const course = COURSES[event.task.course];
    return `
      <article class="review-card${overdue ? " is-overdue" : ""}${event.done ? " is-done" : ""}">
        <div class="review-date">
          <strong>${datePrimary}</strong>
          <span>${dateSecondary}</span>
        </div>
        <div class="review-content">
          <div class="task-meta">
            ${subjectChip(event.task.subject)}
            <span>${event.stage.code} · ${event.stage.name}</span>
            <span>·</span>
            <span>${event.stage.minutes} MIN</span>
            <span>·</span>
            <span>${status}</span>
          </div>
          <h3>${event.task.title}</h3>
          <p>${event.stage.method}</p>
        </div>
        <div class="review-actions">
          <a class="button button-light button-compact" href="${getCourseUrl(event.task)}" target="_blank" rel="noopener noreferrer" aria-label="打开原课 ${course.title}">
            原课 ↗
          </a>
          <button
            class="button button-compact review-check ${event.done ? "button-light" : "button-orange"}"
            type="button"
            data-review-id="${event.id}"
            ${canCheck ? "" : "disabled"}
            aria-pressed="${event.done}"
            title="${!event.unlocked ? "先完成对应核心课" : !due && !event.done ? "到计划时间后开放打卡" : ""}"
          >${event.done ? "已完成" : !event.unlocked ? "未解锁" : due ? "打卡" : "待到点"}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderLibrary() {
  const filters = [
    ["all", "全部"],
    ["speaking", "口语"],
    ["listening", "听力"],
    ["vocabulary", "词汇"],
    ["writing", "写作"],
  ];
  els.libraryFilters.innerHTML = filters.map(([value, label]) => `
    <button class="library-filter${state.libraryFilter === value ? " is-active" : ""}" type="button" data-library-filter="${value}">${label}</button>
  `).join("");

  const courses = Object.values(COURSES).filter(
    (course) => state.libraryFilter === "all" || course.subject === state.libraryFilter,
  );
  els.courseGrid.innerHTML = courses.map((course) => `
    <article class="course-card" style="--course-color: ${SUBJECTS[course.subject].color}">
      <div class="course-card-top">
        ${subjectChip(course.subject)}
        <span class="verified-label">${VERIFIED_DATE} 已核验</span>
      </div>
      <h3>${course.title}</h3>
      <p class="course-creator">UP · ${course.creator}</p>
      <p class="course-reason">${course.reason}</p>
      <div class="course-card-footer">
        <div>
          <div class="bv-code">${course.bv}</div>
          <div class="bv-code">${course.scope}</div>
        </div>
        <a class="button button-dark button-compact course-link" href="${course.url}" target="_blank" rel="noopener noreferrer">
          <span class="link-icon" aria-hidden="true">B</span>
          打开公开课
        </a>
      </div>
    </article>
  `).join("");
}

function switchView(view, shouldScroll = true) {
  state.view = view;
  saveState();
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    const visible = panel.dataset.viewPanel === view;
    panel.hidden = !visible;
    panel.classList.toggle("is-visible", visible);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  if (view === "today") renderToday();
  if (view === "plan") renderPlan();
  if (view === "review") renderReviews();
  if (view === "library") renderLibrary();
  if (shouldScroll) document.querySelector(".content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleTask(id) {
  const item = TASKS.find((entry) => entry.id === id);
  if (!item) return;
  if (state.completedTasks[id]) {
    delete state.completedTasks[id];
    delete state.completedTaskTimes[id];
    getReviewEvents()
      .filter((event) => event.task.id === id)
      .forEach((event) => delete state.completedReviews[event.id]);
    showToast("已取消任务完成状态；对应复习打卡已同步清除。");
  } else {
    state.completedTasks[id] = toISO(startOfToday());
    state.completedTaskTimes[id] = new Date().toISOString();
    showToast(item.reviewable ? "任务完成，6 个复习节点已解锁；20 分钟后先做即时提取。" : "本周验收已完成。");
  }
  saveState();
  renderAll(false);
}

function toggleReview(id) {
  const event = getReviewEvents().find((entry) => entry.id === id);
  if (!event || !event.unlocked) return;
  if (state.completedReviews[id]) {
    delete state.completedReviews[id];
    showToast("已取消复习打卡。");
  } else {
    state.completedReviews[id] = toISO(startOfToday());
    showToast(`${event.stage.code} 复习完成，记忆链继续延长。`);
  }
  saveState();
  renderAll(false);
}

function renderAll(shouldScroll = false) {
  els.startDate.value = state.startDate;
  renderProgress();
  renderHeaderStatus();
  renderToday();
  renderPlan();
  renderReviews();
  renderLibrary();
  switchView(state.view, shouldScroll);
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    switchView(viewButton.dataset.view);
    return;
  }

  const switchButton = event.target.closest("[data-switch-view]");
  if (switchButton) {
    switchView(switchButton.dataset.switchView);
    return;
  }

  const taskButton = event.target.closest("[data-task-id]");
  if (taskButton) {
    toggleTask(taskButton.dataset.taskId);
    return;
  }

  const weekButton = event.target.closest("[data-week]");
  if (weekButton) {
    state.selectedWeek = Number(weekButton.dataset.week);
    saveState();
    renderPlan();
    return;
  }

  const reviewFilter = event.target.closest("[data-review-filter]");
  if (reviewFilter) {
    state.reviewFilter = reviewFilter.dataset.reviewFilter;
    saveState();
    renderReviews();
    return;
  }

  const reviewButton = event.target.closest("[data-review-id]");
  if (reviewButton) {
    toggleReview(reviewButton.dataset.reviewId);
    return;
  }

  const libraryFilter = event.target.closest("[data-library-filter]");
  if (libraryFilter) {
    state.libraryFilter = libraryFilter.dataset.libraryFilter;
    saveState();
    renderLibrary();
  }
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  switchView("today");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#jumpToday").addEventListener("click", () => switchView("today"));

els.startDate.addEventListener("change", () => {
  if (!els.startDate.value) return;
  state.startDate = els.startDate.value;
  saveState();
  renderAll(false);
  showToast("未完成任务已重排；已打卡课程继续按实际完成日复习。");
});

els.resetProgress.addEventListener("click", () => {
  if (!resetArmed) {
    resetArmed = true;
    els.resetProgress.textContent = "再按一次确认重置";
    showToast("再次点击“重置”会清除本浏览器中的全部打卡记录。");
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      resetArmed = false;
      els.resetProgress.textContent = "重置所有进度";
    }, 5000);
    return;
  }

  state = getDefaultState();
  resetArmed = false;
  clearTimeout(resetTimer);
  els.resetProgress.textContent = "重置所有进度";
  saveState();
  renderAll(false);
  showToast("所有打卡和日期设置已重置。");
});

renderAll(false);

setInterval(() => {
  renderToday();
  if (state.view === "review") renderReviews();
}, 60000);
