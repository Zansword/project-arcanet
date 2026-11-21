// 1. 다국어 확장 사전
const i18nData = {
  ko: {
    "nav.architecture": "아키텍처",
    "nav.goals": "목표",
    "nav.releases": "릴리즈",
    "hero.hint": "마우스 휠을 내려 아키텍처를 탐색하세요",
    "pillar.arcade": "사라져가는 아케이드 시대의 게임 문화 보존과 계승",
    "pillar.board": "3D 아케이드 에뮬레이션을 위한 최적화된 아키텍처",
    "pillar.rollback": "결정론적 구조를 통해 지원되는 Rollback 넷코드",
    "pillar.community": "유저들이 서버를 개설하고 형성되는 독자적인 커뮤니티 인프라",
    "goals.eyebrow": "Arcanet is Heading to...",
    "goals.title": "ARCANET의 목표",
    "card1.en": "Up to 4 players netplay",
    "card1.title": "3~4인 다중 멀티플레이",
    "card1.games": "던전 앤 드래곤 / 닌자 베이스볼 배트맨",
    "card2.en": "Life to forgotten 3D Hardware",
    "card2.title": "잊혀진 3D 아케이드 하드웨어",
    "card2.games": "테크로맨서 / 동물철권 / 철권 2",
    "card3.en": "Infrastructure of Arcade Netplay",
    "card3.title": "아케이드 넷플레이 인프라",
    "card3.desc": "안정적이고 저지연의 아케이드 네트워크 플레이 기반을 구축합니다.",
    "card4.en": "Retro Communities Ark",
    "card4.title": "레트로 커뮤니티의 방주",
    "card4.quote": "서버를 사용자들이 개설함으로써, 세대를 거쳐 계승되는 PLAYGROUND",
    "sec.download.btn": "GitHub Releases 바로가기"
  },
  en: {
    "nav.architecture": "Architecture",
    "nav.goals": "Goals",
    "nav.releases": "Releases",
    "hero.hint": "Scroll down to explore the architecture",
    "pillar.arcade": "Preserve and pass on gaming culture to the next generation",
    "pillar.board": "Optimized architecture built for 3D arcade emulation",
    "pillar.rollback": "Rollback netcode powered by a deterministic architecture",
    "pillar.community": "Independent community infrastructure where users host their own servers",
    "goals.eyebrow": "Arcanet is Heading to...",
    "goals.title": "ARCANET Goals",
    "card1.en": "Up to 4 players netplay",
    "card1.title": "Up to 4 Players Netplay",
    "card1.games": "Dungeons & Dragons / Ninja Baseball Batman",
    "card2.en": "Life to forgotten 3D Hardware",
    "card2.title": "Life to Forgotten 3D Hardware",
    "card2.games": "Tech Romancer / Bloody Roar / Tekken 2",
    "card3.en": "Infrastructure of Arcade Netplay",
    "card3.title": "Infrastructure of Arcade Netplay",
    "card3.desc": "Building a reliable, low-latency foundation for arcade network play.",
    "card4.en": "Retro Communities Ark",
    "card4.title": "Retro Communities Ark",
    "card4.quote": "A PLAYGROUND passed down across generations, powered by user-hosted servers",
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

// 2. 초기 시퀀스
function runIntroSequence() {
  const arcanetCombine = document.getElementById("arcanet-combine");
  const abroRows = document.querySelectorAll(".abro-row[data-seq]");
  if (!arcanetCombine || !abroRows.length) return;

  arcanetCombine.classList.remove("visible", "drop-out", "merged", "lift-up");
  abroRows.forEach((row) => row.classList.remove("show"));

  setTimeout(() => {
    arcanetCombine.classList.add("visible", "lift-up");
  }, 50);

  setTimeout(() => {
    arcanetCombine.classList.add("drop-out");
  }, 1000);

  setTimeout(() => {
    arcanetCombine.classList.add("merged");
  }, 2400);

  const startAbroDelay = 5050;
  const stepInterval = 320;

  abroRows.forEach((row, idx) => {
    setTimeout(() => {
      row.classList.add("show");
    }, startAbroDelay + idx * stepInterval);
  });
}

// 3. 마우스 휠 스크롤 연동 스테이지 제어
const heroStage = document.getElementById("hero-stage");
const abroMatrix = document.getElementById("abro-matrix");
const layers = document.querySelectorAll(".stage-layer");
const dots = document.querySelectorAll(".stage-progress .dot");
const bgMedia = document.getElementById("bg-media");

function handleScrollStage() {
  if (!heroStage) return;
  const rect = heroStage.getBoundingClientRect();
  const scrollableDistance = heroStage.offsetHeight - window.innerHeight;
  if (scrollableDistance <= 0) return;

  const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

  const scale = 1 + progress * 0.14;
  if (bgMedia) bgMedia.style.transform = `scale(${scale.toFixed(3)})`;

  if (abroMatrix) {
    if (progress >= 0.06) {
      abroMatrix.classList.add("expanded");
    } else {
      abroMatrix.classList.remove("expanded");
    }
  }

  let activeIndex = 0;
  if (progress < 0.24) activeIndex = 0;
  else if (progress < 0.43) activeIndex = 1;
  else if (progress < 0.62) activeIndex = 2;
  else if (progress < 0.81) activeIndex = 3;
  else activeIndex = 4;

  layers.forEach((layer, idx) => {
    layer.classList.toggle("active", idx === activeIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
}

// 우측 점 인디케이터 클릭 시 해당 스텝으로 스크롤 이동
const stepProgressTargets = [0, 0.3, 0.5, 0.7, 0.9];
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    if (!heroStage) return;
    const stageTop = heroStage.offsetTop;
    const scrollableDistance = heroStage.offsetHeight - window.innerHeight;
    const targetY = stageTop + scrollableDistance * (stepProgressTargets[idx] ?? 0);
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
