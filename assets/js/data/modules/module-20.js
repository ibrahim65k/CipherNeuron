/* CipherNeuron curriculum data — Module 20. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-20-rag-knowledge-security",
  "number": "20",
  "partId": "part-04",
  "title": "RAG & Knowledge System Security",
  "subtitle": "Assess retrieval pipelines, document provenance, vector stores, tenant isolation, and the integrity of grounded AI responses.",
  "description": "Understand and test the security of Retrieval-Augmented Generation systems, from ingestion and embeddings to retrieval, access control, attribution, and data exfiltration.",
  "difficulty": "Advanced",
  "estimatedTime": "12–16 hours",
  "prerequisites": [
    "Module 08 — RAG and modern AI architectures",
    "Module 17 — AI Security Fundamentals & Threat Modeling",
    "Module 19 — LLM application testing concepts",
    "Basic databases, APIs, and access-control knowledge"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-19-llm-generative-ai-pentesting",
    "module-21-agentic-ai-tool-security"
  ],
  "objectives": [
    "Trace RAG ingestion, indexing, retrieval, and generation trust boundaries.",
    "Identify poisoning, retrieval manipulation, embedding, and vector-store risks.",
    "Test tenant isolation, authorization, and source attribution.",
    "Design layered controls and evaluate RAG security with reproducible evidence."
  ],
  "topics": [
    {
      "id": "topic-p04-20-rag-security-architecture",
      "title": "RAG Security Architecture",
      "subtitle": "RAG security architecture protects the ingestion, parsing, chunking, embedding, indexing, retrieval, context assembly, and generation stages as one connected data system.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Intermediate to Advanced",
      "definition": "RAG security architecture protects the ingestion, parsing, chunking, embedding, indexing, retrieval, context assembly, and generation stages as one connected data system.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 1 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Module 08 — RAG and modern AI architectures",
        "Module 17 — AI Security Fundamentals & Threat Modeling"
      ],
      "relatedConcepts": [
        "RAG Attack Surfaces",
        "Document Poisoning",
        "Knowledge Base Poisoning"
      ],
      "objectives": [
        "Trace data and identity through a RAG pipeline.",
        "Identify trust boundaries and enforcement points.",
        "Distinguish retrieval correctness from access authorization."
      ],
      "keywords": [
        "rag security architecture",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag attack surfaces",
        "document poisoning",
        "knowledge base poisoning",
        "trace data and identity through a rag pipeline.",
        "identify trust boundaries and enforcement points.",
        "distinguish retrieval correctness from access authorization."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Security Architecture\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG security architecture protects the ingestion, parsing, chunking, embedding, indexing, retrieval, context assembly, and generation stages as one connected data system.\nPrerequisites to bridge briefly: Module 08 — RAG and modern AI architectures; Module 17 — AI Security Fundamentals & Threat Modeling.\nRelated concepts: RAG Attack Surfaces, Document Poisoning, Knowledge Base Poisoning.\n\nLEARNING OBJECTIVES\n1. Trace data and identity through a RAG pipeline.\n2. Identify trust boundaries and enforcement points.\n3. Distinguish retrieval correctness from access authorization.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Security Architecture.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Diagram a multi-tenant RAG assistant from document upload through vector search and answer citation.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Securing the vector database while ignoring ingestion workers, metadata filters, and generated output.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-attack-surfaces",
      "title": "RAG Attack Surfaces",
      "subtitle": "RAG attack surfaces include document sources, parsers, metadata, embedding models, vector indexes, query construction, retrieval filters, caches, and response rendering.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Intermediate to Advanced",
      "definition": "RAG attack surfaces include document sources, parsers, metadata, embedding models, vector indexes, query construction, retrieval filters, caches, and response rendering.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 2 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Security Architecture",
        "Document Poisoning",
        "Knowledge Base Poisoning",
        "RAG Poisoning"
      ],
      "objectives": [
        "Inventory attack surfaces across the pipeline.",
        "Identify attacker-controlled content and parameters.",
        "Prioritize surfaces by data sensitivity and privilege."
      ],
      "keywords": [
        "rag attack surfaces",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag security architecture",
        "document poisoning",
        "knowledge base poisoning",
        "rag poisoning",
        "inventory attack surfaces across the pipeline.",
        "identify attacker-controlled content and parameters.",
        "prioritize surfaces by data sensitivity and privilege."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Attack Surfaces\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG attack surfaces include document sources, parsers, metadata, embedding models, vector indexes, query construction, retrieval filters, caches, and response rendering.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Security Architecture, Document Poisoning, Knowledge Base Poisoning, RAG Poisoning.\n\nLEARNING OBJECTIVES\n1. Inventory attack surfaces across the pipeline.\n2. Identify attacker-controlled content and parameters.\n3. Prioritize surfaces by data sensitivity and privilege.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Attack Surfaces.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build a component-level attack-surface checklist for an internal knowledge assistant.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating RAG as a single vector database rather than a multi-stage data-processing pipeline.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-document-poisoning",
      "title": "Document Poisoning",
      "subtitle": "Document poisoning inserts or modifies content so that future retrieval or generated answers are biased, misleading, or unsafe.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Intermediate to Advanced",
      "definition": "Document poisoning inserts or modifies content so that future retrieval or generated answers are biased, misleading, or unsafe.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 3 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Security Architecture",
        "RAG Attack Surfaces",
        "Knowledge Base Poisoning",
        "RAG Poisoning",
        "Retrieval Manipulation"
      ],
      "objectives": [
        "Explain ingestion trust and document provenance.",
        "Identify poisoning opportunities in uploads and synced sources.",
        "Design safe corpus integrity checks."
      ],
      "keywords": [
        "document poisoning",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag security architecture",
        "rag attack surfaces",
        "knowledge base poisoning",
        "rag poisoning",
        "retrieval manipulation",
        "explain ingestion trust and document provenance.",
        "identify poisoning opportunities in uploads and synced sources.",
        "design safe corpus integrity checks."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Document Poisoning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Document poisoning inserts or modifies content so that future retrieval or generated answers are biased, misleading, or unsafe.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Security Architecture, RAG Attack Surfaces, Knowledge Base Poisoning, RAG Poisoning, Retrieval Manipulation.\n\nLEARNING OBJECTIVES\n1. Explain ingestion trust and document provenance.\n2. Identify poisoning opportunities in uploads and synced sources.\n3. Design safe corpus integrity checks.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Document Poisoning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a local synthetic corpus with clearly labeled poisoned test documents and compare retrieval outcomes.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming content is trustworthy because it passed file-type checks or came from an approved connector.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-knowledge-base-poisoning",
      "title": "Knowledge Base Poisoning",
      "subtitle": "Knowledge base poisoning manipulates indexed records, metadata, or source content to persistently influence downstream retrieval and responses.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Knowledge base poisoning manipulates indexed records, metadata, or source content to persistently influence downstream retrieval and responses.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 4 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Security Architecture",
        "RAG Attack Surfaces",
        "Document Poisoning",
        "RAG Poisoning",
        "Retrieval Manipulation"
      ],
      "objectives": [
        "Distinguish source poisoning from index tampering.",
        "Trace update and deletion propagation.",
        "Assess integrity and ownership controls."
      ],
      "keywords": [
        "knowledge base poisoning",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag security architecture",
        "rag attack surfaces",
        "document poisoning",
        "rag poisoning",
        "retrieval manipulation",
        "distinguish source poisoning from index tampering.",
        "trace update and deletion propagation.",
        "assess integrity and ownership controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Knowledge Base Poisoning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Knowledge base poisoning manipulates indexed records, metadata, or source content to persistently influence downstream retrieval and responses.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Security Architecture, RAG Attack Surfaces, Document Poisoning, RAG Poisoning, Retrieval Manipulation.\n\nLEARNING OBJECTIVES\n1. Distinguish source poisoning from index tampering.\n2. Trace update and deletion propagation.\n3. Assess integrity and ownership controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Knowledge Base Poisoning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Model a compromised knowledge-source workflow and verify detection through provenance and version metadata.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Checking document text but ignoring metadata, source identity, index version, and stale replicas.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-poisoning",
      "title": "RAG Poisoning",
      "subtitle": "RAG poisoning places adversarial content into a retrieval-augmented generation corpus or index so future queries retrieve context that biases or compromises generated responses.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "RAG poisoning places adversarial content into a retrieval-augmented generation corpus or index so future queries retrieve context that biases or compromises generated responses.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 5 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Attack Surfaces",
        "Document Poisoning",
        "Knowledge Base Poisoning",
        "Retrieval Manipulation",
        "Embedding Security and Attacks"
      ],
      "objectives": [
        "Explain poisoning paths across source repositories, ingestion, chunking, and indexing.",
        "Assess persistence, retrieval likelihood, and downstream influence.",
        "Design provenance, review, and quarantine controls."
      ],
      "keywords": [
        "rag poisoning",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag attack surfaces",
        "document poisoning",
        "knowledge base poisoning",
        "retrieval manipulation",
        "embedding security and attacks",
        "explain poisoning paths across source repositories, ingestion, chunking, and indexing.",
        "assess persistence, retrieval likelihood, and downstream influence.",
        "design provenance, review, and quarantine controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Poisoning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG poisoning places adversarial content into a retrieval-augmented generation corpus or index so future queries retrieve context that biases or compromises generated responses.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Attack Surfaces, Document Poisoning, Knowledge Base Poisoning, Retrieval Manipulation, Embedding Security and Attacks.\n\nLEARNING OBJECTIVES\n1. Explain poisoning paths across source repositories, ingestion, chunking, and indexing.\n2. Assess persistence, retrieval likelihood, and downstream influence.\n3. Design provenance, review, and quarantine controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Poisoning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Seed a local synthetic RAG corpus with a clearly labeled poisoned document and measure whether controlled queries retrieve it and how the answer changes.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming one malicious chunk always controls generation or overlooking source permissions and retrieval ranking.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-retrieval-manipulation",
      "title": "Retrieval Manipulation",
      "subtitle": "Retrieval manipulation changes which chunks are selected or ranked, causing the model to receive incomplete, biased, irrelevant, or attacker-favored context.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Retrieval manipulation changes which chunks are selected or ranked, causing the model to receive incomplete, biased, irrelevant, or attacker-favored context.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 6 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Document Poisoning",
        "Knowledge Base Poisoning",
        "RAG Poisoning",
        "Embedding Security and Attacks",
        "Vector Database Security"
      ],
      "objectives": [
        "Explain similarity search, ranking, filters, and query rewriting.",
        "Identify manipulation points.",
        "Evaluate retrieval quality independently of generation."
      ],
      "keywords": [
        "retrieval manipulation",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "document poisoning",
        "knowledge base poisoning",
        "rag poisoning",
        "embedding security and attacks",
        "vector database security",
        "explain similarity search, ranking, filters, and query rewriting.",
        "identify manipulation points.",
        "evaluate retrieval quality independently of generation."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Retrieval Manipulation\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Retrieval manipulation changes which chunks are selected or ranked, causing the model to receive incomplete, biased, irrelevant, or attacker-favored context.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Document Poisoning, Knowledge Base Poisoning, RAG Poisoning, Embedding Security and Attacks, Vector Database Security.\n\nLEARNING OBJECTIVES\n1. Explain similarity search, ranking, filters, and query rewriting.\n2. Identify manipulation points.\n3. Evaluate retrieval quality independently of generation.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Retrieval Manipulation.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Compare top-k results for benign and adversarial synthetic queries in a local vector index.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Attributing a bad answer solely to the model when the retrieved context was already manipulated.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-embedding-security-and-attacks",
      "title": "Embedding Security and Attacks",
      "subtitle": "Embedding security concerns how text or other content is transformed into vectors and how embedding behavior, similarity, and metadata can expose or distort information.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Embedding security concerns how text or other content is transformed into vectors and how embedding behavior, similarity, and metadata can expose or distort information.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 7 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Knowledge Base Poisoning",
        "RAG Poisoning",
        "Retrieval Manipulation",
        "Vector Database Security",
        "Unauthorized Retrieval"
      ],
      "objectives": [
        "Explain embedding generation and vector similarity.",
        "Identify model substitution, inversion, and collision-like risks.",
        "Assess embedding provenance and access."
      ],
      "keywords": [
        "embedding security and attacks",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "knowledge base poisoning",
        "rag poisoning",
        "retrieval manipulation",
        "vector database security",
        "unauthorized retrieval",
        "explain embedding generation and vector similarity.",
        "identify model substitution, inversion, and collision-like risks.",
        "assess embedding provenance and access."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Embedding Security and Attacks\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Embedding security concerns how text or other content is transformed into vectors and how embedding behavior, similarity, and metadata can expose or distort information.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Knowledge Base Poisoning, RAG Poisoning, Retrieval Manipulation, Vector Database Security, Unauthorized Retrieval.\n\nLEARNING OBJECTIVES\n1. Explain embedding generation and vector similarity.\n2. Identify model substitution, inversion, and collision-like risks.\n3. Assess embedding provenance and access.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Embedding Security and Attacks.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Inspect embeddings from a small synthetic corpus and document what vector access reveals and does not reveal.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming embeddings are anonymized or harmless simply because they are not readable plaintext.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-vector-database-security",
      "title": "Vector Database Security",
      "subtitle": "Vector database security protects vectors, payload metadata, collections, indexes, APIs, backups, and administrative operations from unauthorized access or tampering.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Vector database security protects vectors, payload metadata, collections, indexes, APIs, backups, and administrative operations from unauthorized access or tampering.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 8 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Poisoning",
        "Retrieval Manipulation",
        "Embedding Security and Attacks",
        "Unauthorized Retrieval",
        "Cross-Tenant Data Leakage"
      ],
      "objectives": [
        "Identify vector-store assets and roles.",
        "Review network exposure, authentication, and collection permissions.",
        "Assess backup and deletion behavior."
      ],
      "keywords": [
        "vector database security",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag poisoning",
        "retrieval manipulation",
        "embedding security and attacks",
        "unauthorized retrieval",
        "cross-tenant data leakage",
        "identify vector-store assets and roles.",
        "review network exposure, authentication, and collection permissions.",
        "assess backup and deletion behavior."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Vector Database Security\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Vector database security protects vectors, payload metadata, collections, indexes, APIs, backups, and administrative operations from unauthorized access or tampering.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Poisoning, Retrieval Manipulation, Embedding Security and Attacks, Unauthorized Retrieval, Cross-Tenant Data Leakage.\n\nLEARNING OBJECTIVES\n1. Identify vector-store assets and roles.\n2. Review network exposure, authentication, and collection permissions.\n3. Assess backup and deletion behavior.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Vector Database Security.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a security checklist for a local vector database with separate reader, writer, and administrator roles.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Securing query endpoints but leaving management APIs, snapshots, or backups exposed.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-unauthorized-retrieval",
      "title": "Unauthorized Retrieval",
      "subtitle": "Unauthorized retrieval occurs when a RAG query returns documents or chunks that the requesting identity is not permitted to access.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Unauthorized retrieval occurs when a RAG query returns documents or chunks that the requesting identity is not permitted to access.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 9 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Retrieval Manipulation",
        "Embedding Security and Attacks",
        "Vector Database Security",
        "Cross-Tenant Data Leakage",
        "RAG Access Control Design"
      ],
      "objectives": [
        "Trace authorization from source to retrieved chunk.",
        "Test server-side filtering and identity propagation.",
        "Validate with synthetic access-controlled records."
      ],
      "keywords": [
        "unauthorized retrieval",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "retrieval manipulation",
        "embedding security and attacks",
        "vector database security",
        "cross-tenant data leakage",
        "rag access control design",
        "trace authorization from source to retrieved chunk.",
        "test server-side filtering and identity propagation.",
        "validate with synthetic access-controlled records."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Unauthorized Retrieval\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Unauthorized retrieval occurs when a RAG query returns documents or chunks that the requesting identity is not permitted to access.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Retrieval Manipulation, Embedding Security and Attacks, Vector Database Security, Cross-Tenant Data Leakage, RAG Access Control Design.\n\nLEARNING OBJECTIVES\n1. Trace authorization from source to retrieved chunk.\n2. Test server-side filtering and identity propagation.\n3. Validate with synthetic access-controlled records.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Unauthorized Retrieval.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create two test users with distinct document permissions and test direct, semantic, and filtered retrieval paths.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Applying access checks only after retrieval or trusting client-supplied tenant identifiers.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-cross-tenant-data-leakage",
      "title": "Cross-Tenant Data Leakage",
      "subtitle": "Cross-tenant leakage exposes one customer’s or user group’s indexed content, embeddings, metadata, or cached context to another tenant.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Cross-tenant leakage exposes one customer’s or user group’s indexed content, embeddings, metadata, or cached context to another tenant.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 10 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Embedding Security and Attacks",
        "Vector Database Security",
        "Unauthorized Retrieval",
        "RAG Access Control Design",
        "RAG Data Exfiltration"
      ],
      "objectives": [
        "Identify tenant boundaries in every pipeline stage.",
        "Test collection, filter, cache, and background-job isolation.",
        "Use canary records to prove leakage safely."
      ],
      "keywords": [
        "cross-tenant data leakage",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "embedding security and attacks",
        "vector database security",
        "unauthorized retrieval",
        "rag access control design",
        "rag data exfiltration",
        "identify tenant boundaries in every pipeline stage.",
        "test collection, filter, cache, and background-job isolation.",
        "use canary records to prove leakage safely."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Cross-Tenant Data Leakage\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Cross-tenant leakage exposes one customer’s or user group’s indexed content, embeddings, metadata, or cached context to another tenant.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Embedding Security and Attacks, Vector Database Security, Unauthorized Retrieval, RAG Access Control Design, RAG Data Exfiltration.\n\nLEARNING OBJECTIVES\n1. Identify tenant boundaries in every pipeline stage.\n2. Test collection, filter, cache, and background-job isolation.\n3. Use canary records to prove leakage safely.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Cross-Tenant Data Leakage.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Run parallel synthetic tenant queries and inspect retrieval results, caches, and citations for crossover.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Checking only collection names while ignoring shared indexes, caches, logs, and asynchronous ingestion.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-access-control-design",
      "title": "RAG Access Control Design",
      "subtitle": "RAG access control ensures that identity, document permissions, tenant boundaries, and policy decisions remain enforced throughout ingestion and retrieval.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "RAG access control ensures that identity, document permissions, tenant boundaries, and policy decisions remain enforced throughout ingestion and retrieval.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 11 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Vector Database Security",
        "Unauthorized Retrieval",
        "Cross-Tenant Data Leakage",
        "RAG Data Exfiltration",
        "Source Attribution and Citation Manipulation"
      ],
      "objectives": [
        "Compare document-level, chunk-level, and query-time authorization.",
        "Propagate identity securely across services.",
        "Design fail-closed behavior for missing policy context."
      ],
      "keywords": [
        "rag access control design",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "vector database security",
        "unauthorized retrieval",
        "cross-tenant data leakage",
        "rag data exfiltration",
        "source attribution and citation manipulation",
        "compare document-level, chunk-level, and query-time authorization.",
        "propagate identity securely across services.",
        "design fail-closed behavior for missing policy context."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Access Control Design\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG access control ensures that identity, document permissions, tenant boundaries, and policy decisions remain enforced throughout ingestion and retrieval.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Vector Database Security, Unauthorized Retrieval, Cross-Tenant Data Leakage, RAG Data Exfiltration, Source Attribution and Citation Manipulation.\n\nLEARNING OBJECTIVES\n1. Compare document-level, chunk-level, and query-time authorization.\n2. Propagate identity securely across services.\n3. Design fail-closed behavior for missing policy context.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Access Control Design.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Design a policy flow for role-based access to documents with inherited folder permissions.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Relying on the LLM to filter restricted content after it has already entered the context window.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-data-exfiltration",
      "title": "RAG Data Exfiltration",
      "subtitle": "RAG data exfiltration occurs when sensitive retrieved content is induced, routed, or rendered outside its authorized destination.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "RAG data exfiltration occurs when sensitive retrieved content is induced, routed, or rendered outside its authorized destination.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 12 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Unauthorized Retrieval",
        "Cross-Tenant Data Leakage",
        "RAG Access Control Design",
        "Source Attribution and Citation Manipulation",
        "RAG Evaluation and Security Testing"
      ],
      "objectives": [
        "Trace possible data egress paths.",
        "Assess output, tool, citation, and logging channels.",
        "Apply data minimization and egress controls."
      ],
      "keywords": [
        "rag data exfiltration",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "unauthorized retrieval",
        "cross-tenant data leakage",
        "rag access control design",
        "source attribution and citation manipulation",
        "rag evaluation and security testing",
        "trace possible data egress paths.",
        "assess output, tool, citation, and logging channels.",
        "apply data minimization and egress controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Data Exfiltration\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG data exfiltration occurs when sensitive retrieved content is induced, routed, or rendered outside its authorized destination.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Unauthorized Retrieval, Cross-Tenant Data Leakage, RAG Access Control Design, Source Attribution and Citation Manipulation, RAG Evaluation and Security Testing.\n\nLEARNING OBJECTIVES\n1. Trace possible data egress paths.\n2. Assess output, tool, citation, and logging channels.\n3. Apply data minimization and egress controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Data Exfiltration.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use synthetic canary documents to test whether restricted content can reach a user-visible answer or mock external connector.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Focusing only on direct answer text and overlooking URLs, citations, tool calls, logs, and telemetry.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-source-attribution-and-citation-manipulation",
      "title": "Source Attribution and Citation Manipulation",
      "subtitle": "Source attribution manipulation causes a RAG system to misrepresent, omit, or bias the origin and reliability of retrieved information.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Source attribution manipulation causes a RAG system to misrepresent, omit, or bias the origin and reliability of retrieved information.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 13 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Cross-Tenant Data Leakage",
        "RAG Access Control Design",
        "RAG Data Exfiltration",
        "RAG Evaluation and Security Testing",
        "Defensive RAG Architectures"
      ],
      "objectives": [
        "Explain source metadata and citation generation.",
        "Test whether citations map to actual retrieved chunks.",
        "Distinguish grounded claims from unsupported synthesis."
      ],
      "keywords": [
        "source attribution and citation manipulation",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "cross-tenant data leakage",
        "rag access control design",
        "rag data exfiltration",
        "rag evaluation and security testing",
        "defensive rag architectures",
        "explain source metadata and citation generation.",
        "test whether citations map to actual retrieved chunks.",
        "distinguish grounded claims from unsupported synthesis."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Source Attribution and Citation Manipulation\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Source attribution manipulation causes a RAG system to misrepresent, omit, or bias the origin and reliability of retrieved information.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Cross-Tenant Data Leakage, RAG Access Control Design, RAG Data Exfiltration, RAG Evaluation and Security Testing, Defensive RAG Architectures.\n\nLEARNING OBJECTIVES\n1. Explain source metadata and citation generation.\n2. Test whether citations map to actual retrieved chunks.\n3. Distinguish grounded claims from unsupported synthesis.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Source Attribution and Citation Manipulation.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Seed documents with conflicting provenance labels and verify that displayed citations preserve the authoritative source identity.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating a generated citation as proof that the cited source supports the claim.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-evaluation-and-security-testing",
      "title": "RAG Evaluation and Security Testing",
      "subtitle": "RAG evaluation measures retrieval relevance, groundedness, access-control correctness, data isolation, robustness, and resistance to poisoned content.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "RAG evaluation measures retrieval relevance, groundedness, access-control correctness, data isolation, robustness, and resistance to poisoned content.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 14 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Access Control Design",
        "RAG Data Exfiltration",
        "Source Attribution and Citation Manipulation",
        "Defensive RAG Architectures",
        "RAG Security Assessment Methodology"
      ],
      "objectives": [
        "Define security-specific test metrics and expected behavior.",
        "Separate retrieval evaluation from answer evaluation.",
        "Build repeatable test corpora and adversarial cases."
      ],
      "keywords": [
        "rag evaluation and security testing",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag access control design",
        "rag data exfiltration",
        "source attribution and citation manipulation",
        "defensive rag architectures",
        "rag security assessment methodology",
        "define security-specific test metrics and expected behavior.",
        "separate retrieval evaluation from answer evaluation.",
        "build repeatable test corpora and adversarial cases."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Evaluation and Security Testing\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG evaluation measures retrieval relevance, groundedness, access-control correctness, data isolation, robustness, and resistance to poisoned content.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Access Control Design, RAG Data Exfiltration, Source Attribution and Citation Manipulation, Defensive RAG Architectures, RAG Security Assessment Methodology.\n\nLEARNING OBJECTIVES\n1. Define security-specific test metrics and expected behavior.\n2. Separate retrieval evaluation from answer evaluation.\n3. Build repeatable test corpora and adversarial cases.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Evaluation and Security Testing.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a regression suite with synthetic tenants, poisoned documents, expected retrieval sets, and groundedness checks.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Using answer quality metrics alone as a substitute for security testing.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-defensive-rag-architectures",
      "title": "Defensive RAG Architectures",
      "subtitle": "Defensive RAG architectures combine trusted ingestion, provenance, content scanning, tenant-aware retrieval, authorization, constrained context, output controls, and monitoring.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "Defensive RAG architectures combine trusted ingestion, provenance, content scanning, tenant-aware retrieval, authorization, constrained context, output controls, and monitoring.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 15 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Data Exfiltration",
        "Source Attribution and Citation Manipulation",
        "RAG Evaluation and Security Testing",
        "RAG Security Assessment Methodology",
        "RAG Threat Frameworks and Research Directions"
      ],
      "objectives": [
        "Place defenses at each pipeline stage.",
        "Compare preventive and detective controls.",
        "Design graceful failure and auditability."
      ],
      "keywords": [
        "defensive rag architectures",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag data exfiltration",
        "source attribution and citation manipulation",
        "rag evaluation and security testing",
        "rag security assessment methodology",
        "rag threat frameworks and research directions",
        "place defenses at each pipeline stage.",
        "compare preventive and detective controls.",
        "design graceful failure and auditability."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Defensive RAG Architectures\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: Defensive RAG architectures combine trusted ingestion, provenance, content scanning, tenant-aware retrieval, authorization, constrained context, output controls, and monitoring.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Data Exfiltration, Source Attribution and Citation Manipulation, RAG Evaluation and Security Testing, RAG Security Assessment Methodology, RAG Threat Frameworks and Research Directions.\n\nLEARNING OBJECTIVES\n1. Place defenses at each pipeline stage.\n2. Compare preventive and detective controls.\n3. Design graceful failure and auditability.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Defensive RAG Architectures.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Design a defense-in-depth RAG architecture for confidential internal documentation.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Relying on prompt instructions to compensate for missing data-layer authorization.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-security-assessment-methodology",
      "title": "RAG Security Assessment Methodology",
      "subtitle": "A RAG security assessment methodically tests source integrity, ingestion, indexing, retrieval, tenant boundaries, authorization, output channels, and remediation.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "A RAG security assessment methodically tests source integrity, ingestion, indexing, retrieval, tenant boundaries, authorization, output channels, and remediation.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 16 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "Source Attribution and Citation Manipulation",
        "RAG Evaluation and Security Testing",
        "Defensive RAG Architectures",
        "RAG Threat Frameworks and Research Directions"
      ],
      "objectives": [
        "Convert architecture into scoped test cases.",
        "Collect reproducible evidence with synthetic data.",
        "Retest fixes across pipeline stages."
      ],
      "keywords": [
        "rag security assessment methodology",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "source attribution and citation manipulation",
        "rag evaluation and security testing",
        "defensive rag architectures",
        "rag threat frameworks and research directions",
        "convert architecture into scoped test cases.",
        "collect reproducible evidence with synthetic data.",
        "retest fixes across pipeline stages."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Security Assessment Methodology\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: A RAG security assessment methodically tests source integrity, ingestion, indexing, retrieval, tenant boundaries, authorization, output channels, and remediation.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: Source Attribution and Citation Manipulation, RAG Evaluation and Security Testing, Defensive RAG Architectures, RAG Threat Frameworks and Research Directions.\n\nLEARNING OBJECTIVES\n1. Convert architecture into scoped test cases.\n2. Collect reproducible evidence with synthetic data.\n3. Retest fixes across pipeline stages.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Security Assessment Methodology.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Write and execute a safe assessment plan against a deliberately vulnerable local RAG lab.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Testing only the chat interface without inspecting or reasoning about ingestion and storage controls.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-20-rag-threat-frameworks-and-research-directions",
      "title": "RAG Threat Frameworks and Research Directions",
      "subtitle": "RAG security research connects practical pipeline threats with OWASP GenAI risks, MITRE ATLAS techniques, privacy research, retrieval evaluation, and emerging defenses.",
      "category": "RAG & Knowledge System Security",
      "difficulty": "Advanced",
      "definition": "RAG security research connects practical pipeline threats with OWASP GenAI risks, MITRE ATLAS techniques, privacy research, retrieval evaluation, and emerging defenses.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-20-rag-knowledge-security",
      "moduleTitle": "RAG & Knowledge System Security",
      "position": "Part 04 establishes the advanced AI security track. Module 20 develops rag & knowledge system security; this topic is sequence item 17 of 17. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "RAG Security Architecture",
        "Module 17 — AI threat modeling",
        "RAG and vector-search fundamentals"
      ],
      "relatedConcepts": [
        "RAG Evaluation and Security Testing",
        "Defensive RAG Architectures",
        "RAG Security Assessment Methodology"
      ],
      "objectives": [
        "Map RAG risks to current reference materials.",
        "Distinguish demonstrated techniques from research hypotheses.",
        "Identify open questions in provenance, isolation, and evaluation."
      ],
      "keywords": [
        "rag threat frameworks and research directions",
        "rag & knowledge system security",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "rag evaluation and security testing",
        "defensive rag architectures",
        "rag security assessment methodology",
        "map rag risks to current reference materials.",
        "distinguish demonstrated techniques from research hypotheses.",
        "identify open questions in provenance, isolation, and evaluation."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"RAG Threat Frameworks and Research Directions\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 20 — RAG & Knowledge System Security.\nTopic definition: RAG security research connects practical pipeline threats with OWASP GenAI risks, MITRE ATLAS techniques, privacy research, retrieval evaluation, and emerging defenses.\nPrerequisites to bridge briefly: RAG Security Architecture; Module 17 — AI threat modeling; RAG and vector-search fundamentals.\nRelated concepts: RAG Evaluation and Security Testing, Defensive RAG Architectures, RAG Security Assessment Methodology.\n\nLEARNING OBJECTIVES\n1. Map RAG risks to current reference materials.\n2. Distinguish demonstrated techniques from research hypotheses.\n3. Identify open questions in provenance, isolation, and evaluation.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of RAG Threat Frameworks and Research Directions.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Prepare a short research map for retrieval poisoning and cross-tenant isolation using primary technical references.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Presenting experimental findings as universal exploitability or citing obsolete framework editions.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    }
  ]
});
