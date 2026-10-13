
/* ================================================================
   ★ 论文数据 —— 与 index.html 中的 PUBS 保持一致，
     新增/修改论文时两处同步编辑（index.html 首屏预览 + 本页列表）
   ================================================================ */
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

const UI = {
  "nav-home":   { zh: "返回主页", en: "Home" },
  "page-title": { zh: "论文发表", en: "Publications" },
  "page-desc":  { zh: "点击条目标题跳转期刊原文，点击缩略图或「论文详情」查看研究背景、方法与结论的完整介绍。", en: "Click a title for the publisher page, or the figure / \"Read more\" for a full summary of background, methods and conclusions." },
  "back-home":  { zh: "← 返回主页", en: "← Back to homepage" }
};
const FOOTER = { zh: "© 2026 李聃 Alan Li", en: "© 2026 Alan Li (李聃)" };

/* ============ 以下为渲染与交互逻辑，不用改 ============ */
(function () {
  "use strict";
  var LANG_KEY = "alan-site-lang", THEME_KEY = "alan-site-theme";
  var lang = "zh";
  try { lang = localStorage.getItem(LANG_KEY) || "zh"; } catch (e) {}
  if (lang !== "zh" && lang !== "en") lang = "zh";

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pick(o) { return (o && typeof o === "object" && o.zh !== undefined) ? (lang === "zh" ? o.zh : o.en) : o; }

  function render() {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.getElementById("langToggle").textContent = lang === "zh" ? "EN" : "中";
    document.getElementById("navName").textContent = lang === "zh" ? "李聃 Alan Li" : "Alan Li 李聃";
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (UI[k]) n.textContent = pick(UI[k]);
    });

    document.getElementById("pubList").innerHTML = PUBS.map(function (p) {
      var title = p.url
        ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + esc(p.title) + "</a>"
        : esc(p.title);
      var authors = p.authors.map(function (a) { return a === "Dan Li" ? '<span class="me">' + esc(a) + "</span>" : esc(a); }).join(", ");
      var tag = '<span class="pill' + (p.status === "review" ? " review" : "") + '">' + esc(pick(p.tag)) + (p.status === "review" ? (lang === "zh" ? "（在审）" : " (under review)") : "") + "</span>";
      var fig = p.img
        ? '<a class="pub-fig" href="' + esc(p.detail) + '"><img src="' + esc(p.img) + '" alt="' + esc(p.title) + '" loading="lazy" onerror="this.parentNode.classList.add(\'noimg\');this.remove();" /><span class="fig-fallback">' + (lang === "zh" ? "图形摘要待补充" : "Figure coming soon") + "</span></a>"
        : "";
      var summary = p.summary ? '<p class="pub-summary">' + esc(pick(p.summary)) + "</p>" : "";
      var detail = p.detail ? '<a class="pub-detail" href="' + esc(p.detail) + '">' + (lang === "zh" ? "论文详情 →" : "Read more →") + "</a>" : "";
      var ext = p.url ? '<a class="pub-ext" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + (lang === "zh" ? "期刊原文 ↗" : "Publisher page ↗") + "</a>" : "";
      return '<div class="pub reveal"><div class="pub-main"><div class="pub-text">' +
        '<div class="p-title">' + title + tag + "</div>" +
        '<div class="p-meta">' + authors + ' · <span class="venue">' + esc(p.venue) + "</span>, " + esc(p.year) + "</div>" +
        summary +
        '<div class="p-actions">' + detail + ext + "</div>" +
        "</div>" + fig + "</div></div>";
    }).join("");

    document.getElementById("footerText").textContent = pick(FOOTER);
    initReveal();
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    render();
  });

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

  function initReveal() {
    var targets = document.querySelectorAll(".reveal:not(.visible)");
    if ("IntersectionObserver" in window) {
      var ob = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); ob.unobserve(e.target); } });
      }, { threshold: 0.06 });
      targets.forEach(function (t) { ob.observe(t); });
    } else {
      targets.forEach(function (t) { t.classList.add("visible"); });
    }
  }

  render();
})();
