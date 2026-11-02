/* CipherNeuron curriculum data — Module 02. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-02-mathematics-statistics-data",
  "number": "02",
  "partId": "part-01",
  "title": "Mathematics, Statistics & Data Fundamentals",
  "subtitle": "Build the practical quantitative and data foundations used throughout AI.",
  "description": "Introduces accessible mathematics, probability, statistics, and data preparation concepts that explain how AI systems represent and learn from information.",
  "difficulty": "Foundation",
  "estimatedTime": "4–5 hours",
  "prerequisites": [
    "Basic arithmetic and algebra",
    "General computer literacy"
  ],
  "objectives": [
    "Read basic vectors, matrices, probabilities, and statistical summaries.",
    "Interpret distributions, derivatives, and gradients at an intuitive level.",
    "Prepare datasets and distinguish cleaning, scaling, and feature engineering.",
    "Recognize data quality, bias, and leakage risks."
  ],
  "relatedModules": [
    "module-03-machine-learning-fundamentals",
    "module-05-deep-learning-neural-networks",
    "module-12-building-training-models"
  ],
  "topics": [
    {
      "id": "topic-practical-mathematical-foundations-for-ai",
      "title": "Practical Mathematical Foundations for AI",
      "subtitle": "The arithmetic, notation, and functions that appear in AI workflows.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "AI mathematics uses quantities, functions, and relationships to represent data, model predictions, errors, and optimization; practical understanding starts with algebra, functions, and reading mathematical notation.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Review variables, constants, equations, functions, coordinate plots, and summation notation.",
        "Explain why models map input values to outputs and why a loss function measures error.",
        "Interpret formulas by identifying inputs, parameters, operations, and outputs."
      ],
      "keywords": [
        "practical mathematical foundations for ai",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Practical Mathematical Foundations for AI\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Review variables, constants, equations, functions, coordinate plots, and summation notation.\n- Explain why models map input values to outputs and why a loss function measures error.\n- Interpret formulas by identifying inputs, parameters, operations, and outputs.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Review variables, constants, equations, functions, coordinate plots, and summation notation.\n2. Explain why models map input values to outputs and why a loss function measures error.\n3. Interpret formulas by identifying inputs, parameters, operations, and outputs.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Evaluate a linear function y = wx + b for a few inputs.\n- Calculate a simple average prediction error for a tiny dataset.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- You do not need advanced calculus to begin understanding most practical ML workflows.\n- A formula is a compact description of a relationship, not a substitute for understanding its assumptions.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWork through a small set of algebra and function exercises using input-output tables. Explain each symbol in plain language and connect one function to a prediction task.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-scalars-vectors-matrices-and-linear-algebra",
      "title": "Scalars, Vectors, Matrices, and Linear Algebra",
      "subtitle": "Understand the data structures behind many model operations.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "A scalar is one value, a vector is an ordered collection of values, and a matrix is a rectangular arrangement of values; Linear Algebra studies their properties and operations.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Distinguish scalar, vector, matrix, dimensions, shape, row, column, and transpose.",
        "Explain vector addition, scalar multiplication, dot products, and matrix multiplication conceptually.",
        "Relate vectors and matrices to samples, features, weights, and batches."
      ],
      "keywords": [
        "scalars, vectors, matrices, and linear algebra",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Scalars, Vectors, Matrices, and Linear Algebra\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Distinguish scalar, vector, matrix, dimensions, shape, row, column, and transpose.\n- Explain vector addition, scalar multiplication, dot products, and matrix multiplication conceptually.\n- Relate vectors and matrices to samples, features, weights, and batches.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish scalar, vector, matrix, dimensions, shape, row, column, and transpose.\n2. Explain vector addition, scalar multiplication, dot products, and matrix multiplication conceptually.\n3. Relate vectors and matrices to samples, features, weights, and batches.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Represent one customer record as a feature vector and several records as a feature matrix.\n- Calculate a short dot product to understand a linear score.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A vector is not simply any unstructured list; order and dimensions carry meaning.\n- Matrix multiplication is dimension-sensitive and not interchangeable with element-wise multiplication.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nRepresent a tiny tabular dataset as a matrix, identify its shape, and manually compute one weighted score with a dot product.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-probability-and-probability-distributions",
      "title": "Probability and Probability Distributions",
      "subtitle": "Reason about uncertainty and possible outcomes.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "Probability quantifies uncertainty about events, while a probability distribution describes how probability is assigned across possible values or outcomes.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Define sample space, event, probability, conditional probability, independence, and Bayes’ rule intuitively.",
        "Compare discrete and continuous random variables and their distributions.",
        "Interpret probability mass, density, cumulative probability, and expected value without overloading notation."
      ],
      "keywords": [
        "probability and probability distributions",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Probability and Probability Distributions\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Define sample space, event, probability, conditional probability, independence, and Bayes’ rule intuitively.\n- Compare discrete and continuous random variables and their distributions.\n- Interpret probability mass, density, cumulative probability, and expected value without overloading notation.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define sample space, event, probability, conditional probability, independence, and Bayes’ rule intuitively.\n2. Compare discrete and continuous random variables and their distributions.\n3. Interpret probability mass, density, cumulative probability, and expected value without overloading notation.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Calculate probabilities from a small bag-of-colored-balls example.\n- Interpret a simple Bernoulli or normal distribution and explain what its parameters mean.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A probability score is not automatically a calibrated guarantee.\n- A normal distribution is a useful model in some settings, not a universal shape for real data.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nSolve a few conditional-probability examples and sketch a discrete and continuous distribution. State the assumptions behind each result.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-descriptive-statistics-mean-median-mode-variance-and-standard-deviation",
      "title": "Descriptive Statistics: Mean, Median, Mode, Variance, and Standard Deviation",
      "subtitle": "Summarize the center and spread of a dataset.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "Descriptive statistics summarize observed data; measures of central tendency describe typical values, while measures of dispersion describe how values vary.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Calculate and interpret mean, median, and mode.",
        "Calculate variance and standard deviation and explain their relation to spread.",
        "Explain sensitivity to outliers and why robust summaries can be useful."
      ],
      "keywords": [
        "descriptive statistics: mean, median, mode, variance, and standard deviation",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Descriptive Statistics: Mean, Median, Mode, Variance, and Standard Deviation\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Calculate and interpret mean, median, and mode.\n- Calculate variance and standard deviation and explain their relation to spread.\n- Explain sensitivity to outliers and why robust summaries can be useful.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Calculate and interpret mean, median, and mode.\n2. Calculate variance and standard deviation and explain their relation to spread.\n3. Explain sensitivity to outliers and why robust summaries can be useful.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare average response times with and without one extreme delay.\n- Use median and interquartile range to summarize skewed values.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- The mean is not always the best description of a typical value.\n- Standard deviation is expressed in the same units as the original variable; variance is in squared units.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCompute all five measures for a small dataset, then add an outlier and describe which summaries change most.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-derivatives-gradients-and-basic-calculus-for-ai",
      "title": "Derivatives, Gradients, and Basic Calculus for AI",
      "subtitle": "Understand change and the direction used by optimization.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "A derivative measures how a function changes with respect to an input, while a gradient collects partial derivatives for a function with multiple inputs.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Explain slope as rate of change and connect it to a derivative.",
        "Interpret partial derivatives and gradients for multi-parameter functions.",
        "Connect gradients to minimizing a model loss, without requiring advanced proofs."
      ],
      "keywords": [
        "derivatives, gradients, and basic calculus for ai",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Derivatives, Gradients, and Basic Calculus for AI\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Explain slope as rate of change and connect it to a derivative.\n- Interpret partial derivatives and gradients for multi-parameter functions.\n- Connect gradients to minimizing a model loss, without requiring advanced proofs.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain slope as rate of change and connect it to a derivative.\n2. Interpret partial derivatives and gradients for multi-parameter functions.\n3. Connect gradients to minimizing a model loss, without requiring advanced proofs.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Estimate a slope from a plotted curve and compare it with a simple derivative.\n- Interpret a gradient step as a parameter update intended to reduce a loss value.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A gradient points toward steepest increase locally; gradient descent moves in the opposite direction.\n- A small gradient does not always mean a model has reached a useful global minimum.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nUse a one-variable quadratic loss to calculate a derivative and simulate a few gradient-descent updates by hand.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-data-types-collection-and-data-quality",
      "title": "Data Types, Collection, and Data Quality",
      "subtitle": "Understand what enters a dataset and how trustworthy it is.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "Data types describe the form and meaning of recorded values, while data quality concerns whether data is accurate, complete, consistent, relevant, and fit for the intended task.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Distinguish numerical, categorical, ordinal, text, image, time-series, and structured/unstructured data.",
        "Explain collection methods, labels, provenance, sampling, and consent.",
        "Evaluate completeness, validity, consistency, timeliness, duplicates, and representativeness."
      ],
      "keywords": [
        "data types, collection, and data quality",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Data Types, Collection, and Data Quality\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Distinguish numerical, categorical, ordinal, text, image, time-series, and structured/unstructured data.\n- Explain collection methods, labels, provenance, sampling, and consent.\n- Evaluate completeness, validity, consistency, timeliness, duplicates, and representativeness.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish numerical, categorical, ordinal, text, image, time-series, and structured/unstructured data.\n2. Explain collection methods, labels, provenance, sampling, and consent.\n3. Evaluate completeness, validity, consistency, timeliness, duplicates, and representativeness.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Inspect a dataset containing timestamps, categories, missing values, and duplicated records.\n- Compare convenience sampling with a sampling plan designed to represent the target population.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A column stored as a number is not necessarily a meaningful continuous measurement.\n- A large dataset can still be biased, outdated, duplicated, or poorly labeled.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a data dictionary for a small dataset and assess each field for type, source, quality checks, and potential collection bias.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-data-cleaning-and-preprocessing",
      "title": "Data Cleaning and Preprocessing",
      "subtitle": "Turn raw observations into a consistent dataset for analysis or training.",
      "category": "Math & Data Foundations",
      "difficulty": "Foundation",
      "definition": "Data cleaning identifies and handles invalid, duplicated, missing, or inconsistent values; preprocessing transforms data into a representation suitable for a downstream analysis or model.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Explain missing-value handling, duplicate removal, outlier review, type conversion, encoding, and text cleanup.",
        "Distinguish data cleaning from broader preprocessing.",
        "Understand why transformations must be fitted on training data and applied consistently to held-out data."
      ],
      "keywords": [
        "data cleaning and preprocessing",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Data Cleaning and Preprocessing\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Explain missing-value handling, duplicate removal, outlier review, type conversion, encoding, and text cleanup.\n- Distinguish data cleaning from broader preprocessing.\n- Understand why transformations must be fitted on training data and applied consistently to held-out data.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain missing-value handling, duplicate removal, outlier review, type conversion, encoding, and text cleanup.\n2. Distinguish data cleaning from broader preprocessing.\n3. Understand why transformations must be fitted on training data and applied consistently to held-out data.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Clean a toy CSV with inconsistent categories and missing numeric values.\n- Compare imputation strategies and explain what information each may distort.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Deleting every incomplete row can create selection bias and waste useful data.\n- Preprocessing the full dataset before splitting can leak information from test data.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWrite a reproducible cleaning plan for a small tabular dataset. Document each transformation, the reason, and any information it could remove or distort.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-normalization-standardization-and-feature-engineering",
      "title": "Normalization, Standardization, and Feature Engineering",
      "subtitle": "Transform raw fields into useful model inputs.",
      "category": "Math & Data Foundations",
      "difficulty": "Intermediate",
      "definition": "Normalization and standardization are feature-scaling methods, while Feature Engineering creates or transforms input variables to represent task-relevant information more effectively.",
      "position": "This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.",
      "prerequisites": [
        "Basic arithmetic and algebra",
        "General computer literacy"
      ],
      "relatedConcepts": [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus",
        "Data Preprocessing",
        "Feature Engineering"
      ],
      "objectives": [
        "Compare min-max normalization with z-score standardization and identify their assumptions.",
        "Explain when scaling matters, including distance-based and gradient-based algorithms.",
        "Define feature creation, encoding, selection, and leakage-aware fitting of transformations.",
        "Explain sampling bias, measurement bias, label bias, representation gaps, target leakage, temporal leakage, and leakage through preprocessing or identifiers."
      ],
      "keywords": [
        "normalization, standardization, and feature engineering",
        "scalars vectors matrices",
        "probability distributions",
        "mean median mode",
        "variance standard deviation",
        "derivatives gradients",
        "data cleaning scaling bias leakage"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Normalization, Standardization, and Feature Engineering\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 02 — Mathematics, Statistics & Data Fundamentals. This module provides the quantitative language and data preparation practices that make later model-training concepts understandable.\nAssume general computer literacy and these prerequisites: Basic arithmetic and algebra, General computer literacy. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Algebra, Probability, Statistics, Calculus, Data Preprocessing, Feature Engineering.\n\nLEARNING OUTCOMES\n- Compare min-max normalization with z-score standardization and identify their assumptions.\n- Explain when scaling matters, including distance-based and gradient-based algorithms.\n- Define feature creation, encoding, selection, and leakage-aware fitting of transformations.\n- Explain sampling bias, measurement bias, label bias, representation gaps, target leakage, temporal leakage, and leakage through preprocessing or identifiers.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare min-max normalization with z-score standardization and identify their assumptions.\n2. Explain when scaling matters, including distance-based and gradient-based algorithms.\n3. Define feature creation, encoding, selection, and leakage-aware fitting of transformations.\n4. Explain sampling bias, measurement bias, label bias, representation gaps, target leakage, temporal leakage, and leakage through preprocessing or identifiers.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Scale two features measured in dollars and years before a distance-based model.\n- Create a date-derived feature such as day-of-week from a timestamp.\n- Inspect a dataset where one population is underrepresented and a feature accidentally reveals the target; explain the resulting risks.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Scaling does not automatically improve every model or repair poor data.\n- A feature that contains the target or future information can make evaluation misleading.\n- A high validation score can be an artifact of leakage or biased sampling rather than genuine generalization.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nPrepare a short feature pipeline for a tabular classification problem. Split first, fit transformations on training data, and explain the treatment of held-out data.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
