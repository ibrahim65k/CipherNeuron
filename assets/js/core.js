/* CipherNeuron shared interface and helpers — no modules, fetch, or build step. */
(function () {
  "use strict";

  var COURSE = window.AI_COURSE || { parts: [], moduleCatalog: [] };
  var MODULES = window.AI_COURSE_MODULES || [];

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function getPart(partId) {
    return COURSE.parts.find(function (part) { return part.id === partId; }) || null;
  }

  function getCatalogModule(moduleId) {
    return COURSE.moduleCatalog.find(function (module) { return module.id === moduleId; }) || null;
  }

  function getModule(moduleId) {
    return MODULES.find(function (module) { return module.id === moduleId; }) || null;
  }

  function getTopic(topicId) {
    for (var moduleIndex = 0; moduleIndex < MODULES.length; moduleIndex += 1) {
      var module = MODULES[moduleIndex];
      var topic = (module.topics || []).find(function (item) { return item.id === topicId; });
      if (topic) return { topic: topic, module: module };
    }
    return null;
  }

  function getAllTopics() {
    var topics = [];
    MODULES.forEach(function (module) {
      (module.topics || []).forEach(function (topic, index) {
        topics.push({ topic: topic, module: module, index: index });
      });
    });
    return topics;
  }

  function getModuleSequence() {
    return COURSE.moduleCatalog.slice();
  }

  function getModuleProgress(moduleId) {
    var module = getModule(moduleId);
    if (!module) return { completed: 0, total: 0, percentage: 0 };
    var completedIds = readCompletedTopics();
    var completed = (module.topics || []).filter(function (topic) { return completedIds.indexOf(topic.id) !== -1; }).length;
    var total = (module.topics || []).length;
    return { completed: completed, total: total, percentage: total ? Math.round((completed / total) * 100) : 0 };
  }

  function readCompletedTopics() {
    try {
      var stored = window.localStorage.getItem("cipherneuron.completedTopics");
      var parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function writeCompletedTopics(ids) {
    try {
      window.localStorage.setItem("cipherneuron.completedTopics", JSON.stringify(ids));
      return true;
    } catch (error) {
      return false;
    }
  }

  function setTopicCompletion(topicId, completed) {
    var ids = readCompletedTopics();
    var index = ids.indexOf(topicId);
    if (completed && index === -1) ids.push(topicId);
    if (!completed && index !== -1) ids.splice(index, 1);
    return writeCompletedTopics(ids);
  }

  function isTopicCompleted(topicId) {
    return readCompletedTopics().indexOf(topicId) !== -1;
  }

  function renderHeader() {
    var host = document.querySelector("[data-site-header]");
    if (!host) return;

    var currentPage = document.body.getAttribute("data-page") || "";
    var homeActive = currentPage === "home" ? " is-active" : "";
    var aboutActive = currentPage === "about" ? " is-active" : "";
    var searchActive = currentPage === "search" ? " is-active" : "";
    var curriculumActive = ["part", "module", "topic"].indexOf(currentPage) !== -1 ? " is-active" : "";

    host.innerHTML = [
      '<a class="skip-link" href="#main-content">Skip to content</a>',
      '<header class="site-header">',
      '  <div class="container header-inner">',
      '    <a class="brand" href="index.html" aria-label="CipherNeuron home">',
      '      <img class="brand-mark" src="assets/img/logo.svg" alt="" width="38" height="38">',
      '      <span class="brand-copy"><strong>CipherNeuron</strong><small>AI × Cybersecurity Learning Atlas</small></span>',
      '    </a>',
      '    <button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation"><span class="menu-icon" aria-hidden="true"></span><span class="sr-only">Toggle navigation</span></button>',
      '    <nav class="primary-nav" id="primary-navigation" aria-label="Primary navigation">',
      '      <a class="nav-link' + homeActive + '" href="index.html">Home</a>',
      '      <a class="nav-link' + curriculumActive + '" href="part-01.html">Curriculum</a>',
      '      <a class="nav-link' + searchActive + '" href="search.html">Search</a>',
      '      <a class="nav-link' + aboutActive + '" href="about.html">About</a>',
      '      <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch color theme" title="Switch color theme"><span class="theme-icon" aria-hidden="true">◐</span><span class="theme-label">Light mode</span></button>',
      '    </nav>',
      '  </div>',
      '</header>'
    ].join("\n");

    var toggle = host.querySelector(".mobile-menu-toggle");
    var nav = host.querySelector(".primary-nav");
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    host.querySelectorAll(".primary-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    var themeButton = host.querySelector("[data-theme-toggle]");
    themeButton.addEventListener("click", toggleTheme);
    syncThemeButton(themeButton);
  }

  function renderFooter() {
    var host = document.querySelector("[data-site-footer]");
    if (!host) return;
    host.innerHTML = [
      '<footer class="site-footer">',
      '  <div class="container footer-main">',
      '    <div class="footer-brand">',
      '      <a class="brand" href="index.html"><img class="brand-mark" src="assets/img/logo.svg" alt="" width="36" height="36"><span class="brand-copy"><strong>CipherNeuron</strong><small>Understand intelligence. Secure what it can do.</small></span></a>',
      '      <p>A structured learning atlas at the intersection of artificial intelligence and cybersecurity.</p>',
      '    </div>',
      '    <div class="footer-links"><strong>Explore</strong><a href="part-01.html">Curriculum</a><a href="part-04.html">AI Security Track</a><a href="search.html">Search Topics</a><a href="about.html">About the Project</a></div>',
      '    <div class="footer-links"><strong>Project</strong><a href="about.html">About CipherNeuron</a><a href="part-04.html">AI Security Track</a><span class="footer-note">Static site · No account required</span></div>',
      '  </div>',
      '  <div class="container footer-bottom"><span>© ' + new Date().getFullYear() + ' CipherNeuron. Educational project.</span><span>Learn responsibly. Test only with authorization.</span></div>',
      '</footer>'
    ].join("\n");
  }

  function renderBreadcrumbs(host, items) {
    if (!host) return;
    var html = '<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>';
    items.forEach(function (item, index) {
      var isLast = index === items.length - 1;
      html += '<li>';
      if (item.href && !isLast) html += '<a href="' + escapeHTML(item.href) + '">' + escapeHTML(item.label) + '</a>';
      else html += '<span' + (isLast ? ' aria-current="page"' : '') + '>' + escapeHTML(item.label) + '</span>';
      html += '</li>';
    });
    html += '</ol></nav>';
    host.innerHTML = html;
  }

  function renderSidebar(host, activePartId, activeModuleId) {
    if (!host) return;
    var html = '<div class="sidebar-card"><div class="sidebar-heading"><span class="eyebrow">LEARNING PATH</span><strong>Curriculum map</strong></div><nav aria-label="Curriculum map"><ul class="sidebar-parts">';
    COURSE.parts.forEach(function (part) {
      var activePart = part.id === activePartId;
      html += '<li class="sidebar-part' + (activePart ? ' is-active' : '') + '"><a href="' + escapeHTML(part.id + '.html') + '"><span class="sidebar-part-number">' + escapeHTML(part.number) + '</span><span>' + escapeHTML(part.shortTitle) + '</span></a>';
      if (activePart) {
        html += '<ul class="sidebar-modules">';
        part.moduleIds.forEach(function (moduleId) {
          var catalog = getCatalogModule(moduleId);
          if (!catalog) return;
          html += '<li><a class="' + (moduleId === activeModuleId ? 'is-current' : '') + '" href="module.html?id=' + encodeURIComponent(moduleId) + '"><span>' + escapeHTML(catalog.number) + '</span>' + escapeHTML(catalog.title) + '</a></li>';
        });
        html += '</ul>';
      }
      html += '</li>';
    });
    html += '</ul></nav><p class="sidebar-note">Progress is stored locally in this browser only.</p></div>';
    host.innerHTML = html;
  }

  function updateDocumentTitle(title) {
    document.title = title ? title + " | CipherNeuron" : "CipherNeuron — AI × Cybersecurity Learning Atlas";
  }

  function initTheme() {
    var theme = "dark";
    try {
      var saved = window.localStorage.getItem("cipherneuron.theme");
      if (saved === "light" || saved === "dark") theme = saved;
    } catch (error) {
      /* Private browsing or disabled storage: use the default dark theme. */
    }
    document.documentElement.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || "dark";
    var next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { window.localStorage.setItem("cipherneuron.theme", next); } catch (error) { /* Theme still changes for this page view. */ }
    var button = document.querySelector("[data-theme-toggle]");
    if (button) syncThemeButton(button);
  }

  function syncThemeButton(button) {
    var theme = document.documentElement.getAttribute("data-theme") || "dark";
    var isDark = theme === "dark";
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("aria-pressed", String(!isDark));
    var label = button.querySelector(".theme-label");
    var icon = button.querySelector(".theme-icon");
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
    if (icon) icon.textContent = isDark ? "☼" : "◐";
  }

  function initGlobalKeyboardShortcuts() {
    document.addEventListener("keydown", function (event) {
      var target = event.target;
      var typing = target && (target.matches("input, textarea, select") || target.isContentEditable);
      if (!typing && event.key === "/") {
        var searchInput = document.querySelector("[data-search-input]");
        if (searchInput) {
          event.preventDefault();
          searchInput.focus();
        }
      }
      if (event.key === "Escape") {
        var nav = document.querySelector(".primary-nav.is-open");
        var toggle = document.querySelector(".mobile-menu-toggle");
        if (nav && toggle) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    renderHeader();
    renderFooter();
    initGlobalKeyboardShortcuts();
  });

  window.CipherNeuron = {
    escapeHTML: escapeHTML,
    getPart: getPart,
    getCatalogModule: getCatalogModule,
    getModule: getModule,
    getTopic: getTopic,
    getAllTopics: getAllTopics,
    getModuleSequence: getModuleSequence,
    getModuleProgress: getModuleProgress,
    renderBreadcrumbs: renderBreadcrumbs,
    renderSidebar: renderSidebar,
    updateDocumentTitle: updateDocumentTitle,
    setTopicCompletion: setTopicCompletion,
    isTopicCompleted: isTopicCompleted,
    readCompletedTopics: readCompletedTopics
  };
}());
