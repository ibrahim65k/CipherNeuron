(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var params = new URLSearchParams(window.location.search);
    var moduleId = params.get("id") || "";
    var module = CipherNeuron.getModule(moduleId);
    var catalog = CipherNeuron.getCatalogModule(moduleId);
    var host = document.querySelector("[data-module-content]");

    if (!host) return;
    if (!catalog) {
      host.innerHTML = '<section class="empty-state"><span class="eyebrow">UNKNOWN MODULE</span><h1>We could not find that module.</h1><p>The module identifier may be missing or invalid.</p><a class="button button-primary" href="part-01.html">Browse curriculum</a></section>';
      CipherNeuron.updateDocumentTitle("Module not found");
      return;
    }

    var part = CipherNeuron.getPart(catalog.partId);
    CipherNeuron.updateDocumentTitle(catalog.title);
    CipherNeuron.renderBreadcrumbs(document.querySelector("[data-breadcrumbs]"), [
      { label: "Home", href: "index.html" }, { label: part ? part.shortTitle : "Curriculum", href: catalog.partId + ".html" }, { label: catalog.title }
    ]);
    CipherNeuron.renderSidebar(document.querySelector("[data-course-sidebar]"), catalog.partId, moduleId);

    var sequence = CipherNeuron.getModuleSequence();
    var currentIndex = sequence.findIndex(function (item) { return item.id === moduleId; });
    var previous = currentIndex > 0 ? sequence[currentIndex - 1] : null;
    var next = currentIndex >= 0 && currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : null;

    if (!module) {
      host.innerHTML = [
        '<section class="module-hero"><span class="eyebrow">PART ' + (part ? part.number : "") + ' / MODULE ' + catalog.number + '</span><h1>' + CipherNeuron.escapeHTML(catalog.title) + '</h1><p class="lead">' + CipherNeuron.escapeHTML(catalog.description) + '</p><span class="status-badge status-planned">Curriculum entry reserved</span></section>',
        '<section class="empty-state inline-empty"><div class="empty-state-mark" aria-hidden="true">⌁</div><span class="eyebrow">CONTENT NOT LOADED YET</span><h2>This module is part of the curriculum plan.</h2><p>The page route and curriculum entry are ready. Its Knowledge Cards and customized AI Learning Prompts will be added in the relevant data phase. No lesson content is being represented as complete yet.</p><a class="button button-secondary" href="' + catalog.partId + '.html">Back to ' + CipherNeuron.escapeHTML(part ? part.shortTitle : "Part") + '</a></section>',
        '<nav class="learning-pagination" aria-label="Module navigation"><div>' + (previous ? '<a href="module.html?id=' + encodeURIComponent(previous.id) + '">← ' + CipherNeuron.escapeHTML(previous.title) + '</a>' : '') + '</div><div>' + (next ? '<a href="module.html?id=' + encodeURIComponent(next.id) + '">' + CipherNeuron.escapeHTML(next.title) + ' →</a>' : '') + '</div></nav>'
      ].join("\n");
      return;
    }

    var progress = CipherNeuron.getModuleProgress(module.id);
    host.innerHTML = [
      '<section class="module-hero"><span class="eyebrow">PART ' + catalog.number.slice(0, 0) + (part ? part.number : "") + ' / MODULE ' + module.number + '</span><div class="module-title-row"><div><h1>' + CipherNeuron.escapeHTML(module.title) + '</h1><p class="lead">' + CipherNeuron.escapeHTML(module.subtitle || module.description) + '</p></div><span class="difficulty-badge">' + CipherNeuron.escapeHTML(module.difficulty || "Foundation") + '</span></div><div class="module-meta"><span>◷ ' + CipherNeuron.escapeHTML(module.estimatedTime || "Self-paced") + '</span><span>▤ ' + module.topics.length + ' topics</span><span>✓ ' + progress.completed + ' completed</span></div></section>',
      '<section class="content-section"><div class="section-heading"><div><span class="eyebrow">MODULE OVERVIEW</span><h2>What this module covers</h2></div></div><p class="body-copy">' + CipherNeuron.escapeHTML(module.description) + '</p><div class="info-grid"><article class="info-panel"><span class="eyebrow">PREREQUISITES</span><ul class="clean-list">' + module.prerequisites.map(function (item) { return '<li>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article><article class="info-panel"><span class="eyebrow">LEARNING OBJECTIVES</span><ul class="clean-list">' + module.objectives.map(function (item) { return '<li>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article></div></section>',
      '<section class="content-section"><div class="section-heading"><div><span class="eyebrow">LEARNING SEQUENCE</span><h2>Topics</h2><p>Open a topic to review its Knowledge Card and copy its individually tailored AI Learning Prompt.</p></div><div class="progress-summary"><strong>' + progress.percentage + '%</strong><span>local progress</span></div></div><div class="progress-track"><span style="width:' + progress.percentage + '%"></span></div><div class="topic-list">' + module.topics.map(function (topic, index) {
        var done = CipherNeuron.isTopicCompleted(topic.id);
        return '<a class="topic-row" href="topic.html?id=' + encodeURIComponent(topic.id) + '"><span class="topic-row-number">' + String(index + 1).padStart(2, "0") + '</span><span class="topic-row-copy"><strong>' + CipherNeuron.escapeHTML(topic.title) + '</strong><small>' + CipherNeuron.escapeHTML(topic.subtitle || topic.definition) + '</small></span><span class="topic-row-status">' + (done ? '<span class="completed-dot" title="Completed">✓</span>' : '<span class="topic-arrow" aria-hidden="true">↗</span>') + '</span></a>';
      }).join("") + '</div></section>',
      '<section class="related-modules"><span class="eyebrow">CONTINUE EXPLORING</span><div>' + (module.relatedModules || []).map(function (relatedId) { var related = CipherNeuron.getCatalogModule(relatedId); return related ? '<a href="module.html?id=' + encodeURIComponent(related.id) + '">' + CipherNeuron.escapeHTML(related.title) + ' <span aria-hidden="true">→</span></a>' : ''; }).join("") + '</div></section>',
      '<nav class="learning-pagination" aria-label="Module navigation"><div>' + (previous ? '<a href="module.html?id=' + encodeURIComponent(previous.id) + '">← ' + CipherNeuron.escapeHTML(previous.title) + '</a>' : '<a href="' + catalog.partId + '.html">← Back to Part</a>') + '</div><div>' + (next ? '<a href="module.html?id=' + encodeURIComponent(next.id) + '">' + CipherNeuron.escapeHTML(next.title) + ' →</a>' : '') + '</div></nav>'
    ].join("\n");
  });
}());
