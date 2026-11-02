/* CipherNeuron curriculum data — Module 13. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-13-llm-finetuning-app-development",
  "number": "13",
  "partId": "part-02",
  "title": "LLM Fine-Tuning & AI Application Development",
  "subtitle": "Adapt pretrained language models and turn them into useful, integrated applications.",
  "description": "Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.",
  "objectives": [
    "Prepare datasets and tokenization or chat-template inputs for adapting pretrained language models.",
    "Explain and apply SFT, LoRA, QLoRA, PEFT, and the high-level purposes of RLHF and DPO.",
    "Evaluate fine-tuned models and compare adaptation, quantization, and deployment trade-offs.",
    "Build Python LLM applications that integrate APIs or local models with RAG, vector stores, agents, and tool calling."
  ],
  "difficulty": "Intermediate to Advanced",
  "estimatedTime": "10–14 hours",
  "prerequisites": [
    "Modules 09–11 — Python, model platforms, and local inference",
    "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
  ],
  "relatedModules": [
    "module-10-ai-ecosystem-platforms",
    "module-11-running-managing-models",
    "module-12-building-training-models"
  ],
  "topics": [
    {
      "id": "topic-pretrained-llms-and-adaptation-strategies",
      "title": "Pretrained LLMs and Adaptation Strategies",
      "subtitle": "A pretrained Large Language Model (LLM) can be used directly, prompted, augmented with retrieval, or adapted through additional training depending on task requirements and available data.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "A pretrained Large Language Model (LLM) can be used directly, prompted, augmented with retrieval, or adapted through additional training depending on task requirements and available data.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Compare prompting, RAG, and fine-tuning.",
        "Identify when adaptation is justified.",
        "Define a task-specific evaluation target."
      ],
      "keywords": [
        "pretrained llms and adaptation strategies",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "compare prompting, rag, and fine-tuning.",
        "identify when adaptation is justified.",
        "define a task-specific evaluation target."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Pretrained LLMs and Adaptation Strategies\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nA pretrained Large Language Model (LLM) can be used directly, prompted, augmented with retrieval, or adapted through additional training depending on task requirements and available data.\n\nLEARNING OUTCOMES\n1. Compare prompting, RAG, and fine-tuning.\n2. Identify when adaptation is justified.\n3. Define a task-specific evaluation target.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Compare prompting, RAG, and fine-tuning.\n2. Identify when adaptation is justified.\n3. Define a task-specific evaluation target.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Choose an approach for a model that must answer from changing internal documentation.\n- Create a decision tree for prompt-only, RAG, fine-tuning, or combined designs.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Fine-tuning is not a reliable way to inject frequently changing facts.\n- A larger model is not automatically the best fit for a constrained task.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Pretrained LLMs and Adaptation Strategies\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-transformers-inference-configuration",
      "title": "Transformers Inference Configuration",
      "subtitle": "Inference configuration controls how a pretrained LLM is loaded and generates output, including device, precision, token limits, decoding parameters, and stopping behavior.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Inference configuration controls how a pretrained LLM is loaded and generates output, including device, precision, token limits, decoding parameters, and stopping behavior.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Load a causal language model for inference.",
        "Configure generation parameters.",
        "Inspect memory and output behavior."
      ],
      "keywords": [
        "transformers inference configuration",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "load a causal language model for inference.",
        "configure generation parameters.",
        "inspect memory and output behavior."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Transformers Inference Configuration\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nInference configuration controls how a pretrained LLM is loaded and generates output, including device, precision, token limits, decoding parameters, and stopping behavior.\n\nLEARNING OUTCOMES\n1. Load a causal language model for inference.\n2. Configure generation parameters.\n3. Inspect memory and output behavior.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Load a causal language model for inference.\n2. Configure generation parameters.\n3. Inspect memory and output behavior.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Generate responses with controlled max_new_tokens and sampling settings.\n- Build a reusable inference function with explicit configuration and input validation.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Generation defaults differ across models and libraries.\n- Setting a seed does not guarantee identical output across every backend.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Transformers Inference Configuration\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-tokenizers-special-tokens-and-chat-templates",
      "title": "Tokenizers, Special Tokens and Chat Templates",
      "subtitle": "Tokenizers convert text into model inputs; special tokens and chat templates serialize conversational roles and boundaries into the exact sequence format expected by an instruction-tuned model.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Tokenizers convert text into model inputs; special tokens and chat templates serialize conversational roles and boundaries into the exact sequence format expected by an instruction-tuned model.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Inspect token IDs and special tokens.",
        "Apply a model-specific chat template.",
        "Understand padding, truncation, and attention masks."
      ],
      "keywords": [
        "tokenizers, special tokens and chat templates",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "inspect token ids and special tokens.",
        "apply a model-specific chat template.",
        "understand padding, truncation, and attention masks."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Tokenizers, Special Tokens and Chat Templates\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nTokenizers convert text into model inputs; special tokens and chat templates serialize conversational roles and boundaries into the exact sequence format expected by an instruction-tuned model.\n\nLEARNING OUTCOMES\n1. Inspect token IDs and special tokens.\n2. Apply a model-specific chat template.\n3. Understand padding, truncation, and attention masks.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Inspect token IDs and special tokens.\n2. Apply a model-specific chat template.\n3. Understand padding, truncation, and attention masks.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Render a multi-turn conversation and inspect its serialized token sequence.\n- Compare a raw concatenated prompt with the model’s documented chat template.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Chat templates are not universal across model families.\n- A visually plausible text prompt may serialize incorrectly for a given model.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Tokenizers, Special Tokens and Chat Templates\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-fine-tuning-dataset-preparation",
      "title": "Fine-Tuning Dataset Preparation",
      "subtitle": "Fine-tuning data pairs examples with the desired model behavior and must be curated, deduplicated, formatted, filtered, and split to support meaningful training and evaluation.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Fine-tuning data pairs examples with the desired model behavior and must be curated, deduplicated, formatted, filtered, and split to support meaningful training and evaluation.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Define task examples and target responses.",
        "Validate schema and remove duplicates.",
        "Create train and evaluation splits without leakage."
      ],
      "keywords": [
        "fine-tuning dataset preparation",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "define task examples and target responses.",
        "validate schema and remove duplicates.",
        "create train and evaluation splits without leakage."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Fine-Tuning Dataset Preparation\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nFine-tuning data pairs examples with the desired model behavior and must be curated, deduplicated, formatted, filtered, and split to support meaningful training and evaluation.\n\nLEARNING OUTCOMES\n1. Define task examples and target responses.\n2. Validate schema and remove duplicates.\n3. Create train and evaluation splits without leakage.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Define task examples and target responses.\n2. Validate schema and remove duplicates.\n3. Create train and evaluation splits without leakage.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Convert a small instruction dataset into a consistent conversational format.\n- Prepare a dataset card describing sources, permissions, transformations, and limitations.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- More examples do not automatically mean better data.\n- Sensitive or copyrighted content requires appropriate permission and handling.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Fine-Tuning Dataset Preparation\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-supervised-fine-tuning-sft",
      "title": "Supervised Fine-Tuning (SFT)",
      "subtitle": "Supervised Fine-Tuning trains a pretrained model on input-output demonstrations so its responses better match a target instruction-following or task-specific behavior.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Supervised Fine-Tuning trains a pretrained model on input-output demonstrations so its responses better match a target instruction-following or task-specific behavior.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain supervised examples and loss masking.",
        "Describe the SFT training pipeline.",
        "Identify overfitting and data-quality risks."
      ],
      "keywords": [
        "supervised fine-tuning (sft)",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain supervised examples and loss masking.",
        "describe the sft training pipeline.",
        "identify overfitting and data-quality risks."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Supervised Fine-Tuning (SFT)\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nSupervised Fine-Tuning trains a pretrained model on input-output demonstrations so its responses better match a target instruction-following or task-specific behavior.\n\nLEARNING OUTCOMES\n1. Explain supervised examples and loss masking.\n2. Describe the SFT training pipeline.\n3. Identify overfitting and data-quality risks.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain supervised examples and loss masking.\n2. Describe the SFT training pipeline.\n3. Identify overfitting and data-quality risks.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Trace a prompt-response example through tokenization and next-token loss.\n- Design a small SFT experiment plan with baseline, dataset, and evaluation set.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- SFT teaches patterns represented in the examples, not guaranteed factual correctness.\n- Training on assistant targets and user tokens requires deliberate label masking choices.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Supervised Fine-Tuning (SFT)\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-lora-low-rank-adaptation",
      "title": "LoRA: Low-Rank Adaptation",
      "subtitle": "LoRA adapts a pretrained model by training small low-rank matrices inserted into selected weight transformations while keeping most base parameters frozen.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "LoRA adapts a pretrained model by training small low-rank matrices inserted into selected weight transformations while keeping most base parameters frozen.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain low-rank update intuition.",
        "Identify target modules and adapter weights.",
        "Compare adapter training with full fine-tuning."
      ],
      "keywords": [
        "lora: low-rank adaptation",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain low-rank update intuition.",
        "identify target modules and adapter weights.",
        "compare adapter training with full fine-tuning."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"LoRA: Low-Rank Adaptation\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nLoRA adapts a pretrained model by training small low-rank matrices inserted into selected weight transformations while keeping most base parameters frozen.\n\nLEARNING OUTCOMES\n1. Explain low-rank update intuition.\n2. Identify target modules and adapter weights.\n3. Compare adapter training with full fine-tuning.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain low-rank update intuition.\n2. Identify target modules and adapter weights.\n3. Compare adapter training with full fine-tuning.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Illustrate a low-rank update to a linear layer.\n- Plan a small LoRA run and identify which artifacts must be saved.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- LoRA quality depends on target modules, rank, data, and training configuration.\n- An adapter generally depends on a compatible base model revision.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"LoRA: Low-Rank Adaptation\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-qlora-quantized-low-rank-adaptation",
      "title": "QLoRA: Quantized Low-Rank Adaptation",
      "subtitle": "QLoRA combines a quantized frozen base model with trainable LoRA adapters to reduce memory requirements for fine-tuning supported large language models.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "QLoRA combines a quantized frozen base model with trainable LoRA adapters to reduce memory requirements for fine-tuning supported large language models.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain quantized base weights and trainable adapters.",
        "Understand memory-saving components.",
        "Identify hardware and compatibility constraints."
      ],
      "keywords": [
        "qlora: quantized low-rank adaptation",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain quantized base weights and trainable adapters.",
        "understand memory-saving components.",
        "identify hardware and compatibility constraints."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"QLoRA: Quantized Low-Rank Adaptation\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nQLoRA combines a quantized frozen base model with trainable LoRA adapters to reduce memory requirements for fine-tuning supported large language models.\n\nLEARNING OUTCOMES\n1. Explain quantized base weights and trainable adapters.\n2. Understand memory-saving components.\n3. Identify hardware and compatibility constraints.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain quantized base weights and trainable adapters.\n2. Understand memory-saving components.\n3. Identify hardware and compatibility constraints.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Draw the QLoRA training path from quantized base model to adapter gradients.\n- Evaluate whether a proposed QLoRA experiment fits a stated GPU memory budget.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- QLoRA does not make every model trainable on any GPU.\n- Quantization and compute precision choices can affect stability and compatibility.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"QLoRA: Quantized Low-Rank Adaptation\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-peft-parameter-efficient-fine-tuning",
      "title": "PEFT: Parameter-Efficient Fine-Tuning",
      "subtitle": "Parameter-Efficient Fine-Tuning (PEFT) methods adapt a small subset of parameters or added components rather than updating every base-model weight.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Parameter-Efficient Fine-Tuning (PEFT) methods adapt a small subset of parameters or added components rather than updating every base-model weight.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain adapter-based and selective parameter updates.",
        "Compare LoRA with other PEFT families conceptually.",
        "Manage adapter configuration and artifacts."
      ],
      "keywords": [
        "peft: parameter-efficient fine-tuning",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain adapter-based and selective parameter updates.",
        "compare lora with other peft families conceptually.",
        "manage adapter configuration and artifacts."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"PEFT: Parameter-Efficient Fine-Tuning\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nParameter-Efficient Fine-Tuning (PEFT) methods adapt a small subset of parameters or added components rather than updating every base-model weight.\n\nLEARNING OUTCOMES\n1. Explain adapter-based and selective parameter updates.\n2. Compare LoRA with other PEFT families conceptually.\n3. Manage adapter configuration and artifacts.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain adapter-based and selective parameter updates.\n2. Compare LoRA with other PEFT families conceptually.\n3. Manage adapter configuration and artifacts.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Compare full fine-tuning and adapter-based training storage.\n- Design an adapter experiment that can be evaluated and rolled back independently.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- PEFT is a family of methods, not one algorithm.\n- Adapter compatibility depends on architecture and library support.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"PEFT: Parameter-Efficient Fine-Tuning\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-rlhf-concepts-preference-based-alignment",
      "title": "RLHF Concepts: Preference-Based Alignment",
      "subtitle": "Reinforcement Learning from Human Feedback (RLHF) uses human preference signals in a training pipeline to shape model behavior beyond next-token imitation.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Reinforcement Learning from Human Feedback (RLHF) uses human preference signals in a training pipeline to shape model behavior beyond next-token imitation.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain demonstrations, preferences, reward modeling, and policy optimization.",
        "Distinguish alignment objectives from factual evaluation.",
        "Recognize cost and subjectivity."
      ],
      "keywords": [
        "rlhf concepts: preference-based alignment",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain demonstrations, preferences, reward modeling, and policy optimization.",
        "distinguish alignment objectives from factual evaluation.",
        "recognize cost and subjectivity."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"RLHF Concepts: Preference-Based Alignment\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nReinforcement Learning from Human Feedback (RLHF) uses human preference signals in a training pipeline to shape model behavior beyond next-token imitation.\n\nLEARNING OUTCOMES\n1. Explain demonstrations, preferences, reward modeling, and policy optimization.\n2. Distinguish alignment objectives from factual evaluation.\n3. Recognize cost and subjectivity.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain demonstrations, preferences, reward modeling, and policy optimization.\n2. Distinguish alignment objectives from factual evaluation.\n3. Recognize cost and subjectivity.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Walk through a simplified pairwise preference example.\n- Design a safe preference-collection rubric for response helpfulness and correctness.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Human preferences can be inconsistent or biased.\n- RLHF does not guarantee truthfulness or eliminate harmful behavior.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"RLHF Concepts: Preference-Based Alignment\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-dpo-concepts-direct-preference-optimization",
      "title": "DPO Concepts: Direct Preference Optimization",
      "subtitle": "Direct Preference Optimization (DPO) is a preference-learning approach that optimizes a policy using preferred and dispreferred response pairs without a separately trained reward model in the classic pipeline.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Direct Preference Optimization (DPO) is a preference-learning approach that optimizes a policy using preferred and dispreferred response pairs without a separately trained reward model in the classic pipeline.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain preference pairs and reference policy conceptually.",
        "Compare DPO with a simplified RLHF workflow.",
        "Identify data and objective limitations."
      ],
      "keywords": [
        "dpo concepts: direct preference optimization",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain preference pairs and reference policy conceptually.",
        "compare dpo with a simplified rlhf workflow.",
        "identify data and objective limitations."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"DPO Concepts: Direct Preference Optimization\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nDirect Preference Optimization (DPO) is a preference-learning approach that optimizes a policy using preferred and dispreferred response pairs without a separately trained reward model in the classic pipeline.\n\nLEARNING OUTCOMES\n1. Explain preference pairs and reference policy conceptually.\n2. Compare DPO with a simplified RLHF workflow.\n3. Identify data and objective limitations.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain preference pairs and reference policy conceptually.\n2. Compare DPO with a simplified RLHF workflow.\n3. Identify data and objective limitations.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Analyze a chosen/rejected response pair and explain the optimization intent.\n- Prepare a small preference dataset schema and quality-control checklist.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- DPO still depends on meaningful preference data and implementation details.\n- Preference optimization is not equivalent to verifying factual accuracy.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"DPO Concepts: Direct Preference Optimization\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-fine-tuning-a-small-llm-end-to-end-workflow",
      "title": "Fine-Tuning a Small LLM: End-to-End Workflow",
      "subtitle": "A small-LLM fine-tuning workflow selects a compatible base model, prepares task data, configures SFT or PEFT, trains under resource limits, and evaluates against a baseline.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "A small-LLM fine-tuning workflow selects a compatible base model, prepares task data, configures SFT or PEFT, trains under resource limits, and evaluates against a baseline.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Plan an end-to-end experiment.",
        "Track base model, dataset, adapter, and configuration versions.",
        "Compare tuned and untuned outputs."
      ],
      "keywords": [
        "fine-tuning a small llm: end-to-end workflow",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "plan an end-to-end experiment.",
        "track base model, dataset, adapter, and configuration versions.",
        "compare tuned and untuned outputs."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Fine-Tuning a Small LLM: End-to-End Workflow\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nA small-LLM fine-tuning workflow selects a compatible base model, prepares task data, configures SFT or PEFT, trains under resource limits, and evaluates against a baseline.\n\nLEARNING OUTCOMES\n1. Plan an end-to-end experiment.\n2. Track base model, dataset, adapter, and configuration versions.\n3. Compare tuned and untuned outputs.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Plan an end-to-end experiment.\n2. Track base model, dataset, adapter, and configuration versions.\n3. Compare tuned and untuned outputs.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Fine-tune a small model on a narrow formatting or classification-style instruction task.\n- Produce an experiment report with baseline examples, training configuration, evaluation, and known limitations.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A demo improvement on a few examples is not robust evidence.\n- Training data contamination can make evaluation misleading.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Fine-Tuning a Small LLM: End-to-End Workflow\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-fine-tuning-evaluation-and-regression-testing",
      "title": "Fine-Tuning Evaluation and Regression Testing",
      "subtitle": "Fine-tuning evaluation tests whether adaptation improves the intended behavior without unacceptable regressions in quality, safety, robustness, or general capability.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Fine-tuning evaluation tests whether adaptation improves the intended behavior without unacceptable regressions in quality, safety, robustness, or general capability.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Build task-specific evaluation sets.",
        "Compare baseline and tuned model outputs.",
        "Test regressions and failure cases."
      ],
      "keywords": [
        "fine-tuning evaluation and regression testing",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "build task-specific evaluation sets.",
        "compare baseline and tuned model outputs.",
        "test regressions and failure cases."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Fine-Tuning Evaluation and Regression Testing\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nFine-tuning evaluation tests whether adaptation improves the intended behavior without unacceptable regressions in quality, safety, robustness, or general capability.\n\nLEARNING OUTCOMES\n1. Build task-specific evaluation sets.\n2. Compare baseline and tuned model outputs.\n3. Test regressions and failure cases.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Build task-specific evaluation sets.\n2. Compare baseline and tuned model outputs.\n3. Test regressions and failure cases.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Evaluate structured output adherence and factuality on held-out examples.\n- Create a regression suite with representative normal, edge, and adversarial inputs.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- One aggregate score can hide important failure categories.\n- Automated model judges can be biased and should be supplemented with human review.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Fine-Tuning Evaluation and Regression Testing\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-python-llm-applications-and-cloud-apis",
      "title": "Python LLM Applications and Cloud APIs",
      "subtitle": "Python LLM applications combine prompt construction, model/API clients, input validation, response parsing, retries, logging, and user-facing behavior around a local or hosted model.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Python LLM applications combine prompt construction, model/API clients, input validation, response parsing, retries, logging, and user-facing behavior around a local or hosted model.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Design a provider client abstraction.",
        "Handle authentication, timeouts, and rate limits.",
        "Validate structured outputs."
      ],
      "keywords": [
        "python llm applications and cloud apis",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "design a provider client abstraction.",
        "handle authentication, timeouts, and rate limits.",
        "validate structured outputs."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Python LLM Applications and Cloud APIs\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nPython LLM applications combine prompt construction, model/API clients, input validation, response parsing, retries, logging, and user-facing behavior around a local or hosted model.\n\nLEARNING OUTCOMES\n1. Design a provider client abstraction.\n2. Handle authentication, timeouts, and rate limits.\n3. Validate structured outputs.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Design a provider client abstraction.\n2. Handle authentication, timeouts, and rate limits.\n3. Validate structured outputs.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Build a small Python text summarizer using a hosted API or local compatible endpoint.\n- Implement an application layer that can switch between a cloud provider and a local model.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- API keys must be stored outside source code.\n- Generated structured output must be parsed and validated, not blindly trusted.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Python LLM Applications and Cloud APIs\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-chatbots-and-conversation-state",
      "title": "Chatbots and Conversation State",
      "subtitle": "A chatbot manages user messages, model responses, conversation history, and application state while controlling context size and preserving clear boundaries between turns.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "A chatbot manages user messages, model responses, conversation history, and application state while controlling context size and preserving clear boundaries between turns.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Design a basic chat loop.",
        "Manage conversation history and token budgets.",
        "Separate persistent application state from model context."
      ],
      "keywords": [
        "chatbots and conversation state",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "design a basic chat loop.",
        "manage conversation history and token budgets.",
        "separate persistent application state from model context."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Chatbots and Conversation State\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nA chatbot manages user messages, model responses, conversation history, and application state while controlling context size and preserving clear boundaries between turns.\n\nLEARNING OUTCOMES\n1. Design a basic chat loop.\n2. Manage conversation history and token budgets.\n3. Separate persistent application state from model context.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Design a basic chat loop.\n2. Manage conversation history and token budgets.\n3. Separate persistent application state from model context.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Build a simple chatbot that retains a bounded conversation history.\n- Add input validation, reset behavior, and explicit state handling to a chat prototype.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- Conversation history can contain untrusted instructions or sensitive data.\n- Model context is not the same as durable or reliable application memory.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Chatbots and Conversation State\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-rag-applications-and-vector-databases",
      "title": "RAG Applications and Vector Databases",
      "subtitle": "Retrieval-Augmented Generation (RAG) retrieves relevant external content and supplies it to an LLM at inference time; vector databases store embeddings to support similarity-based retrieval.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Retrieval-Augmented Generation (RAG) retrieves relevant external content and supplies it to an LLM at inference time; vector databases store embeddings to support similarity-based retrieval.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Map ingestion, chunking, embedding, retrieval, and generation.",
        "Explain metadata filters and citations.",
        "Evaluate retrieval separately from answer generation."
      ],
      "keywords": [
        "rag applications and vector databases",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "map ingestion, chunking, embedding, retrieval, and generation.",
        "explain metadata filters and citations.",
        "evaluate retrieval separately from answer generation."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"RAG Applications and Vector Databases\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nRetrieval-Augmented Generation (RAG) retrieves relevant external content and supplies it to an LLM at inference time; vector databases store embeddings to support similarity-based retrieval.\n\nLEARNING OUTCOMES\n1. Map ingestion, chunking, embedding, retrieval, and generation.\n2. Explain metadata filters and citations.\n3. Evaluate retrieval separately from answer generation.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Map ingestion, chunking, embedding, retrieval, and generation.\n2. Explain metadata filters and citations.\n3. Evaluate retrieval separately from answer generation.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Build a small document Q&A prototype with chunking and vector similarity search.\n- Create a RAG evaluation set that checks retrieval relevance and grounded answers.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- RAG does not guarantee that retrieved content is correct or authorized.\n- Embedding similarity alone may miss exact identifiers or access-control constraints.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"RAG Applications and Vector Databases\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-ai-agents-tool-calling-and-function-calling",
      "title": "AI Agents, Tool Calling and Function Calling",
      "subtitle": "An AI agent combines a model with state and a control loop that can select tools; function calling represents structured tool requests that application code must validate and execute.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "An AI agent combines a model with state and a control loop that can select tools; function calling represents structured tool requests that application code must validate and execute.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain agent loop and tool schemas.",
        "Distinguish model-proposed calls from executed actions.",
        "Add allowlists, validation, and human approval."
      ],
      "keywords": [
        "ai agents, tool calling and function calling",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain agent loop and tool schemas.",
        "distinguish model-proposed calls from executed actions.",
        "add allowlists, validation, and human approval."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"AI Agents, Tool Calling and Function Calling\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nAn AI agent combines a model with state and a control loop that can select tools; function calling represents structured tool requests that application code must validate and execute.\n\nLEARNING OUTCOMES\n1. Explain agent loop and tool schemas.\n2. Distinguish model-proposed calls from executed actions.\n3. Add allowlists, validation, and human approval.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain agent loop and tool schemas.\n2. Distinguish model-proposed calls from executed actions.\n3. Add allowlists, validation, and human approval.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Create a read-only agent tool that searches a local sample knowledge base.\n- Build a minimal tool-calling prototype with strict argument validation and an execution log.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A model-generated tool call is not proof of user authorization.\n- Unbounded loops and unrestricted tools create safety and cost risks.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"AI Agents, Tool Calling and Function Calling\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-model-context-protocol-mcp-integration",
      "title": "Model Context Protocol (MCP) Integration",
      "subtitle": "Model Context Protocol (MCP) is a protocol for connecting AI applications to external tools and context providers through defined client-server interactions and capability interfaces.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Model Context Protocol (MCP) is a protocol for connecting AI applications to external tools and context providers through defined client-server interactions and capability interfaces.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Explain MCP hosts, clients, servers, and tools/resources/prompts at a high level.",
        "Trace a tool discovery and invocation flow.",
        "Assess permissions and trust boundaries."
      ],
      "keywords": [
        "model context protocol (mcp) integration",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "explain mcp hosts, clients, servers, and tools/resources/prompts at a high level.",
        "trace a tool discovery and invocation flow.",
        "assess permissions and trust boundaries."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Model Context Protocol (MCP) Integration\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nModel Context Protocol (MCP) is a protocol for connecting AI applications to external tools and context providers through defined client-server interactions and capability interfaces.\n\nLEARNING OUTCOMES\n1. Explain MCP hosts, clients, servers, and tools/resources/prompts at a high level.\n2. Trace a tool discovery and invocation flow.\n3. Assess permissions and trust boundaries.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Explain MCP hosts, clients, servers, and tools/resources/prompts at a high level.\n2. Trace a tool discovery and invocation flow.\n3. Assess permissions and trust boundaries.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Map an AI client to a local MCP server that exposes a harmless read-only tool.\n- Design an MCP integration checklist covering tool scope, authentication, validation, and logging.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- MCP connectivity does not make a server trustworthy.\n- Exposed tools should follow least privilege and explicit authorization.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Model Context Protocol (MCP) Integration\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    },
    {
      "id": "topic-local-ai-applications-model-serving-and-deployment",
      "title": "Local AI Applications, Model Serving and Deployment",
      "subtitle": "Local AI applications package a model runtime behind an application interface or API; deployment adds configuration, resource management, monitoring, access control, and lifecycle operations.",
      "category": "Practical AI Development",
      "difficulty": "Intermediate to Advanced",
      "definition": "Local AI applications package a model runtime behind an application interface or API; deployment adds configuration, resource management, monitoring, access control, and lifecycle operations.",
      "partId": "part-02",
      "partTitle": "AI Development, Models & Practical Tools",
      "moduleId": "module-13-llm-finetuning-app-development",
      "moduleTitle": "LLM Fine-Tuning & AI Application Development",
      "position": "Part 02 builds practical capability after Part 01. Within Module 13, this topic contributes to learn practical llm adaptation and application patterns, from tokenization and supervised fine-tuning to lora, rag, agents, tool calling, and deployment. It prepares the learner for the next topics and for later AI-assisted security and AI security work.",
      "prerequisites": [
        "Modules 09–11 — Python, model platforms, and local inference",
        "Part 01 — LLM, tokenization, RAG, and agent fundamentals"
      ],
      "relatedConcepts": [
        "LLM Fine-Tuning & AI Application Development",
        "Python",
        "Machine Learning",
        "Large Language Models",
        "AI Application Architecture"
      ],
      "objectives": [
        "Compare embedded local inference with a separate serving process.",
        "Expose a controlled API endpoint.",
        "Plan health checks, logging, and updates."
      ],
      "keywords": [
        "local ai applications, model serving and deployment",
        "llm fine-tuning & ai application development",
        "python",
        "machine learning",
        "large language models",
        "ai application architecture",
        "compare embedded local inference with a separate serving process.",
        "expose a controlled api endpoint.",
        "plan health checks, logging, and updates."
      ],
      "prompt": "Act as an experienced AI engineer and educator. Create a complete, self-contained technical lesson on \"Local AI Applications, Model Serving and Deployment\". The learner will paste this prompt into a new AI conversation, so do not rely on this website or any previous conversation.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural, clear fluent Egyptian colloquial Arabic (Masri).\n- Keep technical terms, library names, APIs, commands, code identifiers, formulas, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, while keeping the English term visible.\n- Do not switch the teaching language to Modern Standard Arabic or English. English is appropriate for code, identifiers, and a compact technical glossary.\n\nLEARNING CONTEXT\nThis topic belongs to Part 02 — AI Development, Models & Practical Tools, Module 13 — LLM Fine-Tuning & AI Application Development. Learn practical LLM adaptation and application patterns, from tokenization and supervised fine-tuning to LoRA, RAG, agents, tool calling, and deployment.\nAssume the learner has: Modules 09–11 — Python, model platforms, and local inference, Part 01 — LLM, tokenization, RAG, and agent fundamentals. Briefly introduce any prerequisite that is essential, but do not turn the lesson into a repetition of earlier modules. Connect the topic to relevant neighboring ideas such as: LLM Fine-Tuning & AI Application Development, Python, Machine Learning, Large Language Models, AI Application Architecture.\n\nTOPIC DEFINITION\nLocal AI applications package a model runtime behind an application interface or API; deployment adds configuration, resource management, monitoring, access control, and lifecycle operations.\n\nLEARNING OUTCOMES\n1. Compare embedded local inference with a separate serving process.\n2. Expose a controlled API endpoint.\n3. Plan health checks, logging, and updates.\n\nTOPIC-SPECIFIC TEACHING PLAN\nBuild the lesson progressively around the following outcomes. For each one, define the supporting vocabulary, explain the mechanism step by step, show where it fits in a real workflow, and identify common implementation mistakes:\n1. Compare embedded local inference with a separate serving process.\n2. Expose a controlled API endpoint.\n3. Plan health checks, logging, and updates.\n\nWORKED EXAMPLES AND PRACTICE\nUse these concrete examples as the backbone of the lesson:\n- Serve a local model through a local API and call it from a small client application.\n- Draw a deployment architecture for a local assistant and mark network boundaries and secrets.\nExplain inputs, transformations, intermediate state, outputs, and failure cases. Include runnable Python or shell examples when useful. State prerequisites and expected output, explain every important line, and distinguish illustrative code from production-ready code. For platform-specific steps, mention that interfaces, quotas, APIs, and commands can change by version and should be checked against current official documentation.\n\nMISCONCEPTIONS, LIMITATIONS AND ENGINEERING JUDGMENT\nExplicitly address these topic-specific misconceptions:\n- A development server is not automatically production-ready.\n- Model serving requires capacity, access control, and update planning.\nAlso discuss trade-offs, compatibility, reproducibility, privacy, security, resource constraints, and situations where the technique is unsuitable, selecting only those relevant to this topic. Do not invent benchmarks, hardware requirements, product capabilities, citations, or numerical claims.\n\nPRACTICAL IMPLEMENTATION\nDesign a hands-on exercise directly related to \"Local AI Applications, Model Serving and Deployment\". Include a clear objective, prerequisites, setup, complete steps, code or commands where useful, expected observations, troubleshooting guidance, and a way to verify completion. Where appropriate, connect the exercise to a coherent CipherNeuron project deliverable such as a model runner, ML classifier, notebook, inference client, fine-tuning experiment, RAG prototype, or agent. Use only public data and systems the learner owns or is authorized to use; never expose secrets or send private data to an untrusted service.\n\nOUTPUT STANDARD\n- Target depth: Intermediate to Advanced. Teach from prerequisites to mechanisms and practical engineering judgment without padding.\n- Use clear headings and define supporting concepts before relying on them.\n- Include a text-based architecture or process diagram when it improves understanding, and explain each component.\n- Include a comparison table when alternatives are relevant.\n- Include at least two worked examples where appropriate.\n- Include an English technical glossary with concise Egyptian Arabic explanations.\n- Include practical exercises, review questions with answers, key takeaways, and a final knowledge assessment with an answer key.\n- Prefer official documentation, primary research, and established technical references. Never fabricate citations. Clearly distinguish verified facts from assumptions or version-dependent behavior.\n- If the complete lesson is too long for one response, divide it into numbered consecutive parts and state the planned sequence; do not silently omit sections."
    }
  ]
} );
