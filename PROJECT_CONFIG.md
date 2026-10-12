# 项目配置说明

## 基本信息

| 配置项 | 值 |
| --- | --- |
| 中文名称 | 雅思备考清单 |
| GitHub 仓库名 | `like-ielts-zixue` |
| 项目类型 | 无框架静态前端 |
| 页面入口 | `index.html` |
| 本地服务器 | `server.mjs` |
| 默认地址 | `http://127.0.0.1:4173/` |
| Node.js 要求 | 18 或更高版本，仅用于本地服务器 |
| npm 依赖 | 无 |
| 构建步骤 | 无 |
| 部署方式 | GitHub Pages / 任意静态网站托管 |
| 数据存储 | 浏览器 `localStorage` |
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

界面内容分工：

- `index.html`：页面结构、学习法说明和导航。
- `styles.css`：桌面、平板和手机端样式。
- `app.js`：日期计算、课程打卡、复习队列、筛选和本地保存。

## 本地存储结构

浏览器在 `localStorage` 中保存以下字段：

```json
{
  "startDate": "2026-10-12",
  "completedTasks": {},
  "completedTaskTimes": {},
  "completedReviews": {},
  "selectedWeek": 1,
  "view": "today",
  "reviewFilter": "due",
  "libraryFilter": "all"
}
```

- `completedTasks` 保存任务完成日期。
- `completedTaskTimes` 保存精确完成时间，用于计算 T+20 分钟节点。
- `completedReviews` 保存复习打卡日期。
- 所有数据都只存在于用户当前浏览器中。

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
2. 打开首页，检查今日、8 周计划、学习法、复习队列和课程库。
3. 完成一节核心课，确认生成 6 个复习节点。
4. 检查 B 站链接是否仍公开可用。
5. 在手机宽度下检查导航、任务卡片和复习卡片。
6. 推送到 `main`，等待 GitHub Pages 工作流完成。
