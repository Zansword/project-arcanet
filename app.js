// 1. 다국어 확장 사전
const i18nData = {
  ko: {
    "nav.intro": "소개문",
    "nav.overview": "설명",
    "nav.components": "구성요소",
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
    "sec.download.btn": "GitHub Releases 바로가기"
  },
  en: {
    "nav.intro": "Intro",
    "nav.overview": "Overview",
    "nav.components": "Components",
    "nav.download": "Download",
    "nav.process": "Dev Process",
    "nav.developer": "Developer",
    "nav.support": "Support",
    "hero.hint": "Scroll down to step through the presentation",
    "pillar.arcade": "Preserve and pass on gaming culture to the next generation",
    "pillar.board": "Optimized architecture built for 3D arcade emulation",
    "pillar.rollback": "Rollback netcode powered by a deterministic architecture",
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
    "release.desc": "Latest binary releases and section pages are available via the top navigation or GitHub Releases.",
    "sec.download.btn": "Go to GitHub Releases"
  }
};

function setLanguage(lang) {
  const dict = i18nData[lang] || i18nData.ko;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});

function runIntroSequence() {
  const arcanetCombine = document.getElementById("arcanet-combine");
  const abroMatrix = document.getElementById("abro-matrix");
  const abroRows = document.querySelectorAll(".abro-row[data-seq]");
  if (!arcanetCombine || !abroRows.length) return;

  arcanetCombine.classList.remove("visible", "drop-out", "merged", "lift-up");
  abroRows.forEach((row) => row.classList.remove("show"));
  if (abroMatrix) abroMatrix.classList.remove("expanded");

  // 0.05s: ARCADE NETWORK 정중앙 페이드 인 및 3.2s 시점 상승 예약
  setTimeout(() => {
    arcanetCombine.classList.add("visible", "lift-up");
  }, 50);

  // 1.1s: DE, WORK 소멸과 동시에 공백을 닫아 바로 ARCANET으로 합체
  setTimeout(() => {
    arcanetCombine.classList.add("drop-out", "merged");
  }, 1100);

  // 4.4s 이후: A -> B -> R -> O 천천히 순차 등장
  const startAbroDelay = 4400;
  const stepInterval = 680;

  abroRows.forEach((row, idx) => {
    setTimeout(() => {
      row.classList.add("show");
    }, startAbroDelay + idx * stepInterval);
  });

  // 모든 이니셜 등장 후 풀네임(rcade / oard / ust and rollback / ptimization) 부드럽게 확장
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

function updateBackgroundImage(layer) {
  if (!bgShowcaseImage || !layer) return;
  const imgUrl = (layer.getAttribute("data-bg-image") || "").trim();

  if (!imgUrl) {
    bgShowcaseImage.classList.remove("has-image");
    return;
  }

  const probe = new Image();
  probe.onload = () => {
    bgShowcaseImage.style.backgroundImage = `url("${imgUrl}")`;
    bgShowcaseImage.classList.add("has-image");
  };
  probe.onerror = () => {
    bgShowcaseImage.classList.remove("has-image");
  };
  probe.src = imgUrl;
}

function handleScrollStage() {
  if (!heroStage || !layers.length) return;
  const rect = heroStage.getBoundingClientRect();
  const scrollableDistance = heroStage.offsetHeight - window.innerHeight;
  if (scrollableDistance <= 0) return;

  const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

  const scale = 1 + progress * 0.1;
  if (bgMedia) bgMedia.style.transform = `scale(${scale.toFixed(3)})`;

  const totalSlides = layers.length;
  const activeIndex = Math.min(
    Math.floor(progress * totalSlides),
    totalSlides - 1
  );

  layers.forEach((layer, idx) => {
    layer.classList.toggle("active", idx === activeIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });

  updateBackgroundImage(layers[activeIndex]);
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
handleScrollStage();
