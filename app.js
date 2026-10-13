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

const TIP_CATEGORIES = {
  starter: { label: "入门", en: "START", color: "#f05432" },
  listening: { label: "听力", en: "LISTEN", color: "#2251e6" },
  reading: { label: "阅读", en: "READ", color: "#008c83" },
  speaking: { label: "口语", en: "SPEAK", color: "#e34b2c" },
  writing: { label: "写作", en: "WRITE", color: "#7d43c2" },
  vocabulary: { label: "词汇", en: "VOCAB", color: "#719d12" },
  review: { label: "复盘", en: "REVIEW", color: "#272a24" },
};

const TIP_SOURCES = {
  awesome: {
    name: "Awesome Open IELTS",
    repo: "xingkongliang/awesome-ielts",
    url: "https://github.com/xingkongliang/awesome-ielts",
    onlineUrl: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test",
    onlineLabel: "官方在线样题",
    note: "整理官方样题、评分标准与四科训练建议，强调限时练习、主动输出和按标准复盘。",
  },
  edyou: {
    name: "IELTS Vocabulary Toolkit",
    repo: "edyou25/IELTS",
    url: "https://github.com/edyou25/IELTS",
    onlineUrl: "https://ttsreader.com/player/",
    onlineLabel: "在线听写工具",
    note: "用乱序、双向回忆、听写、造句和正确率统计训练词汇，适合拆成每天的小练习。",
  },
  practice: {
    name: "IELTS Practice Tracker",
    repo: "sallowayma-git/IELTS-practice",
    url: "https://github.com/sallowayma-git/IELTS-practice",
    onlineUrl: "./practice.html?tip=four-box-error-log",
    onlineLabel: "本站原创错题复盘",
    note: "记录正确率、用时、连续练习和错因，帮助把“做了很多题”变成“知道错在哪里”。",
  },
  monitor: {
    name: "IELTS Monitor",
    repo: "Touch-Sun/ielts-monitor",
    url: "https://github.com/Touch-Sun/ielts-monitor",
    onlineUrl: "./practice.html?tip=ten-minute-focus",
    onlineLabel: "本站十分钟测试",
    note: "以周为单位跟踪学习内容与结果，启发了“小目标、每周检查、下一周只改一个问题”的做法。",
  },
  simulator: {
    name: "IELTS Speaking Simulator",
    repo: "hubeiqiao/IELTS-Speaking-Simulator",
    url: "https://github.com/hubeiqiao/IELTS-Speaking-Simulator",
    onlineUrl: "https://joespeaking.com/",
    onlineLabel: "Joe Speaking 在线版",
    note: "通过随机题目、录音和练后整理模拟口语考试，重点是先开口，再根据录音做一次有目标的重录。",
  },
  prompt: {
    name: "IELTS Prompt",
    repo: "BaixuanLi/IELTS-Prompt",
    url: "https://github.com/BaixuanLi/IELTS-Prompt",
    onlineUrl: "https://chatgpt.com/g/g-OtBE3SHAp-ielts-academic-writing-tutor",
    onlineLabel: "写作反馈 GPT",
    note: "按雅思写作与口语的评分维度组织反馈，启发了“四个问题自查”和四色改稿方法。",
  },
};

const STUDY_TIPS = [
  {
    id: "ten-minute-focus",
    category: "starter",
    title: "十分钟，只练一件事",
    summary: "时间少也能开始：把“学雅思”缩小成一个能数出来的动作。",
    minutes: 10,
    why: "“提高英语”太大，很容易拖延；一个小目标更容易完成，也更容易看见进步。",
    steps: [
      "写下一个小目标，例如“找出 3 个定位词”或“说满 60 秒”。",
      "计时 6 分钟，只做这一件事，中途不换题、不看手机。",
      "最后 4 分钟闭卷说出做法，再记下唯一一个卡点。",
    ],
    tryNow: "从今天的任务里挑一道题，把目标改写成“我要完成 ___ 个 ___”。",
    doneWhen: "计时结束时，你有一个看得见的结果和一条卡点记录。",
    source: "monitor",
  },
  {
    id: "four-score-questions",
    category: "writing",
    title: "评分标准变成四个问题",
    summary: "不用背复杂术语，写完后用四句人话检查文章。",
    minutes: 12,
    why: "知道考官看什么，修改时才不会只盯拼写，也不会漫无目的地重写整篇。",
    steps: [
      "内容：我有没有完整回答题目？",
      "顺序：读者能不能顺着我的段落看懂？",
      "语言：词够准确吗？句子有明显错误吗？",
    ],
    tryNow: "拿一段旧作文，在段尾分别写下“内容、顺序、词、句”四项各一个问题。",
    doneWhen: "你能圈出最需要先改的一项，并说清楚原因。",
    source: "prompt",
  },
  {
    id: "one-play-three-causes",
    category: "listening",
    title: "听力只听一遍，再分三种错",
    summary: "第一遍像考试，复盘时再判断自己究竟卡在哪一步。",
    minutes: 15,
    why: "“没听懂”常常混着不同问题；分清听音、理解和拼写，下一次才知道练什么。",
    steps: [
      "第一次完整播放，不暂停、不倒带，直接完成 5 道题。",
      "对答案后，只重听错题附近的一小段，找到正确答案出现的位置。",
      "给错题贴标签：没听见、听见没懂、会写但拼错。",
    ],
    tryNow: "找 5 道听力填空题，给每个错题画上耳朵、问号或铅笔符号。",
    doneWhen: "每道错题都有一个错因标签，并写下下一次的练法。",
    source: "awesome",
  },
  {
    id: "shadow-three-times",
    category: "listening",
    title: "一句话影子跟读三遍",
    summary: "跟在音频后面模仿，让耳朵、嘴巴和节奏一起工作。",
    minutes: 8,
    why: "短句反复模仿能帮助你听清连读和重音，也会让口语更顺。",
    steps: [
      "选一句 5–12 秒的音频，先看文本听一遍，划出重读词。",
      "第二遍慢半拍跟读，尽量复制停顿、连读和语气。",
      "关掉文本再跟一遍，最后独立说出整句。",
    ],
    tryNow: "从今天的听力材料中截一句，录下第三遍，再与原音比较一个不同点。",
    doneWhen: "你能不看文字说完整，并指出一个发音或节奏变化。",
    source: "awesome",
  },
  {
    id: "reading-twenty-minute-locate",
    category: "reading",
    title: "阅读 20 分钟定位法",
    summary: "先找题目关键词，再回文章找同义表达和证据句。",
    minutes: 20,
    why: "阅读不是从头逐字翻译；先定位能把时间留给真正需要判断的句子。",
    steps: [
      "用 2 分钟看标题和题目，圈出人名、数字、地点和核心名词。",
      "用 13 分钟扫段落，找关键词的同义说法，并在证据句旁写题号。",
      "用 5 分钟检查：每个答案能不能指回一条原文证据。",
    ],
    tryNow: "拿一篇短阅读，只做 5 题；禁止全文翻译，每题必须划一条证据句。",
    doneWhen: "5 个答案旁都有题号、定位词和对应证据。",
    source: "awesome",
  },
  {
    id: "true-false-not-given-evidence",
    category: "reading",
    title: "判断题只相信原文",
    summary: "True 看一致，False 看相反，Not Given 看原文没有说。",
    minutes: 12,
    why: "最常见的错误是用常识补答案；判断题只考文章有没有提供证据。",
    steps: [
      "把题目主语、动作和范围词圈出来，例如 all、some、only。",
      "在原文找到同一件事，比较意思是相同、相反，还是没有完整信息。",
      "在答案旁写 T、F 或 NG，再抄下不超过 8 个词的证据。",
    ],
    tryNow: "做 3 道判断题，并对每题问自己：“原文哪几个词能证明？”",
    doneWhen: "你能用原文解释答案，而不是说“我觉得应该是”。",
    source: "awesome",
  },
  {
    id: "two-way-vocabulary",
    category: "vocabulary",
    title: "单词要双向回忆",
    summary: "既要看到英文懂意思，也要看到中文能想起英文。",
    minutes: 10,
    why: "只会认词，写作和口语时仍然想不起来；反向回忆能训练主动使用。",
    steps: [
      "准备 8 张小卡：正面写英文，背面写中文和一个短例句。",
      "先看英文说中文，再打乱顺序，看中文拼出英文。",
      "把答错的卡单独放一堆，5 分钟后只测这一堆。",
    ],
    tryNow: "从今天的新词中选 8 个，做一轮英→中和一轮中→英。",
    doneWhen: "两轮都答对至少 6 个；错词已进入待复习小堆。",
    source: "edyou",
  },
  {
    id: "personal-sentence",
    category: "vocabulary",
    title: "把新词放进自己的句子",
    summary: "用学校、家庭或兴趣造句，比抄词典例句更容易记。",
    minutes: 12,
    why: "自己想过的内容会和生活经验连起来，复习时更容易把词叫出来。",
    steps: [
      "选 5 个今天的新词，先确认词性和常见搭配。",
      "每个词写一句和自己有关的话，句子控制在 8–15 个词。",
      "遮住单词，只看中文提示，把 5 句大声复述一遍。",
    ],
    tryNow: "用“我的学校”做主题，把 5 个新词写进 5 句真实的话。",
    doneWhen: "5 句话意思清楚，隔 10 分钟还能想起至少 4 个词。",
    source: "edyou",
  },
  {
    id: "speak-three-second-record",
    category: "speaking",
    title: "3 秒开口，录满 60 秒",
    summary: "先真实回答一遍，再根据录音只改一个问题。",
    minutes: 10,
    why: "一直准备稿子会掩盖真实卡点；录音能让你听见停顿、重复和没说清的地方。",
    steps: [
      "随机选一道 Part 1 或简单话题，看到题后 3 秒内开口。",
      "录 60 秒，不暂停；听回放并标记一处停顿、一处重复或一处缺少细节。",
      "只针对最明显的一处改进，完整重录一次。",
    ],
    tryNow: "回答“What do you like about your school?”，第一遍不写稿。",
    doneWhen: "第二遍比第一遍更清楚，并且你能说出改了哪一点。",
    source: "simulator",
  },
  {
    id: "idea-reason-example",
    category: "speaking",
    title: "观点—理由—例子三格",
    summary: "不知道怎么展开时，用三个格子把一句话说完整。",
    minutes: 8,
    why: "只回答 yes 或 no 内容太薄；加一个理由和一个小例子，就有清楚的展开。",
    steps: [
      "第一格写观点：我认为……",
      "第二格写理由：因为……",
      "第三格写一个真实或合理的小例子：比如……",
    ],
    tryNow: "回答“学生应该每天运动吗？”，每个格子只写关键词，再连起来说 45 秒。",
    doneWhen: "听的人能分清你的观点、原因和例子。",
    source: "awesome",
  },
  {
    id: "four-color-writing-check",
    category: "writing",
    title: "四色写作自查",
    summary: "四种颜色各查一件事，最后只重写最差的一句。",
    minutes: 15,
    why: "一次改所有问题容易乱；分颜色检查，能看出文章最弱的是内容、结构、用词还是语法。",
    steps: [
      "橙色圈是否回答题目；蓝色画段落连接；绿色标关键词重复；紫色标句子错误。",
      "数一数哪种颜色最多，把它定为今天唯一的修改重点。",
      "从这一类中挑最差的一句重写，并在旁边写“为什么这样改”。",
    ],
    tryNow: "拿一段 80–120 词的旧作文，用四种符号代替彩笔也可以。",
    doneWhen: "你找到最弱的一项，并留下原句、改句和修改理由。",
    source: "prompt",
  },
  {
    id: "four-box-error-log",
    category: "review",
    title: "错题四格 + 周日小结",
    summary: "每个错题只记四格，周末找出出现最多的错因。",
    minutes: 15,
    why: "错题本不是抄答案；记录错因和下次动作，才会减少同一种错误。",
    steps: [
      "四格依次写：题目、我的错因、原文或规则证据、下次提醒。",
      "周日给本周错题按错因分类，数出出现次数最多的一类。",
      "下周只设一个改进目标，例如“所有判断题都划证据”。",
    ],
    tryNow: "拿今天的一道错题填完四格，最后写一句不超过 12 个字的提醒。",
    doneWhen: "周末能说出最高频错因，并把它变成下周一个具体动作。",
    source: "practice",
  },
];

function task(id, week, day, subject, title, output, duration, course, part, reviewable = true) {
  return { id, week, day, subject, title, output, duration, course, part, reviewable };
}

function createProfileId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
  }
  const code = Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("");
  return `IELTS-${code}`;
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
    triedTips: {},
    tipsFilter: "all",
    profile: {
      id: createProfileId(),
      displayName: "",
      testType: "academic",
      targetScore: 6.5,
      examDate: "",
      weeklyHours: 12,
    },
    scoreRecords: [],
    tipAttempts: [],
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
      triedTips: saved.triedTips || {},
      profile: {
        ...getDefaultState().profile,
        ...(saved.profile && typeof saved.profile === "object" ? saved.profile : {}),
      },
      scoreRecords: Array.isArray(saved.scoreRecords) ? saved.scoreRecords : [],
      tipAttempts: Array.isArray(saved.tipAttempts) ? saved.tipAttempts : [],
    };
  } catch {
    return getDefaultState();
  }
}

let state = loadState();
let resetArmed = false;
let resetTimer = null;
let toastTimer = null;
let pickedTipId = null;
let pickedTipTimer = null;

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
  tipsFilters: document.querySelector("#tipsFilters"),
  tipsGrid: document.querySelector("#tipsGrid"),
  tipsSources: document.querySelector("#tipsSources"),
  tipsSummary: document.querySelector("#tipsSummary"),
  tipsTriedCount: document.querySelector("#tipsTriedCount"),
  tipsTotalCount: document.querySelector("#tipsTotalCount"),
  tipsProgress: document.querySelector(".tips-progress"),
  tipsProgressValue: document.querySelector("#tipsProgressValue"),
  pickRandomTip: document.querySelector("#pickRandomTip"),
  profileForm: document.querySelector("#profileForm"),
  profileName: document.querySelector("#profileName"),
  profileTestType: document.querySelector("#profileTestType"),
  profileTargetScore: document.querySelector("#profileTargetScore"),
  profileExamDate: document.querySelector("#profileExamDate"),
  profileWeeklyHours: document.querySelector("#profileWeeklyHours"),
  profileDisplayName: document.querySelector("#profileDisplayName"),
  profileIdDisplay: document.querySelector("#profileIdDisplay"),
  profileTargetText: document.querySelector("#profileTargetText"),
  latestOverall: document.querySelector("#latestOverall"),
  bestOverall: document.querySelector("#bestOverall"),
  profileAttemptCount: document.querySelector("#profileAttemptCount"),
  scoreForm: document.querySelector("#scoreForm"),
  scoreDate: document.querySelector("#scoreDate"),
  scoreType: document.querySelector("#scoreType"),
  scoreListening: document.querySelector("#scoreListening"),
  scoreReading: document.querySelector("#scoreReading"),
  scoreWriting: document.querySelector("#scoreWriting"),
  scoreSpeaking: document.querySelector("#scoreSpeaking"),
  scoreNote: document.querySelector("#scoreNote"),
  scoreOverallPreview: document.querySelector("#scoreOverallPreview"),
  scoreChart: document.querySelector("#scoreChart"),
  scoreHistory: document.querySelector("#scoreHistory"),
  exportProfile: document.querySelector("#exportProfile"),
  importProfile: document.querySelector("#importProfile"),
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
    ...Object.values(state.triedTips),
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

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
  const learner = state.profile.displayName?.trim();
  const prefix = learner ? `${learner} · ` : "";
  if (week === 0) {
    const days = daysBetween(startOfToday(), parseISO(state.startDate));
    els.headerStatus.textContent = `${prefix}${days} 天后开始`;
  } else if (week === 9) {
    els.headerStatus.textContent = `${prefix}8周计划已结束`;
  } else {
    els.headerStatus.textContent = `${prefix}第 ${week} 周进行中`;
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

function renderTips() {
  const filters = [
    ["all", "全部"],
    ...Object.entries(TIP_CATEGORIES).map(([value, config]) => [value, config.label]),
  ];
  els.tipsFilters.innerHTML = filters.map(([value, label]) => `
    <button class="tips-filter${state.tipsFilter === value ? " is-active" : ""}" type="button" data-tips-filter="${value}">${label}</button>
  `).join("");

  const triedCount = STUDY_TIPS.filter((tip) => state.triedTips[tip.id]).length;
  const progressPercent = Math.round((triedCount / STUDY_TIPS.length) * 100);
  els.tipsTriedCount.textContent = triedCount;
  els.tipsTotalCount.textContent = STUDY_TIPS.length;
  els.tipsProgress.setAttribute("aria-valuemax", String(STUDY_TIPS.length));
  els.tipsProgress.setAttribute("aria-valuenow", String(triedCount));
  els.tipsProgressValue.style.width = `${progressPercent}%`;

  const tips = STUDY_TIPS.filter(
    (tip) => state.tipsFilter === "all" || tip.category === state.tipsFilter,
  );
  const untriedInView = tips.filter((tip) => !state.triedTips[tip.id]).length;
  els.tipsSummary.textContent = `当前 ${tips.length} 个 · 还有 ${untriedInView} 个未尝试`;

  els.tipsGrid.innerHTML = tips.map((tip) => {
    const category = TIP_CATEGORIES[tip.category];
    const source = TIP_SOURCES[tip.source];
    const test = TIP_TESTS[tip.id];
    const tried = Boolean(state.triedTips[tip.id]);
    const attemptCount = state.tipAttempts.filter((attempt) => attempt.tipId === tip.id).length;
    const number = String(STUDY_TIPS.findIndex((entry) => entry.id === tip.id) + 1).padStart(2, "0");
    return `
      <article
        class="tip-card${tried ? " is-tried" : ""}${pickedTipId === tip.id ? " is-picked" : ""}"
        id="tip-${tip.id}"
        data-tip-card="${tip.id}"
        style="--tip-color: ${category.color}"
        tabindex="-1"
      >
        <div class="tip-card-top">
          <span class="tip-category"><i aria-hidden="true"></i>${category.en} · ${category.label}</span>
          <span class="tip-number">#${number}</span>
        </div>
        <h3>${tip.title}</h3>
        <p class="tip-summary">${tip.summary}</p>
        <div class="tip-why">
          <strong>它在帮你什么？</strong>
          <p>${tip.why}</p>
        </div>
        <div class="tip-steps">
          <div class="tip-block-heading"><span>照着做</span><small>约 ${tip.minutes} 分钟</small></div>
          <ol>
            ${tip.steps.map((step, index) => `<li><b>${index + 1}</b><span>${step}</span></li>`).join("")}
          </ol>
        </div>
        <div class="tip-try">
          <strong>现在试一下 · 配套测试题</strong>
          <p>${test?.preview || tip.tryNow}</p>
          <div class="tip-test-row">
            <a href="./practice.html?tip=${encodeURIComponent(tip.id)}">开始这道题 <span aria-hidden="true">→</span></a>
            <span>${attemptCount ? `已练 ${attemptCount} 次` : `${test?.minutes || tip.minutes} 分钟`}</span>
          </div>
        </div>
        <p class="tip-done"><span aria-hidden="true">✓</span><strong>完成标准：</strong>${tip.doneWhen}</p>
        <div class="tip-card-footer">
          <a href="${test?.externalUrl || source.onlineUrl}" target="_blank" rel="noopener noreferrer" aria-label="打开与 ${tip.title} 对应的线上练习">
            ${test?.externalLabel || source.onlineLabel} <span aria-hidden="true">↗</span>
          </a>
          <button
            class="tip-check${tried ? " is-active" : ""}"
            type="button"
            data-tip-id="${tip.id}"
            aria-pressed="${tried}"
            aria-label="${tried ? `取消已尝试：${tip.title}` : `标记已尝试：${tip.title}`}"
          >${tried ? "✓ 已尝试" : "标记已尝试"}</button>
        </div>
        <p class="tip-source-note">方法整理参考：<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.repo}</a></p>
      </article>
    `;
  }).join("");

  els.tipsSources.innerHTML = Object.values(TIP_SOURCES).map((source, index) => `
    <article class="source-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h4>${source.name}</h4>
        <code>${source.repo}</code>
        <p>${source.note}</p>
        <div class="source-actions">
          <a href="${source.onlineUrl}" target="_blank" rel="noopener noreferrer">${source.onlineLabel} <span aria-hidden="true">↗</span></a>
          <a href="${source.url}" target="_blank" rel="noopener noreferrer">查看方法仓库</a>
        </div>
      </div>
    </article>
  `).join("");
}

function toggleTip(id) {
  const tip = STUDY_TIPS.find((entry) => entry.id === id);
  if (!tip) return;
  if (state.triedTips[id]) {
    delete state.triedTips[id];
    showToast(`已取消“${tip.title}”的尝试记录。`);
  } else {
    state.triedTips[id] = toISO(startOfToday());
    showToast(`已记录“${tip.title}”。下次可以换一张卡。`);
  }
  saveState();
  renderProgress();
  renderTips();
  requestAnimationFrame(() => document.querySelector(`[data-tip-id="${id}"]`)?.focus());
}

function pickRandomTip() {
  const visibleTips = STUDY_TIPS.filter(
    (tip) => state.tipsFilter === "all" || tip.category === state.tipsFilter,
  );
  const untriedTips = visibleTips.filter((tip) => !state.triedTips[tip.id]);
  const pool = untriedTips.length ? untriedTips : visibleTips;
  if (!pool.length) return;

  const tip = pool[Math.floor(Math.random() * pool.length)];
  pickedTipId = tip.id;
  clearTimeout(pickedTipTimer);
  renderTips();
  requestAnimationFrame(() => {
    const card = document.querySelector(`[data-tip-card="${tip.id}"]`);
    card?.focus({ preventScroll: true });
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  pickedTipTimer = setTimeout(() => {
    pickedTipId = null;
    document.querySelector(`[data-tip-card="${tip.id}"]`)?.classList.remove("is-picked");
  }, 2200);
  showToast(`今天先试：${tip.title}`);
}

function calculateOverall(scores) {
  const values = [scores.listening, scores.reading, scores.writing, scores.speaking].map(Number);
  if (values.some((value) => !Number.isFinite(value) || value < 0 || value > 9)) return null;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 2) / 2;
}

function formatBand(value) {
  return Number.isFinite(Number(value)) ? Number(value).toFixed(1) : "—";
}

function getSortedScoreRecords() {
  return [...state.scoreRecords].sort((a, b) => {
    const dateDelta = String(b.date).localeCompare(String(a.date));
    return dateDelta || String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  });
}

function renderProfile() {
  const profile = state.profile;
  const records = getSortedScoreRecords();
  const latest = records[0];
  const best = records.length ? Math.max(...records.map((record) => Number(record.overall) || 0)) : null;

  els.profileName.value = profile.displayName || "";
  els.profileTestType.value = profile.testType || "academic";
  els.profileTargetScore.value = profile.targetScore ?? 6.5;
  els.profileExamDate.value = profile.examDate || "";
  els.profileWeeklyHours.value = profile.weeklyHours ?? 12;
  els.profileDisplayName.textContent = profile.displayName?.trim() || "本地学习者";
  els.profileIdDisplay.textContent = profile.id;
  els.latestOverall.textContent = latest ? formatBand(latest.overall) : "—";
  els.bestOverall.textContent = best === null ? "—" : formatBand(best);
  els.profileAttemptCount.textContent = state.tipAttempts.length;

  if (profile.examDate) {
    const daysLeft = daysBetween(startOfToday(), parseISO(profile.examDate));
    const countdown = daysLeft >= 0 ? `距考试 ${daysLeft} 天` : `考试日期已过 ${Math.abs(daysLeft)} 天`;
    els.profileTargetText.textContent = `目标 ${formatBand(profile.targetScore)} · ${countdown} · 每周 ${profile.weeklyHours} 小时`;
  } else {
    els.profileTargetText.textContent = `目标 ${formatBand(profile.targetScore)} · 尚未设置考试日期 · 每周 ${profile.weeklyHours} 小时`;
  }

  if (!els.scoreDate.value) els.scoreDate.value = toISO(startOfToday());
  updateScorePreview();
  renderScoreChart(records);
  renderScoreHistory(records);
}

function renderScoreChart(records) {
  const chartRecords = records.slice(0, 8).reverse();
  if (!chartRecords.length) {
    els.scoreChart.innerHTML = '<div class="score-empty">保存第一条成绩后，这里会出现总分走势。</div>';
    return;
  }

  els.scoreChart.innerHTML = chartRecords.map((record) => {
    const height = Math.max(8, (Number(record.overall) / 9) * 100);
    const shortDate = String(record.date).slice(5).replace("-", "/");
    return `
      <div class="score-bar-item" title="${escapeHTML(record.date)} · 总分 ${formatBand(record.overall)}">
        <strong>${formatBand(record.overall)}</strong>
        <div><span style="height: ${height}%"></span></div>
        <small>${shortDate}</small>
      </div>
    `;
  }).join("");
}

function renderScoreHistory(records) {
  const typeLabels = { mock: "完整模考", weekly: "周测", official: "正式考试" };
  if (!records.length) {
    els.scoreHistory.innerHTML = '<div class="score-empty">还没有雅思成绩记录。可以先录入一次基线模考。</div>';
    return;
  }

  els.scoreHistory.innerHTML = records.map((record) => `
    <article class="score-record">
      <div class="score-record-date"><strong>${escapeHTML(String(record.date).slice(5))}</strong><span>${typeLabels[record.type] || "练习"}</span></div>
      <div class="score-record-main">
        <div class="score-record-total"><span>OVERALL</span><strong>${formatBand(record.overall)}</strong></div>
        <div class="score-record-skills">
          <span>L ${formatBand(record.listening)}</span>
          <span>R ${formatBand(record.reading)}</span>
          <span>W ${formatBand(record.writing)}</span>
          <span>S ${formatBand(record.speaking)}</span>
        </div>
        ${record.note ? `<p>${escapeHTML(record.note)}</p>` : ""}
      </div>
      <button class="score-delete" type="button" data-score-delete="${escapeHTML(record.id)}" aria-label="删除 ${escapeHTML(record.date)} 的成绩记录">删除</button>
    </article>
  `).join("");
}

function getScoreFormValues() {
  return {
    listening: Number(els.scoreListening.value),
    reading: Number(els.scoreReading.value),
    writing: Number(els.scoreWriting.value),
    speaking: Number(els.scoreSpeaking.value),
  };
}

function updateScorePreview() {
  const hasAllValues = [els.scoreListening, els.scoreReading, els.scoreWriting, els.scoreSpeaking]
    .every((input) => input.value !== "");
  const overall = hasAllValues ? calculateOverall(getScoreFormValues()) : null;
  els.scoreOverallPreview.textContent = overall === null ? "—" : formatBand(overall);
}

function saveProfileInfo(event) {
  event.preventDefault();
  state.profile = {
    ...state.profile,
    displayName: els.profileName.value.trim(),
    testType: els.profileTestType.value,
    targetScore: Number(els.profileTargetScore.value) || 6.5,
    examDate: els.profileExamDate.value,
    weeklyHours: Number(els.profileWeeklyHours.value) || 12,
  };
  saveState();
  renderHeaderStatus();
  renderProfile();
  showToast("账号信息已保存到当前浏览器。");
}

function saveScoreRecord(event) {
  event.preventDefault();
  const scores = getScoreFormValues();
  const overall = calculateOverall(scores);
  if (overall === null) {
    showToast("请确认四科成绩都在 0–9 分之间。");
    return;
  }

  state.scoreRecords.push({
    id: `score-${Date.now()}`,
    date: els.scoreDate.value,
    type: els.scoreType.value,
    ...scores,
    overall,
    note: els.scoreNote.value.trim(),
    createdAt: new Date().toISOString(),
  });
  saveState();
  els.scoreForm.reset();
  els.scoreDate.value = toISO(startOfToday());
  els.scoreType.value = "mock";
  renderProfile();
  showToast(`成绩已保存，本次总分 ${formatBand(overall)}。`);
}

function removeScoreRecord(id) {
  const record = state.scoreRecords.find((item) => item.id === id);
  if (!record || !window.confirm(`删除 ${record.date} 的成绩记录？`)) return;
  state.scoreRecords = state.scoreRecords.filter((item) => item.id !== id);
  saveState();
  renderProfile();
  showToast("成绩记录已删除。");
}

function exportLearningProfile() {
  const payload = {
    app: "like-ielts-zixue",
    version: 2,
    exportedAt: new Date().toISOString(),
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `雅思学习档案-${state.profile.id}-${toISO(startOfToday())}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("学习档案已导出，可在另一台电脑导入。");
}

async function importLearningProfile(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const imported = payload?.app === "like-ielts-zixue" ? payload.state : payload;
    if (!imported || typeof imported !== "object" || !imported.profile) throw new Error("invalid-profile");
    if (!window.confirm(`导入档案 ${imported.profile.id || "未知编号"}？当前浏览器中的记录将被替换。`)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
    state = loadState();
    saveState();
    renderAll(false);
    showToast("学习档案导入成功。");
  } catch {
    showToast("导入失败：请选择由本项目导出的 JSON 学习档案。");
  } finally {
    els.importProfile.value = "";
  }
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
  if (view === "tips") renderTips();
  if (view === "profile") renderProfile();
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
  renderTips();
  renderProfile();
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
    return;
  }

  const tipsFilter = event.target.closest("[data-tips-filter]");
  if (tipsFilter) {
    state.tipsFilter = tipsFilter.dataset.tipsFilter;
    pickedTipId = null;
    saveState();
    renderTips();
    return;
  }

  const tipButton = event.target.closest("[data-tip-id]");
  if (tipButton) {
    toggleTip(tipButton.dataset.tipId);
    return;
  }

  const scoreDelete = event.target.closest("[data-score-delete]");
  if (scoreDelete) {
    removeScoreRecord(scoreDelete.dataset.scoreDelete);
  }
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  switchView("today");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#jumpToday").addEventListener("click", () => switchView("today"));
els.pickRandomTip.addEventListener("click", pickRandomTip);
els.profileForm.addEventListener("submit", saveProfileInfo);
els.scoreForm.addEventListener("submit", saveScoreRecord);
[els.scoreListening, els.scoreReading, els.scoreWriting, els.scoreSpeaking]
  .forEach((input) => input.addEventListener("input", updateScorePreview));
els.exportProfile.addEventListener("click", exportLearningProfile);
els.importProfile.addEventListener("change", importLearningProfile);

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
  pickedTipId = null;
  clearTimeout(pickedTipTimer);
  resetArmed = false;
  clearTimeout(resetTimer);
  els.resetProgress.textContent = "重置所有进度";
  saveState();
  renderAll(false);
  showToast("账号信息、成绩、测试题与全部打卡记录已重置。");
});

saveState();
renderAll(false);

setInterval(() => {
  renderToday();
  if (state.view === "review") renderReviews();
}, 60000);
