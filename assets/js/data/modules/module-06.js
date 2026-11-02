/* CipherNeuron curriculum data — Module 06. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-06-nlp-transformers",
  "number": "06",
  "partId": "part-01",
  "title": "Natural Language Processing & Transformers",
  "subtitle": "Learn how machines represent, process, and model human language.",
  "description": "Moves from text preprocessing and classical representations to embeddings, language models, and transformer architecture.",
  "difficulty": "Intermediate",
  "estimatedTime": "5–7 hours",
  "prerequisites": [
    "Module 03 ML fundamentals",
    "Basic understanding of vectors and matrices"
  ],
  "objectives": [
    "Distinguish NLP, NLU, and NLG.",
    "Explain common text preprocessing and vectorization methods.",
    "Understand word embeddings and transformer components.",
    "Describe attention, positional information, masks, and transformer training at a conceptual level."
  ],
  "relatedModules": [
    "module-05-deep-learning-neural-networks",
    "module-07-llms-generative-ai"
  ],
  "topics": [
    {
      "id": "topic-natural-language-processing-nlu-and-nlg",
      "title": "Natural Language Processing, NLU, and NLG",
      "subtitle": "Understand the major goals of language technology.",
      "category": "Language Processing",
      "difficulty": "Foundation",
      "definition": "Natural Language Processing (NLP) is the field concerned with computational processing of human language; Natural Language Understanding (NLU) focuses on interpreting meaning, while Natural Language Generation (NLG) focuses on producing language.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Define NLP, NLU, NLG, language input, context, intent, and output.",
        "Compare classification, extraction, translation, summarization, question answering, and generation.",
        "Explain ambiguity, context dependence, and linguistic variation."
      ],
      "keywords": [
        "natural language processing, nlu, and nlg",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Natural Language Processing, NLU, and NLG\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Define NLP, NLU, NLG, language input, context, intent, and output.\n- Compare classification, extraction, translation, summarization, question answering, and generation.\n- Explain ambiguity, context dependence, and linguistic variation.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define NLP, NLU, NLG, language input, context, intent, and output.\n2. Compare classification, extraction, translation, summarization, question answering, and generation.\n3. Explain ambiguity, context dependence, and linguistic variation.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Map a customer-support chatbot pipeline into intent recognition and response generation.\n- Compare named-entity recognition with free-form text generation.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- NLU and NLG are useful functional distinctions, not perfectly isolated modules in every architecture.\n- A fluent output does not prove that the system interpreted the user's meaning correctly.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nClassify ten language tasks as primarily understanding, generation, or mixed NLP tasks. For each, state the input and expected output.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-text-preprocessing-and-normalization",
      "title": "Text Preprocessing and Normalization",
      "subtitle": "Prepare raw text for consistent downstream processing.",
      "category": "Language Processing",
      "difficulty": "Foundation",
      "definition": "Text preprocessing transforms raw text into a representation suitable for analysis or model input; normalization applies conventions that reduce irrelevant variation while preserving task-relevant information.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Explain Unicode, casing, whitespace, punctuation, token boundaries, and normalization choices.",
        "Compare preprocessing needs for search, classical ML, and modern pretrained language models.",
        "Understand why excessive normalization can remove useful information."
      ],
      "keywords": [
        "text preprocessing and normalization",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Text Preprocessing and Normalization\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Explain Unicode, casing, whitespace, punctuation, token boundaries, and normalization choices.\n- Compare preprocessing needs for search, classical ML, and modern pretrained language models.\n- Understand why excessive normalization can remove useful information.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain Unicode, casing, whitespace, punctuation, token boundaries, and normalization choices.\n2. Compare preprocessing needs for search, classical ML, and modern pretrained language models.\n3. Understand why excessive normalization can remove useful information.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Normalize two versions of the same text with different casing and punctuation.\n- Prepare a short log message for keyword analysis while preserving timestamps and identifiers.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- One preprocessing recipe is not appropriate for every NLP task.\n- Removing punctuation, casing, or symbols can destroy information such as code syntax or sentiment cues.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate two preprocessing pipelines for the same text: one for classical bag-of-words classification and one for a pretrained transformer. Explain the differences.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-stemming-lemmatization-and-stop-words",
      "title": "Stemming, Lemmatization, and Stop Words",
      "subtitle": "Understand common linguistic preprocessing operations.",
      "category": "Language Processing",
      "difficulty": "Intermediate",
      "definition": "Stemming reduces words using heuristic truncation, Lemmatization maps inflected forms to dictionary lemmas, and Stop Words are frequent terms sometimes removed in selected NLP workflows.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Compare stemming with linguistically informed lemmatization.",
        "Explain stop-word lists and why frequency alone does not determine usefulness.",
        "Discuss language-specific morphology and context."
      ],
      "keywords": [
        "stemming, lemmatization, and stop words",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Stemming, Lemmatization, and Stop Words\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Compare stemming with linguistically informed lemmatization.\n- Explain stop-word lists and why frequency alone does not determine usefulness.\n- Discuss language-specific morphology and context.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare stemming with linguistically informed lemmatization.\n2. Explain stop-word lists and why frequency alone does not determine usefulness.\n3. Discuss language-specific morphology and context.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare running, runs, and ran under a stemmer and a lemmatizer.\n- Show how removing “not” can reverse the meaning of a sentence.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Stemming can produce non-dictionary fragments.\n- Removing all frequent words can harm sentiment, search, and contextual meaning.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nAnalyze a small set of English and Arabic word forms. Explain where stemming, lemmatization, and stop-word removal would help or harm.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-n-grams-bag-of-words-and-tf-idf",
      "title": "N-grams, Bag of Words, and TF-IDF",
      "subtitle": "Represent text using word counts and weighted terms.",
      "category": "Language Processing",
      "difficulty": "Intermediate",
      "definition": "N-grams capture sequences of adjacent tokens; Bag of Words represents a document by token counts without word order, and TF-IDF weights terms according to their document frequency across a corpus.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Define unigram, bigram, n-gram, vocabulary, sparse vector, term frequency, and inverse document frequency.",
        "Build and interpret Bag-of-Words and TF-IDF vectors.",
        "Explain loss of word order and sensitivity to vocabulary choices."
      ],
      "keywords": [
        "n-grams, bag of words, and tf-idf",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"N-grams, Bag of Words, and TF-IDF\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Define unigram, bigram, n-gram, vocabulary, sparse vector, term frequency, and inverse document frequency.\n- Build and interpret Bag-of-Words and TF-IDF vectors.\n- Explain loss of word order and sensitivity to vocabulary choices.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define unigram, bigram, n-gram, vocabulary, sparse vector, term frequency, and inverse document frequency.\n2. Build and interpret Bag-of-Words and TF-IDF vectors.\n3. Explain loss of word order and sensitivity to vocabulary choices.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Vectorize three short messages with unigram and bigram counts.\n- Compare the TF-IDF weight of a common term and a rare term across documents.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Bag of Words does not preserve full grammar or word order.\n- A rare term is not automatically important or meaningful.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nBuild a tiny document-term matrix and calculate simplified TF-IDF weights. Then explain one important phrase-level distinction captured by bigrams.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-word-embeddings-word2vec-and-glove",
      "title": "Word Embeddings, Word2Vec, and GloVe",
      "subtitle": "Represent words as dense vectors that encode learned relationships.",
      "category": "Language Processing",
      "difficulty": "Intermediate",
      "definition": "Word Embeddings map tokens or words to dense numerical vectors; Word2Vec and GloVe are influential methods for learning word representations from patterns of word co-occurrence.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Explain sparse one-hot representations versus dense embeddings.",
        "Describe Word2Vec skip-gram and CBOW objectives at a conceptual level.",
        "Explain GloVe's use of global co-occurrence statistics and limits of static word vectors."
      ],
      "keywords": [
        "word embeddings, word2vec, and glove",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Word Embeddings, Word2Vec, and GloVe\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Explain sparse one-hot representations versus dense embeddings.\n- Describe Word2Vec skip-gram and CBOW objectives at a conceptual level.\n- Explain GloVe's use of global co-occurrence statistics and limits of static word vectors.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain sparse one-hot representations versus dense embeddings.\n2. Describe Word2Vec skip-gram and CBOW objectives at a conceptual level.\n3. Explain GloVe's use of global co-occurrence statistics and limits of static word vectors.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Use a two-dimensional toy embedding plot to explain semantic neighborhoods.\n- Explain why static embeddings give one vector to a word even when its meaning changes by context.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Nearby vectors reflect patterns in training data and are not guaranteed definitions or causal relations.\n- Static embeddings do not automatically resolve context-dependent word meanings.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a conceptual embedding map for ambiguous words and explain how contextual embeddings differ from Word2Vec or GloVe.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-language-models-and-transformer-architecture",
      "title": "Language Models and Transformer Architecture",
      "subtitle": "Understand the task of predicting or representing language and the transformer design.",
      "category": "Language Processing",
      "difficulty": "Intermediate",
      "definition": "A Language Model assigns probabilities to token sequences or predicts tokens based on context; the Transformer is a neural architecture that uses attention mechanisms rather than recurrence as its central sequence-mixing operation.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Define token sequence, conditional probability, next-token prediction, and language-model objective.",
        "Explain the high-level roles of embeddings, attention blocks, feed-forward layers, and normalization.",
        "Compare transformer processing with recurrent sequence processing."
      ],
      "keywords": [
        "language models and transformer architecture",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Language Models and Transformer Architecture\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Define token sequence, conditional probability, next-token prediction, and language-model objective.\n- Explain the high-level roles of embeddings, attention blocks, feed-forward layers, and normalization.\n- Compare transformer processing with recurrent sequence processing.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define token sequence, conditional probability, next-token prediction, and language-model objective.\n2. Explain the high-level roles of embeddings, attention blocks, feed-forward layers, and normalization.\n3. Compare transformer processing with recurrent sequence processing.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Predict the next token distribution for a short sentence fragment conceptually.\n- Trace tokens through embeddings, a transformer block, and an output head.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A language model predicts token patterns; fluent text does not guarantee factual truth.\n- Transformers are not simply lookup tables or databases of copied sentences.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw a simplified transformer language-model pipeline and explain the role of each component from token IDs to output scores.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-transformer-encoders-decoders-and-positional-information",
      "title": "Transformer Encoders, Decoders, and Positional Information",
      "subtitle": "Compare common transformer block arrangements.",
      "category": "Language Processing",
      "difficulty": "Intermediate",
      "definition": "Transformer encoders build contextual representations from input tokens, while decoders support autoregressive generation; positional information lets attention-based models account for token order.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Compare encoder-only, decoder-only, and encoder-decoder arrangements.",
        "Explain bidirectional contextual representation versus causal next-token generation.",
        "Describe positional embeddings or encodings and their purpose."
      ],
      "keywords": [
        "transformer encoders, decoders, and positional information",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Transformer Encoders, Decoders, and Positional Information\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Compare encoder-only, decoder-only, and encoder-decoder arrangements.\n- Explain bidirectional contextual representation versus causal next-token generation.\n- Describe positional embeddings or encodings and their purpose.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare encoder-only, decoder-only, and encoder-decoder arrangements.\n2. Explain bidirectional contextual representation versus causal next-token generation.\n3. Describe positional embeddings or encodings and their purpose.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare a masked-language understanding task with autoregressive text generation.\n- Trace how positional information distinguishes “dog bites person” from “person bites dog”.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Not every transformer has both an encoder and decoder stack.\n- Attention alone does not inherently know the original order of tokens.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a comparison table for encoder-only, decoder-only, and encoder-decoder architectures with task examples and information flow.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-attention-self-attention-multi-head-attention-and-q-k-v",
      "title": "Attention, Self-Attention, Multi-Head Attention, and Q/K/V",
      "subtitle": "Understand how tokens exchange contextual information.",
      "category": "Language Processing",
      "difficulty": "Advanced",
      "definition": "Attention computes weighted combinations of value representations using compatibility scores; Self-Attention relates tokens within a sequence, and Multi-Head Attention performs several learned attention operations in parallel.",
      "position": "This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.",
      "prerequisites": [
        "Module 03 ML fundamentals",
        "Basic understanding of vectors and matrices"
      ],
      "relatedConcepts": [
        "Natural Language Processing",
        "Tokenization",
        "TF-IDF",
        "Word Embeddings",
        "Language Models",
        "Transformers",
        "Attention"
      ],
      "objectives": [
        "Explain Query, Key, and Value vectors and scaled dot-product attention.",
        "Trace attention scores, softmax weights, and the weighted value sum.",
        "Explain heads, masking, residual connections, and the role of positional information.",
        "Describe attention masks for padding and causal constraints."
      ],
      "keywords": [
        "attention, self-attention, multi-head attention, and q/k/v",
        "NLP NLU NLG",
        "stemming lemmatization stop words",
        "N-grams Bag of Words TF-IDF",
        "Word2Vec GloVe",
        "Transformer encoder decoder",
        "Q K V self attention"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Attention, Self-Attention, Multi-Head Attention, and Q/K/V\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 06 — Natural Language Processing & Transformers. This module connects general deep-learning concepts to text-specific representations and the transformer architecture used by modern language models.\nAssume general computer literacy and these prerequisites: Module 03 ML fundamentals, Basic understanding of vectors and matrices. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Natural Language Processing, Tokenization, TF-IDF, Word Embeddings, Language Models, Transformers, Attention.\n\nLEARNING OUTCOMES\n- Explain Query, Key, and Value vectors and scaled dot-product attention.\n- Trace attention scores, softmax weights, and the weighted value sum.\n- Explain heads, masking, residual connections, and the role of positional information.\n- Describe attention masks for padding and causal constraints.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain Query, Key, and Value vectors and scaled dot-product attention.\n2. Trace attention scores, softmax weights, and the weighted value sum.\n3. Explain heads, masking, residual connections, and the role of positional information.\n4. Describe attention masks for padding and causal constraints.\n5. Explain how attention masks support training objectives such as causal next-token prediction and masked-token learning, and how the training objective differs from the attention operation itself.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Calculate a tiny attention score matrix and normalized weights.\n- Compare bidirectional and causal masks on a four-token sequence.\n- Compare a causal language-model training example with a masked-language-model example and identify which token positions are visible and predicted.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Attention weights should not automatically be treated as a faithful explanation of model reasoning.\n- A causal mask controls which positions can be used; it is not a general-purpose safety filter.\n- An attention mask controls information flow; the training objective defines what the model is optimized to predict.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWork through a simplified three-token self-attention calculation with small vectors. Label Q, K, V, score, mask, softmax, and output. Include a concise explanation of transformer training using a small token sequence and a mask diagram.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Advanced. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
