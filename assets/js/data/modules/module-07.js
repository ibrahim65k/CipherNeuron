/* CipherNeuron curriculum data — Module 07. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-07-llms-generative-ai",
  "number": "07",
  "partId": "part-01",
  "title": "Large Language Models & Generative AI",
  "subtitle": "Understand how modern generative models represent context and produce outputs.",
  "description": "Covers model categories, pretraining, tokenization, embeddings, inference and sampling, context limitations, and multimodal generation.",
  "difficulty": "Intermediate",
  "estimatedTime": "6–8 hours",
  "prerequisites": [
    "Module 05 Deep Learning fundamentals",
    "Module 06 NLP and transformer fundamentals",
    "Basic probability and vectors"
  ],
  "objectives": [
    "Distinguish generative and discriminative modeling approaches.",
    "Explain LLM/SLM and foundation-model terminology.",
    "Trace text through tokenization, embeddings, model inference, and sampling.",
    "Recognize context, memory, hallucination, and multimodal limitations."
  ],
  "relatedModules": [
    "module-06-nlp-transformers",
    "module-08-modern-ai-systems",
    "module-13-llm-finetuning-app-development"
  ],
  "topics": [
    {
      "id": "topic-generative-ai-vs-discriminative-models",
      "title": "Generative AI vs. Discriminative Models",
      "subtitle": "Compare creating data with predicting labels or properties.",
      "category": "Generative AI & LLMs",
      "difficulty": "Foundation",
      "definition": "Generative models learn a representation of data or its distribution and can produce new samples, while discriminative models focus on predicting labels or conditional outcomes from inputs.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Define generative modeling and discriminative modeling in probabilistic terms at an accessible level.",
        "Compare joint and conditional probability intuitively.",
        "Explain why the distinction depends on the modeling objective, not merely the interface."
      ],
      "keywords": [
        "generative ai vs. discriminative models",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Generative AI vs. Discriminative Models\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Define generative modeling and discriminative modeling in probabilistic terms at an accessible level.\n- Compare joint and conditional probability intuitively.\n- Explain why the distinction depends on the modeling objective, not merely the interface.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define generative modeling and discriminative modeling in probabilistic terms at an accessible level.\n2. Compare joint and conditional probability intuitively.\n3. Explain why the distinction depends on the modeling objective, not merely the interface.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare an image classifier with a model that generates images.\n- Contrast a spam classifier with a language model that continues a message.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A generative model is not automatically creative, correct, or safe.\n- A discriminative model can still produce probability estimates and complex outputs.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nClassify six model tasks as generative or discriminative and explain the modeled quantity and expected output for each.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-large-language-models-and-small-language-models",
      "title": "Large Language Models and Small Language Models",
      "subtitle": "Understand model scale as one factor among several.",
      "category": "Generative AI & LLMs",
      "difficulty": "Foundation",
      "definition": "A Large Language Model (LLM) is a language model commonly characterized by substantial model capacity and broad language capabilities, while Small Language Model (SLM) refers to comparatively smaller language models designed for narrower or resource-constrained use cases.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Explain why size labels are relative and lack one universal parameter threshold.",
        "Compare capability, latency, compute, memory, deployment, and task specialization.",
        "Discuss model quality, data, architecture, quantization, and evaluation beyond parameter count."
      ],
      "keywords": [
        "large language models and small language models",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Large Language Models and Small Language Models\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Explain why size labels are relative and lack one universal parameter threshold.\n- Compare capability, latency, compute, memory, deployment, and task specialization.\n- Discuss model quality, data, architecture, quantization, and evaluation beyond parameter count.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain why size labels are relative and lack one universal parameter threshold.\n2. Compare capability, latency, compute, memory, deployment, and task specialization.\n3. Discuss model quality, data, architecture, quantization, and evaluation beyond parameter count.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a cloud-hosted general model with a small on-device assistant.\n- Choose model constraints for a private offline document classification task.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A larger parameter count does not guarantee better results for every task.\n- A small model is not necessarily a distilled copy or a low-quality model.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nBuild a decision matrix for selecting an LLM or SLM based on task quality, privacy, latency, hardware, cost, and maintenance.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-foundation-base-instruction-tuned-and-chat-models",
      "title": "Foundation, Base, Instruction-Tuned, and Chat Models",
      "subtitle": "Understand how model training stages shape intended use.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Foundation Models are broadly trained models that can be adapted to many tasks; base models are pretrained without full instruction alignment, while instruction-tuned and chat models receive additional training for following requests or conversational interaction.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Define foundation model, base model, instruction tuning, chat tuning, alignment, and post-training.",
        "Compare raw continuation behavior with instruction-following behavior.",
        "Explain why deployment format and system prompts do not by themselves determine training history."
      ],
      "keywords": [
        "foundation, base, instruction-tuned, and chat models",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Foundation, Base, Instruction-Tuned, and Chat Models\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Define foundation model, base model, instruction tuning, chat tuning, alignment, and post-training.\n- Compare raw continuation behavior with instruction-following behavior.\n- Explain why deployment format and system prompts do not by themselves determine training history.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define foundation model, base model, instruction tuning, chat tuning, alignment, and post-training.\n2. Compare raw continuation behavior with instruction-following behavior.\n3. Explain why deployment format and system prompts do not by themselves determine training history.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare how a base model and an instruction-tuned model respond to the same task request.\n- Map pretraining, supervised instruction tuning, and preference optimization at a high level.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- “Chat model” is not a precise architecture family by itself.\n- An instruction-tuned model can still misunderstand instructions or produce unsafe outputs.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a model lifecycle diagram from pretraining to instruction tuning and describe what behavior each stage aims to change.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-pretraining-and-foundation-model-learning",
      "title": "Pretraining and Foundation-Model Learning",
      "subtitle": "Understand the broad training stage behind reusable models.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Pretraining is an initial large-scale training stage in which a model learns general patterns from a broad corpus using an objective such as next-token prediction or another self-supervised task.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Explain pretraining data, objective, batches, optimization, checkpoints, and compute at a conceptual level.",
        "Describe how self-supervised objectives derive training signals from data.",
        "Discuss data curation, licensing, duplication, contamination, and limitations."
      ],
      "keywords": [
        "pretraining and foundation-model learning",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Pretraining and Foundation-Model Learning\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Explain pretraining data, objective, batches, optimization, checkpoints, and compute at a conceptual level.\n- Describe how self-supervised objectives derive training signals from data.\n- Discuss data curation, licensing, duplication, contamination, and limitations.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain pretraining data, objective, batches, optimization, checkpoints, and compute at a conceptual level.\n2. Describe how self-supervised objectives derive training signals from data.\n3. Discuss data curation, licensing, duplication, contamination, and limitations.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace a next-token example where the target is derived from the sequence itself.\n- Explain why data filtering and deduplication influence learned behavior.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Pretraining does not guarantee a model has accurate knowledge of every included document.\n- Training data scale alone does not establish model quality, legal status, or safety.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWrite a conceptual pretraining plan for a small domain model. Identify corpus quality checks, objective, evaluation, and risks without claiming production scale.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-tokens-tokenization-tokenizers-vocabulary-and-token-ids",
      "title": "Tokens, Tokenization, Tokenizers, Vocabulary, and Token IDs",
      "subtitle": "Understand how text becomes the model’s discrete input sequence.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Tokenization converts text into token units according to a tokenizer vocabulary; token IDs are integer identifiers used to represent those tokens inside a model.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Distinguish characters, bytes, words, tokens, token strings, vocabulary, and token IDs.",
        "Explain subword tokenization and why one word may map to multiple tokens.",
        "Discuss special tokens, whitespace, multilingual text, and token-count variability."
      ],
      "keywords": [
        "tokens, tokenization, tokenizers, vocabulary, and token ids",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Tokens, Tokenization, Tokenizers, Vocabulary, and Token IDs\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Distinguish characters, bytes, words, tokens, token strings, vocabulary, and token IDs.\n- Explain subword tokenization and why one word may map to multiple tokens.\n- Discuss special tokens, whitespace, multilingual text, and token-count variability.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish characters, bytes, words, tokens, token strings, vocabulary, and token IDs.\n2. Explain subword tokenization and why one word may map to multiple tokens.\n3. Discuss special tokens, whitespace, multilingual text, and token-count variability.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Tokenize a short technical phrase into illustrative subword pieces.\n- Compare token counts for code, punctuation-heavy text, and different languages using a tokenizer example if available.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A token is not always a complete word or one character.\n- Token IDs are vocabulary indices, not semantic scores.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nTake a paragraph containing English, punctuation, and code. Explain possible token boundaries and why exact token counts require the model’s tokenizer.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-embeddings-vector-spaces-and-semantic-similarity",
      "title": "Embeddings, Vector Spaces, and Semantic Similarity",
      "subtitle": "Understand how tokens or texts are represented numerically.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "An embedding maps a token, passage, image, or other item to a dense vector; vector-space methods can compare representations using measures such as cosine similarity.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Define embedding, vector dimension, vector space, cosine similarity, and nearest neighbors.",
        "Explain contextual token embeddings versus fixed text or word embeddings.",
        "Discuss why semantic similarity depends on training data and embedding purpose."
      ],
      "keywords": [
        "embeddings, vector spaces, and semantic similarity",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Embeddings, Vector Spaces, and Semantic Similarity\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Define embedding, vector dimension, vector space, cosine similarity, and nearest neighbors.\n- Explain contextual token embeddings versus fixed text or word embeddings.\n- Discuss why semantic similarity depends on training data and embedding purpose.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define embedding, vector dimension, vector space, cosine similarity, and nearest neighbors.\n2. Explain contextual token embeddings versus fixed text or word embeddings.\n3. Discuss why semantic similarity depends on training data and embedding purpose.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Calculate cosine similarity for two tiny vectors.\n- Compare embeddings for two paraphrases and two lexically similar but semantically different sentences.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Close vectors do not prove exact equivalence or entailment.\n- Embeddings are task-dependent representations, not transparent definitions of meaning.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCalculate a simple cosine similarity and design a small semantic-search example. Explain the limits of treating similarity as relevance.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-llm-inference-logits-and-probability-distributions",
      "title": "LLM Inference, Logits, and Probability Distributions",
      "subtitle": "Trace how a language model produces candidate next tokens.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Inference is the process of applying a trained model to inputs; logits are raw output scores that are commonly converted into a probability distribution over possible next tokens.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Define inference, forward pass, output head, logits, softmax, and conditional next-token probability.",
        "Explain how the context affects the next-token distribution.",
        "Distinguish raw scores, normalized probabilities, and the selected token."
      ],
      "keywords": [
        "llm inference, logits, and probability distributions",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"LLM Inference, Logits, and Probability Distributions\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Define inference, forward pass, output head, logits, softmax, and conditional next-token probability.\n- Explain how the context affects the next-token distribution.\n- Distinguish raw scores, normalized probabilities, and the selected token.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define inference, forward pass, output head, logits, softmax, and conditional next-token probability.\n2. Explain how the context affects the next-token distribution.\n3. Distinguish raw scores, normalized probabilities, and the selected token.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Convert a tiny set of logits into a conceptual probability distribution.\n- Trace one generation step from input tokens to next-token scores.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- The highest logit is not itself a probability.\n- A token with high conditional probability is not necessarily factually correct in the real world.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWork through a small three-token example showing logits, softmax probabilities, and the chosen next token.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-sampling-controls-temperature-top-k-and-top-p",
      "title": "Sampling Controls: Temperature, Top-k, and Top-p",
      "subtitle": "Understand how decoding settings influence generated text.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Sampling controls modify or restrict the next-token probability distribution used during generation; temperature changes distribution sharpness, while top-k and top-p constrain the candidate set.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Explain greedy decoding versus sampling.",
        "Describe temperature scaling, top-k selection, and nucleus (top-p) sampling.",
        "Discuss reproducibility, randomness, diversity, and why settings do not add knowledge."
      ],
      "keywords": [
        "sampling controls: temperature, top-k, and top-p",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Sampling Controls: Temperature, Top-k, and Top-p\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Explain greedy decoding versus sampling.\n- Describe temperature scaling, top-k selection, and nucleus (top-p) sampling.\n- Discuss reproducibility, randomness, diversity, and why settings do not add knowledge.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain greedy decoding versus sampling.\n2. Describe temperature scaling, top-k selection, and nucleus (top-p) sampling.\n3. Discuss reproducibility, randomness, diversity, and why settings do not add knowledge.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare low and high temperature on a toy distribution.\n- Apply top-k and top-p to a short ordered list of token probabilities.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Temperature does not simply set a universal creativity level.\n- Top-p is based on cumulative probability, not a fixed number of tokens.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nUse a toy probability distribution to calculate a top-k candidate set and a top-p candidate set, then explain how temperature changes relative probabilities.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-context-window-memory-hallucinations-and-knowledge-cutoff",
      "title": "Context Window, Memory, Hallucinations, and Knowledge Cutoff",
      "subtitle": "Understand important limits of conversational model behavior.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "A context window is the amount of input and generated token context a model can process in a request; memory is information retained by an application or system across interactions, hallucination describes unsupported or fabricated output, and knowledge cutoff refers to limits in training-time knowledge.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Distinguish context window, conversation history, external memory, retrieval, and persistent application storage.",
        "Explain why long-context models can still overlook or misinterpret information.",
        "Describe hallucinations, stale knowledge, grounding, and verification.",
        "Explain how system design affects what a model can remember across sessions."
      ],
      "keywords": [
        "context window, memory, hallucinations, and knowledge cutoff",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Context Window, Memory, Hallucinations, and Knowledge Cutoff\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Distinguish context window, conversation history, external memory, retrieval, and persistent application storage.\n- Explain why long-context models can still overlook or misinterpret information.\n- Describe hallucinations, stale knowledge, grounding, and verification.\n- Explain how system design affects what a model can remember across sessions.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish context window, conversation history, external memory, retrieval, and persistent application storage.\n2. Explain why long-context models can still overlook or misinterpret information.\n3. Describe hallucinations, stale knowledge, grounding, and verification.\n4. Explain how system design affects what a model can remember across sessions.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a fact in the current prompt with a fact stored in an external knowledge base.\n- Analyze a fluent answer that cites a nonexistent document and design a verification step.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A longer context window is not the same as perfect memory.\n- A knowledge cutoff does not mean every fact before that date is known or correct.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a grounded question-answering workflow that labels retrieved evidence, verifies citations, and handles missing information honestly.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-multimodal-ai-and-vision-language-models",
      "title": "Multimodal AI and Vision-Language Models",
      "subtitle": "Understand models that process or combine different modalities.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Multimodal AI systems process or generate more than one modality, such as text, images, audio, or video; Vision-Language Models connect visual inputs with language representations or outputs.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Define modality, multimodal input/output, encoder, fusion, and Vision-Language Model (VLM).",
        "Explain image patches or visual tokens at a high level.",
        "Discuss modality-specific preprocessing, alignment, and cross-modal limitations."
      ],
      "keywords": [
        "multimodal ai and vision-language models",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Multimodal AI and Vision-Language Models\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Define modality, multimodal input/output, encoder, fusion, and Vision-Language Model (VLM).\n- Explain image patches or visual tokens at a high level.\n- Discuss modality-specific preprocessing, alignment, and cross-modal limitations.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define modality, multimodal input/output, encoder, fusion, and Vision-Language Model (VLM).\n2. Explain image patches or visual tokens at a high level.\n3. Discuss modality-specific preprocessing, alignment, and cross-modal limitations.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Analyze a system that answers a question about an uploaded image.\n- Trace a text-and-image request through separate encoders and a shared reasoning or generation component.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A VLM may miss small details, hidden text, or spatial relationships in an image.\n- Combining modalities does not automatically make the output more reliable.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw a multimodal input pipeline and create test cases for image description, OCR-like reading, and visual question answering.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-diffusion-models-and-image-generation",
      "title": "Diffusion Models and Image Generation",
      "subtitle": "Understand the denoising process used by many image generators.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "A Diffusion Model learns to generate data by modeling a process that gradually adds noise to training examples and learning a reverse denoising process that can produce new samples.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Explain forward noising, noise schedule, denoising network, reverse sampling, and latent diffusion conceptually.",
        "Describe conditioning from text prompts or other inputs.",
        "Discuss quality, controllability, artifacts, compute, and provenance concerns."
      ],
      "keywords": [
        "diffusion models and image generation",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Diffusion Models and Image Generation\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Explain forward noising, noise schedule, denoising network, reverse sampling, and latent diffusion conceptually.\n- Describe conditioning from text prompts or other inputs.\n- Discuss quality, controllability, artifacts, compute, and provenance concerns.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain forward noising, noise schedule, denoising network, reverse sampling, and latent diffusion conceptually.\n2. Describe conditioning from text prompts or other inputs.\n3. Discuss quality, controllability, artifacts, compute, and provenance concerns.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Sketch several steps of an image becoming noisy and a reverse sequence becoming structured.\n- Explain how a text condition can guide denoising without claiming the model understands a scene like a person.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- The model does not simply retrieve a matching training image in every generation.\n- Prompt wording alone does not guarantee exact object counts, text, or physical consistency.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nExplain a simplified diffusion pipeline using a step diagram. Identify model input, noise estimate, conditioning, and final sample.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-audio-generation-speech-to-text-and-text-to-speech",
      "title": "Audio Generation, Speech-to-Text, and Text-to-Speech",
      "subtitle": "Understand common audio input and output tasks.",
      "category": "Generative AI & LLMs",
      "difficulty": "Intermediate",
      "definition": "Speech-to-Text (STT) converts spoken audio into text, Text-to-Speech (TTS) synthesizes speech from text, and audio-generation systems produce audio such as speech, music, or sound effects.",
      "position": "This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.",
      "prerequisites": [
        "Module 05 Deep Learning fundamentals",
        "Module 06 NLP and transformer fundamentals",
        "Basic probability and vectors"
      ],
      "relatedConcepts": [
        "Generative AI",
        "LLMs and SLMs",
        "Foundation Models",
        "Tokenization",
        "Embeddings",
        "Inference",
        "Sampling",
        "Context Window",
        "Multimodal AI",
        "Diffusion Models"
      ],
      "objectives": [
        "Distinguish speech recognition, speech synthesis, speaker diarization, audio understanding, and general audio generation.",
        "Explain waveform, sampling rate, spectrogram, acoustic model, and vocoder at an accessible level.",
        "Discuss accents, noise, latency, alignment, consent, and synthetic-voice misuse."
      ],
      "keywords": [
        "audio generation, speech-to-text, and text-to-speech",
        "generative discriminative",
        "LLM SLM base instruction chat",
        "pretraining tokenizer token IDs",
        "logits temperature top-p top-k",
        "context memory hallucination",
        "VLM diffusion speech audio"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Audio Generation, Speech-to-Text, and Text-to-Speech\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 07 — Large Language Models & Generative AI. This module explains the behavior of language and multimodal foundation models before the learner studies how to run, customize, integrate, and secure them.\nAssume general computer literacy and these prerequisites: Module 05 Deep Learning fundamentals, Module 06 NLP and transformer fundamentals, Basic probability and vectors. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Generative AI, LLMs and SLMs, Foundation Models, Tokenization, Embeddings, Inference, Sampling, Context Window, Multimodal AI, Diffusion Models.\n\nLEARNING OUTCOMES\n- Distinguish speech recognition, speech synthesis, speaker diarization, audio understanding, and general audio generation.\n- Explain waveform, sampling rate, spectrogram, acoustic model, and vocoder at an accessible level.\n- Discuss accents, noise, latency, alignment, consent, and synthetic-voice misuse.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish speech recognition, speech synthesis, speaker diarization, audio understanding, and general audio generation.\n2. Explain waveform, sampling rate, spectrogram, acoustic model, and vocoder at an accessible level.\n3. Discuss accents, noise, latency, alignment, consent, and synthetic-voice misuse.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace recorded speech through preprocessing and transcription.\n- Trace text and a voice representation through a TTS pipeline to generated audio.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- STT output can contain transcription errors and should be checked for consequential use.\n- A synthetic voice is not proof of a real person’s identity or consent.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCompare STT and TTS with a pair of diagrams. Design an evaluation checklist covering word error, intelligibility, speaker consent, and noisy environments.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
