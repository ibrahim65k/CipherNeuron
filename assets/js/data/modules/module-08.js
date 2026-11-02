/* CipherNeuron curriculum data — Module 08. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-08-modern-ai-systems",
  "number": "08",
  "partId": "part-01",
  "title": "Modern AI Systems & Architectures",
  "subtitle": "Understand the application architectures that turn models into useful systems.",
  "description": "Connects prompts and context management with RAG, retrieval, agents, tool execution, APIs, MCP, guardrails, and application reliability.",
  "difficulty": "Intermediate",
  "estimatedTime": "6–8 hours",
  "prerequisites": [
    "Modules 06–07 NLP, transformer, and LLM fundamentals",
    "Basic software and API familiarity is helpful"
  ],
  "objectives": [
    "Distinguish models, AI applications, and AI agents.",
    "Understand prompt roles and context-management choices.",
    "Describe an end-to-end RAG pipeline and its retrieval components.",
    "Explain agent loops, tools, integrations, MCP, guardrails, and limitations."
  ],
  "relatedModules": [
    "module-07-llms-generative-ai",
    "module-10-ai-ecosystem-platforms",
    "module-13-llm-finetuning-app-development",
    "module-21-agentic-ai-tool-security"
  ],
  "topics": [
    {
      "id": "topic-ai-models-vs-ai-applications-vs-ai-agents",
      "title": "AI Models vs. AI Applications vs. AI Agents",
      "subtitle": "Separate the model, the product, and the action-taking system.",
      "category": "AI Application Architecture",
      "difficulty": "Foundation",
      "definition": "An AI model computes outputs from inputs, an AI application combines a model with interfaces and supporting services, and an AI agent uses model-driven decisions and tools to pursue tasks across steps.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Define model, application, workflow, agent, tool, state, and environment.",
        "Compare a single model call, a fixed workflow, and an agent loop.",
        "Identify the responsibilities of data, orchestration, permissions, storage, and user interface."
      ],
      "keywords": [
        "ai models vs. ai applications vs. ai agents",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"AI Models vs. AI Applications vs. AI Agents\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Define model, application, workflow, agent, tool, state, and environment.\n- Compare a single model call, a fixed workflow, and an agent loop.\n- Identify the responsibilities of data, orchestration, permissions, storage, and user interface.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define model, application, workflow, agent, tool, state, and environment.\n2. Compare a single model call, a fixed workflow, and an agent loop.\n3. Identify the responsibilities of data, orchestration, permissions, storage, and user interface.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a one-shot summarizer with a research assistant that searches, reads, and cites sources.\n- Map a customer-service app into UI, backend, model endpoint, retrieval, and authorization components.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- An application using an LLM is not automatically an agent.\n- An agent is not inherently autonomous or safe merely because it can call tools.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw three architectures: a model endpoint, a model-powered application, and a tool-using agent. Mark what changes in state, authority, and failure modes.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-prompt-roles-system-developer-and-user-messages",
      "title": "Prompt Roles: System, Developer, and User Messages",
      "subtitle": "Understand message roles and their purpose in structured interactions.",
      "category": "AI Application Architecture",
      "difficulty": "Foundation",
      "definition": "Prompt roles label messages by their source and intended function; system, developer, and user messages can provide different kinds of instructions or task content in a conversational model interface.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Define message, role, instruction, user content, and conversation serialization.",
        "Explain the intended distinction among system, developer, and user messages.",
        "Discuss role hierarchy at a conceptual level while noting that exact behavior depends on the model interface."
      ],
      "keywords": [
        "prompt roles: system, developer, and user messages",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Prompt Roles: System, Developer, and User Messages\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Define message, role, instruction, user content, and conversation serialization.\n- Explain the intended distinction among system, developer, and user messages.\n- Discuss role hierarchy at a conceptual level while noting that exact behavior depends on the model interface.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define message, role, instruction, user content, and conversation serialization.\n2. Explain the intended distinction among system, developer, and user messages.\n3. Discuss role hierarchy at a conceptual level while noting that exact behavior depends on the model interface.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Separate application-wide behavior requirements from task-specific user requests.\n- Analyze a prompt containing conflicting or ambiguous instructions.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A role label in plain text is not necessarily equivalent to a trusted structured message role.\n- Prompt instructions do not replace application authorization and security controls.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a sample three-role conversation for a document assistant. Identify which requirements belong in application configuration and which belong in the user request.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-prompt-templates-and-structured-prompt-design",
      "title": "Prompt Templates and Structured Prompt Design",
      "subtitle": "Build reusable prompts with explicit inputs and output expectations.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "A Prompt Template is a reusable prompt structure containing instructions and variable placeholders that are populated for a particular task.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain task, context, constraints, examples, output format, variables, and template rendering.",
        "Compare zero-shot and few-shot examples.",
        "Discuss ambiguity, instruction conflicts, prompt injection boundaries, and versioning."
      ],
      "keywords": [
        "prompt templates and structured prompt design",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Prompt Templates and Structured Prompt Design\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain task, context, constraints, examples, output format, variables, and template rendering.\n- Compare zero-shot and few-shot examples.\n- Discuss ambiguity, instruction conflicts, prompt injection boundaries, and versioning.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain task, context, constraints, examples, output format, variables, and template rendering.\n2. Compare zero-shot and few-shot examples.\n3. Discuss ambiguity, instruction conflicts, prompt injection boundaries, and versioning.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Create a template for extracting structured fields from incident notes.\n- Compare an open-ended prompt with one that specifies output schema and uncertainty handling.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A detailed prompt does not guarantee deterministic or correct outputs.\n- Examples can unintentionally bias outputs or conflict with other instructions.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign, test, and revise a prompt template using at least three varied input examples. Include an explicit fallback for missing information.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-context-management-and-context-engineering",
      "title": "Context Management and Context Engineering",
      "subtitle": "Decide what information a model receives at each step.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "Context Management is the process of selecting, organizing, compressing, and maintaining information supplied to a model so it can perform a task within available context and system constraints.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Distinguish instructions, conversation history, retrieved documents, tool outputs, and state.",
        "Explain context selection, truncation, summarization, prioritization, and token budgets.",
        "Discuss stale context, conflicting sources, provenance, and untrusted content."
      ],
      "keywords": [
        "context management and context engineering",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Context Management and Context Engineering\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Distinguish instructions, conversation history, retrieved documents, tool outputs, and state.\n- Explain context selection, truncation, summarization, prioritization, and token budgets.\n- Discuss stale context, conflicting sources, provenance, and untrusted content.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish instructions, conversation history, retrieved documents, tool outputs, and state.\n2. Explain context selection, truncation, summarization, prioritization, and token budgets.\n3. Discuss stale context, conflicting sources, provenance, and untrusted content.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Build a context pack for answering a question from several documents.\n- Compare full-history injection with a summarized state and targeted retrieval.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- More context is not always better; irrelevant or conflicting context can reduce answer quality.\n- Summarized context can omit details and should preserve provenance where needed.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a context assembly policy for a long-running research assistant, including what to retain, summarize, retrieve, and discard.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-ai-memory-conversation-application-and-external-memory",
      "title": "AI Memory: Conversation, Application, and External Memory",
      "subtitle": "Understand what “memory” means in different AI architectures.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "AI memory refers to information retained or made available across steps or sessions; it may exist in a conversation context, application state, or external storage rather than inside model weights.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Compare context-window history, session state, persistent profile memory, vector memory, and database records.",
        "Explain write, read, update, deletion, retention, and user-control operations.",
        "Discuss data minimization, provenance, privacy, and stale-memory risks.",
        "Explain agent memory and agent state, including task scratch state, episodic records, retrieved knowledge, and persistent application storage."
      ],
      "keywords": [
        "ai memory: conversation, application, and external memory",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"AI Memory: Conversation, Application, and External Memory\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Compare context-window history, session state, persistent profile memory, vector memory, and database records.\n- Explain write, read, update, deletion, retention, and user-control operations.\n- Discuss data minimization, provenance, privacy, and stale-memory risks.\n- Explain agent memory and agent state, including task scratch state, episodic records, retrieved knowledge, and persistent application storage.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare context-window history, session state, persistent profile memory, vector memory, and database records.\n2. Explain write, read, update, deletion, retention, and user-control operations.\n3. Discuss data minimization, provenance, privacy, and stale-memory risks.\n4. Explain agent memory and agent state, including task scratch state, episodic records, retrieved knowledge, and persistent application storage.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace how a preference is saved and retrieved by an application.\n- Compare storing a fact in a relational database with retrieving semantically similar notes from a vector store.\n- Compare a tool-using agent that keeps task state within one run with an assistant that retrieves permitted long-term notes across sessions.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A model does not necessarily retain a fact after the conversation ends.\n- Retrieval-based memory can return irrelevant, outdated, or sensitive content.\n- Agent scratch state, conversation context, and persistent user memory are different mechanisms with different retention and security implications.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a memory policy for a study assistant with retention limits, deletion behavior, provenance, and explicit user controls.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-retrieval-augmented-generation-rag-architecture-and-pipeline",
      "title": "Retrieval-Augmented Generation (RAG) Architecture and Pipeline",
      "subtitle": "Understand how external knowledge can ground model responses.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "Retrieval-Augmented Generation (RAG) combines information retrieval with a generative model by retrieving relevant external content and supplying it as context for generation.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain ingestion, document parsing, chunking, indexing, retrieval, context assembly, generation, and citation.",
        "Distinguish offline indexing from online question processing.",
        "Discuss grounding, retrieval coverage, source quality, and evaluation."
      ],
      "keywords": [
        "retrieval-augmented generation (rag) architecture and pipeline",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Retrieval-Augmented Generation (RAG) Architecture and Pipeline\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain ingestion, document parsing, chunking, indexing, retrieval, context assembly, generation, and citation.\n- Distinguish offline indexing from online question processing.\n- Discuss grounding, retrieval coverage, source quality, and evaluation.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain ingestion, document parsing, chunking, indexing, retrieval, context assembly, generation, and citation.\n2. Distinguish offline indexing from online question processing.\n3. Discuss grounding, retrieval coverage, source quality, and evaluation.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace a question through a document RAG system from query to retrieved chunks to answer.\n- Compare a parametric-only model response with a response grounded in supplied documents.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- RAG does not guarantee correctness; poor retrieval or ambiguous sources still lead to wrong answers.\n- RAG is not the same as fine-tuning and does not automatically change model weights.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw an end-to-end RAG architecture and identify failure points at ingestion, retrieval, context assembly, generation, and citation.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-document-chunking-and-knowledge-ingestion",
      "title": "Document Chunking and Knowledge Ingestion",
      "subtitle": "Understand how source documents are prepared for retrieval.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "Chunking divides documents into smaller passages for indexing and retrieval; ingestion is the broader process of parsing, cleaning, enriching, and storing source content.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain fixed-size, sentence-aware, section-aware, and semantic chunking.",
        "Discuss chunk size, overlap, metadata, document hierarchy, and provenance.",
        "Identify ingestion risks such as duplicated, stale, malformed, or poisoned documents."
      ],
      "keywords": [
        "document chunking and knowledge ingestion",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Document Chunking and Knowledge Ingestion\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain fixed-size, sentence-aware, section-aware, and semantic chunking.\n- Discuss chunk size, overlap, metadata, document hierarchy, and provenance.\n- Identify ingestion risks such as duplicated, stale, malformed, or poisoned documents.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain fixed-size, sentence-aware, section-aware, and semantic chunking.\n2. Discuss chunk size, overlap, metadata, document hierarchy, and provenance.\n3. Identify ingestion risks such as duplicated, stale, malformed, or poisoned documents.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Split a technical document by headings while preserving section metadata.\n- Compare a sentence split with a fixed token window for a passage containing code and tables.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Larger chunks are not always more informative, and smaller chunks are not always more precise.\n- Overlap can preserve context but also increase duplication and indexing cost.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign chunking rules for a documentation library containing prose, code samples, headings, and tables. State how citations will map back to source passages.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-embeddings-and-vector-databases-in-rag",
      "title": "Embeddings and Vector Databases in RAG",
      "subtitle": "Understand semantic indexing and vector storage.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "An embedding model converts text or other content into a numerical vector, while a Vector Database stores vectors and associated metadata to support similarity search and filtering.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain embedding generation, dimensions, similarity metrics, indexing, metadata, and namespaces.",
        "Compare exact and approximate nearest-neighbor search conceptually.",
        "Discuss embedding-model compatibility, updates, access control, and tenant isolation."
      ],
      "keywords": [
        "embeddings and vector databases in rag",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Embeddings and Vector Databases in RAG\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain embedding generation, dimensions, similarity metrics, indexing, metadata, and namespaces.\n- Compare exact and approximate nearest-neighbor search conceptually.\n- Discuss embedding-model compatibility, updates, access control, and tenant isolation.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain embedding generation, dimensions, similarity metrics, indexing, metadata, and namespaces.\n2. Compare exact and approximate nearest-neighbor search conceptually.\n3. Discuss embedding-model compatibility, updates, access control, and tenant isolation.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Index a few document chunks and retrieve nearest neighbors for a query vector.\n- Explain why changing an embedding model may require re-embedding an existing corpus.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A vector database is not automatically a secure document-permission system.\n- Similarity search quality depends on the embedding model, chunking, and query design.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nSketch a vector index schema with document ID, chunk ID, tenant, permissions, source, timestamp, and embedding. Explain which fields must be filtered before retrieval.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-retrieval-semantic-search-and-hybrid-search",
      "title": "Retrieval, Semantic Search, and Hybrid Search",
      "subtitle": "Compare ways of finding relevant information for a query.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "Retrieval selects candidate information from a corpus; Semantic Search uses representations to match meaning, while Hybrid Search combines lexical matching with semantic retrieval.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Compare keyword search, lexical ranking, dense-vector search, and hybrid retrieval.",
        "Explain query processing, filters, candidate generation, and relevance.",
        "Discuss recall, precision, synonyms, exact identifiers, and domain-specific vocabulary."
      ],
      "keywords": [
        "retrieval, semantic search, and hybrid search",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Retrieval, Semantic Search, and Hybrid Search\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Compare keyword search, lexical ranking, dense-vector search, and hybrid retrieval.\n- Explain query processing, filters, candidate generation, and relevance.\n- Discuss recall, precision, synonyms, exact identifiers, and domain-specific vocabulary.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare keyword search, lexical ranking, dense-vector search, and hybrid retrieval.\n2. Explain query processing, filters, candidate generation, and relevance.\n3. Discuss recall, precision, synonyms, exact identifiers, and domain-specific vocabulary.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare searching for an exact CVE identifier with a natural-language security question.\n- Show why combining BM25-like lexical ranking with vector similarity can improve candidate coverage.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Semantic search can miss exact strings and rare identifiers.\n- Hybrid scores need calibration or ranking logic; simply adding scores is not always valid.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a retrieval strategy for a security knowledge base containing prose, CVE identifiers, code, and product versions. Explain the role of metadata filters.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-reranking-rag-evaluation-and-rag-vs-fine-tuning",
      "title": "Reranking, RAG Evaluation, and RAG vs. Fine-Tuning",
      "subtitle": "Understand relevance refinement and how to evaluate knowledge systems.",
      "category": "AI Application Architecture",
      "difficulty": "Advanced",
      "definition": "Reranking reorders retrieved candidates using a more focused relevance model; RAG adds external context at inference time, while Fine-Tuning updates model parameters using additional training data.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain retrieve-then-rerank architecture and cross-encoder relevance scoring.",
        "Define retrieval metrics such as Recall@k and ranking metrics such as MRR or nDCG conceptually.",
        "Compare RAG and fine-tuning by knowledge freshness, behavior, traceability, cost, and data requirements."
      ],
      "keywords": [
        "reranking, rag evaluation, and rag vs. fine-tuning",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Reranking, RAG Evaluation, and RAG vs. Fine-Tuning\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain retrieve-then-rerank architecture and cross-encoder relevance scoring.\n- Define retrieval metrics such as Recall@k and ranking metrics such as MRR or nDCG conceptually.\n- Compare RAG and fine-tuning by knowledge freshness, behavior, traceability, cost, and data requirements.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain retrieve-then-rerank architecture and cross-encoder relevance scoring.\n2. Define retrieval metrics such as Recall@k and ranking metrics such as MRR or nDCG conceptually.\n3. Compare RAG and fine-tuning by knowledge freshness, behavior, traceability, cost, and data requirements.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Rerank ten candidates and inspect how the top three change.\n- Choose RAG or fine-tuning for updated policy documents versus a stable output style requirement.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Reranking cannot recover a relevant document that was never retrieved.\n- Fine-tuning is not a reliable substitute for a live, permission-aware document retrieval layer.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nBuild an evaluation plan for a RAG application with representative questions, expected source passages, retrieval metrics, answer quality, and access-control tests.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Advanced. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-ai-agents-agent-loops-planning-and-reasoning",
      "title": "AI Agents, Agent Loops, Planning, and Reasoning",
      "subtitle": "Understand iterative task execution driven by model decisions.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "An AI Agent is a system that observes context, chooses actions, uses tools or internal capabilities, and iterates toward a task objective under some policy or constraints.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain observe, reason, plan, act, tool result, state update, and termination.",
        "Compare fixed workflows with dynamic agent loops.",
        "Discuss planning horizons, task decomposition, retries, stopping criteria, and traceability."
      ],
      "keywords": [
        "ai agents, agent loops, planning, and reasoning",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"AI Agents, Agent Loops, Planning, and Reasoning\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain observe, reason, plan, act, tool result, state update, and termination.\n- Compare fixed workflows with dynamic agent loops.\n- Discuss planning horizons, task decomposition, retries, stopping criteria, and traceability.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain observe, reason, plan, act, tool result, state update, and termination.\n2. Compare fixed workflows with dynamic agent loops.\n3. Discuss planning horizons, task decomposition, retries, stopping criteria, and traceability.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace an agent that searches a local knowledge base and drafts a cited summary.\n- Compare one-shot prompting with an agent that uses a sequence of read-only tools.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A reasoning trace or plan is not proof that intermediate statements are correct.\n- More agent steps increase opportunities for errors, cost, and unintended side effects.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a bounded agent loop for a read-only research task. Specify allowed tools, maximum steps, stopping rules, and verification points.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-tool-calling-and-function-calling",
      "title": "Tool Calling and Function Calling",
      "subtitle": "Understand how models request actions through structured interfaces.",
      "category": "AI Application Architecture",
      "difficulty": "Intermediate",
      "definition": "Tool Calling allows a model-driven application to invoke an external function or service; Function Calling commonly refers to a structured mechanism for requesting a function with arguments that the application validates and executes.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain tool schemas, function names, arguments, validation, execution, results, and follow-up model calls.",
        "Distinguish the model requesting a tool from the application actually executing it.",
        "Discuss argument validation, permission checks, side effects, idempotency, and error handling."
      ],
      "keywords": [
        "tool calling and function calling",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Tool Calling and Function Calling\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain tool schemas, function names, arguments, validation, execution, results, and follow-up model calls.\n- Distinguish the model requesting a tool from the application actually executing it.\n- Discuss argument validation, permission checks, side effects, idempotency, and error handling.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain tool schemas, function names, arguments, validation, execution, results, and follow-up model calls.\n2. Distinguish the model requesting a tool from the application actually executing it.\n3. Discuss argument validation, permission checks, side effects, idempotency, and error handling.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Trace a calculator tool call from structured request to result.\n- Compare a read-only search function with a write operation that creates or deletes a resource.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A model-generated tool request is untrusted input and must be validated.\n- Hiding a dangerous function from the prompt is not a substitute for server-side authorization.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDefine a safe tool schema for a read-only inventory lookup. Add validation rules, permission checks, error handling, and an audit record.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-multi-agent-systems-mcp-apis-and-integrations",
      "title": "Multi-Agent Systems, MCP, APIs, and Integrations",
      "subtitle": "Understand how multiple AI components and external tools communicate.",
      "category": "AI Application Architecture",
      "difficulty": "Advanced",
      "definition": "A Multi-Agent System coordinates multiple agents or specialized roles; APIs expose software capabilities, and Model Context Protocol (MCP) is a protocol for connecting AI applications with external tools and context providers.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Explain agent roles, coordination, handoffs, shared state, and orchestration.",
        "Define API, endpoint, authentication, request/response, and integration.",
        "Describe MCP concepts such as host, client, server, tools, and resources at a protocol level.",
        "Discuss trust between agents, services, and tool providers."
      ],
      "keywords": [
        "multi-agent systems, mcp, apis, and integrations",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Multi-Agent Systems, MCP, APIs, and Integrations\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Explain agent roles, coordination, handoffs, shared state, and orchestration.\n- Define API, endpoint, authentication, request/response, and integration.\n- Describe MCP concepts such as host, client, server, tools, and resources at a protocol level.\n- Discuss trust between agents, services, and tool providers.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain agent roles, coordination, handoffs, shared state, and orchestration.\n2. Define API, endpoint, authentication, request/response, and integration.\n3. Describe MCP concepts such as host, client, server, tools, and resources at a protocol level.\n4. Discuss trust between agents, services, and tool providers.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Map a planner agent delegating a bounded research task to a specialist agent.\n- Trace an MCP client discovering a read-only tool and requesting its execution.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Multiple agents do not guarantee better reasoning or fewer errors.\n- Connecting a tool through MCP or an API does not make its outputs trustworthy or its permissions safe by default.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw a multi-agent architecture with an orchestrator, two specialist agents, and an MCP server. Mark identities, trust boundaries, and allowed actions.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Advanced. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-guardrails-reliability-and-limitations-of-modern-ai-systems",
      "title": "Guardrails, Reliability, and Limitations of Modern AI Systems",
      "subtitle": "Understand controls that shape system behavior without assuming perfect safety.",
      "category": "AI Application Architecture",
      "difficulty": "Advanced",
      "definition": "Guardrails are technical and procedural controls intended to constrain or monitor AI system behavior, while reliability depends on the full application, its data, models, tools, and operating environment.",
      "position": "This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.",
      "prerequisites": [
        "Modules 06–07 NLP, transformer, and LLM fundamentals",
        "Basic software and API familiarity is helpful"
      ],
      "relatedConcepts": [
        "AI Application Architecture",
        "System Prompts",
        "Context Management",
        "Memory",
        "RAG",
        "Vector Databases",
        "Retrieval",
        "AI Agents",
        "Tool Calling",
        "MCP",
        "Guardrails"
      ],
      "objectives": [
        "Compare input validation, output validation, policy checks, tool allowlists, rate limits, monitoring, and human approval.",
        "Explain failure modes such as hallucination, prompt injection, retrieval error, tool misuse, drift, and service failure.",
        "Distinguish model-level controls from application-level enforcement.",
        "Create layered controls and test them against expected failure cases."
      ],
      "keywords": [
        "guardrails, reliability, and limitations of modern ai systems",
        "model vs application vs agent",
        "system developer user prompt roles",
        "RAG chunking embeddings reranking",
        "semantic hybrid search",
        "agent loop planning tools",
        "function calling MCP APIs guardrails"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Guardrails, Reliability, and Limitations of Modern AI Systems\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 08 — Modern AI Systems & Architectures. This module moves from the model itself to the software system surrounding it, providing concepts needed for AI development, integration, automation, and later security assessment.\nAssume general computer literacy and these prerequisites: Modules 06–07 NLP, transformer, and LLM fundamentals, Basic software and API familiarity is helpful. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: AI Application Architecture, System Prompts, Context Management, Memory, RAG, Vector Databases, Retrieval, AI Agents, Tool Calling, MCP, Guardrails.\n\nLEARNING OUTCOMES\n- Compare input validation, output validation, policy checks, tool allowlists, rate limits, monitoring, and human approval.\n- Explain failure modes such as hallucination, prompt injection, retrieval error, tool misuse, drift, and service failure.\n- Distinguish model-level controls from application-level enforcement.\n- Create layered controls and test them against expected failure cases.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare input validation, output validation, policy checks, tool allowlists, rate limits, monitoring, and human approval.\n2. Explain failure modes such as hallucination, prompt injection, retrieval error, tool misuse, drift, and service failure.\n3. Distinguish model-level controls from application-level enforcement.\n4. Create layered controls and test them against expected failure cases.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Design a document assistant that can read permitted files but cannot send external messages.\n- Build a failure-handling path when retrieval is empty or a tool returns an error.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A system prompt is not a security boundary for high-impact operations.\n- No single guardrail eliminates all failure modes; controls should be layered and tested.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a threat-aware reliability checklist for a tool-using assistant. Include input, retrieval, output, authorization, monitoring, human review, and incident response.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Advanced. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
