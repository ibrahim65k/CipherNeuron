/* CipherNeuron curriculum data — Module 21. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-21-agentic-ai-tool-security",
  "number": "21",
  "title": "Agentic AI & Tool Security",
  "subtitle": "Assess autonomous workflows, tool permissions, identity, memory, protocol integrations, and human control points.",
  "description": "Study the security of agentic systems as delegated, stateful software systems: trace planning and tool execution, constrain authority, and test agent behavior across single- and multi-agent architectures.",
  "difficulty": "Advanced",
  "estimatedTime": "12–16 hours",
  "prerequisites": [
    "Module 08 — AI agents, tool calling, and MCP fundamentals",
    "Module 16 — AI agents, automation, and pentesting integration",
    "Module 17 — AI security fundamentals and threat modeling",
    "Basic API security, identity, and operating-system isolation"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-19-llm-generative-ai-pentesting",
    "module-22-multimodal-infrastructure-security",
    "module-23-ai-red-teaming-methodology"
  ],
  "objectives": [
    "Model agent planning, memory, tool execution, and delegation as security-relevant state transitions.",
    "Assess tool misuse, excessive agency, identity abuse, and instruction injection through connected resources.",
    "Evaluate MCP, A2A, and multi-agent trust boundaries without assuming protocol use implies safety.",
    "Design least-privilege tools, isolation, approval gates, and reproducible agent security tests."
  ],
  "partId": "part-04",
  "topics": [
    {
      "id": "topic-p04-21-agentic-ai-architecture",
      "title": "Agentic AI Architecture",
      "subtitle": "Agentic AI architecture combines a model-driven control loop with state, memory, planning, tools, policies, and external services; security depends on how authority and untrusted data move through that loop.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agentic AI architecture combines a model-driven control loop with state, memory, planning, tools, policies, and external services; security depends on how authority and untrusted data move through that loop.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 1 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agent Hijacking",
        "Tool Misuse and Insecure Tool Invocation"
      ],
      "objectives": [
        "Trace an agent request through planning, tool selection, execution, observation, and final response.",
        "Identify control-plane and data-plane components and their trust boundaries.",
        "Distinguish model decisions from deterministic application enforcement."
      ],
      "keywords": [
        "agentic ai architecture",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agent hijacking",
        "tool misuse and insecure tool invocation",
        "trace an agent request through planning, tool selection, execution, observation, and final response.",
        "identify control-plane and data-plane components and their trust boundaries.",
        "distinguish model decisions from deterministic application enforcement."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agentic AI Architecture\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agentic AI architecture combines a model-driven control loop with state, memory, planning, tools, policies, and external services; security depends on how authority and untrusted data move through that loop.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agent Hijacking, Tool Misuse and Insecure Tool Invocation.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 1 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace an agent request through planning, tool selection, execution, observation, and final response.\n2. Identify control-plane and data-plane components and their trust boundaries.\n3. Distinguish model decisions from deterministic application enforcement.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agentic AI Architecture. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Diagram a research agent that reads files, searches an approved knowledge base, and drafts a report; label every identity and permission transition. Address this misconception or failure mode explicitly: Treating an agent as a chatbot rather than a stateful program with delegated capabilities. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-agent-hijacking",
      "title": "Agent Hijacking",
      "subtitle": "Agent hijacking occurs when an attacker or untrusted content steers an agent away from its intended task or policy, potentially changing plans, tool choices, or delegated actions.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent hijacking occurs when an attacker or untrusted content steers an agent away from its intended task or policy, potentially changing plans, tool choices, or delegated actions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 2 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agentic AI Architecture",
        "Tool Misuse and Insecure Tool Invocation",
        "Excessive Agency and Autonomy Boundaries"
      ],
      "objectives": [
        "Explain how instructions can enter through user input, retrieved content, tool output, and memory.",
        "Identify the agent control loop stages where steering can occur.",
        "Define observable evidence that distinguishes influence from actual unauthorized action."
      ],
      "keywords": [
        "agent hijacking",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agentic ai architecture",
        "tool misuse and insecure tool invocation",
        "excessive agency and autonomy boundaries",
        "explain how instructions can enter through user input, retrieved content, tool output, and memory.",
        "identify the agent control loop stages where steering can occur.",
        "define observable evidence that distinguishes influence from actual unauthorized action."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agent Hijacking\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent hijacking occurs when an attacker or untrusted content steers an agent away from its intended task or policy, potentially changing plans, tool choices, or delegated actions.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agentic AI Architecture, Tool Misuse and Insecure Tool Invocation, Excessive Agency and Autonomy Boundaries.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 2 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Explain how instructions can enter through user input, retrieved content, tool output, and memory.\n2. Identify the agent control loop stages where steering can occur.\n3. Define observable evidence that distinguishes influence from actual unauthorized action.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agent Hijacking. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: In a local simulated agent, place harmless conflicting instructions in a synthetic document and observe whether the agent changes its planned read-only workflow. Address this misconception or failure mode explicitly: Calling any unusual model response a successful hijack without proving a security-relevant state or action change. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-tool-misuse-and-insecure-tool-invocation",
      "title": "Tool Misuse and Insecure Tool Invocation",
      "subtitle": "Tool misuse occurs when an agent selects or invokes a tool in an unintended way; insecure invocation includes weak argument validation, ambiguous tool semantics, and missing authorization at execution time.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Tool misuse occurs when an agent selects or invokes a tool in an unintended way; insecure invocation includes weak argument validation, ambiguous tool semantics, and missing authorization at execution time.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 3 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agentic AI Architecture",
        "Agent Hijacking",
        "Excessive Agency and Autonomy Boundaries",
        "Memory Poisoning"
      ],
      "objectives": [
        "Trace tool schemas, argument construction, validation, and execution.",
        "Test whether authorization is enforced independently of model intent.",
        "Identify confused-deputy and parameter-tampering conditions."
      ],
      "keywords": [
        "tool misuse and insecure tool invocation",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agentic ai architecture",
        "agent hijacking",
        "excessive agency and autonomy boundaries",
        "memory poisoning",
        "trace tool schemas, argument construction, validation, and execution.",
        "test whether authorization is enforced independently of model intent.",
        "identify confused-deputy and parameter-tampering conditions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Tool Misuse and Insecure Tool Invocation\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Tool misuse occurs when an agent selects or invokes a tool in an unintended way; insecure invocation includes weak argument validation, ambiguous tool semantics, and missing authorization at execution time.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agentic AI Architecture, Agent Hijacking, Excessive Agency and Autonomy Boundaries, Memory Poisoning.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 3 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace tool schemas, argument construction, validation, and execution.\n2. Test whether authorization is enforced independently of model intent.\n3. Identify confused-deputy and parameter-tampering conditions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Tool Misuse and Insecure Tool Invocation. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Use mock tools for file reading and ticket lookup; test malformed, overbroad, and cross-user arguments against server-side policy checks. Address this misconception or failure mode explicitly: Relying on prompt instructions to prevent a tool call instead of enforcing policy in the tool service. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-excessive-agency-and-autonomy-boundaries",
      "title": "Excessive Agency and Autonomy Boundaries",
      "subtitle": "Excessive agency is the grant of more tools, privileges, persistence, or decision authority than a task requires, increasing the impact of model errors or manipulation.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Excessive agency is the grant of more tools, privileges, persistence, or decision authority than a task requires, increasing the impact of model errors or manipulation.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 4 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agent Hijacking",
        "Tool Misuse and Insecure Tool Invocation",
        "Memory Poisoning",
        "Identity and Privilege Abuse in Agents"
      ],
      "objectives": [
        "Apply least privilege and task-scoped capability design.",
        "Compare read-only, reversible, and irreversible actions.",
        "Set autonomy limits, budgets, and escalation conditions."
      ],
      "keywords": [
        "excessive agency and autonomy boundaries",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agent hijacking",
        "tool misuse and insecure tool invocation",
        "memory poisoning",
        "identity and privilege abuse in agents",
        "apply least privilege and task-scoped capability design.",
        "compare read-only, reversible, and irreversible actions.",
        "set autonomy limits, budgets, and escalation conditions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Excessive Agency and Autonomy Boundaries\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Excessive agency is the grant of more tools, privileges, persistence, or decision authority than a task requires, increasing the impact of model errors or manipulation.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agent Hijacking, Tool Misuse and Insecure Tool Invocation, Memory Poisoning, Identity and Privilege Abuse in Agents.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 4 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Apply least privilege and task-scoped capability design.\n2. Compare read-only, reversible, and irreversible actions.\n3. Set autonomy limits, budgets, and escalation conditions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Excessive Agency and Autonomy Boundaries. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Redesign a demo assistant that can read documents and send email so that message sending requires explicit human approval. Address this misconception or failure mode explicitly: Measuring agent capability without measuring the blast radius of its granted authority. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-memory-poisoning",
      "title": "Memory Poisoning",
      "subtitle": "Memory poisoning is the manipulation of persistent agent memory so that future runs retrieve misleading, unauthorized, or attacker-controlled state as trusted context.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Memory poisoning is the manipulation of persistent agent memory so that future runs retrieve misleading, unauthorized, or attacker-controlled state as trusted context.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 5 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Tool Misuse and Insecure Tool Invocation",
        "Excessive Agency and Autonomy Boundaries",
        "Identity and Privilege Abuse in Agents",
        "MCP Security Architecture"
      ],
      "objectives": [
        "Distinguish working context, episodic memory, semantic memory, and external stores.",
        "Analyze memory write permissions, provenance, retention, and retrieval filters.",
        "Design validation and deletion controls for persistent memory."
      ],
      "keywords": [
        "memory poisoning",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "tool misuse and insecure tool invocation",
        "excessive agency and autonomy boundaries",
        "identity and privilege abuse in agents",
        "mcp security architecture",
        "distinguish working context, episodic memory, semantic memory, and external stores.",
        "analyze memory write permissions, provenance, retention, and retrieval filters.",
        "design validation and deletion controls for persistent memory."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Memory Poisoning\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Memory poisoning is the manipulation of persistent agent memory so that future runs retrieve misleading, unauthorized, or attacker-controlled state as trusted context.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Tool Misuse and Insecure Tool Invocation, Excessive Agency and Autonomy Boundaries, Identity and Privilege Abuse in Agents, MCP Security Architecture.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 5 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Distinguish working context, episodic memory, semantic memory, and external stores.\n2. Analyze memory write permissions, provenance, retention, and retrieval filters.\n3. Design validation and deletion controls for persistent memory.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Memory Poisoning. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Seed a local memory store with synthetic contradictory preferences and evaluate provenance-aware retrieval and user-scoped isolation. Address this misconception or failure mode explicitly: Assuming memory is harmless because it is not model weights; persistent context can influence later actions. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-identity-and-privilege-abuse-in-agents",
      "title": "Identity and Privilege Abuse in Agents",
      "subtitle": "Agent identity and privilege abuse arises when user, agent, service, and tool identities are conflated or when delegated credentials exceed the authorized task.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent identity and privilege abuse arises when user, agent, service, and tool identities are conflated or when delegated credentials exceed the authorized task.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 6 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Excessive Agency and Autonomy Boundaries",
        "Memory Poisoning",
        "MCP Security Architecture",
        "A2A Security"
      ],
      "objectives": [
        "Map principal identities and delegation chains.",
        "Explain token audience, scope, lifetime, and workload identity.",
        "Test authorization using distinct synthetic users and roles."
      ],
      "keywords": [
        "identity and privilege abuse in agents",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "excessive agency and autonomy boundaries",
        "memory poisoning",
        "mcp security architecture",
        "a2a security",
        "map principal identities and delegation chains.",
        "explain token audience, scope, lifetime, and workload identity.",
        "test authorization using distinct synthetic users and roles."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Identity and Privilege Abuse in Agents\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent identity and privilege abuse arises when user, agent, service, and tool identities are conflated or when delegated credentials exceed the authorized task.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Excessive Agency and Autonomy Boundaries, Memory Poisoning, MCP Security Architecture, A2A Security.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 6 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Map principal identities and delegation chains.\n2. Explain token audience, scope, lifetime, and workload identity.\n3. Test authorization using distinct synthetic users and roles.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Identity and Privilege Abuse in Agents. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Inspect a staging agent that accesses a mock ticket API and verify that each tool call carries the initiating user context and narrow service scope. Address this misconception or failure mode explicitly: Using one powerful shared service credential for every user and every tool. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-mcp-security-architecture",
      "title": "MCP Security Architecture",
      "subtitle": "Model Context Protocol (MCP) connects AI hosts, clients, and servers through defined interactions for tools and context; its security depends on transport, server trust, consent, authorization, and implementation boundaries.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Model Context Protocol (MCP) connects AI hosts, clients, and servers through defined interactions for tools and context; its security depends on transport, server trust, consent, authorization, and implementation boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 7 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Memory Poisoning",
        "Identity and Privilege Abuse in Agents",
        "A2A Security",
        "Multi-Agent Security and Delegation"
      ],
      "objectives": [
        "Describe host, client, server, tool, resource, and prompt roles at a conceptual level.",
        "Assess server provenance, transport protection, authentication, and tool permissions.",
        "Identify risks from untrusted MCP servers and overbroad capabilities."
      ],
      "keywords": [
        "mcp security architecture",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "memory poisoning",
        "identity and privilege abuse in agents",
        "a2a security",
        "multi-agent security and delegation",
        "describe host, client, server, tool, resource, and prompt roles at a conceptual level.",
        "assess server provenance, transport protection, authentication, and tool permissions.",
        "identify risks from untrusted mcp servers and overbroad capabilities."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"MCP Security Architecture\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Model Context Protocol (MCP) connects AI hosts, clients, and servers through defined interactions for tools and context; its security depends on transport, server trust, consent, authorization, and implementation boundaries.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Memory Poisoning, Identity and Privilege Abuse in Agents, A2A Security, Multi-Agent Security and Delegation.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 7 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Describe host, client, server, tool, resource, and prompt roles at a conceptual level.\n2. Assess server provenance, transport protection, authentication, and tool permissions.\n3. Identify risks from untrusted MCP servers and overbroad capabilities.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic MCP Security Architecture. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Review a local mock MCP server exposing one read-only synthetic resource; document trust decisions and verify that the host does not grant unrelated filesystem access. Address this misconception or failure mode explicitly: Assuming MCP itself guarantees the safety or authorization of tools exposed by a server. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-a2a-security",
      "title": "A2A Security",
      "subtitle": "Agent-to-Agent (A2A) security concerns identity, task delegation, message integrity, capability discovery, trust, and data handling when independent agents collaborate.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent-to-Agent (A2A) security concerns identity, task delegation, message integrity, capability discovery, trust, and data handling when independent agents collaborate.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 8 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Identity and Privilege Abuse in Agents",
        "MCP Security Architecture",
        "Multi-Agent Security and Delegation",
        "Prompt Injection Through Tools and Tool Results"
      ],
      "objectives": [
        "Model agent identities and trust relationships across organizations or services.",
        "Evaluate task delegation, authentication, provenance, and authorization.",
        "Identify risks from spoofed agent metadata and untrusted task results."
      ],
      "keywords": [
        "a2a security",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "identity and privilege abuse in agents",
        "mcp security architecture",
        "multi-agent security and delegation",
        "prompt injection through tools and tool results",
        "model agent identities and trust relationships across organizations or services.",
        "evaluate task delegation, authentication, provenance, and authorization.",
        "identify risks from spoofed agent metadata and untrusted task results."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"A2A Security\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent-to-Agent (A2A) security concerns identity, task delegation, message integrity, capability discovery, trust, and data handling when independent agents collaborate.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Identity and Privilege Abuse in Agents, MCP Security Architecture, Multi-Agent Security and Delegation, Prompt Injection Through Tools and Tool Results.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 8 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Model agent identities and trust relationships across organizations or services.\n2. Evaluate task delegation, authentication, provenance, and authorization.\n3. Identify risks from spoofed agent metadata and untrusted task results.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic A2A Security. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a local two-agent simulation where a coordinator delegates a bounded summarization task to a worker with synthetic data only. Address this misconception or failure mode explicitly: Treating an agent description or claimed capability as proof of identity or permission. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-multi-agent-security-and-delegation",
      "title": "Multi-Agent Security and Delegation",
      "subtitle": "Multi-agent systems distribute planning and execution among specialized agents, creating additional trust boundaries, shared-state risks, and opportunities for privilege propagation.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Multi-agent systems distribute planning and execution among specialized agents, creating additional trust boundaries, shared-state risks, and opportunities for privilege propagation.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 9 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "MCP Security Architecture",
        "A2A Security",
        "Prompt Injection Through Tools and Tool Results",
        "Agent Code Execution Risks"
      ],
      "objectives": [
        "Map coordinator-worker and peer-to-peer delegation patterns.",
        "Analyze shared memory, message channels, and delegated tool access.",
        "Design isolation and accountability for each agent role."
      ],
      "keywords": [
        "multi-agent security and delegation",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "mcp security architecture",
        "a2a security",
        "prompt injection through tools and tool results",
        "agent code execution risks",
        "map coordinator-worker and peer-to-peer delegation patterns.",
        "analyze shared memory, message channels, and delegated tool access.",
        "design isolation and accountability for each agent role."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Multi-Agent Security and Delegation\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Multi-agent systems distribute planning and execution among specialized agents, creating additional trust boundaries, shared-state risks, and opportunities for privilege propagation.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: MCP Security Architecture, A2A Security, Prompt Injection Through Tools and Tool Results, Agent Code Execution Risks.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 9 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Map coordinator-worker and peer-to-peer delegation patterns.\n2. Analyze shared memory, message channels, and delegated tool access.\n3. Design isolation and accountability for each agent role.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Multi-Agent Security and Delegation. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Threat-model a local planner, researcher, and reviewer team; verify that the researcher cannot invoke the planner’s privileged mock tool. Address this misconception or failure mode explicitly: Assuming splitting work among agents automatically limits risk. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-prompt-injection-through-tools-and-tool-results",
      "title": "Prompt Injection Through Tools and Tool Results",
      "subtitle": "Tool-mediated prompt injection occurs when untrusted content returned by a tool is interpreted as instructions by an agent and influences subsequent reasoning or actions.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Tool-mediated prompt injection occurs when untrusted content returned by a tool is interpreted as instructions by an agent and influences subsequent reasoning or actions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 10 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "A2A Security",
        "Multi-Agent Security and Delegation",
        "Agent Code Execution Risks",
        "Sandbox Security for Agent Workloads"
      ],
      "objectives": [
        "Trace untrusted tool output into model context.",
        "Distinguish data from instructions using provenance and control-flow design.",
        "Test whether tool results can trigger unauthorized follow-on actions."
      ],
      "keywords": [
        "prompt injection through tools and tool results",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "a2a security",
        "multi-agent security and delegation",
        "agent code execution risks",
        "sandbox security for agent workloads",
        "trace untrusted tool output into model context.",
        "distinguish data from instructions using provenance and control-flow design.",
        "test whether tool results can trigger unauthorized follow-on actions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Prompt Injection Through Tools and Tool Results\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Tool-mediated prompt injection occurs when untrusted content returned by a tool is interpreted as instructions by an agent and influences subsequent reasoning or actions.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: A2A Security, Multi-Agent Security and Delegation, Agent Code Execution Risks, Sandbox Security for Agent Workloads.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 10 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace untrusted tool output into model context.\n2. Distinguish data from instructions using provenance and control-flow design.\n3. Test whether tool results can trigger unauthorized follow-on actions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Prompt Injection Through Tools and Tool Results. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Return a benign instruction-like string from a mock search tool and verify that the agent treats it as quoted data and cannot execute a privileged follow-up action. Address this misconception or failure mode explicitly: Relying only on delimiters or system-prompt wording without downstream authorization checks. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-agent-code-execution-risks",
      "title": "Agent Code Execution Risks",
      "subtitle": "Agent code execution risks arise when model-generated code, shell commands, notebooks, or scripts run with access to files, networks, credentials, or host resources.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent code execution risks arise when model-generated code, shell commands, notebooks, or scripts run with access to files, networks, credentials, or host resources.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 11 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Multi-Agent Security and Delegation",
        "Prompt Injection Through Tools and Tool Results",
        "Sandbox Security for Agent Workloads",
        "Secret Exposure and Credential Handling"
      ],
      "objectives": [
        "Identify code-generation and execution paths.",
        "Assess sandbox boundaries, filesystem mounts, network egress, and resource limits.",
        "Separate code review from execution authorization."
      ],
      "keywords": [
        "agent code execution risks",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "multi-agent security and delegation",
        "prompt injection through tools and tool results",
        "sandbox security for agent workloads",
        "secret exposure and credential handling",
        "identify code-generation and execution paths.",
        "assess sandbox boundaries, filesystem mounts, network egress, and resource limits.",
        "separate code review from execution authorization."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agent Code Execution Risks\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent code execution risks arise when model-generated code, shell commands, notebooks, or scripts run with access to files, networks, credentials, or host resources.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Multi-Agent Security and Delegation, Prompt Injection Through Tools and Tool Results, Sandbox Security for Agent Workloads, Secret Exposure and Credential Handling.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 11 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify code-generation and execution paths.\n2. Assess sandbox boundaries, filesystem mounts, network egress, and resource limits.\n3. Separate code review from execution authorization.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agent Code Execution Risks. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Run a harmless generated arithmetic script inside a disposable, network-disabled container and inspect its resource and filesystem restrictions. Address this misconception or failure mode explicitly: Calling a container a secure sandbox without checking capabilities, mounts, kernel exposure, and egress. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-sandbox-security-for-agent-workloads",
      "title": "Sandbox Security for Agent Workloads",
      "subtitle": "A sandbox constrains the resources available to agent-generated or agent-selected operations; effective isolation requires layered controls and explicit threat assumptions.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "A sandbox constrains the resources available to agent-generated or agent-selected operations; effective isolation requires layered controls and explicit threat assumptions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 12 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Prompt Injection Through Tools and Tool Results",
        "Agent Code Execution Risks",
        "Secret Exposure and Credential Handling",
        "Permission Boundaries and Human Approval Controls"
      ],
      "objectives": [
        "Compare process isolation, containers, virtual machines, and managed sandboxes.",
        "Evaluate filesystem, syscall, network, CPU, memory, and time limits.",
        "Define escape assumptions and monitoring requirements."
      ],
      "keywords": [
        "sandbox security for agent workloads",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "prompt injection through tools and tool results",
        "agent code execution risks",
        "secret exposure and credential handling",
        "permission boundaries and human approval controls",
        "compare process isolation, containers, virtual machines, and managed sandboxes.",
        "evaluate filesystem, syscall, network, cpu, memory, and time limits.",
        "define escape assumptions and monitoring requirements."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Sandbox Security for Agent Workloads\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: A sandbox constrains the resources available to agent-generated or agent-selected operations; effective isolation requires layered controls and explicit threat assumptions.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Prompt Injection Through Tools and Tool Results, Agent Code Execution Risks, Secret Exposure and Credential Handling, Permission Boundaries and Human Approval Controls.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 12 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Compare process isolation, containers, virtual machines, and managed sandboxes.\n2. Evaluate filesystem, syscall, network, CPU, memory, and time limits.\n3. Define escape assumptions and monitoring requirements.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Sandbox Security for Agent Workloads. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Build a threat-model checklist for a disposable execution worker with no secrets, read-only base image, bounded scratch storage, and denied network access. Address this misconception or failure mode explicitly: Assuming one isolation layer eliminates all escape or side-channel risks. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-secret-exposure-and-credential-handling",
      "title": "Secret Exposure and Credential Handling",
      "subtitle": "Secret exposure in agent systems can occur through prompts, memory, tool output, logs, environment variables, traces, or model-visible context.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Secret exposure in agent systems can occur through prompts, memory, tool output, logs, environment variables, traces, or model-visible context.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 13 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agent Code Execution Risks",
        "Sandbox Security for Agent Workloads",
        "Permission Boundaries and Human Approval Controls",
        "Agent Security Assessment Methodology"
      ],
      "objectives": [
        "Identify secret paths across agent and tool components.",
        "Apply secret scoping, brokering, rotation, and redaction.",
        "Test that synthetic canary secrets do not enter model-visible or user-visible channels."
      ],
      "keywords": [
        "secret exposure and credential handling",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agent code execution risks",
        "sandbox security for agent workloads",
        "permission boundaries and human approval controls",
        "agent security assessment methodology",
        "identify secret paths across agent and tool components.",
        "apply secret scoping, brokering, rotation, and redaction.",
        "test that synthetic canary secrets do not enter model-visible or user-visible channels."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Secret Exposure and Credential Handling\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Secret exposure in agent systems can occur through prompts, memory, tool output, logs, environment variables, traces, or model-visible context.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agent Code Execution Risks, Sandbox Security for Agent Workloads, Permission Boundaries and Human Approval Controls, Agent Security Assessment Methodology.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 13 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify secret paths across agent and tool components.\n2. Apply secret scoping, brokering, rotation, and redaction.\n3. Test that synthetic canary secrets do not enter model-visible or user-visible channels.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Secret Exposure and Credential Handling. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Place a fake API key in a local secret broker and verify that the agent receives only a narrow operation result, never the raw secret. Address this misconception or failure mode explicitly: Passing long-lived credentials into the model context because it is convenient. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-permission-boundaries-and-human-approval-controls",
      "title": "Permission Boundaries and Human Approval Controls",
      "subtitle": "Permission boundaries define which actions an agent may request or perform; human approval controls add accountable authorization for sensitive or irreversible operations.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Permission boundaries define which actions an agent may request or perform; human approval controls add accountable authorization for sensitive or irreversible operations.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 14 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Sandbox Security for Agent Workloads",
        "Secret Exposure and Credential Handling",
        "Agent Security Assessment Methodology",
        "Defensive Design for Agentic Systems"
      ],
      "objectives": [
        "Classify actions by sensitivity, reversibility, and impact.",
        "Design policy enforcement outside the model.",
        "Specify approval context, identity, expiry, and audit evidence."
      ],
      "keywords": [
        "permission boundaries and human approval controls",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "sandbox security for agent workloads",
        "secret exposure and credential handling",
        "agent security assessment methodology",
        "defensive design for agentic systems",
        "classify actions by sensitivity, reversibility, and impact.",
        "design policy enforcement outside the model.",
        "specify approval context, identity, expiry, and audit evidence."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Permission Boundaries and Human Approval Controls\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Permission boundaries define which actions an agent may request or perform; human approval controls add accountable authorization for sensitive or irreversible operations.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Sandbox Security for Agent Workloads, Secret Exposure and Credential Handling, Agent Security Assessment Methodology, Defensive Design for Agentic Systems.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 14 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Classify actions by sensitivity, reversibility, and impact.\n2. Design policy enforcement outside the model.\n3. Specify approval context, identity, expiry, and audit evidence.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Permission Boundaries and Human Approval Controls. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Implement an approval gate in a local mock workflow before a synthetic account change; test approval expiry and changed parameters. Address this misconception or failure mode explicitly: Treating a generic “Are you sure?” dialog as meaningful approval when action details can change afterward. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-agent-security-assessment-methodology",
      "title": "Agent Security Assessment Methodology",
      "subtitle": "Agent security assessment evaluates goals, state transitions, tool permissions, memory, identity, and behavior under adversarial but controlled inputs.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent security assessment evaluates goals, state transitions, tool permissions, memory, identity, and behavior under adversarial but controlled inputs.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 15 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Secret Exposure and Credential Handling",
        "Permission Boundaries and Human Approval Controls",
        "Defensive Design for Agentic Systems",
        "Agent Security Testing and Incident Readiness"
      ],
      "objectives": [
        "Build test cases from an agent threat model.",
        "Measure both model behavior and actual tool-side effects.",
        "Capture traces, versions, policy decisions, and reproducible outcomes."
      ],
      "keywords": [
        "agent security assessment methodology",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "secret exposure and credential handling",
        "permission boundaries and human approval controls",
        "defensive design for agentic systems",
        "agent security testing and incident readiness",
        "build test cases from an agent threat model.",
        "measure both model behavior and actual tool-side effects.",
        "capture traces, versions, policy decisions, and reproducible outcomes."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agent Security Assessment Methodology\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent security assessment evaluates goals, state transitions, tool permissions, memory, identity, and behavior under adversarial but controlled inputs.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Secret Exposure and Credential Handling, Permission Boundaries and Human Approval Controls, Defensive Design for Agentic Systems, Agent Security Testing and Incident Readiness.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 15 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Build test cases from an agent threat model.\n2. Measure both model behavior and actual tool-side effects.\n3. Capture traces, versions, policy decisions, and reproducible outcomes.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agent Security Assessment Methodology. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a scoped test matrix for a local agent with two mock tools, synthetic users, and a resettable memory store. Address this misconception or failure mode explicitly: Scoring only text responses while ignoring actual tool execution and side effects. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-defensive-design-for-agentic-systems",
      "title": "Defensive Design for Agentic Systems",
      "subtitle": "Defensive agent design combines constrained capabilities, deterministic policy checks, isolation, provenance, observability, rate limits, and human control at high-impact boundaries.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Defensive agent design combines constrained capabilities, deterministic policy checks, isolation, provenance, observability, rate limits, and human control at high-impact boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 16 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Permission Boundaries and Human Approval Controls",
        "Agent Security Assessment Methodology",
        "Agent Security Testing and Incident Readiness"
      ],
      "objectives": [
        "Place controls at host, orchestrator, tool, identity, and infrastructure layers.",
        "Use fail-closed behavior for ambiguous or unauthorized actions.",
        "Design monitoring and recovery for partial or repeated agent failures."
      ],
      "keywords": [
        "defensive design for agentic systems",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "permission boundaries and human approval controls",
        "agent security assessment methodology",
        "agent security testing and incident readiness",
        "place controls at host, orchestrator, tool, identity, and infrastructure layers.",
        "use fail-closed behavior for ambiguous or unauthorized actions.",
        "design monitoring and recovery for partial or repeated agent failures."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Defensive Design for Agentic Systems\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Defensive agent design combines constrained capabilities, deterministic policy checks, isolation, provenance, observability, rate limits, and human control at high-impact boundaries.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Permission Boundaries and Human Approval Controls, Agent Security Assessment Methodology, Agent Security Testing and Incident Readiness.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 16 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Place controls at host, orchestrator, tool, identity, and infrastructure layers.\n2. Use fail-closed behavior for ambiguous or unauthorized actions.\n3. Design monitoring and recovery for partial or repeated agent failures.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Defensive Design for Agentic Systems. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Develop a defense-in-depth architecture for an agent that can search public documentation but requires approval before writing to internal systems. Address this misconception or failure mode explicitly: Expecting a single guardrail prompt or classifier to enforce every security property. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-21-agent-security-testing-and-incident-readiness",
      "title": "Agent Security Testing and Incident Readiness",
      "subtitle": "Agent security testing and incident readiness connect pre-deployment validation with runtime detection, trace preservation, containment, and recovery.",
      "category": "Agentic AI Architecture & Tool Security",
      "difficulty": "Advanced",
      "definition": "Agent security testing and incident readiness connect pre-deployment validation with runtime detection, trace preservation, containment, and recovery.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-21-agentic-ai-tool-security",
      "moduleTitle": "Agentic AI & Tool Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 17 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 08 — AI agents, tool calling, and MCP fundamentals",
        "Module 16 — AI agents, automation, and pentesting integration"
      ],
      "relatedConcepts": [
        "Agent Security Assessment Methodology",
        "Defensive Design for Agentic Systems"
      ],
      "objectives": [
        "Define security telemetry for plans, tool calls, identity, and approvals.",
        "Create containment steps for compromised memory, tools, or credentials.",
        "Verify audit completeness while minimizing sensitive logging."
      ],
      "keywords": [
        "agent security testing and incident readiness",
        "agentic ai & tool security",
        "agentic ai architecture & tool security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "agent security assessment methodology",
        "defensive design for agentic systems",
        "define security telemetry for plans, tool calls, identity, and approvals.",
        "create containment steps for compromised memory, tools, or credentials.",
        "verify audit completeness while minimizing sensitive logging."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Agent Security Testing and Incident Readiness\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 21 — Agentic AI & Tool Security.\nTopic definition: Agent security testing and incident readiness connect pre-deployment validation with runtime detection, trace preservation, containment, and recovery.\nPrerequisites to explain briefly where needed: Module 08 — AI agents, tool calling, and MCP fundamentals; Module 16 — AI agents, automation, and pentesting integration.\nRelated concepts: Agent Security Assessment Methodology, Defensive Design for Agentic Systems.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 21 — Agentic AI & Tool Security. Curriculum position 17 of 17. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Define security telemetry for plans, tool calls, identity, and approvals.\n2. Create containment steps for compromised memory, tools, or credentials.\n3. Verify audit completeness while minimizing sensitive logging.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Agent Security Testing and Incident Readiness. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Run a tabletop exercise for a simulated agent that repeatedly requests an unauthorized mock action; preserve traces and revoke its synthetic capability. Address this misconception or failure mode explicitly: Logging every prompt and tool payload indefinitely without privacy, minimization, or access controls. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    }
  ]
});
