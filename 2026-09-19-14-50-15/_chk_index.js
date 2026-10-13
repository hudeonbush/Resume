
/* ================================================================
   ★★★ 内容编辑区 ★★★
   ----------------------------------------------------------------
   【结构】所有文字分中文(zh) / 英文(en) 两份，成对修改；
   页面右上角的 EN/中 按钮用来切换语言。
   【修改】Ctrl+F 搜对应小节（如 "论文"），改引号里的文字，
   保存后按 Ctrl+F5 强制刷新浏览器。
   【新增条目】复制一段 { ... } 粘贴改内容，段间用英文逗号隔开。
   【照片】把照片命名为 photo.png 放到本文件同目录即自动显示。
   ================================================================ */

/* ---- 界面固定文案（导航、标题等，一般不用改） ---- */
const UI = {
  "nav-edu":     { zh: "教育",   en: "Education" },
  "nav-exp":     { zh: "经历",   en: "Experience" },
  "nav-pub":     { zh: "论文",   en: "Publications" },
  "nav-contact": { zh: "联系",   en: "Contact" },
  "sec-about":   { zh: "关于我", en: "About" },
  "sec-edu":     { zh: "教育背景", en: "Education" },
  "sec-exp":     { zh: "研究与工作经历", en: "Experience" },
  "sec-proj":    { zh: "参与项目", en: "Projects" },
  "sec-pub":     { zh: "论文发表", en: "Publications" },
  "pub-more":    { zh: "查看全部论文与详情 →", en: "All publications & details →" },
  "sec-skills":  { zh: "技能",   en: "Skills" },
  "sec-contact": { zh: "联系方式", en: "Contact" },
  "back-top":    { zh: "回到顶部 ↑", en: "Back to top ↑" }
};

/* ---- 首屏 ---- */
const HERO = {
  name:   { zh: "李聃", en: "Alan Li" },
  nameEn: { zh: "Alan Li", en: "李聃" },
  bio: {
    zh: "材料科学与工程出身，研究二维转角异质结的新奇量子物态。现任金发科技标准化工程师，曾在字节跳动 AI4S 团队实习。",
    en: "Materials scientist working on exotic quantum states in twisted 2D heterostructures. Standardization engineer at Kingfa Sci. & Tech.; former AI4S intern at ByteDance."
  },
  interestsLabel: { zh: "研究兴趣", en: "Research interests" },
  interests: {
    zh: "莫尔超晶格 · 激子物理 · 光谱与扫描探针表征 · AI for Science",
    en: "Moiré superlattices · exciton physics · spectroscopy & scanning probe microscopy · AI for Science"
  },
  links: [
    { text: { zh: "📃 简历 PDF", en: "📃 CV (PDF)" }, href: "resume.pdf" },
    { text: { zh: "✉️ 邮箱", en: "✉️ Email" }, href: "mailto:1062530693@qq.com" },
    { text: { zh: "📞 电话", en: "📞 Phone" }, href: "tel:18827264847" }
  ]
};

/* ---- 关于我（精简事实列表） ---- */
const FACTS = [
  {
    zh: "<b>湖南大学</b> 硕士 · 信息功能材料，GPA 3.58/4.0（前 10%）",
    en: "M.Eng. in Information & Functional Materials, <b>Hunan University</b> — GPA 3.58/4.0 (top 10%)"
  },
  {
    zh: "<b>Nature Communications</b> 一作在审，另有多篇中科院一区 Top（Nano Research、Nano Letters 等）",
    en: "First-author manuscript under review at <b>Nature Communications</b>; more in CAS Q1 Top journals (Nano Research, Nano Letters, etc.)"
  },
  {
    zh: "坐标 中国 · 广州",
    en: "Based in Guangzhou, China"
  }
];

/* ---- 教育背景（新增：复制一段改内容） ---- */
const EDU = [
  {
    when: { zh: "2023 — 2026", en: "2023 — 2026" },
    what: { zh: "<b>湖南大学</b> · 硕士", en: "<b>Hunan University</b> · M.Eng." },
    role: { zh: "信息功能材料", en: "Information & Functional Materials" },
    desc: { zh: "GPA 3.58/4.0（前 10%）· 二维转角异质结量子物态", en: "GPA 3.58/4.0 (top 10%) · quantum states in twisted 2D heterostructures" }
  },
  {
    when: { zh: "2019 — 2023", en: "2019 — 2023" },
    what: { zh: "<b>河南工业大学</b> · 本科", en: "<b>Henan Univ. of Technology</b> · B.Eng." },
    role: { zh: "高分子材料", en: "Polymer Materials" },
    desc: { zh: "GPA 3.53/4.0（前 15%）· 纤维增强复合材料", en: "GPA 3.53/4.0 (top 15%) · fiber-reinforced composites" }
  }
];

/* ---- 研究与工作经历（每条一句话，新增：复制一段） ---- */
const EXP = [
  {
    when: { zh: "2026.07 — 至今", en: "2026.07 — now" },
    what: { zh: "<b>金发科技</b>", en: "<b>Kingfa Sci. & Tech.</b>" },
    role: { zh: "标准化工程师", en: "Standardization Engineer" },
    desc: { zh: "装置能耗管控清单、能耗核算模板与 SOP 体系建设", en: "Plant energy management lists, accounting templates and SOP systems" }
  },
  {
    when: { zh: "2025.06 — 2026.07", en: "2025.06 — 2026.07" },
    what: { zh: "<b>字节跳动</b> · AI4S", en: "<b>ByteDance</b> · AI4S" },
    role: { zh: "STEM 专家计划组 实习生", en: "Intern, STEM Expert Program" },
    desc: { zh: "训练数据质量评估、Benchmark 污染检测、Lean 4 定理证明数据", en: "Training-data quality evaluation, benchmark contamination detection, Lean 4 theorem-proving data" }
  },
  {
    when: { zh: "2026.04 — 2026.07", en: "2026.04 — 2026.07" },
    what: { zh: "<b>清华大学深圳国际研究生院</b>", en: "<b>Tsinghua SIGS</b>" },
    role: { zh: "实验助理（双螺旋中心）", en: "Research Assistant, Double-Helix Center" },
    desc: { zh: "SPM 表征二维材料与生物分子界面；转角 TMD 手性光学", en: "SPM study of 2D material–biomolecule interfaces; chiral optics of twisted TMDs" }
  },
  {
    when: { zh: "2023.10 — 2026.04", en: "2023.10 — 2026.04" },
    what: { zh: "<b>湖南大学分析测试中心</b>", en: "<b>HNU Analytical Testing Center</b>" },
    role: { zh: "科研助理", en: "Research Assistant" },
    desc: { zh: "Raman / PL / SHG / TAS 光谱与 SEM / SPM / STEM 表征支持", en: "Raman / PL / SHG / TAS spectroscopy and SEM / SPM / STEM support" }
  }
];

/* ---- 参与项目（极简一行式） ---- */
const PROJECTS = [
  {
    when: { zh: "2024 — 2026", en: "2024 — 2026" },
    what: { zh: "<b>硅基低维半导体三维异质光电集成</b>", en: "<b>3D optoelectronic integration of Si-based low-dimensional semiconductors</b>" },
    role: { zh: "国家重点研发计划", en: "National Key R&D Program" },
    desc: { zh: "光学系统搭建；CVD 铁电材料与非易失性存储器件", en: "Optical setups; CVD-grown ferroelectrics for non-volatile memory" }
  },
  {
    when: { zh: "2023 — 2026", en: "2023 — 2026" },
    what: { zh: "<b>二维原子晶体异质结可控制备与光电集成</b>", en: "<b>Controllable growth & optoelectronic integration of 2D heterostructures</b>" },
    role: { zh: "国家自然科学基金重点项目", en: "NSFC Key Program" },
    desc: { zh: "转角 WSe2/WS2 异质结；莫尔势垒反转与 Kagome 电子态", en: "Twisted WSe2/WS2; moiré barrier inversion and Kagome electronic lattice" }
  },
  {
    when: { zh: "2023 — 至今", en: "2023 — now" },
    what: { zh: "<b>莫尔超晶格激子光物理特性</b>", en: "<b>Exciton photophysics of moiré superlattices</b>" },
    role: { zh: "国家重点研发计划纳米前沿专项", en: "National Key R&D Nano-frontier Program" },
    desc: { zh: "非公度莫尔激子、激子-声子共振；应变调控各向异性", en: "Incommensurate moiré excitons, exciton–phonon resonance; strain-engineered anisotropy" }
  }
];

/* ---- 论文（★ 新增论文：复制一段改内容。
        url 填 DOI/出版社链接；没有写 "" 则标题不可点；
        status: "published" 或 "review"（在审）；
        img 填图形摘要图片路径，没有写 ""；
        detail 填详情页文件名（在 papers/ 目录里）） ---- */
const PUBS = [
  {
    title: "Energy Barrier Inversion and Kagome Electronic Lattice Induced by Incommensurate Moiré Reconstruction",
    authors: ["Dan Li", "et al."],
    venue: "Nature Communications",
    year: "2026",
    url: "",
    status: "review",
    tag: { zh: "一作 · 中科院一区 Top", en: "First author · CAS Q1 Top" },
    img: "",
    detail: "papers/ncomm-kagome.html",
    summary: {
      zh: "在转角 WSe2/WS2 异质结中发现非公度莫尔重构可诱导莫尔势能垒反转与激子圆偏振切换，并在特定转角下形成 Kagome 电子态晶格。",
      en: "Uncovering incommensurate moiré reconstruction that inverts the moiré potential barrier, switches exciton circular polarization, and hosts a Kagome electronic lattice in twisted WSe2/WS2 heterostructures."
    }
  },
  {
    title: "Synthesis and Intrinsic Out-of-Plane Ferroelectricity of 2D Bi2SiO5",
    authors: ["Di Wang", "Yingying Liu", "Hongmei Zhang", "Dan Li", "et al."],
    venue: "Nano Research",
    year: "2026",
    url: "https://doi.org/10.26599/NR.2025.94908068",
    status: "published",
    tag: { zh: "二作 · 中科院一区 Top", en: "2nd author · CAS Q1 Top" },
    img: "papers/pub-bi2sio5.jpg",
    detail: "papers/nr-bi2sio5.html",
    summary: {
      zh: "以 CVD 合成二维 Bi2SiO5 纳米片，经 SHG 与 PFM 验证其本征面外铁电性，并在垂直器件中实现铁电开关，拓展了二维铁电材料家族。",
      en: "CVD-grown 2D Bi2SiO5 nanosheets with intrinsic out-of-plane ferroelectricity verified by SHG and PFM, and ferroelectric switching demonstrated in vertical devices."
    }
  },
  {
    title: "Synthesis of Two-Dimensional Antiferromagnetic Semiconductor CuFeS2 with a High Néel Temperature",
    authors: ["Di Wang", "Yingying Liu", "Hua Zhang", "Yong Liu", "Dan Li", "et al."],
    venue: "Nano Letters, 25(14), 5925–5931",
    year: "2025",
    url: "https://doi.org/10.1021/acs.nanolett.5c01088",
    status: "published",
    tag: { zh: "五作 · JCR 一区 Top", en: "5th author · JCR Q1 Top" },
    img: "papers/pub-cufes2.jpg",
    detail: "papers/nl-cufes2.html",
    summary: {
      zh: "CVD 合成二维反铁磁半导体 CuFeS2，奈尔温度高达 473 K 且空气稳定，Raman 与 SHG 证实反铁磁序，为高温自旋电子学提供新材料平台。",
      en: "CVD-grown 2D antiferromagnetic semiconductor CuFeS2 with a Néel temperature of 473 K and good air stability, offering a platform for high-temperature spintronics."
    }
  },
  {
    title: "Strain Engineering of Emergent Anisotropic Responses in WSe2 Monolayer",
    authors: ["Yang Du", "Yuhao Kong", "Dan Li", "et al."],
    venue: "Nano Research",
    year: "2026",
    url: "https://doi.org/10.26599/NR.2026.94908725",
    status: "published",
    tag: { zh: "合作 · 中科院一区 Top", en: "Co-author · CAS Q1 Top" },
    img: "papers/pub-wse2.jpg",
    detail: "papers/nr-wse2-strain.html",
    summary: {
      zh: "用 SiO2 纳米棒直径调控单层 WSe2 应变，实现可调偏振发光并意外发现面内铁电性；异质结探测器具备宽谱响应与可调二向色比。",
      en: "SiO2-nanorod strain tuning of monolayer WSe2 yields tunable polarized emission and unexpected in-plane ferroelectricity, enabling broadband polarization-sensitive photodetectors."
    }
  }
];

/* ---- 技能标签（直接改列表） ---- */
const SKILLS = [
  "Raman / SERS / TERS", "PL / TRPL / CD-PL", "SHG", "TAS (pump-probe)", "FTIR",
  "SEM / FIB / EBSD", "AFM / STM / KPFM", "STEM-EELS", "CVD 生长", "机械剥离",
  "二维异质结搭建", "Lean 4", "Benchmark 污染检测", "Python", "CET-6"
];

/* ---- 联系方式 ---- */
const CONTACT = [
  { label: { zh: "邮箱", en: "Email" }, value: "1062530693@qq.com", href: "mailto:1062530693@qq.com" },
  { label: { zh: "电话", en: "Phone" }, value: "18827264847", href: "tel:18827264847" },
  { label: { zh: "专业", en: "Field" }, value_zh: "材料科学与工程", value_en: "Materials Science & Engineering", href: "" },
  { label: { zh: "坐标", en: "Location" }, value_zh: "中国 · 广州", value_en: "Guangzhou, China", href: "" }
];

const FOOTER = { zh: "© 2026 李聃 Alan Li", en: "© 2026 Alan Li (李聃)" };

/* ================================================================
   下面是渲染与交互逻辑，不用改
   ================================================================ */
(function () {
  "use strict";
  var LANG_KEY = "alan-site-lang";
  var lang = "zh";
  try { lang = localStorage.getItem(LANG_KEY) || "zh"; } catch (e) {}
  if (lang !== "zh" && lang !== "en") lang = "zh";

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pick(o) { return (o && typeof o === "object" && (o.zh !== undefined)) ? (lang === "zh" ? o.zh : o.en) : o; }

  function render() {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.getElementById("langToggle").textContent = lang === "zh" ? "EN" : "中";

    /* 固定文案 */
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (UI[k]) n.textContent = pick(UI[k]);
    });

    /* 首屏 */
    document.getElementById("navName").textContent = lang === "zh" ? "李聃 Alan Li" : "Alan Li 李聃";
    document.getElementById("heroName").innerHTML = esc(pick(HERO.name)) + '<span class="en">' + esc(pick(HERO.nameEn)) + "</span>";
    document.getElementById("heroBio").textContent = pick(HERO.bio);
    document.getElementById("heroInterests").innerHTML = "<b>" + esc(pick(HERO.interestsLabel)) + ":</b> " + esc(pick(HERO.interests));
    document.getElementById("avatarInitials").textContent = lang === "zh" ? "聃" : "AL";
    var hl = document.getElementById("heroLinks");
    hl.innerHTML = "";
    HERO.links.forEach(function (l) {
      var a = document.createElement("a");
      a.href = l.href;
      if (l.href.indexOf("mailto:") !== 0 && l.href.indexOf("tel:") !== 0) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      a.textContent = pick(l.text);
      hl.appendChild(a);
    });

    /* 关于 */
    document.getElementById("aboutFacts").innerHTML = FACTS.map(function (f) { return "<span>" + pick(f) + "</span>"; }).join("");

    /* 通用列表渲染 */
    function renderList(id, arr) {
      document.getElementById(id).innerHTML = arr.map(function (it) {
        return '<div class="item"><span class="when">' + esc(pick(it.when)) + '</span>' +
          '<div class="what"><b>' + pick(it.what) + "</b>" +
          (it.role ? ' · <span class="role">' + esc(pick(it.role)) + "</span>" : "") +
          (it.desc ? '<div class="desc">' + esc(pick(it.desc)) + "</div>" : "") +
          "</div></div>";
      }).join("");
    }
    renderList("eduList", EDU);
    renderList("expList", EXP);
    renderList("projList", PROJECTS);

    /* 论文（主页仅紧凑预览，完整列表与详情在 publications.html） */
    document.getElementById("pubList").innerHTML = PUBS.map(function (p) {
      var title = p.detail
        ? '<a href="' + esc(p.detail) + '">' + esc(p.title) + "</a>"
        : esc(p.title);
      var tag = '<span class="pill' + (p.status === "review" ? " review" : "") + '">' + esc(pick(p.tag)) + (p.status === "review" ? (lang === "zh" ? "（在审）" : " (under review)") : "") + "</span>";
      return '<div class="pub"><div class="p-title">' + title + tag + '</div>' +
        '<div class="p-meta"><span class="venue">' + esc(p.venue) + "</span>, " + esc(p.year) + "</div></div>";
    }).join("");

    /* 技能 */
    document.getElementById("skillTags").innerHTML = SKILLS.map(function (s) { return '<span class="tag">' + esc(s) + "</span>"; }).join("");

    /* 联系 */
    document.getElementById("contactFacts").innerHTML = CONTACT.map(function (c) {
      var v = c.value || (lang === "zh" ? c.value_zh : c.value_en);
      var inner = c.href ? '<a href="' + esc(c.href) + '">' + esc(v) + "</a>" : esc(v);
      return "<span><b>" + esc(pick(c.label)) + ":</b> " + inner + "</span>";
    }).join("");

    document.getElementById("footerText").textContent = pick(FOOTER);
    bindSpy();
  }

  /* 语言切换 */
  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    render();
  });

  /* 主题切换 */
  var THEME_KEY = "alan-site-theme";
  function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); try { localStorage.setItem(THEME_KEY, t); } catch (e) {} }
  (function () {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === "dark" || saved === "light") applyTheme(saved);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");
  })();
  document.getElementById("themeToggle").addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* 导航高亮 */
  var spyBound = false;
  function bindSpy() {
    if (spyBound) return;
    spyBound = true;
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 140, cur = "";
      links.forEach(function (l) {
        var sec = document.querySelector(l.getAttribute("href"));
        if (sec && sec.offsetTop <= pos) cur = l.getAttribute("href");
      });
      links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === cur); });
    }, { passive: true });
  }

  /* 入场动画 */
  if ("IntersectionObserver" in window) {
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); ob.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (t) { ob.observe(t); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (t) { t.classList.add("visible"); });
  }

  render();
})();
