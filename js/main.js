"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const updateClock = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const value = h + ":" + m;

    ["sg-time", "totem-time"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
  };

  updateClock();
  setInterval(updateClock, 1000);

  const RESET_TIMEOUT_MS = 90 * 1000;
  let inactivityTimer = null;

  const resetToWelcome = () => {
    if (!window.location.pathname.endsWith("/index.html") && window.location.pathname !== "/") {
      window.location.href = "index.html";
    }
  };

  const restartInactivityTimer = () => {
    if (inactivityTimer) {
      window.clearTimeout(inactivityTimer);
    }
    inactivityTimer = window.setTimeout(resetToWelcome, RESET_TIMEOUT_MS);
  };

  ["pointerdown", "pointermove", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, restartInactivityTimer, { passive: true });
  });

  restartInactivityTimer();

  // ── Accordion (FAQ) ──────────────────────────────────────────────
  document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
    trigger.addEventListener("pointerdown", () => {
      const accordion = trigger.closest(".accordion");
      const isOpen = accordion.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  // ── Language picker ──────────────────────────────────────────────
  const langTrigger = document.getElementById("language-trigger");
  const langMenu = document.getElementById("language-menu");

  if (langTrigger && langMenu) {
    const openMenu = () => {
      langMenu.classList.add("is-open");
      langTrigger.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      langMenu.classList.remove("is-open");
      langTrigger.setAttribute("aria-expanded", "false");
    };

    langTrigger.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    document.addEventListener("pointerdown", () => closeMenu());

    langMenu.querySelectorAll(".lang-menu__item").forEach((item) => {
      item.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        const label = item.dataset.langLabel;
        const flag = item.dataset.langFlag;
        const flagAlt = item.dataset.langFlagAlt;

        // Update button
        const btnLabel = langTrigger.querySelector("[data-lang-label]");
        const btnFlag = langTrigger.querySelector(".lang__flag");
        if (btnLabel) btnLabel.textContent = label;
        if (btnFlag) { btnFlag.src = flag; btnFlag.alt = flagAlt; }

        // Update selected state
        langMenu.querySelectorAll(".lang-menu__item").forEach((i) => {
          i.classList.toggle("is-selected", i === item);
          i.setAttribute("aria-selected", i === item ? "true" : "false");
        });

        closeMenu();
      });
    });
  }

  // ── Hero modes (slider | static) ─────────────────────────────────
  document.querySelectorAll(".hero[data-hero-mode]").forEach((hero) => {
    const mode = hero.dataset.heroMode;
    const slides = Array.from(hero.querySelectorAll(".hero__slide"));
    const indicatorsRoot = hero.querySelector(".hero__indicators");
    const interval = Number(hero.dataset.heroInterval) || 5000;

    if (slides.length === 0) {
      return;
    }

    let current = 0;

    const indicators = indicatorsRoot
      ? slides.map((_, index) => {
          const dot = document.createElement("span");
          dot.className = "hero__indicator";
          dot.dataset.index = String(index);
          indicatorsRoot.appendChild(dot);
          return dot;
        })
      : [];

    const setActiveSlide = (index) => {
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      indicators.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    };

    setActiveSlide(0);

    if (mode !== "slider" || slides.length === 1) {
      return;
    }

    window.setInterval(() => {
      current = (current + 1) % slides.length;
      setActiveSlide(current);
    }, interval);
  });
});
