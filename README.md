# 雅思备考清单

一个可以直接打开的中文雅思自学前端项目。项目把口语、听力、词汇和写作 B 站公开课编排为 8 周计划，并通过基于艾宾浩斯遗忘规律的复习链，把每节核心课拆成 `T+20 分钟 / D+1 / D+3 / D+7 / D+14 / D+30` 六次主动提取。课程库后还提供 12 个从公开 GitHub 项目整理出的学习小技巧，每个方法都拆成初中生可以跟做的步骤、立即练习和完成标准。

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
- **学习小技巧**：12 张分科方法卡，支持分类、“帮我选一个”和已尝试打卡。
- **GitHub 来源**：每张卡都能打开对应公开仓库，页面底部集中说明 6 个参考项目。
- **本地进度**：保存起始日期、课程打卡、复习打卡、小技巧尝试记录和页面筛选状态。
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
3. 先读“它在帮你什么”，再按 3 个步骤完成 8–20 分钟练习。
4. 对照“完成标准”检查；达到标准后点击“标记已尝试”。
5. 周日查看没有尝试的方法，下周选择一个最能解决当前弱项的技巧。

## GitHub 学习方法来源

本项目只归纳学习思路并重新编写执行步骤，不复制仓库中的题目、课程或大段文本。页面内的每张方法卡都保留了可点击的来源链接。

| 公开项目 | 本项目提炼的思路 |
| --- | --- |
| [xingkongliang/awesome-ielts](https://github.com/xingkongliang/awesome-ielts) | 评分标准、限时训练、原文证据、一次播放与主动输出 |
| [edyou25/IELTS](https://github.com/edyou25/IELTS) | 乱序词汇、双向回忆、听写、造句和正确率记录 |
| [sallowayma-git/IELTS-practice](https://github.com/sallowayma-git/IELTS-practice) | 用时、正确率、错因与每周练习记录 |
| [Touch-Sun/ielts-monitor](https://github.com/Touch-Sun/ielts-monitor) | 以周为单位监测目标和结果 |
| [hubeiqiao/IELTS-Speaking-Simulator](https://github.com/hubeiqiao/IELTS-Speaking-Simulator) | 随机口语题、录音、练后整理与重录 |
| [BaixuanLi/IELTS-Prompt](https://github.com/BaixuanLi/IELTS-Prompt) | 按写作与口语评分维度组织反馈 |

## 项目结构

```text
.
├── .github/workflows/pages.yml  # GitHub Pages 自动部署
├── index.html                   # 页面入口
├── styles.css                  # 响应式视觉样式
├── app.js                      # 计划数据、打卡与复习逻辑
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

学习数据只保存在当前浏览器的 `localStorage` 中，不会上传到服务器。课程打卡、复习打卡和小技巧尝试记录都在本机保存；更换浏览器、清除站点数据或使用另一台电脑时，进度不会自动同步。

## GitHub Pages

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动发布静态网站。首次部署完成后，可通过以下地址访问：

<https://wangyun2001.github.io/like-ielts-zixue/>

## 内容说明

课程链接最后核验日期为 2026-10-12。B 站视频可能由发布者调整或下架，项目保留 BV 号便于重新搜索。复习间隔是本项目采用的训练节奏，每个人可以根据掌握程度调整。
