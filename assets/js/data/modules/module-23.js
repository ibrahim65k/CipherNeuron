/* CipherNeuron curriculum data — Module 23. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-23-ai-red-teaming-methodology",
  "number": "23",
  "title": "AI Red Teaming Methodology & Operations",
  "subtitle": "Plan and execute structured AI red-team campaigns that evaluate model behavior, safety boundaries, misuse, robustness, and system-level impact.",
  "description": "Develop an operational methodology for AI red teaming, from objectives and rules of engagement through scenario design, adversarial testing, evidence, risk prioritization, reporting, and defensive collaboration.",
  "difficulty": "Advanced",
  "estimatedTime": "12–16 hours",
  "prerequisites": [
    "Modules 17–22 or equivalent AI security knowledge",
    "Foundational penetration-testing methodology and professional rules of engagement",
    "Understanding of LLM, RAG, agentic, and multimodal architectures"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-19-llm-generative-ai-pentesting",
    "module-21-agentic-ai-tool-security",
    "module-22-multimodal-infrastructure-security",
    "module-24-advanced-ai-security-research"
  ],
  "objectives": [
    "Distinguish AI red teaming from AI penetration testing, security research, safety evaluation, and adversarial ML testing.",
    "Define objectives, scope, rules of engagement, threat scenarios, and safe stopping conditions.",
    "Design behavioral, misuse, robustness, multimodal, and agentic evaluations with meaningful coverage.",
    "Collect defensible evidence, prioritize findings, and collaborate on remediation and retesting."
  ],
  "partId": "part-04",
  "topics": [
    {
      "id": "topic-p04-23-ai-red-teaming-fundamentals",
      "title": "AI Red Teaming Fundamentals",
      "subtitle": "AI red teaming is a structured, scoped exercise that probes an AI system’s behavior and surrounding controls under adversarial scenarios to reveal security, safety, misuse, and reliability weaknesses.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI red teaming is a structured, scoped exercise that probes an AI system’s behavior and surrounding controls under adversarial scenarios to reveal security, safety, misuse, and reliability weaknesses.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 1 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Penetration Testing vs AI Red Teaming vs Related Disciplines",
        "AI Red Teaming Objectives and Success Criteria"
      ],
      "objectives": [
        "Define AI red teaming and its system-level scope.",
        "Explain why behavioral testing and traditional vulnerability testing are complementary.",
        "Identify the stakeholders and outcomes of a campaign."
      ],
      "keywords": [
        "ai red teaming fundamentals",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai penetration testing vs ai red teaming vs related disciplines",
        "ai red teaming objectives and success criteria",
        "define ai red teaming and its system-level scope.",
        "explain why behavioral testing and traditional vulnerability testing are complementary.",
        "identify the stakeholders and outcomes of a campaign."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Red Teaming Fundamentals\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI red teaming is a structured, scoped exercise that probes an AI system’s behavior and surrounding controls under adversarial scenarios to reveal security, safety, misuse, and reliability weaknesses.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Penetration Testing vs AI Red Teaming vs Related Disciplines, AI Red Teaming Objectives and Success Criteria.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 1 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define AI red teaming and its system-level scope.\n2. Explain why behavioral testing and traditional vulnerability testing are complementary.\n3. Identify the stakeholders and outcomes of a campaign.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Red Teaming Fundamentals. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Design a tabletop red-team exercise for a fictional enterprise copilot using synthetic documents and mock tools. Address this misconception or failure mode explicitly: Reducing AI red teaming to a list of jailbreak prompts or treating one successful response as a complete assessment. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-penetration-testing-vs-ai-red-teaming-vs-related-disciplines",
      "title": "AI Penetration Testing vs AI Red Teaming vs Related Disciplines",
      "subtitle": "AI penetration testing, AI red teaming, AI security research, AI safety evaluation, and adversarial ML testing overlap but differ in objectives, scope, evidence standards, and operational context.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI penetration testing, AI red teaming, AI security research, AI safety evaluation, and adversarial ML testing overlap but differ in objectives, scope, evidence standards, and operational context.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 2 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Red Teaming Fundamentals",
        "AI Red Teaming Objectives and Success Criteria",
        "Rules of Engagement for AI Red Teaming"
      ],
      "objectives": [
        "Compare the five disciplines by target, method, success criteria, and deliverables.",
        "Identify when a finding is a software vulnerability, behavioral risk, safety failure, or research result.",
        "Explain how a combined assessment can use multiple methods without conflating conclusions."
      ],
      "keywords": [
        "ai penetration testing vs ai red teaming vs related disciplines",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai red teaming fundamentals",
        "ai red teaming objectives and success criteria",
        "rules of engagement for ai red teaming",
        "compare the five disciplines by target, method, success criteria, and deliverables.",
        "identify when a finding is a software vulnerability, behavioral risk, safety failure, or research result.",
        "explain how a combined assessment can use multiple methods without conflating conclusions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Penetration Testing vs AI Red Teaming vs Related Disciplines\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI penetration testing, AI red teaming, AI security research, AI safety evaluation, and adversarial ML testing overlap but differ in objectives, scope, evidence standards, and operational context.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Red Teaming Fundamentals, AI Red Teaming Objectives and Success Criteria, Rules of Engagement for AI Red Teaming.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 2 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Compare the five disciplines by target, method, success criteria, and deliverables.\n2. Identify when a finding is a software vulnerability, behavioral risk, safety failure, or research result.\n3. Explain how a combined assessment can use multiple methods without conflating conclusions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Penetration Testing vs AI Red Teaming vs Related Disciplines. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Classify a set of synthetic test outcomes: unauthorized tool execution, harmful-content policy failure, model evasion, and reproducible inference API authorization bypass. Address this misconception or failure mode explicitly: Using the labels interchangeably and thereby obscuring what was tested and what was proven. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-red-teaming-objectives-and-success-criteria",
      "title": "AI Red Teaming Objectives and Success Criteria",
      "subtitle": "Campaign objectives define which properties are being evaluated—such as confidentiality, integrity, safety boundaries, misuse resistance, robustness, and tool containment—and how success is measured.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Campaign objectives define which properties are being evaluated—such as confidentiality, integrity, safety boundaries, misuse resistance, robustness, and tool containment—and how success is measured.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 3 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Red Teaming Fundamentals",
        "AI Penetration Testing vs AI Red Teaming vs Related Disciplines",
        "Rules of Engagement for AI Red Teaming",
        "Scoping and Target Selection"
      ],
      "objectives": [
        "Translate stakeholder concerns into measurable objectives.",
        "Define positive and negative controls and coverage goals.",
        "Separate test completion from system security assurance."
      ],
      "keywords": [
        "ai red teaming objectives and success criteria",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai red teaming fundamentals",
        "ai penetration testing vs ai red teaming vs related disciplines",
        "rules of engagement for ai red teaming",
        "scoping and target selection",
        "translate stakeholder concerns into measurable objectives.",
        "define positive and negative controls and coverage goals.",
        "separate test completion from system security assurance."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Red Teaming Objectives and Success Criteria\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Campaign objectives define which properties are being evaluated—such as confidentiality, integrity, safety boundaries, misuse resistance, robustness, and tool containment—and how success is measured.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Red Teaming Fundamentals, AI Penetration Testing vs AI Red Teaming vs Related Disciplines, Rules of Engagement for AI Red Teaming, Scoping and Target Selection.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 3 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Translate stakeholder concerns into measurable objectives.\n2. Define positive and negative controls and coverage goals.\n3. Separate test completion from system security assurance.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Red Teaming Objectives and Success Criteria. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create measurable objectives for a customer-support assistant that must protect synthetic customer records and never perform unapproved account changes. Address this misconception or failure mode explicitly: Using vague goals such as “test if the model is safe” without operational definitions. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-rules-of-engagement-for-ai-red-teaming",
      "title": "Rules of Engagement for AI Red Teaming",
      "subtitle": "Rules of engagement specify authorization, permitted techniques, target systems, data handling, operational limits, escalation contacts, and stop conditions for an AI red-team exercise.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Rules of engagement specify authorization, permitted techniques, target systems, data handling, operational limits, escalation contacts, and stop conditions for an AI red-team exercise.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 4 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Penetration Testing vs AI Red Teaming vs Related Disciplines",
        "AI Red Teaming Objectives and Success Criteria",
        "Scoping and Target Selection",
        "AI Threat Scenarios and Adversary Models"
      ],
      "objectives": [
        "Define written authorization and system ownership.",
        "Set boundaries for provider APIs, tools, data, and third-party services.",
        "Create stop, rollback, and incident escalation procedures."
      ],
      "keywords": [
        "rules of engagement for ai red teaming",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai penetration testing vs ai red teaming vs related disciplines",
        "ai red teaming objectives and success criteria",
        "scoping and target selection",
        "ai threat scenarios and adversary models",
        "define written authorization and system ownership.",
        "set boundaries for provider apis, tools, data, and third-party services.",
        "create stop, rollback, and incident escalation procedures."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Rules of Engagement for AI Red Teaming\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Rules of engagement specify authorization, permitted techniques, target systems, data handling, operational limits, escalation contacts, and stop conditions for an AI red-team exercise.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Penetration Testing vs AI Red Teaming vs Related Disciplines, AI Red Teaming Objectives and Success Criteria, Scoping and Target Selection, AI Threat Scenarios and Adversary Models.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 4 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define written authorization and system ownership.\n2. Set boundaries for provider APIs, tools, data, and third-party services.\n3. Create stop, rollback, and incident escalation procedures.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Rules of Engagement for AI Red Teaming. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Draft rules for a staging-only campaign with synthetic identities, bounded request rates, and no external tool actions. Address this misconception or failure mode explicitly: Assuming a test is authorized merely because an endpoint is publicly reachable. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-scoping-and-target-selection",
      "title": "Scoping and Target Selection",
      "subtitle": "AI red-team scoping identifies the models, interfaces, users, tools, datasets, modalities, environments, and dependencies included or excluded from an assessment.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI red-team scoping identifies the models, interfaces, users, tools, datasets, modalities, environments, and dependencies included or excluded from an assessment.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 5 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Red Teaming Objectives and Success Criteria",
        "Rules of Engagement for AI Red Teaming",
        "AI Threat Scenarios and Adversary Models",
        "Attack Scenario Design and Test Hypotheses"
      ],
      "objectives": [
        "Create a system inventory and dependency map.",
        "Prioritize targets by exposure, impact, and representativeness.",
        "Document exclusions, assumptions, and provider constraints."
      ],
      "keywords": [
        "scoping and target selection",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai red teaming objectives and success criteria",
        "rules of engagement for ai red teaming",
        "ai threat scenarios and adversary models",
        "attack scenario design and test hypotheses",
        "create a system inventory and dependency map.",
        "prioritize targets by exposure, impact, and representativeness.",
        "document exclusions, assumptions, and provider constraints."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Scoping and Target Selection\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI red-team scoping identifies the models, interfaces, users, tools, datasets, modalities, environments, and dependencies included or excluded from an assessment.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Red Teaming Objectives and Success Criteria, Rules of Engagement for AI Red Teaming, AI Threat Scenarios and Adversary Models, Attack Scenario Design and Test Hypotheses.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 5 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Create a system inventory and dependency map.\n2. Prioritize targets by exposure, impact, and representativeness.\n3. Document exclusions, assumptions, and provider constraints.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Scoping and Target Selection. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Scope a fictional RAG assistant across its web UI, API, vector store, model provider, and two mock integrations. Address this misconception or failure mode explicitly: Testing a model endpoint while silently excluding the application layers that determine real-world impact. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-threat-scenarios-and-adversary-models",
      "title": "AI Threat Scenarios and Adversary Models",
      "subtitle": "AI threat scenarios describe plausible adversary goals, access, capabilities, constraints, and system conditions that could lead to security or safety impact.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI threat scenarios describe plausible adversary goals, access, capabilities, constraints, and system conditions that could lead to security or safety impact.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 6 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Rules of Engagement for AI Red Teaming",
        "Scoping and Target Selection",
        "Attack Scenario Design and Test Hypotheses",
        "Adversarial Testing Methodology"
      ],
      "objectives": [
        "Build scenario narratives from assets and trust boundaries.",
        "Distinguish attacker-controlled inputs from privileged access.",
        "Map scenarios to testable hypotheses and expected evidence."
      ],
      "keywords": [
        "ai threat scenarios and adversary models",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "rules of engagement for ai red teaming",
        "scoping and target selection",
        "attack scenario design and test hypotheses",
        "adversarial testing methodology",
        "build scenario narratives from assets and trust boundaries.",
        "distinguish attacker-controlled inputs from privileged access.",
        "map scenarios to testable hypotheses and expected evidence."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Threat Scenarios and Adversary Models\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI threat scenarios describe plausible adversary goals, access, capabilities, constraints, and system conditions that could lead to security or safety impact.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Rules of Engagement for AI Red Teaming, Scoping and Target Selection, Attack Scenario Design and Test Hypotheses, Adversarial Testing Methodology.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 6 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Build scenario narratives from assets and trust boundaries.\n2. Distinguish attacker-controlled inputs from privileged access.\n3. Map scenarios to testable hypotheses and expected evidence.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Threat Scenarios and Adversary Models. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Develop scenarios for a malicious document contributor, an ordinary user, and a compromised tool integration. Address this misconception or failure mode explicitly: Writing attack stories that omit prerequisites, attacker capability, or measurable impact. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-attack-scenario-design-and-test-hypotheses",
      "title": "Attack Scenario Design and Test Hypotheses",
      "subtitle": "Scenario design turns a threat narrative into a controlled sequence of inputs, system states, expected observations, and success criteria.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Scenario design turns a threat narrative into a controlled sequence of inputs, system states, expected observations, and success criteria.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 7 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Scoping and Target Selection",
        "AI Threat Scenarios and Adversary Models",
        "Adversarial Testing Methodology",
        "AI Safety Testing"
      ],
      "objectives": [
        "Form falsifiable hypotheses.",
        "Design baseline, adversarial, and control cases.",
        "Avoid confounding variables and unsafe side effects."
      ],
      "keywords": [
        "attack scenario design and test hypotheses",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "scoping and target selection",
        "ai threat scenarios and adversary models",
        "adversarial testing methodology",
        "ai safety testing",
        "form falsifiable hypotheses.",
        "design baseline, adversarial, and control cases.",
        "avoid confounding variables and unsafe side effects."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Attack Scenario Design and Test Hypotheses\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Scenario design turns a threat narrative into a controlled sequence of inputs, system states, expected observations, and success criteria.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Scoping and Target Selection, AI Threat Scenarios and Adversary Models, Adversarial Testing Methodology, AI Safety Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 7 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Form falsifiable hypotheses.\n2. Design baseline, adversarial, and control cases.\n3. Avoid confounding variables and unsafe side effects.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Attack Scenario Design and Test Hypotheses. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create paired tests for direct and indirect prompt injection using harmless canary strings in a resettable local app. Address this misconception or failure mode explicitly: Changing several variables at once and attributing the result to the wrong mechanism. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-adversarial-testing-methodology",
      "title": "Adversarial Testing Methodology",
      "subtitle": "Adversarial testing probes how an AI system responds to intentionally challenging inputs while controlling scope, repeatability, and measurement.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Adversarial testing probes how an AI system responds to intentionally challenging inputs while controlling scope, repeatability, and measurement.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 8 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Threat Scenarios and Adversary Models",
        "Attack Scenario Design and Test Hypotheses",
        "AI Safety Testing",
        "AI Misuse Testing"
      ],
      "objectives": [
        "Select black-box, gray-box, or white-box methods appropriately.",
        "Vary one factor at a time and preserve test conditions.",
        "Measure response behavior and downstream system effects separately."
      ],
      "keywords": [
        "adversarial testing methodology",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai threat scenarios and adversary models",
        "attack scenario design and test hypotheses",
        "ai safety testing",
        "ai misuse testing",
        "select black-box, gray-box, or white-box methods appropriately.",
        "vary one factor at a time and preserve test conditions.",
        "measure response behavior and downstream system effects separately."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Adversarial Testing Methodology\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Adversarial testing probes how an AI system responds to intentionally challenging inputs while controlling scope, repeatability, and measurement.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Threat Scenarios and Adversary Models, Attack Scenario Design and Test Hypotheses, AI Safety Testing, AI Misuse Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 8 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Select black-box, gray-box, or white-box methods appropriately.\n2. Vary one factor at a time and preserve test conditions.\n3. Measure response behavior and downstream system effects separately.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Adversarial Testing Methodology. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Run a bounded test matrix against a local model wrapper using fixed prompts, seeded state, and a mock tool. Address this misconception or failure mode explicitly: Treating a single stochastic output as a stable result without repeated trials or configuration records. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-safety-testing",
      "title": "AI Safety Testing",
      "subtitle": "AI safety testing evaluates whether a system avoids defined harmful or disallowed behaviors under specified conditions, without assuming safety policies are equivalent to security controls.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI safety testing evaluates whether a system avoids defined harmful or disallowed behaviors under specified conditions, without assuming safety policies are equivalent to security controls.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 9 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Attack Scenario Design and Test Hypotheses",
        "Adversarial Testing Methodology",
        "AI Misuse Testing",
        "Robustness Testing"
      ],
      "objectives": [
        "Define the safety property and evaluation context.",
        "Use representative benign and adversarial controls.",
        "Interpret refusals, over-refusals, and unsafe completions with context."
      ],
      "keywords": [
        "ai safety testing",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "attack scenario design and test hypotheses",
        "adversarial testing methodology",
        "ai misuse testing",
        "robustness testing",
        "define the safety property and evaluation context.",
        "use representative benign and adversarial controls.",
        "interpret refusals, over-refusals, and unsafe completions with context."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Safety Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI safety testing evaluates whether a system avoids defined harmful or disallowed behaviors under specified conditions, without assuming safety policies are equivalent to security controls.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Attack Scenario Design and Test Hypotheses, Adversarial Testing Methodology, AI Misuse Testing, Robustness Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 9 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define the safety property and evaluation context.\n2. Use representative benign and adversarial controls.\n3. Interpret refusals, over-refusals, and unsafe completions with context.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Safety Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Evaluate a local educational assistant against a small synthetic policy test set and record both unsafe compliance and benign over-refusal. Address this misconception or failure mode explicitly: Equating refusal rate with overall safety or ignoring legitimate task utility. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-misuse-testing",
      "title": "AI Misuse Testing",
      "subtitle": "AI misuse testing examines whether system capabilities can be abused for unintended or harmful purposes, considering access, safeguards, context, and downstream impact.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI misuse testing examines whether system capabilities can be abused for unintended or harmful purposes, considering access, safeguards, context, and downstream impact.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 10 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Adversarial Testing Methodology",
        "AI Safety Testing",
        "Robustness Testing",
        "Behavioral Evaluation and Measurement"
      ],
      "objectives": [
        "Define misuse cases and abuse pathways.",
        "Distinguish model assistance from end-to-end harmful capability.",
        "Assess safeguards and escalation paths."
      ],
      "keywords": [
        "ai misuse testing",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "adversarial testing methodology",
        "ai safety testing",
        "robustness testing",
        "behavioral evaluation and measurement",
        "define misuse cases and abuse pathways.",
        "distinguish model assistance from end-to-end harmful capability.",
        "assess safeguards and escalation paths."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Misuse Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI misuse testing examines whether system capabilities can be abused for unintended or harmful purposes, considering access, safeguards, context, and downstream impact.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Adversarial Testing Methodology, AI Safety Testing, Robustness Testing, Behavioral Evaluation and Measurement.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 10 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define misuse cases and abuse pathways.\n2. Distinguish model assistance from end-to-end harmful capability.\n3. Assess safeguards and escalation paths.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Misuse Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Use a policy-approved synthetic scenario set to test whether a sandboxed assistant supports prohibited mock actions or redirects safely. Address this misconception or failure mode explicitly: Making claims about real-world harm from text output alone without assessing capability and context. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-robustness-testing",
      "title": "Robustness Testing",
      "subtitle": "Robustness testing measures whether AI behavior remains dependable under variations in inputs, context, formatting, noise, distribution, and operating conditions.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Robustness testing measures whether AI behavior remains dependable under variations in inputs, context, formatting, noise, distribution, and operating conditions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 11 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Safety Testing",
        "AI Misuse Testing",
        "Behavioral Evaluation and Measurement",
        "Multimodal AI Red Team Testing"
      ],
      "objectives": [
        "Define robustness dimensions and perturbation classes.",
        "Use baselines, repeated trials, and appropriate metrics.",
        "Distinguish robustness from security and accuracy."
      ],
      "keywords": [
        "robustness testing",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai safety testing",
        "ai misuse testing",
        "behavioral evaluation and measurement",
        "multimodal ai red team testing",
        "define robustness dimensions and perturbation classes.",
        "use baselines, repeated trials, and appropriate metrics.",
        "distinguish robustness from security and accuracy."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Robustness Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Robustness testing measures whether AI behavior remains dependable under variations in inputs, context, formatting, noise, distribution, and operating conditions.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Safety Testing, AI Misuse Testing, Behavioral Evaluation and Measurement, Multimodal AI Red Team Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 11 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define robustness dimensions and perturbation classes.\n2. Use baselines, repeated trials, and appropriate metrics.\n3. Distinguish robustness from security and accuracy.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Robustness Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Test a local classifier with controlled spelling, formatting, and distribution shifts while preserving a clean baseline set. Address this misconception or failure mode explicitly: Calling every accuracy drop a security vulnerability or ignoring distribution representativeness. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-behavioral-evaluation-and-measurement",
      "title": "Behavioral Evaluation and Measurement",
      "subtitle": "Behavioral evaluation uses defined rubrics, datasets, metrics, human review, and statistical methods to characterize model behavior across tasks and conditions.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Behavioral evaluation uses defined rubrics, datasets, metrics, human review, and statistical methods to characterize model behavior across tasks and conditions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 12 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "AI Misuse Testing",
        "Robustness Testing",
        "Multimodal AI Red Team Testing",
        "Agentic AI Red Team Testing"
      ],
      "objectives": [
        "Choose qualitative and quantitative measures aligned to objectives.",
        "Account for stochasticity, evaluator bias, and sampling limits.",
        "Report confidence, uncertainty, and coverage honestly."
      ],
      "keywords": [
        "behavioral evaluation and measurement",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai misuse testing",
        "robustness testing",
        "multimodal ai red team testing",
        "agentic ai red team testing",
        "choose qualitative and quantitative measures aligned to objectives.",
        "account for stochasticity, evaluator bias, and sampling limits.",
        "report confidence, uncertainty, and coverage honestly."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Behavioral Evaluation and Measurement\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Behavioral evaluation uses defined rubrics, datasets, metrics, human review, and statistical methods to characterize model behavior across tasks and conditions.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: AI Misuse Testing, Robustness Testing, Multimodal AI Red Team Testing, Agentic AI Red Team Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 12 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Choose qualitative and quantitative measures aligned to objectives.\n2. Account for stochasticity, evaluator bias, and sampling limits.\n3. Report confidence, uncertainty, and coverage honestly.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Behavioral Evaluation and Measurement. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Build a small rubric for tool refusal correctness, unauthorized-action prevention, and task completion on synthetic cases. Address this misconception or failure mode explicitly: Reporting a single aggregate score that hides severe failures or evaluator disagreement. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-multimodal-ai-red-team-testing",
      "title": "Multimodal AI Red Team Testing",
      "subtitle": "Multimodal red teaming tests interactions among image, audio, video, text, preprocessing, and model fusion, including modality-specific and cross-modal instruction paths.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Multimodal red teaming tests interactions among image, audio, video, text, preprocessing, and model fusion, including modality-specific and cross-modal instruction paths.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 13 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Robustness Testing",
        "Behavioral Evaluation and Measurement",
        "Agentic AI Red Team Testing",
        "Red Team Campaign Planning and Execution"
      ],
      "objectives": [
        "Design tests for each supported modality and cross-modal combinations.",
        "Record transformations and preprocessing versions.",
        "Assess both interpretation and downstream actions."
      ],
      "keywords": [
        "multimodal ai red team testing",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "robustness testing",
        "behavioral evaluation and measurement",
        "agentic ai red team testing",
        "red team campaign planning and execution",
        "design tests for each supported modality and cross-modal combinations.",
        "record transformations and preprocessing versions.",
        "assess both interpretation and downstream actions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Multimodal AI Red Team Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Multimodal red teaming tests interactions among image, audio, video, text, preprocessing, and model fusion, including modality-specific and cross-modal instruction paths.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Robustness Testing, Behavioral Evaluation and Measurement, Agentic AI Red Team Testing, Red Team Campaign Planning and Execution.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 13 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Design tests for each supported modality and cross-modal combinations.\n2. Record transformations and preprocessing versions.\n3. Assess both interpretation and downstream actions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Multimodal AI Red Team Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Evaluate a local multimodal assistant with synthetic images and audio containing benign conflicting context; no external services or real user media. Address this misconception or failure mode explicitly: Assuming text-only test coverage generalizes to image, audio, and video inputs. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-agentic-ai-red-team-testing",
      "title": "Agentic AI Red Team Testing",
      "subtitle": "Agentic AI red teaming evaluates plans, memory, tool selection, identity, delegated authority, and side effects across multi-step tasks.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Agentic AI red teaming evaluates plans, memory, tool selection, identity, delegated authority, and side effects across multi-step tasks.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 14 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Behavioral Evaluation and Measurement",
        "Multimodal AI Red Team Testing",
        "Red Team Campaign Planning and Execution",
        "Evidence Collection and Reproducibility"
      ],
      "objectives": [
        "Test agent state transitions and tool-side enforcement.",
        "Include indirect instructions and compromised mock tool outputs.",
        "Measure containment, approval, and recovery behavior."
      ],
      "keywords": [
        "agentic ai red team testing",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "behavioral evaluation and measurement",
        "multimodal ai red team testing",
        "red team campaign planning and execution",
        "evidence collection and reproducibility",
        "test agent state transitions and tool-side enforcement.",
        "include indirect instructions and compromised mock tool outputs.",
        "measure containment, approval, and recovery behavior."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agentic AI Red Team Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Agentic AI red teaming evaluates plans, memory, tool selection, identity, delegated authority, and side effects across multi-step tasks.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Behavioral Evaluation and Measurement, Multimodal AI Red Team Testing, Red Team Campaign Planning and Execution, Evidence Collection and Reproducibility.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 14 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Test agent state transitions and tool-side enforcement.\n2. Include indirect instructions and compromised mock tool outputs.\n3. Measure containment, approval, and recovery behavior.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agentic AI Red Team Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Run a controlled agent campaign with read-only mock tools and one approval-gated synthetic write action. Address this misconception or failure mode explicitly: Judging an agent only by its final natural-language answer rather than its full execution trace. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-red-team-campaign-planning-and-execution",
      "title": "Red Team Campaign Planning and Execution",
      "subtitle": "A red-team campaign organizes test waves, roles, environments, hypotheses, safety controls, checkpoints, and decision-making across an agreed period.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "A red-team campaign organizes test waves, roles, environments, hypotheses, safety controls, checkpoints, and decision-making across an agreed period.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 15 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Multimodal AI Red Team Testing",
        "Agentic AI Red Team Testing",
        "Evidence Collection and Reproducibility",
        "Findings Prioritization and AI Risk Assessment"
      ],
      "objectives": [
        "Build a campaign plan and test matrix.",
        "Coordinate testers, system owners, observers, and safety contacts.",
        "Manage test state, rate limits, and campaign stop criteria."
      ],
      "keywords": [
        "red team campaign planning and execution",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "multimodal ai red team testing",
        "agentic ai red team testing",
        "evidence collection and reproducibility",
        "findings prioritization and ai risk assessment",
        "build a campaign plan and test matrix.",
        "coordinate testers, system owners, observers, and safety contacts.",
        "manage test state, rate limits, and campaign stop criteria."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Red Team Campaign Planning and Execution\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: A red-team campaign organizes test waves, roles, environments, hypotheses, safety controls, checkpoints, and decision-making across an agreed period.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Multimodal AI Red Team Testing, Agentic AI Red Team Testing, Evidence Collection and Reproducibility, Findings Prioritization and AI Risk Assessment.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 15 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Build a campaign plan and test matrix.\n2. Coordinate testers, system owners, observers, and safety contacts.\n3. Manage test state, rate limits, and campaign stop criteria.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Red Team Campaign Planning and Execution. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Plan a two-day staging campaign with separate model-behavior and tool-security workstreams, daily checkpoints, and reset procedures. Address this misconception or failure mode explicitly: Running disconnected tests without shared objectives, state management, or operational coordination. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-evidence-collection-and-reproducibility",
      "title": "Evidence Collection and Reproducibility",
      "subtitle": "AI red-team evidence records the exact system version, configuration, inputs, outputs, tool traces, timing, evaluator method, and limitations needed to reproduce a result.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI red-team evidence records the exact system version, configuration, inputs, outputs, tool traces, timing, evaluator method, and limitations needed to reproduce a result.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 16 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Agentic AI Red Team Testing",
        "Red Team Campaign Planning and Execution",
        "Findings Prioritization and AI Risk Assessment",
        "AI Red Team Reporting and Defensive Collaboration"
      ],
      "objectives": [
        "Capture minimal sufficient evidence while protecting sensitive data.",
        "Preserve seeds, versions, prompts, tool logs, and state snapshots where possible.",
        "Separate raw observations from interpretation."
      ],
      "keywords": [
        "evidence collection and reproducibility",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agentic ai red team testing",
        "red team campaign planning and execution",
        "findings prioritization and ai risk assessment",
        "ai red team reporting and defensive collaboration",
        "capture minimal sufficient evidence while protecting sensitive data.",
        "preserve seeds, versions, prompts, tool logs, and state snapshots where possible.",
        "separate raw observations from interpretation."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Evidence Collection and Reproducibility\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI red-team evidence records the exact system version, configuration, inputs, outputs, tool traces, timing, evaluator method, and limitations needed to reproduce a result.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Agentic AI Red Team Testing, Red Team Campaign Planning and Execution, Findings Prioritization and AI Risk Assessment, AI Red Team Reporting and Defensive Collaboration.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 16 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Capture minimal sufficient evidence while protecting sensitive data.\n2. Preserve seeds, versions, prompts, tool logs, and state snapshots where possible.\n3. Separate raw observations from interpretation.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Evidence Collection and Reproducibility. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create an evidence bundle for a synthetic unauthorized tool-call attempt, including sanitized trace, environment manifest, and replay steps. Address this misconception or failure mode explicitly: Saving screenshots alone without enough context to reproduce a stochastic or stateful behavior. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-findings-prioritization-and-ai-risk-assessment",
      "title": "Findings Prioritization and AI Risk Assessment",
      "subtitle": "AI red-team findings are prioritized by demonstrated impact, exploitability, exposure, affected users, repeatability, and uncertainty—not by model surprise alone.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI red-team findings are prioritized by demonstrated impact, exploitability, exposure, affected users, repeatability, and uncertainty—not by model surprise alone.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 17 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Red Team Campaign Planning and Execution",
        "Evidence Collection and Reproducibility",
        "AI Red Team Reporting and Defensive Collaboration",
        "Remediation Validation and Campaign Closure"
      ],
      "objectives": [
        "Distinguish severity, likelihood, impact, and confidence.",
        "Consider cross-system consequences and affected populations.",
        "Explain residual risk and prioritization rationale."
      ],
      "keywords": [
        "findings prioritization and ai risk assessment",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "red team campaign planning and execution",
        "evidence collection and reproducibility",
        "ai red team reporting and defensive collaboration",
        "remediation validation and campaign closure",
        "distinguish severity, likelihood, impact, and confidence.",
        "consider cross-system consequences and affected populations.",
        "explain residual risk and prioritization rationale."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Findings Prioritization and AI Risk Assessment\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI red-team findings are prioritized by demonstrated impact, exploitability, exposure, affected users, repeatability, and uncertainty—not by model surprise alone.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Red Team Campaign Planning and Execution, Evidence Collection and Reproducibility, AI Red Team Reporting and Defensive Collaboration, Remediation Validation and Campaign Closure.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 17 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Distinguish severity, likelihood, impact, and confidence.\n2. Consider cross-system consequences and affected populations.\n3. Explain residual risk and prioritization rationale.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Findings Prioritization and AI Risk Assessment. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Rank hypothetical findings involving prompt leakage, tenant data exposure, over-refusal, and unapproved tool execution with documented assumptions. Address this misconception or failure mode explicitly: Using a generic CVSS score as the only measure for behavioral, safety, or systemic AI risks. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-ai-red-team-reporting-and-defensive-collaboration",
      "title": "AI Red Team Reporting and Defensive Collaboration",
      "subtitle": "AI red-team reporting communicates scope, methods, evidence, limitations, risk, and actionable recommendations to engineering, safety, security, and governance teams.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "AI red-team reporting communicates scope, methods, evidence, limitations, risk, and actionable recommendations to engineering, safety, security, and governance teams.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 18 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Evidence Collection and Reproducibility",
        "Findings Prioritization and AI Risk Assessment",
        "Remediation Validation and Campaign Closure"
      ],
      "objectives": [
        "Write concise reproducible findings with impact and remediation.",
        "Translate observations into control owners and regression tests.",
        "Collaborate without overstating certainty or blame."
      ],
      "keywords": [
        "ai red team reporting and defensive collaboration",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "evidence collection and reproducibility",
        "findings prioritization and ai risk assessment",
        "remediation validation and campaign closure",
        "write concise reproducible findings with impact and remediation.",
        "translate observations into control owners and regression tests.",
        "collaborate without overstating certainty or blame."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Red Team Reporting and Defensive Collaboration\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: AI red-team reporting communicates scope, methods, evidence, limitations, risk, and actionable recommendations to engineering, safety, security, and governance teams.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Evidence Collection and Reproducibility, Findings Prioritization and AI Risk Assessment, Remediation Validation and Campaign Closure.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 18 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Write concise reproducible findings with impact and remediation.\n2. Translate observations into control owners and regression tests.\n3. Collaborate without overstating certainty or blame.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Red Team Reporting and Defensive Collaboration. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Produce a mock executive summary and technical finding for a staging agent that attempted an unauthorized mock write action but was blocked server-side. Address this misconception or failure mode explicitly: Reporting a dramatic model transcript without explaining system impact, root cause, or remediation verification. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-23-remediation-validation-and-campaign-closure",
      "title": "Remediation Validation and Campaign Closure",
      "subtitle": "Campaign closure verifies fixes against original and regression cases, records residual risk, removes test artifacts, and communicates outcomes to stakeholders.",
      "category": "AI Red Teaming Methodology & Operations",
      "difficulty": "Advanced",
      "definition": "Campaign closure verifies fixes against original and regression cases, records residual risk, removes test artifacts, and communicates outcomes to stakeholders.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-23-ai-red-teaming-methodology",
      "moduleTitle": "AI Red Teaming Methodology & Operations",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 19 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Modules 17–22 or equivalent AI security knowledge",
        "Foundational penetration-testing methodology and professional rules of engagement"
      ],
      "relatedConcepts": [
        "Findings Prioritization and AI Risk Assessment",
        "AI Red Team Reporting and Defensive Collaboration"
      ],
      "objectives": [
        "Retest the original failure and nearby variants.",
        "Verify that mitigations do not create unacceptable regressions.",
        "Close access, revoke test credentials, and archive evidence safely."
      ],
      "keywords": [
        "remediation validation and campaign closure",
        "ai red teaming methodology & operations",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "findings prioritization and ai risk assessment",
        "ai red team reporting and defensive collaboration",
        "retest the original failure and nearby variants.",
        "verify that mitigations do not create unacceptable regressions.",
        "close access, revoke test credentials, and archive evidence safely."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Remediation Validation and Campaign Closure\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 23 — AI Red Teaming Methodology & Operations.\nTopic definition: Campaign closure verifies fixes against original and regression cases, records residual risk, removes test artifacts, and communicates outcomes to stakeholders.\nPrerequisites to explain briefly where needed: Modules 17–22 or equivalent AI security knowledge; Foundational penetration-testing methodology and professional rules of engagement.\nRelated concepts: Findings Prioritization and AI Risk Assessment, AI Red Team Reporting and Defensive Collaboration.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 23 — AI Red Teaming Methodology & Operations. Curriculum position 19 of 19. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Retest the original failure and nearby variants.\n2. Verify that mitigations do not create unacceptable regressions.\n3. Close access, revoke test credentials, and archive evidence safely.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Remediation Validation and Campaign Closure. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Retest a patched local tool authorization boundary using the same synthetic identities and an expanded negative test set. Address this misconception or failure mode explicitly: Declaring a fix successful because the original prompt no longer works, without testing the underlying control. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    }
  ]
});
