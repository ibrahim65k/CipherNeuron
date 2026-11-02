# CipherNeuron — AI × Cybersecurity Learning Atlas

**Tagline:** Understand intelligence. Secure what it can do.

CipherNeuron is a static, self-paced educational atlas connecting AI fundamentals, practical AI development, AI-assisted cybersecurity, and advanced AI security / red teaming. It contains four learning Parts, 24 populated Modules, and 366 Topic records. Every Topic includes a concise Knowledge Card and an individually customized English AI Learning Prompt that instructs an AI assistant to teach in Egyptian colloquial Arabic while retaining technical terminology in English.

## Curriculum at a glance

| Part | Learning track | Modules | Topics |
|---|---|---:|---:|
| 01 | Artificial Intelligence Fundamentals | 01–08 | 79 |
| 02 | AI Development, Models & Practical Tools | 09–13 | 81 |
| 03 | AI-Assisted Cybersecurity & Offensive Security | 14–16 | 74 |
| 04 | AI Security, AI Penetration Testing & AI Red Teaming | 17–24 | 132 |
| **Total** | | **24** | **366** |

Counts above reflect the curriculum data in this release. The homepage derives its live counts from the loaded JavaScript data.

## Technology stack

- HTML5 pages and semantic document structure.
- CSS3 design system with responsive layouts and dark / light themes.
- Vanilla JavaScript using classic, deferred script tags.
- Curriculum records stored in ordinary JavaScript files and registered on `window.AI_COURSE_MODULES`.
- Browser `localStorage` for theme preference and topic completion, with graceful fallback when storage is unavailable.
- No npm, Node.js, frameworks, bundlers, backend, database, or runtime package dependencies are required to use the site.

## Project structure

```text
AI-Cybersecurity-Platform/
├── index.html
├── part-01.html
├── part-02.html
├── part-03.html
├── part-04.html
├── module.html
├── topic.html
├── search.html
├── about.html
├── 404.html
├── README.md
├── .nojekyll
├── .github/
│   └── workflows/
│       └── pages.yml
└── assets/
    ├── css/
    │   └── styles.css
    ├── img/
    │   ├── favicon.svg
    │   ├── hero-network.svg
    │   └── logo.svg
    └── js/
        ├── core.js
        ├── home.js
        ├── module-page.js
        ├── part-page.js
        ├── search.js
        ├── topic-page.js
        └── data/
            ├── course-index.js
            └── modules/
                ├── module-01.js
                ├── module-02.js
                ├── module-03.js
                ├── module-04.js
                ├── module-05.js
                ├── module-06.js
                ├── module-07.js
                ├── module-08.js
                ├── module-09.js
                ├── module-10.js
                ├── module-11.js
                ├── module-12.js
                ├── module-13.js
                ├── module-14.js
                ├── module-15.js
                ├── module-16.js
                ├── module-17.js
                ├── module-18.js
                ├── module-19.js
                ├── module-20.js
                ├── module-21.js
                ├── module-22.js
                ├── module-23.js
                └── module-24.js
```

## Run locally

### Direct `file://` use

1. Download and extract the ZIP archive.
2. Open the `AI-Cybersecurity-Platform` folder.
3. Double-click `index.html` or open it in a modern browser.

The project uses classic `<script defer>` tags and relative local paths. Curriculum data is loaded by script tags; it does not use `fetch()` or ES module imports. Clipboard copying first uses the Clipboard API in secure contexts and falls back to a selected temporary text area with `document.execCommand('copy')` where supported. Browser security policies can still restrict clipboard access on some `file://` contexts; if copying is blocked, expand the prompt and copy it manually.

### Optional local development server

A local static server can make browser clipboard permissions and development workflows more consistent. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. This is optional and is not required to use the published site.

## GitHub repository setup

1. Create an empty repository on GitHub. Choose any repository name you want.
2. Extract the ZIP archive.
3. Upload the **contents** of the `AI-Cybersecurity-Platform` folder to the repository root, preserving folders such as `assets/` and `.github/`.
4. Commit the files to the `main` branch (or update the workflow branch filter if you choose another branch).
5. In GitHub, open **Settings → Pages** and set the source to **GitHub Actions**.
6. Open the **Actions** tab and confirm that the `Deploy CipherNeuron to GitHub Pages` workflow completes.
7. GitHub will display the published Pages address under **Settings → Pages**.

No username, repository name, or public URL is hard-coded in this project. The workflow deploys the repository root and supports GitHub Pages repository subpaths because internal links and assets use relative paths.

## GitHub Pages deployment workflow

The included `.github/workflows/pages.yml` workflow runs on pushes to `main` and manual dispatch. It uses the official GitHub Pages Actions to configure Pages, upload the repository root as the site artifact, and deploy it. If your default branch is not `main`, edit the `on.push.branches` value in that workflow to match your branch. In **Settings → Pages**, choose **GitHub Actions** as the deployment source.

The `.nojekyll` file tells GitHub Pages not to apply Jekyll processing to the static project. `404.html` supplies the site's not-found page.

## Pages and routes

- Home: `index.html`
- Part pages: `part-01.html` through `part-04.html`
- Module route: `module.html?id=module-01-introduction-to-ai`
- Topic route: `topic.html?id=topic-what-is-artificial-intelligence`
- Search route: `search.html?q=transformers`
- Project overview: `about.html`
- Not found: `404.html`

Module and Topic IDs are read from query strings. Do not rename an ID without updating references, prerequisites, related-module references, and any external links that use it.

## Curriculum data architecture

`assets/js/data/course-index.js` defines the brand, four Parts, and the 24-entry `moduleCatalog`. Each module data file registers one object in the global `window.AI_COURSE_MODULES` array. The module data files are loaded in numeric order before `core.js` on pages that need them. The Part pages load only the Modules belonging to their Part; the homepage, generic Module and Topic routes, and Search load all 24 Modules.

### Module object schema

Each module object contains:

- `id`: stable unique module ID, e.g. `module-01-introduction-to-ai`.
- `number`: two-digit display number.
- `title`, `subtitle`, and `description`.
- `difficulty` and `estimatedTime`.
- `prerequisites`: array of prerequisite descriptions.
- `relatedModules`: array of existing module IDs.
- `objectives`: array of learning outcomes.
- `partId`: parent Part ID (`part-01` through `part-04`).
- `topics`: ordered array of Topic objects.

### Topic object schema

Every Topic is nested inside its parent module and includes:

- `id`: stable unique topic ID.
- `title`, `subtitle`, `category`, and `difficulty`.
- `definition`: concise Knowledge Card definition.
- `position`: position and context in the knowledge structure.
- `prerequisites`: array of prerequisite descriptions.
- `relatedConcepts`: array of related concept names.
- `objectives`: array of measurable learning objectives.
- `keywords`: array of search terms.
- `prompt`: complete self-contained AI Learning Prompt written in English.

The containing module provides the Topic's parent Module and Part relationship; this is the established schema. Do not add redundant parent IDs to older Topic records unless the application schema is intentionally migrated everywhere.

### Add a Module

1. Create `assets/js/data/modules/module-NN.js` using the next available two-digit number.
2. Follow the existing module object schema and register it with `window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || []; window.AI_COURSE_MODULES.push({...});`.
3. Add its stable ID, `partId`, prerequisites, related module IDs, objectives, and complete ordered Topic list.
4. Add the module to the correct Part's `moduleIds` in `course-index.js` and to `moduleCatalog`, including the exact `topicCount`.
5. Add its script tag to every page that must load it. Keep `course-index.js` first, all data scripts next, and `core.js` after the data scripts. Keep the generic Module / Topic routes and Search supplied with all module data.
6. Update the curriculum counts in this README and run the data, path, syntax, and browser checks.

### Add a Topic

1. Add the Topic object to the correct module's `topics` array in the intended learning sequence.
2. Give it a globally unique, stable `id`; do not reuse an ID from another module.
3. Fill every schema field. Keep the definition concise; make prerequisites and related concepts meaningful; write specific, assessable objectives and useful search keywords.
4. Write an individual prompt for the exact topic. Do not copy a generic prompt unchanged.
5. Update that module's `topicCount` in `course-index.js` and verify that the Module page, Topic page, search, breadcrumbs, previous / next navigation, and progress tracking resolve it.

### Create customized AI Learning Prompts

Each prompt should be self-contained because the learner may paste it into a new AI conversation. Write the instructions in English and explicitly require the lesson to be taught in natural Egyptian colloquial Arabic while retaining technical terms, product names, protocols, standards, commands, code, and identifiers in English. Define the topic and learner context, introduce supporting terminology, set progressive depth, request topic-specific mechanisms and examples, and include practical work only where useful. For security topics, restrict exercises to owned systems, controlled labs, or explicitly authorized assessments. Require validation, limitations, defensive measures, exercises, review questions, and knowledge assessment where appropriate. Ask for current official documentation or primary research when claims are version-sensitive; do not fabricate references.

## Main features

- Four connected Parts and 24 populated Modules.
- 366 Knowledge Cards and 366 individually customized AI Learning Prompts.
- Local search across Parts, Modules, Topic definitions, keywords, and related concepts.
- Breadcrumbs, curriculum sidebar, Module / Topic navigation, and previous / next Topic links.
- Prompt preview, full prompt expansion, and copy with fallback behavior.
- Dark and light themes with local persistence.
- Topic completion and per-Module progress stored locally in the current browser.
- Responsive navigation and layouts.
- Static hosting and relative paths for GitHub Pages.

## Troubleshooting

- **A module appears unavailable:** confirm its module file is included, its script tag is present on the route, its registration ID matches `moduleCatalog`, and the data scripts load before `core.js`.
- **A Topic link shows “not found”:** check the Topic ID for exact spelling and uniqueness, and confirm the Topic is nested in a registered module loaded by that page.
- **Search does not find a Topic:** ensure the page loads that module's data file and the Topic has relevant `keywords`.
- **Prompt copy is blocked:** use a browser context that permits clipboard access, or expand the prompt and copy it manually. Browser clipboard policies vary, especially for local files.
- **Theme or progress does not persist:** check browser storage settings. The page still works if `localStorage` is blocked, but preferences and progress may not persist.
- **GitHub Pages returns 404:** confirm that repository files are at the repository root, Pages uses **GitHub Actions**, the workflow completed, and the branch filter matches your branch.
- **Assets are missing after deployment:** preserve the relative `assets/` directory and do not move HTML pages into a nested folder unless you update all relative paths.

## Responsible use

Cybersecurity exercises are for systems owned by the learner, isolated controlled labs, or assessments with explicit authorization. Respect scope, privacy, data minimization, and responsible disclosure. Treat model outputs as hypotheses until independently verified.
