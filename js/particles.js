class ParticleBackground {
  constructor(elementId) {
    this.elementId = elementId;
  }

  init() {
    this.loadParticles();
  }

  loadParticles() {
    particlesJS(this.elementId, {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#3b82f6", "#6db33f", "#3776ab"] },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3b82f6",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
}

const particleBackground = new ParticleBackground("particles-js");
particleBackground.init();

// Scroll Down Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create scroll down button
  const scrollBtn = document.createElement("div");
  scrollBtn.className = "scroll-down";
  scrollBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  document.body.appendChild(scrollBtn);

  // Function to scroll to next section
  function scrollToNextSection() {
    const sections = document.querySelectorAll(".section");
    const currentScroll = window.pageYOffset;
    let nextSection = null;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;

      if (sectionTop > currentScroll + 100) {
        nextSection = section;
        break;
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Click event
  scrollBtn.addEventListener("click", scrollToNextSection);

  // Function to show/hide button based on scroll position
  function toggleButton() {
    const scrollPosition = window.pageYOffset;

    // Show button when at top
    if (scrollPosition < 50) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  }

  // Check scroll position on scroll
  window.addEventListener("scroll", toggleButton);

  // Initial check
  toggleButton();
});
