if (
  typeof document.title !== "string" ||
  document.title.includes("[object Object]")
) {
  document.title = "Mahmoud Najmeh | Data Engineering & Full-Stack Developer";
}

/**
 * Keeps the document title within the supported localized title set, including
 * protection against third-party scripts replacing it with invalid content.
 */
(function () {
  const allowedTitles = [
    "Mahmoud Najmeh | Data Engineering & Full-Stack Developer",
    "Mahmoud Najmeh - Portfolio",
  ];

  if (!allowedTitles.includes(document.title)) {
    document.title = allowedTitles[0];
  }

  let lastValidTitle = document.title;
  const titleObserver = new MutationObserver(() => {
    if (!allowedTitles.includes(document.title)) {
      document.title = lastValidTitle;
    } else {
      lastValidTitle = document.title;
    }
  });

  titleObserver.observe(document.querySelector("title"), {
    subtree: true,
    characterData: true,
    childList: true,
  });
})();

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const titleSlider = document.querySelector(".title-slider");
const titleUnderline = document.querySelector(".title-underline");
const titleSegments = document.querySelectorAll(".title-segment");

let currentIndex = 0;
let titleInterval;

function rotateTitle() {
  const isArabic = document.documentElement.lang === "ar";

  currentIndex = (currentIndex + 1) % titleSegments.length;

  if (isArabic) {
    titleSegments.forEach((seg, index) => {
      if (index === currentIndex) {
        seg.style.opacity = "1";
        seg.style.visibility = "visible";
        seg.style.position = "relative";
        seg.classList.add("active");
      } else {
        seg.style.opacity = "0";
        seg.style.visibility = "hidden";
        seg.style.position = "absolute";
        seg.classList.remove("active");
      }
    });

    titleSlider.style.transform = "translateY(0)";
  } else {
    const offset = -currentIndex * 3.5;

    titleSegments.forEach((seg, index) => {
      seg.style.opacity = "1";
      seg.style.visibility = "visible";
      seg.style.position = "relative";
      seg.classList.toggle("active", index === currentIndex);
    });

    titleSlider.style.transform = `translateY(${offset}rem)`;
  }

  titleUnderline.style.animation = "none";
  void titleUnderline.offsetWidth;
  titleUnderline.style.animation = "underlineGrow 1s ease forwards";
}

function initializeTitles() {
  const isArabic = document.documentElement.lang === "ar";

  if (isArabic) {
    titleSegments.forEach((seg, index) => {
      if (index === 0) {
        seg.style.opacity = "1";
        seg.style.visibility = "visible";
        seg.style.position = "relative";
        seg.classList.add("active");
      } else {
        seg.style.opacity = "0";
        seg.style.visibility = "hidden";
        seg.style.position = "absolute";
        seg.classList.remove("active");
      }
    });
    titleSlider.style.transform = "translateY(0)";
  } else {
    titleSegments.forEach((seg, index) => {
      seg.style.opacity = "1";
      seg.style.visibility = "visible";
      seg.style.position = "relative";
      seg.classList.toggle("active", index === 0);
    });
  }
}

function restartTitleAnimation() {
  if (titleInterval) {
    clearInterval(titleInterval);
  }
  initializeTitles();
  titleInterval = setInterval(rotateTitle, 3000);
}

const trails = [];
const trailCount = 10;

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.opacity = 1 - i / trailCount;
  trail.style.transform = `scale(${1 - i * 0.08})`;
  trail.style.position = "fixed";
  trail.style.pointerEvents = "none";
  document.body.appendChild(trail);
  trails.push(trail);
}

function updateTrailPosition(x, y) {
  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.display = "block";
    }, index * 30);
  });
}

function hideTrails() {
  trails.forEach((trail) => {
    trail.style.display = "none";
  });
}

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener("touchend", () => {
  hideTrails();
});

document.addEventListener("mousemove", (e) => {
  updateTrailPosition(e.clientX, e.clientY);
});

window.addEventListener("scroll", () => {
  hideTrails();
});

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function updateBackToHomeLinks(lang) {
  const backToHomeLinks = document.querySelectorAll(
    'a[href="index.html"], a[href*="index.html"]',
  );
  backToHomeLinks.forEach((link) => {
    if (link.getAttribute("id") !== "language-select") {
      link.href = `index.html?lang=${lang}`;
    }
  });
}

/**
 * Validates contact addresses against syntax, abuse patterns, disposable
 * providers, and the portfolio's accepted provider policy.
 *
 * @param {string} email
 * @returns {{isValid: boolean, message: string}}
 */
function validateEmail(email) {
  const currentLang = document.documentElement.lang || "en";
  const t = translations[currentLang]?.validation || translations.en.validation;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: t.invalidEmail };
  }

  if (email.length > 254) {
    return { isValid: false, message: t.emailTooLong };
  }

  const localPart = email.split("@")[0];
  if (localPart.length > 64) {
    return { isValid: false, message: t.emailTooLong };
  }

  const domain = email.split("@")[1].toLowerCase();

  const majorDisposableDomains = [
    "mailinator.com",
    "10minutemail.com",
    "yopmail.com",
    "guerrillamail.com",
    "trashmail.com",
    "temp-mail.org",
    "sharklasers.com",
    "getnada.com",
    "dispostable.com",
    "maildrop.cc",
    "mytemp.email",
    "mailnesia.com",
    "tempmail.com",
    "fakeinbox.com",
    "throwawaymail.com",
  ];

  const suspiciousPatterns = [
    /temp-?mail|tempemail/i,
    /fake-?mail|fakeemail/i,
    /throwaway|disposable/i,
    /spam-?mail|trash-?mail/i,
    /10min|15min|30min|60min/i,
    /minute-?mail|hour-?mail/i,
    /dummy-?mail|temporary/i,
    /mailinator|guerrilla|yopmail|trashmail/i,
  ];

  const suspiciousLocalParts = [
    /^test\d*$/i,
    /^demo\d*$/i,
    /^example\d*$/i,
    /^temp\d*$/i,
    /^fake\d*$/i,
    /^\d+$/,
    /^abc$/i,
    /testtest/i,
    /asdfasdf/i,
    /qwerty/i,
  ];

  const isMajorDisposable = majorDisposableDomains.includes(domain);
  const hasSuspiciousDomain = suspiciousPatterns.some((pattern) =>
    pattern.test(domain),
  );
  const hasSuspiciousLocalPart = suspiciousLocalParts.some((pattern) =>
    pattern.test(localPart),
  );

  if (isMajorDisposable || hasSuspiciousDomain || hasSuspiciousLocalPart) {
    return { isValid: false, message: t.disposableEmail };
  }

  const allowedDomains = [
    "gmail.com",
    "googlemail.com",
    "google.com",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "msn.com",
    "icloud.com",
    "me.com",
    "mac.com",
    "yahoo.com",
    "ymail.com",
    "rocketmail.com",
    "protonmail.com",
    "proton.me",
    "aol.com",
    "zoho.com",
    "yandex.com",
    "mail.com",
    "gmx.com",
    "gmx.net",
    "edu",
    "university.edu",
    "school.edu",
    "college.edu",
    "company.com",
    "business.com",
    "enterprise.com",
    "organization.org",
    "nonprofit.org",
    "ngo.org",
  ];

  const isAllowedDomain = allowedDomains.some(
    (allowed) => domain === allowed || domain.endsWith("." + allowed),
  );

  if (!isAllowedDomain) {
    return { isValid: false, message: t.useMajorProvider };  }

  return { isValid: true, message: t.validEmail };
}

function setupEmailValidation() {
  const emailInput = document.querySelector('input[type="email"]');
  const validationMessage = document.getElementById("email-validation");
  const submitBtn = document.getElementById("submit-btn");

  if (!emailInput || !validationMessage) return;

  let validationTimeout;

  emailInput.addEventListener("input", function () {
    clearTimeout(validationTimeout);

    validationTimeout = setTimeout(() => {
      const email = this.value.trim();

      if (email === "") {
        validationMessage.textContent = "";
        validationMessage.className = "validation-message";
        if (submitBtn) submitBtn.disabled = false;
        return;
      }

      const validation = validateEmail(email);

      validationMessage.textContent = validation.message;
      validationMessage.className = `validation-message ${validation.isValid ? "valid" : "invalid"}`;

      if (submitBtn) {
        submitBtn.disabled = !validation.isValid;
      }
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  restartTitleAnimation();

  setupEmailValidation();

  loadYouTubeAPI();

  setupVideoModal();

  // initWeatherWidget();

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const emailInput = contactForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      const validation = validateEmail(email);

      if (!validation.isValid) {
        const validationMessage = document.getElementById("email-validation");
        if (validationMessage) {
          validationMessage.textContent = validation.message;
          validationMessage.className = "validation-message invalid";
        }
        emailInput.focus();
        return;
      }

      const formData = new FormData(contactForm);
      const formAction = contactForm.getAttribute("action");
      const currentLang = document.documentElement.lang || "en";

      try {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const response = await fetch(formAction, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          window.location.href = `thank-you.html?lang=${currentLang}`;
        } else {
          const errorData = await response.json();
          console.error("Form submission error:", errorData);
          alert(
            `Form submission failed: ${errorData.error || "Unknown error"}`,
          );
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("A network error occurred. Please check your connection.");
      } finally {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  document.querySelectorAll(".orbit").forEach((orbit) => {
    orbit.addEventListener("mouseenter", () => {
      orbit.style.boxShadow = `0 0 15px ${getComputedStyle(orbit).color}`;
      orbit.style.borderStyle = "solid";
    });

    orbit.addEventListener("mouseleave", () => {
      orbit.style.boxShadow = "none";
      orbit.style.borderStyle = "dashed";
    });
  });

  const techOrbits = document.querySelector(".tech-orbits");
  if (techOrbits) {
    techOrbits.addEventListener("mouseenter", () => {
      document.querySelectorAll(".orbit").forEach((orbit) => {
        orbit.style.animationPlayState = "paused";
      });
    });

    techOrbits.addEventListener("mouseleave", () => {
      document.querySelectorAll(".orbit").forEach((orbit) => {
        orbit.style.animationPlayState = "running";
      });
    });
  }

  const orbitWrappers = document.querySelectorAll(".orbit");

  function updateLabelRotations() {
    orbitWrappers.forEach((orbit) => {
      const wrapper = orbit.querySelector(".label-wrapper");
      const computedStyle = getComputedStyle(orbit);
      const transform = computedStyle.transform;

      if (transform && transform !== "none") {
        const values = transform.split("(")[1].split(")")[0].split(",");
        const a = values[0],
          b = values[1];
        const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        wrapper.style.transform = `translateX(-50%) rotate(${-angle}deg)`;
      }
    });

    requestAnimationFrame(updateLabelRotations);
  }

  updateLabelRotations();

  document.querySelectorAll(".toggle-details").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isHidden =
        details.style.display === "none" || !details.style.display;
      const currentLang = document.documentElement.lang || "en";
      details.style.display = isHidden ? "block" : "none";
      button.textContent = isHidden
        ? translations[currentLang].education.toggleHide
        : translations[currentLang].education.toggle;
    });
  });

  const sections = document.querySelectorAll(".section");
  const indicatorsContainer = document.querySelector(".section-indicators");
  let lastScrollY = window.scrollY;

  const sectionLabels = {
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
  };

  sections.forEach((section, index) => {
    const sectionId = section.getAttribute("id");
    const sectionTitle =
      sectionLabels[sectionId] ||
      section.querySelector(".section-title")?.textContent ||
      sectionId;

    let displayText = sectionTitle;

    switch (sectionId) {
      case "about":
        displayText = "About<br>Me";
        break;
      case "projects":
        displayText = "Featured<br>Projects";
        break;
      case "services":
        displayText = "Services<br>& Pricing";
        break;
      case "contact":
        displayText = "Get In<br>Touch";
        break;
      default:
        const words = sectionTitle.split(" ");
        if (words.length > 2) {
          const mid = Math.ceil(words.length / 2);
          displayText =
            words.slice(0, mid).join(" ") + "<br>" + words.slice(mid).join(" ");
        }
    }

    const indicator = document.createElement("div");
    indicator.classList.add("section-indicator");
    indicator.setAttribute("data-section", sectionId);
    indicator.innerHTML = `<span>${displayText}</span>`;
    indicatorsContainer.appendChild(indicator);
  });

  function handleScroll() {
    const currentScrollY = window.scrollY;
    const indicators = document.querySelectorAll(".section-indicator");

    if (currentScrollY <= 100) {
      if (indicatorsContainer) indicatorsContainer.classList.add("hidden");
      indicators.forEach((indicator) => indicator.classList.remove("active"));
      lastScrollY = currentScrollY;
      return;
    } else {
      if (indicatorsContainer) indicatorsContainer.classList.remove("hidden");
    }

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const indicator = indicators[index];

      const isInView =
        rect.top >= -window.innerHeight * 0.2 &&
        rect.top <= window.innerHeight * 0.5;

      if (isInView && indicator) {
        indicator.classList.add("active");
      } else if (indicator) {
        indicator.classList.remove("active");
      }
    });

    lastScrollY = currentScrollY;
  }

  function throttle(fn, wait) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < wait) return;
      lastCall = now;
      return fn(...args);
    };
  }

  window.addEventListener("scroll", throttle(handleScroll, 100));

  if (indicatorsContainer) {
    indicatorsContainer.addEventListener("click", (e) => {
      const indicator = e.target.closest(".section-indicator");
      if (indicator) {
        const sectionId = indicator.getAttribute("data-section");
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  }

  handleScroll();

  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      const validationMessage = document.getElementById("email-validation");
      if (validationMessage) {
        validationMessage.textContent = "";
        validationMessage.className = "validation-message";
      }

      const submitBtn = document.getElementById("submit-btn");
      if (submitBtn) {
        submitBtn.disabled = false;
      }

      setTimeout(restartTitleAnimation, 100);
    });
  }
});

function fixArabicEducationTitles() {
  if (document.documentElement.lang === "ar" && window.innerWidth <= 1024) {
    const javaTitle = document.querySelector(
      '[data-i18n="education.java.title"]',
    );
    const itTitle = document.querySelector(
      '[data-i18n="education.it_specialist.title"]',
    );

    if (javaTitle) javaTitle.textContent = "مبرمج جافا";
    if (itTitle)
      itTitle.textContent =
        "اخصائي تكنولوجيا المعلومات في مجال تطوير التطبيقات";
  }
}

document.addEventListener("DOMContentLoaded", fixArabicEducationTitles);
window.addEventListener("resize", fixArabicEducationTitles);

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    setTimeout(fixArabicEducationTitles, 100);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");

  let currentLang = "en";

  if (lang && ["en", "de", "pl", "fr", "tr", "ar"].includes(lang)) {
    currentLang = lang;
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = lang;
    }
  } else {
    const storedLang = localStorage.getItem("language");
    if (
      storedLang &&
      ["en", "de", "pl", "fr", "tr", "ar"].includes(storedLang)
    ) {
      currentLang = storedLang;
      const languageSelect = document.getElementById("language-select");
      if (languageSelect) {
        languageSelect.value = storedLang;
      }
    }
  }

  updateContent(currentLang);

  const backToHomeLink = document.getElementById("backToHome");
  if (backToHomeLink) {
    backToHomeLink.href = `index.html?lang=${currentLang}`;
  }

  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      if (["en", "de", "pl", "fr", "tr", "ar"].includes(newLang)) {
        localStorage.setItem("language", newLang);
        updateContent(newLang);

        const newUrl = new URL(window.location);
        newUrl.searchParams.set("lang", newLang);
        window.history.replaceState({}, "", newUrl);

        if (backToHomeLink) {
          backToHomeLink.href = `index.html?lang=${newLang}`;
        }
      }
    });
  }
});

function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

let player;
let isYouTubeAPILoaded = false;

const loadYouTubeAPI = () => {
  if (window.YT && window.YT.Player) {
    isYouTubeAPILoaded = true;
    initializeYouTubePlayer();
    return;
  }

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.onload = () => {
    isYouTubeAPILoaded = true;
  };
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

function onYouTubeIframeAPIReady() {
  initializeYouTubePlayer();
}

function initializeYouTubePlayer() {
  const iframe = document.getElementById("youtubeVideo");
  if (iframe && window.YT) {
    player = new YT.Player("youtubeVideo", {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
}

function onPlayerReady(event) {
  console.log("YouTube player ready");
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    console.log("Video ended");
  }
}

function playVideo() {
  if (player && typeof player.playVideo === "function") {
    player.playVideo();
  } else {
    const iframe = document.getElementById("youtubeVideo");
    if (iframe) {
      const currentSrc = iframe.src;
      if (!currentSrc.includes("autoplay=1")) {
        iframe.src =
          currentSrc.replace("autoplay=0", "autoplay=1") +
          (currentSrc.includes("autoplay=") ? "" : "&autoplay=1");
      }
    }
  }
}

function pauseVideo() {
  if (player && typeof player.pauseVideo === "function") {
    player.pauseVideo();
  } else {
    const iframe = document.getElementById("youtubeVideo");
    if (iframe) {
      const currentSrc = iframe.src;
      iframe.src = currentSrc.replace("autoplay=1", "autoplay=0");
    }
  }
}

function setupVideoModal() {
  const modal = document.getElementById("videoModal");
  const btn = document.getElementById("videoModalBtn");
  const closeBtn = document.querySelector(".close-btn");
  const modalContent = document.querySelector(".modal-content");
  let scrollPosition = 0;
  if (!modal || !btn || !closeBtn || !modalContent) return;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });

    if (firstElement) firstElement.focus();
  }

  function openModal(e) {
    e.preventDefault();
    scrollPosition = window.scrollY || window.pageYOffset;
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (isMobile) {
      document.body.classList.add("mobile-modal-open");
    }
    trapFocus(modal);

    playVideo();
  }

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open", "mobile-modal-open");
    document.body.style.overflow = "auto";

    window.scrollTo(0, scrollPosition);

    pauseVideo();

    btn.focus();
  }

  btn.addEventListener("click", openModal);
  if (isMobile) {
    btn.addEventListener("touchend", (e) => {
      e.preventDefault();
      openModal(e);
    });
  }

  closeBtn.addEventListener("click", closeModal);
  closeBtn.addEventListener("touchend", (e) => {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  modal.addEventListener("touchend", (e) => {
    if (e.target === modal) {
      e.preventDefault();
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  modalContent.addEventListener("click", (e) => e.stopPropagation());
  modalContent.addEventListener("touchend", (e) => e.stopPropagation());
  modalContent.addEventListener("touchmove", (e) => e.stopPropagation());

  const iframe = document.getElementById("youtubeVideo");
  if (iframe) {
    iframe.addEventListener("touchstart", (e) => e.stopPropagation());
  }
}

// class WeatherWidget {
//     constructor() {
//         this.apiKey = '1b1286a2450ec4aaf41b6d5d7b7c1bee';
//         this.weatherWidget = document.getElementById('weatherWidget');
//         this.weatherContent = this.weatherWidget?.querySelector('.weather-content');
//         this.weatherLoading = this.weatherWidget?.querySelector('.weather-loading');
//         this.weatherError = this.weatherWidget?.querySelector('.weather-error');

//         this.currentWeatherData = null;
//         this.isUserLocation = true;

//         if (!this.weatherWidget) return;

//         this.init();
//     }

//     async init() {
//         try {
//             await this.loadWeather();
//         } catch (error) {
//             console.error('Weather initialization failed:', error);
//             await this.loadFallbackWeather();
//         }
//     }

//     async loadWeather() {
//         this.showLoading();

//         try {
//             const position = await this.getUserPosition();
//             const weatherData = await this.fetchWeatherData(position.coords.latitude, position.coords.longitude);
//             this.currentWeatherData = weatherData;
//             this.isUserLocation = true;
//             this.displayWeather(weatherData, true);
//         } catch (geoError) {
//             console.log('Geolocation failed, using fallback:', geoError);
//             await this.loadFallbackWeather();
//         }
//     }

//     async loadFallbackWeather() {
//         try {
//             const weatherData = await this.fetchWeatherData(52.5200, 13.4050);
//             this.currentWeatherData = weatherData;
//             this.isUserLocation = false;
//             this.displayWeather(weatherData, false);
//         } catch (error) {
//             console.error('Fallback weather also failed:', error);
//             this.showError();
//         }
//     }

//     getUserPosition() {
//         return new Promise((resolve, reject) => {
//             if (!navigator.geolocation) {
//                 reject(new Error('Geolocation not supported'));
//                 return;
//             }

//             navigator.geolocation.getCurrentPosition(resolve, reject, {
//                 enableHighAccuracy: false,
//                 timeout: 8000,
//                 maximumAge: 300000
//             });
//         });
//     }

//     async fetchWeatherData(lat, lon) {
//         const currentLang = document.documentElement.lang || 'en';
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=${currentLang}`;

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Weather API error: ${response.status}`);
//         }

//         return await response.json();
//     }

//     displayWeather(data, isUserLocation = true) {
//         if (!this.weatherContent) return;

//         const temp = Math.round(data.main.temp);
//         const description = data.weather[0].description;
//         const city = data.name;
//         const country = data.sys.country;
//         const iconCode = data.weather[0].icon;

//         this.weatherContent.querySelector('.temp-value').textContent = temp;
//         this.weatherContent.querySelector('.weather-desc').textContent = description;

//         const currentLang = document.documentElement.lang || 'en';
//         const t = translations[currentLang]?.weather || translations.en.weather;

//         let locationText;
//         if (isUserLocation) {
//             locationText = `${city}, ${country}`;
//         } else {
//             const fallbackText = t.fallback || 'Showing Berlin weather';
//             locationText = `${city}, ${country} (${fallbackText})`;
//         }
//         this.weatherContent.querySelector('.location-name').textContent = locationText;

//         const weatherIcon = this.weatherContent.querySelector('.weather-icon i');
//         weatherIcon.className = this.getWeatherIcon(iconCode);

//         this.hideLoading();
//         this.weatherContent.style.display = 'flex';

//         this.addDemoBadge();
//     }

//     getWeatherIcon(iconCode) {
//         const iconMap = {
//             '01d': 'fas fa-sun',
//             '01n': 'fas fa-moon',
//             '02d': 'fas fa-cloud-sun',
//             '02n': 'fas fa-cloud-moon',
//             '03d': 'fas fa-cloud',
//             '03n': 'fas fa-cloud',
//             '04d': 'fas fa-cloud',
//             '04n': 'fas fa-cloud',
//             '09d': 'fas fa-cloud-rain',
//             '09n': 'fas fa-cloud-rain',
//             '10d': 'fas fa-cloud-sun-rain',
//             '10n': 'fas fa-cloud-moon-rain',
//             '11d': 'fas fa-bolt',
//             '11n': 'fas fa-bolt',
//             '13d': 'fas fa-snowflake',
//             '13n': 'fas fa-snowflake',
//             '50d': 'fas fa-smog',
//             '50n': 'fas fa-smog'
//         };

//         return iconMap[iconCode] || 'fas fa-cloud';
//     }

//     showLoading() {
//         if (this.weatherLoading) {
//             this.weatherLoading.style.display = 'flex';
//         }
//         if (this.weatherContent) {
//             this.weatherContent.style.display = 'none';
//         }
//         if (this.weatherError) {
//             this.weatherError.style.display = 'none';
//         }
//     }

//     hideLoading() {
//         if (this.weatherLoading) {
//             this.weatherLoading.style.display = 'none';
//         }
//     }

//     showError() {
//         if (this.weatherError) {
//             this.weatherError.style.display = 'flex';
//         }
//         if (this.weatherLoading) {
//             this.weatherLoading.style.display = 'none';
//         }
//         if (this.weatherContent) {
//             this.weatherContent.style.display = 'none';
//         }
//     }

//     addDemoBadge() {
//         const existingBadge = this.weatherWidget.querySelector('.weather-demo-badge');
//         if (existingBadge) {
//             existingBadge.remove();
//         }

//         const badge = document.createElement('div');
//         badge.className = 'weather-demo-badge';
//         badge.setAttribute('data-i18n', 'weather.demo');

//         this.weatherWidget.style.position = 'relative';
//         this.weatherWidget.appendChild(badge);

//         this.updateBadgeTranslation();
//     }

//     updateBadgeTranslation() {
//         const badge = this.weatherWidget.querySelector('.weather-demo-badge');
//         if (badge) {
//             const currentLang = document.documentElement.lang || 'en';
//             const t = translations[currentLang]?.weather || translations.en.weather;
//             badge.textContent = t.demo || 'Live Demo';
//         }
//     }

//     async updateLanguage() {
//         this.updateBadgeTranslation();

//         try {
//             await this.loadWeather();
//         } catch (error) {
//             console.error('Failed to update weather with new language:', error);
//             if (this.currentWeatherData) {
//                 this.displayWeather(this.currentWeatherData, this.isUserLocation);
//             }
//         }
//     }
// }
// let weatherWidget;

// function initWeatherWidget() {
//     weatherWidget = new WeatherWidget();
// }

// function updateWeatherOnLanguageChange() {
//     if (weatherWidget) {
//         weatherWidget.updateLanguage();
//     }
// }

// document.addEventListener('contextmenu', (event) => event.preventDefault());

/* document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
}); */

(function () {
  const videoQualities = [
    {
      label: "360p",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      width: 640,
      height: 360,
      bitrate: 800,
    },
    {
      label: "480p",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      width: 854,
      height: 480,
      bitrate: 1200,
    },
    {
      label: "720p HD",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4",
      width: 1280,
      height: 720,
      bitrate: 2500,
    },
    {
      label: "1080p Full HD",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      width: 1920,
      height: 1080,
      bitrate: 4500,
    },
  ];

  function getHighestQuality(qualities) {
    if (!qualities.length) return null;
    return [...qualities].sort((a, b) => {
      const resA = a.height * a.width;
      const resB = b.height * b.width;
      return resB - resA;
    })[0];
  }

  const videoElem = document.getElementById("smartVideo");
  const activeResSpan = document.getElementById("activeResLabel");
  const streamInfoSpan = document.getElementById("streamInfo");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const btnTextSpan = document.getElementById("btnText");
  const manualSelect = document.getElementById("manualQuality");

  let currentQuality = null;
  let isAutoHighest = true;
  let qualitiesList = [...videoQualities];

  function switchToQuality(qualityObj, isAuto = true) {
    if (!qualityObj || !videoElem) return;

    const wasPlaying = !videoElem.paused && !videoElem.ended;
    const currentTime = videoElem.currentTime;

    videoElem.src = qualityObj.url;
    currentQuality = qualityObj;

    activeResSpan.textContent = qualityObj.label;
    streamInfoSpan.innerHTML = `🎯 ${qualityObj.label} (${qualityObj.width}×${qualityObj.height}) active`;

    videoElem.load();

    videoElem.addEventListener(
      "loadedmetadata",
      function onMeta() {
        videoElem.currentTime = currentTime;
        if (wasPlaying) {
          videoElem
            .play()
            .catch((e) => console.log("Autoplay blocked? resume manually", e));
        }
        videoElem.removeEventListener("loadedmetadata", onMeta);
      },
      { once: true },
    );

    if (manualSelect && manualSelect.style.display !== "none") {
      for (let i = 0; i < manualSelect.options.length; i++) {
        if (manualSelect.options[i].value === qualityObj.label) {
          manualSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  function selectHighestResolutionAndPlay(autoplayAfterSwitch = true) {
    const highest = getHighestQuality(qualitiesList);
    if (!highest) {
      streamInfoSpan.innerHTML = "⚠️ No quality available";
      return;
    }

    if (
      currentQuality &&
      currentQuality.label === highest.label &&
      videoElem.src === highest.url
    ) {
      if (autoplayAfterSwitch && videoElem.paused) {
        videoElem.play().catch((e) => console.log("play blocked", e));
      }
      activeResSpan.textContent = highest.label;
      streamInfoSpan.innerHTML = `🏆 ${highest.label} (max available)`;
      return;
    }

    switchToQuality(highest, true);
    if (autoplayAfterSwitch) {
      videoElem.play().catch((err) => {
        console.log("Autoplay prevented, user must interact", err);
        if (btnTextSpan) btnTextSpan.innerText = "Play";
      });
    }
  }

  function enforceHighestResolutionOnPlay() {
    if (!isAutoHighest) return;
    const highest = getHighestQuality(qualitiesList);
    if (highest && currentQuality && highest.url !== videoElem.src) {
      const wasPlaying = !videoElem.paused;
      const oldTime = videoElem.currentTime;
      videoElem.src = highest.url;
      currentQuality = highest;
      activeResSpan.textContent = highest.label;
      streamInfoSpan.innerHTML = `✨ upgraded to ${highest.label}`;
      videoElem.load();
      videoElem.addEventListener(
        "loadedmetadata",
        () => {
          videoElem.currentTime = oldTime;
          if (wasPlaying) videoElem.play().catch((e) => {});
        },
        { once: true },
      );
    }
  }

  function beforePlayUpgrade() {
    if (!isAutoHighest) return;
    const highest = getHighestQuality(qualitiesList);
    if (highest && (!currentQuality || highest.url !== videoElem.src)) {
      const oldTime = videoElem.currentTime;
      videoElem.src = highest.url;
      currentQuality = highest;
      activeResSpan.textContent = highest.label;
      streamInfoSpan.innerHTML = `📈 upgraded to ${highest.label}`;
      videoElem.load();
      videoElem.currentTime = oldTime;
    }
  }

  if (videoElem) {
    videoElem.addEventListener("play", () => {
      const highest = getHighestQuality(qualitiesList);
      if (highest && (!currentQuality || highest.url !== videoElem.src)) {
        const wasPlaying = true;
        const oldTime = videoElem.currentTime;
        videoElem.src = highest.url;
        currentQuality = highest;
        activeResSpan.textContent = highest.label;
        streamInfoSpan.innerHTML = `🚀 ${highest.label} (auto highest)`;
        videoElem.load();
        videoElem.currentTime = oldTime;
        videoElem.addEventListener(
          "loadedmetadata",
          () => {
            if (wasPlaying) videoElem.play().catch((e) => console.warn);
          },
          { once: true },
        );
      } else if (highest) {
        activeResSpan.textContent = highest.label;
        streamInfoSpan.innerHTML = `🎉 ${highest.label} (max)`;
      }
      if (btnTextSpan) btnTextSpan.innerText = "Pause";
    });

    videoElem.addEventListener("pause", () => {
      if (btnTextSpan) btnTextSpan.innerText = "Play";
    });

    videoElem.addEventListener("loadeddata", () => {
      if (currentQuality) {
        activeResSpan.textContent = currentQuality.label;
        streamInfoSpan.innerHTML = `✅ ${currentQuality.label} ready`;
      } else {
        const found = qualitiesList.find(
          (q) =>
            videoElem.src.includes(q.url.split("/").pop()) ||
            videoElem.src === q.url,
        );
        if (found) {
          currentQuality = found;
          activeResSpan.textContent = found.label;
          streamInfoSpan.innerHTML = `🎬 ${found.label}`;
        }
      }
    });
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (videoElem && videoElem.paused) {
        const highest = getHighestQuality(qualitiesList);
        if (highest && (!currentQuality || highest.url !== videoElem.src)) {
          const oldTime = videoElem.currentTime;
          videoElem.src = highest.url;
          currentQuality = highest;
          activeResSpan.textContent = highest.label;
          streamInfoSpan.innerHTML = `⚡ switching to ${highest.label} before play`;
          videoElem.load();
          videoElem.currentTime = oldTime;
          videoElem.addEventListener(
            "loadedmetadata",
            () => {
              videoElem.play().catch((e) => console.log);
            },
            { once: true },
          );
        } else {
          videoElem.play().catch((e) => console.log);
        }
      } else if (videoElem) {
        videoElem.pause();
      }
    });
  }

  function initializePlayer() {
    if (!videoElem) return;
    const best = getHighestQuality(qualitiesList);
    if (best) {
      videoElem.src = best.url;
      currentQuality = best;
      activeResSpan.textContent = best.label;
      streamInfoSpan.innerHTML = `🏅 ${best.label} (highest resolution preloaded)`;
      videoElem.load();
    } else if (streamInfoSpan) {
      streamInfoSpan.innerHTML = "❌ No video sources";
    }
  }

  function buildManualSelector() {
    if (!manualSelect) return;
    manualSelect.innerHTML = '<option value="auto">⚡ Auto (Highest)</option>';
    qualitiesList.forEach((q) => {
      const option = document.createElement("option");
      option.value = q.label;
      option.textContent = `${q.label} (${q.width}×${q.height})`;
      manualSelect.appendChild(option);
    });
    manualSelect.addEventListener("change", (e) => {
      if (e.target.value === "auto") {
        isAutoHighest = true;
        selectHighestResolutionAndPlay(true);
      } else {
        isAutoHighest = false;
        const selectedQuality = qualitiesList.find(
          (q) => q.label === e.target.value,
        );
        if (selectedQuality && videoElem) {
          switchToQuality(selectedQuality, false);
          videoElem.play().catch((e) => console.log);
          if (activeResSpan) activeResSpan.textContent = selectedQuality.label;
          if (streamInfoSpan)
            streamInfoSpan.innerHTML = `🔧 manual: ${selectedQuality.label}`;
        }
      }
    });
  }

  if (videoElem) {
    initializePlayer();
    buildManualSelector();

    const origPlay = videoElem.play;
    videoElem.play = function () {
      const highest = getHighestQuality(qualitiesList);
      if (highest && (!currentQuality || highest.url !== videoElem.src)) {
        const oldTime = videoElem.currentTime;
        videoElem.src = highest.url;
        currentQuality = highest;
        if (activeResSpan) activeResSpan.textContent = highest.label;
        if (streamInfoSpan)
          streamInfoSpan.innerHTML = `🔄 upgrading to ${highest.label} before play`;
        videoElem.load();
        videoElem.currentTime = oldTime;
        return new Promise((resolve, reject) => {
          videoElem.addEventListener(
            "loadedmetadata",
            () => {
              origPlay.call(videoElem).then(resolve).catch(reject);
            },
            { once: true },
          );
        });
      }
      return origPlay.call(videoElem);
    };

    console.log(
      "✅ Video player ready — automatically picks highest resolution on play",
    );
    window.selectHighestRes = selectHighestResolutionAndPlay;

    videoElem.addEventListener("error", (e) => {
      console.warn("Video error, falling back to next quality", e);
      const sorted = [...qualitiesList].sort(
        (a, b) => b.height * b.width - a.height * a.width,
      );
      const currentIndex = sorted.findIndex((q) => q.url === videoElem.src);
      if (currentIndex !== -1 && currentIndex < sorted.length - 1) {
        const fallbackQuality = sorted[currentIndex + 1];
        if (streamInfoSpan)
          streamInfoSpan.innerHTML = `⚠️ fallback to ${fallbackQuality.label}`;
        switchToQuality(fallbackQuality);
        videoElem.play().catch(() => {});
      }
    });
  }
})();
