/* CipherNeuron curriculum data — Module 24. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-24-advanced-ai-security-research",
  "number": "24",
  "title": "Advanced AI Security Assessment & Research",
  "subtitle": "Build rigorous evaluation harnesses, custom tooling, reproducible experiments, and defensible technical research.",
  "description": "Advance from structured assessments to research-grade AI security evaluation: design test harnesses, benchmarks, metrics, exploit validation, reproducibility, reporting, and remediation verification.",
  "difficulty": "Expert",
  "estimatedTime": "14–18 hours",
  "prerequisites": [
    "Modules 17–23 or equivalent advanced AI security experience",
    "Python programming and test automation",
    "Basic statistics, experimental design, and technical reporting"
  ],
  "relatedModules": [
    "module-18-adversarial-machine-learning",
    "module-19-llm-generative-ai-pentesting",
    "module-20-rag-knowledge-security",
    "module-21-agentic-ai-tool-security",
    "module-23-ai-red-teaming-methodology"
  ],
  "objectives": [
    "Design repeatable AI security assessments and evaluation harnesses.",
    "Build custom tooling and benchmarks that measure clearly defined security properties.",
    "Validate vulnerabilities and research claims with controlled, reproducible experiments.",
    "Produce technically rigorous documentation, remediation guidance, and future research questions."
  ],
  "partId": "part-04",
  "topics": [
    {
      "id": "topic-p04-24-advanced-ai-security-assessment-design",
      "title": "Advanced AI Security Assessment Design",
      "subtitle": "Advanced AI security assessment combines architecture review, threat modeling, behavioral testing, implementation testing, and operational validation into a coherent evidence-based evaluation.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Advanced AI security assessment combines architecture review, threat modeling, behavioral testing, implementation testing, and operational validation into a coherent evidence-based evaluation.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 1 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Automated AI Security Testing",
        "AI Evaluation Frameworks and Test Taxonomies"
      ],
      "objectives": [
        "Translate system risks into assessment objectives and test coverage.",
        "Select black-box, gray-box, and white-box methods.",
        "Define assumptions, evidence thresholds, and limitations before testing."
      ],
      "keywords": [
        "advanced ai security assessment design",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "automated ai security testing",
        "ai evaluation frameworks and test taxonomies",
        "translate system risks into assessment objectives and test coverage.",
        "select black-box, gray-box, and white-box methods.",
        "define assumptions, evidence thresholds, and limitations before testing."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Advanced AI Security Assessment Design\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Advanced AI security assessment combines architecture review, threat modeling, behavioral testing, implementation testing, and operational validation into a coherent evidence-based evaluation.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Automated AI Security Testing, AI Evaluation Frameworks and Test Taxonomies.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 1 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Translate system risks into assessment objectives and test coverage.\n2. Select black-box, gray-box, and white-box methods.\n3. Define assumptions, evidence thresholds, and limitations before testing.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Advanced AI Security Assessment Design. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Design a full assessment plan for a synthetic multi-tenant agentic RAG application, including model, data, API, tools, and infrastructure. Address this misconception or failure mode explicitly: Collecting many test outputs without a clear security question or evidence standard. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-automated-ai-security-testing",
      "title": "Automated AI Security Testing",
      "subtitle": "Automated AI security testing runs repeatable checks against model applications and surrounding controls while preserving configuration, rate, and safety constraints.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Automated AI security testing runs repeatable checks against model applications and surrounding controls while preserving configuration, rate, and safety constraints.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 2 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Advanced AI Security Assessment Design",
        "AI Evaluation Frameworks and Test Taxonomies",
        "Custom AI Security Tooling"
      ],
      "objectives": [
        "Identify test candidates suitable for automation.",
        "Manage nondeterminism, retries, and rate limits.",
        "Separate automated detection from human confirmation."
      ],
      "keywords": [
        "automated ai security testing",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "advanced ai security assessment design",
        "ai evaluation frameworks and test taxonomies",
        "custom ai security tooling",
        "identify test candidates suitable for automation.",
        "manage nondeterminism, retries, and rate limits.",
        "separate automated detection from human confirmation."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Automated AI Security Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Automated AI security testing runs repeatable checks against model applications and surrounding controls while preserving configuration, rate, and safety constraints.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Advanced AI Security Assessment Design, AI Evaluation Frameworks and Test Taxonomies, Custom AI Security Tooling.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 2 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify test candidates suitable for automation.\n2. Manage nondeterminism, retries, and rate limits.\n3. Separate automated detection from human confirmation.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Automated AI Security Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a local regression suite that tests prompt handling, tenant isolation, and mock tool authorization with synthetic fixtures. Address this misconception or failure mode explicitly: Treating a scanner result or generated test verdict as a confirmed vulnerability. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-ai-evaluation-frameworks-and-test-taxonomies",
      "title": "AI Evaluation Frameworks and Test Taxonomies",
      "subtitle": "AI evaluation frameworks organize test objectives, datasets, methods, metrics, and reporting; their value depends on scope fit, validity, and transparent limitations.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "AI evaluation frameworks organize test objectives, datasets, methods, metrics, and reporting; their value depends on scope fit, validity, and transparent limitations.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 3 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Advanced AI Security Assessment Design",
        "Automated AI Security Testing",
        "Custom AI Security Tooling",
        "AI Security Test Harnesses"
      ],
      "objectives": [
        "Compare benchmark, rubric, red-team, and risk-framework roles.",
        "Select evaluation dimensions that match the target system.",
        "Avoid unsupported claims of framework coverage or certification."
      ],
      "keywords": [
        "ai evaluation frameworks and test taxonomies",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "advanced ai security assessment design",
        "automated ai security testing",
        "custom ai security tooling",
        "ai security test harnesses",
        "compare benchmark, rubric, red-team, and risk-framework roles.",
        "select evaluation dimensions that match the target system.",
        "avoid unsupported claims of framework coverage or certification."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Evaluation Frameworks and Test Taxonomies\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: AI evaluation frameworks organize test objectives, datasets, methods, metrics, and reporting; their value depends on scope fit, validity, and transparent limitations.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Advanced AI Security Assessment Design, Automated AI Security Testing, Custom AI Security Tooling, AI Security Test Harnesses.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 3 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Compare benchmark, rubric, red-team, and risk-framework roles.\n2. Select evaluation dimensions that match the target system.\n3. Avoid unsupported claims of framework coverage or certification.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Evaluation Frameworks and Test Taxonomies. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Map a defined set of agent authorization tests to an internal taxonomy and explain what the taxonomy does not measure. Address this misconception or failure mode explicitly: Treating a benchmark or framework mapping as proof of security or as a substitute for threat modeling. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-custom-ai-security-tooling",
      "title": "Custom AI Security Tooling",
      "subtitle": "Custom tooling automates repeatable interactions, captures evidence, manages test cases, and analyzes outcomes for a specific AI system or research question.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Custom tooling automates repeatable interactions, captures evidence, manages test cases, and analyzes outcomes for a specific AI system or research question.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 4 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Automated AI Security Testing",
        "AI Evaluation Frameworks and Test Taxonomies",
        "AI Security Test Harnesses",
        "Benchmarking and Dataset Design"
      ],
      "objectives": [
        "Design a tool around a measurable assessment requirement.",
        "Use safe input fixtures and explicit scope controls.",
        "Build logging, redaction, and error handling into the tool."
      ],
      "keywords": [
        "custom ai security tooling",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "automated ai security testing",
        "ai evaluation frameworks and test taxonomies",
        "ai security test harnesses",
        "benchmarking and dataset design",
        "design a tool around a measurable assessment requirement.",
        "use safe input fixtures and explicit scope controls.",
        "build logging, redaction, and error handling into the tool."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Custom AI Security Tooling\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Custom tooling automates repeatable interactions, captures evidence, manages test cases, and analyzes outcomes for a specific AI system or research question.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Automated AI Security Testing, AI Evaluation Frameworks and Test Taxonomies, AI Security Test Harnesses, Benchmarking and Dataset Design.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 4 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Design a tool around a measurable assessment requirement.\n2. Use safe input fixtures and explicit scope controls.\n3. Build logging, redaction, and error handling into the tool.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Custom AI Security Tooling. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Implement a small Python harness for a local mock inference endpoint that records request IDs, response metadata, and expected policy outcomes. Address this misconception or failure mode explicitly: Building a powerful generic agent before defining scope, permissions, and test objectives. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-ai-security-test-harnesses",
      "title": "AI Security Test Harnesses",
      "subtitle": "A test harness provides controlled setup, fixtures, adapters, execution, assertions, cleanup, and reporting so AI security experiments can be repeated.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "A test harness provides controlled setup, fixtures, adapters, execution, assertions, cleanup, and reporting so AI security experiments can be repeated.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 5 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "AI Evaluation Frameworks and Test Taxonomies",
        "Custom AI Security Tooling",
        "Benchmarking and Dataset Design",
        "Risk Scoring and Confidence Assessment"
      ],
      "objectives": [
        "Design modular test adapters and deterministic fixtures.",
        "Reset model, memory, and tool state between cases.",
        "Record environment and execution metadata."
      ],
      "keywords": [
        "ai security test harnesses",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai evaluation frameworks and test taxonomies",
        "custom ai security tooling",
        "benchmarking and dataset design",
        "risk scoring and confidence assessment",
        "design modular test adapters and deterministic fixtures.",
        "reset model, memory, and tool state between cases.",
        "record environment and execution metadata."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Security Test Harnesses\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: A test harness provides controlled setup, fixtures, adapters, execution, assertions, cleanup, and reporting so AI security experiments can be repeated.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: AI Evaluation Frameworks and Test Taxonomies, Custom AI Security Tooling, Benchmarking and Dataset Design, Risk Scoring and Confidence Assessment.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 5 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Design modular test adapters and deterministic fixtures.\n2. Reset model, memory, and tool state between cases.\n3. Record environment and execution metadata.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Security Test Harnesses. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Build a harness with setup, test, teardown, and replay stages for a mock prompt-injection and tool-boundary test. Address this misconception or failure mode explicitly: Allowing state leakage between test cases and then misattributing the observed result. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-benchmarking-and-dataset-design",
      "title": "Benchmarking and Dataset Design",
      "subtitle": "AI security benchmarks use carefully designed test cases and datasets to compare behavior across systems, but must address coverage, leakage, representativeness, and contamination.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "AI security benchmarks use carefully designed test cases and datasets to compare behavior across systems, but must address coverage, leakage, representativeness, and contamination.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 6 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Custom AI Security Tooling",
        "AI Security Test Harnesses",
        "Risk Scoring and Confidence Assessment",
        "Advanced Research Methodologies"
      ],
      "objectives": [
        "Define benchmark construct and target population.",
        "Design positive, negative, and control examples.",
        "Document dataset provenance, licensing, and contamination risks."
      ],
      "keywords": [
        "benchmarking and dataset design",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "custom ai security tooling",
        "ai security test harnesses",
        "risk scoring and confidence assessment",
        "advanced research methodologies",
        "define benchmark construct and target population.",
        "design positive, negative, and control examples.",
        "document dataset provenance, licensing, and contamination risks."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Benchmarking and Dataset Design\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: AI security benchmarks use carefully designed test cases and datasets to compare behavior across systems, but must address coverage, leakage, representativeness, and contamination.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Custom AI Security Tooling, AI Security Test Harnesses, Risk Scoring and Confidence Assessment, Advanced Research Methodologies.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 6 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define benchmark construct and target population.\n2. Design positive, negative, and control examples.\n3. Document dataset provenance, licensing, and contamination risks.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Benchmarking and Dataset Design. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a small synthetic benchmark for unauthorized tool invocation with balanced allowed and denied cases. Address this misconception or failure mode explicitly: Optimizing for a benchmark score that does not represent real deployment conditions. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-risk-scoring-and-confidence-assessment",
      "title": "Risk Scoring and Confidence Assessment",
      "subtitle": "Risk scoring combines impact, likelihood, exposure, exploit prerequisites, and confidence while making uncertainty and context explicit.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Risk scoring combines impact, likelihood, exposure, exploit prerequisites, and confidence while making uncertainty and context explicit.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 7 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "AI Security Test Harnesses",
        "Benchmarking and Dataset Design",
        "Advanced Research Methodologies",
        "Exploit Validation and Root-Cause Analysis"
      ],
      "objectives": [
        "Choose a transparent scoring model.",
        "Separate severity from confidence in the evidence.",
        "Explain how business context changes prioritization."
      ],
      "keywords": [
        "risk scoring and confidence assessment",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai security test harnesses",
        "benchmarking and dataset design",
        "advanced research methodologies",
        "exploit validation and root-cause analysis",
        "choose a transparent scoring model.",
        "separate severity from confidence in the evidence.",
        "explain how business context changes prioritization."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Risk Scoring and Confidence Assessment\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Risk scoring combines impact, likelihood, exposure, exploit prerequisites, and confidence while making uncertainty and context explicit.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: AI Security Test Harnesses, Benchmarking and Dataset Design, Advanced Research Methodologies, Exploit Validation and Root-Cause Analysis.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 7 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Choose a transparent scoring model.\n2. Separate severity from confidence in the evidence.\n3. Explain how business context changes prioritization.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Risk Scoring and Confidence Assessment. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Score hypothetical findings from a controlled AI system and conduct a sensitivity analysis showing how assumptions change rank. Address this misconception or failure mode explicitly: Presenting a precise numeric score as objective when inputs are subjective or incomplete. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-advanced-research-methodologies",
      "title": "Advanced Research Methodologies",
      "subtitle": "Advanced AI security research uses controlled experiments, ablation, baselines, statistical analysis, and peer review to test claims about model or system behavior.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Advanced AI security research uses controlled experiments, ablation, baselines, statistical analysis, and peer review to test claims about model or system behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 8 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Benchmarking and Dataset Design",
        "Risk Scoring and Confidence Assessment",
        "Exploit Validation and Root-Cause Analysis",
        "Security Reproducibility and Experiment Management"
      ],
      "objectives": [
        "Form falsifiable research questions and hypotheses.",
        "Choose baselines, controls, and appropriate sample sizes.",
        "Distinguish correlation, causation, and generalization."
      ],
      "keywords": [
        "advanced research methodologies",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "benchmarking and dataset design",
        "risk scoring and confidence assessment",
        "exploit validation and root-cause analysis",
        "security reproducibility and experiment management",
        "form falsifiable research questions and hypotheses.",
        "choose baselines, controls, and appropriate sample sizes.",
        "distinguish correlation, causation, and generalization."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Advanced Research Methodologies\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Advanced AI security research uses controlled experiments, ablation, baselines, statistical analysis, and peer review to test claims about model or system behavior.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Benchmarking and Dataset Design, Risk Scoring and Confidence Assessment, Exploit Validation and Root-Cause Analysis, Security Reproducibility and Experiment Management.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 8 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Form falsifiable research questions and hypotheses.\n2. Choose baselines, controls, and appropriate sample sizes.\n3. Distinguish correlation, causation, and generalization.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Advanced Research Methodologies. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Design an experiment to compare two prompt-injection defenses across fixed synthetic cases and multiple model configurations. Address this misconception or failure mode explicitly: Drawing broad conclusions from one model, one prompt, or an uncontrolled demonstration. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-exploit-validation-and-root-cause-analysis",
      "title": "Exploit Validation and Root-Cause Analysis",
      "subtitle": "Exploit validation establishes whether a suspected weakness is reproducible, security-relevant, within scope, and caused by an identifiable control failure.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Exploit validation establishes whether a suspected weakness is reproducible, security-relevant, within scope, and caused by an identifiable control failure.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 9 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Risk Scoring and Confidence Assessment",
        "Advanced Research Methodologies",
        "Security Reproducibility and Experiment Management",
        "AI Vulnerability Research"
      ],
      "objectives": [
        "Verify prerequisites and attacker capability.",
        "Distinguish model behavior from application and infrastructure defects.",
        "Use minimal non-destructive proof and test root cause."
      ],
      "keywords": [
        "exploit validation and root-cause analysis",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "risk scoring and confidence assessment",
        "advanced research methodologies",
        "security reproducibility and experiment management",
        "ai vulnerability research",
        "verify prerequisites and attacker capability.",
        "distinguish model behavior from application and infrastructure defects.",
        "use minimal non-destructive proof and test root cause."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Exploit Validation and Root-Cause Analysis\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Exploit validation establishes whether a suspected weakness is reproducible, security-relevant, within scope, and caused by an identifiable control failure.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Risk Scoring and Confidence Assessment, Advanced Research Methodologies, Security Reproducibility and Experiment Management, AI Vulnerability Research.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 9 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Verify prerequisites and attacker capability.\n2. Distinguish model behavior from application and infrastructure defects.\n3. Use minimal non-destructive proof and test root cause.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Exploit Validation and Root-Cause Analysis. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Validate a suspected cross-tenant retrieval flaw using synthetic records and two test accounts, without accessing real customer data. Address this misconception or failure mode explicitly: Claiming exploitability from an alarming output without proving unauthorized access or impact. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-security-reproducibility-and-experiment-management",
      "title": "Security Reproducibility and Experiment Management",
      "subtitle": "Security reproducibility requires preserving system versions, model identifiers, configuration, seeds, datasets, prompts, tool versions, and execution conditions.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Security reproducibility requires preserving system versions, model identifiers, configuration, seeds, datasets, prompts, tool versions, and execution conditions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 10 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Advanced Research Methodologies",
        "Exploit Validation and Root-Cause Analysis",
        "AI Vulnerability Research",
        "Model and System Evaluation"
      ],
      "objectives": [
        "Create an experiment manifest and artifact inventory.",
        "Control or record stochastic settings and mutable dependencies.",
        "Document failures to reproduce and environmental variance."
      ],
      "keywords": [
        "security reproducibility and experiment management",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "advanced research methodologies",
        "exploit validation and root-cause analysis",
        "ai vulnerability research",
        "model and system evaluation",
        "create an experiment manifest and artifact inventory.",
        "control or record stochastic settings and mutable dependencies.",
        "document failures to reproduce and environmental variance."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Security Reproducibility and Experiment Management\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Security reproducibility requires preserving system versions, model identifiers, configuration, seeds, datasets, prompts, tool versions, and execution conditions.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Advanced Research Methodologies, Exploit Validation and Root-Cause Analysis, AI Vulnerability Research, Model and System Evaluation.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 10 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Create an experiment manifest and artifact inventory.\n2. Control or record stochastic settings and mutable dependencies.\n3. Document failures to reproduce and environmental variance.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Security Reproducibility and Experiment Management. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Package a local test run with synthetic fixtures, model configuration, dependency lock metadata, and a replay procedure. Address this misconception or failure mode explicitly: Assuming a prompt alone is sufficient to reproduce a result across different models and versions. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-ai-vulnerability-research",
      "title": "AI Vulnerability Research",
      "subtitle": "AI vulnerability research investigates previously unknown or insufficiently characterized weaknesses in models, applications, datasets, integrations, and deployment systems.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "AI vulnerability research investigates previously unknown or insufficiently characterized weaknesses in models, applications, datasets, integrations, and deployment systems.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 11 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Exploit Validation and Root-Cause Analysis",
        "Security Reproducibility and Experiment Management",
        "Model and System Evaluation",
        "Research Documentation and Technical Reporting"
      ],
      "objectives": [
        "Identify a research gap and formulate a testable question.",
        "Establish novelty through literature and advisory review.",
        "Follow responsible disclosure and coordinated handling where applicable."
      ],
      "keywords": [
        "ai vulnerability research",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "exploit validation and root-cause analysis",
        "security reproducibility and experiment management",
        "model and system evaluation",
        "research documentation and technical reporting",
        "identify a research gap and formulate a testable question.",
        "establish novelty through literature and advisory review.",
        "follow responsible disclosure and coordinated handling where applicable."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Vulnerability Research\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: AI vulnerability research investigates previously unknown or insufficiently characterized weaknesses in models, applications, datasets, integrations, and deployment systems.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Exploit Validation and Root-Cause Analysis, Security Reproducibility and Experiment Management, Model and System Evaluation, Research Documentation and Technical Reporting.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 11 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify a research gap and formulate a testable question.\n2. Establish novelty through literature and advisory review.\n3. Follow responsible disclosure and coordinated handling where applicable.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Vulnerability Research. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Develop a research proposal for testing provenance preservation in a synthetic multimodal RAG pipeline. Address this misconception or failure mode explicitly: Calling a known behavior or expected limitation a new vulnerability without novelty and impact analysis. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-model-and-system-evaluation",
      "title": "Model and System Evaluation",
      "subtitle": "Model and system evaluation measures model-level properties and end-to-end application properties separately, then analyzes how they interact in deployment.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Model and system evaluation measures model-level properties and end-to-end application properties separately, then analyzes how they interact in deployment.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 12 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Security Reproducibility and Experiment Management",
        "AI Vulnerability Research",
        "Research Documentation and Technical Reporting",
        "Remediation Verification and Regression Research"
      ],
      "objectives": [
        "Select model metrics and system-level security properties.",
        "Evaluate version, prompt, retrieval, and tool configuration effects.",
        "Report performance-security trade-offs."
      ],
      "keywords": [
        "model and system evaluation",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "security reproducibility and experiment management",
        "ai vulnerability research",
        "research documentation and technical reporting",
        "remediation verification and regression research",
        "select model metrics and system-level security properties.",
        "evaluate version, prompt, retrieval, and tool configuration effects.",
        "report performance-security trade-offs."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Model and System Evaluation\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Model and system evaluation measures model-level properties and end-to-end application properties separately, then analyzes how they interact in deployment.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Security Reproducibility and Experiment Management, AI Vulnerability Research, Research Documentation and Technical Reporting, Remediation Verification and Regression Research.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 12 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Select model metrics and system-level security properties.\n2. Evaluate version, prompt, retrieval, and tool configuration effects.\n3. Report performance-security trade-offs.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Model and System Evaluation. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Compare a model’s refusal behavior with the application’s server-side authorization in a local test system. Address this misconception or failure mode explicitly: Using model benchmark performance as a proxy for the security of the full application. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-research-documentation-and-technical-reporting",
      "title": "Research Documentation and Technical Reporting",
      "subtitle": "Research documentation records the question, methods, artifacts, results, analysis, limitations, and provenance so others can scrutinize and reproduce the work.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Research documentation records the question, methods, artifacts, results, analysis, limitations, and provenance so others can scrutinize and reproduce the work.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 13 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "AI Vulnerability Research",
        "Model and System Evaluation",
        "Remediation Verification and Regression Research",
        "Advanced Defensive Recommendations"
      ],
      "objectives": [
        "Structure a research report with transparent methods.",
        "Preserve citations, artifact provenance, and negative results.",
        "Communicate technical and operational significance."
      ],
      "keywords": [
        "research documentation and technical reporting",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai vulnerability research",
        "model and system evaluation",
        "remediation verification and regression research",
        "advanced defensive recommendations",
        "structure a research report with transparent methods.",
        "preserve citations, artifact provenance, and negative results.",
        "communicate technical and operational significance."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Research Documentation and Technical Reporting\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Research documentation records the question, methods, artifacts, results, analysis, limitations, and provenance so others can scrutinize and reproduce the work.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: AI Vulnerability Research, Model and System Evaluation, Remediation Verification and Regression Research, Advanced Defensive Recommendations.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 13 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Structure a research report with transparent methods.\n2. Preserve citations, artifact provenance, and negative results.\n3. Communicate technical and operational significance.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Research Documentation and Technical Reporting. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Write a concise report for a controlled experiment, including methodology, raw result summary, uncertainty, and reproduction instructions. Address this misconception or failure mode explicitly: Omitting negative results, environment details, or limitations that materially affect interpretation. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-remediation-verification-and-regression-research",
      "title": "Remediation Verification and Regression Research",
      "subtitle": "Remediation verification tests whether a proposed control addresses root cause, withstands variants, and preserves legitimate functionality.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Remediation verification tests whether a proposed control addresses root cause, withstands variants, and preserves legitimate functionality.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 14 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Model and System Evaluation",
        "Research Documentation and Technical Reporting",
        "Advanced Defensive Recommendations",
        "Future AI Security Research Areas"
      ],
      "objectives": [
        "Retest the original case and neighboring variants.",
        "Measure security and utility regressions.",
        "Document residual risk and retest scope."
      ],
      "keywords": [
        "remediation verification and regression research",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "model and system evaluation",
        "research documentation and technical reporting",
        "advanced defensive recommendations",
        "future ai security research areas",
        "retest the original case and neighboring variants.",
        "measure security and utility regressions.",
        "document residual risk and retest scope."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Remediation Verification and Regression Research\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Remediation verification tests whether a proposed control addresses root cause, withstands variants, and preserves legitimate functionality.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Model and System Evaluation, Research Documentation and Technical Reporting, Advanced Defensive Recommendations, Future AI Security Research Areas.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 14 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Retest the original case and neighboring variants.\n2. Measure security and utility regressions.\n3. Document residual risk and retest scope.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Remediation Verification and Regression Research. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Evaluate a patched retrieval authorization filter against synthetic cross-tenant and legitimate same-tenant queries. Address this misconception or failure mode explicitly: Testing only the exact exploit string rather than the underlying security property. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-advanced-defensive-recommendations",
      "title": "Advanced Defensive Recommendations",
      "subtitle": "Advanced defensive recommendations translate evidence into layered, prioritized controls with ownership, deployment considerations, and measurable verification.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Advanced defensive recommendations translate evidence into layered, prioritized controls with ownership, deployment considerations, and measurable verification.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 15 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Research Documentation and Technical Reporting",
        "Remediation Verification and Regression Research",
        "Future AI Security Research Areas",
        "Capstone: End-to-End AI Security Assessment"
      ],
      "objectives": [
        "Match controls to root cause and enforcement layer.",
        "Prioritize by impact, feasibility, and residual risk.",
        "Define acceptance tests and operational monitoring."
      ],
      "keywords": [
        "advanced defensive recommendations",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "research documentation and technical reporting",
        "remediation verification and regression research",
        "future ai security research areas",
        "capstone: end-to-end ai security assessment",
        "match controls to root cause and enforcement layer.",
        "prioritize by impact, feasibility, and residual risk.",
        "define acceptance tests and operational monitoring."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Advanced Defensive Recommendations\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Advanced defensive recommendations translate evidence into layered, prioritized controls with ownership, deployment considerations, and measurable verification.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Research Documentation and Technical Reporting, Remediation Verification and Regression Research, Future AI Security Research Areas, Capstone: End-to-End AI Security Assessment.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 15 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Match controls to root cause and enforcement layer.\n2. Prioritize by impact, feasibility, and residual risk.\n3. Define acceptance tests and operational monitoring.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Advanced Defensive Recommendations. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Produce an engineering remediation plan for an agent with unsafe tool delegation and insufficient audit trails. Address this misconception or failure mode explicitly: Offering generic advice such as “add guardrails” without specifying enforceable controls or validation. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-future-ai-security-research-areas",
      "title": "Future AI Security Research Areas",
      "subtitle": "Future AI security research examines emerging risks in increasingly capable, multimodal, distributed, and tool-using systems while separating plausible hypotheses from established evidence.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "Future AI security research examines emerging risks in increasingly capable, multimodal, distributed, and tool-using systems while separating plausible hypotheses from established evidence.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 16 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Remediation Verification and Regression Research",
        "Advanced Defensive Recommendations",
        "Capstone: End-to-End AI Security Assessment"
      ],
      "objectives": [
        "Identify open questions across agents, multimodality, privacy, supply chain, and evaluation.",
        "Assess research feasibility and ethical constraints.",
        "Propose measurable studies with safe artifacts and responsible disclosure plans."
      ],
      "keywords": [
        "future ai security research areas",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "remediation verification and regression research",
        "advanced defensive recommendations",
        "capstone: end-to-end ai security assessment",
        "identify open questions across agents, multimodality, privacy, supply chain, and evaluation.",
        "assess research feasibility and ethical constraints.",
        "propose measurable studies with safe artifacts and responsible disclosure plans."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Future AI Security Research Areas\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: Future AI security research examines emerging risks in increasingly capable, multimodal, distributed, and tool-using systems while separating plausible hypotheses from established evidence.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Remediation Verification and Regression Research, Advanced Defensive Recommendations, Capstone: End-to-End AI Security Assessment.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 16 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify open questions across agents, multimodality, privacy, supply chain, and evaluation.\n2. Assess research feasibility and ethical constraints.\n3. Propose measurable studies with safe artifacts and responsible disclosure plans.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Future AI Security Research Areas. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Draft a research roadmap for evaluating identity propagation and memory isolation in multi-agent systems using only simulated agents. Address this misconception or failure mode explicitly: Presenting speculative future risks as confirmed vulnerabilities or ignoring research ethics. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-24-capstone-end-to-end-ai-security-assessment",
      "title": "Capstone: End-to-End AI Security Assessment",
      "subtitle": "An end-to-end AI security capstone integrates architecture discovery, threat modeling, scoped testing, evidence validation, risk prioritization, remediation, and final reporting.",
      "category": "Advanced AI Security Assessment & Research",
      "difficulty": "Expert",
      "definition": "An end-to-end AI security capstone integrates architecture discovery, threat modeling, scoped testing, evidence validation, risk prioritization, remediation, and final reporting.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-24-advanced-ai-security-research",
      "moduleTitle": "Advanced AI Security Assessment & Research",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 17 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–23 or equivalent advanced AI security experience",
        "Python programming and test automation"
      ],
      "relatedConcepts": [
        "Advanced Defensive Recommendations",
        "Future AI Security Research Areas"
      ],
      "objectives": [
        "Execute a complete assessment lifecycle against a controlled target.",
        "Correlate model, application, agent, data, and infrastructure findings.",
        "Deliver reproducible evidence and prioritized remediation."
      ],
      "keywords": [
        "capstone: end-to-end ai security assessment",
        "advanced ai security assessment & research",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "advanced defensive recommendations",
        "future ai security research areas",
        "execute a complete assessment lifecycle against a controlled target.",
        "correlate model, application, agent, data, and infrastructure findings.",
        "deliver reproducible evidence and prioritized remediation."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Capstone: End-to-End AI Security Assessment\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 24 — Advanced AI Security Assessment & Research.\nTopic definition: An end-to-end AI security capstone integrates architecture discovery, threat modeling, scoped testing, evidence validation, risk prioritization, remediation, and final reporting.\nPrerequisites to explain briefly where needed: Modules 17–23 or equivalent advanced AI security experience; Python programming and test automation.\nRelated concepts: Advanced Defensive Recommendations, Future AI Security Research Areas.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 24 — Advanced AI Security Assessment & Research. Curriculum position 17 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Execute a complete assessment lifecycle against a controlled target.\n2. Correlate model, application, agent, data, and infrastructure findings.\n3. Deliver reproducible evidence and prioritized remediation.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Capstone: End-to-End AI Security Assessment. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Assess a deliberately scoped local application with a mock LLM, synthetic RAG corpus, two tenants, and read-only plus approval-gated tools; produce a final report and retest. Address this misconception or failure mode explicitly: Treating a capstone as a checklist completion exercise rather than a defensible assessment with explicit scope and evidence. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    }
  ]
});
