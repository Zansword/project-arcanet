/* ==========================================================================
   Project Arcanet — Navigation, i18n, Hero Stage, Subpage Motion & Modal
   ========================================================================== */

(function initArcanetApp() {
  const STORAGE_KEY = "arcanet_lang";

  const I18N = {
    ko: {
      "nav.intro": "소개문",
      "nav.overview": "설명",
      "nav.components": "구성요소",
      "nav.news": "소식",
      "nav.download": "다운로드",
      "nav.process": "개발 과정",
      "nav.developer": "About Developer",
      "nav.support": "후원",

      "hero.hint": "마우스 휠을 내리세요",
      "pillar.arcade": "사라져가는 아케이드 시대의 게임 문화 보존과 계승",
      "pillar.board": "3D 아케이드 에뮬레이션을 위한 최적화된 아키텍처",
      "pillar.rollback": "1:1 대전부터 4인 협동까지, 상황에 따라 4가지 넷코드(Lockstep · PSN · Rollback · Hybrid)를 전환하는 아키텍처",
      "pillar.community": "유저들이 서버를 개설하고 형성되는 독자적인 커뮤니티 인프라",
      "goals.eyebrow": "Arcanet is Heading to...",
      "goals.title": "ARCANET의 목표",
      "card1.en": "Up to 4 players netplay",
      "card1.title": "3~4인 다중 멀티플레이",
      "card2.en": "Life to forgotten 3D Hardware",
      "card2.title": "잊혀진 3D 아케이드 하드웨어",
      "card3.en": "Infrastructure of Arcade Netplay · Retro Communities Ark",
      "card3.title": "아케이드 넷플레이 인프라",
      "card3.desc": "사용자들이 개설하는 애드온 서버, 세대를 거쳐 계승되는 아케이드 커뮤니티의 방주(ARK)",
      "release.eyebrow": "PROJECT ARCANET",
      "release.title": "릴리즈 및 저장소",
      "release.desc": "최신 바이너리 릴리즈와 각 섹션별 상세 페이지는 상단 메뉴 또는 GitHub Releases에서 확인할 수 있습니다.",
      "sec.download.btn": "GitHub Releases 바로가기",

      "page.intro.eyebrow": "MANIFESTO",
      "page.intro.title": "소개문",
      "page.intro.lead": "아케이드의 입력과 감각을 네트워크 너머 다음 세대까지 이어주기 위한 프로젝트 이야기",

      "page.overview.eyebrow": "ARCHITECTURE",
      "page.overview.title": "설명",
      "page.overview.lead": "결정론적 하드웨어 코어와 프론트엔드·네트워크 계층을 분리한 2단계 구조",

      "page.components.eyebrow": "SYSTEM MODULES",
      "page.components.title": "구성요소",
      "page.components.lead": "프론트엔드 실행 파일, C89 하드웨어 코어 DLL, 커뮤니티 호스팅 매치메이킹 서버",

      "page.download.eyebrow": "RELEASES & COMPATIBILITY",
      "page.download.title": "다운로드",
      "page.download.lead": "릴리즈 다운로드 안내, ROM 정책 및 지원 하드웨어/타이틀 현황",

      "page.process.eyebrow": "ORIGIN & TIMELINE",
      "page.process.title": "개발 과정",

      "page.developer.eyebrow": "CREATOR",
      "page.developer.title": "About Developer",
      "page.developer.lead": "실험과 검증으로 이어온 10여 년의 기록과 관련 프로젝트 모음",

      "page.support.eyebrow": "SUPPORT",
      "page.support.title": "후원",
      "page.support.lead": "지속적인 아키텍처 연구와 테스트 환경을 응원하는 방법",

      "back.home": "돌아가기"
    },
    en: {
      "nav.intro": "Intro",
      "nav.overview": "Overview",
      "nav.components": "Components",
      "nav.news": "News",
      "nav.download": "Download",
      "nav.process": "Process",
      "nav.developer": "About Developer",
      "nav.support": "Support",

      "hero.hint": "Scroll down to advance",
      "pillar.arcade": "Preserving and passing down disappearing arcade game culture",
      "pillar.board": "Architecture optimized for 3D arcade hardware emulation",
      "pillar.rollback": "From 1v1 duels to 4-player co-op, switching across 4 netcode modes (Lockstep · PSN · Rollback · Hybrid)",
      "pillar.community": "Independent community infrastructure powered by player-hosted servers",
      "goals.eyebrow": "Arcanet is Heading to...",
      "goals.title": "Goals of ARCANET",
      "card1.en": "Up to 4 players netplay",
      "card1.title": "3–4 Player Multiplayer",
      "card2.en": "Life to forgotten 3D Hardware",
      "card2.title": "Forgotten 3D Arcade Hardware",
      "card3.en": "Infrastructure of Arcade Netplay · Retro Communities Ark",
      "card3.title": "Arcade Netplay Infrastructure",
      "card3.desc": "User-hosted add-on servers and an enduring ark for retro arcade communities across generations",
      "release.eyebrow": "PROJECT ARCANET",
      "release.title": "Releases & Repository",
      "release.desc": "Latest binary releases and detailed section pages are available via the top navigation or GitHub Releases.",
      "sec.download.btn": "Go to GitHub Releases",

      "page.intro.eyebrow": "MANIFESTO",
      "page.intro.title": "Introduction",
      "page.intro.lead": "Why ARCANET began and how it aims to carry arcade netplay to future generations",

      "page.overview.eyebrow": "ARCHITECTURE",
      "page.overview.title": "Overview",
      "page.overview.lead": "Two-tier design separating deterministic hardware cores from frontend and networking",

      "page.components.eyebrow": "SYSTEM MODULES",
      "page.components.title": "Components",
      "page.components.lead": "Frontend executable, C89 hardware core DLLs, and community matchmaking server",

      "page.download.eyebrow": "RELEASES & COMPATIBILITY",
      "page.download.title": "Download",
      "page.download.lead": "Release links, ROM policy, and supported hardware & titles",

      "page.process.eyebrow": "ORIGIN & TIMELINE",
      "page.process.title": "Development Process",

      "page.developer.eyebrow": "CREATOR",
      "page.developer.title": "About Developer",
      "page.developer.lead": "Experiments, milestones, and related projects behind ARCANET",

      "page.support.eyebrow": "SUPPORT",
      "page.support.title": "Support",
      "page.support.lead": "Voluntary support for ongoing architecture research and testing",

      "back.home": "Back to Home"
    }
  };

  function applyLanguage(lang) {
    const targetLang = I18N[lang] ? lang : "ko";
    localStorage.setItem(STORAGE_KEY, targetLang);
    document.documentElement.lang = targetLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && I18N[targetLang][key]) {
        el.textContent = I18N[targetLang][key];
      }
    });

    document.querySelectorAll("[data-lang-block]").forEach((block) => {
      block.style.display = block.getAttribute("data-lang-block") === targetLang ? "" : "none";
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === targetLang);
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  applyLanguage(localStorage.getItem(STORAGE_KEY) || "ko");

  // ------------------------------------------------------------------------
  // 1. 메인 프레젠테이션 휠 스테이지 (#hero-stage)
  // ------------------------------------------------------------------------
  const heroStage = document.getElementById("hero-stage");
  const heroLayers = document.querySelectorAll("#hero-stage .stage-layer[data-step]");
  const heroDots = document.querySelectorAll("#hero-stage .stage-progress .dot[data-dot]");
  const heroProgress = document.querySelector("#hero-stage .stage-progress");
  const bgShowcaseImage = document.getElementById("bg-showcase-image");
  const introSequence = document.querySelector("#hero-stage .intro-sequence");
  const abroRows = document.querySelectorAll("#hero-stage .abro-row[data-seq]");

  let activeHeroStep = -1;

  function updateHeroSubProgress(stepProgress) {
    if (!introSequence) return;
    // Step 0 구간 내에서 스크롤 진행도에 따라 합체 및 A/B/R/O 순차 노출
    const combineThreshold = 0.16;
    introSequence.classList.toggle("is-combined", stepProgress >= combineThreshold);

    abroRows.forEach((row, idx) => {
      const threshold = 0.24 + idx * 0.14;
      row.classList.toggle("is-shown", stepProgress >= threshold);
    });
  }

  function applyHeroBackground(layerEl) {
    if (!bgShowcaseImage || !layerEl) return;
    const imgUrl = (layerEl.getAttribute("data-bg-image") || "").trim();
    if (!imgUrl) {
      bgShowcaseImage.classList.remove("is-visible");
      return;
    }

    const probe = new Image();
    probe.onload = () => {
      bgShowcaseImage.style.backgroundImage = `url("${imgUrl}")`;
      bgShowcaseImage.classList.add("is-visible");
    };
    probe.onerror = () => {
      bgShowcaseImage.classList.remove("is-visible");
    };
    probe.src = imgUrl;
  }

  function applyHeroStep(nextStep) {
    if (!heroLayers.length) return;
    const bounded = Math.min(Math.max(nextStep, 0), heroLayers.length - 1);

    if (bounded !== activeHeroStep) {
      activeHeroStep = bounded;
      heroLayers.forEach((layer, idx) => {
        layer.classList.toggle("active", idx === bounded);
      });
      heroDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === bounded);
      });
      applyHeroBackground(heroLayers[bounded]);
    }
  }

  function handleHeroScroll() {
    if (!heroStage || !heroLayers.length) return;
    const rect = heroStage.getBoundingClientRect();
    const scrollable = heroStage.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const inViewport = rect.bottom > varNavHeight() && rect.top < window.innerHeight;
    if (heroProgress) {
      heroProgress.classList.toggle("is-visible", inViewport);
    }

    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const total = heroLayers.length;
    const exactIndex = Math.min((scrolled / scrollable) * total, total - 0.0001);
    const step = Math.floor(exactIndex);
    const stepLocalProgress = exactIndex - step;

    applyHeroStep(step);
    updateHeroSubProgress(step === 0 ? stepLocalProgress : 1);
  }

  function varNavHeight() {
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-height");
    const parsed = parseFloat(raw);
    return Number.isNaN(parsed) ? 64 : parsed;
  }

  heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetStep = Number(dot.getAttribute("data-dot"));
      if (Number.isNaN(targetStep) || !heroStage || !heroLayers.length) return;
      const scrollable = heroStage.offsetHeight - window.innerHeight;
      const targetScrollY = heroStage.offsetTop + (scrollable * targetStep) / heroLayers.length + 12;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth"
      });
    });
  });

  if (heroStage && heroLayers.length) {
    window.addEventListener("scroll", handleHeroScroll, { passive: true });
    window.addEventListener("resize", handleHeroScroll, { passive: true });
    handleHeroScroll();
  }

  // ------------------------------------------------------------------------
  // 2. 서브페이지 카드 등장 애니메이션 (.subpage-card)
  // ------------------------------------------------------------------------
  const subpageCards = document.querySelectorAll(".subpage-card");
  if (subpageCards.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );

      subpageCards.forEach((card, idx) => {
        card.style.transitionDelay = `${Math.min(idx * 70, 280)}ms`;
        observer.observe(card);
      });

      // 초기 뷰포트 내 카드 즉시 표시 보완
      requestAnimationFrame(() => {
        subpageCards.forEach((card) => {
          const r = card.getBoundingClientRect();
          if (r.top < window.innerHeight) {
            card.classList.add("is-revealed");
          }
        });
      });
    } else {
      subpageCards.forEach((card) => card.classList.add("is-revealed"));
    }
  }

  // ------------------------------------------------------------------------
  // 3. 개발 과정 횡스크롤 타임라인 (#process-stage)
  // ------------------------------------------------------------------------
  const processStage = document.getElementById("process-stage");
  const hSlidesTrack = document.getElementById("h-slides-track");
  const hSlides = document.querySelectorAll(".h-slide");
  const hNodes = document.querySelectorAll(".h-node");
  const hTimelineFill = document.getElementById("h-timeline-fill");

  let activeProcessStep = -1;

  function setTimelineFillByRatio(ratio) {
    if (!hTimelineFill) return;
    const clamped = Math.min(Math.max(ratio, 0), 1);
    hTimelineFill.style.width = `${(clamped * 100).toFixed(2)}%`;
  }

  function applyProcessStep(nextStep, customRatio = null) {
    if (!hSlides.length) return;
    const boundedStep = Math.min(Math.max(nextStep, 0), hSlides.length - 1);

    if (boundedStep !== activeProcessStep) {
      activeProcessStep = boundedStep;

      if (hSlidesTrack) {
        hSlidesTrack.style.transform = `translateX(-${boundedStep * 100}%)`;
      }

      hSlides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === boundedStep);
        const textBox = slide.querySelector(".h-text-box");
        if (textBox && idx !== boundedStep) {
          textBox.scrollTop = 0;
        }
      });

      hNodes.forEach((node, idx) => {
        node.classList.toggle("active", idx === boundedStep);
        node.classList.toggle("passed", idx < boundedStep);
        if (idx === boundedStep) {
          node.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      });
    }

    if (hNodes.length > 1) {
      const ratio = customRatio !== null ? customRatio : boundedStep / (hNodes.length - 1);
      setTimelineFillByRatio(ratio);
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

    const exactStepPosition = Math.min(progress * total, total - 1);
    const fillRatio = total > 1 ? exactStepPosition / (total - 1) : 0;

    applyProcessStep(step, fillRatio);
  }

  hNodes.forEach((node) => {
    node.addEventListener("click", () => {
      const targetStep = Number(node.getAttribute("data-step"));
      if (Number.isNaN(targetStep) || !processStage || !hSlides.length) return;

      const scrollable = processStage.offsetHeight - window.innerHeight;
      const stepRatio = hSlides.length > 1 ? targetStep / (hSlides.length - 1) : 0;
      const targetScrollY = processStage.offsetTop + scrollable * stepRatio;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener(
    "wheel",
    (e) => {
      if (!processStage || !hSlides.length) return;
      const rect = processStage.getBoundingClientRect();
      const inStage = rect.top <= 0 && rect.bottom > window.innerHeight;
      if (!inStage) return;

      const activeSlide = hSlides[activeProcessStep] || document.querySelector(".h-slide.active");
      const textBox = activeSlide ? activeSlide.querySelector(".h-text-box") : null;
      if (!textBox) return;

      const canScroll = textBox.scrollHeight > textBox.clientHeight + 1;
      if (!canScroll) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;
      const atBottom = textBox.scrollTop + textBox.clientHeight >= textBox.scrollHeight - 1;
      const atTop = textBox.scrollTop <= 0;

      if ((scrollingDown && !atBottom) || (scrollingUp && !atTop)) {
        e.preventDefault();
        textBox.scrollTop += e.deltaY;
      }
    },
    { passive: false }
  );

  if (processStage && hSlides.length) {
    window.addEventListener("scroll", handleProcessScroll, { passive: true });
    window.addEventListener("resize", handleProcessScroll, { passive: true });
    handleProcessScroll();
  }

  // ------------------------------------------------------------------------
  // 4. 유튜브 팝업 모달 제어 (#yt-modal)
  // ------------------------------------------------------------------------
  const modal = document.getElementById("yt-modal");
  const iframe = document.getElementById("yt-modal-iframe");
  const titleEl = document.getElementById("yt-modal-title");
  const closeBtn = document.getElementById("yt-modal-close");
  const externalLink = document.getElementById("yt-modal-external");
  const triggers = document.querySelectorAll(".yt-popup-trigger[data-yt-url]");

  if (!modal || !iframe || !triggers.length) return;

  function extractYouTubeId(rawUrl) {
    if (!rawUrl) return "";
    const normalized = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
    try {
      const parsed = new URL(normalized);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.replace(/^\/+/, "").split("/")[0] || "";
      }
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }
      const parts = parsed.pathname.split("/").filter(Boolean);
      const embedIdx = parts.findIndex((p) => p === "embed" || p === "shorts" || p === "live");
      if (embedIdx !== -1 && parts[embedIdx + 1]) {
        return parts[embedIdx + 1];
      }
    } catch (e) {}
    const match = rawUrl.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    return match ? match[1] : "";
  }

  function openYouTubeModal(rawUrl, title) {
    const videoId = extractYouTubeId(rawUrl);
    if (!videoId) return;

    const cleanUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
    if (titleEl) titleEl.textContent = title || "동영상 미리보기";
    if (externalLink) externalLink.href = cleanUrl;

    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeYouTubeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    iframe.src = "";
    document.body.style.overflow = "";
  }

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      openYouTubeModal(btn.getAttribute("data-yt-url"), btn.getAttribute("data-yt-title"));
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeYouTubeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeYouTubeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
      closeYouTubeModal();
    }
  });
})();