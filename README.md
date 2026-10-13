# 雅思备考清单

一个可以直接打开的中文雅思自学前端项目。项目把口语、听力、词汇和写作 B 站公开课编排为 8 周计划，并通过基于艾宾浩斯遗忘规律的复习链，把每节核心课拆成 `T+20 分钟 / D+1 / D+3 / D+7 / D+14 / D+30` 六次主动提取。课程库后还提供 12 个从公开 GitHub 项目整理出的学习小技巧，每个方法都配有一道原创测试题、独立跳转网址和练习记录。个人档案可以统一保存目标分数、考试日期、四科成绩与学习进度。

- 在线地址：<https://wangyun2001.github.io/like-ielts-zixue/>
- GitHub 仓库：<https://github.com/wangyun2001/like-ielts-zixue>
- 项目配置：[PROJECT_CONFIG.md](./PROJECT_CONFIG.md)

## 三种启动方式

### 方式一：直接双击

下载并解压项目后，直接双击 `index.html`。项目没有在线接口和构建依赖，主要功能可以在本地文件模式下运行。

### 方式二：一键启动

- Windows：双击 `start-windows.bat`
- macOS：双击 `start-macos.command`；若系统阻止首次运行，可在终端执行 `chmod +x start-macos.command`
- Linux：运行 `./start-linux.sh`

启动脚本会优先使用本机 Node.js 启动 `http://127.0.0.1:4173/`。未安装 Node.js 时，脚本会直接打开 `index.html`。

### 方式三：命令行启动

需要 Node.js 18 或更高版本，无需安装任何 npm 依赖：

```bash
npm start
```

也可以指定地址和端口：

```bash
PORT=8080 HOST=127.0.0.1 npm start
```

Windows PowerShell：

```powershell
$env:PORT = "8080"
npm start
```

## 核心功能

- **今日面板**：显示当天课程、下一项课程和到期复习数量。
- **8 周计划**：按周目标、验收标准和明确日期安排 40 项任务。
- **学习法**：提供五步刷课流程、四科输出要求和每周执行节奏。
- **复习队列**：32 节核心课各生成 6 个复习节点，共 192 个间隔提取任务。
- **课程库**：内置 10 条已核验的 B 站公开课链接与 BV 号。
- **学习小技巧**：12 张分科方法卡，支持分类、“帮我选一个”、立即测试和已尝试打卡。
- **配套测试题**：12 道原创小测试拥有独立网址，可直接作答、自检并保存历史记录。
- **在线练习入口**：优先打开来源项目提供的公开网页；没有演示页的项目会打开本站对应测试题。
- **个人学习档案**：统一保存昵称、考试类型、目标分数、考试日期和每周学习时长。
- **成绩记录**：记录听说读写四科成绩，自动计算总分，显示最近 8 次趋势和历史记录。
- **跨设备迁移**：可把全部本地进度导出为 JSON 文件，并在另一台电脑导入。
- **本地进度**：保存起始日期、课程打卡、复习打卡、小技巧测试、成绩和页面筛选状态。
- **响应式界面**：适配手机、平板和桌面浏览器。

## 一节课的刷课步骤

1. 用 5 分钟浏览标题和目录，写下 2 个本节必须解决的问题。
2. 用 40–90 分钟连续看课，只记录关键词和关键时间点。
3. 关掉视频，用 10 分钟完成“3 个要点、2 个例子、1 个疑问”的闭卷回忆。
4. 用 20–40 分钟完成对应科目的录音、听写、造句或限时写作。
5. 记录唯一最大问题并打卡，系统从实际完成时间开始安排 6 次主动提取。

## 艾宾浩斯复习节奏

| 节点 | 建议时长 | 复习动作 |
| --- | ---: | --- |
| T+20 分钟 | 8 分钟 | 写出 3 个要点、2 个例子、1 个疑问 |
| D+1 | 10 分钟 | 写出 5 个关键词，只回看遗漏处 |
| D+3 | 12 分钟 | 口头复述课程结构并完成自测 |
| D+7 | 18 分钟 | 闭卷完成一个同类小题 |
| D+14 | 22 分钟 | 把方法迁移到陌生题型或主题 |
| D+30 | 25 分钟 | 再测一次，未掌握内容加入弱项清单 |

## 每周执行节奏

- 周一至周四：每天完成一科主课，并在课后 20 分钟完成即时提取。
- 周五：处理到期复习、整理错题并补齐本周遗漏任务。
- 周六：完成录音、限时作文、听力模考或周验收。
- 周日：轻量复盘并确定下一周唯一优先弱项。

## 学习小技巧怎么用

1. 打开导航中的“学习小技巧”，按听力、阅读、口语、写作、词汇或复盘筛选。
2. 每次只选一张卡，也可以点击“帮我选一个”从当前分类中选择尚未尝试的方法。
3. 先读“它在帮你什么”，再点击“开始这道测试题”，把方法直接用在对应题目上。
4. 完成后保存答案并查看检查要点。系统会记录本次练习，并自动把对应小技巧标为已尝试。
5. 也可以点击卡片上的线上练习入口继续训练；GitHub 仓库链接保留在卡片底部，方便核对来源。
6. 周日查看还没有尝试的方法，下周选择一个最能解决当前弱项的技巧。

每道测试题都可以直接分享。例如：

```text
https://wangyun2001.github.io/like-ielts-zixue/practice.html?tip=true-false-not-given-evidence
```

## 个人档案与成绩记录

1. 打开导航中的“个人记录”，填写昵称、目标分数、考试日期和每周学习时长。
2. 每次模考或周测后，录入听力、阅读、写作和口语成绩。系统按雅思规则把四科平均值四舍五入到最近的 `0.5` 分。
3. 页面会显示最近总分、最高总分、最近 8 次总分走势以及完整记录。
4. 点击“导出学习档案”，可以把账号设置、课程进度、复习记录、成绩和测试记录保存为一个 JSON 文件。
5. 在另一台电脑打开同一网站，点击“导入学习档案”并选择该 JSON 文件，即可继续使用同一个档案。

当前版本是无需服务器的静态网站。学习档案由浏览器生成唯一编号并保存在本机，没有密码登录或云端数据库；这样可以避免把个人数据提交给第三方。如果需要多人实时同步，应另行接入带身份验证的后端服务。

## GitHub 学习方法来源

本项目只归纳学习思路并重新编写执行步骤，不复制仓库中的题目、课程或大段文本。页面内的每张方法卡都保留了可点击的来源链接。

| 公开项目 | 已核验的线上入口 | 本项目提炼的思路 |
| --- | --- | --- |
| [xingkongliang/awesome-ielts](https://github.com/xingkongliang/awesome-ielts) | [IELTS 官方学术类样题](https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test) | 评分标准、限时训练、原文证据、一次播放与主动输出 |
| [edyou25/IELTS](https://github.com/edyou25/IELTS) | [TTSReader](https://ttsreader.com/player/) | 乱序词汇、双向回忆、听写、造句和正确率记录 |
| [sallowayma-git/IELTS-practice](https://github.com/sallowayma-git/IELTS-practice) | 本站原创复盘测试题 | 用时、正确率、错因与每周练习记录 |
| [Touch-Sun/ielts-monitor](https://github.com/Touch-Sun/ielts-monitor) | 本站原创专注测试题 | 以周为单位监测目标和结果 |
| [hubeiqiao/IELTS-Speaking-Simulator](https://github.com/hubeiqiao/IELTS-Speaking-Simulator) | [JoeSpeaking](https://joespeaking.com/) | 随机口语题、录音、练后整理与重录 |
| [BaixuanLi/IELTS-Prompt](https://github.com/BaixuanLi/IELTS-Prompt) | [IELTS Academic Writing Tutor](https://chatgpt.com/g/g-OtBE3SHAp-ielts-academic-writing-tutor) | 按写作与口语评分维度组织反馈 |

仓库与在线入口最后核验日期为 2026-10-13。第三方网站可能调整地址、登录条件或内容。

## 项目结构

```text
.
├── .github/workflows/pages.yml  # GitHub Pages 自动部署
├── index.html                   # 页面入口
├── styles.css                  # 响应式视觉样式
├── app.js                      # 计划数据、打卡与复习逻辑
├── practice.html               # 12 道小技巧测试入口
├── practice.css                # 测试页响应式样式
├── practice-data.js            # 原创测试题与线上练习地址
├── practice.js                 # 作答、计时、自检和记录逻辑
├── server.mjs                  # 零依赖本地服务器
├── package.json                # 项目元数据与启动命令
├── PROJECT_CONFIG.md           # 完整项目配置说明
├── start-windows.bat           # Windows 一键启动
├── start-macos.command         # macOS 一键启动
├── start-linux.sh              # Linux 一键启动
├── favicon.svg                 # 站点图标
└── ebbinghaus-preview.png      # 界面预览
```

## 数据与隐私

学习数据只保存在当前浏览器的 `localStorage` 中，不会上传到服务器。课程打卡、复习打卡、账号设置、四科成绩和小技巧测试记录都在本机保存。更换浏览器、清除站点数据或使用另一台电脑时，数据不会自动同步，请先在“个人记录”中导出学习档案，再在新设备导入。

## GitHub Pages

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动发布静态网站。首次部署完成后，可通过以下地址访问：

<https://wangyun2001.github.io/like-ielts-zixue/>

## 内容说明

课程链接最后核验日期为 2026-10-12，GitHub 来源与在线练习入口最后核验日期为 2026-10-13。B 站视频或第三方页面可能由发布者调整或下架，项目保留 BV 号和原仓库地址便于重新搜索。配套测试题均由本项目原创，不复制第三方仓库的题库。复习间隔是本项目采用的训练节奏，每个人可以根据掌握程度调整。
