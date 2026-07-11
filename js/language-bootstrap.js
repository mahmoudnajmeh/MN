(() => {
    'use strict';

    const supportedLanguages = new Set(['en', 'de', 'pl', 'fr', 'tr', 'ar', 'ru', 'he']);

    try {
        const storedLanguage = localStorage.getItem('language');
        if (!storedLanguage || !supportedLanguages.has(storedLanguage)) return;

        document.documentElement.lang = storedLanguage;
        document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
    } catch {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }
})();
