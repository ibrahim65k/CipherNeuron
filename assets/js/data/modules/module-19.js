/* CipherNeuron curriculum data — Module 19. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-19-llm-generative-ai-pentesting",
  "number": "19",
  "partId": "part-04",
  "title": "LLM & Generative AI Penetration Testing",
  "subtitle": "Assess LLM applications through scoped testing of prompts, data boundaries, outputs, identity, resource use, and business workflows.",
  "description": "Conduct evidence-driven security testing of LLM-powered applications, from prompt injection and information disclosure to authorization, abuse, denial of service, and remediation validation.",
  "difficulty": "Advanced",
  "estimatedTime": "14–18 hours",
  "prerequisites": [
    "Module 07 — Large Language Models & Generative AI",
    "Module 08 — Modern AI Systems & Architectures",
    "Module 17 — AI Security Fundamentals & Threat Modeling",
    "Web application and API penetration-testing fundamentals"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-20-rag-knowledge-security",
    "module-21-agentic-ai-tool-security"
  ],
  "objectives": [
    "Map LLM application components and trust boundaries before testing.",
    "Design safe tests for prompt manipulation, disclosure, output handling, and abuse.",
    "Validate impact with repeatable evidence and controlled test data.",
    "Verify remediation and communicate residual risk accurately."
  ],
  "topics": [
    {
      "id": "topic-p04-19-llm-application-attack-surface",
      "title": "LLM Application Attack Surface",
      "subtitle": "The LLM application attack surface includes prompts, conversation state, model gateways, retrieval, tools, outputs, user identity, APIs, logs, and resource controls.",
      "category": "LLM Application Security Testing",
      "difficulty": "Intermediate to Advanced",
      "definition": "The LLM application attack surface includes prompts, conversation state, model gateways, retrieval, tools, outputs, user identity, APIs, logs, and resource controls.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 1 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Module 07 — Large Language Models & Generative AI",
        "Module 08 — Modern AI Systems & Architectures"
      ],
      "relatedConcepts": [
        "Prompt Injection",
        "Direct Prompt Injection",
        "Indirect Prompt Injection"
      ],
      "objectives": [
        "Decompose an LLM application into testable components.",
        "Identify user-controlled and externally sourced inputs.",
        "Prioritize attack paths by privilege and data sensitivity."
      ],
      "keywords": [
        "llm application attack surface",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "prompt injection",
        "direct prompt injection",
        "indirect prompt injection",
        "decompose an llm application into testable components.",
        "identify user-controlled and externally sourced inputs.",
        "prioritize attack paths by privilege and data sensitivity."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"LLM Application Attack Surface\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: The LLM application attack surface includes prompts, conversation state, model gateways, retrieval, tools, outputs, user identity, APIs, logs, and resource controls.\nPrerequisites to bridge briefly: Module 07 — Large Language Models & Generative AI; Module 08 — Modern AI Systems & Architectures.\nRelated concepts: Prompt Injection, Direct Prompt Injection, Indirect Prompt Injection.\n\nLEARNING OBJECTIVES\n1. Decompose an LLM application into testable components.\n2. Identify user-controlled and externally sourced inputs.\n3. Prioritize attack paths by privilege and data sensitivity.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of LLM Application Attack Surface.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create an assessment map for a support assistant with file upload, search, and a ticket-creation tool.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Testing prompt text alone while overlooking the application features surrounding the model.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-prompt-injection",
      "title": "Prompt Injection",
      "subtitle": "Prompt injection occurs when untrusted input influences an LLM to disregard intended task boundaries or follow attacker-supplied instructions.",
      "category": "LLM Application Security Testing",
      "difficulty": "Intermediate to Advanced",
      "definition": "Prompt injection occurs when untrusted input influences an LLM to disregard intended task boundaries or follow attacker-supplied instructions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 2 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Application Attack Surface",
        "Direct Prompt Injection",
        "Indirect Prompt Injection",
        "Jailbreaking and Safety-Control Bypass"
      ],
      "objectives": [
        "Explain instruction hierarchy and context blending.",
        "Distinguish model behavior from application authorization.",
        "Design harmless, observable injection tests."
      ],
      "keywords": [
        "prompt injection",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm application attack surface",
        "direct prompt injection",
        "indirect prompt injection",
        "jailbreaking and safety-control bypass",
        "explain instruction hierarchy and context blending.",
        "distinguish model behavior from application authorization.",
        "design harmless, observable injection tests."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Prompt Injection\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Prompt injection occurs when untrusted input influences an LLM to disregard intended task boundaries or follow attacker-supplied instructions.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Application Attack Surface, Direct Prompt Injection, Indirect Prompt Injection, Jailbreaking and Safety-Control Bypass.\n\nLEARNING OBJECTIVES\n1. Explain instruction hierarchy and context blending.\n2. Distinguish model behavior from application authorization.\n3. Design harmless, observable injection tests.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Prompt Injection.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a local mock assistant with synthetic documents to test whether quoted untrusted text changes task behavior.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming a single system prompt can reliably separate trusted instructions from arbitrary content.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-direct-prompt-injection",
      "title": "Direct Prompt Injection",
      "subtitle": "Direct prompt injection places adversarial instructions in content supplied directly by the user to manipulate the model response or downstream behavior.",
      "category": "LLM Application Security Testing",
      "difficulty": "Intermediate to Advanced",
      "definition": "Direct prompt injection places adversarial instructions in content supplied directly by the user to manipulate the model response or downstream behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 3 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Application Attack Surface",
        "Prompt Injection",
        "Indirect Prompt Injection",
        "Jailbreaking and Safety-Control Bypass",
        "System Prompt and Hidden Context Exposure"
      ],
      "objectives": [
        "Identify direct user-controlled prompt surfaces.",
        "Test instruction conflict and boundary handling.",
        "Record model and application responses separately."
      ],
      "keywords": [
        "direct prompt injection",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm application attack surface",
        "prompt injection",
        "indirect prompt injection",
        "jailbreaking and safety-control bypass",
        "system prompt and hidden context exposure",
        "identify direct user-controlled prompt surfaces.",
        "test instruction conflict and boundary handling.",
        "record model and application responses separately."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Direct Prompt Injection\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Direct prompt injection places adversarial instructions in content supplied directly by the user to manipulate the model response or downstream behavior.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Application Attack Surface, Prompt Injection, Indirect Prompt Injection, Jailbreaking and Safety-Control Bypass, System Prompt and Hidden Context Exposure.\n\nLEARNING OBJECTIVES\n1. Identify direct user-controlled prompt surfaces.\n2. Test instruction conflict and boundary handling.\n3. Record model and application responses separately.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Direct Prompt Injection.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Test a staging chatbot using harmless adversarial strings and a fixed expected-behavior rubric.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating refusal or non-refusal as the only security outcome rather than measuring actual data and action boundaries.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-indirect-prompt-injection",
      "title": "Indirect Prompt Injection",
      "subtitle": "Indirect prompt injection places adversarial instructions in content the model consumes indirectly, such as retrieved documents, web pages, emails, or uploaded files.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Indirect prompt injection places adversarial instructions in content the model consumes indirectly, such as retrieved documents, web pages, emails, or uploaded files.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 4 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Application Attack Surface",
        "Prompt Injection",
        "Direct Prompt Injection",
        "Jailbreaking and Safety-Control Bypass",
        "System Prompt and Hidden Context Exposure"
      ],
      "objectives": [
        "Trace untrusted content ingestion paths.",
        "Explain retrieval and tool-mediated context injection.",
        "Test isolation between content and executable instructions."
      ],
      "keywords": [
        "indirect prompt injection",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm application attack surface",
        "prompt injection",
        "direct prompt injection",
        "jailbreaking and safety-control bypass",
        "system prompt and hidden context exposure",
        "trace untrusted content ingestion paths.",
        "explain retrieval and tool-mediated context injection.",
        "test isolation between content and executable instructions."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Indirect Prompt Injection\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Indirect prompt injection places adversarial instructions in content the model consumes indirectly, such as retrieved documents, web pages, emails, or uploaded files.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Application Attack Surface, Prompt Injection, Direct Prompt Injection, Jailbreaking and Safety-Control Bypass, System Prompt and Hidden Context Exposure.\n\nLEARNING OBJECTIVES\n1. Trace untrusted content ingestion paths.\n2. Explain retrieval and tool-mediated context injection.\n3. Test isolation between content and executable instructions.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Indirect Prompt Injection.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Seed a synthetic knowledge base with clearly marked test content and observe whether retrieved text alters assistant behavior.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Trusting retrieved material because it came from an internal index or familiar source.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-jailbreaking-and-safety-control-bypass",
      "title": "Jailbreaking and Safety-Control Bypass",
      "subtitle": "Jailbreaking attempts to elicit behavior that application or model safety controls are intended to prevent, often through role, context, or instruction manipulation.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Jailbreaking attempts to elicit behavior that application or model safety controls are intended to prevent, often through role, context, or instruction manipulation.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 5 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Prompt Injection",
        "Direct Prompt Injection",
        "Indirect Prompt Injection",
        "System Prompt and Hidden Context Exposure",
        "Sensitive Information Disclosure"
      ],
      "objectives": [
        "Distinguish policy bypass from exploitable system impact.",
        "Build a controlled test taxonomy.",
        "Assess consistency across sessions and model configurations."
      ],
      "keywords": [
        "jailbreaking and safety-control bypass",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "prompt injection",
        "direct prompt injection",
        "indirect prompt injection",
        "system prompt and hidden context exposure",
        "sensitive information disclosure",
        "distinguish policy bypass from exploitable system impact.",
        "build a controlled test taxonomy.",
        "assess consistency across sessions and model configurations."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Jailbreaking and Safety-Control Bypass\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Jailbreaking attempts to elicit behavior that application or model safety controls are intended to prevent, often through role, context, or instruction manipulation.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Prompt Injection, Direct Prompt Injection, Indirect Prompt Injection, System Prompt and Hidden Context Exposure, Sensitive Information Disclosure.\n\nLEARNING OBJECTIVES\n1. Distinguish policy bypass from exploitable system impact.\n2. Build a controlled test taxonomy.\n3. Assess consistency across sessions and model configurations.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Jailbreaking and Safety-Control Bypass.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Evaluate a local test model against a benign policy-compliance suite with non-harmful prompts.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Equating unusual or disallowed text with a security vulnerability without a defined impact.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-system-prompt-and-hidden-context-exposure",
      "title": "System Prompt and Hidden Context Exposure",
      "subtitle": "System prompt exposure occurs when private configuration or hidden context is revealed through model behavior, debug interfaces, or application implementation flaws.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "System prompt exposure occurs when private configuration or hidden context is revealed through model behavior, debug interfaces, or application implementation flaws.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 6 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Direct Prompt Injection",
        "Indirect Prompt Injection",
        "Jailbreaking and Safety-Control Bypass",
        "Sensitive Information Disclosure",
        "Insecure Output Handling"
      ],
      "objectives": [
        "Identify what is actually secret and why.",
        "Test prompt disclosure without relying on model claims.",
        "Inspect server-side configuration and logging where authorized."
      ],
      "keywords": [
        "system prompt and hidden context exposure",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "direct prompt injection",
        "indirect prompt injection",
        "jailbreaking and safety-control bypass",
        "sensitive information disclosure",
        "insecure output handling",
        "identify what is actually secret and why.",
        "test prompt disclosure without relying on model claims.",
        "inspect server-side configuration and logging where authorized."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"System Prompt and Hidden Context Exposure\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: System prompt exposure occurs when private configuration or hidden context is revealed through model behavior, debug interfaces, or application implementation flaws.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Direct Prompt Injection, Indirect Prompt Injection, Jailbreaking and Safety-Control Bypass, Sensitive Information Disclosure, Insecure Output Handling.\n\nLEARNING OBJECTIVES\n1. Identify what is actually secret and why.\n2. Test prompt disclosure without relying on model claims.\n3. Inspect server-side configuration and logging where authorized.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of System Prompt and Hidden Context Exposure.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a deliberately synthetic system prompt in a local app and distinguish paraphrase, inference, and verified disclosure.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming a system prompt is a secure secret store or that a model statement proves exact disclosure.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-sensitive-information-disclosure",
      "title": "Sensitive Information Disclosure",
      "subtitle": "Sensitive information disclosure occurs when an LLM application reveals data beyond the requesting identity’s authorized scope.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Sensitive information disclosure occurs when an LLM application reveals data beyond the requesting identity’s authorized scope.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 7 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Indirect Prompt Injection",
        "Jailbreaking and Safety-Control Bypass",
        "System Prompt and Hidden Context Exposure",
        "Insecure Output Handling",
        "Improper Input Validation and Context Handling"
      ],
      "objectives": [
        "Identify sensitive data classes and access rules.",
        "Trace sources such as context, retrieval, memory, and logs.",
        "Validate leakage using synthetic canary records."
      ],
      "keywords": [
        "sensitive information disclosure",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "indirect prompt injection",
        "jailbreaking and safety-control bypass",
        "system prompt and hidden context exposure",
        "insecure output handling",
        "improper input validation and context handling",
        "identify sensitive data classes and access rules.",
        "trace sources such as context, retrieval, memory, and logs.",
        "validate leakage using synthetic canary records."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Sensitive Information Disclosure\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Sensitive information disclosure occurs when an LLM application reveals data beyond the requesting identity’s authorized scope.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Indirect Prompt Injection, Jailbreaking and Safety-Control Bypass, System Prompt and Hidden Context Exposure, Insecure Output Handling, Improper Input Validation and Context Handling.\n\nLEARNING OBJECTIVES\n1. Identify sensitive data classes and access rules.\n2. Trace sources such as context, retrieval, memory, and logs.\n3. Validate leakage using synthetic canary records.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Sensitive Information Disclosure.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create two synthetic users and test whether one can elicit the other user’s seeded canary data.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Using real personal data during testing or failing to distinguish memorized output from application data leakage.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-insecure-output-handling",
      "title": "Insecure Output Handling",
      "subtitle": "Insecure output handling occurs when generated content is trusted or passed to downstream components without context-appropriate validation, encoding, or authorization.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Insecure output handling occurs when generated content is trusted or passed to downstream components without context-appropriate validation, encoding, or authorization.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 8 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Jailbreaking and Safety-Control Bypass",
        "System Prompt and Hidden Context Exposure",
        "Sensitive Information Disclosure",
        "Improper Input Validation and Context Handling",
        "Model Denial of Service"
      ],
      "objectives": [
        "Trace model output into renderers, parsers, tools, and interpreters.",
        "Explain context-specific encoding and schema validation.",
        "Test safe handling with inert payload markers."
      ],
      "keywords": [
        "insecure output handling",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "jailbreaking and safety-control bypass",
        "system prompt and hidden context exposure",
        "sensitive information disclosure",
        "improper input validation and context handling",
        "model denial of service",
        "trace model output into renderers, parsers, tools, and interpreters.",
        "explain context-specific encoding and schema validation.",
        "test safe handling with inert payload markers."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Insecure Output Handling\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Insecure output handling occurs when generated content is trusted or passed to downstream components without context-appropriate validation, encoding, or authorization.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Jailbreaking and Safety-Control Bypass, System Prompt and Hidden Context Exposure, Sensitive Information Disclosure, Improper Input Validation and Context Handling, Model Denial of Service.\n\nLEARNING OBJECTIVES\n1. Trace model output into renderers, parsers, tools, and interpreters.\n2. Explain context-specific encoding and schema validation.\n3. Test safe handling with inert payload markers.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Insecure Output Handling.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Review a staging app that renders Markdown or consumes structured model output and verify safe encoding and schema checks.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating valid JSON or well-formed HTML as safe or authorized.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-improper-input-validation-and-context-handling",
      "title": "Improper Input Validation and Context Handling",
      "subtitle": "Improper input validation allows malformed, oversized, ambiguous, or adversarial inputs to cross application boundaries and affect model or tool behavior.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Improper input validation allows malformed, oversized, ambiguous, or adversarial inputs to cross application boundaries and affect model or tool behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 9 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "System Prompt and Hidden Context Exposure",
        "Sensitive Information Disclosure",
        "Insecure Output Handling",
        "Model Denial of Service",
        "Model Abuse and Unbounded Consumption"
      ],
      "objectives": [
        "Identify validation points before prompt construction and tool invocation.",
        "Define size, type, encoding, and semantic constraints.",
        "Test normalization and parser edge cases safely."
      ],
      "keywords": [
        "improper input validation and context handling",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "system prompt and hidden context exposure",
        "sensitive information disclosure",
        "insecure output handling",
        "model denial of service",
        "model abuse and unbounded consumption",
        "identify validation points before prompt construction and tool invocation.",
        "define size, type, encoding, and semantic constraints.",
        "test normalization and parser edge cases safely."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Improper Input Validation and Context Handling\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Improper input validation allows malformed, oversized, ambiguous, or adversarial inputs to cross application boundaries and affect model or tool behavior.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: System Prompt and Hidden Context Exposure, Sensitive Information Disclosure, Insecure Output Handling, Model Denial of Service, Model Abuse and Unbounded Consumption.\n\nLEARNING OBJECTIVES\n1. Identify validation points before prompt construction and tool invocation.\n2. Define size, type, encoding, and semantic constraints.\n3. Test normalization and parser edge cases safely.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Improper Input Validation and Context Handling.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a synthetic input corpus to test upload metadata, message length, encoding, and structured fields.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Relying on prompt instructions instead of deterministic application-side validation.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-model-denial-of-service",
      "title": "Model Denial of Service",
      "subtitle": "Model denial of service targets inference or surrounding services with workloads that exhaust compute, memory, concurrency, or dependency capacity.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Model denial of service targets inference or surrounding services with workloads that exhaust compute, memory, concurrency, or dependency capacity.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 10 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Sensitive Information Disclosure",
        "Insecure Output Handling",
        "Improper Input Validation and Context Handling",
        "Model Abuse and Unbounded Consumption",
        "LLM Application Authentication"
      ],
      "objectives": [
        "Identify expensive inference and preprocessing paths.",
        "Understand token, context, concurrency, and queue costs.",
        "Design bounded load tests in a staging environment."
      ],
      "keywords": [
        "model denial of service",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "sensitive information disclosure",
        "insecure output handling",
        "improper input validation and context handling",
        "model abuse and unbounded consumption",
        "llm application authentication",
        "identify expensive inference and preprocessing paths.",
        "understand token, context, concurrency, and queue costs.",
        "design bounded load tests in a staging environment."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model Denial of Service\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Model denial of service targets inference or surrounding services with workloads that exhaust compute, memory, concurrency, or dependency capacity.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Sensitive Information Disclosure, Insecure Output Handling, Improper Input Validation and Context Handling, Model Abuse and Unbounded Consumption, LLM Application Authentication.\n\nLEARNING OBJECTIVES\n1. Identify expensive inference and preprocessing paths.\n2. Understand token, context, concurrency, and queue costs.\n3. Design bounded load tests in a staging environment.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model Denial of Service.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Measure response and resource behavior with a small approved load profile against a local model endpoint.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Running uncontrolled stress tests or attributing every latency spike to an adversarial condition.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-model-abuse-and-unbounded-consumption",
      "title": "Model Abuse and Unbounded Consumption",
      "subtitle": "Model abuse and unbounded consumption exploit weak quotas, metering, or workflow controls to drive excessive usage, cost, or unintended model capabilities.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Model abuse and unbounded consumption exploit weak quotas, metering, or workflow controls to drive excessive usage, cost, or unintended model capabilities.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 11 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Insecure Output Handling",
        "Improper Input Validation and Context Handling",
        "Model Denial of Service",
        "LLM Application Authentication",
        "LLM Application Authorization"
      ],
      "objectives": [
        "Map billable and resource-consuming operations.",
        "Assess quotas, tenant limits, and retry behavior.",
        "Design cost-aware abuse tests."
      ],
      "keywords": [
        "model abuse and unbounded consumption",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "insecure output handling",
        "improper input validation and context handling",
        "model denial of service",
        "llm application authentication",
        "llm application authorization",
        "map billable and resource-consuming operations.",
        "assess quotas, tenant limits, and retry behavior.",
        "design cost-aware abuse tests."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model Abuse and Unbounded Consumption\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Model abuse and unbounded consumption exploit weak quotas, metering, or workflow controls to drive excessive usage, cost, or unintended model capabilities.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Insecure Output Handling, Improper Input Validation and Context Handling, Model Denial of Service, LLM Application Authentication, LLM Application Authorization.\n\nLEARNING OBJECTIVES\n1. Map billable and resource-consuming operations.\n2. Assess quotas, tenant limits, and retry behavior.\n3. Design cost-aware abuse tests.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model Abuse and Unbounded Consumption.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Simulate per-user quotas and retry loops using a mock inference service and synthetic billing counters.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Ignoring indirect costs from retrieval, tools, retries, and long-running agent workflows.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-llm-application-authentication",
      "title": "LLM Application Authentication",
      "subtitle": "Authentication establishes which user, service, or workload is making an LLM application request and how that identity is verified.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Authentication establishes which user, service, or workload is making an LLM application request and how that identity is verified.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 12 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Improper Input Validation and Context Handling",
        "Model Denial of Service",
        "Model Abuse and Unbounded Consumption",
        "LLM Application Authorization",
        "LLM Data Leakage and Cross-Context Isolation"
      ],
      "objectives": [
        "Trace identity from client to model gateway and tools.",
        "Review token handling and service identities.",
        "Identify anonymous and delegated access paths."
      ],
      "keywords": [
        "llm application authentication",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "improper input validation and context handling",
        "model denial of service",
        "model abuse and unbounded consumption",
        "llm application authorization",
        "llm data leakage and cross-context isolation",
        "trace identity from client to model gateway and tools.",
        "review token handling and service identities.",
        "identify anonymous and delegated access paths."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"LLM Application Authentication\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Authentication establishes which user, service, or workload is making an LLM application request and how that identity is verified.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Improper Input Validation and Context Handling, Model Denial of Service, Model Abuse and Unbounded Consumption, LLM Application Authorization, LLM Data Leakage and Cross-Context Isolation.\n\nLEARNING OBJECTIVES\n1. Trace identity from client to model gateway and tools.\n2. Review token handling and service identities.\n3. Identify anonymous and delegated access paths.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of LLM Application Authentication.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Test login and API-token behavior in an authorized staging app using dedicated test accounts.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming authentication at the front end automatically protects internal model and connector endpoints.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-llm-application-authorization",
      "title": "LLM Application Authorization",
      "subtitle": "Authorization determines which data, model features, tools, and actions an authenticated principal may access within an LLM application.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Authorization determines which data, model features, tools, and actions an authenticated principal may access within an LLM application.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 13 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Model Denial of Service",
        "Model Abuse and Unbounded Consumption",
        "LLM Application Authentication",
        "LLM Data Leakage and Cross-Context Isolation",
        "LLM Vulnerability Discovery and Test Design"
      ],
      "objectives": [
        "Model role, tenant, resource, and action permissions.",
        "Test server-side enforcement across retrieval and tools.",
        "Distinguish prompt-level restrictions from access-control decisions."
      ],
      "keywords": [
        "llm application authorization",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model denial of service",
        "model abuse and unbounded consumption",
        "llm application authentication",
        "llm data leakage and cross-context isolation",
        "llm vulnerability discovery and test design",
        "model role, tenant, resource, and action permissions.",
        "test server-side enforcement across retrieval and tools.",
        "distinguish prompt-level restrictions from access-control decisions."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"LLM Application Authorization\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Authorization determines which data, model features, tools, and actions an authenticated principal may access within an LLM application.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Model Denial of Service, Model Abuse and Unbounded Consumption, LLM Application Authentication, LLM Data Leakage and Cross-Context Isolation, LLM Vulnerability Discovery and Test Design.\n\nLEARNING OBJECTIVES\n1. Model role, tenant, resource, and action permissions.\n2. Test server-side enforcement across retrieval and tools.\n3. Distinguish prompt-level restrictions from access-control decisions.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of LLM Application Authorization.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a role/tenant matrix and test permitted and denied actions against synthetic resources.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Relying on the LLM to decide whether a user is allowed to access a resource.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-llm-data-leakage-and-cross-context-isolation",
      "title": "LLM Data Leakage and Cross-Context Isolation",
      "subtitle": "LLM data leakage can occur when conversation history, caches, retrieval results, telemetry, or shared context crosses user, tenant, or workflow boundaries.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "LLM data leakage can occur when conversation history, caches, retrieval results, telemetry, or shared context crosses user, tenant, or workflow boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 14 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "Model Abuse and Unbounded Consumption",
        "LLM Application Authentication",
        "LLM Application Authorization",
        "LLM Vulnerability Discovery and Test Design",
        "Exploit Validation and Evidence Collection"
      ],
      "objectives": [
        "Identify isolation boundaries and shared state.",
        "Test cache keys, session binding, and retrieval filters.",
        "Use canary data to prove or disprove cross-context exposure."
      ],
      "keywords": [
        "llm data leakage and cross-context isolation",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model abuse and unbounded consumption",
        "llm application authentication",
        "llm application authorization",
        "llm vulnerability discovery and test design",
        "exploit validation and evidence collection",
        "identify isolation boundaries and shared state.",
        "test cache keys, session binding, and retrieval filters.",
        "use canary data to prove or disprove cross-context exposure."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"LLM Data Leakage and Cross-Context Isolation\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: LLM data leakage can occur when conversation history, caches, retrieval results, telemetry, or shared context crosses user, tenant, or workflow boundaries.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: Model Abuse and Unbounded Consumption, LLM Application Authentication, LLM Application Authorization, LLM Vulnerability Discovery and Test Design, Exploit Validation and Evidence Collection.\n\nLEARNING OBJECTIVES\n1. Identify isolation boundaries and shared state.\n2. Test cache keys, session binding, and retrieval filters.\n3. Use canary data to prove or disprove cross-context exposure.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of LLM Data Leakage and Cross-Context Isolation.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Run parallel synthetic sessions and verify that prompts, outputs, and retrieved documents remain isolated.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Testing only sequential chats while missing race conditions and shared-cache behavior.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-llm-vulnerability-discovery-and-test-design",
      "title": "LLM Vulnerability Discovery and Test Design",
      "subtitle": "LLM vulnerability discovery turns architecture and threat hypotheses into repeatable tests with defined preconditions, expected outcomes, and impact criteria.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "LLM vulnerability discovery turns architecture and threat hypotheses into repeatable tests with defined preconditions, expected outcomes, and impact criteria.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 15 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Application Authentication",
        "LLM Application Authorization",
        "LLM Data Leakage and Cross-Context Isolation",
        "Exploit Validation and Evidence Collection",
        "Remediation Testing and Regression"
      ],
      "objectives": [
        "Build a test matrix from OWASP and system-specific threats.",
        "Select black-box and gray-box evidence sources.",
        "Prioritize tests by reachable impact."
      ],
      "keywords": [
        "llm vulnerability discovery and test design",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm application authentication",
        "llm application authorization",
        "llm data leakage and cross-context isolation",
        "exploit validation and evidence collection",
        "remediation testing and regression",
        "build a test matrix from owasp and system-specific threats.",
        "select black-box and gray-box evidence sources.",
        "prioritize tests by reachable impact."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"LLM Vulnerability Discovery and Test Design\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: LLM vulnerability discovery turns architecture and threat hypotheses into repeatable tests with defined preconditions, expected outcomes, and impact criteria.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Application Authentication, LLM Application Authorization, LLM Data Leakage and Cross-Context Isolation, Exploit Validation and Evidence Collection, Remediation Testing and Regression.\n\nLEARNING OBJECTIVES\n1. Build a test matrix from OWASP and system-specific threats.\n2. Select black-box and gray-box evidence sources.\n3. Prioritize tests by reachable impact.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of LLM Vulnerability Discovery and Test Design.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Write a scoped test plan for prompt injection, output handling, tenant isolation, and cost abuse.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Copying generic payload lists without adapting them to architecture, permissions, and business context.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-exploit-validation-and-evidence-collection",
      "title": "Exploit Validation and Evidence Collection",
      "subtitle": "Exploit validation demonstrates that a suspected weakness is reproducible and produces a meaningful security impact under documented conditions.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Exploit validation demonstrates that a suspected weakness is reproducible and produces a meaningful security impact under documented conditions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 16 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Application Authorization",
        "LLM Data Leakage and Cross-Context Isolation",
        "LLM Vulnerability Discovery and Test Design",
        "Remediation Testing and Regression",
        "OWASP and MITRE References for LLM Testing"
      ],
      "objectives": [
        "Separate observation, hypothesis, and confirmed impact.",
        "Capture minimal reproducible evidence and timestamps.",
        "Protect sensitive data and maintain chain of custody."
      ],
      "keywords": [
        "exploit validation and evidence collection",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm application authorization",
        "llm data leakage and cross-context isolation",
        "llm vulnerability discovery and test design",
        "remediation testing and regression",
        "owasp and mitre references for llm testing",
        "separate observation, hypothesis, and confirmed impact.",
        "capture minimal reproducible evidence and timestamps.",
        "protect sensitive data and maintain chain of custody."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Exploit Validation and Evidence Collection\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Exploit validation demonstrates that a suspected weakness is reproducible and produces a meaningful security impact under documented conditions.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Application Authorization, LLM Data Leakage and Cross-Context Isolation, LLM Vulnerability Discovery and Test Design, Remediation Testing and Regression, OWASP and MITRE References for LLM Testing.\n\nLEARNING OBJECTIVES\n1. Separate observation, hypothesis, and confirmed impact.\n2. Capture minimal reproducible evidence and timestamps.\n3. Protect sensitive data and maintain chain of custody.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Exploit Validation and Evidence Collection.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Validate a synthetic cross-tenant canary disclosure in staging and produce a redacted evidence record.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Reporting model speculation, screenshots without context, or unrepeatable behavior as confirmed exploitation.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-remediation-testing-and-regression",
      "title": "Remediation Testing and Regression",
      "subtitle": "Remediation testing verifies that a control addresses the root cause without introducing bypasses or breaking legitimate application behavior.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "Remediation testing verifies that a control addresses the root cause without introducing bypasses or breaking legitimate application behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 17 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Data Leakage and Cross-Context Isolation",
        "LLM Vulnerability Discovery and Test Design",
        "Exploit Validation and Evidence Collection",
        "OWASP and MITRE References for LLM Testing"
      ],
      "objectives": [
        "Translate findings into testable security requirements.",
        "Retest original and adjacent attack paths.",
        "Measure residual risk and regression behavior."
      ],
      "keywords": [
        "remediation testing and regression",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm data leakage and cross-context isolation",
        "llm vulnerability discovery and test design",
        "exploit validation and evidence collection",
        "owasp and mitre references for llm testing",
        "translate findings into testable security requirements.",
        "retest original and adjacent attack paths.",
        "measure residual risk and regression behavior."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Remediation Testing and Regression\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: Remediation testing verifies that a control addresses the root cause without introducing bypasses or breaking legitimate application behavior.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Data Leakage and Cross-Context Isolation, LLM Vulnerability Discovery and Test Design, Exploit Validation and Evidence Collection, OWASP and MITRE References for LLM Testing.\n\nLEARNING OBJECTIVES\n1. Translate findings into testable security requirements.\n2. Retest original and adjacent attack paths.\n3. Measure residual risk and regression behavior.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Remediation Testing and Regression.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Retest a patched prompt-injection boundary and confirm tool authorization remains server-enforced.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Accepting a changed prompt or one passing test as proof that the vulnerability is fully fixed.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-19-owasp-and-mitre-references-for-llm-testing",
      "title": "OWASP and MITRE References for LLM Testing",
      "subtitle": "OWASP GenAI LLM Top 10 organizes application risk guidance, OWASP Agentic guidance covers autonomous application risks, and MITRE ATLAS catalogs adversary techniques involving AI.",
      "category": "LLM Application Security Testing",
      "difficulty": "Advanced",
      "definition": "OWASP GenAI LLM Top 10 organizes application risk guidance, OWASP Agentic guidance covers autonomous application risks, and MITRE ATLAS catalogs adversary techniques involving AI.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-19-llm-generative-ai-pentesting",
      "moduleTitle": "LLM & Generative AI Penetration Testing",
      "position": "Part 04 establishes the advanced AI security track. Module 19 develops llm & generative ai penetration testing; this topic is sequence item 18 of 18. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "LLM Application Attack Surface",
        "Module 17 — AI threat modeling",
        "Relevant web/API security fundamentals"
      ],
      "relatedConcepts": [
        "LLM Vulnerability Discovery and Test Design",
        "Exploit Validation and Evidence Collection",
        "Remediation Testing and Regression"
      ],
      "objectives": [
        "Use current edition names and dates accurately.",
        "Map test cases to relevant risk guidance and ATLAS techniques.",
        "Avoid treating framework mapping as vulnerability proof."
      ],
      "keywords": [
        "owasp and mitre references for llm testing",
        "llm & generative ai penetration testing",
        "llm application security testing",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "llm vulnerability discovery and test design",
        "exploit validation and evidence collection",
        "remediation testing and regression",
        "use current edition names and dates accurately.",
        "map test cases to relevant risk guidance and atlas techniques.",
        "avoid treating framework mapping as vulnerability proof."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"OWASP and MITRE References for LLM Testing\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 19 — LLM & Generative AI Penetration Testing.\nTopic definition: OWASP GenAI LLM Top 10 organizes application risk guidance, OWASP Agentic guidance covers autonomous application risks, and MITRE ATLAS catalogs adversary techniques involving AI.\nPrerequisites to bridge briefly: LLM Application Attack Surface; Module 17 — AI threat modeling; Relevant web/API security fundamentals.\nRelated concepts: LLM Vulnerability Discovery and Test Design, Exploit Validation and Evidence Collection, Remediation Testing and Regression.\n\nLEARNING OBJECTIVES\n1. Use current edition names and dates accurately.\n2. Map test cases to relevant risk guidance and ATLAS techniques.\n3. Avoid treating framework mapping as vulnerability proof.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of OWASP and MITRE References for LLM Testing.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Map a controlled prompt-injection and data-disclosure assessment to the current OWASP LLM guidance and relevant ATLAS entries.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Using outdated category numbering or confusing a risk taxonomy with an exploit procedure.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    }
  ]
});
