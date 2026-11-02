(function () {
  "use strict";

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "readonly");
      field.style.position = "fixed";
      field.style.opacity = "0";
      field.style.pointerEvents = "none";
      document.body.appendChild(field);
      field.select();
      field.setSelectionRange(0, field.value.length);
      try {
        var successful = document.execCommand("copy");
        document.body.removeChild(field);
        if (successful) resolve();
        else reject(new Error("Copy command was not successful."));
      } catch (error) {
        document.body.removeChild(field);
        reject(error);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var topicId = new URLSearchParams(window.location.search).get("id") || "";
    var result = CipherNeuron.getTopic(topicId);
    var host = document.querySelector("[data-topic-content]");
    if (!host) return;

    if (!result) {
      host.innerHTML = '<section class="empty-state"><span class="eyebrow">TOPIC NOT FOUND</span><h1>This learning topic is unavailable.</h1><p>Check the topic identifier or return to the curriculum.</p><a class="button button-primary" href="part-01.html">Browse curriculum</a></section>';
      CipherNeuron.updateDocumentTitle("Topic not found");
      return;
    }

    var topic = result.topic;
    var module = result.module;
    var part = CipherNeuron.getPart(module.partId);
    var topicIndex = module.topics.findIndex(function (item) { return item.id === topic.id; });
    var previous = topicIndex > 0 ? module.topics[topicIndex - 1] : null;
    var next = topicIndex < module.topics.length - 1 ? module.topics[topicIndex + 1] : null;

    CipherNeuron.updateDocumentTitle(topic.title);
    CipherNeuron.renderBreadcrumbs(document.querySelector("[data-breadcrumbs]"), [
      { label: "Home", href: "index.html" },
      { label: part ? part.shortTitle : "Curriculum", href: module.partId + ".html" },
      { label: module.title, href: "module.html?id=" + encodeURIComponent(module.id) },
      { label: topic.title }
    ]);
    CipherNeuron.renderSidebar(document.querySelector("[data-course-sidebar]"), module.partId, module.id);

    var completed = CipherNeuron.isTopicCompleted(topic.id);
    var fullPrompt = topic.prompt || "";
    var preview = fullPrompt.length > 820 ? fullPrompt.slice(0, 820).trimEnd() + "\n\n[Prompt preview — expand to view the complete prompt.]" : fullPrompt;

    host.innerHTML = [
      '<section class="topic-hero"><div class="topic-kicker"><span class="eyebrow">' + CipherNeuron.escapeHTML(topic.category || "LEARNING TOPIC") + '</span><span class="difficulty-badge">' + CipherNeuron.escapeHTML(topic.difficulty || "Foundation") + '</span></div><h1>' + CipherNeuron.escapeHTML(topic.title) + '</h1><p class="lead">' + CipherNeuron.escapeHTML(topic.subtitle || "Explore this concept through a structured AI-generated lesson.") + '</p><div class="topic-parent-line"><a href="' + module.partId + '.html">' + CipherNeuron.escapeHTML(part ? part.shortTitle : "Part") + '</a><span> / </span><a href="module.html?id=' + encodeURIComponent(module.id) + '">Module ' + module.number + ': ' + CipherNeuron.escapeHTML(module.title) + '</a></div></section>',
      '<section class="content-section knowledge-section"><div class="section-heading"><div><span class="eyebrow">KNOWLEDGE CARD</span><h2>Core understanding</h2></div><span class="card-label">REFERENCE / 01</span></div><article class="definition-card"><span class="eyebrow">DEFINITION</span><p>' + CipherNeuron.escapeHTML(topic.definition) + '</p></article><div class="info-grid"><article class="info-panel"><span class="eyebrow">WHERE IT FITS</span><p>' + CipherNeuron.escapeHTML(topic.position) + '</p></article><article class="info-panel"><span class="eyebrow">PREREQUISITES</span><ul class="clean-list">' + topic.prerequisites.map(function (item) { return '<li>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article></div><div class="topic-detail-grid"><article class="detail-panel"><span class="eyebrow">RELATED CONCEPTS</span><div class="tag-list">' + topic.relatedConcepts.map(function (item) { return '<span class="concept-tag">' + CipherNeuron.escapeHTML(item) + '</span>'; }).join("") + '</div></article><article class="detail-panel"><span class="eyebrow">LEARNING OBJECTIVES</span><ul class="objective-checklist">' + topic.objectives.map(function (item) { return '<li><span aria-hidden="true">✓</span>' + CipherNeuron.escapeHTML(item) + '</li>'; }).join("") + '</ul></article></div></section>',
      '<section class="content-section prompt-section"><div class="section-heading"><div><span class="eyebrow">AI LEARNING PROMPT</span><h2>Turn this topic into a complete lesson</h2><p>Copy the full prompt into your preferred AI assistant. The prompt is written in English and instructs the assistant to teach in Egyptian colloquial Arabic while preserving technical terminology in English.</p></div><span class="prompt-status">SELF-CONTAINED PROMPT</span></div><div class="prompt-shell"><div class="prompt-toolbar"><div><span class="prompt-language-dot"></span><strong>Instruction prompt</strong><span class="prompt-language">ENGLISH</span></div><div class="prompt-actions"><button class="button button-ghost button-small" type="button" data-prompt-toggle aria-expanded="false">Show full prompt</button><button class="button button-primary button-small" type="button" data-copy-prompt>Copy full prompt</button></div></div><pre class="prompt-preview" data-prompt-preview>' + CipherNeuron.escapeHTML(preview) + '</pre><pre class="prompt-full" data-prompt-full hidden>' + CipherNeuron.escapeHTML(fullPrompt) + '</pre><div class="copy-feedback" data-copy-feedback role="status" aria-live="polite"></div></div></section>',
      '<section class="topic-completion"><div><span class="eyebrow">YOUR LEARNING PROGRESS</span><strong>' + (completed ? 'Topic marked as completed' : 'Finished studying this topic?') + '</strong><p>Completion is saved only in this browser using local storage. It is not synced to an account or another device.</p></div><button class="button ' + (completed ? 'button-secondary' : 'button-primary') + '" type="button" data-completion-toggle aria-pressed="' + String(completed) + '">' + (completed ? '✓ Completed — undo' : 'Mark as completed') + '</button></section>',
      '<nav class="learning-pagination topic-pagination" aria-label="Topic navigation"><div>' + (previous ? '<a href="topic.html?id=' + encodeURIComponent(previous.id) + '"><small>PREVIOUS TOPIC</small><strong>← ' + CipherNeuron.escapeHTML(previous.title) + '</strong></a>' : '<a href="module.html?id=' + encodeURIComponent(module.id) + '"><small>BACK TO MODULE</small><strong>← ' + CipherNeuron.escapeHTML(module.title) + '</strong></a>') + '</div><div>' + (next ? '<a href="topic.html?id=' + encodeURIComponent(next.id) + '"><small>NEXT TOPIC</small><strong>' + CipherNeuron.escapeHTML(next.title) + ' →</strong></a>' : '<a href="' + module.partId + '.html"><small>PART OVERVIEW</small><strong>Complete this module →</strong></a>') + '</div></nav>'
    ].join("\n");

    var toggleButton = host.querySelector("[data-prompt-toggle]");
    var previewElement = host.querySelector("[data-prompt-preview]");
    var fullElement = host.querySelector("[data-prompt-full]");
    toggleButton.addEventListener("click", function () {
      var expanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", String(!expanded));
      previewElement.hidden = !expanded;
      fullElement.hidden = expanded;
      toggleButton.textContent = expanded ? "Show full prompt" : "Collapse prompt";
    });

    host.querySelector("[data-copy-prompt]").addEventListener("click", function (event) {
      var button = event.currentTarget;
      var feedback = host.querySelector("[data-copy-feedback]");
      copyText(fullPrompt).then(function () {
        button.textContent = "Copied";
        feedback.textContent = "Complete prompt copied to clipboard.";
        button.classList.add("is-success");
        window.setTimeout(function () { button.textContent = "Copy full prompt"; button.classList.remove("is-success"); }, 2200);
      }).catch(function () {
        feedback.textContent = "Clipboard access was blocked. Expand the prompt and copy the text manually.";
      });
    });

    host.querySelector("[data-completion-toggle]").addEventListener("click", function (event) {
      var button = event.currentTarget;
      var nowCompleted = button.getAttribute("aria-pressed") !== "true";
      var saved = CipherNeuron.setTopicCompletion(topic.id, nowCompleted);
      button.setAttribute("aria-pressed", String(nowCompleted));
      button.textContent = nowCompleted ? "✓ Completed — undo" : "Mark as completed";
      button.classList.toggle("button-primary", !nowCompleted);
      button.classList.toggle("button-secondary", nowCompleted);
      host.querySelector(".topic-completion strong").textContent = nowCompleted ? "Topic marked as completed" : "Finished studying this topic?";
      if (!saved) host.querySelector(".topic-completion p").textContent = "Your browser did not allow local storage. Progress may not persist after leaving this page.";
    });
  });
}());
