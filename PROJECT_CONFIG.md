# 项目配置说明

## 基本信息

| 配置项 | 值 |
| --- | --- |
| 中文名称 | 雅思备考清单 |
| GitHub 仓库名 | `like-ielts-zixue` |
| 当前版本 | `1.2.0` |
| 项目类型 | 无框架静态前端 |
| 页面入口 | `index.html` |
| 本地服务器 | `server.mjs` |
| 默认地址 | `http://127.0.0.1:4173/` |
| Node.js 要求 | 18 或更高版本，仅用于本地服务器 |
| npm 依赖 | 无 |
| 构建步骤 | 无 |
| 部署方式 | GitHub Pages / 任意静态网站托管 |
| 数据存储 | 浏览器 `localStorage`，支持 JSON 导出与导入 |
| 存储键 | `ielts-eight-week-planner-v1` |

## 运行配置

本地服务器支持三个可选环境变量：

| 环境变量 | 默认值 | 作用 |
| --- | --- | --- |
| `HOST` | `127.0.0.1` | 本地服务器监听地址 |
| `PORT` | `4173` | 本地服务器监听端口 |
| `OPEN_BROWSER` | 空 | 设为 `1` 时，服务启动后自动打开浏览器 |

运行命令：

```bash
npm start
```

语法检查：

```bash
npm run check
```

## 页面与数据配置位置

所有学习内容都集中在 `app.js` 顶部的数据对象中：

- `SUBJECTS`：科目名称、缩写和颜色。
- `COURSES`：B 站课程标题、UP 主、BV 号、公开链接和使用理由。
- `WEEKS`：8 周阶段目标、周目标和验收标准。
- `TASKS`：40 项课程与周验收任务，包括周次、日期、时长和课程分 P。
- `REVIEW_STAGES`：六个艾宾浩斯复习节点、建议时长和复习动作。
- `TIP_CATEGORIES`：学习小技巧的分类、缩写和颜色。
- `TIP_SOURCES`：公开 GitHub 参考项目、仓库链接和来源说明。
- `STUDY_TIPS`：12 个方法卡的解释、步骤、立即练习、完成标准和来源。
- `TIP_TESTS`（位于 `practice-data.js`）：12 道原创测试题、答案、自检要点和公开在线练习地址。

界面内容分工：

- `index.html`：页面结构、学习法说明和导航。
- `styles.css`：桌面、平板和手机端样式。
- `app.js`：日期计算、课程打卡、复习队列、个人档案、成绩趋势和本地保存。
- `practice.html` / `practice.css` / `practice.js`：独立测试页、响应式样式、作答计时与练习记录。
- “学习小技巧”视图：支持分科筛选、随机选择、原创测试题直达、线上项目入口和已尝试记录。
- “个人记录”视图：支持统一档案、目标设置、四科成绩、总分趋势和跨设备数据迁移。

## 本地存储结构

浏览器在 `localStorage` 中保存以下字段：

```json
{
  "startDate": "2026-10-12",
  "profile": {
    "id": "IELTS-AB12CD34",
    "displayName": "小林",
    "testType": "academic",
    "targetScore": 6.5,
    "examDate": "2026-12-20",
    "weeklyHours": 12
  },
  "scoreRecords": [
    {
      "id": "score-1760000000000",
      "date": "2026-10-13",
      "type": "mock",
      "listening": 6.5,
      "reading": 6,
      "writing": 5.5,
      "speaking": 6,
      "overall": 6,
      "note": "下周重点练阅读判断题"
    }
  ],
  "completedTasks": {},
  "completedTaskTimes": {},
  "completedReviews": {},
  "selectedWeek": 1,
  "view": "today",
  "reviewFilter": "due",
  "libraryFilter": "all",
  "triedTips": {},
  "tipsFilter": "all",
  "tipAttempts": []
}
```

- `profile` 保存同一位学习者的本地档案编号与备考目标。
- `scoreRecords` 保存四科成绩、自动计算的总分与备注。
- `completedTasks` 保存任务完成日期。
- `completedTaskTimes` 保存精确完成时间，用于计算 T+20 分钟节点。
- `completedReviews` 保存复习打卡日期。
- `triedTips` 保存已尝试学习方法及其日期。
- `tipAttempts` 保存 12 道配套测试题的答案、自评和结果。
- `tipsFilter` 保存学习小技巧当前分类。
- 所有数据都只存在于用户当前浏览器中。“个人记录”页可以导出完整 JSON 备份，并在另一台电脑导入。

## 账号与数据同步方式

项目部署在 GitHub Pages，是纯静态网站，没有服务器数据库。首次打开时会生成一个格式类似 `IELTS-AB12CD34` 的档案编号；昵称、目标、成绩和学习记录都归入这一个本地档案。

- 不需要注册、邮箱或密码。
- 不会把个人成绩上传到 GitHub 或第三方服务器。
- 同一浏览器会自动读取上次保存的档案。
- 跨电脑使用时，先导出 JSON，再在新电脑导入。
- 如果未来需要多人账号与自动云同步，应接入带身份验证和访问控制的后端；不要把密码或个人成绩直接写入仓库。

## 测试题直达链接

所有测试题使用同一个页面，通过 `tip` 参数选择题目：

```text
https://wangyun2001.github.io/like-ielts-zixue/practice.html?tip=方法ID
```

例如阅读判断题证据定位测试：

```text
https://wangyun2001.github.io/like-ielts-zixue/practice.html?tip=true-false-not-given-evidence
```

方法 ID 与题目内容集中在 `practice-data.js`。新增题目时，需要同时在 `app.js` 的 `STUDY_TIPS` 中使用相同 ID，主页面才能把方法卡与测试题对应起来。

## 外部练习地址

`app.js` 的 `TIP_SOURCES` 保存来源仓库与首选在线入口；`practice-data.js` 可以为单题覆盖入口。当前已核验：

- IELTS 官方 Academic 样题：`https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test`
- TTSReader：`https://ttsreader.com/player/`
- JoeSpeaking：`https://joespeaking.com/`
- IELTS Academic Writing Tutor：`https://chatgpt.com/g/g-OtBE3SHAp-ielts-academic-writing-tutor`

没有公开演示页的参考仓库使用本站原创测试题作为主入口，原 GitHub 仓库仍显示为来源。核验日期为 2026-10-13。

## GitHub Pages 配置

工作流文件为 `.github/workflows/pages.yml`。它会在以下情况运行：

- `main` 分支收到新提交；
- 在 GitHub Actions 页面手动运行。

工作流直接上传仓库根目录，不需要打包或编译。部署权限为：

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

预期站点地址：

```text
https://wangyun2001.github.io/like-ielts-zixue/
```

## 修改课程链接

在 `app.js` 的 `COURSES` 对象中修改对应条目：

```js
courseKey: {
  subject: "listening",
  title: "课程标题",
  creator: "UP 主",
  bv: "BV号",
  url: "https://www.bilibili.com/video/BV号/",
  scope: "课程范围",
  reason: "推荐理由"
}
```

任务中的 `course` 字段需要与 `COURSES` 的键保持一致。若指定分 P，设置 `part` 数值即可，项目会自动生成 `?p=序号` 链接。

## 发布前检查

1. 运行 `npm run check`。
2. 打开首页，检查今日、8 周计划、学习法、复习队列、课程库、学习小技巧和个人记录。
3. 完成一节核心课，确认生成 6 个复习节点。
4. 检查 B 站链接是否仍公开可用。
5. 在学习小技巧中检查分类、“帮我选一个”、线上练习入口、来源仓库和已尝试状态。
6. 打开 12 个 `practice.html?tip=...` 网址，确认题目、答案区、检查要点和记录保存正常。
7. 在个人记录中保存档案与一组成绩，刷新页面确认数据仍在，并测试导出与导入。
8. 在手机宽度下检查导航、任务卡片、复习卡片、方法卡片、测试页和个人记录页。
9. 推送到 `main`，等待 GitHub Pages 工作流完成。
