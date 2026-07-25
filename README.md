# WorkBuddy 保姆级教程

> 从入门到精通的全面指南 · 左侧三级目录树形结构 · 适配 GitHub Pages

## 📖 简介

本教程是一份全面、详细的 WorkBuddy 使用指南，涵盖从安装配置到高级技巧的完整内容。教程采用左侧三级目录树形结构导航，支持搜索、键盘快捷键，适配桌面和移动端。

## ✨ 特性

- 📂 **三级目录树形导航** — 篇 → 章 → 节，层次清晰
- 🔍 **实时搜索** — 快速定位章节内容
- ⌨️ **键盘快捷键** — `Ctrl/Cmd + ←/→` 翻页
- 📱 **响应式设计** — 适配桌面和移动端
- 🎨 **现代 UI** — 清爽的视觉设计，代码高亮
- 🚀 **GitHub Pages 就绪** — 纯静态，无需后端

## 📂 目录结构

```
workbuddy-tutorial/
├── index.html              # 主页面（侧边栏 + 内容 iframe）
├── .nojekyll               # 禁用 GitHub Pages Jekyll 处理
├── README.md               # 项目说明
├── assets/
│   ├── css/
│   │   └── style.css       # 全局样式
│   └── js/
│       └── nav.js          # 导航树数据与逻辑
└── pages/                   # 各章节内容
    ├── 01-overview.html     # 第一章 认识 WorkBuddy
    ├── 02-install.html     # 第二章 安装与配置
    ├── 03-modes.html       # 第三章 三大工作模式
    ├── 04-create-task.html  # 第四章 创建任务
    ├── 05-task-management.html # 第五章 任务管理
    ├── 06-conversation.html # 第六章 任务对话
    ├── 07-results.html      # 第七章 结果查看
    ├── 08-skills.html      # 第八章 技能系统
    ├── 09-experts.html     # 第九章 专家中心
    ├── 10-connectors.html   # 第十章 连接器
    ├── 11-mcp.html          # 第十一章 MCP 配置
    ├── 12-automation.html   # 第十二章 自动化与定时任务
    ├── 13-memory.html       # 第十三章 记忆系统
    ├── 14-project.html     # 第十四章 项目协作
    ├── 15-multimodal.html   # 第十五章 多模态内容生成
    ├── 16-remote.html       # 第十六章 跨端远程操控
    ├── 17-knowledge.html   # 第十七章 知识库搭建
    ├── 18-tips.html         # 第十八章 进阶技巧与最佳实践
    └── 19-faq.html          # 第十九章 常见问题与避坑指南
```

## 📚 教程内容

| 篇 | 章 | 内容 |
|---|---|---|
| 第一篇 · 入门篇 | 第 1-2 章 | 认识 WorkBuddy、安装与配置 |
| 第二篇 · 基础篇 | 第 3-7 章 | 三大模式、创建任务、任务管理、对话、结果查看 |
| 第三篇 · 进阶篇 | 第 8-12 章 | 技能、专家、连接器、MCP、自动化 |
| 第四篇 · 高级篇 | 第 13-17 章 | 记忆、项目协作、多模态、远程操控、知识库 |
| 第五篇 · 实战篇 | 第 18-19 章 | 进阶技巧、常见问题 |

## 🚀 本地预览

直接用浏览器打开 `index.html` 即可。

或使用本地服务器：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

然后访问 `http://localhost:8000`。

## 🌐 部署到 GitHub Pages

### 方法一：直接上传

1. 在 GitHub 创建新仓库（如 `workbuddy-tutorial`）
2. 将本目录所有文件上传到仓库
3. 进入仓库 `Settings → Pages`
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，文件夹选择 `/(root)`
6. 点击 `Save`
7. 等待几分钟后，访问 `https://<你的用户名>.github.io/workbuddy-tutorial/`

### 方法二：使用 Git 命令

```bash
cd workbuddy-tutorial

# 初始化仓库
git init
git add .
git commit -m "WorkBuddy 保姆级教程"

# 关联远程仓库
git remote add origin https://github.com/<你的用户名>/workbuddy-tutorial.git
git branch -M main
git push -u origin main
```

然后在 GitHub 仓库 `Settings → Pages` 中开启 Pages。

## 📝 技术栈

- 纯 HTML / CSS / JavaScript（无框架依赖）
- iframe 内容加载
- CSS Grid / Flexbox 布局
- 响应式设计

## 📄 License

MIT License - 可自由使用、修改和分发。

## 🔗 相关链接

- [WorkBuddy 官网](https://www.codebuddy.cn)
- [WorkBuddy 官方文档](https://www.codebuddy.cn/docs/workbuddy/Overview)
- [WorkBuddy 从入门到精通（腾讯云社区）](https://developer.cloud.tencent.com/article/2664219)
