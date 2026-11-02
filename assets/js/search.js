(function () {
  "use strict";

  function buildSearchIndex() {
    var rows = [];
    window.AI_COURSE.parts.forEach(function (part) {
      rows.push({ type: "Part", title: part.title, description: part.description, href: part.id + ".html", keywords: part.shortTitle + " learning track curriculum" });
    });
    window.AI_COURSE.moduleCatalog.forEach(function (module) {
      rows.push({ type: "Module", title: module.title, description: module.description, href: "module.html?id=" + encodeURIComponent(module.id), keywords: module.number + " " + module.status });
    });
    CipherNeuron.getAllTopics().forEach(function (entry) {
      var topic = entry.topic;
      rows.push({ type: "Topic", title: topic.title, description: topic.definition, href: "topic.html?id=" + encodeURIComponent(topic.id), keywords: (topic.keywords || []).join(" ") + " " + (topic.relatedConcepts || []).join(" ") + " " + entry.module.title });
    });
    return rows;
  }

  function performSearch(query, index) {
    var normalized = query.toLowerCase().trim();
    if (!normalized) return [];
    var terms = normalized.split(/\s+/).filter(Boolean);
    return index.map(function (item) {
      var title = item.title.toLowerCase();
      var description = item.description.toLowerCase();
      var keywords = item.keywords.toLowerCase();
      var score = 0;
      terms.forEach(function (term) {
        if (title.indexOf(term) !== -1) score += 5;
        if (description.indexOf(term) !== -1) score += 2;
        if (keywords.indexOf(term) !== -1) score += 1;
      });
      return { item: item, score: score };
    }).filter(function (result) { return result.score > 0; }).sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); }).map(function (result) { return result.item; });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("[data-search-input]");
    var form = document.querySelector("[data-search-form]");
    var resultsHost = document.querySelector("[data-search-results]");
    var count = document.querySelector("[data-search-count]");
    if (!input || !form || !resultsHost) return;

    var index = buildSearchIndex();
    function updateResults() {
      var query = input.value.trim();
      if (!query) {
        count.textContent = "Search across parts, modules, topics, definitions, and keywords.";
        resultsHost.innerHTML = '<div class="search-empty"><span class="search-empty-mark" aria-hidden="true">⌕</span><h2>Start with a concept</h2><p>Try “transformers”, “RAG”, “network security”, or “machine learning”.</p></div>';
        return;
      }
      var results = performSearch(query, index);
      count.textContent = results.length + ' result' + (results.length === 1 ? '' : 's') + ' for “' + query.replace(/[<>]/g, "") + '”';
      if (!results.length) {
        resultsHost.innerHTML = '<div class="search-empty"><h2>No matching entries</h2><p>Try a broader term or check the spelling. Search covers the curriculum catalogue and all topic records currently loaded in this browser.</p></div>';
        return;
      }
      resultsHost.innerHTML = results.map(function (item) {
        return '<a class="search-result" href="' + item.href + '"><span class="result-type">' + CipherNeuron.escapeHTML(item.type) + '</span><span class="result-copy"><strong>' + CipherNeuron.escapeHTML(item.title) + '</strong><small>' + CipherNeuron.escapeHTML(item.description) + '</small></span><span class="result-arrow" aria-hidden="true">↗</span></a>';
      }).join("");
    }

    form.addEventListener("submit", function (event) { event.preventDefault(); updateResults(); });
    input.addEventListener("input", updateResults);

    var initialQuery = new URLSearchParams(window.location.search).get("q") || "";
    input.value = initialQuery;
    updateResults();
    if (initialQuery) CipherNeuron.updateDocumentTitle("Search: " + initialQuery);
  });
}());
