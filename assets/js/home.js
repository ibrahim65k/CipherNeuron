(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var course = window.AI_COURSE;
    var host = document.querySelector("[data-home-parts]");
    if (!course || !host) return;

    host.innerHTML = course.parts.map(function (part, index) {
      var available = part.moduleIds.filter(function (id) {
        return window.AI_COURSE_MODULES.some(function (module) { return module.id === id; });
      }).length;
      var accent = "part-accent-" + (index + 1);
      var objectives = part.objectives.slice(0, 2).map(function (objective) { return '<li>' + CipherNeuron.escapeHTML(objective) + '</li>'; }).join("");
      return [
        '<article class="part-card ' + accent + '">',
        '  <div class="part-card-top"><span class="part-index">PART ' + part.number + '</span><span class="part-card-symbol" aria-hidden="true">' + ["◈", "⌘", "⌁", "⟁"][index] + '</span></div>',
        '  <h3>' + CipherNeuron.escapeHTML(part.title) + '</h3>',
        '  <p>' + CipherNeuron.escapeHTML(part.description) + '</p>',
        '  <ul class="objective-list">' + objectives + '</ul>',
        '  <div class="part-card-meta"><span>' + part.moduleIds.length + ' modules</span><span>' + available + ' available</span></div>',
        '  <a class="text-link" href="' + part.id + '.html">Explore Part <span aria-hidden="true">↗</span></a>',
        '</article>'
      ].join("\n");
    }).join("");

    var totalModules = course.moduleCatalog.length;
    var availableModules = window.AI_COURSE_MODULES.length;
    var totalTopics = CipherNeuron.getAllTopics().length;
    var stats = document.querySelector("[data-course-stats]");
    if (stats) {
      stats.innerHTML = '<div><strong>' + course.parts.length + '</strong><span>Learning parts</span></div><div><strong>' + totalModules + '</strong><span>Curriculum modules</span></div><div><strong>' + availableModules + '</strong><span>Modules available</span></div><div><strong>' + totalTopics + '</strong><span>Learning topics</span></div>';
    }
  });
}());
