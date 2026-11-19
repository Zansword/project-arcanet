// 1. 다국어 확장 사전
const i18nData = {
  ko: {
    "nav.intro": "소개문",
    "nav.overview": "설명",
    "nav.components": "구성요소",
    "nav.download": "다운로드",
    "nav.process": "개발과정",
    "nav.developer": "개발자",
    "nav.support": "후원",
    "hero.hint": "마우스 휠을 내려 아키텍처를 탐색하세요",
    "pillar.arcade": "사라져가는 아케이드 시대의 게임 문화",
    "pillar.board": "3D 아케이드 에뮬레이션을 위한 최적화된 아키텍처",
    "pillar.rollback": "결정론적 구조를 통해 지원되는 Rollback 넷코드",
    "pillar.community": "유저들이 서버를 개설하고 형성되는 독자적인 커뮤니티 인프라",
    "sec.intro.title": "소개문",
    "sec.intro.body": "Project Arcanet의 시작과 환영 인사말이 들어갈 영역입니다.",
    "sec.overview.title": "설명",
    "sec.overview.body": "에뮬레이터의 전체적인 목적과 핵심 설계 철학이 들어갈 영역입니다.",
    "sec.components.title": "구성요소",
    "sec.download.title": "다운로드",
    "sec.download.body": "최신 릴리즈 바이너리 및 실행 사양, 라이선스 안내가 들어갈 영역입니다.",
    "sec.download.btn": "GitHub Releases 바로가기",
    "sec.process.title": "개발 과정",
    "sec.process.body": "과거 포크 프로젝트 분석에서 독자적 아케이드 보드 재구축 및 사후 소스 공개 로드맵까지의 기록입니다.",
    "sec.developer.title": "About Developer",
    "sec.developer.body": "개발자 소개 및 엔지니어링 철학이 들어갈 영역입니다.",
    "sec.support.title": "후원 (Coffee)",
    "sec.support.body": "프로젝트의 지속적인 연구와 인프라 유지를 위한 자발적 후원 안내 영역입니다."
  },
  en: {
    "nav.intro": "Intro",
    "nav.overview": "Overview",
    "nav.components": "Components",
    "nav.download": "Download",
    "nav.process": "Dev Process",
    "nav.developer": "Developer",
    "nav.support": "Support",
    "hero.hint": "Scroll down to explore the architecture",
    "pillar.arcade": "Preserving the fading game culture of the arcade era",
    "pillar.board": "Optimized architecture built for 3D arcade emulation",
    "pillar.rollback": "Rollback netcode powered by a deterministic architecture",
    "pillar.community": "Independent community infrastructure where users host their own servers",
    "sec.intro.title": "Introduction",
    "sec.intro.body": "Welcome message and opening statement for Project Arcanet.",
    "sec.overview.title": "Overview",
    "sec.overview.body": "Core objectives and architectural philosophy of the emulator.",
    "sec.components.title": "Components",
    "sec.download.title": "Download",
    "sec.download.body": "Latest binary releases, system requirements, and licensing terms.",
    "sec.download.btn": "Go to GitHub Releases",
    "sec.process.title": "Development Process",
    "sec.process.body": "Journey from legacy fork research to proprietary arcade board reconstruction and future source release.",
    "sec.developer.title": "About Developer",
    "sec.developer.body": "Developer background and low-level systems engineering philosophy.",
    "sec.support.title": "Support (Coffee)",
    "sec.support.body": "Voluntary support to sustain ongoing research and infrastructure."
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

// 2. 초기 시퀀스: ARCANET 페이드인 -> ABRO 전환 -> 세로 A/B/R/O 표시
const brandMorph = document.getElementById("brand-morph");
const abroMatrix = document.getElementById("abro-matrix");

function runIntroSequence() {
  if (!brandMorph || !abroMatrix) return;

  // 1) ARCANET 페이드인
  requestAnimationFrame(() => {
    setTimeout(() => {
      brandMorph.classList.add("fade-in");
    }, 150);

    // 2) ABRO 형태로 축약 트랜지션
    setTimeout(() => {
      brandMorph.classList.add("to-abro");
    }, 1150);

    // 3) 세로 A / B / R / O 정렬 레이어로 전환
    setTimeout(() => {
      brandMorph.classList.add("hide-morph");
      abroMatrix.classList.add("vertical-ready");
      requestAnimationFrame(() => {
        setTimeout(() => {
          abroMatrix.classList.add("vertical-show");
        }, 40);
      });
    }, 1750);
  });
}

// 3. 마우스 휠 스크롤 연동 스테이지 제어
const heroStage = document.getElementById("hero-stage");
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
  bgMedia.style.transform = `scale(${scale.toFixed(3)})`;

  // 휠을 내리면 세로 A/B/R/O 옆 풀 단어 확장
  if (progress >= 0.06) {
    abroMatrix.classList.add("expanded");
  } else {
    abroMatrix.classList.remove("expanded");
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

window.addEventListener("DOMContentLoaded", runIntroSequence);
window.addEventListener("scroll", handleScrollStage, { passive: true });
handleScrollStage();
