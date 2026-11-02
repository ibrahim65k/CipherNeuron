/* CipherNeuron curriculum data — Module 03. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-03-machine-learning-fundamentals",
  "number": "03",
  "partId": "part-01",
  "title": "Machine Learning Fundamentals",
  "subtitle": "Understand how models learn from data and how their performance is evaluated.",
  "description": "Covers learning paradigms, datasets, model training, generalization, and evaluation concepts that form the foundation for studying individual algorithms.",
  "difficulty": "Foundation",
  "estimatedTime": "5–6 hours",
  "prerequisites": [
    "Module 02 mathematics and data fundamentals",
    "Basic familiarity with tables and variables"
  ],
  "objectives": [
    "Describe the end-to-end Machine Learning workflow.",
    "Differentiate major learning paradigms and task types.",
    "Explain model parameters, training, inference, and generalization.",
    "Choose and interpret suitable evaluation methods and metrics."
  ],
  "relatedModules": [
    "module-02-mathematics-statistics-data",
    "module-04-machine-learning-algorithms",
    "module-12-building-training-models"
  ],
  "topics": [
    {
      "id": "topic-what-is-machine-learning-and-how-does-it-work",
      "title": "What Is Machine Learning and How Does It Work?",
      "subtitle": "A complete view of learning patterns from examples.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "Machine Learning (ML) is an approach in which an algorithm uses data to fit a model that captures patterns useful for making predictions, decisions, or discovering structure.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Distinguish data, algorithm, fitted model, prediction, and learning objective.",
        "Walk through data preparation, training, validation, evaluation, deployment, and monitoring.",
        "Compare learning from examples with explicitly programmed rules."
      ],
      "keywords": [
        "what is machine learning and how does it work?",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"What Is Machine Learning and How Does It Work?\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Distinguish data, algorithm, fitted model, prediction, and learning objective.\n- Walk through data preparation, training, validation, evaluation, deployment, and monitoring.\n- Compare learning from examples with explicitly programmed rules.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Distinguish data, algorithm, fitted model, prediction, and learning objective.\n2. Walk through data preparation, training, validation, evaluation, deployment, and monitoring.\n3. Compare learning from examples with explicitly programmed rules.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Train a toy model to estimate house prices from area and location features.\n- Describe how a spam classifier changes when trained on labeled examples.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- An algorithm and a trained model are not the same thing.\n- Machine Learning does not guarantee causation, fairness, or reliable performance outside the training distribution.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDraw an end-to-end ML lifecycle for a simple classification task. Identify what is learned during training and what happens later during inference.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-machine-learning-paradigms",
      "title": "Machine Learning Paradigms",
      "subtitle": "Compare supervised, unsupervised, semi-supervised, self-supervised, and reinforcement learning.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "A Machine Learning paradigm describes the learning setup and the information or feedback available to a learner during training.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Define Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, Self-Supervised Learning, and Reinforcement Learning.",
        "Compare labels, unlabeled data, generated training targets, rewards, actions, and environments.",
        "Recognize when paradigms can be combined in a single system."
      ],
      "keywords": [
        "machine learning paradigms",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Machine Learning Paradigms\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Define Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, Self-Supervised Learning, and Reinforcement Learning.\n- Compare labels, unlabeled data, generated training targets, rewards, actions, and environments.\n- Recognize when paradigms can be combined in a single system.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, Self-Supervised Learning, and Reinforcement Learning.\n2. Compare labels, unlabeled data, generated training targets, rewards, actions, and environments.\n3. Recognize when paradigms can be combined in a single system.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Classify an email using labeled spam examples versus grouping unlabeled network records.\n- Explain next-token prediction as a self-supervised training objective.\n- Describe an agent learning a policy from reward feedback in a toy environment.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Unsupervised learning does not mean that no assumptions or objectives are used.\n- Self-supervised learning still uses targets, but they are derived from the data itself.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nFor five scenarios, identify the learning paradigm and justify your answer by naming the supervision signal and the training feedback.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-datasets-features-labels-and-samples",
      "title": "Datasets, Features, Labels, and Samples",
      "subtitle": "Understand the basic units that make up a learning problem.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "A dataset is a collection of observations; a sample is one observation, features are its input variables, and a label is the target value supplied for supervised learning.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Define sample, instance, observation, feature, feature vector, label, target, and dataset.",
        "Distinguish feature tables from targets and metadata.",
        "Explain data provenance, class balance, label quality, and representative sampling."
      ],
      "keywords": [
        "datasets, features, labels, and samples",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Datasets, Features, Labels, and Samples\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Define sample, instance, observation, feature, feature vector, label, target, and dataset.\n- Distinguish feature tables from targets and metadata.\n- Explain data provenance, class balance, label quality, and representative sampling.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define sample, instance, observation, feature, feature vector, label, target, and dataset.\n2. Distinguish feature tables from targets and metadata.\n3. Explain data provenance, class balance, label quality, and representative sampling.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Inspect a customer-churn table and identify sample, feature columns, and target label.\n- Convert a security-event record into a feature vector while excluding identifiers that should not drive learning.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A label is not always available or objectively unambiguous.\n- An identifier may allow a model to memorize records rather than learn generalizable patterns.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nAnnotate a toy dataset schema, identify the prediction target, and propose checks for leakage, missing labels, and representativeness.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-classification-and-regression",
      "title": "Classification and Regression",
      "subtitle": "Distinguish categorical prediction from numeric prediction.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "Classification predicts a category or class, while Regression predicts a numerical quantity; both are common supervised learning task types.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Define binary, multiclass, and multilabel classification.",
        "Explain continuous versus discrete targets and numeric regression outputs.",
        "Relate outputs, loss functions, thresholds, and evaluation metrics to the task."
      ],
      "keywords": [
        "classification and regression",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Classification and Regression\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Define binary, multiclass, and multilabel classification.\n- Explain continuous versus discrete targets and numeric regression outputs.\n- Relate outputs, loss functions, thresholds, and evaluation metrics to the task.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define binary, multiclass, and multilabel classification.\n2. Explain continuous versus discrete targets and numeric regression outputs.\n3. Relate outputs, loss functions, thresholds, and evaluation metrics to the task.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Predict whether a transaction is fraudulent as a classification task.\n- Estimate energy consumption for the next hour as a regression task.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A numeric class ID does not make a classification task a regression problem.\n- A regression prediction can be uncertain or poorly calibrated even when it is a number.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nTurn six business or security scenarios into formal ML task definitions. State the target, possible output, and one suitable metric for each.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-clustering-and-unsupervised-learning-tasks",
      "title": "Clustering and Unsupervised Learning Tasks",
      "subtitle": "Discover structure when target labels are not supplied.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "Clustering groups observations according to a similarity or distance criterion, while Unsupervised Learning covers broader methods that identify structure in unlabeled data.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Explain clustering, similarity, distance, cluster assignment, and cluster interpretation.",
        "Distinguish clustering from classification and dimensionality reduction.",
        "Discuss scaling, chosen distance functions, and the need to validate usefulness."
      ],
      "keywords": [
        "clustering and unsupervised learning tasks",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Clustering and Unsupervised Learning Tasks\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Explain clustering, similarity, distance, cluster assignment, and cluster interpretation.\n- Distinguish clustering from classification and dimensionality reduction.\n- Discuss scaling, chosen distance functions, and the need to validate usefulness.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain clustering, similarity, distance, cluster assignment, and cluster interpretation.\n2. Distinguish clustering from classification and dimensionality reduction.\n3. Discuss scaling, chosen distance functions, and the need to validate usefulness.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Group network devices based on synthetic traffic-summary features.\n- Cluster customer records and then profile the resulting groups without pretending the groups are known ground-truth classes.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A cluster is not automatically a meaningful real-world category.\n- Different algorithms or feature scales can produce different groupings.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nRun or simulate a small clustering exercise, inspect the groups, and write down what the clustering does and does not establish.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-training-validation-test-splits-and-cross-validation",
      "title": "Training, Validation, Test Splits, and Cross-Validation",
      "subtitle": "Separate model fitting, model selection, and final evaluation.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "A training set is used to fit model parameters, a validation set supports model and hyperparameter selection, and a test set estimates final performance on held-out data.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Explain the purpose of train, validation, and test subsets.",
        "Define data leakage and why the test set should not guide repeated tuning.",
        "Explain k-fold cross-validation and when grouped or time-based splitting is required."
      ],
      "keywords": [
        "training, validation, test splits, and cross-validation",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Training, Validation, Test Splits, and Cross-Validation\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Explain the purpose of train, validation, and test subsets.\n- Define data leakage and why the test set should not guide repeated tuning.\n- Explain k-fold cross-validation and when grouped or time-based splitting is required.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain the purpose of train, validation, and test subsets.\n2. Define data leakage and why the test set should not guide repeated tuning.\n3. Explain k-fold cross-validation and when grouped or time-based splitting is required.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Split a small labeled dataset into training, validation, and test portions.\n- Use time-ordered data to explain why random splitting can create unrealistic evaluation.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A random split is not appropriate for every dataset.\n- Cross-validation cannot fix a dataset that is unrepresentative or contaminated by leakage.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nDesign a splitting strategy for tabular, grouped, and time-series examples. Explain which observations must stay together and why.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-models-parameters-hyperparameters-training-and-inference",
      "title": "Models, Parameters, Hyperparameters, Training, and Inference",
      "subtitle": "Understand what is learned and what is configured.",
      "category": "Machine Learning",
      "difficulty": "Foundation",
      "definition": "A model is a fitted mathematical or computational mapping; parameters are learned from data, hyperparameters configure the learning process, training fits the model, and inference applies it to new inputs.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Differentiate algorithm, model, parameter, hyperparameter, checkpoint, training, and inference.",
        "Explain how a loss or objective is used during training and how prediction differs at inference time.",
        "Identify examples of learned parameters and human-selected configuration values."
      ],
      "keywords": [
        "models, parameters, hyperparameters, training, and inference",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Models, Parameters, Hyperparameters, Training, and Inference\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Differentiate algorithm, model, parameter, hyperparameter, checkpoint, training, and inference.\n- Explain how a loss or objective is used during training and how prediction differs at inference time.\n- Identify examples of learned parameters and human-selected configuration values.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Differentiate algorithm, model, parameter, hyperparameter, checkpoint, training, and inference.\n2. Explain how a loss or objective is used during training and how prediction differs at inference time.\n3. Identify examples of learned parameters and human-selected configuration values.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Contrast learned regression coefficients with a manually selected regularization strength.\n- Trace one input through a trained classifier during inference.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Training does not usually happen every time a user asks for a prediction.\n- A model parameter is not the same as a hyperparameter.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a labelled diagram separating training-time components from inference-time components for a simple ML service.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-overfitting-underfitting-generalization-and-bias-variance",
      "title": "Overfitting, Underfitting, Generalization, and Bias–Variance",
      "subtitle": "Understand why training success may not transfer to new data.",
      "category": "Machine Learning",
      "difficulty": "Intermediate",
      "definition": "Overfitting occurs when a model captures training-specific details that do not generalize; underfitting occurs when it fails to capture important patterns, and generalization is performance on unseen data.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Define training error, validation error, overfitting, underfitting, and generalization.",
        "Explain the bias–variance trade-off as a framework for understanding model error.",
        "Identify symptoms and practical mitigation strategies."
      ],
      "keywords": [
        "overfitting, underfitting, generalization, and bias–variance",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Overfitting, Underfitting, Generalization, and Bias–Variance\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Define training error, validation error, overfitting, underfitting, and generalization.\n- Explain the bias–variance trade-off as a framework for understanding model error.\n- Identify symptoms and practical mitigation strategies.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define training error, validation error, overfitting, underfitting, and generalization.\n2. Explain the bias–variance trade-off as a framework for understanding model error.\n3. Identify symptoms and practical mitigation strategies.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare training and validation curves for an underfit, well-fit, and overfit model.\n- Explain why a highly complex decision boundary may memorize a tiny training set.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Low training error alone is not proof of a useful model.\n- The bias–variance trade-off is a helpful conceptual framework, not a complete explanation for every model failure.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nInterpret three fictional learning curves and propose a different next experiment for each: collect data, simplify the model, regularize, or improve features.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-machine-learning-evaluation-metrics-and-confusion-matrix",
      "title": "Machine Learning Evaluation Metrics and Confusion Matrix",
      "subtitle": "Measure errors in a way that matches the task and its consequences.",
      "category": "Machine Learning",
      "difficulty": "Intermediate",
      "definition": "Evaluation metrics summarize how model predictions compare with reference outcomes; a confusion matrix counts true and false positive and negative predictions for a classification task.",
      "position": "This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Basic familiarity with tables and variables"
      ],
      "relatedConcepts": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Features and Labels",
        "Training and Inference",
        "Overfitting",
        "Evaluation Metrics"
      ],
      "objectives": [
        "Define TP, TN, FP, FN, accuracy, precision, recall, specificity, and F1-score.",
        "Explain class imbalance, thresholds, and the difference between ranking and calibrated probabilities.",
        "Introduce regression metrics such as MAE, MSE, RMSE, and R-squared with their caveats."
      ],
      "keywords": [
        "machine learning evaluation metrics and confusion matrix",
        "ML workflow",
        "learning paradigms",
        "classification regression clustering",
        "train validation test",
        "parameters hyperparameters",
        "generalization confusion matrix"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Machine Learning Evaluation Metrics and Confusion Matrix\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 03 — Machine Learning Fundamentals. This module introduces the shared workflow and vocabulary used by the algorithms in Module 04 and the hands-on model-building work in Part 02.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Basic familiarity with tables and variables. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Supervised Learning, Unsupervised Learning, Features and Labels, Training and Inference, Overfitting, Evaluation Metrics.\n\nLEARNING OUTCOMES\n- Define TP, TN, FP, FN, accuracy, precision, recall, specificity, and F1-score.\n- Explain class imbalance, thresholds, and the difference between ranking and calibrated probabilities.\n- Introduce regression metrics such as MAE, MSE, RMSE, and R-squared with their caveats.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define TP, TN, FP, FN, accuracy, precision, recall, specificity, and F1-score.\n2. Explain class imbalance, thresholds, and the difference between ranking and calibrated probabilities.\n3. Introduce regression metrics such as MAE, MSE, RMSE, and R-squared with their caveats.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Calculate precision and recall from a small security-alert confusion matrix.\n- Compare MAE and RMSE when a few prediction errors are unusually large.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Accuracy can be misleading when one class is rare.\n- No single metric is universally best; the cost of different errors matters.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nBuild a confusion matrix from ten hypothetical predictions, calculate key metrics, and recommend an operating threshold based on stated error costs.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
