/* CipherNeuron curriculum data — Module 18. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-18-adversarial-machine-learning",
  "number": "18",
  "partId": "part-04",
  "title": "Adversarial Machine Learning",
  "subtitle": "Understand how adversaries manipulate data, models, and inference behavior—and how to evaluate robustness and defenses.",
  "description": "Study adversarial ML across training and inference, including evasion, poisoning, model extraction, privacy attacks, robustness evaluation, and defensive research methods.",
  "difficulty": "Advanced",
  "estimatedTime": "12–16 hours",
  "prerequisites": [
    "Module 03 — Machine Learning Fundamentals",
    "Module 04 — Machine Learning Algorithms",
    "Module 05 — Deep Learning & Neural Networks",
    "Basic probability, statistics, and Python ML workflows"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-24-advanced-ai-security-research"
  ],
  "objectives": [
    "Classify adversarial ML threats by lifecycle stage and attacker capability.",
    "Explain evasion, poisoning, model theft, and privacy attack mechanisms.",
    "Design controlled robustness and privacy evaluations.",
    "Compare defenses and report experimental limitations."
  ],
  "topics": [
    {
      "id": "topic-p04-18-adversarial-machine-learning",
      "title": "Adversarial Machine Learning",
      "subtitle": "Adversarial Machine Learning studies how deliberate manipulation of inputs, training data, model access, or model artifacts can compromise ML behavior and security objectives.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Intermediate to Advanced",
      "definition": "Adversarial Machine Learning studies how deliberate manipulation of inputs, training data, model access, or model artifacts can compromise ML behavior and security objectives.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 1 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Module 03 — Machine Learning Fundamentals",
        "Module 04 — Machine Learning Algorithms"
      ],
      "relatedConcepts": [
        "Adversarial Examples",
        "Evasion Attacks",
        "Data Poisoning"
      ],
      "objectives": [
        "Define attacker goals, capabilities, and knowledge assumptions.",
        "Separate training-time and inference-time threats.",
        "Relate attack success to model task and deployment context."
      ],
      "keywords": [
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "adversarial examples",
        "evasion attacks",
        "data poisoning",
        "define attacker goals, capabilities, and knowledge assumptions.",
        "separate training-time and inference-time threats.",
        "relate attack success to model task and deployment context."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Adversarial Machine Learning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Adversarial Machine Learning studies how deliberate manipulation of inputs, training data, model access, or model artifacts can compromise ML behavior and security objectives.\nPrerequisites to bridge briefly: Module 03 — Machine Learning Fundamentals; Module 04 — Machine Learning Algorithms.\nRelated concepts: Adversarial Examples, Evasion Attacks, Data Poisoning.\n\nLEARNING OBJECTIVES\n1. Define attacker goals, capabilities, and knowledge assumptions.\n2. Separate training-time and inference-time threats.\n3. Relate attack success to model task and deployment context.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Adversarial Machine Learning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build a threat matrix for an image classifier and a fraud detector using toy datasets.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming one attack method transfers unchanged across models, tasks, and deployment settings.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-adversarial-examples",
      "title": "Adversarial Examples",
      "subtitle": "Adversarial examples are inputs intentionally modified to cause a model to make an incorrect or attacker-desired prediction while often remaining similar to an original input.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Intermediate to Advanced",
      "definition": "Adversarial examples are inputs intentionally modified to cause a model to make an incorrect or attacker-desired prediction while often remaining similar to an original input.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 2 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Adversarial Machine Learning",
        "Evasion Attacks",
        "Data Poisoning",
        "Model Poisoning"
      ],
      "objectives": [
        "Explain perturbations, decision boundaries, and threat models.",
        "Distinguish targeted from untargeted objectives.",
        "Interpret perturbation budgets and perceptual constraints."
      ],
      "keywords": [
        "adversarial examples",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "evasion attacks",
        "data poisoning",
        "model poisoning",
        "explain perturbations, decision boundaries, and threat models.",
        "distinguish targeted from untargeted objectives.",
        "interpret perturbation budgets and perceptual constraints."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Adversarial Examples\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Adversarial examples are inputs intentionally modified to cause a model to make an incorrect or attacker-desired prediction while often remaining similar to an original input.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Adversarial Machine Learning, Evasion Attacks, Data Poisoning, Model Poisoning.\n\nLEARNING OBJECTIVES\n1. Explain perturbations, decision boundaries, and threat models.\n2. Distinguish targeted from untargeted objectives.\n3. Interpret perturbation budgets and perceptual constraints.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Adversarial Examples.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a prebuilt toy classifier in an isolated notebook to compare clean and perturbed synthetic examples.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Calling every model error an adversarial example without demonstrating intentional construction and a defined threat model.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-evasion-attacks",
      "title": "Evasion Attacks",
      "subtitle": "Evasion attacks manipulate inference-time inputs so a deployed model misclassifies, misses, or incorrectly scores an example.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Intermediate to Advanced",
      "definition": "Evasion attacks manipulate inference-time inputs so a deployed model misclassifies, misses, or incorrectly scores an example.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 3 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Adversarial Machine Learning",
        "Adversarial Examples",
        "Data Poisoning",
        "Model Poisoning",
        "Backdoor Attacks"
      ],
      "objectives": [
        "Describe white-box, gray-box, and black-box assumptions.",
        "Explain targeted and untargeted evasion.",
        "Measure attack success alongside input constraints."
      ],
      "keywords": [
        "evasion attacks",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "adversarial examples",
        "data poisoning",
        "model poisoning",
        "backdoor attacks",
        "describe white-box, gray-box, and black-box assumptions.",
        "explain targeted and untargeted evasion.",
        "measure attack success alongside input constraints."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Evasion Attacks\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Evasion attacks manipulate inference-time inputs so a deployed model misclassifies, misses, or incorrectly scores an example.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Adversarial Machine Learning, Adversarial Examples, Data Poisoning, Model Poisoning, Backdoor Attacks.\n\nLEARNING OBJECTIVES\n1. Describe white-box, gray-box, and black-box assumptions.\n2. Explain targeted and untargeted evasion.\n3. Measure attack success alongside input constraints.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Evasion Attacks.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Evaluate a toy malware-feature classifier with benign synthetic feature perturbations in a local lab.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Ignoring preprocessing, distribution shift, detection thresholds, and downstream decision logic.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-data-poisoning",
      "title": "Data Poisoning",
      "subtitle": "Data poisoning contaminates training or adaptation data so the learned model behaves incorrectly, degrades, or favors an adversary-controlled outcome.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Data poisoning contaminates training or adaptation data so the learned model behaves incorrectly, degrades, or favors an adversary-controlled outcome.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 4 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Adversarial Machine Learning",
        "Adversarial Examples",
        "Evasion Attacks",
        "Model Poisoning",
        "Backdoor Attacks"
      ],
      "objectives": [
        "Identify poisoning opportunities in data collection and labeling.",
        "Explain availability and integrity objectives.",
        "Design data provenance and dataset-integrity checks."
      ],
      "keywords": [
        "data poisoning",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "adversarial examples",
        "evasion attacks",
        "model poisoning",
        "backdoor attacks",
        "identify poisoning opportunities in data collection and labeling.",
        "explain availability and integrity objectives.",
        "design data provenance and dataset-integrity checks."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Data Poisoning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Data poisoning contaminates training or adaptation data so the learned model behaves incorrectly, degrades, or favors an adversary-controlled outcome.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Adversarial Machine Learning, Adversarial Examples, Evasion Attacks, Model Poisoning, Backdoor Attacks.\n\nLEARNING OBJECTIVES\n1. Identify poisoning opportunities in data collection and labeling.\n2. Explain availability and integrity objectives.\n3. Design data provenance and dataset-integrity checks.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Data Poisoning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a tiny synthetic classification dataset and compare clean training with a deliberately mislabeled controlled copy.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Confusing naturally noisy data with adversarial poisoning or reporting impact without a clean baseline.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-model-poisoning",
      "title": "Model Poisoning",
      "subtitle": "Model poisoning alters model parameters, architecture, checkpoints, or packaged artifacts to change behavior or introduce malicious functionality.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Model poisoning alters model parameters, architecture, checkpoints, or packaged artifacts to change behavior or introduce malicious functionality.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 5 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Adversarial Examples",
        "Evasion Attacks",
        "Data Poisoning",
        "Backdoor Attacks",
        "Model Extraction and Model Stealing"
      ],
      "objectives": [
        "Distinguish data poisoning from artifact-level model poisoning.",
        "Identify artifact and distribution trust boundaries.",
        "Explain integrity verification and reproducible loading."
      ],
      "keywords": [
        "model poisoning",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "adversarial examples",
        "evasion attacks",
        "data poisoning",
        "backdoor attacks",
        "model extraction and model stealing",
        "distinguish data poisoning from artifact-level model poisoning.",
        "identify artifact and distribution trust boundaries.",
        "explain integrity verification and reproducible loading."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model Poisoning\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Model poisoning alters model parameters, architecture, checkpoints, or packaged artifacts to change behavior or introduce malicious functionality.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Adversarial Examples, Evasion Attacks, Data Poisoning, Backdoor Attacks, Model Extraction and Model Stealing.\n\nLEARNING OBJECTIVES\n1. Distinguish data poisoning from artifact-level model poisoning.\n2. Identify artifact and distribution trust boundaries.\n3. Explain integrity verification and reproducible loading.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model Poisoning.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Inspect hashes and provenance for benign sample checkpoints and document a safe model-import verification workflow.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming a valid file format or successful load proves an artifact is trustworthy.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-backdoor-attacks",
      "title": "Backdoor Attacks",
      "subtitle": "A backdoor attack embeds a hidden trigger-response behavior into a model so ordinary inputs appear normal while trigger-bearing inputs cause attacker-selected behavior.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "A backdoor attack embeds a hidden trigger-response behavior into a model so ordinary inputs appear normal while trigger-bearing inputs cause attacker-selected behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 6 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Evasion Attacks",
        "Data Poisoning",
        "Model Poisoning",
        "Model Extraction and Model Stealing",
        "Membership Inference"
      ],
      "objectives": [
        "Explain trigger, target label, poisoning rate, and activation conditions.",
        "Distinguish backdoors from general overfitting.",
        "Identify testing and detection challenges."
      ],
      "keywords": [
        "backdoor attacks",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "evasion attacks",
        "data poisoning",
        "model poisoning",
        "model extraction and model stealing",
        "membership inference",
        "explain trigger, target label, poisoning rate, and activation conditions.",
        "distinguish backdoors from general overfitting.",
        "identify testing and detection challenges."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Backdoor Attacks\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: A backdoor attack embeds a hidden trigger-response behavior into a model so ordinary inputs appear normal while trigger-bearing inputs cause attacker-selected behavior.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Evasion Attacks, Data Poisoning, Model Poisoning, Model Extraction and Model Stealing, Membership Inference.\n\nLEARNING OBJECTIVES\n1. Explain trigger, target label, poisoning rate, and activation conditions.\n2. Distinguish backdoors from general overfitting.\n3. Identify testing and detection challenges.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Backdoor Attacks.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Study a toy backdoor demonstration on a synthetic image dataset with non-deployable trigger patterns.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Evaluating only clean accuracy and overlooking conditional behavior or trigger coverage.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-model-extraction-and-model-stealing",
      "title": "Model Extraction and Model Stealing",
      "subtitle": "Model extraction uses repeated access to a target model’s outputs or exposed interfaces to approximate its functionality, parameters, or decision behavior.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Model extraction uses repeated access to a target model’s outputs or exposed interfaces to approximate its functionality, parameters, or decision behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 7 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Data Poisoning",
        "Model Poisoning",
        "Backdoor Attacks",
        "Membership Inference",
        "Model Inversion and Reconstruction"
      ],
      "objectives": [
        "Distinguish functionality replication from exact parameter recovery.",
        "Model query access and cost assumptions.",
        "Identify rate, output, and monitoring controls."
      ],
      "keywords": [
        "model extraction and model stealing",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "data poisoning",
        "model poisoning",
        "backdoor attacks",
        "membership inference",
        "model inversion and reconstruction",
        "distinguish functionality replication from exact parameter recovery.",
        "model query access and cost assumptions.",
        "identify rate, output, and monitoring controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model Extraction and Model Stealing\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Model extraction uses repeated access to a target model’s outputs or exposed interfaces to approximate its functionality, parameters, or decision behavior.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Data Poisoning, Model Poisoning, Backdoor Attacks, Membership Inference, Model Inversion and Reconstruction.\n\nLEARNING OBJECTIVES\n1. Distinguish functionality replication from exact parameter recovery.\n2. Model query access and cost assumptions.\n3. Identify rate, output, and monitoring controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model Extraction and Model Stealing.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Simulate extraction against a local toy prediction API with synthetic queries and compare surrogate fidelity.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Claiming exact model theft when the experiment only approximates selected outputs.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-membership-inference",
      "title": "Membership Inference",
      "subtitle": "Membership inference attempts to determine whether a particular record was included in a model’s training dataset by analyzing observable model behavior.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Membership inference attempts to determine whether a particular record was included in a model’s training dataset by analyzing observable model behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 8 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Model Poisoning",
        "Backdoor Attacks",
        "Model Extraction and Model Stealing",
        "Model Inversion and Reconstruction",
        "Privacy Attacks on ML Systems"
      ],
      "objectives": [
        "Explain membership privacy and attacker knowledge.",
        "Interpret confidence, loss, and shadow-model approaches.",
        "Measure privacy risk with appropriate baselines."
      ],
      "keywords": [
        "membership inference",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model poisoning",
        "backdoor attacks",
        "model extraction and model stealing",
        "model inversion and reconstruction",
        "privacy attacks on ml systems",
        "explain membership privacy and attacker knowledge.",
        "interpret confidence, loss, and shadow-model approaches.",
        "measure privacy risk with appropriate baselines."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Membership Inference\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Membership inference attempts to determine whether a particular record was included in a model’s training dataset by analyzing observable model behavior.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Model Poisoning, Backdoor Attacks, Model Extraction and Model Stealing, Model Inversion and Reconstruction, Privacy Attacks on ML Systems.\n\nLEARNING OBJECTIVES\n1. Explain membership privacy and attacker knowledge.\n2. Interpret confidence, loss, and shadow-model approaches.\n3. Measure privacy risk with appropriate baselines.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Membership Inference.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Run a small educational membership-inference experiment on synthetic data and discuss leakage uncertainty.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating a single high-confidence prediction as proof that a record was in training data.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-model-inversion-and-reconstruction",
      "title": "Model Inversion and Reconstruction",
      "subtitle": "Model inversion attacks infer sensitive attributes or reconstruct representative information about training inputs from model outputs or access patterns.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Model inversion attacks infer sensitive attributes or reconstruct representative information about training inputs from model outputs or access patterns.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 9 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Backdoor Attacks",
        "Model Extraction and Model Stealing",
        "Membership Inference",
        "Privacy Attacks on ML Systems",
        "Training-Time and Inference-Time Threats"
      ],
      "objectives": [
        "Explain inversion goals and access assumptions.",
        "Distinguish attribute inference from full sample reconstruction.",
        "Evaluate privacy exposure in context."
      ],
      "keywords": [
        "model inversion and reconstruction",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "backdoor attacks",
        "model extraction and model stealing",
        "membership inference",
        "privacy attacks on ml systems",
        "training-time and inference-time threats",
        "explain inversion goals and access assumptions.",
        "distinguish attribute inference from full sample reconstruction.",
        "evaluate privacy exposure in context."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Model Inversion and Reconstruction\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Model inversion attacks infer sensitive attributes or reconstruct representative information about training inputs from model outputs or access patterns.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Backdoor Attacks, Model Extraction and Model Stealing, Membership Inference, Privacy Attacks on ML Systems, Training-Time and Inference-Time Threats.\n\nLEARNING OBJECTIVES\n1. Explain inversion goals and access assumptions.\n2. Distinguish attribute inference from full sample reconstruction.\n3. Evaluate privacy exposure in context.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Model Inversion and Reconstruction.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Use a toy tabular model with synthetic attributes to demonstrate why outputs can reveal more than intended.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Overstating reconstruction fidelity or ignoring auxiliary information and population-level effects.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-privacy-attacks-on-ml-systems",
      "title": "Privacy Attacks on ML Systems",
      "subtitle": "Privacy attacks exploit information exposed by training, inference, gradients, logs, or model interfaces to infer personal or proprietary data.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Privacy attacks exploit information exposed by training, inference, gradients, logs, or model interfaces to infer personal or proprietary data.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 10 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Model Extraction and Model Stealing",
        "Membership Inference",
        "Model Inversion and Reconstruction",
        "Training-Time and Inference-Time Threats",
        "Robustness Evaluation"
      ],
      "objectives": [
        "Compare membership inference, inversion, and memorization extraction.",
        "Identify privacy-sensitive interfaces and artifacts.",
        "Relate risk to data minimization and privacy controls."
      ],
      "keywords": [
        "privacy attacks on ml systems",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model extraction and model stealing",
        "membership inference",
        "model inversion and reconstruction",
        "training-time and inference-time threats",
        "robustness evaluation",
        "compare membership inference, inversion, and memorization extraction.",
        "identify privacy-sensitive interfaces and artifacts.",
        "relate risk to data minimization and privacy controls."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Privacy Attacks on ML Systems\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Privacy attacks exploit information exposed by training, inference, gradients, logs, or model interfaces to infer personal or proprietary data.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Model Extraction and Model Stealing, Membership Inference, Model Inversion and Reconstruction, Training-Time and Inference-Time Threats, Robustness Evaluation.\n\nLEARNING OBJECTIVES\n1. Compare membership inference, inversion, and memorization extraction.\n2. Identify privacy-sensitive interfaces and artifacts.\n3. Relate risk to data minimization and privacy controls.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Privacy Attacks on ML Systems.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Create a privacy threat map for a hosted prediction service and its telemetry pipeline.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Treating model privacy as separate from logs, backups, prompts, and operational datasets.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-training-time-and-inference-time-threats",
      "title": "Training-Time and Inference-Time Threats",
      "subtitle": "Training-time threats target data, labels, training code, checkpoints, or adaptation; inference-time threats target inputs, outputs, interfaces, and runtime behavior.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Training-time threats target data, labels, training code, checkpoints, or adaptation; inference-time threats target inputs, outputs, interfaces, and runtime behavior.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 11 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Membership Inference",
        "Model Inversion and Reconstruction",
        "Privacy Attacks on ML Systems",
        "Robustness Evaluation",
        "Adversarial ML Defenses"
      ],
      "objectives": [
        "Classify attacks by lifecycle stage.",
        "Identify controls specific to each stage.",
        "Explain how one compromise can persist across stages."
      ],
      "keywords": [
        "training-time and inference-time threats",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "membership inference",
        "model inversion and reconstruction",
        "privacy attacks on ml systems",
        "robustness evaluation",
        "adversarial ml defenses",
        "classify attacks by lifecycle stage.",
        "identify controls specific to each stage.",
        "explain how one compromise can persist across stages."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Training-Time and Inference-Time Threats\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Training-time threats target data, labels, training code, checkpoints, or adaptation; inference-time threats target inputs, outputs, interfaces, and runtime behavior.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Membership Inference, Model Inversion and Reconstruction, Privacy Attacks on ML Systems, Robustness Evaluation, Adversarial ML Defenses.\n\nLEARNING OBJECTIVES\n1. Classify attacks by lifecycle stage.\n2. Identify controls specific to each stage.\n3. Explain how one compromise can persist across stages.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Training-Time and Inference-Time Threats.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Construct a lifecycle attack tree for a model trained offline and exposed through an API.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Applying inference filtering to solve upstream data-integrity problems.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-robustness-evaluation",
      "title": "Robustness Evaluation",
      "subtitle": "Robustness evaluation measures model behavior under defined perturbations, distribution shifts, adversarial conditions, and operational constraints.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Robustness evaluation measures model behavior under defined perturbations, distribution shifts, adversarial conditions, and operational constraints.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 12 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Model Inversion and Reconstruction",
        "Privacy Attacks on ML Systems",
        "Training-Time and Inference-Time Threats",
        "Adversarial ML Defenses",
        "Adversarial ML Research Methodologies"
      ],
      "objectives": [
        "Define threat-model-specific robustness metrics.",
        "Choose representative test sets and baselines.",
        "Report confidence intervals and limitations."
      ],
      "keywords": [
        "robustness evaluation",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "model inversion and reconstruction",
        "privacy attacks on ml systems",
        "training-time and inference-time threats",
        "adversarial ml defenses",
        "adversarial ml research methodologies",
        "define threat-model-specific robustness metrics.",
        "choose representative test sets and baselines.",
        "report confidence intervals and limitations."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Robustness Evaluation\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Robustness evaluation measures model behavior under defined perturbations, distribution shifts, adversarial conditions, and operational constraints.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Model Inversion and Reconstruction, Privacy Attacks on ML Systems, Training-Time and Inference-Time Threats, Adversarial ML Defenses, Adversarial ML Research Methodologies.\n\nLEARNING OBJECTIVES\n1. Define threat-model-specific robustness metrics.\n2. Choose representative test sets and baselines.\n3. Report confidence intervals and limitations.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Robustness Evaluation.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Build a reproducible evaluation report for a toy classifier under clean, noisy, and adversarial test conditions.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Reporting one benchmark score as a universal guarantee of robustness.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-adversarial-ml-defenses",
      "title": "Adversarial ML Defenses",
      "subtitle": "Adversarial ML defenses include robust training, input validation, anomaly detection, data provenance, access controls, rate limits, privacy techniques, and monitoring.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Adversarial ML defenses include robust training, input validation, anomaly detection, data provenance, access controls, rate limits, privacy techniques, and monitoring.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 13 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Privacy Attacks on ML Systems",
        "Training-Time and Inference-Time Threats",
        "Robustness Evaluation",
        "Adversarial ML Research Methodologies"
      ],
      "objectives": [
        "Compare defense families and assumptions.",
        "Explain adaptive attacker limitations.",
        "Design layered mitigations and residual-risk statements."
      ],
      "keywords": [
        "adversarial ml defenses",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "privacy attacks on ml systems",
        "training-time and inference-time threats",
        "robustness evaluation",
        "adversarial ml research methodologies",
        "compare defense families and assumptions.",
        "explain adaptive attacker limitations.",
        "design layered mitigations and residual-risk statements."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Adversarial ML Defenses\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Adversarial ML defenses include robust training, input validation, anomaly detection, data provenance, access controls, rate limits, privacy techniques, and monitoring.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Privacy Attacks on ML Systems, Training-Time and Inference-Time Threats, Robustness Evaluation, Adversarial ML Research Methodologies.\n\nLEARNING OBJECTIVES\n1. Compare defense families and assumptions.\n2. Explain adaptive attacker limitations.\n3. Design layered mitigations and residual-risk statements.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Adversarial ML Defenses.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Select layered defenses for a model API exposed to untrusted users and justify where each control operates.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Assuming adversarial training or input filtering alone eliminates all attack classes.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    },
    {
      "id": "topic-p04-18-adversarial-ml-research-methodologies",
      "title": "Adversarial ML Research Methodologies",
      "subtitle": "Adversarial ML research requires explicit threat models, controlled datasets, baselines, reproducible experiments, ablations, statistical analysis, and responsible disclosure.",
      "category": "Adversarial Machine Learning",
      "difficulty": "Advanced",
      "definition": "Adversarial ML research requires explicit threat models, controlled datasets, baselines, reproducible experiments, ablations, statistical analysis, and responsible disclosure.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-18-adversarial-machine-learning",
      "moduleTitle": "Adversarial Machine Learning",
      "position": "Part 04 establishes the advanced AI security track. Module 18 develops adversarial machine learning; this topic is sequence item 14 of 14. It builds on the module prerequisites and connects the specific mechanism to system-level security assessment, evidence, and mitigation.",
      "prerequisites": [
        "Adversarial Machine Learning",
        "Machine learning evaluation and Python fundamentals"
      ],
      "relatedConcepts": [
        "Training-Time and Inference-Time Threats",
        "Robustness Evaluation",
        "Adversarial ML Defenses"
      ],
      "objectives": [
        "Design a falsifiable research question.",
        "Record model, data, seed, and environment details.",
        "Separate measured evidence from hypotheses."
      ],
      "keywords": [
        "adversarial ml research methodologies",
        "adversarial machine learning",
        "ai security",
        "authorized assessment",
        "threat modeling",
        "human validation",
        "training-time and inference-time threats",
        "robustness evaluation",
        "adversarial ml defenses",
        "design a falsifiable research question.",
        "record model, data, seed, and environment details.",
        "separate measured evidence from hypotheses."
      ],
      "prompt": "Act as a senior AI security researcher, application security engineer, and patient technical educator. Create a technically rigorous, self-contained lesson on \"Adversarial ML Research Methodologies\". Do not assume access to this website, its other pages, or any previous conversation.\n\nLANGUAGE AND TEACHING STYLE\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, framework names, attack names, API fields, code, commands, and standards in English; explain each important term clearly in Egyptian Arabic on first use.\n- Progress from necessary foundations to advanced analysis. Define supporting concepts instead of relying on unexplained jargon.\n- Maintain a technically serious, evidence-driven tone. Distinguish established behavior, research findings, hypotheses, and product-specific assumptions.\n\nCURRICULUM CONTEXT\nPart 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 18 — Adversarial Machine Learning.\nTopic definition: Adversarial ML research requires explicit threat models, controlled datasets, baselines, reproducible experiments, ablations, statistical analysis, and responsible disclosure.\nPrerequisites to bridge briefly: Adversarial Machine Learning; Machine learning evaluation and Python fundamentals.\nRelated concepts: Training-Time and Inference-Time Threats, Robustness Evaluation, Adversarial ML Defenses.\n\nLEARNING OBJECTIVES\n1. Design a falsifiable research question.\n2. Record model, data, seed, and environment details.\n3. Separate measured evidence from hypotheses.\n\nTOPIC-SPECIFIC TECHNICAL LESSON PLAN\n1. Establish the security problem, why it matters, and the precise scope of Adversarial ML Research Methodologies.\n2. Explain the relevant system architecture, components, data flows, identities, and trust boundaries.\n3. Explain the internal mechanism step by step, including prerequisites, attacker capabilities, assumptions, and what must be true for the issue to occur.\n4. Analyze this topic-specific scenario in depth: Draft a reproducible experiment protocol comparing two defenses on a synthetic benchmark.\n5. Show how to formulate test hypotheses, choose safe test inputs, observe behavior, and distinguish model output from application-enforced behavior.\n6. Explain likely security impact, affected assets, exploitability constraints, and realistic false-positive/false-negative sources.\n7. Address this common failure or misconception: Cherry-picking results, leaking sensitive datasets, or generalizing beyond the tested model and setting.\n8. Present mitigations at the correct architectural layers, including preventive, detective, and recovery controls where relevant. Explain trade-offs and residual risk.\n9. Explain how to collect minimal, reproducible evidence and write a technically defensible finding.\n\nFRAMEWORKS AND RESEARCH CONTEXT\nWhen relevant, explain how the topic relates to the current OWASP GenAI Security Project guidance, including the OWASP GenAI LLM Top 10 2026 and the OWASP Top 10 for Agentic Applications (2025 release). Treat these as evolving guidance, verify current editions before quoting category identifiers, and do not invent categories. Explain MITRE ATLAS as a living knowledge base of adversary tactics and techniques involving AI; use exact technique names only when verified. Explain NIST AI RMF 1.0 as a voluntary risk-management framework organized around Govern, Map, Measure, and Manage, and note that NIST has indicated it is under revision. Framework mappings provide context, not proof that a vulnerability exists. Include relevant academic research directions where useful, and distinguish peer-reviewed results from demonstrations and vendor claims.\n\nSAFE PRACTICAL WORK\nProvide at least one guided exercise using only a local controlled lab, synthetic dataset, deliberately vulnerable training application, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, cleanup, and success criteria. Use harmless canary data and non-destructive test cases. Do not direct testing at unrelated public systems, do not exfiltrate real data, and do not include real credentials or confidential material. For attack demonstrations, constrain the exercise to proving the security property with synthetic artifacts; pair it with the corresponding defensive test.\n\nEVIDENCE, DEFENSE, AND PROFESSIONAL PRACTICE\n- Separate observed facts, model-generated claims, inferred explanations, and independently verified results.\n- Include evidence handling, reproducibility, version/configuration context, and limitations.\n- Explain practical mitigations and how to verify them with regression tests.\n- Enforce explicit scope, least privilege, data minimization, privacy, and human oversight.\n- Never present model confidence, generated citations, or a framework mapping as proof.\n\nOUTPUT FORMAT\nUse clear headings, concise text diagrams or architecture flows where useful, and tables when comparing approaches. Include a topic-specific glossary, worked examples, a controlled practical exercise, defensive checklist, at least five review questions with answers, key takeaways, and a short assessment with answer key. Aim for advanced depth without padding. If the lesson is too large for one response, split it into numbered parts and state the sequence."
    }
  ]
});
