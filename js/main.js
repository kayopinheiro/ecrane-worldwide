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
});
