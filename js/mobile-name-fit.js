(() => {
  const MOBILE_MAX = 700;
  const MIN_SIZE = 28;
  const MAX_SIZE = 64;

  const fitName = () => {
    const title = document.querySelector(".main-title");
    const container = document.querySelector(".title-container");
    if (!title || !container) return;

    if (window.innerWidth > MOBILE_MAX) {
      title.style.removeProperty("--mobile-name-size");
      return;
    }

    const lines = [...title.querySelectorAll(".title-line")];
    if (!lines.length) return;

    const available = Math.max(220, container.clientWidth - 16);
    let low = MIN_SIZE;
    let high = MAX_SIZE;
    let best = MIN_SIZE;

    for (let i = 0; i < 12; i += 1) {
      const size = (low + high) / 2;
      title.style.setProperty("--mobile-name-size", `${size}px`);
      const widest = Math.max(...lines.map((line) => line.scrollWidth));

      if (widest <= available) {
        best = size;
        low = size;
      } else {
        high = size;
      }
    }

    title.style.setProperty("--mobile-name-size", `${Math.floor(best)}px`);
  };

  const scheduleFit = () =>
    requestAnimationFrame(() => requestAnimationFrame(fitName));

  window.addEventListener("resize", scheduleFit, { passive: true });
  window.addEventListener("orientationchange", scheduleFit, { passive: true });
  window.addEventListener("load", scheduleFit);
  document.addEventListener("DOMContentLoaded", scheduleFit);

  if (document.fonts?.ready) document.fonts.ready.then(scheduleFit);

  const title = document.querySelector(".main-title");
  if (title) {
    new MutationObserver(scheduleFit).observe(title, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  if ("ResizeObserver" in window) {
    const container = document.querySelector(".title-container");
    if (container) new ResizeObserver(scheduleFit).observe(container);
  }

  scheduleFit();
})();
