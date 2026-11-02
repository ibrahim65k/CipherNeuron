/* CipherNeuron curriculum data — Module 17. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-17-ai-security-threat-modeling",
  "number": "17",
  "partId": "part-04",
  "title": "AI Security Fundamentals & Threat Modeling",
  "subtitle": "Model AI-specific assets, trust boundaries, attack surfaces, and controls across the full system lifecycle.",
  "description": "Develop a system-level security model for AI applications, covering models, data, orchestration, infrastructure, supply chains, and operational controls.",
  "difficulty": "Advanced",
  "estimatedTime": "10–14 hours",
  "prerequisites": [
    "Part 01 — AI system, ML, and LLM fundamentals",
    "Part 02 — model lifecycle and AI application architecture",
    "Foundational application and infrastructure security"
  ],
  "relatedModules": [
    "module-18-adversarial-machine-learning",
    "module-19-llm-generative-ai-pentesting",
    "module-20-rag-knowledge-security"
  ],
  "objectives": [
    "Decompose AI applications into security-relevant components and data flows.",
    "Identify assets, actors, trust boundaries, and AI-specific attack surfaces.",
    "Apply structured threat modeling and risk assessment to AI systems.",
    "Select lifecycle controls and design evidence-driven AI security testing strategies."
  ],
  "topics": [
    {
      "id": "topic-p04-17-ai-security-fundamentals",
      "title": "AI Security Fundamentals",
      "subtitle": "AI security protects the complete AI-enabled system—including models, datasets, prompts, retrieval, tools, infrastructure, and people—from compromise, misuse, leakage, and unsafe behavior.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Intermediate to Advanced",
      "definition": "AI security protects the complete AI-enabled system—including models, datasets, prompts, retrieval, tools, infrastructure, and people—from compromise, misuse, leakage, and unsafe behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 1 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Part 01 — AI system, ML, and LLM fundamentals",
        "Part 02 — model lifecycle and AI application architecture"
      ],
      "relatedConcepts": [
        "AI System Attack Surfaces",
        "AI Application Architecture",
        "Model, Data and Infrastructure Security"
      ],
      "objectives": [
        "Distinguish AI security from model safety and traditional application security.",
        "Identify security properties across the AI lifecycle.",
        "Explain why model behavior alone is not the whole system."
      ],
      "keywords": [
        "ai security fundamentals",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai system attack surfaces",
        "ai application architecture",
        "model, data and infrastructure security",
        "distinguish ai security from model safety and traditional application security.",
        "identify security properties across the ai lifecycle.",
        "explain why model behavior alone is not the whole system."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Security Fundamentals\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI security protects the complete AI-enabled system—including models, datasets, prompts, retrieval, tools, infrastructure, and people—from compromise, misuse, leakage, and unsafe behavior.\nPrerequisites to bridge briefly: Part 01 — AI system, ML, and LLM fundamentals; Part 02 — model lifecycle and AI application architecture.\nRelated concepts: AI System Attack Surfaces, AI Application Architecture, Model, Data and Infrastructure Security.\n\nLEARNING OBJECTIVES\n1. Distinguish AI security from model safety and traditional application security.\n2. Identify security properties across the AI lifecycle.\n3. Explain why model behavior alone is not the whole system.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Security Fundamentals.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Map a small LLM application from user input through retrieval, inference, tools, and response.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Confusing model alignment with enforceable security controls.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-system-attack-surfaces",
      "title": "AI System Attack Surfaces",
      "subtitle": "An AI system attack surface is the set of reachable components, interfaces, data flows, dependencies, and behaviors that an adversary could influence or abuse.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Intermediate to Advanced",
      "definition": "An AI system attack surface is the set of reachable components, interfaces, data flows, dependencies, and behaviors that an adversary could influence or abuse.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 2 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Security Fundamentals",
        "AI Application Architecture",
        "Model, Data and Infrastructure Security",
        "Trust Boundaries in AI Systems"
      ],
      "objectives": [
        "Inventory externally and internally reachable AI components.",
        "Classify interfaces by input, output, identity, and privilege.",
        "Prioritize exposed paths using reachability and impact."
      ],
      "keywords": [
        "ai system attack surfaces",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai security fundamentals",
        "ai application architecture",
        "model, data and infrastructure security",
        "trust boundaries in ai systems",
        "inventory externally and internally reachable ai components.",
        "classify interfaces by input, output, identity, and privilege.",
        "prioritize exposed paths using reachability and impact."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI System Attack Surfaces\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: An AI system attack surface is the set of reachable components, interfaces, data flows, dependencies, and behaviors that an adversary could influence or abuse.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Security Fundamentals, AI Application Architecture, Model, Data and Infrastructure Security, Trust Boundaries in AI Systems.\n\nLEARNING OBJECTIVES\n1. Inventory externally and internally reachable AI components.\n2. Classify interfaces by input, output, identity, and privilege.\n3. Prioritize exposed paths using reachability and impact.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI System Attack Surfaces.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create an attack-surface inventory for a hosted chat application with file upload, RAG, and a plugin endpoint.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Counting only the model API while overlooking connectors, storage, identity, and operational interfaces.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-application-architecture",
      "title": "AI Application Architecture",
      "subtitle": "AI application architecture describes how clients, application services, model gateways, prompts, models, retrieval stores, tools, and monitoring components cooperate.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Intermediate to Advanced",
      "definition": "AI application architecture describes how clients, application services, model gateways, prompts, models, retrieval stores, tools, and monitoring components cooperate.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 3 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Security Fundamentals",
        "AI System Attack Surfaces",
        "Model, Data and Infrastructure Security",
        "Trust Boundaries in AI Systems",
        "Threat Actors and AI Abuse Cases"
      ],
      "objectives": [
        "Trace a request across application and model layers.",
        "Identify synchronous and asynchronous trust transitions.",
        "Locate enforcement points outside the model."
      ],
      "keywords": [
        "ai application architecture",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai security fundamentals",
        "ai system attack surfaces",
        "model, data and infrastructure security",
        "trust boundaries in ai systems",
        "threat actors and ai abuse cases",
        "trace a request across application and model layers.",
        "identify synchronous and asynchronous trust transitions.",
        "locate enforcement points outside the model."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Application Architecture\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI application architecture describes how clients, application services, model gateways, prompts, models, retrieval stores, tools, and monitoring components cooperate.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Security Fundamentals, AI System Attack Surfaces, Model, Data and Infrastructure Security, Trust Boundaries in AI Systems, Threat Actors and AI Abuse Cases.\n\nLEARNING OBJECTIVES\n1. Trace a request across application and model layers.\n2. Identify synchronous and asynchronous trust transitions.\n3. Locate enforcement points outside the model.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Application Architecture.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Draw and annotate a multi-tenant RAG assistant architecture and trace one user request end to end.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming the model is a single isolated component rather than part of a distributed application.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-model-data-and-infrastructure-security",
      "title": "Model, Data and Infrastructure Security",
      "subtitle": "AI security depends on protecting model artifacts, training and inference data, configurations, compute, orchestration, and the infrastructure that hosts them.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI security depends on protecting model artifacts, training and inference data, configurations, compute, orchestration, and the infrastructure that hosts them.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 4 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Security Fundamentals",
        "AI System Attack Surfaces",
        "AI Application Architecture",
        "Trust Boundaries in AI Systems",
        "Threat Actors and AI Abuse Cases"
      ],
      "objectives": [
        "Classify model, dataset, prompt, and runtime assets.",
        "Identify confidentiality, integrity, and availability requirements.",
        "Relate infrastructure compromise to model and data compromise."
      ],
      "keywords": [
        "model, data and infrastructure security",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai security fundamentals",
        "ai system attack surfaces",
        "ai application architecture",
        "trust boundaries in ai systems",
        "threat actors and ai abuse cases",
        "classify model, dataset, prompt, and runtime assets.",
        "identify confidentiality, integrity, and availability requirements.",
        "relate infrastructure compromise to model and data compromise."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model, Data and Infrastructure Security\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI security depends on protecting model artifacts, training and inference data, configurations, compute, orchestration, and the infrastructure that hosts them.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Security Fundamentals, AI System Attack Surfaces, AI Application Architecture, Trust Boundaries in AI Systems, Threat Actors and AI Abuse Cases.\n\nLEARNING OBJECTIVES\n1. Classify model, dataset, prompt, and runtime assets.\n2. Identify confidentiality, integrity, and availability requirements.\n3. Relate infrastructure compromise to model and data compromise.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model, Data and Infrastructure Security.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build an asset register for a self-hosted inference stack, including weights, tokenizer, cache, logs, and secrets.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Protecting weights while leaving logs, caches, or runtime credentials exposed.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-trust-boundaries-in-ai-systems",
      "title": "Trust Boundaries in AI Systems",
      "subtitle": "A trust boundary separates components with different identities, privileges, control, or trust levels; AI systems often cross boundaries when processing user content, retrieved documents, model output, and tool results.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "A trust boundary separates components with different identities, privileges, control, or trust levels; AI systems often cross boundaries when processing user content, retrieved documents, model output, and tool results.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 5 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI System Attack Surfaces",
        "AI Application Architecture",
        "Model, Data and Infrastructure Security",
        "Threat Actors and AI Abuse Cases",
        "AI Threat Modeling Methodologies"
      ],
      "objectives": [
        "Identify trust zones and boundary crossings.",
        "Distinguish trusted instructions from untrusted content.",
        "Place validation and authorization at boundary crossings."
      ],
      "keywords": [
        "trust boundaries in ai systems",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai system attack surfaces",
        "ai application architecture",
        "model, data and infrastructure security",
        "threat actors and ai abuse cases",
        "ai threat modeling methodologies",
        "identify trust zones and boundary crossings.",
        "distinguish trusted instructions from untrusted content.",
        "place validation and authorization at boundary crossings."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Trust Boundaries in AI Systems\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: A trust boundary separates components with different identities, privileges, control, or trust levels; AI systems often cross boundaries when processing user content, retrieved documents, model output, and tool results.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI System Attack Surfaces, AI Application Architecture, Model, Data and Infrastructure Security, Threat Actors and AI Abuse Cases, AI Threat Modeling Methodologies.\n\nLEARNING OBJECTIVES\n1. Identify trust zones and boundary crossings.\n2. Distinguish trusted instructions from untrusted content.\n3. Place validation and authorization at boundary crossings.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Trust Boundaries in AI Systems.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Mark trust boundaries in a RAG workflow that ingests public documents and calls an internal ticketing tool.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating retrieved text or model-generated output as trusted instructions.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-threat-actors-and-ai-abuse-cases",
      "title": "Threat Actors and AI Abuse Cases",
      "subtitle": "AI threat actors include external users, malicious insiders, compromised suppliers, data contributors, and adversaries abusing connected services or model capabilities.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI threat actors include external users, malicious insiders, compromised suppliers, data contributors, and adversaries abusing connected services or model capabilities.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 6 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "Model, Data and Infrastructure Security",
        "Trust Boundaries in AI Systems",
        "AI Threat Modeling Methodologies",
        "AI System Assets and Security Objectives"
      ],
      "objectives": [
        "Develop actor profiles based on access and capability.",
        "Separate accidental misuse from deliberate abuse.",
        "Connect actor goals to system assets and attack paths."
      ],
      "keywords": [
        "threat actors and ai abuse cases",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai application architecture",
        "model, data and infrastructure security",
        "trust boundaries in ai systems",
        "ai threat modeling methodologies",
        "ai system assets and security objectives",
        "develop actor profiles based on access and capability.",
        "separate accidental misuse from deliberate abuse.",
        "connect actor goals to system assets and attack paths."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Threat Actors and AI Abuse Cases\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI threat actors include external users, malicious insiders, compromised suppliers, data contributors, and adversaries abusing connected services or model capabilities.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Application Architecture, Model, Data and Infrastructure Security, Trust Boundaries in AI Systems, AI Threat Modeling Methodologies, AI System Assets and Security Objectives.\n\nLEARNING OBJECTIVES\n1. Develop actor profiles based on access and capability.\n2. Separate accidental misuse from deliberate abuse.\n3. Connect actor goals to system assets and attack paths.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Threat Actors and AI Abuse Cases.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create actor scenarios for a public chatbot, internal copilot, and third-party model provider.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Using vague attacker labels without specifying access, incentives, capabilities, or constraints.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-threat-modeling-methodologies",
      "title": "AI Threat Modeling Methodologies",
      "subtitle": "AI threat modeling systematically identifies assets, actors, entry points, trust boundaries, threats, impacts, and mitigations before and during deployment.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI threat modeling systematically identifies assets, actors, entry points, trust boundaries, threats, impacts, and mitigations before and during deployment.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 7 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "Model, Data and Infrastructure Security",
        "Trust Boundaries in AI Systems",
        "Threat Actors and AI Abuse Cases",
        "AI System Assets and Security Objectives",
        "AI Security Risk Assessment"
      ],
      "objectives": [
        "Apply a repeatable threat-modeling workflow.",
        "Adapt STRIDE-style reasoning where useful without forcing it onto every ML risk.",
        "Record assumptions, residual risks, and owners."
      ],
      "keywords": [
        "ai threat modeling methodologies",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model, data and infrastructure security",
        "trust boundaries in ai systems",
        "threat actors and ai abuse cases",
        "ai system assets and security objectives",
        "ai security risk assessment",
        "apply a repeatable threat-modeling workflow.",
        "adapt stride-style reasoning where useful without forcing it onto every ml risk.",
        "record assumptions, residual risks, and owners."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Threat Modeling Methodologies\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI threat modeling systematically identifies assets, actors, entry points, trust boundaries, threats, impacts, and mitigations before and during deployment.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: Model, Data and Infrastructure Security, Trust Boundaries in AI Systems, Threat Actors and AI Abuse Cases, AI System Assets and Security Objectives, AI Security Risk Assessment.\n\nLEARNING OBJECTIVES\n1. Apply a repeatable threat-modeling workflow.\n2. Adapt STRIDE-style reasoning where useful without forcing it onto every ML risk.\n3. Record assumptions, residual risks, and owners.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Threat Modeling Methodologies.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Threat-model a document-question-answering assistant using a data-flow diagram and a threat register.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating a framework as a checkbox exercise instead of a model grounded in the actual architecture.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-system-assets-and-security-objectives",
      "title": "AI System Assets and Security Objectives",
      "subtitle": "AI assets include weights, datasets, prompts, embeddings, vector indexes, identities, tools, logs, outputs, and business decisions; each needs explicit security objectives.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI assets include weights, datasets, prompts, embeddings, vector indexes, identities, tools, logs, outputs, and business decisions; each needs explicit security objectives.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 8 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "Trust Boundaries in AI Systems",
        "Threat Actors and AI Abuse Cases",
        "AI Threat Modeling Methodologies",
        "AI Security Risk Assessment",
        "AI Supply Chain Security"
      ],
      "objectives": [
        "Identify tangible and intangible AI assets.",
        "Assign confidentiality, integrity, availability, privacy, and accountability needs.",
        "Map assets to owners and controls."
      ],
      "keywords": [
        "ai system assets and security objectives",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "trust boundaries in ai systems",
        "threat actors and ai abuse cases",
        "ai threat modeling methodologies",
        "ai security risk assessment",
        "ai supply chain security",
        "identify tangible and intangible ai assets.",
        "assign confidentiality, integrity, availability, privacy, and accountability needs.",
        "map assets to owners and controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI System Assets and Security Objectives\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI assets include weights, datasets, prompts, embeddings, vector indexes, identities, tools, logs, outputs, and business decisions; each needs explicit security objectives.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: Trust Boundaries in AI Systems, Threat Actors and AI Abuse Cases, AI Threat Modeling Methodologies, AI Security Risk Assessment, AI Supply Chain Security.\n\nLEARNING OBJECTIVES\n1. Identify tangible and intangible AI assets.\n2. Assign confidentiality, integrity, availability, privacy, and accountability needs.\n3. Map assets to owners and controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI System Assets and Security Objectives.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build an asset-to-security-objective matrix for a customer-support RAG system.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Failing to classify derived data such as embeddings, cached context, and generated summaries.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-security-risk-assessment",
      "title": "AI Security Risk Assessment",
      "subtitle": "AI security risk assessment estimates how threats exploit system weaknesses and how resulting harms affect users, organizations, and dependent systems.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI security risk assessment estimates how threats exploit system weaknesses and how resulting harms affect users, organizations, and dependent systems.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 9 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "Threat Actors and AI Abuse Cases",
        "AI Threat Modeling Methodologies",
        "AI System Assets and Security Objectives",
        "AI Supply Chain Security",
        "Secure AI Development Lifecycle"
      ],
      "objectives": [
        "Distinguish threat, vulnerability, likelihood, impact, and risk.",
        "Assess technical and operational consequences.",
        "Document uncertainty and residual risk."
      ],
      "keywords": [
        "ai security risk assessment",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "threat actors and ai abuse cases",
        "ai threat modeling methodologies",
        "ai system assets and security objectives",
        "ai supply chain security",
        "secure ai development lifecycle",
        "distinguish threat, vulnerability, likelihood, impact, and risk.",
        "assess technical and operational consequences.",
        "document uncertainty and residual risk."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Security Risk Assessment\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI security risk assessment estimates how threats exploit system weaknesses and how resulting harms affect users, organizations, and dependent systems.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: Threat Actors and AI Abuse Cases, AI Threat Modeling Methodologies, AI System Assets and Security Objectives, AI Supply Chain Security, Secure AI Development Lifecycle.\n\nLEARNING OBJECTIVES\n1. Distinguish threat, vulnerability, likelihood, impact, and risk.\n2. Assess technical and operational consequences.\n3. Document uncertainty and residual risk.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Security Risk Assessment.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Score a set of hypothetical threats to a model endpoint and justify assumptions rather than relying on unsupported precision.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Using a numeric score as objective truth or ignoring uncertainty and business context.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-supply-chain-security",
      "title": "AI Supply Chain Security",
      "subtitle": "The AI supply chain includes data sources, annotators, pretrained models, weights, libraries, containers, plugins, hosted APIs, hardware, and distribution channels.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "The AI supply chain includes data sources, annotators, pretrained models, weights, libraries, containers, plugins, hosted APIs, hardware, and distribution channels.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 10 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Threat Modeling Methodologies",
        "AI System Assets and Security Objectives",
        "AI Security Risk Assessment",
        "Secure AI Development Lifecycle",
        "AI Security Controls and Defense in Depth"
      ],
      "objectives": [
        "Map upstream and downstream dependencies.",
        "Assess provenance, integrity, licensing, and maintainer trust.",
        "Define verification and update controls."
      ],
      "keywords": [
        "ai supply chain security",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai threat modeling methodologies",
        "ai system assets and security objectives",
        "ai security risk assessment",
        "secure ai development lifecycle",
        "ai security controls and defense in depth",
        "map upstream and downstream dependencies.",
        "assess provenance, integrity, licensing, and maintainer trust.",
        "define verification and update controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Supply Chain Security\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: The AI supply chain includes data sources, annotators, pretrained models, weights, libraries, containers, plugins, hosted APIs, hardware, and distribution channels.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Threat Modeling Methodologies, AI System Assets and Security Objectives, AI Security Risk Assessment, Secure AI Development Lifecycle, AI Security Controls and Defense in Depth.\n\nLEARNING OBJECTIVES\n1. Map upstream and downstream dependencies.\n2. Assess provenance, integrity, licensing, and maintainer trust.\n3. Define verification and update controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Supply Chain Security.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a provenance checklist for importing a third-party model and its tokenizer into a controlled environment.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Trusting a model hub entry or package name without verifying publisher, artifact integrity, and dependencies.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-secure-ai-development-lifecycle",
      "title": "Secure AI Development Lifecycle",
      "subtitle": "A secure AI development lifecycle embeds security requirements, data governance, threat modeling, testing, deployment controls, monitoring, and retirement into AI engineering.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "A secure AI development lifecycle embeds security requirements, data governance, threat modeling, testing, deployment controls, monitoring, and retirement into AI engineering.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 11 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI System Assets and Security Objectives",
        "AI Security Risk Assessment",
        "AI Supply Chain Security",
        "AI Security Controls and Defense in Depth",
        "AI Security Testing Strategy"
      ],
      "objectives": [
        "Map security activities to design, data, training, release, and operation.",
        "Define security gates and evidence artifacts.",
        "Plan monitoring, incident response, and model retirement."
      ],
      "keywords": [
        "secure ai development lifecycle",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai system assets and security objectives",
        "ai security risk assessment",
        "ai supply chain security",
        "ai security controls and defense in depth",
        "ai security testing strategy",
        "map security activities to design, data, training, release, and operation.",
        "define security gates and evidence artifacts.",
        "plan monitoring, incident response, and model retirement."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Secure AI Development Lifecycle\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: A secure AI development lifecycle embeds security requirements, data governance, threat modeling, testing, deployment controls, monitoring, and retirement into AI engineering.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI System Assets and Security Objectives, AI Security Risk Assessment, AI Supply Chain Security, AI Security Controls and Defense in Depth, AI Security Testing Strategy.\n\nLEARNING OBJECTIVES\n1. Map security activities to design, data, training, release, and operation.\n2. Define security gates and evidence artifacts.\n3. Plan monitoring, incident response, and model retirement.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Secure AI Development Lifecycle.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Design lifecycle gates for a small fine-tuned classifier from dataset intake to production rollback.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating security testing as a one-time pre-release scan.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-security-controls-and-defense-in-depth",
      "title": "AI Security Controls and Defense in Depth",
      "subtitle": "AI security controls combine identity, authorization, data validation, isolation, output handling, monitoring, rate limits, provenance, and human review across multiple layers.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI security controls combine identity, authorization, data validation, isolation, output handling, monitoring, rate limits, provenance, and human review across multiple layers.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 12 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Security Risk Assessment",
        "AI Supply Chain Security",
        "Secure AI Development Lifecycle",
        "AI Security Testing Strategy",
        "AI Security Frameworks and Reference Models"
      ],
      "objectives": [
        "Classify preventive, detective, and corrective controls.",
        "Place controls at the layer that can reliably enforce them.",
        "Identify bypass and failure modes."
      ],
      "keywords": [
        "ai security controls and defense in depth",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai security risk assessment",
        "ai supply chain security",
        "secure ai development lifecycle",
        "ai security testing strategy",
        "ai security frameworks and reference models",
        "classify preventive, detective, and corrective controls.",
        "place controls at the layer that can reliably enforce them.",
        "identify bypass and failure modes."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Security Controls and Defense in Depth\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI security controls combine identity, authorization, data validation, isolation, output handling, monitoring, rate limits, provenance, and human review across multiple layers.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Security Risk Assessment, AI Supply Chain Security, Secure AI Development Lifecycle, AI Security Testing Strategy, AI Security Frameworks and Reference Models.\n\nLEARNING OBJECTIVES\n1. Classify preventive, detective, and corrective controls.\n2. Place controls at the layer that can reliably enforce them.\n3. Identify bypass and failure modes.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Security Controls and Defense in Depth.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Design layered controls for an assistant that can search internal documents but cannot modify records without approval.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Relying on prompt wording or model refusal as the sole enforcement mechanism.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-security-testing-strategy",
      "title": "AI Security Testing Strategy",
      "subtitle": "An AI security testing strategy defines scope, system versions, test objectives, threat hypotheses, safe test data, evidence, success criteria, and retest procedures.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "An AI security testing strategy defines scope, system versions, test objectives, threat hypotheses, safe test data, evidence, success criteria, and retest procedures.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 13 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "AI Supply Chain Security",
        "Secure AI Development Lifecycle",
        "AI Security Controls and Defense in Depth",
        "AI Security Frameworks and Reference Models"
      ],
      "objectives": [
        "Translate a threat model into test cases.",
        "Choose black-box, gray-box, and white-box approaches.",
        "Preserve reproducibility and authorization boundaries."
      ],
      "keywords": [
        "ai security testing strategy",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "ai supply chain security",
        "secure ai development lifecycle",
        "ai security controls and defense in depth",
        "ai security frameworks and reference models",
        "translate a threat model into test cases.",
        "choose black-box, gray-box, and white-box approaches.",
        "preserve reproducibility and authorization boundaries."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Security Testing Strategy\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: An AI security testing strategy defines scope, system versions, test objectives, threat hypotheses, safe test data, evidence, success criteria, and retest procedures.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: AI Supply Chain Security, Secure AI Development Lifecycle, AI Security Controls and Defense in Depth, AI Security Frameworks and Reference Models.\n\nLEARNING OBJECTIVES\n1. Translate a threat model into test cases.\n2. Choose black-box, gray-box, and white-box approaches.\n3. Preserve reproducibility and authorization boundaries.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Security Testing Strategy.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build a test plan for a staging LLM application with synthetic tenants and seeded test documents.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Running unbounded exploratory tests against production or failing to capture reproducible evidence.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-17-ai-security-frameworks-and-reference-models",
      "title": "AI Security Frameworks and Reference Models",
      "subtitle": "AI security frameworks organize risks and practices: OWASP GenAI guidance addresses application risks, MITRE ATLAS catalogs adversary techniques, and NIST AI RMF structures risk management.",
      "category": "AI Security Architecture & Risk",
      "difficulty": "Advanced",
      "definition": "AI security frameworks organize risks and practices: OWASP GenAI guidance addresses application risks, MITRE ATLAS catalogs adversary techniques, and NIST AI RMF structures risk management.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-17-ai-security-threat-modeling",
      "moduleTitle": "AI Security Fundamentals & Threat Modeling",
      "position": "Part 04 establishes the advanced AI security track. Module 17 develops ai security fundamentals & threat modeling; this topic is sequence item 14 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "AI Security Fundamentals",
        "Basic application and infrastructure architecture"
      ],
      "relatedConcepts": [
        "Secure AI Development Lifecycle",
        "AI Security Controls and Defense in Depth",
        "AI Security Testing Strategy"
      ],
      "objectives": [
        "Explain the purpose and scope of each reference.",
        "Map a system threat to relevant framework material without treating mappings as proof.",
        "Track edition dates and changes."
      ],
      "keywords": [
        "ai security frameworks and reference models",
        "ai security fundamentals & threat modeling",
        "ai security architecture & risk",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "secure ai development lifecycle",
        "ai security controls and defense in depth",
        "ai security testing strategy",
        "explain the purpose and scope of each reference.",
        "map a system threat to relevant framework material without treating mappings as proof.",
        "track edition dates and changes."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"AI Security Frameworks and Reference Models\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 17 — AI Security Fundamentals & Threat Modeling.\nTopic definition: AI security frameworks organize risks and practices: OWASP GenAI guidance addresses application risks, MITRE ATLAS catalogs adversary techniques, and NIST AI RMF structures risk management.\nPrerequisites to bridge briefly: AI Security Fundamentals; Basic application and infrastructure architecture.\nRelated concepts: Secure AI Development Lifecycle, AI Security Controls and Defense in Depth, AI Security Testing Strategy.\n\nLEARNING OBJECTIVES\n1. Explain the purpose and scope of each reference.\n2. Map a system threat to relevant framework material without treating mappings as proof.\n3. Track edition dates and changes.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of AI Security Frameworks and Reference Models.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Map a prompt-injection test and a model-supply-chain concern to relevant OWASP, ATLAS, and NIST concepts.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Mixing awareness lists, threat knowledge bases, and risk-management frameworks as if they were interchangeable.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    }
  ]
});
