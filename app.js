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
    "sec.download.btn": "GitHub Releases 바로가기",
    "page.intro.eyebrow": "INTRO & COMMENT",
    "page.intro.title": "소개문",
    "page.intro.lead": "Project Arcanet을 직접 설계하고 구현하면서 느낀 소감과 코멘트를 담았습니다.",
    "page.intro.body": "결정론적 상태와 네트워크 동기화를 직접 검증하며 한 줄씩 쌓아 올린 기록입니다. 사라져 가는 아케이드 시대의 감각을 현재의 환경에서도 이어갈 수 있도록 만든 첫 번째 결과물입니다.",
    "page.overview.eyebrow": "PROJECT OVERVIEW",
    "page.overview.title": "설명",
    "page.overview.lead": "3D 아케이드 에뮬레이션, 결정론적 보드 구조, Rollback 넷코드, 그리고 유저 서버 기반 커뮤니티를 지향하는 프로젝트입니다.",
    "page.overview.body": "각 아케이드 보드의 상태를 명확히 분리·제어할 수 있는 코어 구조 위에 Rust 기반 실행 계층과 네트워크 동기화 모드를 결합해, 안정적인 멀티플레이와 장기적인 보존성을 목표로 합니다.",
    "page.components.eyebrow": "COMPONENTS & FILES",
    "page.components.title": "구성요소",
    "page.components.lead": "실행 파일과 코어 모듈, 설정 및 네트워크 구성 요소의 역할을 정리했습니다.",
    "page.components.body": "주요 실행 바이너리(abro.exe 등), 결정론적 보드 코어 모듈, 프런트엔드/래퍼 계층, 넷코드 세션 및 서버 구성 파일로 나뉩니다.",
    "page.download.eyebrow": "RELEASES & DOWNLOAD",
    "page.download.title": "다운로드",
    "page.download.lead": "최신 빌드 바이너리와 변경 사항은 GitHub Releases에서 내려받을 수 있습니다.",
    "page.download.body": "압축 해제 후 실행 파일과 필수 구성 파일을 같은 폴더에 두고 실행하세요. 세부 호환 목록과 버전별 주의사항은 릴리즈 노트를 참고해 주세요.",
    "page.process.eyebrow": "ORIGIN & PROCESS",
    "page.process.title": "개발 과정",
    "page.process.lead": "본격적인 구현에 들어가기 전까지의 문제의식과 준비 과정을 정리했습니다.",
    "page.process.body": "기존 아케이드 넷플레이 환경의 한계와 3D 기판 에뮬레이션의 병목을 살피면서, 처음부터 다시 설계해야 할 지점들을 하나씩 좁혀 나간 전사(前史)입니다.",
    "page.developer.eyebrow": "ABOUT DEVELOPER",
    "page.developer.title": "About Developer",
    "page.developer.lead": "저수준 하드웨어 구조와 네트워크 동기화에 관심을 두고 Project Arcanet을 만들고 있습니다.",
    "page.developer.body": "복잡한 추상화보다 실제 메모리 흐름과 프레임 단위 동작을 직접 확인하는 방식을 선호합니다. 아래 채널에서 개발 기록과 영상 로그를 확인하실 수 있습니다.",
    "page.support.eyebrow": "SUPPORT & COFFEE",
    "page.support.title": "후원",
    "page.support.lead": "프로젝트의 지속적인 연구와 테스트 환경 유지에 힘을 보태고 싶다면 Buy Me a Coffee를 이용해 주세요.",
    "page.support.body": "후원은 강제성이 없는 자발적 응원이며, 개발 시간과 테스트 인프라를 이어가는 데 큰 힘이 됩니다."
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
    "sec.download.btn": "Go to GitHub Releases",
    "page.intro.eyebrow": "INTRO & COMMENT",
    "page.intro.title": "Introduction",
    "page.intro.lead": "Reflections and notes from building Project Arcanet from the ground up.",
    "page.intro.body": "Built step by step by verifying deterministic states and network synchronization directly, aiming to keep the spirit of arcade play alive.",
    "page.overview.eyebrow": "PROJECT OVERVIEW",
    "page.overview.title": "Overview",
    "page.overview.lead": "Focused on 3D arcade emulation, deterministic board architecture, rollback netcode, and user-hosted community play.",
    "page.overview.body": "Combines deterministic board state management with a Rust frontend/wrapper layer and network synchronization modes for responsive multiplayer.",
    "page.components.eyebrow": "COMPONENTS & FILES",
    "page.components.title": "Components",
    "page.components.lead": "Overview of binaries, core modules, and configuration files.",
    "page.components.body": "Structured around the main executable (such as abro.exe), deterministic board modules, frontend/wrapper layer, and netcode/server components.",
    "page.download.eyebrow": "RELEASES & DOWNLOAD",
    "page.download.title": "Download",
    "page.download.lead": "Download the latest binary builds and read release notes on GitHub Releases.",
    "page.download.body": "Extract the archive keeping bundled files together, and check each release note for supported boards and build details.",
    "page.process.eyebrow": "ORIGIN & PROCESS",
    "page.process.title": "Development Process",
    "page.process.lead": "The background story and technical questions that led up to building Arcanet.",
    "page.process.body": "Started from examining limitations in legacy arcade netplay and 3D board emulation before designing a dedicated architecture.",
    "page.developer.eyebrow": "ABOUT DEVELOPER",
    "page.developer.title": "About Developer",
    "page.developer.lead": "Building Project Arcanet with a focus on low-level systems and deterministic state.",
    "page.developer.body": "Prefers inspecting actual memory behavior and frame-level execution. Links to blog posts and videos can be placed below.",
    "page.support.eyebrow": "SUPPORT & COFFEE",
    "page.support.title": "Support",
    "page.support.lead": "If you would like to support ongoing research and testing, you can buy me a coffee.",
    "page.support.body": "Support is completely voluntary and helps sustain development time and testing setups."
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
