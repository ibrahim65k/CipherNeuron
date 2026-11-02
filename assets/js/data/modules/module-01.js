/* CipherNeuron curriculum data — Module 01. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-01-introduction-to-ai",
  "number": "01",
  "partId": "part-01",
  "title": "Introduction to Artificial Intelligence",
  "subtitle": "Understand the field before exploring its models and applications.",
  "description": "This opening module establishes a clear vocabulary for Artificial Intelligence. It explores what AI means, how the field developed, how major categories differ, and where AI systems fit into modern technology and cybersecurity.",
  "difficulty": "Foundation",
  "estimatedTime": "3–4 hours",
  "prerequisites": [
    "General computer literacy",
    "Curiosity about how intelligent software works"
  ],
  "objectives": [
    "Define AI and place it among neighboring computing disciplines.",
    "Explain major historical shifts and capability categories without confusing current systems with hypothetical future systems.",
    "Compare symbolic, rule-based, learning-based, and generative approaches.",
    "Describe practical AI use cases and a high-level system architecture."
  ],
  "relatedModules": [
    "module-03-machine-learning-fundamentals",
    "module-07-llms-generative-ai",
    "module-08-modern-ai-systems"
  ],
  "topics": [
    {
      "id": "topic-what-is-artificial-intelligence",
      "title": "What Is Artificial Intelligence?",
      "subtitle": "A working definition and a map of the AI field.",
      "category": "Core Concept",
      "difficulty": "Foundation",
      "definition": "Artificial Intelligence (AI) is a field of computing focused on building systems that perform tasks commonly associated with intelligent behavior, such as perception, language processing, prediction, planning, and decision support.",
      "position": "This is the entry point to Part 01. It provides the vocabulary needed to understand Machine Learning, Deep Learning, Generative AI, and modern AI applications.",
      "prerequisites": [
        "Basic understanding of software and computer systems"
      ],
      "relatedConcepts": [
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI Systems",
        "Inference"
      ],
      "objectives": [
        "Explain AI as a field without confusing it with a single algorithm or product.",
        "Describe task-oriented examples of AI in software and everyday systems.",
        "Distinguish an AI model from the application and infrastructure around it.",
        "Recognize why an AI capability does not automatically imply human-like understanding."
      ],
      "keywords": [
        "definition",
        "intelligence",
        "automation",
        "prediction",
        "reasoning",
        "AI model",
        "AI application"
      ],
      "prompt": "Act as a rigorous AI instructor. Teach the topic \"What Is Artificial Intelligence?\" as a complete lesson for a learner beginning a structured AI and cybersecurity curriculum.\n\nLANGUAGE REQUIREMENT\n- Explain the entire lesson in natural Egyptian colloquial Arabic.\n- Keep technical terminology, names of methods, and standard industry expressions in English.\n- When an English term first appears, explain its meaning in Egyptian Arabic without translating the technical term itself.\n\nLEARNING CONTEXT\nThis topic is the entry point to Artificial Intelligence Fundamentals. The learner needs a reliable conceptual map before studying Machine Learning, Deep Learning, Generative AI, or AI security. Assume general computer literacy, but do not assume prior AI knowledge.\n\nTEACHING REQUIREMENTS\n1. Start with a precise, practical definition of Artificial Intelligence (AI). Explain why AI is a field and not one specific technology, application, or algorithm.\n2. Explain what is meant by tasks commonly associated with intelligent behavior. Cover suitable examples such as perception, language processing, prediction, planning, and decision support. Clarify that examples do not prove human-like understanding.\n3. Distinguish an AI model, an AI-powered application, and the infrastructure or services that support the application. Use a simple end-to-end example.\n4. Explain the difference between automation and AI. Show where they overlap and where rule-based automation is not necessarily AI.\n5. Introduce the relationships between Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI. Define each term briefly and explain the hierarchy without implying that they are interchangeable.\n6. Walk through several real-world use cases, noting the input, processing, output, and limitations of each example.\n7. Introduce a high-level AI system workflow: data or input, model or logic, inference, output, application integration, and human oversight where relevant.\n8. Explain common misconceptions, including the ideas that every AI system learns continuously, that every AI output is correct, or that an AI model necessarily understands information like a human.\n9. Connect the topic to Cybersecurity with grounded examples such as spam detection, anomaly detection, malware classification, fraud detection, and security analytics. Explain that AI can assist defenders and can also introduce new risks.\n10. Include at least two worked examples and one simple text-based architecture diagram. Explain every component in the diagram.\n11. Provide a short comparison table for AI, Machine Learning, Deep Learning, and Generative AI.\n12. Finish with practical reflection exercises, review questions with answers, a glossary of important English terms, key takeaways, and a short knowledge assessment.\n\nACCURACY AND DEPTH\n- Build the explanation progressively, introducing prerequisite terminology before relying on it.\n- Explain mechanisms and relationships rather than presenting a list of definitions.\n- Use technically accurate examples and clearly label simplifications.\n- Do not invent statistics, citations, or historical claims. When current facts or references are needed, verify them from reliable sources if browsing is available; otherwise state the limitation.\n- Distinguish established concepts from disputed definitions or future possibilities.\n- Do not claim that AGI or human-level general intelligence has been achieved unless that statement is supported by verified evidence.\n\n\nPRACTICAL IMPLEMENTATION\n- Include a practical implementation, code example, or hands-on procedure when it genuinely helps teach this topic. Explain each code step and its expected output; do not force code into a purely conceptual explanation.\n\nOUTPUT STANDARD\nCreate a complete, structured lesson, not a shallow summary. Use clear headings and coherent sections. If the lesson exceeds the response limit, divide it into numbered consecutive parts and continue without omitting required sections. Do not switch the teaching language away from Egyptian colloquial Arabic; preserve English technical terminology throughout."
    },
    {
      "id": "topic-ai-vs-machine-learning-vs-deep-learning",
      "title": "AI vs Machine Learning vs Deep Learning",
      "subtitle": "Understand the hierarchy and the practical differences between three often-confused terms.",
      "category": "Conceptual Comparison",
      "difficulty": "Foundation",
      "definition": "Artificial Intelligence is the broader field; Machine Learning is an approach in which systems learn patterns from data; Deep Learning is a subset of Machine Learning that uses multi-layer neural networks to learn representations.",
      "position": "This topic narrows the broad AI definition into the two major learning-based approaches that underpin many modern AI systems.",
      "prerequisites": [
        "What Is Artificial Intelligence?"
      ],
      "relatedConcepts": [
        "Symbolic AI",
        "Rule-Based Systems",
        "Neural Networks",
        "Training",
        "Inference"
      ],
      "objectives": [
        "Explain the relationship between AI, ML, and DL as nested concepts.",
        "Compare rule-based systems with systems trained from data.",
        "Identify examples where ML is appropriate and where deep learning may be unnecessary.",
        "Explain why the terms should not be used interchangeably."
      ],
      "keywords": [
        "machine learning",
        "deep learning",
        "nested fields",
        "rule-based",
        "neural network",
        "training data"
      ],
      "prompt": "Act as an AI educator who specializes in making technical distinctions precise. Deliver a complete lesson on \"AI vs Machine Learning vs Deep Learning\" for a learner who has just studied the definition of Artificial Intelligence.\n\nLANGUAGE REQUIREMENT\nTeach entirely in Egyptian colloquial Arabic. Keep all technical terms, algorithm names, and standard expressions in English. Explain each term in Egyptian Arabic when it first appears.\n\nLEARNER CONTEXT\nThe learner understands the broad idea of Artificial Intelligence but has not yet studied model training mathematically. Start conceptually and introduce only the mathematics needed to make the distinctions clear.\n\nTOPIC-SPECIFIC CONTENT\n1. Define Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) precisely.\n2. Explain the nested relationship AI → ML → DL. Include a clear diagram and explain why the reverse implication is not generally valid.\n3. Explain Symbolic AI and Rule-Based Systems. Show how explicitly written rules differ from patterns learned from examples.\n4. Explain the basic Machine Learning workflow: dataset, features, learning algorithm, training, model, inference, and prediction. Use one concrete example from beginning to end.\n5. Explain why Deep Learning uses Artificial Neural Networks with multiple layers. Introduce neurons, weights, layers, and learned representations only at a beginner-friendly level.\n6. Compare the three approaches using practical examples, inputs, outputs, strengths, limitations, and typical use cases.\n7. Explain when a simple rule-based system, a traditional ML model, or a Deep Learning model may be the more appropriate engineering choice. Discuss data needs, interpretability, compute, maintenance, and task complexity.\n8. Clarify common misconceptions: ML is not synonymous with all AI; DL is not a separate field outside ML; and not every modern AI product is based on Deep Learning.\n9. Connect the distinctions to Cybersecurity examples such as signature rules, spam classifiers, network anomaly detection, and neural malware classification. Avoid implying that a model alone completes a security workflow.\n10. Include two worked scenarios, a comparison table, a glossary, exercises, review questions with answers, and a final knowledge check.\n\nACCURACY REQUIREMENTS\n- Use the nested-field relationship carefully and identify it as a useful conceptual model.\n- Do not claim that learning from data always produces better results than explicit rules.\n- Do not imply that Deep Learning is always more accurate or preferable.\n- Label simplified examples and explain their limitations.\n- Do not fabricate benchmarks, current product claims, or citations. Verify changing information if browsing is available; otherwise disclose that it has not been checked.\n\nTEACHING DEPTH\nExplain the underlying mechanisms and the trade-offs, not just the vocabulary. Introduce prerequisites before using them. Progress from foundation to a practical intermediate understanding, without adding irrelevant advanced mathematics.\n\nEnd with key takeaways and a knowledge assessment. If the lesson is too long for one response, split it into sequential parts and preserve the full topic coverage.\n\nPRACTICAL IMPLEMENTATION\n- Include a practical implementation, code example, or hands-on procedure when it genuinely helps teach this topic. Explain each code step and its expected output; do not force code into a purely conceptual explanation."
    },
    {
      "id": "topic-ai-in-cybersecurity",
      "title": "AI Applications in Cybersecurity",
      "subtitle": "Explore where AI supports security work and where human validation remains essential.",
      "category": "Security Application",
      "difficulty": "Foundation",
      "definition": "AI in Cybersecurity refers to the use of AI techniques to support security tasks such as detection, classification, prioritization, behavioral analysis, and decision support across defensive and research workflows.",
      "position": "This topic connects the AI fundamentals in Part 01 to the AI-assisted security workflows in Part 03 and the AI-specific assessment track in Part 04.",
      "prerequisites": [
        "What Is Artificial Intelligence?",
        "A basic understanding of cybersecurity goals and terminology"
      ],
      "relatedConcepts": [
        "Anomaly Detection",
        "Classification",
        "Threat Intelligence",
        "False Positives",
        "Human-in-the-Loop"
      ],
      "objectives": [
        "Identify common AI-supported cybersecurity use cases.",
        "Explain how classification and anomaly detection can support security monitoring.",
        "Recognize false positives, false negatives, data bias, and model limitations.",
        "Distinguish AI assistance from autonomous security decision-making."
      ],
      "keywords": [
        "cybersecurity",
        "threat detection",
        "malware",
        "phishing",
        "anomaly detection",
        "security analytics",
        "human in the loop"
      ],
      "prompt": "Act as a cybersecurity and AI instructor. Teach \"AI Applications in Cybersecurity\" as a complete foundation-level lesson that connects AI concepts to real security operations.\n\nLANGUAGE REQUIREMENT\n- The complete lesson must be written in Egyptian colloquial Arabic.\n- Preserve technical terminology in English, including tool names, detection concepts, and security vocabulary.\n- Explain English terms in Egyptian Arabic at first use; do not replace standard technical terms with forced translations.\n\nLEARNER CONTEXT\nThe learner is developing an AI foundation and is also studying penetration testing and broader cybersecurity. Assume basic familiarity with the idea of networks, systems, and security goals, but explain any specialized security term that is necessary.\n\nLESSON SCOPE\n1. Define AI in Cybersecurity and distinguish AI-assisted security from ordinary automation and from fully autonomous response systems.\n2. Explain the main use-case categories: detection, classification, anomaly detection, prioritization, correlation, threat intelligence analysis, user-behavior analysis, malware analysis support, phishing analysis, and security operations assistance.\n3. For each major category, explain the basic input data, what a model or AI component may do, the output, how an analyst uses it, and what can go wrong.\n4. Explain classification and anomaly detection with simple examples. Clarify the difference between a known class prediction and identifying behavior that differs from a learned baseline.\n5. Explain False Positives, False Negatives, precision, recall, class imbalance, noisy data, and data drift at an accessible level. Show why these affect security operations.\n6. Discuss practical use in SIEM workflows, endpoint security, email security, network monitoring, fraud detection, vulnerability prioritization, and security research. Avoid unsupported claims about specific vendors.\n7. Explain the human analyst's role: validating evidence, checking context, confirming scope, assessing impact, and making consequential decisions.\n8. Discuss limitations and risks: adversarial manipulation, biased or incomplete training data, poor generalization, hallucinated explanations from LLMs, sensitive-data exposure, alert fatigue, and overreliance.\n9. Distinguish AI used to improve cybersecurity from security testing of AI systems. Preview how these become different study areas later in the curriculum.\n10. Include realistic defensive case studies and a controlled-lab exercise. Any offensive examples must be limited to systems the learner owns or has explicit permission to test.\n11. Include a workflow diagram, a glossary of English terms, reflection exercises, review questions with answers, key takeaways, and a knowledge assessment.\n\nTECHNICAL AND SAFETY EXPECTATIONS\n- Do not present an AI alert as proof of compromise or a model score as a confirmed vulnerability.\n- Explain the need for independent evidence and repeatable validation.\n- Keep practical exercises authorized, scoped, and safe.\n- Do not invent product capabilities, statistics, research findings, or citations. Verify current claims from official documentation or research when browsing is available; otherwise state the limitation.\n- Clearly separate established operational practices from experimental applications.\n\n\nPRACTICAL IMPLEMENTATION\n- Include a practical implementation, code example, or hands-on procedure when it genuinely helps teach this topic. Explain each code step and its expected output; do not force code into a purely conceptual explanation.\n\nDEPTH AND FORMAT\nTeach progressively, define prerequisites, explain mechanisms and trade-offs, and use examples that make the workflow concrete. Do not give a shallow list of tools. Use clear headings and structured explanations. If necessary, divide the complete lesson into sequential parts without omitting sections. End with key takeaways and an assessment."
    },
    {
      "id": "topic-history-and-evolution-of-artificial-intelligence",
      "title": "History and Evolution of Artificial Intelligence",
      "subtitle": "From symbolic reasoning to data-driven and generative systems.",
      "category": "AI Foundations",
      "difficulty": "Foundation",
      "definition": "The history of AI is the development of ideas and engineering methods for building systems that perform tasks associated with intelligent behavior, across several waves of research and changing expectations.",
      "position": "This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.",
      "prerequisites": [
        "General computer literacy",
        "Curiosity about how intelligent software works"
      ],
      "relatedConcepts": [
        "Artificial Intelligence",
        "Symbolic AI",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI System Architecture"
      ],
      "objectives": [
        "Trace early symbolic approaches, expert systems, periods of reduced funding and expectations, statistical Machine Learning, Deep Learning, and recent foundation-model progress.",
        "Explain how data availability, algorithms, compute, and evaluation influenced different periods.",
        "Separate milestone ideas from simplified popular timelines."
      ],
      "keywords": [
        "history and evolution of artificial intelligence",
        "ai history",
        "ANI AGI ASI",
        "symbolic AI",
        "rule-based systems",
        "AI use cases",
        "AI architecture"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"History and Evolution of Artificial Intelligence\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 01 — Introduction to Artificial Intelligence. This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.\nAssume general computer literacy and these prerequisites: General computer literacy, Curiosity about how intelligent software works. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Artificial Intelligence, Symbolic AI, Machine Learning, Deep Learning, Generative AI, AI System Architecture.\n\nLEARNING OUTCOMES\n- Trace early symbolic approaches, expert systems, periods of reduced funding and expectations, statistical Machine Learning, Deep Learning, and recent foundation-model progress.\n- Explain how data availability, algorithms, compute, and evaluation influenced different periods.\n- Separate milestone ideas from simplified popular timelines.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Trace early symbolic approaches, expert systems, periods of reduced funding and expectations, statistical Machine Learning, Deep Learning, and recent foundation-model progress.\n2. Explain how data availability, algorithms, compute, and evaluation influenced different periods.\n3. Separate milestone ideas from simplified popular timelines.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a rule-based chess program with a modern image classifier and a generative language model.\n- Build a timeline that links a research idea to the enabling data or compute conditions.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- AI did not progress as one uninterrupted path of steadily increasing capability.\n- A historical milestone or public demonstration does not mean a system has general intelligence.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a concise, source-aware timeline of AI using five to eight milestones. For each, state the approach, what became possible, and the main limitation. Distinguish well-established history from debated interpretations.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-artificial-narrow-general-and-superintelligence",
      "title": "Artificial Narrow, General, and Superintelligence",
      "subtitle": "Understand ANI, AGI, and ASI as capability categories.",
      "category": "AI Foundations",
      "difficulty": "Foundation",
      "definition": "ANI, AGI, and ASI are terms used to discuss the scope and level of capabilities attributed to artificial systems, from task-specific performance to hypothetical general or superhuman intelligence.",
      "position": "This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.",
      "prerequisites": [
        "General computer literacy",
        "Curiosity about how intelligent software works"
      ],
      "relatedConcepts": [
        "Artificial Intelligence",
        "Symbolic AI",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI System Architecture"
      ],
      "objectives": [
        "Define Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), and Artificial Superintelligence (ASI).",
        "Discuss why AGI has no single universally accepted operational test and why claims require careful definitions.",
        "Compare task breadth, transfer, autonomy, and performance without treating them as a simple product ranking."
      ],
      "keywords": [
        "artificial narrow, general, and superintelligence",
        "ai history",
        "ANI AGI ASI",
        "symbolic AI",
        "rule-based systems",
        "AI use cases",
        "AI architecture"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Artificial Narrow, General, and Superintelligence\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 01 — Introduction to Artificial Intelligence. This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.\nAssume general computer literacy and these prerequisites: General computer literacy, Curiosity about how intelligent software works. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Artificial Intelligence, Symbolic AI, Machine Learning, Deep Learning, Generative AI, AI System Architecture.\n\nLEARNING OUTCOMES\n- Define Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), and Artificial Superintelligence (ASI).\n- Discuss why AGI has no single universally accepted operational test and why claims require careful definitions.\n- Compare task breadth, transfer, autonomy, and performance without treating them as a simple product ranking.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define Artificial Narrow Intelligence (ANI), Artificial General Intelligence (AGI), and Artificial Superintelligence (ASI).\n2. Discuss why AGI has no single universally accepted operational test and why claims require careful definitions.\n3. Compare task breadth, transfer, autonomy, and performance without treating them as a simple product ranking.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Contrast a model specialized in image classification with a system expected to transfer across unrelated tasks.\n- Evaluate a hypothetical AGI claim by asking what tasks, environments, and independent tests are covered.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- High performance on many benchmarks alone does not settle whether a system is AGI.\n- ASI is a hypothetical category, not a synonym for current high-performing models.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a capability matrix for ANI, AGI, and ASI. Include concrete hypothetical examples, operational criteria, uncertainties, and evidence that would be needed to support a claim.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-traditional-ai-vs-modern-ai",
      "title": "Traditional AI vs. Modern AI",
      "subtitle": "Compare explicit logic, statistical learning, and large-scale learned models.",
      "category": "AI Foundations",
      "difficulty": "Foundation",
      "definition": "Traditional AI often refers to approaches such as symbolic reasoning, search, and explicitly encoded knowledge, while modern AI commonly includes statistical Machine Learning, Deep Learning, and foundation models trained from data.",
      "position": "This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.",
      "prerequisites": [
        "General computer literacy",
        "Curiosity about how intelligent software works"
      ],
      "relatedConcepts": [
        "Artificial Intelligence",
        "Symbolic AI",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI System Architecture"
      ],
      "objectives": [
        "Explain why “traditional” and “modern” are broad historical labels rather than strict technical categories.",
        "Compare explicit rules, search/planning, feature-engineered ML, neural models, and generative systems.",
        "Evaluate interpretability, data needs, adaptability, compute, and predictable behavior."
      ],
      "keywords": [
        "traditional ai vs. modern ai",
        "ai history",
        "ANI AGI ASI",
        "symbolic AI",
        "rule-based systems",
        "AI use cases",
        "AI architecture"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Traditional AI vs. Modern AI\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 01 — Introduction to Artificial Intelligence. This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.\nAssume general computer literacy and these prerequisites: General computer literacy, Curiosity about how intelligent software works. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Artificial Intelligence, Symbolic AI, Machine Learning, Deep Learning, Generative AI, AI System Architecture.\n\nLEARNING OUTCOMES\n- Explain why “traditional” and “modern” are broad historical labels rather than strict technical categories.\n- Compare explicit rules, search/planning, feature-engineered ML, neural models, and generative systems.\n- Evaluate interpretability, data needs, adaptability, compute, and predictable behavior.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain why “traditional” and “modern” are broad historical labels rather than strict technical categories.\n2. Compare explicit rules, search/planning, feature-engineered ML, neural models, and generative systems.\n3. Evaluate interpretability, data needs, adaptability, compute, and predictable behavior.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a rule-based email filter with a learned spam classifier.\n- Design a simple decision guide for selecting rules, ML, or a neural approach for a constrained task.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Modern AI did not make symbolic techniques obsolete; hybrid systems remain useful.\n- A newer or larger model is not automatically appropriate for every task.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nAnalyze three small tasks and justify whether explicit rules, traditional ML, or a neural model is appropriate. State trade-offs and what evidence would change your choice.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-symbolic-ai-and-rule-based-systems",
      "title": "Symbolic AI and Rule-Based Systems",
      "subtitle": "Learn how explicit representations and rules produce decisions.",
      "category": "AI Foundations",
      "difficulty": "Foundation",
      "definition": "Symbolic AI represents knowledge using symbols, facts, logic, and explicit procedures; a Rule-Based System applies IF–THEN rules to facts or inputs to derive outputs.",
      "position": "This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.",
      "prerequisites": [
        "General computer literacy",
        "Curiosity about how intelligent software works"
      ],
      "relatedConcepts": [
        "Artificial Intelligence",
        "Symbolic AI",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI System Architecture"
      ],
      "objectives": [
        "Define symbols, knowledge representation, facts, rules, inference, and expert systems.",
        "Walk through rule matching and conflict resolution in a simple rule engine.",
        "Explain strengths such as traceability and limitations such as brittleness and knowledge acquisition."
      ],
      "keywords": [
        "symbolic ai and rule-based systems",
        "ai history",
        "ANI AGI ASI",
        "symbolic AI",
        "rule-based systems",
        "AI use cases",
        "AI architecture"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Symbolic AI and Rule-Based Systems\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 01 — Introduction to Artificial Intelligence. This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.\nAssume general computer literacy and these prerequisites: General computer literacy, Curiosity about how intelligent software works. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Artificial Intelligence, Symbolic AI, Machine Learning, Deep Learning, Generative AI, AI System Architecture.\n\nLEARNING OUTCOMES\n- Define symbols, knowledge representation, facts, rules, inference, and expert systems.\n- Walk through rule matching and conflict resolution in a simple rule engine.\n- Explain strengths such as traceability and limitations such as brittleness and knowledge acquisition.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define symbols, knowledge representation, facts, rules, inference, and expert systems.\n2. Walk through rule matching and conflict resolution in a simple rule engine.\n3. Explain strengths such as traceability and limitations such as brittleness and knowledge acquisition.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Use IF source_ip_is_blocklisted AND destination_port_is_sensitive THEN raise_alert as a toy security rule.\n- Compare a decision tree of hand-written rules with a classifier trained from labeled examples.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A Rule-Based System does not necessarily learn from data.\n- Explicit rules can be transparent while still being incomplete, inconsistent, or wrong.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a small rule set for classifying incoming support tickets or triaging synthetic security events. Test conflicting and missing conditions, then document coverage gaps.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-ai-use-cases-and-high-level-system-architecture",
      "title": "AI Use Cases and High-Level System Architecture",
      "subtitle": "Connect AI capabilities to real applications and their supporting components.",
      "category": "AI Foundations",
      "difficulty": "Foundation",
      "definition": "An AI use case is a task in which an AI technique supports a user or business outcome; an AI system architecture describes how data, models, software, infrastructure, and people work together to deliver it.",
      "position": "This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.",
      "prerequisites": [
        "General computer literacy",
        "Curiosity about how intelligent software works"
      ],
      "relatedConcepts": [
        "Artificial Intelligence",
        "Symbolic AI",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "AI System Architecture"
      ],
      "objectives": [
        "Map common AI use cases across perception, prediction, recommendation, language, generation, and decision support.",
        "Identify inputs, preprocessing, model or logic, inference, post-processing, integration, monitoring, and human oversight.",
        "Distinguish model capability from the reliability of the complete application."
      ],
      "keywords": [
        "ai use cases and high-level system architecture",
        "ai history",
        "ANI AGI ASI",
        "symbolic AI",
        "rule-based systems",
        "AI use cases",
        "AI architecture"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"AI Use Cases and High-Level System Architecture\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 01 — Introduction to Artificial Intelligence. This opening module gives the vocabulary and historical context needed before studying learning algorithms, neural networks, language models, and AI applications.\nAssume general computer literacy and these prerequisites: General computer literacy, Curiosity about how intelligent software works. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Artificial Intelligence, Symbolic AI, Machine Learning, Deep Learning, Generative AI, AI System Architecture.\n\nLEARNING OUTCOMES\n- Map common AI use cases across perception, prediction, recommendation, language, generation, and decision support.\n- Identify inputs, preprocessing, model or logic, inference, post-processing, integration, monitoring, and human oversight.\n- Distinguish model capability from the reliability of the complete application.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Map common AI use cases across perception, prediction, recommendation, language, generation, and decision support.\n2. Identify inputs, preprocessing, model or logic, inference, post-processing, integration, monitoring, and human oversight.\n3. Distinguish model capability from the reliability of the complete application.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace an image moderation request from upload through model inference to an application decision.\n- Trace a defensive anomaly-detection alert from telemetry collection to analyst validation.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A model is not the whole AI application; data pipelines, permissions, interfaces, and monitoring matter.\n- An AI output is not automatically a verified fact or an authorized action.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw an architecture for an AI-powered helpdesk or defensive alert triage system. Label trust boundaries, data flows, model inputs and outputs, and human decision points.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
