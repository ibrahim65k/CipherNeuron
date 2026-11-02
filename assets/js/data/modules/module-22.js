/* CipherNeuron curriculum data — Module 22. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-22-multimodal-infrastructure-security",
  "number": "22",
  "title": "Multimodal AI & AI Infrastructure Security",
  "subtitle": "Secure image, audio, and video inputs alongside model APIs, deployment pipelines, artifacts, and inference infrastructure.",
  "description": "Assess multimodal input handling and the infrastructure that serves AI models, including gateways, cloud services, containers, dependencies, secrets, artifact integrity, and runtime hardening.",
  "difficulty": "Advanced",
  "estimatedTime": "11–15 hours",
  "prerequisites": [
    "Module 07 — multimodal models and generative AI fundamentals",
    "Module 11 — model formats and inference deployment",
    "Module 17 — AI system threat modeling",
    "Basic cloud, container, API, and operating-system security"
  ],
  "relatedModules": [
    "module-17-ai-security-threat-modeling",
    "module-19-llm-generative-ai-pentesting",
    "module-21-agentic-ai-tool-security",
    "module-24-advanced-ai-security-research"
  ],
  "objectives": [
    "Identify modality-specific attack surfaces and hidden instruction channels in image, audio, and video inputs.",
    "Assess model API and gateway authentication, authorization, isolation, and abuse controls.",
    "Secure model artifacts, dependencies, containers, secrets, and inference infrastructure.",
    "Build layered deployment and integrity controls with verifiable operational evidence."
  ],
  "partId": "part-04",
  "topics": [
    {
      "id": "topic-p04-22-multimodal-ai-security-architecture",
      "title": "Multimodal AI Security Architecture",
      "subtitle": "Multimodal AI security covers systems that ingest or generate combinations of text, images, audio, and video, where preprocessing, modality encoders, fusion, and output paths create distinct trust boundaries.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Multimodal AI security covers systems that ingest or generate combinations of text, images, audio, and video, where preprocessing, modality encoders, fusion, and output paths create distinct trust boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 1 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Vision Attacks and Image Input Risks",
        "Audio Attacks and Speech Pipeline Risks"
      ],
      "objectives": [
        "Trace modality-specific data paths from upload to model and response.",
        "Identify parsers, codecs, encoders, and storage components in scope.",
        "Compare shared and modality-specific security controls."
      ],
      "keywords": [
        "multimodal ai security architecture",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "vision attacks and image input risks",
        "audio attacks and speech pipeline risks",
        "trace modality-specific data paths from upload to model and response.",
        "identify parsers, codecs, encoders, and storage components in scope.",
        "compare shared and modality-specific security controls."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Multimodal AI Security Architecture\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Multimodal AI security covers systems that ingest or generate combinations of text, images, audio, and video, where preprocessing, modality encoders, fusion, and output paths create distinct trust boundaries.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Vision Attacks and Image Input Risks, Audio Attacks and Speech Pipeline Risks.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 1 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace modality-specific data paths from upload to model and response.\n2. Identify parsers, codecs, encoders, and storage components in scope.\n3. Compare shared and modality-specific security controls.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Multimodal AI Security Architecture. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Diagram a local image-and-audio question-answering service and mark file parsing, transcription, inference, and output boundaries. Address this misconception or failure mode explicitly: Testing only the language prompt while ignoring media parsers and preprocessing. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-vision-attacks-and-image-input-risks",
      "title": "Vision Attacks and Image Input Risks",
      "subtitle": "Vision attacks exploit image processing or model interpretation, including adversarial perturbations, maliciously crafted files, misleading visual content, and hidden instructions.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Vision attacks exploit image processing or model interpretation, including adversarial perturbations, maliciously crafted files, misleading visual content, and hidden instructions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 2 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Multimodal AI Security Architecture",
        "Audio Attacks and Speech Pipeline Risks",
        "Video Attacks and Temporal Input Risks"
      ],
      "objectives": [
        "Distinguish model-level adversarial examples from file-format and application vulnerabilities.",
        "Assess image provenance, metadata, resizing, OCR, and preprocessing.",
        "Design controlled robustness tests using synthetic images."
      ],
      "keywords": [
        "vision attacks and image input risks",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "multimodal ai security architecture",
        "audio attacks and speech pipeline risks",
        "video attacks and temporal input risks",
        "distinguish model-level adversarial examples from file-format and application vulnerabilities.",
        "assess image provenance, metadata, resizing, ocr, and preprocessing.",
        "design controlled robustness tests using synthetic images."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Vision Attacks and Image Input Risks\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Vision attacks exploit image processing or model interpretation, including adversarial perturbations, maliciously crafted files, misleading visual content, and hidden instructions.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Multimodal AI Security Architecture, Audio Attacks and Speech Pipeline Risks, Video Attacks and Temporal Input Risks.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 2 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Distinguish model-level adversarial examples from file-format and application vulnerabilities.\n2. Assess image provenance, metadata, resizing, OCR, and preprocessing.\n3. Design controlled robustness tests using synthetic images.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Vision Attacks and Image Input Risks. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Use a local test image containing a visible benign instruction-like phrase and compare OCR, captioning, and policy handling without targeting external services. Address this misconception or failure mode explicitly: Treating every surprising image interpretation as an exploitable vulnerability. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-audio-attacks-and-speech-pipeline-risks",
      "title": "Audio Attacks and Speech Pipeline Risks",
      "subtitle": "Audio attack surfaces include uploaded media, codecs, transcription, speaker handling, acoustic perturbations, and speech-to-action integrations.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Audio attack surfaces include uploaded media, codecs, transcription, speaker handling, acoustic perturbations, and speech-to-action integrations.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 3 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Multimodal AI Security Architecture",
        "Vision Attacks and Image Input Risks",
        "Video Attacks and Temporal Input Risks",
        "Multimodal Prompt Injection and Image-Based Instructions"
      ],
      "objectives": [
        "Trace audio capture, decoding, ASR, speaker identification, and downstream actions.",
        "Assess transcription errors, spoofing assumptions, and consent boundaries.",
        "Use synthetic audio to evaluate robustness and safe fallback behavior."
      ],
      "keywords": [
        "audio attacks and speech pipeline risks",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "multimodal ai security architecture",
        "vision attacks and image input risks",
        "video attacks and temporal input risks",
        "multimodal prompt injection and image-based instructions",
        "trace audio capture, decoding, asr, speaker identification, and downstream actions.",
        "assess transcription errors, spoofing assumptions, and consent boundaries.",
        "use synthetic audio to evaluate robustness and safe fallback behavior."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Audio Attacks and Speech Pipeline Risks\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Audio attack surfaces include uploaded media, codecs, transcription, speaker handling, acoustic perturbations, and speech-to-action integrations.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Multimodal AI Security Architecture, Vision Attacks and Image Input Risks, Video Attacks and Temporal Input Risks, Multimodal Prompt Injection and Image-Based Instructions.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 3 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace audio capture, decoding, ASR, speaker identification, and downstream actions.\n2. Assess transcription errors, spoofing assumptions, and consent boundaries.\n3. Use synthetic audio to evaluate robustness and safe fallback behavior.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Audio Attacks and Speech Pipeline Risks. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Test a local speech assistant with generated non-sensitive phrases, background noise, and ambiguous commands; verify that sensitive actions require confirmation. Address this misconception or failure mode explicitly: Assuming a transcript is an exact or authenticated representation of the speaker’s intent. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-video-attacks-and-temporal-input-risks",
      "title": "Video Attacks and Temporal Input Risks",
      "subtitle": "Video AI systems process sequences of frames and often audio or metadata; temporal sampling, synchronization, and summarization can hide or distort security-relevant context.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Video AI systems process sequences of frames and often audio or metadata; temporal sampling, synchronization, and summarization can hide or distort security-relevant context.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 4 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Vision Attacks and Image Input Risks",
        "Audio Attacks and Speech Pipeline Risks",
        "Multimodal Prompt Injection and Image-Based Instructions",
        "Model API Security"
      ],
      "objectives": [
        "Explain frame sampling, temporal context, and audio-video synchronization.",
        "Identify risks from omitted frames, manipulated timestamps, and misleading summaries.",
        "Define reproducible tests across clip duration and encoding variations."
      ],
      "keywords": [
        "video attacks and temporal input risks",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "vision attacks and image input risks",
        "audio attacks and speech pipeline risks",
        "multimodal prompt injection and image-based instructions",
        "model api security",
        "explain frame sampling, temporal context, and audio-video synchronization.",
        "identify risks from omitted frames, manipulated timestamps, and misleading summaries.",
        "define reproducible tests across clip duration and encoding variations."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Video Attacks and Temporal Input Risks\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Video AI systems process sequences of frames and often audio or metadata; temporal sampling, synchronization, and summarization can hide or distort security-relevant context.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Vision Attacks and Image Input Risks, Audio Attacks and Speech Pipeline Risks, Multimodal Prompt Injection and Image-Based Instructions, Model API Security.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 4 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Explain frame sampling, temporal context, and audio-video synchronization.\n2. Identify risks from omitted frames, manipulated timestamps, and misleading summaries.\n3. Define reproducible tests across clip duration and encoding variations.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Video Attacks and Temporal Input Risks. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a short synthetic clip with a benign instruction card appearing briefly and test whether the system’s summary preserves provenance and uncertainty. Address this misconception or failure mode explicitly: Assuming a video summary represents every frame or establishes event authenticity. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-multimodal-prompt-injection-and-image-based-instructions",
      "title": "Multimodal Prompt Injection and Image-Based Instructions",
      "subtitle": "Multimodal prompt injection embeds instruction-like content in media or derived representations so that a model may treat untrusted content as control instructions.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Multimodal prompt injection embeds instruction-like content in media or derived representations so that a model may treat untrusted content as control instructions.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 5 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Audio Attacks and Speech Pipeline Risks",
        "Video Attacks and Temporal Input Risks",
        "Model API Security",
        "AI Gateways and Policy Enforcement"
      ],
      "objectives": [
        "Trace instructions through OCR, captions, transcripts, and model fusion.",
        "Distinguish content interpretation from application authority.",
        "Test whether media-originated instructions can influence tools or protected data access."
      ],
      "keywords": [
        "multimodal prompt injection and image-based instructions",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "audio attacks and speech pipeline risks",
        "video attacks and temporal input risks",
        "model api security",
        "ai gateways and policy enforcement",
        "trace instructions through ocr, captions, transcripts, and model fusion.",
        "distinguish content interpretation from application authority.",
        "test whether media-originated instructions can influence tools or protected data access."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Multimodal Prompt Injection and Image-Based Instructions\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Multimodal prompt injection embeds instruction-like content in media or derived representations so that a model may treat untrusted content as control instructions.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Audio Attacks and Speech Pipeline Risks, Video Attacks and Temporal Input Risks, Model API Security, AI Gateways and Policy Enforcement.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 5 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace instructions through OCR, captions, transcripts, and model fusion.\n2. Distinguish content interpretation from application authority.\n3. Test whether media-originated instructions can influence tools or protected data access.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Multimodal Prompt Injection and Image-Based Instructions. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: In a local mock assistant, provide an image containing a harmless “ignore previous task” phrase and verify that it cannot authorize a protected mock operation. Address this misconception or failure mode explicitly: Believing a modality filter or prompt separator alone creates a reliable security boundary. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-model-api-security",
      "title": "Model API Security",
      "subtitle": "Model API security protects inference endpoints through authentication, authorization, input constraints, output handling, tenant isolation, and abuse controls.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Model API security protects inference endpoints through authentication, authorization, input constraints, output handling, tenant isolation, and abuse controls.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 6 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Video Attacks and Temporal Input Risks",
        "Multimodal Prompt Injection and Image-Based Instructions",
        "AI Gateways and Policy Enforcement",
        "Cloud AI Services Security"
      ],
      "objectives": [
        "Map API identities, scopes, quotas, and data flows.",
        "Test authorization and tenant boundaries with synthetic accounts.",
        "Evaluate rate limiting, request validation, and error disclosure."
      ],
      "keywords": [
        "model api security",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "video attacks and temporal input risks",
        "multimodal prompt injection and image-based instructions",
        "ai gateways and policy enforcement",
        "cloud ai services security",
        "map api identities, scopes, quotas, and data flows.",
        "test authorization and tenant boundaries with synthetic accounts.",
        "evaluate rate limiting, request validation, and error disclosure."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Model API Security\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Model API security protects inference endpoints through authentication, authorization, input constraints, output handling, tenant isolation, and abuse controls.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Video Attacks and Temporal Input Risks, Multimodal Prompt Injection and Image-Based Instructions, AI Gateways and Policy Enforcement, Cloud AI Services Security.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 6 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Map API identities, scopes, quotas, and data flows.\n2. Test authorization and tenant boundaries with synthetic accounts.\n3. Evaluate rate limiting, request validation, and error disclosure.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Model API Security. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Assess a local inference API with two test identities and verify that model, usage, and conversation resources are tenant-scoped. Address this misconception or failure mode explicitly: Treating API-key possession as sufficient authorization for every model and data operation. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-ai-gateways-and-policy-enforcement",
      "title": "AI Gateways and Policy Enforcement",
      "subtitle": "AI gateways centralize model routing, authentication, policy checks, quota enforcement, logging, and provider abstraction, but can become critical trust and availability boundaries.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "AI gateways centralize model routing, authentication, policy checks, quota enforcement, logging, and provider abstraction, but can become critical trust and availability boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 7 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Multimodal Prompt Injection and Image-Based Instructions",
        "Model API Security",
        "Cloud AI Services Security",
        "Model Deployment Security"
      ],
      "objectives": [
        "Explain gateway placement and request/response mediation.",
        "Identify policy bypass paths and fail-open behavior.",
        "Evaluate routing, provider fallback, and audit consistency."
      ],
      "keywords": [
        "ai gateways and policy enforcement",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "multimodal prompt injection and image-based instructions",
        "model api security",
        "cloud ai services security",
        "model deployment security",
        "explain gateway placement and request/response mediation.",
        "identify policy bypass paths and fail-open behavior.",
        "evaluate routing, provider fallback, and audit consistency."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Gateways and Policy Enforcement\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: AI gateways centralize model routing, authentication, policy checks, quota enforcement, logging, and provider abstraction, but can become critical trust and availability boundaries.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Multimodal Prompt Injection and Image-Based Instructions, Model API Security, Cloud AI Services Security, Model Deployment Security.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 7 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Explain gateway placement and request/response mediation.\n2. Identify policy bypass paths and fail-open behavior.\n3. Evaluate routing, provider fallback, and audit consistency.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Gateways and Policy Enforcement. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Review a local gateway configuration that routes to a mock model and verify that direct backend access cannot bypass the gateway’s authorization policy. Address this misconception or failure mode explicitly: Assuming all traffic traverses the gateway or that gateway logs are complete by default. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-cloud-ai-services-security",
      "title": "Cloud AI Services Security",
      "subtitle": "Cloud AI services introduce provider-managed identity, network, data retention, region, logging, and shared-responsibility considerations.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Cloud AI services introduce provider-managed identity, network, data retention, region, logging, and shared-responsibility considerations.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 8 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Model API Security",
        "AI Gateways and Policy Enforcement",
        "Model Deployment Security",
        "Container Security for AI Workloads"
      ],
      "objectives": [
        "Map customer and provider security responsibilities.",
        "Assess tenant configuration, private connectivity, identity, and data governance.",
        "Verify retention and training-use claims from authoritative service documentation."
      ],
      "keywords": [
        "cloud ai services security",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "model api security",
        "ai gateways and policy enforcement",
        "model deployment security",
        "container security for ai workloads",
        "map customer and provider security responsibilities.",
        "assess tenant configuration, private connectivity, identity, and data governance.",
        "verify retention and training-use claims from authoritative service documentation."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Cloud AI Services Security\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Cloud AI services introduce provider-managed identity, network, data retention, region, logging, and shared-responsibility considerations.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Model API Security, AI Gateways and Policy Enforcement, Model Deployment Security, Container Security for AI Workloads.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 8 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Map customer and provider security responsibilities.\n2. Assess tenant configuration, private connectivity, identity, and data governance.\n3. Verify retention and training-use claims from authoritative service documentation.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Cloud AI Services Security. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Build a cloud-service review checklist using a fictional deployment and public provider documentation; do not upload confidential data. Address this misconception or failure mode explicitly: Assuming a managed service removes the customer’s responsibility for identity, data, and application controls. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-model-deployment-security",
      "title": "Model Deployment Security",
      "subtitle": "Model deployment security covers packaging, configuration, release, serving, scaling, access control, and rollback for models in development and production.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Model deployment security covers packaging, configuration, release, serving, scaling, access control, and rollback for models in development and production.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 9 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "AI Gateways and Policy Enforcement",
        "Cloud AI Services Security",
        "Container Security for AI Workloads",
        "Secrets Management for AI Infrastructure"
      ],
      "objectives": [
        "Trace artifact promotion from development to production.",
        "Identify unsafe defaults and exposed management interfaces.",
        "Design secure deployment and rollback gates."
      ],
      "keywords": [
        "model deployment security",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai gateways and policy enforcement",
        "cloud ai services security",
        "container security for ai workloads",
        "secrets management for ai infrastructure",
        "trace artifact promotion from development to production.",
        "identify unsafe defaults and exposed management interfaces.",
        "design secure deployment and rollback gates."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Model Deployment Security\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Model deployment security covers packaging, configuration, release, serving, scaling, access control, and rollback for models in development and production.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: AI Gateways and Policy Enforcement, Cloud AI Services Security, Container Security for AI Workloads, Secrets Management for AI Infrastructure.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 9 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Trace artifact promotion from development to production.\n2. Identify unsafe defaults and exposed management interfaces.\n3. Design secure deployment and rollback gates.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Model Deployment Security. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a deployment diagram for a local model server with private admin access, read-only artifacts, and health endpoints separated from inference. Address this misconception or failure mode explicitly: Exposing management endpoints or model files alongside a public inference route. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-container-security-for-ai-workloads",
      "title": "Container Security for AI Workloads",
      "subtitle": "AI containers package model servers and dependencies but still rely on host-kernel isolation, image provenance, runtime configuration, and resource boundaries.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "AI containers package model servers and dependencies but still rely on host-kernel isolation, image provenance, runtime configuration, and resource boundaries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 10 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Cloud AI Services Security",
        "Model Deployment Security",
        "Secrets Management for AI Infrastructure",
        "AI Infrastructure and Inference Serving"
      ],
      "objectives": [
        "Assess image provenance, patching, users, capabilities, mounts, and networking.",
        "Apply resource limits and read-only filesystem patterns.",
        "Identify GPU device exposure and container escape assumptions."
      ],
      "keywords": [
        "container security for ai workloads",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "cloud ai services security",
        "model deployment security",
        "secrets management for ai infrastructure",
        "ai infrastructure and inference serving",
        "assess image provenance, patching, users, capabilities, mounts, and networking.",
        "apply resource limits and read-only filesystem patterns.",
        "identify gpu device exposure and container escape assumptions."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Container Security for AI Workloads\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: AI containers package model servers and dependencies but still rely on host-kernel isolation, image provenance, runtime configuration, and resource boundaries.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Cloud AI Services Security, Model Deployment Security, Secrets Management for AI Infrastructure, AI Infrastructure and Inference Serving.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 10 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Assess image provenance, patching, users, capabilities, mounts, and networking.\n2. Apply resource limits and read-only filesystem patterns.\n3. Identify GPU device exposure and container escape assumptions.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Container Security for AI Workloads. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Harden a disposable local inference container using a non-root user, minimal capabilities, read-only root filesystem, and bounded scratch space. Address this misconception or failure mode explicitly: Assuming a container is equivalent to a virtual machine or that GPU access is risk-free. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-secrets-management-for-ai-infrastructure",
      "title": "Secrets Management for AI Infrastructure",
      "subtitle": "Secrets management protects provider keys, signing credentials, database passwords, and service tokens throughout build, deployment, inference, and incident response.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Secrets management protects provider keys, signing credentials, database passwords, and service tokens throughout build, deployment, inference, and incident response.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 11 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Model Deployment Security",
        "Container Security for AI Workloads",
        "AI Infrastructure and Inference Serving",
        "Model Supply Chain and Dependency Security"
      ],
      "objectives": [
        "Identify secret sources and consumers across the model lifecycle.",
        "Use workload identity or secret brokers where feasible.",
        "Verify rotation, revocation, redaction, and least privilege."
      ],
      "keywords": [
        "secrets management for ai infrastructure",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "model deployment security",
        "container security for ai workloads",
        "ai infrastructure and inference serving",
        "model supply chain and dependency security",
        "identify secret sources and consumers across the model lifecycle.",
        "use workload identity or secret brokers where feasible.",
        "verify rotation, revocation, redaction, and least privilege."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Secrets Management for AI Infrastructure\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Secrets management protects provider keys, signing credentials, database passwords, and service tokens throughout build, deployment, inference, and incident response.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Model Deployment Security, Container Security for AI Workloads, AI Infrastructure and Inference Serving, Model Supply Chain and Dependency Security.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 11 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Identify secret sources and consumers across the model lifecycle.\n2. Use workload identity or secret brokers where feasible.\n3. Verify rotation, revocation, redaction, and least privilege.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Secrets Management for AI Infrastructure. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Use synthetic credentials in a local secret manager and verify they do not appear in image layers, environment dumps, logs, or model prompts. Address this misconception or failure mode explicitly: Embedding API keys in notebooks, container images, source control, or prompt templates. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-ai-infrastructure-and-inference-serving",
      "title": "AI Infrastructure and Inference Serving",
      "subtitle": "AI inference infrastructure includes schedulers, model workers, accelerators, caches, queues, storage, telemetry, and network services that affect confidentiality and availability.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "AI inference infrastructure includes schedulers, model workers, accelerators, caches, queues, storage, telemetry, and network services that affect confidentiality and availability.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 12 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Container Security for AI Workloads",
        "Secrets Management for AI Infrastructure",
        "Model Supply Chain and Dependency Security",
        "Model Integrity and Artifact Verification"
      ],
      "objectives": [
        "Map inference request lifecycle and shared resources.",
        "Identify isolation and resource-exhaustion boundaries.",
        "Assess queueing, cache, batch, and multi-tenant behavior."
      ],
      "keywords": [
        "ai infrastructure and inference serving",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "container security for ai workloads",
        "secrets management for ai infrastructure",
        "model supply chain and dependency security",
        "model integrity and artifact verification",
        "map inference request lifecycle and shared resources.",
        "identify isolation and resource-exhaustion boundaries.",
        "assess queueing, cache, batch, and multi-tenant behavior."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"AI Infrastructure and Inference Serving\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: AI inference infrastructure includes schedulers, model workers, accelerators, caches, queues, storage, telemetry, and network services that affect confidentiality and availability.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Container Security for AI Workloads, Secrets Management for AI Infrastructure, Model Supply Chain and Dependency Security, Model Integrity and Artifact Verification.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 12 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Map inference request lifecycle and shared resources.\n2. Identify isolation and resource-exhaustion boundaries.\n3. Assess queueing, cache, batch, and multi-tenant behavior.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic AI Infrastructure and Inference Serving. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Model a local inference service with synthetic tenants and test that cache keys and request queues cannot mix user context. Address this misconception or failure mode explicitly: Considering only the model process while ignoring shared caches, queues, logs, and schedulers. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-model-supply-chain-and-dependency-security",
      "title": "Model Supply Chain and Dependency Security",
      "subtitle": "The model supply chain includes model files, tokenizers, adapters, datasets, code, libraries, containers, build pipelines, and third-party registries.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "The model supply chain includes model files, tokenizers, adapters, datasets, code, libraries, containers, build pipelines, and third-party registries.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 13 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Secrets Management for AI Infrastructure",
        "AI Infrastructure and Inference Serving",
        "Model Integrity and Artifact Verification",
        "Inference Infrastructure Hardening"
      ],
      "objectives": [
        "Inventory direct and transitive dependencies and artifact sources.",
        "Verify publisher identity, provenance, signatures, hashes, and licensing.",
        "Define update and vulnerability-response processes."
      ],
      "keywords": [
        "model supply chain and dependency security",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "secrets management for ai infrastructure",
        "ai infrastructure and inference serving",
        "model integrity and artifact verification",
        "inference infrastructure hardening",
        "inventory direct and transitive dependencies and artifact sources.",
        "verify publisher identity, provenance, signatures, hashes, and licensing.",
        "define update and vulnerability-response processes."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Model Supply Chain and Dependency Security\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: The model supply chain includes model files, tokenizers, adapters, datasets, code, libraries, containers, build pipelines, and third-party registries.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Secrets Management for AI Infrastructure, AI Infrastructure and Inference Serving, Model Integrity and Artifact Verification, Inference Infrastructure Hardening.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 13 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Inventory direct and transitive dependencies and artifact sources.\n2. Verify publisher identity, provenance, signatures, hashes, and licensing.\n3. Define update and vulnerability-response processes.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Model Supply Chain and Dependency Security. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Create a bill of materials for a small local model-serving stack and verify hashes for downloaded artifacts against trusted release metadata. Address this misconception or failure mode explicitly: Trusting a model or package solely because it is popular or hosted on a recognized platform. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-model-integrity-and-artifact-verification",
      "title": "Model Integrity and Artifact Verification",
      "subtitle": "Model integrity ensures that weights, adapters, tokenizer files, configuration, and runtime code are the intended artifacts and have not been altered.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Model integrity ensures that weights, adapters, tokenizer files, configuration, and runtime code are the intended artifacts and have not been altered.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 14 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "AI Infrastructure and Inference Serving",
        "Model Supply Chain and Dependency Security",
        "Inference Infrastructure Hardening",
        "Multimodal and Infrastructure Security Testing"
      ],
      "objectives": [
        "Explain hashes, signatures, provenance attestations, and reproducible builds.",
        "Identify mutable artifact references and substitution risks.",
        "Design verification before loading or deployment."
      ],
      "keywords": [
        "model integrity and artifact verification",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "ai infrastructure and inference serving",
        "model supply chain and dependency security",
        "inference infrastructure hardening",
        "multimodal and infrastructure security testing",
        "explain hashes, signatures, provenance attestations, and reproducible builds.",
        "identify mutable artifact references and substitution risks.",
        "design verification before loading or deployment."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Model Integrity and Artifact Verification\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Model integrity ensures that weights, adapters, tokenizer files, configuration, and runtime code are the intended artifacts and have not been altered.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: AI Infrastructure and Inference Serving, Model Supply Chain and Dependency Security, Inference Infrastructure Hardening, Multimodal and Infrastructure Security Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 14 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Explain hashes, signatures, provenance attestations, and reproducible builds.\n2. Identify mutable artifact references and substitution risks.\n3. Design verification before loading or deployment.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Model Integrity and Artifact Verification. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Compare a locally stored model artifact against a trusted checksum and record provenance, version, and verification outcome. Address this misconception or failure mode explicitly: Treating a checksum obtained from the same untrusted download location as independent authenticity proof. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-inference-infrastructure-hardening",
      "title": "Inference Infrastructure Hardening",
      "subtitle": "Inference hardening reduces attack paths through network segmentation, process isolation, secure configuration, monitoring, patching, and controlled administrative access.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Inference hardening reduces attack paths through network segmentation, process isolation, secure configuration, monitoring, patching, and controlled administrative access.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 15 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Model Supply Chain and Dependency Security",
        "Model Integrity and Artifact Verification",
        "Multimodal and Infrastructure Security Testing"
      ],
      "objectives": [
        "Apply defense in depth to model-serving hosts.",
        "Separate management, telemetry, storage, and inference networks.",
        "Define patch, backup, and incident response controls."
      ],
      "keywords": [
        "inference infrastructure hardening",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "model supply chain and dependency security",
        "model integrity and artifact verification",
        "multimodal and infrastructure security testing",
        "apply defense in depth to model-serving hosts.",
        "separate management, telemetry, storage, and inference networks.",
        "define patch, backup, and incident response controls."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Inference Infrastructure Hardening\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Inference hardening reduces attack paths through network segmentation, process isolation, secure configuration, monitoring, patching, and controlled administrative access.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Model Supply Chain and Dependency Security, Model Integrity and Artifact Verification, Multimodal and Infrastructure Security Testing.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 15 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Apply defense in depth to model-serving hosts.\n2. Separate management, telemetry, storage, and inference networks.\n3. Define patch, backup, and incident response controls.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Inference Infrastructure Hardening. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Produce a hardening baseline for a local inference host and validate exposed ports, service identity, file permissions, and resource limits. Address this misconception or failure mode explicitly: Applying generic server hardening without accounting for model artifacts, accelerator access, and inference-specific data flows. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    },
    {
      "id": "topic-p04-22-multimodal-and-infrastructure-security-testing",
      "title": "Multimodal and Infrastructure Security Testing",
      "subtitle": "Combined multimodal and infrastructure testing validates the complete path from media ingestion through model inference and operational hosting.",
      "category": "Multimodal AI & Infrastructure Security",
      "difficulty": "Advanced",
      "definition": "Combined multimodal and infrastructure testing validates the complete path from media ingestion through model inference and operational hosting.",
      "partId": "part-04",
      "partTitle": "AI Security, AI Penetration Testing & AI Red Teaming",
      "moduleId": "module-22-multimodal-infrastructure-security",
      "moduleTitle": "Multimodal AI & AI Infrastructure Security",
      "position": "Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 16 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.",
      "prerequisites": [
        "Module 07 — multimodal models and generative AI fundamentals",
        "Module 11 — model formats and inference deployment"
      ],
      "relatedConcepts": [
        "Model Integrity and Artifact Verification",
        "Inference Infrastructure Hardening"
      ],
      "objectives": [
        "Build tests spanning file handling, model behavior, API policy, and runtime controls.",
        "Separate model robustness findings from conventional software vulnerabilities.",
        "Collect reproducible evidence with synthetic inputs and controlled infrastructure."
      ],
      "keywords": [
        "multimodal and infrastructure security testing",
        "multimodal ai & ai infrastructure security",
        "multimodal ai & infrastructure security",
        "ai security",
        "authorized assessment",
        "controlled lab",
        "human oversight",
        "model integrity and artifact verification",
        "inference infrastructure hardening",
        "build tests spanning file handling, model behavior, api policy, and runtime controls.",
        "separate model robustness findings from conventional software vulnerabilities.",
        "collect reproducible evidence with synthetic inputs and controlled infrastructure."
      ],
      "prompt": "Act as a senior AI security engineer, AI red-team practitioner, and research-oriented technical educator. Create a complete, self-contained, technically rigorous lesson on the exact topic: \"Multimodal and Infrastructure Security Testing\". Do not assume access to this website, other curriculum pages, or previous conversation.\n\nLANGUAGE AND TERMINOLOGY\n- Teach the entire lesson in natural Egyptian colloquial Arabic (Masri).\n- Keep technical terminology, protocol names, framework names, attack names, API fields, code, commands, and standards in English; explain each important term in Egyptian Arabic on first use.\n- Progress from the foundations needed for this topic to advanced and research-level details. Define supporting concepts rather than hiding gaps behind jargon.\n- Distinguish documented behavior, observed evidence, hypotheses, research findings, and product-specific assumptions.\n\nSELF-CONTAINED CONTEXT\nCurriculum: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming; Module 22 — Multimodal AI & AI Infrastructure Security.\nTopic definition: Combined multimodal and infrastructure testing validates the complete path from media ingestion through model inference and operational hosting.\nPrerequisites to explain briefly where needed: Module 07 — multimodal models and generative AI fundamentals; Module 11 — model formats and inference deployment.\nRelated concepts: Model Integrity and Artifact Verification, Inference Infrastructure Hardening.\nCurriculum position: Part 04 — AI Security, AI Penetration Testing & AI Red Teaming. Module 22 — Multimodal AI & AI Infrastructure Security. Curriculum position 16 of 16. This topic connects its specific mechanism to the module's advanced assessment sequence and builds on the stated prerequisites.\n\nLEARNING OBJECTIVES\n1. Build tests spanning file handling, model behavior, API policy, and runtime controls.\n2. Separate model robustness findings from conventional software vulnerabilities.\n3. Collect reproducible evidence with synthetic inputs and controlled infrastructure.\n\nTOPIC-SPECIFIC LESSON REQUIREMENTS\nYou are teaching the advanced topic Multimodal and Infrastructure Security Testing. Start with the precise meaning and security problem, then explain the architecture and internal mechanism relevant to this topic. Use this topic-specific scenario as a central worked case: Run a staged assessment against a local multimodal demo with synthetic files, mock identities, and a disposable inference container. Address this misconception or failure mode explicitly: Reporting a model-quality failure as an infrastructure exploit or vice versa without isolating the root cause. Explain assets, identities, trust boundaries, attacker capabilities, prerequisites, assumptions, realistic attack or failure paths, and the conditions under which impact is possible. Describe a defensible testing workflow: establish authorization and scope, create a hypothesis, choose controlled inputs, identify observable signals, run baseline and negative controls, inspect application/tool-side effects, and preserve minimal reproducible evidence. Explain likely security impact, exploitability constraints, false positives, false negatives, and what cannot be concluded from model text alone. Give technically appropriate defensive designs at the correct enforcement layers, including least privilege, deterministic authorization, isolation, provenance, monitoring, recovery, and regression verification where relevant. Include implementation details, pseudocode, Python or configuration examples only when they clarify the concept; explain important fields and trade-offs rather than presenting unexplained snippets.\n\nFRAMEWORKS AND RESEARCH REFERENCES\nWhere relevant, accurately explain the purpose and limits of OWASP Top 10 for LLM Applications, OWASP Top 10 for Agentic Applications, MITRE ATLAS, and NIST AI Risk Management Framework (AI RMF). Use exact category or technique identifiers only when verified against the applicable official edition; editions and guidance can change, so state the version/date used. Do not invent mappings, categories, controls, or citations. Explain that OWASP lists are application-risk guidance, MITRE ATLAS is an AI adversary tactics-and-techniques knowledge base, and NIST AI RMF is a risk-management framework; they are not interchangeable and none proves a vulnerability by itself. Use relevant academic research when appropriate and distinguish peer-reviewed work from preprints, demonstrations, and vendor claims.\n\nSAFE PRACTICAL WORK\nInclude at least one practical exercise using only a local controlled lab, synthetic data, mock services, systems owned by the learner, or an assessment with explicit written authorization. State scope, prerequisites, setup, steps, expected observations, success criteria, cleanup, and safe stopping conditions. Use harmless canary data, non-destructive tests, and least-privilege accounts. Do not target unrelated public systems, access real third-party data, expose real secrets, or trigger irreversible actions. For agent or infrastructure topics, use mock tools and disposable isolated environments. Pair attack demonstrations with a defensive validation test.\n\nEVIDENCE, DEFENSE, AND LIMITATIONS\n- Separate raw observations, model-generated claims, tool-side effects, interpretation, and independently verified facts.\n- Explain evidence capture, redaction, provenance, version/configuration context, reproducibility, and retention limits.\n- Discuss false positives, false negatives, nondeterminism, coverage gaps, and limitations specific to this topic.\n- Recommend layered mitigations and explain how to verify them with regression tests.\n- Enforce authorization, scope, data minimization, privacy, least privilege, human oversight, and responsible disclosure.\n\nOUTPUT STRUCTURE\nUse clear headings and concise text diagrams or tables when useful. Include: (1) topic-specific glossary, (2) progressive technical explanation, (3) architecture or workflow, (4) worked scenario, (5) controlled practical lab, (6) defensive checklist, (7) limitations and open questions, (8) at least five review questions with answers, and (9) key takeaways plus a short assessment with answer key. Keep the lesson deep and specific rather than padded. If it is too large for one response, split it into numbered parts and explain the sequence."
    }
  ]
});
