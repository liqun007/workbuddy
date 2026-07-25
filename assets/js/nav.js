/* ===== WorkBuddy 保姆级教程 - 导航树数据与逻辑 ===== */

// 三级目录树形结构数据
const NAV_DATA = [
  {
    title: "第一篇 · 入门篇",
    icon: "🚀",
    children: [
      {
        title: "第一章 认识 WorkBuddy",
        page: "pages/01-overview.html",
        children: [
          { title: "1.1 什么是 WorkBuddy", anchor: "sec-1-1" },
          { title: "1.2 核心能力", anchor: "sec-1-2" },
          { title: "1.3 适用场景", anchor: "sec-1-3" },
          { title: "1.4 与传统 AI 的区别", anchor: "sec-1-4" },
        ]
      },
      {
        title: "第二章 安装与配置",
        page: "pages/02-install.html",
        children: [
          { title: "2.1 环境准备", anchor: "sec-2-1" },
          { title: "2.2 下载与安装", anchor: "sec-2-2" },
          { title: "2.3 账号登录", anchor: "sec-2-3" },
          { title: "2.4 界面介绍", anchor: "sec-2-4" },
          { title: "2.5 初始配置", anchor: "sec-2-5" },
        ]
      },
    ]
  },
  {
    title: "第二篇 · 基础篇",
    icon: "📘",
    children: [
      {
        title: "第三章 三大工作模式",
        page: "pages/03-modes.html",
        children: [
          { title: "3.1 Ask 问答模式", anchor: "sec-3-1" },
          { title: "3.2 Plan 规划模式", anchor: "sec-3-2" },
          { title: "3.3 Craft 执行模式", anchor: "sec-3-3" },
          { title: "3.4 模式对比与选择", anchor: "sec-3-4" },
        ]
      },
      {
        title: "第四章 创建任务",
        page: "pages/04-create-task.html",
        children: [
          { title: "4.1 描述任务", anchor: "sec-4-1" },
          { title: "4.2 选择工作空间", anchor: "sec-4-2" },
          { title: "4.3 添加上下文", anchor: "sec-4-3" },
          { title: "4.4 任务创建成功", anchor: "sec-4-4" },
        ]
      },
      {
        title: "第五章 任务管理",
        page: "pages/05-task-management.html",
        children: [
          { title: "5.1 任务列表", anchor: "sec-5-1" },
          { title: "5.2 搜索与筛选", anchor: "sec-5-2" },
          { title: "5.3 任务状态", anchor: "sec-5-3" },
          { title: "5.4 管理操作", anchor: "sec-5-4" },
          { title: "5.5 继续处理任务", anchor: "sec-5-5" },
        ]
      },
      {
        title: "第六章 任务对话",
        page: "pages/06-conversation.html",
        children: [
          { title: "6.1 对话方式", anchor: "sec-6-1" },
          { title: "6.2 顶部操作栏", anchor: "sec-6-2" },
          { title: "6.3 消息发送与追问", anchor: "sec-6-3" },
          { title: "6.4 文件与图片上传", anchor: "sec-6-4" },
          { title: "6.5 执行过程展示", anchor: "sec-6-5" },
          { title: "6.6 中断与继续", anchor: "sec-6-6" },
        ]
      },
      {
        title: "第七章 结果查看",
        page: "pages/07-results.html",
        children: [
          { title: "7.1 右侧结果区", anchor: "sec-7-1" },
          { title: "7.2 产物管理", anchor: "sec-7-2" },
          { title: "7.3 网页预览", anchor: "sec-7-3" },
          { title: "7.4 工作空间文件", anchor: "sec-7-4" },
          { title: "7.5 变更视图", anchor: "sec-7-5" },
          { title: "7.6 产物分享与上传", anchor: "sec-7-6" },
        ]
      },
    ]
  },
  {
    title: "第三篇 · 进阶篇",
    icon: "⚡",
    children: [
      {
        title: "第八章 技能系统 Skills",
        page: "pages/08-skills.html",
        children: [
          { title: "8.1 什么是技能", anchor: "sec-8-1" },
          { title: "8.2 技能市场", anchor: "sec-8-2" },
          { title: "8.3 安装与使用技能", anchor: "sec-8-3" },
          { title: "8.4 常用技能推荐", anchor: "sec-8-4" },
          { title: "8.5 创建自定义技能", anchor: "sec-8-5" },
          { title: "8.6 技能管理", anchor: "sec-8-6" },
        ]
      },
      {
        title: "第九章 专家中心 Experts",
        page: "pages/09-experts.html",
        children: [
          { title: "9.1 什么是专家", anchor: "sec-9-1" },
          { title: "9.2 专家与专家团", anchor: "sec-9-2" },
          { title: "9.3 召唤专家", anchor: "sec-9-3" },
          { title: "9.4 内置专家介绍", anchor: "sec-9-4" },
          { title: "9.5 Skill vs 专家 vs 专家团", anchor: "sec-9-5" },
        ]
      },
      {
        title: "第十章 连接器 Connectors",
        page: "pages/10-connectors.html",
        children: [
          { title: "10.1 什么是连接器", anchor: "sec-10-1" },
          { title: "10.2 应用场景", anchor: "sec-10-2" },
          { title: "10.3 连接 QQ 邮箱", anchor: "sec-10-3" },
          { title: "10.4 连接腾讯文档", anchor: "sec-10-4" },
          { title: "10.5 连接腾讯乐享", anchor: "sec-10-5" },
          { title: "10.6 自定义连接器", anchor: "sec-10-6" },
          { title: "10.7 管理与安全", anchor: "sec-10-7" },
        ]
      },
      {
        title: "第十一章 MCP 配置",
        page: "pages/11-mcp.html",
        children: [
          { title: "11.1 什么是 MCP", anchor: "sec-11-1" },
          { title: "11.2 MCP 核心功能", anchor: "sec-11-2" },
          { title: "11.3 一键安装 MCP Server", anchor: "sec-11-3" },
          { title: "11.4 自定义配置 MCP Server", anchor: "sec-11-4" },
          { title: "11.5 使用 MCP", anchor: "sec-11-5" },
        ]
      },
      {
        title: "第十二章 自动化与定时任务",
        page: "pages/12-automation.html",
        children: [
          { title: "12.1 什么是自动化", anchor: "sec-12-1" },
          { title: "12.2 创建定时任务", anchor: "sec-12-2" },
          { title: "12.3 调度规则详解", anchor: "sec-12-3" },
          { title: "12.4 自动化应用场景", anchor: "sec-12-4" },
          { title: "12.5 管理自动化", anchor: "sec-12-5" },
        ]
      },
    ]
  },
  {
    title: "第四篇 · 高级篇",
    icon: "🔧",
    children: [
      {
        title: "第十三章 记忆系统 Memory",
        page: "pages/13-memory.html",
        children: [
          { title: "13.1 什么是记忆", anchor: "sec-13-1" },
          { title: "13.2 记忆类型", anchor: "sec-13-2" },
          { title: "13.3 管理记忆", anchor: "sec-13-3" },
          { title: "13.4 导入记忆", anchor: "sec-13-4" },
          { title: "13.5 隐私与安全", anchor: "sec-13-5" },
        ]
      },
      {
        title: "第十四章 项目协作",
        page: "pages/14-project.html",
        children: [
          { title: "14.1 项目概述", anchor: "sec-14-1" },
          { title: "14.2 创建项目", anchor: "sec-14-2" },
          { title: "14.3 项目配置", anchor: "sec-14-3" },
          { title: "14.4 邀请成员", anchor: "sec-14-4" },
          { title: "14.5 任务分享与流转", anchor: "sec-14-5" },
          { title: "14.6 资产库管理", anchor: "sec-14-6" },
        ]
      },
      {
        title: "第十五章 多模态内容生成",
        page: "pages/15-multimodal.html",
        children: [
          { title: "15.1 图片生成", anchor: "sec-15-1" },
          { title: "15.2 视频生成", anchor: "sec-15-2" },
          { title: "15.3 3D 模型生成", anchor: "sec-15-3" },
          { title: "15.4 网站与应用开发", anchor: "sec-15-4" },
        ]
      },
      {
        title: "第十六章 跨端远程操控",
        page: "pages/16-remote.html",
        children: [
          { title: "16.1 微信 ClawBot 接入", anchor: "sec-16-1" },
          { title: "16.2 其他 IM 渠道", anchor: "sec-16-2" },
          { title: "16.3 微信小程序", anchor: "sec-16-3" },
          { title: "16.4 注意事项与故障排查", anchor: "sec-16-4" },
        ]
      },
      {
        title: "第十七章 知识库搭建",
        page: "pages/17-knowledge.html",
        children: [
          { title: "17.1 为什么需要知识库", anchor: "sec-17-1" },
          { title: "17.2 三步搭建知识库", anchor: "sec-17-2" },
          { title: "17.3 实战效果", anchor: "sec-17-3" },
        ]
      },
    ]
  },
  {
    title: "第五篇 · 实战篇",
    icon: "🎯",
    children: [
      {
        title: "第十八章 进阶技巧与最佳实践",
        page: "pages/18-tips.html",
        children: [
          { title: "18.1 高效养虾 10 招", anchor: "sec-18-1" },
          { title: "18.2 Prompt 黄金法则", anchor: "sec-18-2" },
          { title: "18.3 善用 @ 引用", anchor: "sec-18-3" },
          { title: "18.4 检查点机制", anchor: "sec-18-4" },
          { title: "18.5 Credits 优化", anchor: "sec-18-5" },
          { title: "18.6 安全实践", anchor: "sec-18-6" },
        ]
      },
      {
        title: "第十九章 常见问题与避坑指南",
        page: "pages/19-faq.html",
        children: [
          { title: "19.1 高频问题解答", anchor: "sec-19-1" },
          { title: "19.2 避坑提醒", anchor: "sec-19-2" },
          { title: "19.3 快捷键速查表", anchor: "sec-19-3" },
          { title: "19.4 模型选择指南", anchor: "sec-19-4" },
        ]
      },
    ]
  },
];

// 构建扁平索引（用于搜索和上下页导航）
let flatIndex = [];
function buildFlatIndex() {
  flatIndex = [];
  NAV_DATA.forEach((l1) => {
    l1.children.forEach((l2) => {
      flatIndex.push({
        l1Title: l1.title,
        l2Title: l2.title,
        page: l2.page,
      });
    });
  });
}

// 渲染导航树
function renderNav() {
  const container = document.getElementById("sidebarNav");
  let html = "";

  NAV_DATA.forEach((l1, l1Idx) => {
    html += `<div class="tree-item tree-l1" data-l1="${l1Idx}">`;
    html += `<div class="tree-label" onclick="toggleL1(${l1Idx})">`;
    html += `<span class="tree-arrow">▶</span>`;
    html += `<span class="tree-l1-icon">${l1.icon}</span>`;
    html += `<span>${l1.title}</span>`;
    html += `</div>`;
    html += `<div class="tree-children">`;

    l1.children.forEach((l2, l2Idx) => {
      html += `<div class="tree-item tree-l2" data-l1="${l1Idx}" data-l2="${l2Idx}">`;
      html += `<div class="tree-label" onclick="toggleL2(${l1Idx},${l2Idx})">`;
      html += `<span class="tree-arrow">▶</span>`;
      html += `<span>${l2.title}</span>`;
      html += `</div>`;
      html += `<div class="tree-children">`;

      if (l2.children) {
        l2.children.forEach((l3, l3Idx) => {
          const pageId = `${l1Idx}-${l2Idx}-${l3Idx}`;
          html += `<div class="tree-item tree-l3">`;
          html += `<div class="tree-label" data-page="${l2.page}" data-anchor="${l3.anchor}" data-page-id="${pageId}" onclick="loadPage('${l2.page}','${l3.anchor}','${pageId}')">`;
          html += `<span class="tree-dot"></span>`;
          html += `<span>${l3.title}</span>`;
          html += `</div>`;
          html += `</div>`;
        });
      }

      html += `</div>`;
      html += `</div>`;
    });

    html += `</div>`;
    html += `</div>`;
  });

  container.innerHTML = html;
}

// 切换 Level 1 展开
function toggleL1(idx) {
  const el = document.querySelector(`.tree-l1[data-l1="${idx}"]`);
  if (el) el.classList.toggle("open");
}

// 切换 Level 2 展开
function toggleL1auto(idx) {
  const el = document.querySelector(`.tree-l1[data-l1="${idx}"]`);
  if (el && !el.classList.contains("open")) el.classList.add("open");
}

// 切换 Level 2 展开
function toggleL2(l1Idx, l2Idx) {
  const el = document.querySelector(
    `.tree-l2[data-l1="${l1Idx}"][data-l2="${l2Idx}"]`
  );
  if (el) el.classList.toggle("open");
}

function toggleL2auto(l1Idx, l2Idx) {
  const el = document.querySelector(
    `.tree-l2[data-l1="${l1Idx}"][data-l2="${l2Idx}"]`
  );
  if (el && !el.classList.contains("open")) el.classList.add("open");
}

// 加载页面
function loadPage(page, anchor, pageId) {
  const iframe = document.getElementById("contentFrame");
  const loading = document.getElementById("contentLoading");

  if (loading) loading.classList.remove("hidden");

  // 更新激活状态
  document.querySelectorAll(".tree-l3 .tree-label.active").forEach((el) => {
    el.classList.remove("active");
  });

  if (pageId) {
    const activeEl = document.querySelector(`[data-page-id="${pageId}"]`);
    if (activeEl) activeEl.classList.add("active");
  }

  // 构建URL
  let url = page;
  if (anchor) url += "#" + anchor;

  iframe.src = url;

  // 更新面包屑
  updateBreadcrumb(page, pageId);

  iframe.onload = function () {
    if (loading) loading.classList.add("hidden");
    if (anchor) {
      setTimeout(() => {
        try {
          const doc = iframe.contentDocument;
          const target = doc.getElementById(anchor);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        } catch (e) {}
      }, 100);
    }
  };
}

// 更新面包屑
function updateBreadcrumb(page, pageId) {
  const breadcrumb = document.getElementById("breadcrumb");
  if (!breadcrumb) return;

  let l1Title = "";
  let l2Title = "";

  if (pageId) {
    const parts = pageId.split("-");
    const l1Idx = parseInt(parts[0]);
    const l2Idx = parseInt(parts[1]);
    if (NAV_DATA[l1Idx] && NAV_DATA[l1Idx].children[l2Idx]) {
      l1Title = NAV_DATA[l1Idx].title.replace(/第.篇 · /, "");
      l2Title = NAV_DATA[l1Idx].children[l2Idx].title;
    }
  } else {
    // 从 page 路径查找
    for (const l1 of NAV_DATA) {
      for (const l2 of l1.children) {
        if (l2.page === page) {
          l1Title = l1.title.replace(/第.篇 · /, "");
          l2Title = l2.title;
          break;
        }
      }
    }
  }

  breadcrumb.innerHTML = `<strong>${l1Title}</strong> <span>/</span> <strong>${l2Title}</strong>`;
}

// 上一页/下一页导航
function navigatePage(direction) {
  const currentActive = document.querySelector(".tree-l3 .tree-label.active");
  if (!currentActive) {
    // 如果没有选中的，加载第一页
    const first = NAV_DATA[0].children[0];
    if (first) loadPage(first.page, "", "0-0-0");
    return;
  }

  const allL3 = Array.from(document.querySelectorAll(".tree-l3 .tree-label"));
  const currentIdx = allL3.indexOf(currentActive);
  let targetIdx = direction === "next" ? currentIdx + 1 : currentIdx - 1;

  if (targetIdx >= 0 && targetIdx < allL3.length) {
    const target = allL3[targetIdx];
    target.click();
  }
}

// 搜索
function searchNav(keyword) {
  if (!keyword.trim()) {
    // 显示全部
    document.querySelectorAll(".tree-item").forEach((el) => {
      el.style.display = "";
    });
    return;
  }

  keyword = keyword.toLowerCase();

  // 先隐藏所有
  document.querySelectorAll(".tree-l2, .tree-l3").forEach((el) => {
    el.style.display = "none";
  });

  // 搜索匹配项
  document.querySelectorAll(".tree-l3 .tree-label").forEach((el) => {
    const text = el.textContent.toLowerCase();
    if (text.includes(keyword)) {
      el.parentElement.style.display = "";
      // 展开父级
      const l2 = el.closest(".tree-l2");
      const l1 = el.closest(".tree-l1");
      if (l2) {
        l2.style.display = "";
        l2.classList.add("open");
      }
      if (l1) {
        l1.style.display = "";
        l1.classList.add("open");
      }
    }
  });

  // 检查 L2 标题
  document.querySelectorAll(".tree-l2 > .tree-label").forEach((el) => {
    const text = el.textContent.toLowerCase();
    if (text.includes(keyword)) {
      const l2 = el.parentElement;
      const l1 = l2.closest(".tree-l1");
      l2.style.display = "";
      l2.classList.add("open");
      if (l1) {
        l1.style.display = "";
        l1.classList.add("open");
      }
      // 显示该 L2 下的所有 L3
      l2.querySelectorAll(".tree-l3").forEach((l3) => {
        l3.style.display = "";
      });
    }
  });
}

// 移动端侧边栏
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  sidebar.classList.toggle("show");
  if (overlay) overlay.classList.toggle("show");
}

// 初始化
document.addEventListener("DOMContentLoaded", function () {
  buildFlatIndex();
  renderNav();

  // 默认展开第一篇
  toggleL1auto(0);
  toggleL2auto(0, 0);

  // 加载默认页面
  loadPage("pages/01-overview.html", "", "0-0-0");

  // 搜索绑定
  const searchInput = document.getElementById("navSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchNav(this.value);
    });
  }

  // 键盘导航
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigatePage("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigatePage("next");
      }
    }
  });
});
