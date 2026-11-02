/* CipherNeuron curriculum data — Module 04. */
window.AI_COURSE_MODULES = window.AI_COURSE_MODULES || [];

window.AI_COURSE_MODULES.push({
  "id": "module-04-machine-learning-algorithms",
  "number": "04",
  "partId": "part-01",
  "title": "Machine Learning Algorithms",
  "subtitle": "Explore the major algorithms used for prediction, grouping, and representation.",
  "description": "Explains the mechanics, assumptions, strengths, and trade-offs of widely used supervised, unsupervised, and ensemble algorithms.",
  "difficulty": "Intermediate",
  "estimatedTime": "5–7 hours",
  "prerequisites": [
    "Module 02 mathematics and data fundamentals",
    "Module 03 Machine Learning fundamentals"
  ],
  "objectives": [
    "Explain how common regression and classification algorithms make predictions.",
    "Compare tree, distance, margin, probabilistic, and clustering approaches.",
    "Understand dimensionality reduction and ensemble strategies.",
    "Select algorithms based on data, task, interpretability, and operational constraints."
  ],
  "relatedModules": [
    "module-03-machine-learning-fundamentals",
    "module-12-building-training-models"
  ],
  "topics": [
    {
      "id": "topic-linear-regression",
      "title": "Linear Regression",
      "subtitle": "Model a numeric target as a weighted combination of inputs.",
      "category": "ML Algorithms",
      "difficulty": "Foundation",
      "definition": "Linear Regression estimates a linear relationship between input features and a continuous target by fitting coefficients under a chosen loss objective.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain the prediction equation, coefficients, intercept, residuals, and least-squares objective.",
        "Interpret coefficients cautiously and discuss assumptions such as linearity and error structure.",
        "Introduce regularized variants conceptually without losing the basic model."
      ],
      "keywords": [
        "linear regression",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Linear Regression\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain the prediction equation, coefficients, intercept, residuals, and least-squares objective.\n- Interpret coefficients cautiously and discuss assumptions such as linearity and error structure.\n- Introduce regularized variants conceptually without losing the basic model.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain the prediction equation, coefficients, intercept, residuals, and least-squares objective.\n2. Interpret coefficients cautiously and discuss assumptions such as linearity and error structure.\n3. Introduce regularized variants conceptually without losing the basic model.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Fit a line to a tiny set of study-hours and score observations.\n- Interpret a coefficient for a standardized feature while holding other features fixed.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Association estimated by a coefficient does not prove causation.\n- A linear model can be useful even when its assumptions are approximate, but residual checks still matter.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCalculate predictions and residuals for a toy one-feature regression dataset. Explain what the intercept and slope mean and inspect the residual pattern.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-logistic-regression",
      "title": "Logistic Regression",
      "subtitle": "Use a linear score to estimate class probabilities.",
      "category": "ML Algorithms",
      "difficulty": "Foundation",
      "definition": "Logistic Regression is a classification algorithm that transforms a linear combination of features through a logistic function to model a probability, commonly for binary classification.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain linear score, sigmoid/logistic function, probability, threshold, and decision boundary.",
        "Describe maximum likelihood or log-loss at an intuitive level.",
        "Discuss multiclass extensions and coefficient interpretation."
      ],
      "keywords": [
        "logistic regression",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Logistic Regression\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain linear score, sigmoid/logistic function, probability, threshold, and decision boundary.\n- Describe maximum likelihood or log-loss at an intuitive level.\n- Discuss multiclass extensions and coefficient interpretation.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain linear score, sigmoid/logistic function, probability, threshold, and decision boundary.\n2. Describe maximum likelihood or log-loss at an intuitive level.\n3. Discuss multiclass extensions and coefficient interpretation.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Predict whether a synthetic login event is suspicious based on a small feature vector.\n- Show how changing the classification threshold affects false positives and false negatives.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Despite its name, Logistic Regression is commonly used for classification.\n- A probability estimate does not make the threshold choice objective or cost-free.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCompute sigmoid outputs for a few scores and show how one threshold converts probabilities into class labels.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Foundation. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-decision-trees",
      "title": "Decision Trees",
      "subtitle": "Understand recursive feature-based decisions.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "A Decision Tree predicts by recursively splitting observations according to feature tests, creating branches that lead to a prediction at a leaf.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Define root, node, branch, leaf, split criterion, depth, and pruning.",
        "Explain impurity measures such as Gini and entropy at a conceptual level.",
        "Discuss interpretability, instability, and overfitting."
      ],
      "keywords": [
        "decision trees",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Decision Trees\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Define root, node, branch, leaf, split criterion, depth, and pruning.\n- Explain impurity measures such as Gini and entropy at a conceptual level.\n- Discuss interpretability, instability, and overfitting.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Define root, node, branch, leaf, split criterion, depth, and pruning.\n2. Explain impurity measures such as Gini and entropy at a conceptual level.\n3. Discuss interpretability, instability, and overfitting.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Build a tiny tree that classifies whether a message should be reviewed.\n- Trace a record from root to leaf and explain each decision.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A tree that is easy to draw is not automatically unbiased or stable.\n- Deep trees can memorize training examples and generalize poorly.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nConstruct a small decision tree by hand, then compare a shallow and deep version using a held-out example.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-random-forest",
      "title": "Random Forest",
      "subtitle": "Combine many decision trees to improve robustness.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "A Random Forest is an ensemble of decision trees trained using randomized samples and feature subsets, with their predictions aggregated for classification or regression.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain bootstrap sampling, feature randomness, tree diversity, and aggregation.",
        "Compare majority voting for classification with averaging for regression.",
        "Discuss feature importance caveats, compute, and interpretability."
      ],
      "keywords": [
        "random forest",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Random Forest\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain bootstrap sampling, feature randomness, tree diversity, and aggregation.\n- Compare majority voting for classification with averaging for regression.\n- Discuss feature importance caveats, compute, and interpretability.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain bootstrap sampling, feature randomness, tree diversity, and aggregation.\n2. Compare majority voting for classification with averaging for regression.\n3. Discuss feature importance caveats, compute, and interpretability.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Illustrate how several trees vote on the same synthetic event.\n- Compare one deep decision tree with a forest across repeated train/test splits.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- A Random Forest is not simply one unusually large decision tree.\n- Feature-importance scores can be misleading when features are correlated or have different measurement properties.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nSimulate predictions from five small trees and aggregate them. Discuss why diversity among trees matters.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-k-nearest-neighbors-and-support-vector-machines",
      "title": "K-Nearest Neighbors and Support Vector Machines",
      "subtitle": "Compare local similarity with maximum-margin classification.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "K-Nearest Neighbors (KNN) predicts from nearby training examples, while a Support Vector Machine (SVM) seeks a decision boundary with a large margin between classes.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain distance metrics, feature scaling, k, voting, and the curse of dimensionality for KNN.",
        "Explain hyperplanes, margins, support vectors, and kernels for SVM.",
        "Compare training cost, inference cost, scaling, and data-shape suitability."
      ],
      "keywords": [
        "k-nearest neighbors and support vector machines",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"K-Nearest Neighbors and Support Vector Machines\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain distance metrics, feature scaling, k, voting, and the curse of dimensionality for KNN.\n- Explain hyperplanes, margins, support vectors, and kernels for SVM.\n- Compare training cost, inference cost, scaling, and data-shape suitability.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain distance metrics, feature scaling, k, voting, and the curse of dimensionality for KNN.\n2. Explain hyperplanes, margins, support vectors, and kernels for SVM.\n3. Compare training cost, inference cost, scaling, and data-shape suitability.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Classify a point using three nearest labeled samples.\n- Visualize a separating line and margin for a simple two-dimensional SVM example.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Distance-based algorithms can be dominated by features with larger numeric scales.\n- Kernel methods change the decision representation but do not remove the need for sound validation.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nWork through a KNN classification by hand and sketch a linear SVM margin. List the preprocessing and tuning choices for each.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-naive-bayes",
      "title": "Naive Bayes",
      "subtitle": "Apply Bayes’ rule with a conditional-independence assumption.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "Naive Bayes is a family of probabilistic classifiers that applies Bayes’ theorem while making a simplifying conditional-independence assumption about features given the class.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain priors, likelihoods, evidence, posterior probabilities, and conditional independence.",
        "Compare Gaussian, Multinomial, and Bernoulli Naive Bayes at a high level.",
        "Explain smoothing and why the independence assumption can still be useful."
      ],
      "keywords": [
        "naive bayes",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Naive Bayes\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain priors, likelihoods, evidence, posterior probabilities, and conditional independence.\n- Compare Gaussian, Multinomial, and Bernoulli Naive Bayes at a high level.\n- Explain smoothing and why the independence assumption can still be useful.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain priors, likelihoods, evidence, posterior probabilities, and conditional independence.\n2. Compare Gaussian, Multinomial, and Bernoulli Naive Bayes at a high level.\n3. Explain smoothing and why the independence assumption can still be useful.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Classify a short message using word counts and simplified likelihoods.\n- Compare predicted classes before and after Laplace smoothing for an unseen token.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- The features are not required to be truly independent for the model to be useful, but the assumption affects probability quality.\n- A Naive Bayes score should not automatically be interpreted as a perfectly calibrated probability.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCalculate a tiny Naive Bayes example from given priors and likelihoods. Show how smoothing avoids a zero likelihood.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-k-means-and-hierarchical-clustering",
      "title": "K-Means and Hierarchical Clustering",
      "subtitle": "Compare centroid-based and tree-based grouping.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "K-Means partitions observations into a chosen number of clusters by iteratively assigning points to centroids and updating those centroids; Hierarchical Clustering builds a nested grouping structure.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain centroids, assignment, within-cluster variation, initialization, and convergence in K-Means.",
        "Compare agglomerative and divisive hierarchical methods and dendrograms.",
        "Discuss scaling, distance choice, cluster count, and sensitivity to shape and outliers."
      ],
      "keywords": [
        "k-means and hierarchical clustering",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"K-Means and Hierarchical Clustering\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain centroids, assignment, within-cluster variation, initialization, and convergence in K-Means.\n- Compare agglomerative and divisive hierarchical methods and dendrograms.\n- Discuss scaling, distance choice, cluster count, and sensitivity to shape and outliers.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain centroids, assignment, within-cluster variation, initialization, and convergence in K-Means.\n2. Compare agglomerative and divisive hierarchical methods and dendrograms.\n3. Discuss scaling, distance choice, cluster count, and sensitivity to shape and outliers.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Run a few iterations of K-Means on six two-dimensional points.\n- Read a small dendrogram and describe how cutting it at different heights changes groups.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- K-Means requires a chosen cluster count and can depend on initialization.\n- Clusters produced by an algorithm are not automatically true labels or actionable categories.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nManually complete two K-Means iterations on a tiny dataset and interpret a small hierarchical dendrogram.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-principal-component-analysis-pca",
      "title": "Principal Component Analysis (PCA)",
      "subtitle": "Reduce dimensionality while preserving directions of high variance.",
      "category": "ML Algorithms",
      "difficulty": "Intermediate",
      "definition": "Principal Component Analysis (PCA) is a linear dimensionality-reduction method that finds orthogonal directions, called principal components, that capture decreasing amounts of variance in the data.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Explain centering, covariance, eigenvectors/eigenvalues, principal components, and explained variance conceptually.",
        "Describe projection into a lower-dimensional representation.",
        "Discuss scaling sensitivity, interpretability, and information loss."
      ],
      "keywords": [
        "principal component analysis (pca)",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Principal Component Analysis (PCA)\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Explain centering, covariance, eigenvectors/eigenvalues, principal components, and explained variance conceptually.\n- Describe projection into a lower-dimensional representation.\n- Discuss scaling sensitivity, interpretability, and information loss.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Explain centering, covariance, eigenvectors/eigenvalues, principal components, and explained variance conceptually.\n2. Describe projection into a lower-dimensional representation.\n3. Discuss scaling sensitivity, interpretability, and information loss.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Project a two-feature dataset onto a dominant direction using a simple plotted illustration.\n- Explain why standardized features may be needed before PCA when units differ.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- PCA does not automatically preserve information most relevant to a target label.\n- A principal component is a mathematical direction, not necessarily a human-interpretable feature.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nExplain a two-dimensional PCA plot, choose a component count from explained-variance information, and identify what could be lost.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Intermediate. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    },
    {
      "id": "topic-ensemble-learning-bagging-boosting-and-xgboost",
      "title": "Ensemble Learning, Bagging, Boosting, and XGBoost",
      "subtitle": "Understand how combining learners can improve predictive performance.",
      "category": "ML Algorithms",
      "difficulty": "Advanced",
      "definition": "Ensemble Learning combines multiple models; Bagging trains learners on resampled data in parallel, while Boosting builds learners sequentially to focus on errors, and XGBoost is a regularized gradient-boosted tree implementation.",
      "position": "This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.",
      "prerequisites": [
        "Module 02 mathematics and data fundamentals",
        "Module 03 Machine Learning fundamentals"
      ],
      "relatedConcepts": [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "KNN",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Ensemble Learning"
      ],
      "objectives": [
        "Compare voting, averaging, bagging, boosting, and stacking.",
        "Explain bootstrap aggregation and sequential residual/error-focused learning.",
        "Introduce gradient boosting, regularization, shrinkage, tree depth, and the role of XGBoost.",
        "Discuss complexity, tuning, leakage-safe validation, and feature importance limitations."
      ],
      "keywords": [
        "ensemble learning, bagging, boosting, and xgboost",
        "regression classifier",
        "decision tree random forest",
        "nearest neighbors SVM",
        "naive bayes",
        "clustering",
        "PCA bagging boosting XGBoost"
      ],
      "prompt": "Act as an experienced AI educator and technical instructor. Create a complete, self-contained lesson on \"Ensemble Learning, Bagging, Boosting, and XGBoost\". The learner will paste this prompt into a new AI conversation; do not rely on this website or earlier context.\n\nLANGUAGE REQUIREMENT\n- Teach the entire lesson in natural fluent Egyptian colloquial Arabic (Masri).\n- Preserve technical terminology, algorithm names, mathematical notation, and standard industry expressions in English.\n- Explain each important English term in Egyptian Arabic when it first appears, keeping the English term visible.\n- Do not switch the main teaching language to Modern Standard Arabic or English. English is appropriate for code, formulas, identifiers, and the glossary.\n\nLEARNER CONTEXT AND KNOWLEDGE MAP\nThis lesson belongs to Part 01 — Artificial Intelligence Fundamentals, Module 04 — Machine Learning Algorithms. This module applies the shared ML workflow to concrete algorithm families and builds the judgement needed to compare model choices.\nAssume general computer literacy and these prerequisites: Module 02 mathematics and data fundamentals, Module 03 Machine Learning fundamentals. Briefly introduce any prerequisite needed to follow the lesson. Related concepts include: Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM, Naive Bayes, K-Means, PCA, Ensemble Learning.\n\nLEARNING OUTCOMES\n- Compare voting, averaging, bagging, boosting, and stacking.\n- Explain bootstrap aggregation and sequential residual/error-focused learning.\n- Introduce gradient boosting, regularization, shrinkage, tree depth, and the role of XGBoost.\n- Discuss complexity, tuning, leakage-safe validation, and feature importance limitations.\n\nTOPIC-SPECIFIC TEACHING PLAN\n1. Compare voting, averaging, bagging, boosting, and stacking.\n2. Explain bootstrap aggregation and sequential residual/error-focused learning.\n3. Introduce gradient boosting, regularization, shrinkage, tree depth, and the role of XGBoost.\n4. Discuss complexity, tuning, leakage-safe validation, and feature importance limitations.\n\nWORKED EXAMPLES\nUse these examples as the backbone of the explanation, not as passing mentions:\n- Compare bagged trees with sequentially boosted shallow trees on a tabular task.\n- Explain how a sequence of weak learners can combine into a stronger predictor.\nExplain the mechanism step by step. Identify inputs, intermediate representations or decisions, and outputs. Include practical implementations and code when they genuinely help teach the topic; use a diagram, table, formula, pseudocode, or Python when it clarifies the mechanism, and explain every introduced symbol or code step.\n\nMISCONCEPTIONS AND LIMITATIONS\nExplicitly correct these topic-relevant misconceptions:\n- Ensembling does not guarantee improvement if component models share the same errors.\n- XGBoost is an implementation with design choices, not a separate learning paradigm unrelated to boosting.\nAlso explain relevant assumptions, trade-offs, edge cases, and situations where this approach is unsuitable. Do not invent benchmarks, product capabilities, citations, or numerical claims.\n\nPRACTICAL TASK\nCreate a decision table comparing one tree, Random Forest, and gradient boosting for a tabular problem. Explain the rationale for model selection.\nWhere a cybersecurity connection is useful, use defensive examples or controlled labs. Any offensive-security activity must be limited to systems the learner owns or has explicit permission to test.\n\nOUTPUT STANDARD\n- Target depth: Advanced. Progress from prerequisites to mechanisms, applications, and engineering judgment without padding the lesson with irrelevant advanced mathematics.\n- Use clear headings, define supporting terms before relying on them, and explain relationships between concepts.\n- Include a diagram when it materially improves understanding and explain it in words.\n- Include a comparison table when alternatives are being compared.\n- Include a practical implementation, code sample, or hands-on procedure whenever it is genuinely useful; explain the code and expected output rather than pasting unexplained snippets.\n- Include at least two worked examples where appropriate, an English technical glossary with Egyptian Arabic explanations, practical exercises, and review questions with answers.\n- End with key takeaways and a knowledge assessment with an answer key.\n- Prefer official documentation, textbooks, standards, or primary research for references. Never fabricate citations. State when current verification is unavailable and distinguish established knowledge from unsettled research.\n- If the complete lesson exceeds one response, divide it into numbered consecutive parts without omitting planned sections."
    }
  ]
});
