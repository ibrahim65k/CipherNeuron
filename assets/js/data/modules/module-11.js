/* CipherNeuron curriculum data — Module 11. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-11-running-managing-models",
  "number": "11",
  "partId": "part-02",
  "title": "Downloading, Running & Managing AI Models",
  "subtitle": "Move from model discovery to a reproducible and resource-aware inference workflow.",
  "description": "Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.",
  "objectives": [
    "Evaluate pretrained model repositories, model cards, licenses, configurations, tokenizers, weights, and checkpoints.",
    "Choose appropriate model formats and quantization options for a target hardware environment.",
    "Download, load, run, and integrate models using local runners and Python tooling.",
    "Configure inference settings and manage model storage, context length, and CPU/GPU resource constraints."
  ],
  "difficulty": "Intermediate",
  "estimatedTime": "7–9 hours",
  "prerequisites": [
    "Modules 09–10 — Python environment and AI ecosystem",
    "Part 01 — LLM, tokenization, and inference fundamentals"
  ],
  "relatedModules": [
    "module-10-ai-ecosystem-platforms",
    "module-12-building-training-models",
    "module-13-llm-finetuning-app-development"
  ],
  "topics": [
    {
      "id": "topic-pretrained-models-and-model-repositories",
      "title": "Pretrained Models and Model Repositories",
      "subtitle": "A pretrained model has learned parameters from an earlier training process and is distributed through a repository or artifact store with associated configuration and metadata.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "A pretrained model has learned parameters from an earlier training process and is distributed through a repository or artifact store with associated configuration and metadata.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain pretraining and reuse.",
        "Identify repository files and revisions.",
        "Distinguish model artifacts from a runnable application."
      ],
      "keywords": [
        "pretrained models and model repositories",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain pretraining and reuse.",
        "identify repository files and revisions.",
        "distinguish model artifacts from a runnable application."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Pretrained Models and Model Repositories\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nA pretrained model has learned parameters from an earlier training process and is distributed through a repository or artifact store with associated configuration and metadata.\n\nLEARNING OUTCOMES\n1. Explain pretraining and reuse.\n2. Identify repository files and revisions.\n3. Distinguish model artifacts from a runnable application.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain pretraining and reuse.\n2. Identify repository files and revisions.\n3. Distinguish model artifacts from a runnable application.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Inspect a repository containing weights, config, tokenizer, and documentation.\n- Create a model acquisition record with exact repository and revision identifiers.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A pretrained model is not necessarily instruction-tuned.\n- Repository names alone may not uniquely identify an immutable artifact.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Pretrained Models and Model Repositories\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-open-weight-vs-open-source-models",
      "title": "Open-Weight vs Open-Source Models",
      "subtitle": "Open-weight models make trained parameters available under stated conditions, while open-source software and open-source AI involve broader criteria about code, data, rights, and reproducibility.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Open-weight models make trained parameters available under stated conditions, while open-source software and open-source AI involve broader criteria about code, data, rights, and reproducibility.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Define open weights and open source carefully.",
        "Inspect license restrictions and usage terms.",
        "Evaluate practical reproducibility."
      ],
      "keywords": [
        "open-weight vs open-source models",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "define open weights and open source carefully.",
        "inspect license restrictions and usage terms.",
        "evaluate practical reproducibility."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Open-Weight vs Open-Source Models\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nOpen-weight models make trained parameters available under stated conditions, while open-source software and open-source AI involve broader criteria about code, data, rights, and reproducibility.\n\nLEARNING OUTCOMES\n1. Define open weights and open source carefully.\n2. Inspect license restrictions and usage terms.\n3. Evaluate practical reproducibility.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Define open weights and open source carefully.\n2. Inspect license restrictions and usage terms.\n3. Evaluate practical reproducibility.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Compare a permissive software license with a restricted model-use license.\n- Prepare a decision table for personal learning versus commercial deployment.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Downloadable weights do not guarantee access to training data or code.\n- The label “open source” is not sufficient evidence of legal permissions.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Open-Weight vs Open-Source Models\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-model-selection-and-model-cards",
      "title": "Model Selection and Model Cards",
      "subtitle": "Model selection matches a model’s task, quality, resource needs, license, language coverage, and deployment constraints to a defined use case; a Model Card communicates relevant context and limitations.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Model selection matches a model’s task, quality, resource needs, license, language coverage, and deployment constraints to a defined use case; a Model Card communicates relevant context and limitations.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Translate requirements into selection criteria.",
        "Read benchmark and limitation sections critically.",
        "Check task, context length, language, and license."
      ],
      "keywords": [
        "model selection and model cards",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "translate requirements into selection criteria.",
        "read benchmark and limitation sections critically.",
        "check task, context length, language, and license."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Model Selection and Model Cards\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nModel selection matches a model’s task, quality, resource needs, license, language coverage, and deployment constraints to a defined use case; a Model Card communicates relevant context and limitations.\n\nLEARNING OUTCOMES\n1. Translate requirements into selection criteria.\n2. Read benchmark and limitation sections critically.\n3. Check task, context length, language, and license.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Translate requirements into selection criteria.\n2. Read benchmark and limitation sections critically.\n3. Check task, context length, language, and license.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Select a small local model for an offline summarization task.\n- Build a comparison matrix and justify a model choice with documented evidence.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Leaderboard rank does not predict every real-world task.\n- A model card may be incomplete, outdated, or author-reported.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Model Selection and Model Cards\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-model-weights-checkpoints-and-configurations",
      "title": "Model Weights, Checkpoints and Configurations",
      "subtitle": "Model weights are learned parameter values; checkpoints save model state during or after training, while configuration files describe architecture and runtime settings needed to interpret the weights.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Model weights are learned parameter values; checkpoints save model state during or after training, while configuration files describe architecture and runtime settings needed to interpret the weights.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Distinguish weights from configuration.",
        "Explain checkpoint purpose.",
        "Identify tokenizer and architecture dependencies."
      ],
      "keywords": [
        "model weights, checkpoints and configurations",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "distinguish weights from configuration.",
        "explain checkpoint purpose.",
        "identify tokenizer and architecture dependencies."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Model Weights, Checkpoints and Configurations\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nModel weights are learned parameter values; checkpoints save model state during or after training, while configuration files describe architecture and runtime settings needed to interpret the weights.\n\nLEARNING OUTCOMES\n1. Distinguish weights from configuration.\n2. Explain checkpoint purpose.\n3. Identify tokenizer and architecture dependencies.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Distinguish weights from configuration.\n2. Explain checkpoint purpose.\n3. Identify tokenizer and architecture dependencies.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Map a model directory to its config, tokenizer, and weight shards.\n- Inspect a model folder and explain which files are essential for loading.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Weights without compatible architecture metadata may not load correctly.\n- A training checkpoint may contain optimizer state beyond inference weights.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Model Weights, Checkpoints and Configurations\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-tokenizer-files-and-model-compatibility",
      "title": "Tokenizer Files and Model Compatibility",
      "subtitle": "Tokenizer assets define how text is normalized and mapped to token IDs; a model generally expects inputs produced by its compatible tokenizer and special-token conventions.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Tokenizer assets define how text is normalized and mapped to token IDs; a model generally expects inputs produced by its compatible tokenizer and special-token conventions.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Identify tokenizer configuration and vocabulary assets.",
        "Explain special tokens and chat templates.",
        "Diagnose tokenizer/model mismatch."
      ],
      "keywords": [
        "tokenizer files and model compatibility",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "identify tokenizer configuration and vocabulary assets.",
        "explain special tokens and chat templates.",
        "diagnose tokenizer/model mismatch."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Tokenizer Files and Model Compatibility\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nTokenizer assets define how text is normalized and mapped to token IDs; a model generally expects inputs produced by its compatible tokenizer and special-token conventions.\n\nLEARNING OUTCOMES\n1. Identify tokenizer configuration and vocabulary assets.\n2. Explain special tokens and chat templates.\n3. Diagnose tokenizer/model mismatch.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Identify tokenizer configuration and vocabulary assets.\n2. Explain special tokens and chat templates.\n3. Diagnose tokenizer/model mismatch.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Load a tokenizer and model from the same repository revision and inspect token IDs.\n- Demonstrate how changing tokenization changes the input sequence.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A tokenizer from a related model is not automatically interchangeable.\n- Chat templates affect serialization but do not change model weights.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Tokenizer Files and Model Compatibility\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-model-formats-gguf-safetensors-and-onnx",
      "title": "Model Formats: GGUF, Safetensors and ONNX",
      "subtitle": "GGUF packages model data for compatible inference runtimes, Safetensors stores tensors in a format designed to avoid pickle-based code execution, and ONNX represents models in a portable computation graph format.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "GGUF packages model data for compatible inference runtimes, Safetensors stores tensors in a format designed to avoid pickle-based code execution, and ONNX represents models in a portable computation graph format.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Compare intended use cases and runtime compatibility.",
        "Identify security and portability properties.",
        "Choose a format based on the target toolchain."
      ],
      "keywords": [
        "model formats: gguf, safetensors and onnx",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "compare intended use cases and runtime compatibility.",
        "identify security and portability properties.",
        "choose a format based on the target toolchain."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Model Formats: GGUF, Safetensors and ONNX\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nGGUF packages model data for compatible inference runtimes, Safetensors stores tensors in a format designed to avoid pickle-based code execution, and ONNX represents models in a portable computation graph format.\n\nLEARNING OUTCOMES\n1. Compare intended use cases and runtime compatibility.\n2. Identify security and portability properties.\n3. Choose a format based on the target toolchain.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Compare intended use cases and runtime compatibility.\n2. Identify security and portability properties.\n3. Choose a format based on the target toolchain.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Map a Hugging Face checkpoint to a compatible serving format.\n- Create a format decision table for local CPU inference, Transformers, and an ONNX runtime.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- File extension alone does not guarantee valid or trusted contents.\n- Conversion may change supported operations or require architecture-specific tooling.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Model Formats: GGUF, Safetensors and ONNX\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-quantization-reducing-model-memory-and-compute",
      "title": "Quantization: Reducing Model Memory and Compute",
      "subtitle": "Quantization represents model values with lower-precision numeric formats to reduce memory use and sometimes improve inference efficiency, with possible quality and compatibility trade-offs.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Quantization represents model values with lower-precision numeric formats to reduce memory use and sometimes improve inference efficiency, with possible quality and compatibility trade-offs.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain precision and quantization levels.",
        "Estimate weight memory at a high level.",
        "Evaluate quality, speed, and hardware trade-offs."
      ],
      "keywords": [
        "quantization: reducing model memory and compute",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain precision and quantization levels.",
        "estimate weight memory at a high level.",
        "evaluate quality, speed, and hardware trade-offs."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Quantization: Reducing Model Memory and Compute\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nQuantization represents model values with lower-precision numeric formats to reduce memory use and sometimes improve inference efficiency, with possible quality and compatibility trade-offs.\n\nLEARNING OUTCOMES\n1. Explain precision and quantization levels.\n2. Estimate weight memory at a high level.\n3. Evaluate quality, speed, and hardware trade-offs.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain precision and quantization levels.\n2. Estimate weight memory at a high level.\n3. Evaluate quality, speed, and hardware trade-offs.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Compare an unquantized model with two quantized variants conceptually.\n- Choose a quantization level for a memory-constrained local machine and define a quality check.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Lower bit width does not guarantee proportional speedup.\n- Quantization can affect quality differently across tasks and architectures.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Quantization: Reducing Model Memory and Compute\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-downloading-models-from-hugging-face",
      "title": "Downloading Models from Hugging Face",
      "subtitle": "Hugging Face model downloads retrieve repository files or selected artifacts, often with caching, revision pinning, and authentication for gated or private repositories.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Hugging Face model downloads retrieve repository files or selected artifacts, often with caching, revision pinning, and authentication for gated or private repositories.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Download a model snapshot or selected files.",
        "Pin a revision and manage cache location.",
        "Handle gated access and storage constraints."
      ],
      "keywords": [
        "downloading models from hugging face",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "download a model snapshot or selected files.",
        "pin a revision and manage cache location.",
        "handle gated access and storage constraints."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Downloading Models from Hugging Face\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nHugging Face model downloads retrieve repository files or selected artifacts, often with caching, revision pinning, and authentication for gated or private repositories.\n\nLEARNING OUTCOMES\n1. Download a model snapshot or selected files.\n2. Pin a revision and manage cache location.\n3. Handle gated access and storage constraints.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Download a model snapshot or selected files.\n2. Pin a revision and manage cache location.\n3. Handle gated access and storage constraints.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Download a small public model snapshot using the Hub tooling.\n- Write a reproducible download script that records the exact repository revision.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A moving branch such as main can change over time.\n- Never put access tokens directly in source code or public notebooks.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Downloading Models from Hugging Face\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-loading-models-with-transformers",
      "title": "Loading Models with Transformers",
      "subtitle": "Transformers loads compatible model configurations, tokenizers, and pretrained weights into Python objects that can perform task-specific inference.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Transformers loads compatible model configurations, tokenizers, and pretrained weights into Python objects that can perform task-specific inference.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Use AutoTokenizer and suitable AutoModel classes.",
        "Set evaluation mode and device placement.",
        "Handle generation or classification outputs."
      ],
      "keywords": [
        "loading models with transformers",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "use autotokenizer and suitable automodel classes.",
        "set evaluation mode and device placement.",
        "handle generation or classification outputs."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Loading Models with Transformers\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nTransformers loads compatible model configurations, tokenizers, and pretrained weights into Python objects that can perform task-specific inference.\n\nLEARNING OUTCOMES\n1. Use AutoTokenizer and suitable AutoModel classes.\n2. Set evaluation mode and device placement.\n3. Handle generation or classification outputs.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Use AutoTokenizer and suitable AutoModel classes.\n2. Set evaluation mode and device placement.\n3. Handle generation or classification outputs.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Load a small text-generation model and generate a short completion.\n- Build a reusable loader with clear device and error handling.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Model class must match the task and architecture.\n- Loading a model in training mode can affect dropout and other behavior.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Loading Models with Transformers\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-running-models-locally-with-lm-studio-and-ollama",
      "title": "Running Models Locally with LM Studio and Ollama",
      "subtitle": "Local model runners manage model artifacts and expose user interfaces or local APIs so applications can perform inference on the learner’s own hardware.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Local model runners manage model artifacts and expose user interfaces or local APIs so applications can perform inference on the learner’s own hardware.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Compare GUI and CLI workflows.",
        "Inspect model configuration and runtime logs.",
        "Call a local endpoint from a separate client."
      ],
      "keywords": [
        "running models locally with lm studio and ollama",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "compare gui and cli workflows.",
        "inspect model configuration and runtime logs.",
        "call a local endpoint from a separate client."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Running Models Locally with LM Studio and Ollama\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nLocal model runners manage model artifacts and expose user interfaces or local APIs so applications can perform inference on the learner’s own hardware.\n\nLEARNING OUTCOMES\n1. Compare GUI and CLI workflows.\n2. Inspect model configuration and runtime logs.\n3. Call a local endpoint from a separate client.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Compare GUI and CLI workflows.\n2. Inspect model configuration and runtime logs.\n3. Call a local endpoint from a separate client.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Run one model with a desktop runner and another with a CLI runtime.\n- Record model identifier, runtime version, hardware, and generation settings for repeatability.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Local does not automatically mean isolated or secure.\n- Two runtimes may apply different defaults and templates to the same model.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Running Models Locally with LM Studio and Ollama\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-cpu-and-gpu-inference",
      "title": "CPU and GPU Inference",
      "subtitle": "Inference executes a trained model to produce outputs; CPU and GPU execution differ in parallelism, memory capacity, supported kernels, and transfer overhead.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Inference executes a trained model to produce outputs; CPU and GPU execution differ in parallelism, memory capacity, supported kernels, and transfer overhead.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain device placement.",
        "Recognize CPU/GPU bottlenecks.",
        "Measure latency without confusing one run with a benchmark."
      ],
      "keywords": [
        "cpu and gpu inference",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain device placement.",
        "recognize cpu/gpu bottlenecks.",
        "measure latency without confusing one run with a benchmark."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"CPU and GPU Inference\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nInference executes a trained model to produce outputs; CPU and GPU execution differ in parallelism, memory capacity, supported kernels, and transfer overhead.\n\nLEARNING OUTCOMES\n1. Explain device placement.\n2. Recognize CPU/GPU bottlenecks.\n3. Measure latency without confusing one run with a benchmark.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain device placement.\n2. Recognize CPU/GPU bottlenecks.\n3. Measure latency without confusing one run with a benchmark.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Run the same small inference workload on CPU and an available supported GPU.\n- Create a simple timing experiment that controls warm-up and records environment details.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A GPU can be slower for tiny workloads or when data transfer dominates.\n- Performance measurements need repeated runs and consistent conditions.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"CPU and GPU Inference\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-hardware-requirements-and-memory-planning",
      "title": "Hardware Requirements and Memory Planning",
      "subtitle": "Hardware requirements depend on model parameter count, weight precision, context length, batch size, runtime overhead, and intermediate activations; RAM and VRAM constraints shape feasible deployments.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Hardware requirements depend on model parameter count, weight precision, context length, batch size, runtime overhead, and intermediate activations; RAM and VRAM constraints shape feasible deployments.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Estimate weight storage approximately.",
        "Explain KV cache and activation memory at a high level.",
        "Plan for runtime overhead and context size."
      ],
      "keywords": [
        "hardware requirements and memory planning",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "estimate weight storage approximately.",
        "explain kv cache and activation memory at a high level.",
        "plan for runtime overhead and context size."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Hardware Requirements and Memory Planning\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nHardware requirements depend on model parameter count, weight precision, context length, batch size, runtime overhead, and intermediate activations; RAM and VRAM constraints shape feasible deployments.\n\nLEARNING OUTCOMES\n1. Estimate weight storage approximately.\n2. Explain KV cache and activation memory at a high level.\n3. Plan for runtime overhead and context size.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Estimate weight storage approximately.\n2. Explain KV cache and activation memory at a high level.\n3. Plan for runtime overhead and context size.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Estimate whether a quantized model can fit within a stated memory budget.\n- Build a hardware planning sheet for a chosen model and workload.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Weight size alone underestimates total runtime memory.\n- Available memory is lower than installed capacity after the operating system and other processes.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Hardware Requirements and Memory Planning\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-context-length-and-generation-settings",
      "title": "Context Length and Generation Settings",
      "subtitle": "Context length limits the token sequence a model can process at once; generation settings such as temperature, top-p, max tokens, and stop sequences influence decoding behavior.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Context length limits the token sequence a model can process at once; generation settings such as temperature, top-p, max tokens, and stop sequences influence decoding behavior.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain prompt plus output context accounting.",
        "Describe common generation parameters.",
        "Choose settings for deterministic and creative tasks."
      ],
      "keywords": [
        "context length and generation settings",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain prompt plus output context accounting.",
        "describe common generation parameters.",
        "choose settings for deterministic and creative tasks."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Context Length and Generation Settings\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nContext length limits the token sequence a model can process at once; generation settings such as temperature, top-p, max tokens, and stop sequences influence decoding behavior.\n\nLEARNING OUTCOMES\n1. Explain prompt plus output context accounting.\n2. Describe common generation parameters.\n3. Choose settings for deterministic and creative tasks.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain prompt plus output context accounting.\n2. Describe common generation parameters.\n3. Choose settings for deterministic and creative tasks.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Compare generations with different temperature and max-new-token settings.\n- Create a repeatable inference configuration and document its expected trade-offs.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A larger context window does not guarantee better retrieval or reasoning.\n- Temperature does not provide factual verification.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Context Length and Generation Settings\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-local-model-apis-and-python-integration",
      "title": "Local Model APIs and Python Integration",
      "subtitle": "A local inference API exposes a model runtime over an HTTP interface, allowing Python applications to send structured requests and consume generated responses.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "A local inference API exposes a model runtime over an HTTP interface, allowing Python applications to send structured requests and consume generated responses.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Understand endpoint, payload, response, and error handling.",
        "Use requests or a compatible client.",
        "Configure timeout and local host safely."
      ],
      "keywords": [
        "local model apis and python integration",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "understand endpoint, payload, response, and error handling.",
        "use requests or a compatible client.",
        "configure timeout and local host safely."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Local Model APIs and Python Integration\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nA local inference API exposes a model runtime over an HTTP interface, allowing Python applications to send structured requests and consume generated responses.\n\nLEARNING OUTCOMES\n1. Understand endpoint, payload, response, and error handling.\n2. Use requests or a compatible client.\n3. Configure timeout and local host safely.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Understand endpoint, payload, response, and error handling.\n2. Use requests or a compatible client.\n3. Configure timeout and local host safely.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Call a local model endpoint from a Python script and print its response.\n- Build a small command-line assistant that calls the local model and handles service-unavailable errors.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- An unauthenticated local endpoint may be reachable by other machines if bound broadly.\n- Never trust generated output as executable code or an authorized action.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Local Model APIs and Python Integration\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-model-storage-versioning-and-lifecycle-management",
      "title": "Model Storage, Versioning and Lifecycle Management",
      "subtitle": "Model management tracks artifact locations, versions, licenses, provenance, cache usage, and retirement so experiments and deployments remain reproducible and maintainable.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate",
      "definition": "Model management tracks artifact locations, versions, licenses, provenance, cache usage, and retirement so experiments and deployments remain reproducible and maintainable.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-11-running-managing-models",
      "moduleTitle": "Downloading, Running & Managing AI Models",
      "position": "Part 02 builds practical capability after Part 01. Within Module 11, this topic contributes to inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–10 — Python environment and AI ecosystem",
        "Part 01 — LLM, tokenization, and inference fundamentals"
      ],
      "relatedConcepts": [
        "Downloading, Running & Managing AI Models",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Organize model directories and caches.",
        "Record immutable revisions and checksums.",
        "Plan cleanup, backup, and update procedures."
      ],
      "keywords": [
        "model storage, versioning and lifecycle management",
        "downloading, running & managing ai models",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "organize model directories and caches.",
        "record immutable revisions and checksums.",
        "plan cleanup, backup, and update procedures."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Model Storage, Versioning and Lifecycle Management\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 11 — Downloading, Running & Managing AI Models. Inspect model repositories and artifacts, choose formats and quantization levels, download and load models, run local inference, and manage model resources.\nAssume the learner has: Modules 09–10 — Python environment and AI ecosystem, Part 01 — LLM, tokenization, and inference fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: Downloading, Running & Managing AI Models, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nModel management tracks artifact locations, versions, licenses, provenance, cache usage, and retirement so experiments and deployments remain reproducible and maintainable.\n\nLEARNING OUTCOMES\n1. Organize model directories and caches.\n2. Record immutable revisions and checksums.\n3. Plan cleanup, backup, and update procedures.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Organize model directories and caches.\n2. Record immutable revisions and checksums.\n3. Plan cleanup, backup, and update procedures.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Compare two model revisions and identify what changed.\n- Create a local model inventory with source, license, revision, format, size, and purpose.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Deleting a cache can break workflows that rely on its files.\n- Updating a model without regression testing can change application behavior.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Model Storage, Versioning and Lifecycle Management\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    }
  ]
} );
