(function () {
    "use strict";

    var STORAGE_KEY = "qualtrics-theme";
    var LIGHT_CLASS = "light-theme";
    var DARK_CLASS = "dark-theme";

    function getBodyTheme() {
        if (document.body.classList.contains(DARK_CLASS)) return "dark";
        if (document.body.classList.contains(LIGHT_CLASS)) return "light";
        return null;
    }

    function getInitialTheme() {
        var stored = null;

        try {
            stored = localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            /* no localStorage - ignore */
        }

        if (stored === "light" || stored === "dark") return stored;

        var current = getBodyTheme();
        if (current) return current;

        if (window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches) {
            return "dark";
        }
        return "light";
    }

    function applyTheme(theme) {
        document.body.classList.remove(LIGHT_CLASS, DARK_CLASS);
        document.body.classList.add(theme === "dark" ? DARK_CLASS : LIGHT_CLASS);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            /* no localStorage - ignore */
        }
    }

    function createThemeSelector() {
        var wrapper = document.createElement("div");
        wrapper.id = "qc-theme-switcher";
        wrapper.style.cssText =
            "position:fixed;top:0.5rem;right:0.5rem;z-index:2147483647;" +
            "font-family:sans-serif;font-size:0.875rem;";

        var label = document.createElement("label");
        label.htmlFor = "qc-theme-select";
        label.textContent = "Theme: ";
        label.style.cssText = "margin-right:0.25rem;";

        var select = document.createElement("select");
        select.id = "qc-theme-select";

        var lightOption = document.createElement("option");
        lightOption.value = "light";
        lightOption.textContent = "Light";

        var darkOption = document.createElement("option");
        darkOption.value = "dark";
        darkOption.textContent = "Dark";

        select.appendChild(lightOption);
        select.appendChild(darkOption);

        select.addEventListener("change", function () {
            applyTheme(select.value);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        document.body.appendChild(wrapper);

        return select;
    }

    function init() {
        var initialTheme = getInitialTheme();
        applyTheme(initialTheme);

        var select = createThemeSelector();
        select.value = initialTheme;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();