(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var partId = document.body.getAttribute("data-part-id");
    var part = CipherNeuron.getPart(partId);
    var main = document.querySelector("[data-part-content]");
    if (!main) return;

    if (!part) {
      main.innerHTML = '<section class="empty-state"><span class="eyebrow">PART NOT FOUND</span><h1>This curriculum section is unavailable.</h1><p>Use the curriculum map to choose one of the available learning parts.</p><a class="button button-primary" href="index.html">Return home</a></section>';
      CipherNeuron.updateDocumentTitle("Part not found");
      return;
    }

    CipherNeuron.updateDocumentTitle(part.title);
    CipherNeuron.renderBreadcrumbs(document.querySelector("[data-breadcrumbs]"), [
      { label: "Home", href: "index.html" }, { label: "Curriculum", href: "part-01.html" }, { label: part.title }
    ]);
    CipherNeuron.renderSidebar(document.querySelector("[data-course-sidebar]"), part.id, null);

    var catalogModules = part.moduleIds.map(function (moduleId) { return CipherNeuron.getCatalogModule(moduleId); }).filter(Boolean);
    var available = catalogModules.filter(function (catalog) { return Boolean(CipherNeuron.getModule(catalog.id)); }).length;

    main.innerHTML = [
      '<section class="part-hero part-hero-' + part.number + '">',
      '  <div class="part-hero-copy"><span class="eyebrow">PART ' + part.number + ' / CURRICULUM TRACK</span><h1>' + CipherNeuron.escapeHTML(part.title) + '</h1><p class="lead">' + CipherNeuron.escapeHTML(part.description) + '</p><div class="part-hero-meta"><span>' + catalogModules.length + ' modules in this track</span><span>' + available + ' module' + (available === 1 ? '' : 's') + ' currently available</span></div></div>',
      '  <div class="part-hero-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit-core">' + part.number + '</div><span class="orbit-label">KNOWLEDGE / SYSTEMS</span></div>',
      '</section>',
      '<section class="content-section"><div class="section-heading"><div><span class="eyebrow">LEARNING OUTCOMES</span><h2>What you will be able to do</h2></div></div><div class="outcome-grid">' + part.objectives.map(function (item, index) { return '<article class="outcome-item"><span>0' + (index + 1) + '</span><p>' + CipherNeuron.escapeHTML(item) + '</p></article>'; }).join("") + '</div></section>',
      '<section class="content-section"><div class="info-grid"><article class="info-panel"><span class="eyebrow">BEFORE YOU BEGIN</span><h3>Prerequisites</h3><ul class="clean-list">' + part.prerequisites.map(function (item) { return '<li>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article><article class="info-panel"><span class="eyebrow">EXPECTED OUTCOMES</span><h3>By the end of this part</h3><ul class="clean-list">' + part.outcomes.map(function (item) { return '<li>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article></div></section>',
      '<section class="content-section"><div class="section-heading"><div><span class="eyebrow">THE CURRICULUM</span><h2>Modules in this part</h2><p>Follow the sequence to build knowledge progressively. Every module in this learning track includes its topic records, Knowledge Cards, and individually customized AI Learning Prompts.</p></div></div><div class="module-card-grid">' + catalogModules.map(function (module) {
        var liveModule = CipherNeuron.getModule(module.id);
        var topicCount = liveModule ? liveModule.topics.length : 0;
        return '<article class="module-card' + (module.number === "17" ? ' is-advanced' : '') + '"><div class="module-card-top"><span class="module-number">MODULE ' + module.number + '</span><span class="status-badge ' + (liveModule ? 'status-available' : 'status-planned') + '">' + (liveModule ? 'Available' : 'Coming in a later phase') + '</span></div><h3>' + CipherNeuron.escapeHTML(module.title) + '</h3><p>' + CipherNeuron.escapeHTML(module.description) + '</p><div class="module-card-bottom"><span>' + (liveModule ? topicCount + ' topics' : 'Curriculum entry ready') + '</span><a class="text-link" href="module.html?id=' + encodeURIComponent(module.id) + '">Open module <span aria-hidden="true">→</span></a></div></article>';
      }).join("") + '</div></section>',
      '<section class="part-switcher"><div>' + (part.number !== "01" ? '<a class="text-link" href="part-' + String(Number(part.number) - 1).padStart(2, "0") + '.html">← Previous Part</a>' : '<span class="muted">You are at the beginning</span>') + '</div><div>' + (part.number !== "04" ? '<a class="button button-primary" href="part-' + String(Number(part.number) + 1).padStart(2, "0") + '.html">Continue to next Part <span aria-hidden="true">→</span></a>' : '<span class="advanced-note">Advanced learning track</span>') + '</div></section>'
    ].join("\n");
  });
}());
