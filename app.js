// 1. 다국어 확장 사전 (KO / EN)
const i18nData = {
  ko: {
    "nav.intro": "소개문",
    "nav.overview": "설명",
    "nav.components": "구성요소",
    "nav.news": "소식",
    "nav.download": "다운로드",
    "nav.process": "개발 과정",
    "nav.developer": "About Developer",
    "nav.support": "후원",
    "hero.hint": "마우스 휠을 내려 프레젠테이션을 넘기세요",
    "pillar.arcade": "사라져가는 아케이드 시대의 게임 문화 보존과 계승",
    "pillar.board": "3D 아케이드 에뮬레이션을 위한 최적화된 아키텍처",
    "pillar.rollback": "결정론적 구조를 통해 지원되는 Rollback 넷코드",
    "pillar.community": "유저들이 서버를 개설하고 형성되는 독자적인 커뮤니티 인프라",
    "goals.eyebrow": "Arcanet is Heading to...",
    "goals.title": "ARCANET의 목표",
    "card1.en": "Up to 4 players netplay",
    "card1.title": "3~4인 다중 멀티플레이",
    "card2.en": "Life to forgotten 3D Hardware",
    "card2.title": "잊혀진 3D 아케이드 하드웨어",
    "card3.en": "Infrastructure of Arcade Netplay · Retro Communities Ark",
    "card3.title": "아케이드 넷플레이 인프라",
    "card3.desc": "서버를 사용자들이 개설함으로써, 세대를 거쳐 계승되는 아케이드 커뮤니티의 방주(ARK)",
    "release.eyebrow": "PROJECT ARCANET",
    "release.title": "릴리즈 및 저장소",
    "release.desc": "최신 바이너리 릴리즈와 각 섹션별 상세 페이지는 상단 메뉴 또는 GitHub Releases에서 확인할 수 있습니다.",
    "sec.download.btn": "GitHub Releases 바로가기",
    "back.home": "돌아가기",

    // 소개문 (pages/intro.html)
    "page.intro.eyebrow": "INTRO & ARCHIVE",
    "page.intro.title": "소개문",
    "page.intro.lead": "Arcade와 Network의 합성어 — 세대를 넘어 이어질 아케이드 넷플레이 인프라를 향한 기록입니다.",

    // 설명 (pages/overview.html)
    "page.overview.eyebrow": "ARCHITECTURE & GUIDE",
    "page.overview.title": "설명",
    "page.overview.lead": "ARCANET의 2단계 계층 아키텍처 구조와 ROM 정책 및 설치·사용 안내입니다.",

    // 구성요소 (pages/components.html)
    "page.components.eyebrow": "COMPONENTS & FILES",
    "page.components.title": "구성요소",
    "page.components.lead": "실행 파일과 코어 모듈, 커뮤니티 매치메이킹 서버의 역할을 정리했습니다.",

    // 소식 (pages/news.html)
    "page.news.eyebrow": "DEV NOTES & ANNOUNCEMENTS",
    "page.news.title": "소식",
    "page.news.lead": "개발자 노트와 주요 공지사항을 전하는 공간입니다.",

    // 다운로드 (pages/download.html)
    "page.download.eyebrow": "RELEASES & DOWNLOAD",
    "page.download.title": "다운로드",
    "page.download.lead": "최신 빌드 바이너리, 지원 하드웨어 및 합법적 ROM 추출 도구 안내입니다.",

    // 개발 과정 (pages/process.html)
    "page.process.eyebrow": "ORIGIN & TIMELINE",
    "page.process.title": "개발 과정",
    "page.process.lead": "2015년부터 ARCANET 아키텍처에 도달하기까지의 시행착오와 기술적 판단의 연대기입니다.",

    // About Developer (pages/developer.html)
    "page.developer.eyebrow": "ABOUT DEVELOPER",
    "page.developer.title": "About Developer",
    "page.developer.lead": "생각나는 아이디어가 있다면 실제로 테스트해보는 걸 좋아하는 사람입니다.",

    // 후원 (pages/support.html)
    "page.support.eyebrow": "SUPPORT & COFFEE",
    "page.support.title": "후원",
    "page.support.lead": "프로젝트의 지속적인 연구와 테스트 환경 유지에 힘을 보태고 싶다면 Buy Me a Coffee를 이용해 주세요."
  },
  en: {
    "nav.intro": "Intro",
    "nav.overview": "Overview",
    "nav.components": "Components",
    "nav.news": "News",
    "nav.download": "Download",
    "nav.process": "Dev Process",
    "nav.developer": "About Developer",
    "nav.support": "Support",
    "hero.hint": "Scroll down to step through the presentation",
    "pillar.arcade": "Preserve and pass on arcade gaming culture to the next generation",
    "pillar.board": "Architecture tailored for 3D arcade emulation",
    "pillar.rollback": "Rollback netcode powered by a deterministic state design",
    "pillar.community": "Independent community infrastructure where users host their own servers",
    "goals.eyebrow": "Arcanet is Heading to...",
    "goals.title": "ARCANET Goals",
    "card1.en": "Up to 4 players netplay",
    "card1.title": "Up to 4 Players Netplay",
    "card2.en": "Life to forgotten 3D Hardware",
    "card2.title": "Life to Forgotten 3D Hardware",
    "card3.en": "Infrastructure of Arcade Netplay · Retro Communities Ark",
    "card3.title": "Infrastructure of Arcade Netplay",
    "card3.desc": "An arcade community ARK passed down across generations through user-hosted servers",
    "release.eyebrow": "PROJECT ARCANET",
    "release.title": "Releases & Repository",
    "release.desc": "Latest binary releases and section pages are accessible from the top navigation bar or GitHub Releases.",
    "sec.download.btn": "Go to GitHub Releases",
    "back.home": "Back",

    "page.intro.eyebrow": "INTRO & ARCHIVE",
    "page.intro.title": "Introduction",
    "page.intro.lead": "A portmanteau of Arcade and Network — built to leave behind a lasting netplay infrastructure for future generations.",

    "page.overview.eyebrow": "ARCHITECTURE & GUIDE",
    "page.overview.title": "Overview & Setup",
    "page.overview.lead": "Two-tier system architecture, ROM policy, and setup notes for ARCANET.",

    "page.components.eyebrow": "COMPONENTS & FILES",
    "page.components.title": "Components",
    "page.components.lead": "Overview of the frontend executable, hardware core libraries, and community matchmaking server.",

    "page.news.eyebrow": "DEV NOTES & ANNOUNCEMENTS",
    "page.news.title": "News & Dev Notes",
    "page.news.lead": "Developer notes, architecture updates, and announcements for Project Arcanet.",

    "page.download.eyebrow": "RELEASES & DOWNLOAD",
    "page.download.title": "Download",
    "page.download.lead": "Latest binary builds, supported hardware logs, and legal ROM extraction references.",

    "page.process.eyebrow": "ORIGIN & TIMELINE",
    "page.process.title": "Development Process",
    "page.process.lead": "A decade-long timeline of experiments, reverse engineering, and architectural shifts leading to ARCANET.",

    "page.developer.eyebrow": "ABOUT DEVELOPER",
    "page.developer.title": "About Developer",
    "page.developer.lead": "Someone who enjoys putting ideas to the test in real code and hardware.",

    "page.support.eyebrow": "SUPPORT & COFFEE",
    "page.support.title": "Support",
    "page.support.lead": "If you would like to support ongoing research and test setups, you can use Buy Me a Coffee."
  }
};

function setLanguage(lang) {
  const dict = i18nData[lang] || i18nData.ko;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // 본문 다국어 블록 전환 (data-lang-block="ko" / "en")
  document.querySelectorAll("[data-lang-block]").forEach((block) => {
    const blockLang = block.getAttribute("data-lang-block");
    block.style.display = blockLang === lang ? "" : "none";
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  try {
    localStorage.setItem("arcanet_lang", lang);
  } catch (e) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});

// 저장된 언어 설정 복원
(function initLanguage() {
  let saved = "ko";
  try {
    saved = localStorage.getItem("arcanet_lang") || "ko";
  } catch (e) {}
  setLanguage(saved);
})();

// 2. 초기 시퀀스: 합체 및 상승 -> A/B/R/O 및 풀네임 자동 표시
function runIntroSequence() {
  const arcanetCombine = document.getElementById("arcanet-combine");
  const abroMatrix = document.getElementById("abro-matrix");
  const abroRows = document.querySelectorAll(".abro-row[data-seq]");
  if (!arcanetCombine || !abroRows.length) return;

  arcanetCombine.classList.remove("visible", "drop-out", "merged", "lift-up");
  abroRows.forEach((row) => row.classList.remove("show"));
  if (abroMatrix) abroMatrix.classList.remove("expanded");

  setTimeout(() => {
    arcanetCombine.classList.add("visible", "lift-up");
  }, 50);

  setTimeout(() => {
    arcanetCombine.classList.add("drop-out", "merged");
  }, 1100);

  const startAbroDelay = 4400;
  const stepInterval = 680;

  abroRows.forEach((row, idx) => {
    setTimeout(() => {
      row.classList.add("show");
    }, startAbroDelay + idx * stepInterval);
  });

  setTimeout(() => {
    if (abroMatrix) abroMatrix.classList.add("expanded");
  }, startAbroDelay + abroRows.length * stepInterval + 250);
}

// 3. 마우스 휠 스크롤 연동 프레젠테이션 스테이지 제어
const heroStage = document.getElementById("hero-stage");
const layers = Array.from(document.querySelectorAll(".stage-layer"));
const dots = Array.from(document.querySelectorAll(".stage-progress .dot"));
const bgMedia = document.getElementById("bg-media");
const bgShowcaseImage = document.getElementById("bg-showcase-image");

let currentActiveIndex = -1;
let lastBgUrl = "";

function updateBackgroundImage(layer) {
  if (!bgShowcaseImage || !layer) return;
  const imgUrl = (layer.getAttribute("data-bg-image") || "").trim();

  if (!imgUrl) {
    lastBgUrl = "";
    bgShowcaseImage.classList.remove("has-image");
    return;
  }

  if (imgUrl === lastBgUrl) {
    bgShowcaseImage.classList.add("has-image");
    return;
  }

  const probe = new Image();
  probe.onload = () => {
    lastBgUrl = imgUrl;
    bgShowcaseImage.style.backgroundImage = `url("${imgUrl}")`;
    bgShowcaseImage.classList.add("has-image");
  };
  probe.onerror = () => {
    lastBgUrl = "";
    bgShowcaseImage.classList.remove("has-image");
  };
  probe.src = imgUrl;
}

function applyActiveSlide(nextIndex) {
  if (nextIndex === currentActiveIndex) return;
  currentActiveIndex = nextIndex;

  layers.forEach((layer, idx) => {
    layer.classList.toggle("active", idx === nextIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === nextIndex);
  });

  updateBackgroundImage(layers[nextIndex]);
}

function handleScrollStage() {
  if (!heroStage || !layers.length) return;
  const scrollableDistance = heroStage.offsetHeight - window.innerHeight;
  if (scrollableDistance <= 0) return;

  const scrolledInsideStage = window.scrollY - heroStage.offsetTop;
  const progress = Math.min(Math.max(scrolledInsideStage / scrollableDistance, 0), 1);

  const scale = 1 + progress * 0.1;
  if (bgMedia) bgMedia.style.transform = `scale(${scale.toFixed(3)})`;

  const totalSlides = layers.length;
  const activeIndex =
    progress >= 0.999
      ? totalSlides - 1
      : Math.min(Math.floor(progress * totalSlides), totalSlides - 1);

  applyActiveSlide(activeIndex);
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    if (!heroStage || !layers.length) return;
    const stageTop = heroStage.offsetTop;
    const scrollableDistance = heroStage.offsetHeight - window.innerHeight;
    const ratio = (idx + 0.15) / layers.length;
    const targetY = stageTop + scrollableDistance * ratio;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  });
});

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", runIntroSequence);
} else {
  runIntroSequence();
}

window.addEventListener("scroll", handleScrollStage, { passive: true });
window.addEventListener("resize", handleScrollStage, { passive: true });
handleScrollStage();

// 4. 개발 과정(process.html) 마우스 휠 연동 가로 타임라인 제어
const processStage = document.getElementById("process-stage");
const hSlidesTrack = document.getElementById("h-slides-track");
const hSlides = Array.from(document.querySelectorAll(".h-slide"));
const hNodes = Array.from(document.querySelectorAll(".h-node"));
const hTimelineFill = document.getElementById("h-timeline-fill");

let activeProcessStep = -1;

function applyProcessStep(nextStep) {
  if (!hSlides.length || nextStep === activeProcessStep) return;
  activeProcessStep = nextStep;

  if (hSlidesTrack) {
    hSlidesTrack.style.transform = `translateX(-${nextStep * 100}%)`;
  }

  hSlides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === nextStep);
  });

  hNodes.forEach((node, idx) => {
    node.classList.toggle("active", idx === nextStep);
    node.classList.toggle("passed", idx < nextStep);
  });

  if (hTimelineFill && hNodes.length > 1) {
    const pct = (nextStep / (hNodes.length - 1)) * 100;
    hTimelineFill.style.width = `${pct}%`;
  }
}

function handleProcessScroll() {
  if (!processStage || !hSlides.length) return;
  const scrollable = processStage.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return;

  const scrolled = window.scrollY - processStage.offsetTop;
  const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
  const total = hSlides.length;
  const step =
    progress >= 0.999 ? total - 1 : Math.min(Math.floor(progress * total), total - 1);

  applyProcessStep(step);
}

function scrollToProcessStep(stepIndex) {
  if (!processStage || !hSlides.length) return;
  const scrollable = processStage.offsetHeight - window.innerHeight;
  const targetY = processStage.offsetTop + scrollable * ((stepIndex + 0.15) / hSlides.length);
  window.scrollTo({ top: targetY, behavior: "smooth" });
}

hNodes.forEach((node, idx) => {
  node.addEventListener("click", () => scrollToProcessStep(idx));
});

window.addEventListener("keydown", (e) => {
  if (!processStage || !hSlides.length) return;
  if (e.key === "ArrowRight" && activeProcessStep < hSlides.length - 1) {
    scrollToProcessStep(activeProcessStep + 1);
  } else if (e.key === "ArrowLeft" && activeProcessStep > 0) {
    scrollToProcessStep(activeProcessStep - 1);
  }
});

window.addEventListener("scroll", handleProcessScroll, { passive: true });
window.addEventListener("resize", handleProcessScroll, { passive: true });
handleProcessScroll();
