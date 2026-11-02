/* CipherNeuron curriculum data — Module 14. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-14-ai-in-cybersecurity-pentesting",
  "number": "14",
  "partId": "part-03",
  "title": "AI in Cybersecurity & Pentesting",
  "subtitle": "Understand where AI helps security practitioners and where human expertise remains essential.",
  "description": "Explore AI use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use.",
  "objectives": [
    "Identify where AI can support security research and authorized penetration-testing workflows.",
    "Use security-oriented prompt engineering to request structured, verifiable assistance.",
    "Recognize hallucinations, false positives, privacy risks, and limitations in AI-generated security analysis.",
    "Apply independent validation, human oversight, and responsible data-handling practices."
  ],
  "difficulty": "Intermediate",
  "estimatedTime": "6–8 hours",
  "prerequisites": [
    "Part 01 — AI and LLM fundamentals",
    "Foundational cybersecurity and penetration-testing concepts"
  ],
  "relatedModules": [
    "module-08-modern-ai-systems",
    "module-15-ai-offensive-workflows"
  ],
  "topics": [
    {
      "id": "topic-p03-ai-in-cybersecurity",
      "title": "AI in Cybersecurity",
      "subtitle": "AI applies statistical learning and language-model capabilities to security telemetry, workflows, research, and decision support.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI applies statistical learning and language-model capabilities to security telemetry, workflows, research, and decision support.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Distinguish predictive, generative, and agentic AI uses.",
        "Map security tasks to suitable AI capabilities.",
        "Identify data, validation, and operational constraints."
      ],
      "keywords": [
        "ai in cybersecurity",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "distinguish predictive, generative, and agentic ai uses.",
        "map security tasks to suitable ai capabilities.",
        "identify data, validation, and operational constraints."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI in Cybersecurity\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI applies statistical learning and language-model capabilities to security telemetry, workflows, research, and decision support.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Distinguish predictive, generative, and agentic AI uses.\n2. Map security tasks to suitable AI capabilities.\n3. Identify data, validation, and operational constraints.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Classify sample SOC and pentest tasks by AI capability.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: AI does not independently establish that an event is malicious.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-ai-in-security-research",
      "title": "AI in Security Research",
      "subtitle": "AI can accelerate literature review, code comprehension, hypothesis generation, and synthesis while primary evidence remains authoritative.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI can accelerate literature review, code comprehension, hypothesis generation, and synthesis while primary evidence remains authoritative.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Build a traceable research question.",
        "Use AI to summarize and compare primary sources.",
        "Verify claims against original evidence."
      ],
      "keywords": [
        "ai in security research",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "build a traceable research question.",
        "use ai to summarize and compare primary sources.",
        "verify claims against original evidence."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI in Security Research\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI can accelerate literature review, code comprehension, hypothesis generation, and synthesis while primary evidence remains authoritative.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Build a traceable research question.\n2. Use AI to summarize and compare primary sources.\n3. Verify claims against original evidence.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Create an evidence table for a public vulnerability advisory and its patch.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: A fluent summary is not proof that a paper or advisory says what the model claims.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-ai-assisted-penetration-testing",
      "title": "AI-Assisted Penetration Testing",
      "subtitle": "AI-assisted penetration testing uses models to support scoped assessment tasks while the tester controls decisions, execution, and validation.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI-assisted penetration testing uses models to support scoped assessment tasks while the tester controls decisions, execution, and validation.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Place AI assistance within assessment phases.",
        "Separate recommendations from verified findings.",
        "Preserve scope and authorization."
      ],
      "keywords": [
        "ai-assisted penetration testing",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "place ai assistance within assessment phases.",
        "separate recommendations from verified findings.",
        "preserve scope and authorization."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI-Assisted Penetration Testing\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI-assisted penetration testing uses models to support scoped assessment tasks while the tester controls decisions, execution, and validation.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Place AI assistance within assessment phases.\n2. Separate recommendations from verified findings.\n3. Preserve scope and authorization.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Design a human-reviewed workflow for a deliberately vulnerable lab.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: AI assistance does not replace methodology, authorization, or tester accountability.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-ai-security-tools",
      "title": "AI Security Tools",
      "subtitle": "AI security tools combine models with scanners, analyzers, knowledge sources, or workflow interfaces to support defined security tasks.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI security tools combine models with scanners, analyzers, knowledge sources, or workflow interfaces to support defined security tasks.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Classify tool architectures.",
        "Assess data flow and permissions.",
        "Evaluate output quality and operational risk."
      ],
      "keywords": [
        "ai security tools",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "classify tool architectures.",
        "assess data flow and permissions.",
        "evaluate output quality and operational risk."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI Security Tools\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI security tools combine models with scanners, analyzers, knowledge sources, or workflow interfaces to support defined security tasks.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Classify tool architectures.\n2. Assess data flow and permissions.\n3. Evaluate output quality and operational risk.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Compare a standalone chat assistant with a tool-connected assistant using synthetic inputs.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: A tool marketed as AI-powered is not necessarily accurate, safe, or autonomous.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-llms-for-pentesters",
      "title": "LLMs for Pentesters",
      "subtitle": "LLMs can explain protocols, summarize evidence, draft scripts, generate test ideas, and help interpret results when supplied with bounded context.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "LLMs can explain protocols, summarize evidence, draft scripts, generate test ideas, and help interpret results when supplied with bounded context.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Choose suitable LLM tasks.",
        "Provide minimal reproducible context.",
        "Review generated commands and conclusions."
      ],
      "keywords": [
        "llms for pentesters",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "choose suitable llm tasks.",
        "provide minimal reproducible context.",
        "review generated commands and conclusions."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"LLMs for Pentesters\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: LLMs can explain protocols, summarize evidence, draft scripts, generate test ideas, and help interpret results when supplied with bounded context.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Choose suitable LLM tasks.\n2. Provide minimal reproducible context.\n3. Review generated commands and conclusions.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Ask a model to explain a sanitized HTTP exchange and verify each claim manually.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: An LLM may invent flags, endpoints, vulnerabilities, or tool output.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-security-oriented-prompt-engineering",
      "title": "Security-Oriented Prompt Engineering",
      "subtitle": "Security-oriented prompt engineering structures context, constraints, evidence, and output requirements for reliable assistance in security workflows.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "Security-oriented prompt engineering structures context, constraints, evidence, and output requirements for reliable assistance in security workflows.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Write scoped role and task instructions.",
        "Separate evidence from hypotheses.",
        "Require uncertainty and structured outputs."
      ],
      "keywords": [
        "security-oriented prompt engineering",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "write scoped role and task instructions.",
        "separate evidence from hypotheses.",
        "require uncertainty and structured outputs."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Security-Oriented Prompt Engineering\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: Security-oriented prompt engineering structures context, constraints, evidence, and output requirements for reliable assistance in security workflows.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Write scoped role and task instructions.\n2. Separate evidence from hypotheses.\n3. Require uncertainty and structured outputs.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Create a prompt that converts sanitized scan output into a triage table with evidence fields.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: A prompt cannot guarantee correctness or override model and system limitations.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-ai-assisted-research",
      "title": "AI-Assisted Research",
      "subtitle": "AI-assisted research uses iterative questioning, source discovery, comparison, and note synthesis to reduce research friction.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI-assisted research uses iterative questioning, source discovery, comparison, and note synthesis to reduce research friction.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Decompose a research question.",
        "Track claims and source provenance.",
        "Identify missing or conflicting evidence."
      ],
      "keywords": [
        "ai-assisted research",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "decompose a research question.",
        "track claims and source provenance.",
        "identify missing or conflicting evidence."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI-Assisted Research\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI-assisted research uses iterative questioning, source discovery, comparison, and note synthesis to reduce research friction.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Decompose a research question.\n2. Track claims and source provenance.\n3. Identify missing or conflicting evidence.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Research a protocol behavior using official specifications and vendor documentation.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Generated citations and references must be independently checked.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-ai-limitations-in-security-work",
      "title": "AI Limitations in Security Work",
      "subtitle": "AI limitations include incomplete context, stale knowledge, nondeterminism, weak grounding, context-window constraints, and inability to observe systems directly.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "AI limitations include incomplete context, stale knowledge, nondeterminism, weak grounding, context-window constraints, and inability to observe systems directly.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Identify common capability boundaries.",
        "Choose verification methods.",
        "Decide when not to use AI."
      ],
      "keywords": [
        "ai limitations in security work",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "identify common capability boundaries.",
        "choose verification methods.",
        "decide when not to use ai."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"AI Limitations in Security Work\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: AI limitations include incomplete context, stale knowledge, nondeterminism, weak grounding, context-window constraints, and inability to observe systems directly.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Identify common capability boundaries.\n2. Choose verification methods.\n3. Decide when not to use AI.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Evaluate a model answer about a lab finding against actual tool output.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: A confident answer does not imply access to the target or current facts.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-hallucinations-in-security-analysis",
      "title": "Hallucinations in Security Analysis",
      "subtitle": "A hallucination is plausible but unsupported generated content, such as fabricated CVEs, commands, protocol details, or findings.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "A hallucination is plausible but unsupported generated content, such as fabricated CVEs, commands, protocol details, or findings.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Recognize hallucination patterns.",
        "Trace claims to evidence.",
        "Design a claim-verification checklist."
      ],
      "keywords": [
        "hallucinations in security analysis",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "recognize hallucination patterns.",
        "trace claims to evidence.",
        "design a claim-verification checklist."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Hallucinations in Security Analysis\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: A hallucination is plausible but unsupported generated content, such as fabricated CVEs, commands, protocol details, or findings.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Recognize hallucination patterns.\n2. Trace claims to evidence.\n3. Design a claim-verification checklist.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Audit a deliberately flawed vulnerability summary and label unsupported statements.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Plausibility, technical vocabulary, and citation formatting do not validate a claim.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-false-positives-and-false-negatives",
      "title": "False Positives and False Negatives",
      "subtitle": "False positives incorrectly flag benign behavior, while false negatives miss real issues; both affect AI-assisted security triage.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "False positives incorrectly flag benign behavior, while false negatives miss real issues; both affect AI-assisted security triage.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Explain classification errors.",
        "Use evidence-based triage.",
        "Balance precision and recall for task context."
      ],
      "keywords": [
        "false positives and false negatives",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "explain classification errors.",
        "use evidence-based triage.",
        "balance precision and recall for task context."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"False Positives and False Negatives\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: False positives incorrectly flag benign behavior, while false negatives miss real issues; both affect AI-assisted security triage.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Explain classification errors.\n2. Use evidence-based triage.\n3. Balance precision and recall for task context.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Triage synthetic alert examples and record reasons for accept, reject, or investigate.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Model confidence is not the same as calibrated probability or proof.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-verification-of-ai-generated-results",
      "title": "Verification of AI-Generated Results",
      "subtitle": "Verification compares AI claims with reproducible observations, authoritative references, and independent tests before they become assessment conclusions.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "Verification compares AI claims with reproducible observations, authoritative references, and independent tests before they become assessment conclusions.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Build a verification chain.",
        "Reproduce claims safely.",
        "Record evidence and uncertainty."
      ],
      "keywords": [
        "verification of ai-generated results",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "build a verification chain.",
        "reproduce claims safely.",
        "record evidence and uncertainty."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Verification of AI-Generated Results\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: Verification compares AI claims with reproducible observations, authoritative references, and independent tests before they become assessment conclusions.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Build a verification chain.\n2. Reproduce claims safely.\n3. Record evidence and uncertainty.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Verify a suggested HTTP security test against a local intentionally vulnerable application.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Never report a model-generated hypothesis as a confirmed vulnerability.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-human-in-the-loop-security-workflows",
      "title": "Human-in-the-Loop Security Workflows",
      "subtitle": "Human-in-the-loop design reserves consequential judgments and actions for a qualified person who reviews AI suggestions and evidence.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "Human-in-the-loop design reserves consequential judgments and actions for a qualified person who reviews AI suggestions and evidence.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Define review gates.",
        "Assign responsibility for decisions.",
        "Design escalation and rollback paths."
      ],
      "keywords": [
        "human-in-the-loop security workflows",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "define review gates.",
        "assign responsibility for decisions.",
        "design escalation and rollback paths."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Human-in-the-Loop Security Workflows\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: Human-in-the-loop design reserves consequential judgments and actions for a qualified person who reviews AI suggestions and evidence.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Define review gates.\n2. Assign responsibility for decisions.\n3. Design escalation and rollback paths.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Create an approval checklist before running any AI-suggested test in a lab.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Human review must be meaningful, not a rubber stamp.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-sensitive-data-and-ai-systems",
      "title": "Sensitive Data and AI Systems",
      "subtitle": "Security workflows may expose credentials, personal data, customer records, source code, or internal architecture when context is sent to AI services.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "Security workflows may expose credentials, personal data, customer records, source code, or internal architecture when context is sent to AI services.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Classify sensitive assessment data.",
        "Apply minimization and redaction.",
        "Choose approved processing environments."
      ],
      "keywords": [
        "sensitive data and ai systems",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "classify sensitive assessment data.",
        "apply minimization and redaction.",
        "choose approved processing environments."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Sensitive Data and AI Systems\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: Security workflows may expose credentials, personal data, customer records, source code, or internal architecture when context is sent to AI services.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Classify sensitive assessment data.\n2. Apply minimization and redaction.\n3. Choose approved processing environments.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Redact a synthetic request/response pair before using it as model context.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: Removing obvious passwords alone may not remove identifying or confidential data.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    },
    {
      "id": "topic-p03-responsible-ai-usage-in-pentesting",
      "title": "Responsible AI Usage in Pentesting",
      "subtitle": "Responsible AI usage combines legal authorization, scope discipline, privacy, transparency, safe execution, and accountable human oversight.",
      "category": "AI & Security Foundations",
      "difficulty": "Intermediate",
      "definition": "Responsible AI usage combines legal authorization, scope discipline, privacy, transparency, safe execution, and accountable human oversight.",
      "partId": "part-03",
      "partTitle": "AI-Assisted Cybersecurity & Offensive Security",
      "moduleId": "module-14-ai-in-cybersecurity-pentesting",
      "moduleTitle": "AI in Cybersecurity & Pentesting",
      "position": "Part 03 develops responsible AI-assisted security practice. In Module 14, this topic follows the preceding concepts in this module and contributes to explore ai use in security research and penetration testing, prompt engineering, reliability, verification, privacy, and responsible use. It connects to the next topics through practical evidence handling and human validation.",
      "prerequisites": [
        "Part 01 — AI and LLM fundamentals",
        "Foundational cybersecurity and penetration-testing concepts"
      ],
      "relatedConcepts": [
        "AI in Cybersecurity & Pentesting",
        "AI-Assisted Cybersecurity",
        "Large Language Models",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Translate rules of engagement into workflow constraints.",
        "Document AI use and data handling.",
        "Prevent out-of-scope or destructive actions."
      ],
      "keywords": [
        "responsible ai usage in pentesting",
        "ai in cybersecurity & pentesting",
        "ai-assisted cybersecurity",
        "authorized testing",
        "human validation",
        "translate rules of engagement into workflow constraints.",
        "document ai use and data handling.",
        "prevent out-of-scope or destructive actions."
      ],
      "prompt": "Act as a senior cybersecurity practitioner, AI engineer, and patient technical educator. Create a complete, self-contained lesson on \"Responsible AI Usage in Pentesting\" for a learner studying AI-assisted cybersecurity. Do not assume access to this website or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire explanation in natural Egyptian colloquial Arabic.\n- Keep technical terms, product names, protocol names, code, commands, API fields, and standard security vocabulary in English. Explain each important term in Egyptian Arabic on first use.\n- Progress from foundations to practical judgment. Define prerequisites rather than assuming unexplained knowledge.\n\nCURRICULUM CONTEXT\nPart 03 — AI-Assisted Cybersecurity & Offensive Security; Module 14 — AI in Cybersecurity & Pentesting. Understand where AI helps security practitioners and where human expertise remains essential.\nTopic definition: Responsible AI usage combines legal authorization, scope discipline, privacy, transparency, safe execution, and accountable human oversight.\nPrerequisites: Part 01 — AI and LLM fundamentals, Foundational cybersecurity and penetration-testing concepts. Briefly bridge any essential prerequisite, then stay focused on this topic. Related concepts: AI in Cybersecurity & Pentesting, AI-Assisted Cybersecurity, Large Language Models, Human-in-the-Loop.\n\nLEARNING OBJECTIVES\n1. Translate rules of engagement into workflow constraints.\n2. Document AI use and data handling.\n3. Prevent out-of-scope or destructive actions.\n\nTOPIC-SPECIFIC LESSON PLAN\n1. Establish the problem this topic addresses and where it fits in a real security or engineering workflow.\n2. Introduce the relevant terminology, components, data structures, and assumptions.\n3. Explain the underlying mechanism step by step, including what the AI can observe, infer, generate, or invoke—and what it cannot know.\n4. Walk through a realistic example: Write a responsible-use checklist for an authorized web application assessment.\n5. Explain how to verify each important output against primary evidence or deterministic tool behavior.\n6. Discuss the specific failure mode or misconception: A lab-safe technique is not automatically permitted on a real target.\n7. Explain limitations, false positives, false negatives, uncertainty, privacy, and operational trade-offs relevant to this topic.\n8. Connect this concept to responsible AI use throughout a penetration test: scope, data minimization, evidence quality, and human accountability.\n\nPRACTICAL WORK\nProvide a guided exercise using only a controlled lab, synthetic dataset, systems owned by the learner, or an assessment with explicit written permission. Include objective, prerequisites, setup, complete steps, expected observations, troubleshooting, and completion criteria. Use practical code, commands, structured examples, or text diagrams when useful. Explain every command and mark illustrative snippets clearly. Never provide instructions that presume authorization to test an unrelated public target. Do not include real credentials, personal data, or confidential assessment material.\n\nSECURITY AND QUALITY REQUIREMENTS\n- Enforce explicit scope, least privilege, data minimization, and responsible disclosure.\n- Label observed facts, model-generated hypotheses, and confirmed findings separately.\n- Never treat model confidence or fluent wording as evidence. Require independent human validation before reporting or taking consequential action.\n- Where tools or products are discussed, distinguish general concepts from version-dependent behavior and direct the learner to current official documentation without inventing citations or capabilities.\n\nOUTPUT FORMAT\nUse clear headings, progressive explanations, a text-based workflow or architecture diagram where useful, and a comparison table when alternatives matter. Include at least two worked examples when appropriate, a concise English glossary with Egyptian Arabic explanations, practical exercises, review questions with answers, key takeaways, and a final assessment with answer key. Aim for Intermediate depth without padding. If the lesson cannot fit in one response, split it into numbered consecutive parts and state the sequence."
    }
  ]
} );
