# -*- coding: utf-8 -*-
"""一次性生成 4 个论文详情页（生成后可删除本脚本）"""
import os

OUT = r"C:/Users/10625/WorkBuddy/2026-09-19-14-50-15/alan-resume-site/papers"

TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>__TITLE_SHORT__ · 李聃 Alan Li</title>
<style>
:root {
  --bg: #fdfdfc; --surface: #ffffff; --text: #1c1e26; --soft: #4a4f5e;
  --muted: #828897; --border: #e8e8e3; --accent: #2f5fd0; --accent-soft: rgba(47,95,208,.08);
  --nav-h: 58px;
  --serif: "Noto Serif SC", "Songti SC", Georgia, serif;
  --sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
[data-theme="dark"] {
  --bg: #131417; --surface: #1b1d22; --text: #e7e8ec; --soft: #c0c4cf;
  --muted: #8a90a0; --border: #2b2e36; --accent: #7da2ff; --accent-soft: rgba(125,162,255,.12);
}
*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
body { font-family:var(--sans); background:var(--bg); color:var(--text); line-height:1.8; font-size:15.5px; transition:background .3s,color .3s; }
a { color:var(--accent); text-decoration:none; }
a:hover { text-decoration:underline; text-underline-offset:3px; }
.wrap { max-width:820px; margin:0 auto; padding:0 22px; }
.nav { position:fixed; top:0; left:0; right:0; height:var(--nav-h); z-index:100; background:color-mix(in srgb, var(--bg) 85%, transparent); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-bottom:1px solid var(--border); }
.nav-inner { max-width:820px; margin:0 auto; height:100%; padding:0 22px; display:flex; align-items:center; justify-content:space-between; }
.back { font-size:.88rem; font-weight:600; color:var(--soft); }
.back:hover { color:var(--accent); text-decoration:none; }
.nav-right { display:flex; gap:8px; }
.nav-btn { padding:5px 12px; font-size:.8rem; font-weight:600; color:var(--soft); background:transparent; border:1px solid var(--border); border-radius:999px; cursor:pointer; font-family:var(--sans); }
.nav-btn:hover { border-color:var(--accent); color:var(--accent); }
article { padding:calc(var(--nav-h) + 40px) 0 60px; }
.p-venue { font-size:.82rem; font-weight:600; color:var(--accent); letter-spacing:.04em; margin-bottom:10px; }
h1 { font-family:var(--serif); font-size:1.6rem; line-height:1.45; margin-bottom:12px; }
.pills { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px; }
.pill { font-size:.74rem; font-weight:600; padding:3px 12px; border-radius:999px; background:var(--accent-soft); color:var(--accent); }
.pill.review { background:rgba(217,119,6,.1); color:#d97706; }
.authors { font-size:.9rem; color:var(--muted); margin-bottom:4px; }
.authors .me { color:var(--accent); font-weight:700; }
.venue-line { font-size:.9rem; color:var(--soft); font-style:italic; margin-bottom:20px; }
.ext-link { display:inline-flex; align-items:center; gap:6px; font-size:.88rem; font-weight:600; color:var(--accent); border:1px solid var(--accent); padding:8px 18px; border-radius:999px; margin-bottom:26px; transition:all .2s; }
.ext-link:hover { background:var(--accent); color:#fff; text-decoration:none; }
.ext-link.disabled { color:var(--muted); border-color:var(--border); pointer-events:none; }
figure { margin:0 0 30px; border:1px solid var(--border); border-radius:12px; overflow:hidden; background:var(--surface); }
figure img { display:block; width:100%; height:auto; }
figcaption { padding:10px 16px; font-size:.8rem; color:var(--muted); border-top:1px solid var(--border); }
h2 { font-family:var(--serif); font-size:1.15rem; margin:26px 0 10px; padding-left:12px; border-left:3px solid var(--accent); }
h2 .h-en { font-family:var(--sans); font-size:.75rem; font-weight:500; color:var(--muted); margin-left:8px; letter-spacing:.05em; text-transform:uppercase; }
section p { color:var(--soft); font-size:.95rem; text-align:justify; }
.l-en { display:none; }
html[data-lang="en"] .l-zh { display:none; }
html[data-lang="en"] .l-en { display:block; }
footer { border-top:1px solid var(--border); padding:22px 0 30px; margin-top:30px; color:var(--muted); font-size:.84rem; display:flex; justify-content:space-between; }
@media (max-width:640px) { h1 { font-size:1.32rem; } }
</style>
</head>
<body>
<header class="nav"><div class="nav-inner">
  <a href="../index.html#publications" class="back"><span class="l-zh">← 返回论文列表</span><span class="l-en">← Publications</span></a>
  <div class="nav-right">
    <button class="nav-btn" id="langToggle">EN</button>
    <button class="nav-btn" id="themeToggle">◐</button>
  </div>
</div></header>
<main class="wrap"><article>
  <p class="p-venue">__VENUE_KICKER__</p>
  <h1>__TITLE__</h1>
  <div class="pills">__PILLS__</div>
  <p class="authors">__AUTHORS__</p>
  <p class="venue-line">__VENUE_LINE__</p>
  __EXTLINK__
  __FIGURE__
  <section>
    <h2><span class="l-zh">研究背景</span><span class="l-en">Background</span></h2>
    <p class="l-zh">__BG_ZH__</p>
    <p class="l-en">__BG_EN__</p>
  </section>
  <section>
    <h2><span class="l-zh">研究方法</span><span class="l-en">Methods</span></h2>
    <p class="l-zh">__MT_ZH__</p>
    <p class="l-en">__MT_EN__</p>
  </section>
  <section>
    <h2><span class="l-zh">主要结论</span><span class="l-en">Conclusions</span></h2>
    <p class="l-zh">__CC_ZH__</p>
    <p class="l-en">__CC_EN__</p>
  </section>
  <footer>
    <span>© 2026 李聃 Alan Li</span>
    <a href="../index.html#publications"><span class="l-zh">返回主页</span><span class="l-en">Back to homepage</span></a>
  </footer>
</article></main>
<script>
(function () {
  var LANG_KEY = "alan-site-lang", THEME_KEY = "alan-site-theme";
  var lang = "zh";
  try { lang = localStorage.getItem(LANG_KEY) || "zh"; } catch (e) {}
  if (lang !== "zh" && lang !== "en") lang = "zh";
  function applyLang(l) {
    lang = l;
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en");
    document.getElementById("langToggle").textContent = l === "zh" ? "EN" : "中";
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  }
  applyLang(lang);
  document.getElementById("langToggle").addEventListener("click", function () {
    applyLang(lang === "zh" ? "en" : "zh");
  });
  function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); try { localStorage.setItem(THEME_KEY, t); } catch (e) {} }
  var saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
  if (saved === "dark" || saved === "light") applyTheme(saved);
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");
  document.getElementById("themeToggle").addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
</script>
</body>
</html>
"""

FIG = """<figure>
    <img src="__IMG__" alt="Graphical abstract" />
    <figcaption><span class="l-zh">图形摘要（来源：期刊官网）</span><span class="l-en">Graphical abstract (source: publisher)</span></figcaption>
  </figure>"""

def pill_zh_en(zh, en, review=False):
    cls = "pill review" if review else "pill"
    return '<span class="%s"><span class="l-zh">%s</span><span class="l-en">%s</span></span>' % (cls, zh, en)

PAGES = [
  {
    "file": "ncomm-kagome.html",
    "TITLE_SHORT": "Kagome Electronic Lattice",
    "VENUE_KICKER": "NATURE COMMUNICATIONS · UNDER REVIEW",
    "TITLE": "Energy Barrier Inversion and Kagome Electronic Lattice Induced by Incommensurate Moiré Reconstruction",
    "PILLS": pill_zh_en("第一作者", "First author") + pill_zh_en("中科院一区 Top", "CAS Q1 Top") + pill_zh_en("在审", "Under review", True),
    "AUTHORS": '<span class="me">Dan Li</span> et al.',
    "VENUE_LINE": "Nature Communications, 2026（稿件在审）",
    "EXTLINK": '<span class="ext-link disabled"><span class="l-zh">在审中 · 录用后更新链接</span><span class="l-en">Under review · link coming soon</span></span>',
    "FIGURE": "",
    "BG_ZH": "莫尔超晶格为研究关联电子态与激子物理提供了高度可调的平台。在转角 WSe2/WS2 等半导体异质结中，晶格重构会显著改变莫尔势能面，但非公度（incommensurate）莫尔体系的重构行为及其对激子与电子晶格的影响仍缺乏系统理解。",
    "BG_EN": "Moiré superlattices provide a highly tunable platform for correlated electronic states and exciton physics. In twisted semiconductor heterostructures such as WSe2/WS2, lattice reconstruction strongly reshapes the moiré potential landscape, yet the reconstruction behavior of incommensurate moiré systems and its impact on excitons and electronic lattices remain poorly understood.",
    "MT_ZH": "采用机械剥离结合干法转移堆垛技术，可控制备不同转角的 WSe2/WS2 范德华异质结；利用低温光致发光（PL）、偏振分辨光谱与扫描探针表征，并结合原子尺度模拟与理论分析，系统研究非公度莫尔重构对势能面与激子性质的调控规律。",
    "MT_EN": "Twisted WSe2/WS2 van der Waals heterostructures were fabricated by mechanical exfoliation and dry-transfer stacking. Low-temperature photoluminescence (PL), polarization-resolved spectroscopy and scanning probe characterization, combined with atomistic simulation and theoretical analysis, were used to systematically investigate how incommensurate moiré reconstruction reshapes the potential landscape and excitonic properties.",
    "CC_ZH": "首次发现非公度莫尔重构可诱导莫尔势能垒反转（energy barrier inversion）与莫尔激子圆偏振手性的切换；在特定转角下体系形成 Kagome 电子态晶格，为莫尔量子物态的人工调控提供了全新机制。稿件目前处于 Nature Communications 审稿阶段，更多细节将于发表后更新。",
    "CC_EN": "We reveal that incommensurate moiré reconstruction induces an inversion of the moiré energy barrier and a switch of exciton circular polarization; at specific twist angles the system hosts a Kagome electronic lattice, offering a new mechanism for engineering moiré quantum states. The manuscript is currently under review at Nature Communications.",
  },
  {
    "file": "nr-bi2sio5.html",
    "TITLE_SHORT": "2D Bi2SiO5 Ferroelectricity",
    "VENUE_KICKER": "NANO RESEARCH · 2026",
    "TITLE": "Synthesis and Intrinsic Out-of-Plane Ferroelectricity of 2D Bi2SiO5",
    "PILLS": pill_zh_en("第二作者", "2nd author") + pill_zh_en("中科院一区 Top", "CAS Q1 Top"),
    "AUTHORS": 'Di Wang, Yingying Liu, Hongmei Zhang, <span class="me">Dan Li</span>, Hua Zhang, Liqiang Zhang, Shanhao Li, Miaomiao Liu, Zhihui Chen*, Xidong Duan*',
    "VENUE_LINE": "Nano Research, 2026 · DOI: 10.26599/NR.2025.94908068",
    "EXTLINK": '<a class="ext-link" href="https://doi.org/10.26599/NR.2025.94908068" target="_blank" rel="noopener noreferrer"><span class="l-zh">查看原文 ↗</span><span class="l-en">Read the paper ↗</span></a>',
    "FIGURE": FIG.replace("__IMG__", "pub-bi2sio5.jpg"),
    "BG_ZH": "二维铁电材料兼具原子级厚度与自发极化，是构建微型化、低功耗、高密度非易失性存储器件的理想候选。然而随着厚度减薄，退极化效应会显著抑制铁电性，使得本征二维铁电体（尤其是面外极化体系）极为稀缺。",
    "BG_EN": "Two-dimensional ferroelectric materials, combining atomic-scale thickness with spontaneous polarization, are ideal candidates for miniaturized, low-power, high-density non-volatile memory. However, ferroelectricity is often suppressed by depolarization effects as thickness decreases, making intrinsic 2D ferroelectrics—especially those with out-of-plane polarization—extremely scarce.",
    "MT_ZH": "通过化学气相沉积（CVD）合成二维 Bi2SiO5（BSO）纳米片；利用角分辨偏振拉曼（ARPRS）与二次谐波（SHG）确认其非中心对称晶体结构；借助压电力显微镜（PFM）观测可翻转极化与铁电回滞回线，并进一步构建垂直器件验证铁电开关行为。",
    "MT_EN": "2D Bi2SiO5 (BSO) nanosheets were synthesized by chemical vapor deposition (CVD). Their non-centrosymmetric structure was confirmed by angle-resolved polarized Raman spectroscopy (ARPRS) and second-harmonic generation (SHG). Switchable polarization and ferroelectric hysteresis loops were revealed by piezoresponse force microscopy (PFM), and ferroelectric switching was further validated in a vertical device.",
    "CC_ZH": "实验证实了二维 BSO 的本征面外铁电性，显著扩展了二维铁电材料家族，为其在非易失性存储及存算一体器件中的应用奠定了基础。",
    "CC_EN": "The intrinsic out-of-plane ferroelectricity of 2D BSO is experimentally established, significantly expanding the 2D ferroelectric family and paving the way for its integration into non-volatile memory and in-memory computing devices.",
  },
  {
    "file": "nl-cufes2.html",
    "TITLE_SHORT": "2D CuFeS2 Antiferromagnet",
    "VENUE_KICKER": "NANO LETTERS · 2025",
    "TITLE": "Synthesis of Two-Dimensional Antiferromagnetic Semiconductor CuFeS2 with a High Néel Temperature",
    "PILLS": pill_zh_en("第五作者", "5th author") + pill_zh_en("JCR 一区 Top", "JCR Q1 Top"),
    "AUTHORS": 'Di Wang, Yingying Liu, Hua Zhang, Yong Liu, <span class="me">Dan Li</span>, Zucheng Zhang, Ping Lu, Chen Yi, Kun He, Liqiang Zhang, et al.',
    "VENUE_LINE": "Nano Letters, 2025, 25(14), 5925–5931 · DOI: 10.1021/acs.nanolett.5c01088",
    "EXTLINK": '<a class="ext-link" href="https://doi.org/10.1021/acs.nanolett.5c01088" target="_blank" rel="noopener noreferrer"><span class="l-zh">查看原文 ↗</span><span class="l-en">Read the paper ↗</span></a>',
    "FIGURE": "",
    "BG_ZH": "二维反铁磁半导体在自旋电子学与磁光器件中极具应用前景，但已报道的体系普遍存在奈尔温度（TN）低、空气稳定性差的问题，严重限制了实际应用。",
    "BG_EN": "Two-dimensional antiferromagnetic (AFM) semiconductors are promising for spintronics and magneto-optical devices, but reported systems generally suffer from low Néel temperatures (TN) and poor air stability, which severely limit practical applications.",
    "MT_ZH": "采用化学气相沉积（CVD）合成二维 CuFeS2（CFS）纳米片；通过电学输运测量确认其半导体特性；利用变温 Raman 与二次谐波（SHG）光谱证实反铁磁序并测定磁相变温度。",
    "MT_EN": "2D CuFeS2 (CFS) nanosheets were synthesized by chemical vapor deposition. Their semiconducting nature was confirmed by electrical transport measurements, and the AFM order together with the high magnetic phase-transition temperature was demonstrated by temperature-dependent Raman and second-harmonic generation (SHG) spectroscopy.",
    "CC_ZH": "二维 CFS 表现出高达 473.0 ± 0.4 K 的奈尔温度，并可在空气中稳定存在至少两周。该工作提供了一种兼具高 TN 与空气稳定性的新型二维反铁磁半导体，为非常规物性研究与高温自旋电子学开辟了新的材料平台。",
    "CC_EN": "The 2D CFS exhibits a high TN of 473.0 ± 0.4 K and remains stable in air for at least two weeks. This work provides a new 2D AFM semiconductor combining high TN with air stability, offering a novel platform for unconventional physics and high-temperature spintronics.",
  },
  {
    "file": "nr-wse2-strain.html",
    "TITLE_SHORT": "Strain Engineering of WSe2",
    "VENUE_KICKER": "NANO RESEARCH · 2026",
    "TITLE": "Strain Engineering of Emergent Anisotropic Responses in WSe2 Monolayer",
    "PILLS": pill_zh_en("合作作者", "Co-author") + pill_zh_en("中科院一区 Top", "CAS Q1 Top"),
    "AUTHORS": 'Yang Du, Yuhao Kong, Shunhui Zhang, Jinhui Cao, Baihui Zhang, Junjie Jin, Yulong Tang, <span class="me">Dan Li</span>, Zhihui Chen, Jun He, et al.',
    "VENUE_LINE": "Nano Research, 2026 · DOI: 10.26599/NR.2026.94908725",
    "EXTLINK": '<a class="ext-link" href="https://doi.org/10.26599/NR.2026.94908725" target="_blank" rel="noopener noreferrer"><span class="l-zh">查看原文 ↗</span><span class="l-en">Read the paper ↗</span></a>',
    "FIGURE": FIG.replace("__IMG__", "pub-wse2.jpg"),
    "BG_ZH": "应变工程是打破二维材料本征对称性、诱导可调各向异性响应的有效策略，但如何通过应变获得新型各向异性行为仍是一个挑战，且缺乏系统研究。",
    "BG_EN": "Strain engineering is an effective strategy to break the intrinsic symmetry of two-dimensional materials and enable tunable anisotropic responses. However, achieving novel anisotropic behaviors through strain remains challenging and lacks systematic study.",
    "MT_ZH": "将单层 WSe2 与 SiO2 纳米棒构筑 2D/1D 混合维异质结构，利用纳米棒直径精确调控 WSe2 中的应变；通过偏振分辨光致发光、压电力显微镜（PFM）等手段表征其各向异性光学与电学响应，并构筑光电探测器进行功能验证。",
    "MT_EN": "Mixed-dimensional 2D/1D heterostructures were constructed from monolayer WSe2 and SiO2 nanorods, whose diameters precisely regulate the strain in WSe2. Polarization-resolved photoluminescence and piezoresponse force microscopy (PFM) were used to characterize the anisotropic optical and electrical responses, and heterostructure photodetectors were fabricated for functional demonstration.",
    "CC_ZH": "应变界面处的 WSe2 表现出可调的光致发光增强、带隙调制与偏振发光，并意外观测到面内铁电性。异质结探测器覆盖 375–808 nm 宽波段，光开关比约 3200，探测率达 2.4×10⁹ Jones，响应速度约 11.3 ms，二向色比在 1–1.51 范围内可调，并可清晰成像字母“H”。该工作为调控 TMDC 各向异性响应并赋予其新功能提供了有效策略。",
    "CC_EN": "Strained interfacial WSe2 exhibits tunable PL enhancement, bandgap modulation and polarized emission, with unexpected in-plane ferroelectricity. The photodetectors cover 375–808 nm broadband detection with a photoswitching ratio of ~3200, a detectivity of 2.4×10⁹ Jones, a response time of ~11.3 ms, and a tunable dichroic ratio from 1 to 1.51, reliably imaging the letter \"H\". This work offers an effective strategy for tailoring anisotropic responses of TMDCs and endowing them with new functionalities.",
  },
]

os.makedirs(OUT, exist_ok=True)
for p in PAGES:
    html = TEMPLATE
    for k, v in p.items():
        if k != "file":
            html = html.replace("__%s__" % k, v)
    path = os.path.join(OUT, p["file"])
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("written:", p["file"], len(html))
print("done")
