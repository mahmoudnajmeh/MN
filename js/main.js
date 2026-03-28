// Ensure the title is valid on load
if (typeof document.title !== 'string' || document.title.includes('[object Object]')) {
    document.title = "Mahmoud Najmeh | Data Engineering & Full-Stack Developer";
}

// Title Protection Guard
(function() {
    // List of allowed titles
    const allowedTitles = [
        "Mahmoud Najmeh | Data Engineering & Full-Stack Developer",
        "MN Portfolio",
        "Mahmoud Najmeh - Portfolio"
    ];
    
    // Immediately enforce a valid title
    if (!allowedTitles.includes(document.title)) {
        document.title = allowedTitles[0];
    }
    
    // Monitor for title changes
    let lastValidTitle = document.title;
    const titleObserver = new MutationObserver(() => {
        if (!allowedTitles.includes(document.title)) {
            // console.warn('Invalid title detected:', document.title);
            document.title = lastValidTitle;
        } else {
            lastValidTitle = document.title;
        }
    });
    
    titleObserver.observe(document.querySelector('title'), {
        subtree: true,
        characterData: true,
        childList: true
    });
})();

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Dynamic title animation - WITH ARABIC SUPPORT
const titleSlider = document.querySelector('.title-slider');
const titleUnderline = document.querySelector('.title-underline');
const titleSegments = document.querySelectorAll('.title-segment');

let currentIndex = 0;
let titleInterval;

function rotateTitle() {
    const isArabic = document.documentElement.lang === 'ar';
    
    currentIndex = (currentIndex + 1) % titleSegments.length;
    
    // Different behavior for Arabic vs other languages
    if (isArabic) {
        // Opacity and position instead of display none/flex
        titleSegments.forEach((seg, index) => {
            if (index === currentIndex) {
                seg.style.opacity = '1';
                seg.style.visibility = 'visible';
                seg.style.position = 'relative';
                seg.classList.add('active');
            } else {
                seg.style.opacity = '0';
                seg.style.visibility = 'hidden';
                seg.style.position = 'absolute';
                seg.classList.remove('active');
            }
        });
        
        // No translation needed for Arabic
        titleSlider.style.transform = 'translateY(0)';
    } else {
        // Original behavior for other languages
        const offset = -currentIndex * 3.5;
        
        titleSegments.forEach((seg, index) => {
            seg.style.opacity = '1';
            seg.style.visibility = 'visible';
            seg.style.position = 'relative';
            seg.classList.toggle('active', index === currentIndex);
        });
        
        titleSlider.style.transform = `translateY(${offset}rem)`;
    }
    
    // Animate the underline
    titleUnderline.style.animation = 'none';
    void titleUnderline.offsetWidth;
    titleUnderline.style.animation = 'underlineGrow 1s ease forwards';
}

// Initialize titles based on language
function initializeTitles() {
    const isArabic = document.documentElement.lang === 'ar';
    
    if (isArabic) {
        // Show only the first title initially using opacity/position
        titleSegments.forEach((seg, index) => {
            if (index === 0) {
                seg.style.opacity = '1';
                seg.style.visibility = 'visible';
                seg.style.position = 'relative';
                seg.classList.add('active');
            } else {
                seg.style.opacity = '0';
                seg.style.visibility = 'hidden';
                seg.style.position = 'absolute';
                seg.classList.remove('active');
            }
        });
        titleSlider.style.transform = 'translateY(0)';
    } else {
        // For other languages Show all titles in slider
        titleSegments.forEach((seg, index) => {
            seg.style.opacity = '1';
            seg.style.visibility = 'visible';
            seg.style.position = 'relative';
            seg.classList.toggle('active', index === 0);
        });
    }
}

// Restart title animation with new language settings
function restartTitleAnimation() {
    if (titleInterval) {
        clearInterval(titleInterval);
    }
    initializeTitles();
    titleInterval = setInterval(rotateTitle, 3000);
}

// Cursor trail effect
const trails = [];
const trailCount = 10;

// Create trail elements
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = 1 - (i / trailCount);
    trail.style.transform = `scale(${1 - (i * 0.08)})`;
    trail.style.position = 'fixed'; 
    trail.style.pointerEvents = 'none'; 
    document.body.appendChild(trail);
    trails.push(trail);
}

// Function to update trail positions
function updateTrailPosition(x, y) {
    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            trail.style.display = 'block'; 
        }, index * 30);
    });
}

// Function to hide all trails
function hideTrails() {
    trails.forEach(trail => {
        trail.style.display = 'none';
    });
}

// Handle touch events
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener('touchend', () => {
    hideTrails(); 
});

// Handle mouse events (for desktop)
document.addEventListener('mousemove', (e) => {
    updateTrailPosition(e.clientX, e.clientY);
});

// Clear trails on scroll
window.addEventListener('scroll', () => {
    hideTrails();
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Function to update back to home links
function updateBackToHomeLinks(lang) {
    const backToHomeLinks = document.querySelectorAll('a[href="index.html"], a[href*="index.html"]');
    backToHomeLinks.forEach(link => {
        // Avoid changing the language selector link
        if (link.getAttribute('id') !== 'language-select') { 
            link.href = `index.html?lang=${lang}`;
        }
    });
}

// Email Validation Functions
function validateEmail(email) {
    const currentLang = document.documentElement.lang || 'en';
    const t = translations[currentLang]?.validation || translations.en.validation;

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: t.invalidEmail };
    }

    // Check for suspicious patterns
    if (email.length > 254) {
        return { isValid: false, message: t.emailTooLong };
    }

    const localPart = email.split('@')[0];
    if (localPart.length > 64) {
        return { isValid: false, message: t.emailTooLong };
    }

    // SMART DISPOSABLE DOMAIN DETECTION + PATTERN MATCHING
    const domain = email.split('@')[1].toLowerCase();
    
    // MAJOR DISPOSABLE DOMAINS LIST
    const majorDisposableDomains = [
        'mailinator.com', '10minutemail.com', 'yopmail.com', 'guerrillamail.com',
        'trashmail.com', 'temp-mail.org', 'sharklasers.com', 'getnada.com',
        'dispostable.com', 'maildrop.cc', 'mytemp.email', 'mailnesia.com',
        'tempmail.com', 'fakeinbox.com', 'throwawaymail.com'
    ];

    // SUSPICIOUS PATTERNS (Catches new disposable domains)
    const suspiciousPatterns = [
        /temp-?mail|tempemail/i,
        /fake-?mail|fakeemail/i,
        /throwaway|disposable/i,
        /spam-?mail|trash-?mail/i,
        /10min|15min|30min|60min/i,
        /minute-?mail|hour-?mail/i,
        /dummy-?mail|temporary/i,
        /mailinator|guerrilla|yopmail|trashmail/i
    ];

    // SUSPICIOUS LOCAL PARTS (Username patterns)
    const suspiciousLocalParts = [
        /^test\d*$/i,
        /^demo\d*$/i,
        /^example\d*$/i,
        /^temp\d*$/i,
        /^fake\d*$/i,
        // only numbers
        /^\d+$/, 
        /^abc$/i,
        /testtest/i,
        /asdfasdf/i,
        /qwerty/i
    ];

    const isMajorDisposable = majorDisposableDomains.includes(domain);
    const hasSuspiciousDomain = suspiciousPatterns.some(pattern => pattern.test(domain));
    const hasSuspiciousLocalPart = suspiciousLocalParts.some(pattern => pattern.test(localPart));

    if (isMajorDisposable || hasSuspiciousDomain || hasSuspiciousLocalPart) {
        return { isValid: false, message: t.disposableEmail };
    }

    // ALLOW ONLY MAJOR PROVIDERS + COMMON DOMAINS
    const allowedDomains = [
        // Google
        'gmail.com', 'googlemail.com', 'google.com',
        // Microsoft
        'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
        // Apple
        'icloud.com', 'me.com', 'mac.com',
        // Yahoo
        'yahoo.com', 'ymail.com', 'rocketmail.com',
        // Other major providers 
        'protonmail.com', 'proton.me', 'aol.com', 'zoho.com',
        'yandex.com', 'mail.com', 'gmx.com', 'gmx.net',
        // Common business/education domains
        'edu', 'university.edu', 'school.edu', 'college.edu',
        'company.com', 'business.com', 'enterprise.com', 'organization.org',
        'nonprofit.org', 'ngo.org'
    ];

    const isAllowedDomain = allowedDomains.some(allowed => domain === allowed || domain.endsWith('.' + allowed));
    
    if (!isAllowedDomain) {
        return { isValid: false, message: t.useMajorProvider }; // Use translation here
    }

    return { isValid: true, message: t.validEmail };
}

function setupEmailValidation() {
    const emailInput = document.querySelector('input[type="email"]');
    const validationMessage = document.getElementById('email-validation');
    const submitBtn = document.getElementById('submit-btn');

    if (!emailInput || !validationMessage) return;

    let validationTimeout;

    emailInput.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        
        validationTimeout = setTimeout(() => {
            const email = this.value.trim();
            
            if (email === '') {
                validationMessage.textContent = '';
                validationMessage.className = 'validation-message';
                if (submitBtn) submitBtn.disabled = false;
                return;
            }

            const validation = validateEmail(email);
            
            validationMessage.textContent = validation.message;
            validationMessage.className = `validation-message ${validation.isValid ? 'valid' : 'invalid'}`;
            
            if (submitBtn) {
                submitBtn.disabled = !validation.isValid;
            }
        }, 500);
    });
}

// Main DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize title animation
    restartTitleAnimation();

    setupEmailValidation();

    loadYouTubeAPI();

    setupVideoModal();

    // initWeatherWidget();
    
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Email validation
            const emailInput = contactForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const validation = validateEmail(email);
            
            if (!validation.isValid) {
                const validationMessage = document.getElementById('email-validation');
                if (validationMessage) {
                    validationMessage.textContent = validation.message;
                    validationMessage.className = 'validation-message invalid';
                }
                emailInput.focus();
                return;
            }

            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action');
            const currentLang = document.documentElement.lang || 'en';

            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    window.location.href = `thank-you.html?lang=${currentLang}`;
                } else {
                    const errorData = await response.json();
                    console.error('Form submission error:', errorData);
                    alert(`Form submission failed: ${errorData.error || 'Unknown error'}`);
                }
            } catch (error) {
                console.error('Network error:', error);
                alert('A network error occurred. Please check your connection.');
            } finally {
                // Reset button state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Make orbits interactive
    document.querySelectorAll('.orbit').forEach(orbit => {
        orbit.addEventListener('mouseenter', () => {
            orbit.style.boxShadow = `0 0 15px ${getComputedStyle(orbit).color}`;
            orbit.style.borderStyle = 'solid';
        });
        
        orbit.addEventListener('mouseleave', () => {
            orbit.style.boxShadow = 'none';
            orbit.style.borderStyle = 'dashed';
        });
    });

    // Pause animation on hover for better readability
    const techOrbits = document.querySelector('.tech-orbits');
    if (techOrbits) {
        techOrbits.addEventListener('mouseenter', () => {
            document.querySelectorAll('.orbit').forEach(orbit => {
                orbit.style.animationPlayState = 'paused';
            });
        });

        techOrbits.addEventListener('mouseleave', () => {
            document.querySelectorAll('.orbit').forEach(orbit => {
                orbit.style.animationPlayState = 'running';
            });
        });
    }

    // Keep orbit labels upright
    const orbitWrappers = document.querySelectorAll('.orbit');

    function updateLabelRotations() {
        orbitWrappers.forEach(orbit => {
            const wrapper = orbit.querySelector('.label-wrapper');
            const computedStyle = getComputedStyle(orbit);
            const transform = computedStyle.transform;

            if (transform && transform !== 'none') {
                const values = transform.split('(')[1].split(')')[0].split(',');
                const a = values[0], b = values[1];
                const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                wrapper.style.transform = `translateX(-50%) rotate(${-angle}deg)`;
            }
        });

        requestAnimationFrame(updateLabelRotations);
    }

    updateLabelRotations();

    // Toggle education details
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isHidden = details.style.display === 'none' || !details.style.display;
            const currentLang = document.documentElement.lang || 'en'; 
            details.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? translations[currentLang].education.toggleHide : translations[currentLang].education.toggle;
        });
    });

    // Section Indicator Logic
    const sections = document.querySelectorAll('.section');
    const indicatorsContainer = document.querySelector('.section-indicators');
    let lastScrollY = window.scrollY;

    // Map section IDs to custom indicator labels
    const sectionLabels = {
        'about': 'About Me',
        'projects': 'Projects',
        'contact': 'Contact'
    };

    // Create indicators dynamically
    sections.forEach((section, index) => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = sectionLabels[sectionId] || section.querySelector('.section-title')?.textContent || sectionId;
        
        // Split the title into words for better fitting
        let displayText = sectionTitle;
        
        // Custom splitting for different sections
        switch(sectionId) {
            case 'about':
                displayText = 'About<br>Me';
                break;
            case 'projects':
                displayText = 'Featured<br>Projects';
                break;
            case 'services':
                displayText = 'Services<br>& Pricing';
                break;
            case 'contact':
                displayText = 'Get In<br>Touch';
                break;
            default:
                // Auto-split long titles (max 2 lines)
                const words = sectionTitle.split(' ');
                if (words.length > 2) {
                    const mid = Math.ceil(words.length / 2);
                    displayText = words.slice(0, mid).join(' ') + '<br>' + words.slice(mid).join(' ');
                }
        }
        
        const indicator = document.createElement('div');
        indicator.classList.add('section-indicator');
        indicator.setAttribute('data-section', sectionId);
        indicator.innerHTML = `<span>${displayText}</span>`;
        indicatorsContainer.appendChild(indicator);
    });

    // Handle scroll events
    function handleScroll() {
        const currentScrollY = window.scrollY;
        const indicators = document.querySelectorAll('.section-indicator');

        // Hide indicators when near the top of the page
        if (currentScrollY <= 100) {
            if (indicatorsContainer) indicatorsContainer.classList.add('hidden');
            indicators.forEach(indicator => indicator.classList.remove('active'));
            lastScrollY = currentScrollY;
            return;
        } else {
            if (indicatorsContainer) indicatorsContainer.classList.remove('hidden');
        }

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const indicator = indicators[index];

            // Check if section is in viewport
            const isInView = rect.top >= -window.innerHeight * 0.2 && rect.top <= window.innerHeight * 0.5;

            if (isInView && indicator) {
                indicator.classList.add('active');
            } else if (indicator) {
                indicator.classList.remove('active');
            }
        });

        lastScrollY = currentScrollY;
    }

    // Throttle scroll event for performance
    function throttle(fn, wait) {
        let lastCall = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastCall < wait) return;
            lastCall = now;
            return fn(...args);
        };
    }

    // Add scroll event listener
    window.addEventListener('scroll', throttle(handleScroll, 100));

    // Make indicators clickable
    if (indicatorsContainer) {
        indicatorsContainer.addEventListener('click', (e) => {
            const indicator = e.target.closest('.section-indicator');
            if (indicator) {
                const sectionId = indicator.getAttribute('data-section');
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // re-initialize when language changes
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            const validationMessage = document.getElementById('email-validation');
            if (validationMessage) {
                validationMessage.textContent = '';
                validationMessage.className = 'validation-message';
            }
            
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = false;
            }
            
            // Small delay to allow the language change to take effect
            setTimeout(restartTitleAnimation, 100);
        });
    }
});

// Force correct text for Arabic education titles on mobile
function fixArabicEducationTitles() {
    if (document.documentElement.lang === 'ar' && window.innerWidth <= 1024) {
        const javaTitle = document.querySelector('[data-i18n="education.java.title"]');
        const itTitle = document.querySelector('[data-i18n="education.it_specialist.title"]');
        
        if (javaTitle) javaTitle.textContent = "مبرمج جافا";
        if (itTitle) itTitle.textContent = "اخصائي تكنولوجيا المعلومات في مجال تطوير التطبيقات";
    }
}

// Call it on page load and when language changes
document.addEventListener('DOMContentLoaded', fixArabicEducationTitles);
window.addEventListener('resize', fixArabicEducationTitles);

// Also call it when language changes
const languageSelect = document.getElementById('language-select');
if (languageSelect) {
    languageSelect.addEventListener('change', () => {
        setTimeout(fixArabicEducationTitles, 100);
    });
}

// Thank-you page specific initialization
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    
    let currentLang = 'en';
    
    if (lang && ['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(lang)) {
        currentLang = lang;
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = lang;
        }
    } else {
        const storedLang = localStorage.getItem('language');
        if (storedLang && ['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(storedLang)) {
            currentLang = storedLang;
            const languageSelect = document.getElementById('language-select');
            if (languageSelect) {
                languageSelect.value = storedLang;
            }
        }
    }
    
    updateContent(currentLang);
    
    const backToHomeLink = document.getElementById('backToHome');
    if (backToHomeLink) {
        backToHomeLink.href = `index.html?lang=${currentLang}`;
    }
    
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const newLang = e.target.value;
            if (['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(newLang)) {
                localStorage.setItem('language', newLang);
                updateContent(newLang);
                
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('lang', newLang);
                window.history.replaceState({}, '', newUrl);
                
                if (backToHomeLink) {
                    backToHomeLink.href = `index.html?lang=${newLang}`;
                }
            }
        });
    }
});

// Management for modals and dynamic content
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

// YouTube IFrame API Implementation
let player;
let isYouTubeAPILoaded = false;

// Load YouTube API
const loadYouTubeAPI = () => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
        isYouTubeAPILoaded = true;
        initializeYouTubePlayer();
        return;
    }
    
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onload = () => {
        isYouTubeAPILoaded = true;
    };
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

// YouTube API ready callback
function onYouTubeIframeAPIReady() {
    initializeYouTubePlayer();
}

function initializeYouTubePlayer() {
    const iframe = document.getElementById('youtubeVideo');
    if (iframe && window.YT) {
        player = new YT.Player('youtubeVideo', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    console.log('YouTube player ready');
}

function onPlayerStateChange(event) {
    // Handle player state changes
    if (event.data === YT.PlayerState.ENDED) {
        console.log('Video ended');
    }
}

// Safe video control functions
function playVideo() {
    if (player && typeof player.playVideo === 'function') {
        player.playVideo();
    } else {
        // Fallback: reload iframe with autoplay
        const iframe = document.getElementById('youtubeVideo');
        if (iframe) {
            const currentSrc = iframe.src;
            if (!currentSrc.includes('autoplay=1')) {
                iframe.src = currentSrc.replace('autoplay=0', 'autoplay=1') + (currentSrc.includes('autoplay=') ? '' : '&autoplay=1');
            }
        }
    }
}

function pauseVideo() {
    if (player && typeof player.pauseVideo === 'function') {
        player.pauseVideo();
    } else {
        // Fallback: reload iframe without autoplay
        const iframe = document.getElementById('youtubeVideo');
        if (iframe) {
            const currentSrc = iframe.src;
            iframe.src = currentSrc.replace('autoplay=1', 'autoplay=0');
        }
    }
}

// Video Modal Setup
function setupVideoModal() {
    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('videoModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const modalContent = document.querySelector('.modal-content');
    let scrollPosition = 0; // Variable to store scroll position

    // Check if elements exist
    if (!modal || !btn || !closeBtn || !modalContent) return;

    // Check if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Function to trap focus within modal for accessibility
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
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

    // Open modal function
    function openModal(e) {
        e.preventDefault();
        // Save current scroll position
        scrollPosition = window.scrollY || window.pageYOffset;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        if (isMobile) {
            document.body.classList.add('mobile-modal-open');
        }
        trapFocus(modal);

        // Start video playback using safe method
        playVideo();
    }

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open', 'mobile-modal-open');
        document.body.style.overflow = 'auto';

        // Restore scroll position
        window.scrollTo(0, scrollPosition);

        // Pause video using safe method
        pauseVideo();

        // Return focus to the button that opened the modal
        btn.focus();
    }

    // Event listeners for opening modal
    btn.addEventListener('click', openModal);
    if (isMobile) {
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            openModal(e);
        });
    }

    // Event listeners for closing modal
    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeModal();
    });

    // Close modal when clicking/touching outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    modal.addEventListener('touchend', (e) => {
        if (e.target === modal) {
            e.preventDefault();
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Prevent modal content from closing when interacting inside
    modalContent.addEventListener('click', (e) => e.stopPropagation());
    modalContent.addEventListener('touchend', (e) => e.stopPropagation());
    modalContent.addEventListener('touchmove', (e) => e.stopPropagation());
    
    // Add touch event prevention for the iframe
    const iframe = document.getElementById('youtubeVideo');
    if (iframe) {
        iframe.addEventListener('touchstart', (e) => e.stopPropagation());
    }
}

// Weather functionality
// class WeatherWidget {
//     constructor() {
//         this.apiKey = '1b1286a2450ec4aaf41b6d5d7b7c1bee';
//         this.weatherWidget = document.getElementById('weatherWidget');
//         this.weatherContent = this.weatherWidget?.querySelector('.weather-content');
//         this.weatherLoading = this.weatherWidget?.querySelector('.weather-loading');
//         this.weatherError = this.weatherWidget?.querySelector('.weather-error');
        
//         // Store current weather data to prevent unnecessary API calls
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
//             // Fallback to Berlin weather
//             await this.loadFallbackWeather();
//         }
//     }

//     async loadWeather() {
//         this.showLoading();
        
//         try {
//             // Get user location first
//             const position = await this.getUserPosition();
//             const weatherData = await this.fetchWeatherData(position.coords.latitude, position.coords.longitude);
//             this.currentWeatherData = weatherData;
//             this.isUserLocation = true;
//             this.displayWeather(weatherData, true);
//         } catch (geoError) {
//             console.log('Geolocation failed, using fallback:', geoError);
//             // If geolocation fails, use Berlin as fallback
//             await this.loadFallbackWeather();
//         }
//     }

//     async loadFallbackWeather() {
//         try {
//             // Berlin coordinates as fallback
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
//                 // Reduced timeout for better UX
//                 timeout: 8000, 
//                 // 5 minutes cache
//                 maximumAge: 300000 
//             });
//         });
//     }

//     async fetchWeatherData(lat, lon) {
//         // Get current language at the moment of API call
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

//         // Update weather content
//         this.weatherContent.querySelector('.temp-value').textContent = temp;
//         this.weatherContent.querySelector('.weather-desc').textContent = description;
        
//         // Get current language for fallback message
//         const currentLang = document.documentElement.lang || 'en';
//         const t = translations[currentLang]?.weather || translations.en.weather;
        
//         // Show location name with appropriate indicator
//         let locationText;
//         if (isUserLocation) {
//             locationText = `${city}, ${country}`;
//         } else {
//             // Use the translated fallback message
//             const fallbackText = t.fallback || 'Showing Berlin weather';
//             locationText = `${city}, ${country} (${fallbackText})`;
//         }
//         this.weatherContent.querySelector('.location-name').textContent = locationText;
        
//         // Update weather icon
//         const weatherIcon = this.weatherContent.querySelector('.weather-icon i');
//         weatherIcon.className = this.getWeatherIcon(iconCode);

//         // Show content
//         this.hideLoading();
//         this.weatherContent.style.display = 'flex';
        
//         // Demo badge for portfolio showcase 
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
//         // Remove existing badge if any
//         const existingBadge = this.weatherWidget.querySelector('.weather-demo-badge');
//         if (existingBadge) {
//             existingBadge.remove();
//         }

//         const badge = document.createElement('div');
//         badge.className = 'weather-demo-badge';
//         badge.setAttribute('data-i18n', 'weather.demo');
        
//         this.weatherWidget.style.position = 'relative';
//         this.weatherWidget.appendChild(badge);
        
//         // Update translation for the badge
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

//     // Update weather when language changes
//     async updateLanguage() {
//         // Update badge first
//         this.updateBadgeTranslation();
        
//         // Force a fresh API call with the new language
//         try {
//             await this.loadWeather();
//         } catch (error) {
//             console.error('Failed to update weather with new language:', error);
//             // If fresh load fails, try to update display with existing data
//             if (this.currentWeatherData) {
//                 this.displayWeather(this.currentWeatherData, this.isUserLocation);
//             }
//         }
//     }
// }
// // Initialize weather widget
// let weatherWidget;

// function initWeatherWidget() {
//     weatherWidget = new WeatherWidget();
// }

// // Update weather on language change
// function updateWeatherOnLanguageChange() {
//     if (weatherWidget) {
//         weatherWidget.updateLanguage();
//     }
// }


// Disable right-click
// document.addEventListener('contextmenu', (event) => event.preventDefault());

// Disable F12 and Ctrl+Shift+I
/* document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
}); */
