(function () {
    'use strict';

    var LANG_COOKIE = 'lang',
        THREE_YEARS = 365 * 3;

    var langSelect = document.getElementById('language-select');

    checkLang();

    function checkLang() {
        var lang = getCookie(LANG_COOKIE);

        if (lang === 'en' || lang === 'ru') {
            langSelect.value = lang;
        } else {
            setLang('en');
        }

        langSelect.onchange = function () {
            setLang(langSelect.value);
            window.location.pathname = '/';
        }
    }

    function setLang(lang) {
        langSelect.value = lang;
        setCookie('lang', lang, THREE_YEARS);
    }

    function setCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else expires = "";
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        this.set(name, "", -1);
    }

}());