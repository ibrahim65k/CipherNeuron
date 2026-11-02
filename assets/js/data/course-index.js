/*
 * CipherNeuron — shared curriculum index
 * This file is intentionally plain JavaScript so it works from file:// URLs.
 */
(function () {
  "use strict";

  window.AI_COURSE = {
    brand: {
      name: "CipherNeuron",
      descriptor: "AI × Cybersecurity Learning Atlas",
      tagline: "Understand intelligence. Secure what it can do."
    },
    parts: [
      {
        id: "part-01",
        number: "01",
        title: "Artificial Intelligence Fundamentals",
        shortTitle: "AI Fundamentals",
        description: "Build a dependable mental model of modern artificial intelligence, from mathematical foundations and machine learning to neural networks, transformers, and modern AI systems.",
        audience: "Learners building their first structured understanding of AI and the technologies behind modern intelligent systems.",
        objectives: [
          "Explain the major branches and historical progression of artificial intelligence.",
          "Understand the practical mathematics and data concepts used by AI systems.",
          "Describe how machine learning and deep learning models are trained and evaluated.",
          "Understand transformers, language models, and modern AI application architectures."
        ],
        prerequisites: ["General computer literacy", "Basic algebra is helpful, but advanced mathematics is not required"],
        outcomes: ["A connected AI vocabulary", "A practical understanding of model behavior", "The foundation needed for AI development and security study"],
        moduleIds: ["module-01-introduction-to-ai", "module-02-mathematics-statistics-data", "module-03-machine-learning-fundamentals", "module-04-machine-learning-algorithms", "module-05-deep-learning-neural-networks", "module-06-nlp-transformers", "module-07-llms-generative-ai", "module-08-modern-ai-systems"]
      },
      {
        id: "part-02",
        number: "02",
        title: "AI Development, Models & Practical Tools",
        shortTitle: "AI Development",
        description: "Move from understanding AI concepts to working with real models, development libraries, local inference environments, fine-tuning workflows, and AI-powered applications.",
        audience: "Learners ready to use Python and practical tooling to build, run, evaluate, and integrate AI models.",
        objectives: [
          "Prepare a practical Python environment for AI development.",
          "Navigate model hubs, datasets, inference platforms, and local model runners.",
          "Download, inspect, run, and manage pretrained models responsibly.",
          "Build machine learning models, LLM applications, RAG systems, and tool-using agents."
        ],
        prerequisites: ["Part 01 concepts, especially ML, deep learning, and LLM fundamentals", "Basic Python familiarity is useful"],
        outcomes: ["A working AI development environment", "Hands-on experience with local and hosted models", "Small end-to-end AI applications"],
        moduleIds: ["module-09-python-ai-environment", "module-10-ai-ecosystem-platforms", "module-11-running-managing-models", "module-12-building-training-models", "module-13-llm-finetuning-app-development"]
      },
      {
        id: "part-03",
        number: "03",
        title: "AI-Assisted Cybersecurity & Offensive Security",
        shortTitle: "AI-Assisted Security",
        description: "Apply AI as a research, analysis, scripting, and workflow assistant across reconnaissance, web and API testing, network security, Active Directory, and mobile security.",
        audience: "Security practitioners who want to integrate AI into authorized assessment workflows without surrendering technical judgment.",
        objectives: [
          "Identify useful and unsafe uses of AI during security work.",
          "Use LLMs to support research, traffic analysis, and security documentation.",
          "Design AI-assisted workflows for web, API, network, AD, and mobile assessments.",
          "Integrate tools and agents with permission boundaries and human validation."
        ],
        prerequisites: ["Part 01 fundamentals", "Part 02 practical AI usage", "Foundational cybersecurity knowledge"],
        outcomes: ["Repeatable AI-assisted workflows", "Better-informed security research", "Safer automation and tool integration"],
        moduleIds: ["module-14-ai-in-cybersecurity-pentesting", "module-15-ai-offensive-workflows", "module-16-ai-agents-automation-pentesting"]
      },
      {
        id: "part-04",
        number: "04",
        title: "AI Security, AI Penetration Testing & AI Red Teaming",
        shortTitle: "AI Security & Red Teaming",
        description: "A dedicated advanced track for assessing AI systems themselves: their models, data, prompts, retrieval pipelines, agents, multimodal interfaces, infrastructure, and operational behavior.",
        audience: "Security practitioners and researchers progressing toward structured AI security assessment and AI red teaming.",
        objectives: [
          "Threat-model AI applications, models, data, and supporting infrastructure.",
          "Evaluate adversarial ML, LLM, RAG, agentic, and multimodal attack surfaces.",
          "Conduct scoped AI security assessments and red-team campaigns.",
          "Produce reproducible findings, prioritize risk, and verify mitigations."
        ],
        prerequisites: ["Parts 01–03 or equivalent knowledge", "Comfort with web/API security and basic model/application architecture"],
        outcomes: ["A structured AI assessment methodology", "The ability to test AI-specific security properties", "Research and reporting skills for advanced AI security work"],
        moduleIds: ["module-17-ai-security-threat-modeling", "module-18-adversarial-machine-learning", "module-19-llm-generative-ai-pentesting", "module-20-rag-knowledge-security", "module-21-agentic-ai-tool-security", "module-22-multimodal-infrastructure-security", "module-23-ai-red-teaming-methodology", "module-24-advanced-ai-security-research"]
      }
    ],
    moduleCatalog: [
      { id: "module-01-introduction-to-ai", number: "01", partId: "part-01", title: "Introduction to Artificial Intelligence", description: "The origins, branches, capabilities, and architecture of artificial intelligence.", status: "available", topicCount: 8 },
      { id: "module-02-mathematics-statistics-data", number: "02", partId: "part-01", title: "Mathematics, Statistics & Data Fundamentals", description: "Practical mathematical and data foundations used throughout AI.", status: "available", topicCount: 8 },
      { id: "module-03-machine-learning-fundamentals", number: "03", partId: "part-01", title: "Machine Learning Fundamentals", description: "Learning paradigms, datasets, model training, evaluation, and generalization.", status: "available", topicCount: 9 },
      { id: "module-04-machine-learning-algorithms", number: "04", partId: "part-01", title: "Machine Learning Algorithms", description: "Core supervised, unsupervised, and ensemble learning algorithms.", status: "available", topicCount: 9 },
      { id: "module-05-deep-learning-neural-networks", number: "05", partId: "part-01", title: "Deep Learning & Neural Networks", description: "Neural network components, learning workflows, and deep architectures.", status: "available", topicCount: 11 },
      { id: "module-06-nlp-transformers", number: "06", partId: "part-01", title: "Natural Language Processing & Transformers", description: "Text representation, language processing, and transformer architecture.", status: "available", topicCount: 8 },
      { id: "module-07-llms-generative-ai", number: "07", partId: "part-01", title: "Large Language Models & Generative AI", description: "LLM behavior, tokenization, generation, multimodality, and limitations.", status: "available", topicCount: 12 },
      { id: "module-08-modern-ai-systems", number: "08", partId: "part-01", title: "Modern AI Systems & Architectures", description: "Prompts, RAG, agents, tool calling, MCP, integrations, and guardrails.", status: "available", topicCount: 14 },
      { id: "module-09-python-ai-environment", number: "09", partId: "part-02", title: "Python & AI Development Environment", description: "Python foundations, core libraries, notebooks, hardware, and environments.", status: "available" , topicCount: 17 },
      { id: "module-10-ai-ecosystem-platforms", number: "10", partId: "part-02", title: "AI Ecosystem & Model Platforms", description: "Model and dataset hubs, local runners, inference servers, and API platforms.", status: "available" , topicCount: 15 },
      { id: "module-11-running-managing-models", number: "11", partId: "part-02", title: "Downloading, Running & Managing AI Models", description: "Model formats, weights, quantization, local inference, and model lifecycle.", status: "available" , topicCount: 15 },
      { id: "module-12-building-training-models", number: "12", partId: "part-02", title: "Building & Training ML and Deep Learning Models", description: "End-to-end model development, training, evaluation, and persistence.", status: "available" , topicCount: 16 },
      { id: "module-13-llm-finetuning-app-development", number: "13", partId: "part-02", title: "LLM Fine-Tuning & AI Application Development", description: "Adapt pretrained LLMs and build applications, RAG systems, and agents.", status: "available" , topicCount: 18 },
      { id: "module-14-ai-in-cybersecurity-pentesting", number: "14", partId: "part-03", title: "AI in Cybersecurity & Pentesting", description: "Responsible, practical uses and limitations of AI in security work.", status: "available" , topicCount: 14 },
      { id: "module-15-ai-offensive-workflows", number: "15", partId: "part-03", title: "AI-Assisted Offensive Security Workflows", description: "AI-supported reconnaissance and assessment across major security domains.", status: "available" , topicCount: 35 },
      { id: "module-16-ai-agents-automation-pentesting", number: "16", partId: "part-03", title: "AI Agents, Automation & Pentesting Integration", description: "Build permission-aware automations and tool-integrated security assistants.", status: "available" , topicCount: 25 },
      { id: "module-17-ai-security-threat-modeling", number: "17", partId: "part-04", title: "AI Security Fundamentals & Threat Modeling", description: "AI system architecture, trust boundaries, assets, threats, and controls.", status: "available"  , topicCount: 14 },
      { id: "module-18-adversarial-machine-learning", number: "18", partId: "part-04", title: "Adversarial Machine Learning", description: "Training-time and inference-time attacks, robustness, and defenses.", status: "available"  , topicCount: 14 },
      { id: "module-19-llm-generative-ai-pentesting", number: "19", partId: "part-04", title: "LLM & Generative AI Penetration Testing", description: "Assess prompts, outputs, data boundaries, model abuse, and LLM applications.", status: "available"  , topicCount: 18 },
      { id: "module-20-rag-knowledge-security", number: "20", partId: "part-04", title: "RAG & Knowledge System Security", description: "Test retrieval pipelines, knowledge stores, tenant boundaries, and data access.", status: "available"  , topicCount: 17 },
      { id: "module-21-agentic-ai-tool-security", number: "21", partId: "part-04", title: "Agentic AI & Tool Security", description: "Assess agent autonomy, tool execution, memory, identity, and MCP integrations.", status: "available" , topicCount: 17 },
      { id: "module-22-multimodal-infrastructure-security", number: "22", partId: "part-04", title: "Multimodal AI & AI Infrastructure Security", description: "Evaluate multimodal inputs, model APIs, deployments, and infrastructure.", status: "available" , topicCount: 16 },
      { id: "module-23-ai-red-teaming-methodology", number: "23", partId: "part-04", title: "AI Red Teaming Methodology & Operations", description: "Scope, design, execute, document, and communicate AI red-team campaigns.", status: "available" , topicCount: 19 },
      { id: "module-24-advanced-ai-security-research", number: "24", partId: "part-04", title: "Advanced AI Security Assessment & Research", description: "Advanced evaluation, custom tooling, reproducibility, and security research.", status: "available" , topicCount: 17 }
    ]
  };
}());
