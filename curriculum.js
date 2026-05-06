// curriculum.js — 4 self-contained role tracks
// Each role includes its own foundations (Python, SQL where needed, etc.)
// so you pick a role and have everything in one place.

const CURRICULUM = {
  da: {
    name: "Data Analyst",
    tagline: "SQL, dashboards, business storytelling",
    accent: "#0F6E56",
    accentSoft: "#5DCAA5",
    duration: "~12 weeks from scratch",
    description: "Highest-volume hiring market for entry-level data roles in the UK. Bar is predictable — SQL + one BI tool + business framing. Many start here and pivot to DS/ML in 1-2 years.",
    sections: [
      {
        title: "Setup & accounts",
        topics: [
          { id: "da-0-1", text: "Install Python 3.11+ and a virtual environment" },
          { id: "da-0-2", text: "Install VS Code with Python and Jupyter extensions" },
          { id: "da-0-3", text: "Install Power BI Desktop (free, Windows)" },
          { id: "da-0-4", text: "Create Tableau Public account" },
          { id: "da-0-5", text: "Install PostgreSQL or SQLite locally" },
          { id: "da-0-6", text: "Set up GitHub account and learn basic git" },
          { id: "da-0-7", text: "Sign up for Google Looker Studio (free)" },
          { id: "da-0-8", text: "Sign up for DataLemur and StrataScratch (SQL practice)" },
        ]
      },
      {
        title: "Excel mastery",
        topics: [
          { id: "da-1-1", text: "Cell references — relative, absolute, mixed ($A$1)" },
          { id: "da-1-2", text: "Pivot tables, slicers, calculated fields" },
          { id: "da-1-3", text: "VLOOKUP, XLOOKUP, INDEX/MATCH" },
          { id: "da-1-4", text: "SUMIFS, COUNTIFS, AVERAGEIFS" },
          { id: "da-1-5", text: "Conditional formatting, data validation" },
          { id: "da-1-6", text: "Power Query for Excel — get & transform", resource: "Microsoft Learn — Power Query basics" },
          { id: "da-1-7", text: "Named ranges, dynamic arrays (FILTER, UNIQUE, SORT)" },
          { id: "da-1-8", text: "Build one full Excel dashboard from a messy CSV" },
        ]
      },
      {
        title: "SQL — basics",
        topics: [
          { id: "da-2-1", text: "SELECT, FROM, WHERE", resource: "Mode Analytics SQL Tutorial (free)" },
          { id: "da-2-2", text: "ORDER BY, LIMIT, DISTINCT" },
          { id: "da-2-3", text: "AND, OR, NOT, IN, BETWEEN, LIKE" },
          { id: "da-2-4", text: "COUNT, SUM, AVG, MIN, MAX" },
          { id: "da-2-5", text: "GROUP BY and HAVING" },
          { id: "da-2-6", text: "NULL, COALESCE, IS NULL" },
          { id: "da-2-7", text: "CASE WHEN expressions" },
          { id: "da-2-8", text: "String functions (CONCAT, SUBSTRING, REPLACE, TRIM)" },
          { id: "da-2-9", text: "Date functions (DATE_TRUNC, EXTRACT, DATEDIFF)" },
        ]
      },
      {
        title: "SQL — joins & subqueries",
        topics: [
          { id: "da-3-1", text: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN" },
          { id: "da-3-2", text: "Self-joins and CROSS JOIN" },
          { id: "da-3-3", text: "Subqueries in WHERE, FROM, SELECT" },
          { id: "da-3-4", text: "CTEs (WITH clause) — readable multi-step queries" },
          { id: "da-3-5", text: "UNION, UNION ALL, INTERSECT, EXCEPT" },
          { id: "da-3-6", text: "EXISTS vs IN — when to use each" },
          { id: "da-3-7", text: "Solve 30 easy SQL problems on DataLemur" },
        ]
      },
      {
        title: "SQL — advanced (interview level)",
        topics: [
          { id: "da-4-1", text: "Window functions — OVER, PARTITION BY", resource: "SQL for Data Analysis by Cathy Tanimura" },
          { id: "da-4-2", text: "ROW_NUMBER, RANK, DENSE_RANK" },
          { id: "da-4-3", text: "LAG, LEAD — accessing previous/next rows" },
          { id: "da-4-4", text: "Running totals, moving averages" },
          { id: "da-4-5", text: "FIRST_VALUE, LAST_VALUE, NTH_VALUE" },
          { id: "da-4-6", text: "Star schema, fact vs dimension tables" },
          { id: "da-4-7", text: "Indexes — basics of how queries get fast" },
          { id: "da-4-8", text: "EXPLAIN, query plans, performance tuning" },
          { id: "da-4-9", text: "Solve 30 medium SQL problems" },
          { id: "da-4-10", text: "Solve 10 hard SQL problems" },
        ]
      },
      {
        title: "Python for analysts",
        topics: [
          { id: "da-5-1", text: "Variables, types, lists, dicts, control flow", resource: "Python for Everybody (Coursera, free)" },
          { id: "da-5-2", text: "Functions, error handling, file I/O" },
          { id: "da-5-3", text: "Pandas — Series, DataFrame, reading CSVs" },
          { id: "da-5-4", text: "Pandas filtering, groupby, merge, pivot" },
          { id: "da-5-5", text: "Datetime handling, missing data" },
          { id: "da-5-6", text: "Matplotlib and Seaborn for quick charts" },
          { id: "da-5-7", text: "BeautifulSoup for web scraping basics" },
          { id: "da-5-8", text: "Working with APIs — requests library" },
        ]
      },
      {
        title: "Statistics for analysts",
        topics: [
          { id: "da-6-1", text: "Mean, median, mode — when each is misleading", resource: "StatQuest YouTube" },
          { id: "da-6-2", text: "Variance, standard deviation, IQR" },
          { id: "da-6-3", text: "Percentiles, quartiles, boxplots" },
          { id: "da-6-4", text: "Correlation vs causation, Pearson vs Spearman" },
          { id: "da-6-5", text: "Confidence intervals — interpretation" },
          { id: "da-6-6", text: "Hypothesis testing — null vs alternative, p-values" },
          { id: "da-6-7", text: "A/B testing basics — sample size, power" },
        ]
      },
      {
        title: "Power BI — full mastery",
        topics: [
          { id: "da-7-1", text: "Power BI Desktop tour — Report, Data, Model views", resource: "Microsoft Learn — PL-300 (free)" },
          { id: "da-7-2", text: "Loading data — CSV, Excel, SQL Server, web" },
          { id: "da-7-3", text: "Power Query — clean, transform, merge tables" },
          { id: "da-7-4", text: "Data modelling — relationships, star schema" },
          { id: "da-7-5", text: "Visuals — bar, line, donut, KPI cards, tables" },
          { id: "da-7-6", text: "Filters, slicers, drill-through, drill-down" },
          { id: "da-7-7", text: "DAX basics — calculated columns vs measures" },
          { id: "da-7-8", text: "DAX — CALCULATE, FILTER, SUMX, AVERAGEX" },
          { id: "da-7-9", text: "DAX time intelligence — TOTALYTD, SAMEPERIODLASTYEAR" },
          { id: "da-7-10", text: "Variables in DAX, IF, SWITCH" },
          { id: "da-7-11", text: "Bookmarks and buttons for interactive reports" },
          { id: "da-7-12", text: "Dashboard design — hierarchy, white space, contrast", resource: "Storytelling with Data by Cole Knaflic" },
          { id: "da-7-13", text: "Publishing to Power BI Service, refresh schedules" },
          { id: "da-7-14", text: "Row-level security (RLS) basics" },
          { id: "da-7-15", text: "Power BI Copilot — using AI to draft DAX and visuals" },
          { id: "da-7-16", text: "Take the PL-300 practice exam" },
        ]
      },
      {
        title: "Tableau (second BI tool)",
        topics: [
          { id: "da-8-1", text: "Tableau Public basics — sheets, dashboards" },
          { id: "da-8-2", text: "Dimensions vs measures, calculated fields" },
          { id: "da-8-3", text: "Filters, parameters, sets" },
          { id: "da-8-4", text: "Build one full dashboard, publish to Tableau Public" },
        ]
      },
      {
        title: "Modern analytics stack",
        topics: [
          { id: "da-9-1", text: "dbt fundamentals — model, ref, tests, docs", resource: "dbt Learn (free)" },
          { id: "da-9-2", text: "Snowflake or BigQuery — pick one, learn the free tier" },
          { id: "da-9-3", text: "Modern data stack overview (Fivetran, dbt, Snowflake, Looker)" },
          { id: "da-9-4", text: "Looker Studio — free Google equivalent of Power BI" },
          { id: "da-9-5", text: "Metabase — open source BI alternative" },
          { id: "da-9-6", text: "Reverse ETL concepts — Census, Hightouch" },
        ]
      },
      {
        title: "AI dev tools (use these daily)",
        topics: [
          { id: "da-10-1", text: "Cursor — AI-powered code editor, learn Cmd+K and Cmd+L" },
          { id: "da-10-2", text: "Claude Code — terminal agent for editing files" },
          { id: "da-10-3", text: "GitHub Copilot in VS Code" },
          { id: "da-10-4", text: "Using Claude / ChatGPT to draft and debug SQL" },
          { id: "da-10-5", text: "Power BI Copilot — natural language to DAX" },
        ]
      },
      {
        title: "Soft skills & interview prep",
        topics: [
          { id: "da-11-1", text: "Read 10 real DA job descriptions, gap-map your skills" },
          { id: "da-11-2", text: "Practice 10 case studies — 'sales dropped 15%, why?'" },
          { id: "da-11-3", text: "Write 1-pager exec summaries from each dashboard" },
          { id: "da-11-4", text: "Mock behavioural interview using STAR method" },
          { id: "da-11-5", text: "Polish LinkedIn for DA keywords" },
          { id: "da-11-6", text: "Set up job alerts on LinkedIn, Otta, Indeed" },
          { id: "da-11-7", text: "Apply to 10 DA roles per week" },
        ]
      },
      {
        title: "🚀 PROJECT — London Cost-of-Living Tracker for Students",
        isProject: true,
        topics: [
          { id: "da-p-1", text: "Define KPIs — rent, transport, groceries by borough" },
          { id: "da-p-2", text: "Source data — ONS, TfL fares, Numbeo, supermarket scrapes" },
          { id: "da-p-3", text: "Clean data in Power Query / Python; load into Supabase" },
          { id: "da-p-4", text: "Build star schema and DAX measures" },
          { id: "da-p-5", text: "Design dashboard — Borough Compare, Trends, Personal Calculator" },
          { id: "da-p-6", text: "Publish to Power BI Service" },
          { id: "da-p-7", text: "Build Tableau Public version of the same dashboard" },
          { id: "da-p-8", text: "Push code to GitHub with detailed README" },
          { id: "da-p-9", text: "Write LinkedIn post + record 60-second demo video" },
        ]
      },
    ]
  },

  ds: {
    name: "Data Scientist",
    tagline: "Stats, ML, business impact",
    accent: "#534AB7",
    accentSoft: "#7F77DD",
    duration: "~16 weeks from scratch",
    description: "ML appears in 69% of DS postings, Python in 57%. The role is shifting toward GenAI fluency — RAG, prompt engineering, and synthetic data are 2026 trends. DS interviews are stricter on stats and case studies than any other data role.",
    sections: [
      {
        title: "Setup & accounts",
        topics: [
          { id: "ds-0-1", text: "Install Python 3.11+ and a virtual environment (or uv)" },
          { id: "ds-0-2", text: "Install VS Code or Cursor + Python/Jupyter extensions" },
          { id: "ds-0-3", text: "Set up Anaconda or Miniconda" },
          { id: "ds-0-4", text: "Sign up for Google Colab + Kaggle accounts" },
          { id: "ds-0-5", text: "Install PostgreSQL or SQLite locally" },
          { id: "ds-0-6", text: "Hugging Face account" },
          { id: "ds-0-7", text: "Weights & Biases account (free)" },
          { id: "ds-0-8", text: "GitHub account, SSH keys, basic git workflow" },
        ]
      },
      {
        title: "Python foundations",
        topics: [
          { id: "ds-1-1", text: "Variables, types, strings, f-strings", resource: "Python for Everybody (Coursera, free)" },
          { id: "ds-1-2", text: "Lists, tuples, dicts, sets — when to use which" },
          { id: "ds-1-3", text: "Conditionals, loops, range, enumerate" },
          { id: "ds-1-4", text: "Functions, default args, *args, **kwargs" },
          { id: "ds-1-5", text: "Lambda, map, filter, reduce" },
          { id: "ds-1-6", text: "List/dict comprehensions, generators, yield" },
          { id: "ds-1-7", text: "Error handling, file I/O, JSON" },
          { id: "ds-1-8", text: "Modules, packages, pip, virtual envs" },
          { id: "ds-1-9", text: "OOP basics — classes, inheritance" },
          { id: "ds-1-10", text: "Decorators and context managers" },
        ]
      },
      {
        title: "NumPy & Pandas",
        topics: [
          { id: "ds-2-1", text: "NumPy arrays, dtypes, indexing, broadcasting" },
          { id: "ds-2-2", text: "NumPy aggregations, reshaping, stacking" },
          { id: "ds-2-3", text: "Pandas Series and DataFrame basics" },
          { id: "ds-2-4", text: "Reading CSVs, Excel, JSON, parquet" },
          { id: "ds-2-5", text: "loc, iloc, boolean masks for filtering" },
          { id: "ds-2-6", text: "groupby, transform, apply, agg" },
          { id: "ds-2-7", text: "Merge, join, concat — SQL JOIN equivalents" },
          { id: "ds-2-8", text: "Pivot tables, melt, stack, unstack" },
          { id: "ds-2-9", text: "Datetime — pd.to_datetime, resample, rolling" },
          { id: "ds-2-10", text: "Missing data — fillna, dropna, interpolate" },
        ]
      },
      {
        title: "SQL for DS",
        topics: [
          { id: "ds-3-1", text: "SELECT, WHERE, GROUP BY, HAVING basics", resource: "DataLemur (interview-style)" },
          { id: "ds-3-2", text: "All JOIN types and subqueries" },
          { id: "ds-3-3", text: "CTEs and complex multi-step queries" },
          { id: "ds-3-4", text: "Window functions — ROW_NUMBER, RANK, LAG, LEAD" },
          { id: "ds-3-5", text: "Running totals, moving averages" },
          { id: "ds-3-6", text: "Solve 50 SQL problems across difficulties" },
        ]
      },
      {
        title: "Statistics — descriptive & probability",
        topics: [
          { id: "ds-4-1", text: "Mean, median, mode, variance, std", resource: "StatQuest YouTube" },
          { id: "ds-4-2", text: "Percentiles, quartiles, boxplots, IQR" },
          { id: "ds-4-3", text: "Skewness, kurtosis, distribution shapes" },
          { id: "ds-4-4", text: "Probability basics — events, conditional, independence" },
          { id: "ds-4-5", text: "Bayes' theorem with worked examples" },
          { id: "ds-4-6", text: "Distributions — normal, binomial, Poisson, exponential" },
          { id: "ds-4-7", text: "Central Limit Theorem and law of large numbers" },
          { id: "ds-4-8", text: "Correlation vs causation, Pearson vs Spearman" },
        ]
      },
      {
        title: "Statistics — inferential & A/B testing",
        topics: [
          { id: "ds-5-1", text: "Sampling, sampling distributions, standard error", resource: "Practical Statistics for Data Scientists" },
          { id: "ds-5-2", text: "Confidence intervals — calculation and interpretation" },
          { id: "ds-5-3", text: "Hypothesis testing — null vs alternative" },
          { id: "ds-5-4", text: "p-values — what they actually mean (and don't)" },
          { id: "ds-5-5", text: "Type I and Type II errors, statistical power" },
          { id: "ds-5-6", text: "t-test, paired t-test, Welch's t-test" },
          { id: "ds-5-7", text: "Chi-square test, ANOVA basics" },
          { id: "ds-5-8", text: "Non-parametric tests (Mann-Whitney, Wilcoxon)" },
          { id: "ds-5-9", text: "A/B testing — design, sample size, power calc", resource: "Trustworthy Online Controlled Experiments (Kohavi)" },
          { id: "ds-5-10", text: "Peeking, multiple comparisons, novelty effects" },
          { id: "ds-5-11", text: "Run a mock A/B test on a public dataset, write up" },
        ]
      },
      {
        title: "Linear algebra & calculus essentials",
        topics: [
          { id: "ds-6-1", text: "Vectors, matrices, dot product", resource: "3Blue1Brown — Essence of Linear Algebra" },
          { id: "ds-6-2", text: "Matrix multiplication, transpose, inverse" },
          { id: "ds-6-3", text: "Eigenvalues, eigenvectors (intuition for PCA)" },
          { id: "ds-6-4", text: "Derivatives, partial derivatives, gradients" },
          { id: "ds-6-5", text: "Chain rule (foundation for backprop)" },
          { id: "ds-6-6", text: "Gradient descent — intuition" },
        ]
      },
      {
        title: "Classical machine learning",
        topics: [
          { id: "ds-7-1", text: "Supervised vs unsupervised, regression vs classification", resource: "Andrew Ng — ML Specialization (Coursera)" },
          { id: "ds-7-2", text: "Linear regression — assumptions, OLS, R²" },
          { id: "ds-7-3", text: "Logistic regression — sigmoid, log loss" },
          { id: "ds-7-4", text: "Regularisation — L1, L2, Elastic Net" },
          { id: "ds-7-5", text: "Decision trees — splits, entropy, Gini" },
          { id: "ds-7-6", text: "Random Forest — bagging, feature importance" },
          { id: "ds-7-7", text: "XGBoost, LightGBM, CatBoost", resource: "Hands-On ML by Géron" },
          { id: "ds-7-8", text: "K-Nearest Neighbours, Naive Bayes" },
          { id: "ds-7-9", text: "Support Vector Machines (SVM) — intuition + kernels" },
          { id: "ds-7-10", text: "K-means clustering, hierarchical clustering" },
          { id: "ds-7-11", text: "PCA, t-SNE, UMAP — dimensionality reduction" },
        ]
      },
      {
        title: "Model evaluation & feature engineering",
        topics: [
          { id: "ds-8-1", text: "Train/val/test splits, why we need them" },
          { id: "ds-8-2", text: "k-fold and stratified k-fold cross-validation" },
          { id: "ds-8-3", text: "Classification metrics — accuracy, precision, recall, F1" },
          { id: "ds-8-4", text: "ROC, AUC, precision-recall curves" },
          { id: "ds-8-5", text: "Regression metrics — MSE, RMSE, MAE, R²" },
          { id: "ds-8-6", text: "Bias-variance tradeoff" },
          { id: "ds-8-7", text: "Class imbalance — SMOTE, class weights" },
          { id: "ds-8-8", text: "Data leakage — what it is, how to avoid" },
          { id: "ds-8-9", text: "Encoding — one-hot, label, target encoding" },
          { id: "ds-8-10", text: "Scaling — StandardScaler, MinMaxScaler, RobustScaler" },
          { id: "ds-8-11", text: "Datetime feature extraction" },
          { id: "ds-8-12", text: "Text features — Bag of Words, TF-IDF" },
        ]
      },
      {
        title: "Time-series & forecasting",
        topics: [
          { id: "ds-9-1", text: "Components — trend, seasonality, noise", resource: "Forecasting: Principles and Practice (free)" },
          { id: "ds-9-2", text: "Stationarity, differencing, ACF/PACF" },
          { id: "ds-9-3", text: "ARIMA / SARIMA models" },
          { id: "ds-9-4", text: "Prophet by Meta" },
          { id: "ds-9-5", text: "LSTM for time-series" },
          { id: "ds-9-6", text: "Time-series cross-validation (forward chaining)" },
        ]
      },
      {
        title: "Causal inference (interview edge)",
        topics: [
          { id: "ds-10-1", text: "Confounders, Simpson's paradox", resource: "Causal Inference: The Mixtape (free)" },
          { id: "ds-10-2", text: "Difference-in-Differences (DiD)" },
          { id: "ds-10-3", text: "Propensity score matching" },
          { id: "ds-10-4", text: "Instrumental variables (intuition)" },
        ]
      },
      {
        title: "Visualisation & dashboarding",
        topics: [
          { id: "ds-11-1", text: "Matplotlib — figure, axes, plot types" },
          { id: "ds-11-2", text: "Seaborn — distplot, heatmap, pairplot" },
          { id: "ds-11-3", text: "Plotly for interactive charts" },
          { id: "ds-11-4", text: "Streamlit — turn a notebook into a web app" },
          { id: "ds-11-5", text: "Power BI basics for stakeholder dashboards" },
        ]
      },
      {
        title: "GenAI for data scientists",
        topics: [
          { id: "ds-12-1", text: "Using LLMs to draft EDA summaries" },
          { id: "ds-12-2", text: "LLM-generated synthetic data for prototyping" },
          { id: "ds-12-3", text: "Calling Claude / OpenAI APIs for feature ideation" },
          { id: "ds-12-4", text: "Embeddings for semantic clustering of customer behaviour" },
          { id: "ds-12-5", text: "Building a basic RAG over your project docs" },
        ]
      },
      {
        title: "AI dev tools (use these daily)",
        topics: [
          { id: "ds-13-1", text: "Cursor — AI-powered code editor" },
          { id: "ds-13-2", text: "Claude Code — terminal agent for editing files" },
          { id: "ds-13-3", text: "GitHub Copilot in Jupyter and VS Code" },
          { id: "ds-13-4", text: "Using AI to debug failing tests and unclear errors" },
        ]
      },
      {
        title: "Interview prep",
        topics: [
          { id: "ds-14-1", text: "50 ML conceptual questions", resource: "Ace the Data Science Interview" },
          { id: "ds-14-2", text: "30 statistics quick-fire questions, written answers" },
          { id: "ds-14-3", text: "10 product DS case studies" },
          { id: "ds-14-4", text: "60 SQL problems on DataLemur (mixed difficulty)" },
          { id: "ds-14-5", text: "10 STAR stories from your projects" },
          { id: "ds-14-6", text: "5 mock interviews on Pramp or with peers" },
          { id: "ds-14-7", text: "Polish LinkedIn for DS keywords, apply 8/week" },
        ]
      },
      {
        title: "🚀 PROJECT — NHS A&E Demand Forecasting + What-If Simulator",
        isProject: true,
        topics: [
          { id: "ds-p-1", text: "Pull NHS England A&E data, Met Office weather, Google Trends" },
          { id: "ds-p-2", text: "EDA — visualise patterns by trust, time, weather correlation" },
          { id: "ds-p-3", text: "Train baseline (Prophet) + advanced (LSTM ensemble) models" },
          { id: "ds-p-4", text: "Track every experiment in MLflow / Weights & Biases" },
          { id: "ds-p-5", text: "Build Streamlit / Gradio simulator with weather + flu sliders" },
          { id: "ds-p-6", text: "Add a causal-inference write-up (DiD on UTC opening)" },
          { id: "ds-p-7", text: "Deploy publicly (Hugging Face Spaces or Render)" },
          { id: "ds-p-8", text: "Write a Medium / LinkedIn post explaining the impact" },
        ]
      },
    ]
  },

  ml: {
    name: "Machine Learning Engineer",
    tagline: "Deploy, scale, monitor models",
    accent: "#993C1D",
    accentSoft: "#D85A30",
    duration: "~18 weeks from scratch",
    description: "PyTorch (40%) leads model frameworks, ahead of TensorFlow (38%). Kubernetes appears in 17.6% of postings, Docker in 15.4% — containerisation is now baseline. The role bridges data science and DevOps.",
    sections: [
      {
        title: "Setup & accounts",
        topics: [
          { id: "ml-0-1", text: "Install Python 3.11+ and uv or virtualenv" },
          { id: "ml-0-2", text: "Install VS Code or Cursor with Python tooling" },
          { id: "ml-0-3", text: "Install Docker Desktop" },
          { id: "ml-0-4", text: "Set up Anaconda for ML packages" },
          { id: "ml-0-5", text: "AWS Free Tier account (for SageMaker later)" },
          { id: "ml-0-6", text: "Google Cloud free credits (Vertex AI alternative)" },
          { id: "ml-0-7", text: "Hugging Face account + token" },
          { id: "ml-0-8", text: "Weights & Biases + MLflow accounts" },
          { id: "ml-0-9", text: "GitHub account, SSH keys, learn branches & PRs" },
        ]
      },
      {
        title: "Python — production-grade",
        topics: [
          { id: "ml-1-1", text: "Variables, types, control flow, functions" },
          { id: "ml-1-2", text: "OOP — classes, inheritance, dunder methods" },
          { id: "ml-1-3", text: "Decorators, context managers, generators" },
          { id: "ml-1-4", text: "Type hints — typing, Optional, Union, Pydantic" },
          { id: "ml-1-5", text: "async / await for concurrent API calls" },
          { id: "ml-1-6", text: "Logging best practices (structlog or stdlib)" },
          { id: "ml-1-7", text: "Testing with pytest — fixtures, parametrize" },
          { id: "ml-1-8", text: "Code quality — black, ruff, mypy" },
          { id: "ml-1-9", text: "Packaging — pyproject.toml, building a wheel" },
        ]
      },
      {
        title: "NumPy, Pandas, scikit-learn essentials",
        topics: [
          { id: "ml-2-1", text: "NumPy arrays, broadcasting, vectorisation" },
          { id: "ml-2-2", text: "Pandas — DataFrames, groupby, merge, pivot" },
          { id: "ml-2-3", text: "scikit-learn API — fit, transform, predict, Pipeline" },
          { id: "ml-2-4", text: "Custom transformers, ColumnTransformer" },
          { id: "ml-2-5", text: "Cross-validation utilities" },
        ]
      },
      {
        title: "SQL for ML engineers",
        topics: [
          { id: "ml-3-1", text: "All core SQL up through joins and CTEs" },
          { id: "ml-3-2", text: "Window functions" },
          { id: "ml-3-3", text: "Working with PostgreSQL, MySQL via Python (psycopg, SQLAlchemy)" },
          { id: "ml-3-4", text: "Solve 30 SQL problems on DataLemur" },
        ]
      },
      {
        title: "Maths & stats refresher",
        topics: [
          { id: "ml-4-1", text: "Linear algebra — vectors, matrices, dot product", resource: "3Blue1Brown" },
          { id: "ml-4-2", text: "Eigenvalues, SVD intuition" },
          { id: "ml-4-3", text: "Calculus — derivatives, partial derivatives, gradients" },
          { id: "ml-4-4", text: "Chain rule (foundation for backprop)" },
          { id: "ml-4-5", text: "Probability distributions, Bayes" },
          { id: "ml-4-6", text: "Hypothesis testing fundamentals" },
        ]
      },
      {
        title: "Classical ML mastery",
        topics: [
          { id: "ml-5-1", text: "Linear, Logistic regression — derivations" },
          { id: "ml-5-2", text: "Regularisation — L1, L2, Elastic Net" },
          { id: "ml-5-3", text: "Decision trees, Random Forest" },
          { id: "ml-5-4", text: "XGBoost, LightGBM, CatBoost — when each wins", resource: "Hands-On ML by Géron" },
          { id: "ml-5-5", text: "K-Means, hierarchical, DBSCAN clustering" },
          { id: "ml-5-6", text: "PCA, t-SNE, UMAP" },
          { id: "ml-5-7", text: "Hyperparameter tuning — GridSearchCV, Optuna" },
          { id: "ml-5-8", text: "Submit one Kaggle tabular competition with XGBoost" },
        ]
      },
      {
        title: "Deep learning fundamentals",
        topics: [
          { id: "ml-6-1", text: "Neural networks — neurons, weights, activations", resource: "Sebastian Raschka — DL" },
          { id: "ml-6-2", text: "Backpropagation walkthrough by hand" },
          { id: "ml-6-3", text: "Activation functions — ReLU, sigmoid, tanh, softmax" },
          { id: "ml-6-4", text: "Loss functions — MSE, cross-entropy" },
          { id: "ml-6-5", text: "Optimisers — SGD, Adam, AdamW" },
          { id: "ml-6-6", text: "Dropout, batch norm, early stopping" },
          { id: "ml-6-7", text: "Learning rate schedules" },
        ]
      },
      {
        title: "PyTorch (primary) and TensorFlow (recognise)",
        topics: [
          { id: "ml-7-1", text: "PyTorch tensors and autograd", resource: "Official PyTorch tutorials" },
          { id: "ml-7-2", text: "Build a simple neural net in PyTorch" },
          { id: "ml-7-3", text: "DataLoader, custom Datasets" },
          { id: "ml-7-4", text: "Training loop — forward, loss, backward, optimizer.step" },
          { id: "ml-7-5", text: "Saving and loading models (state_dict)" },
          { id: "ml-7-6", text: "GPUs, Apple MPS, mixed precision" },
          { id: "ml-7-7", text: "PyTorch Lightning for cleaner training code" },
          { id: "ml-7-8", text: "Quick TF / Keras tour for context" },
        ]
      },
      {
        title: "Specialised architectures",
        topics: [
          { id: "ml-8-1", text: "CNNs for images" },
          { id: "ml-8-2", text: "Transfer learning with pretrained models" },
          { id: "ml-8-3", text: "RNNs and LSTMs for sequences" },
          { id: "ml-8-4", text: "Transformer architecture — attention is all you need" },
          { id: "ml-8-5", text: "Hugging Face Transformers — using pretrained models", resource: "HF course (free)" },
          { id: "ml-8-6", text: "Fine-tuning a pretrained model" },
          { id: "ml-8-7", text: "Autoencoders for anomaly detection" },
          { id: "ml-8-8", text: "GANs and diffusion models — overview" },
        ]
      },
      {
        title: "Model deployment basics",
        topics: [
          { id: "ml-9-1", text: "Flask vs FastAPI — REST API for ML" },
          { id: "ml-9-2", text: "Wrap a trained model in a FastAPI endpoint" },
          { id: "ml-9-3", text: "Pydantic for request/response validation" },
          { id: "ml-9-4", text: "Streaming responses, async endpoints" },
          { id: "ml-9-5", text: "Gunicorn / Uvicorn workers" },
          { id: "ml-9-6", text: "BentoML for production model serving" },
          { id: "ml-9-7", text: "TorchServe and Triton Inference Server" },
          { id: "ml-9-8", text: "ONNX — exporting models for cross-framework inference" },
        ]
      },
      {
        title: "Docker & containerisation",
        topics: [
          { id: "ml-10-1", text: "Docker concepts — image, container, Dockerfile" },
          { id: "ml-10-2", text: "Write a Dockerfile for a Python ML app" },
          { id: "ml-10-3", text: "Multi-stage builds, slim images" },
          { id: "ml-10-4", text: "docker-compose for multi-service apps" },
          { id: "ml-10-5", text: "Push to Docker Hub / GitHub Container Registry" },
          { id: "ml-10-6", text: "GPU containers — nvidia-docker basics" },
        ]
      },
      {
        title: "MLOps essentials",
        topics: [
          { id: "ml-11-1", text: "MLflow — runs, params, artefacts, registry", resource: "Designing ML Systems by Chip Huyen" },
          { id: "ml-11-2", text: "Weights & Biases — alternative experiment tracker" },
          { id: "ml-11-3", text: "DVC for data versioning" },
          { id: "ml-11-4", text: "Reproducibility — seeds, configs, Hydra" },
          { id: "ml-11-5", text: "Drift detection with Evidently AI" },
          { id: "ml-11-6", text: "CI/CD for ML — GitHub Actions for retraining" },
          { id: "ml-11-7", text: "Pipeline orchestration — Airflow basics" },
          { id: "ml-11-8", text: "Pipeline orchestration — Prefect basics" },
          { id: "ml-11-9", text: "Feature stores — Feast (overview)" },
          { id: "ml-11-10", text: "Made With ML walkthrough", resource: "madewithml.com (free)" },
        ]
      },
      {
        title: "Cloud ML — pick AWS or GCP",
        topics: [
          { id: "ml-12-1", text: "AWS basics — IAM, S3, EC2, Lambda" },
          { id: "ml-12-2", text: "AWS SageMaker — train, deploy, endpoints", resource: "AWS SageMaker Immersion Day (free)" },
          { id: "ml-12-3", text: "Or GCP Vertex AI alternative path" },
          { id: "ml-12-4", text: "Cost monitoring — avoid surprise bills" },
          { id: "ml-12-5", text: "Terraform basics for infra-as-code (overview)" },
        ]
      },
      {
        title: "Kubernetes & orchestration",
        topics: [
          { id: "ml-13-1", text: "Kubernetes concepts — pods, deployments, services" },
          { id: "ml-13-2", text: "Minikube or Docker Desktop K8s for local practice" },
          { id: "ml-13-3", text: "Deploy a model service to a local cluster" },
          { id: "ml-13-4", text: "Kubeflow for ML on Kubernetes (overview)" },
          { id: "ml-13-5", text: "Ray for distributed training and serving" },
          { id: "ml-13-6", text: "When K8s vs simpler options (ECS, Cloud Run)" },
        ]
      },
      {
        title: "Streaming & real-time ML",
        topics: [
          { id: "ml-14-1", text: "Kafka basics — producer, consumer, topics" },
          { id: "ml-14-2", text: "Redis Streams as a lightweight alternative" },
          { id: "ml-14-3", text: "Real-time feature pipelines" },
          { id: "ml-14-4", text: "Online learning concepts" },
        ]
      },
      {
        title: "LLMOps (emerging — high signal)",
        topics: [
          { id: "ml-15-1", text: "vLLM for high-throughput LLM serving" },
          { id: "ml-15-2", text: "Text Generation Inference (TGI) by Hugging Face" },
          { id: "ml-15-3", text: "LoRA, QLoRA — parameter-efficient fine-tuning" },
          { id: "ml-15-4", text: "Quantisation — int8, GPTQ, AWQ" },
          { id: "ml-15-5", text: "Eval harnesses for LLMs (lm-evaluation-harness)" },
        ]
      },
      {
        title: "ML system design",
        topics: [
          { id: "ml-16-1", text: "Design a recommender system end-to-end", resource: "ML System Design Interview by Aminian" },
          { id: "ml-16-2", text: "Design a fraud detection system" },
          { id: "ml-16-3", text: "Design a search ranking system" },
          { id: "ml-16-4", text: "Design a real-time bidding system" },
          { id: "ml-16-5", text: "Practice 10 mock system designs on paper" },
        ]
      },
      {
        title: "AI dev tools",
        topics: [
          { id: "ml-17-1", text: "Cursor for AI-paired coding" },
          { id: "ml-17-2", text: "Claude Code for multi-file edits and refactors" },
          { id: "ml-17-3", text: "GitHub Copilot in VS Code" },
          { id: "ml-17-4", text: "Using AI to debug Docker and K8s YAML" },
        ]
      },
      {
        title: "Interview prep",
        topics: [
          { id: "ml-18-1", text: "100 LeetCode easy in Python" },
          { id: "ml-18-2", text: "50 LeetCode medium (trees, graphs, basic DP)" },
          { id: "ml-18-3", text: "ML conceptual deep-dives — derive gradient descent" },
          { id: "ml-18-4", text: "5 ML system design mocks" },
          { id: "ml-18-5", text: "Behavioural — STAR stories tied to deployments" },
          { id: "ml-18-6", text: "Apply to 5 MLE roles per week" },
        ]
      },
      {
        title: "🚀 PROJECT — Real-time Anomaly Detection for IoT Smart Metres",
        isProject: true,
        topics: [
          { id: "ml-p-1", text: "Generate or source simulated smart-metre data" },
          { id: "ml-p-2", text: "Train an autoencoder model in PyTorch on normal patterns" },
          { id: "ml-p-3", text: "Wrap inference in a FastAPI service" },
          { id: "ml-p-4", text: "Containerise with Docker, write docker-compose.yml" },
          { id: "ml-p-5", text: "Set up MLflow for experiment tracking" },
          { id: "ml-p-6", text: "Add Evidently AI drift dashboard" },
          { id: "ml-p-7", text: "Deploy to AWS ECS or run on a local Kubernetes cluster" },
          { id: "ml-p-8", text: "Add GitHub Actions CI/CD for retraining" },
          { id: "ml-p-9", text: "Build a Grafana dashboard for live anomalies" },
          { id: "ml-p-10", text: "Write architecture doc + record 3-min Loom walkthrough" },
        ]
      },
    ]
  },

  ai: {
    name: "AI Engineer",
    tagline: "LLMs, agents, automation, MCP",
    accent: "#993556",
    accentSoft: "#D4537E",
    duration: "~20 weeks from scratch (the deepest track)",
    description: "Fastest-growing tech role — 143% YoY growth in early 2026. The bar shifted from 'I can call an API' to 'I ship agentic systems with eval, observability, guardrails, and automation pipelines'. Heaviest depth — covers everything from LLM basics through MCP, automation tools, and production deployment.",
    sections: [
      {
        title: "Setup & accounts",
        topics: [
          { id: "ai-0-1", text: "Install Python 3.11+ and uv or virtualenv" },
          { id: "ai-0-2", text: "Install Node.js 20+ (for TypeScript MCP servers, n8n)" },
          { id: "ai-0-3", text: "Install Cursor as your primary editor" },
          { id: "ai-0-4", text: "Install Claude Code CLI" },
          { id: "ai-0-5", text: "Install Docker Desktop" },
          { id: "ai-0-6", text: "Anthropic Console account ($5 free credit)" },
          { id: "ai-0-7", text: "OpenAI account, Gemini API key" },
          { id: "ai-0-8", text: "OpenRouter account (cheap multi-model access)" },
          { id: "ai-0-9", text: "Together AI / Groq for fast open-model inference" },
          { id: "ai-0-10", text: "Hugging Face account + token" },
          { id: "ai-0-11", text: "Pinecone, Weaviate, or Qdrant cloud free tier" },
          { id: "ai-0-12", text: "Supabase free tier (Postgres + pgvector)" },
          { id: "ai-0-13", text: "LangSmith account (free tier for tracing)" },
          { id: "ai-0-14", text: "Langfuse account (open-source alternative)" },
          { id: "ai-0-15", text: "Vercel + Railway accounts (deployment)" },
          { id: "ai-0-16", text: "Install Ollama for running local LLMs" },
          { id: "ai-0-17", text: "Install LM Studio (local model playground)" },
        ]
      },
      {
        title: "Python — production grade",
        topics: [
          { id: "ai-1-1", text: "Variables, types, control flow, functions" },
          { id: "ai-1-2", text: "OOP — classes, inheritance, abstract methods" },
          { id: "ai-1-3", text: "Decorators, context managers, generators" },
          { id: "ai-1-4", text: "Type hints + Pydantic — critical for LLM tool schemas" },
          { id: "ai-1-5", text: "async / await — most LLM SDKs are async-first" },
          { id: "ai-1-6", text: "Streaming responses — async generators" },
          { id: "ai-1-7", text: "Error handling, retries, exponential backoff" },
          { id: "ai-1-8", text: "Logging with structlog, observability mindset" },
          { id: "ai-1-9", text: "Testing with pytest — including async tests" },
          { id: "ai-1-10", text: "Code quality — black, ruff, mypy" },
        ]
      },
      {
        title: "TypeScript / JavaScript basics",
        topics: [
          { id: "ai-2-1", text: "Why TS matters — many MCP servers and agent SDKs are TS" },
          { id: "ai-2-2", text: "TypeScript essentials — types, interfaces, generics" },
          { id: "ai-2-3", text: "Node.js basics — npm, package.json, async/await in JS" },
          { id: "ai-2-4", text: "Working with the Vercel AI SDK" },
          { id: "ai-2-5", text: "Building a basic Next.js app" },
        ]
      },
      {
        title: "Web fundamentals (so you can build UIs)",
        topics: [
          { id: "ai-3-1", text: "HTML — semantic tags, forms, accessibility basics" },
          { id: "ai-3-2", text: "CSS — flexbox, grid, custom properties" },
          { id: "ai-3-3", text: "JavaScript fundamentals — DOM, fetch, async" },
          { id: "ai-3-4", text: "React basics — components, hooks, state" },
          { id: "ai-3-5", text: "Streamlit (Python alternative for fast demos)" },
          { id: "ai-3-6", text: "Gradio for ML/AI demos" },
        ]
      },
      {
        title: "LLM fundamentals",
        topics: [
          { id: "ai-4-1", text: "What an LLM actually is — tokens, context, sampling", resource: "Hands-On Large Language Models" },
          { id: "ai-4-2", text: "Tokenisation — BPE, why token costs matter" },
          { id: "ai-4-3", text: "Temperature, top-p, top-k sampling" },
          { id: "ai-4-4", text: "Major model families — Claude, GPT, Gemini, Llama, Qwen, DeepSeek" },
          { id: "ai-4-5", text: "Calling APIs — Anthropic, OpenAI, Gemini SDK basics" },
          { id: "ai-4-6", text: "OpenRouter for cheap multi-model experimentation" },
          { id: "ai-4-7", text: "Local LLMs with Ollama — run Llama 3, Qwen locally" },
          { id: "ai-4-8", text: "LM Studio for local model UI" },
          { id: "ai-4-9", text: "llama.cpp for CPU inference of quantised models" },
          { id: "ai-4-10", text: "Cost and latency awareness — input vs output tokens" },
          { id: "ai-4-11", text: "Context window management strategies" },
          { id: "ai-4-12", text: "Caching — prompt caching to cut costs" },
        ]
      },
      {
        title: "Prompt engineering — depth",
        topics: [
          { id: "ai-5-1", text: "Zero-shot, few-shot prompting" },
          { id: "ai-5-2", text: "Chain-of-Thought (CoT) prompting" },
          { id: "ai-5-3", text: "ReAct pattern — reasoning + acting" },
          { id: "ai-5-4", text: "Tree-of-thoughts and self-consistency" },
          { id: "ai-5-5", text: "System prompts vs user prompts vs assistant prefill" },
          { id: "ai-5-6", text: "Structured output — JSON mode, Pydantic, tool use" },
          { id: "ai-5-7", text: "XML tags and structured prompting (Anthropic style)" },
          { id: "ai-5-8", text: "Prompt evaluation — what 'better' actually means" },
          { id: "ai-5-9", text: "Constitutional AI / safety prompting" },
          { id: "ai-5-10", text: "Read Anthropic's prompt engineering docs end-to-end" },
        ]
      },
      {
        title: "RAG — Retrieval Augmented Generation",
        topics: [
          { id: "ai-6-1", text: "Why RAG — hallucinations, fresh data, citations" },
          { id: "ai-6-2", text: "Embeddings — what they are, how to use them" },
          { id: "ai-6-3", text: "Embedding models — OpenAI, Cohere, BGE, E5" },
          { id: "ai-6-4", text: "Vector databases — Pinecone, Weaviate, Chroma, Qdrant, pgvector" },
          { id: "ai-6-5", text: "Pinecone hands-on — index, upsert, query" },
          { id: "ai-6-6", text: "pgvector with Supabase (free, easy)" },
          { id: "ai-6-7", text: "Chunking strategies — fixed, semantic, document-aware" },
          { id: "ai-6-8", text: "Hybrid search — BM25 + vector" },
          { id: "ai-6-9", text: "Re-ranking with Cohere Rerank or cross-encoders" },
          { id: "ai-6-10", text: "Build a basic RAG over your own notes/PDFs" },
          { id: "ai-6-11", text: "RAG evaluation — RAGAS framework" },
          { id: "ai-6-12", text: "Advanced — query rewriting, HyDE, multi-query retrieval" },
          { id: "ai-6-13", text: "Graph RAG — knowledge graphs + LLMs" },
        ]
      },
      {
        title: "Agents — fundamentals",
        topics: [
          { id: "ai-7-1", text: "Read Anthropic's 'Building effective agents' (must-read)" },
          { id: "ai-7-2", text: "Tool use — defining tools, schemas, execution loops" },
          { id: "ai-7-3", text: "Memory — short-term context vs long-term storage" },
          { id: "ai-7-4", text: "Planning patterns — ReAct, Plan-and-Execute, Reflexion" },
          { id: "ai-7-5", text: "When NOT to use an agent (often a single LLM call is enough)" },
          { id: "ai-7-6", text: "Loops, termination conditions, max iterations" },
          { id: "ai-7-7", text: "Human-in-the-loop patterns" },
          { id: "ai-7-8", text: "Multi-agent architectures — orchestrator, supervisor, swarm" },
        ]
      },
      {
        title: "Agent frameworks — code-first",
        topics: [
          { id: "ai-8-1", text: "LangChain basics — chains, prompts, parsers", resource: "DeepLearning.AI short courses" },
          { id: "ai-8-2", text: "LangGraph — stateful, graph-based workflows (production #1)" },
          { id: "ai-8-3", text: "LangSmith — tracing, debugging, evaluation" },
          { id: "ai-8-4", text: "CrewAI — role-based multi-agent crews (fastest prototype)" },
          { id: "ai-8-5", text: "AutoGen / AG2 (Microsoft) — multi-agent conversations" },
          { id: "ai-8-6", text: "LlamaIndex — data framework for RAG and agents" },
          { id: "ai-8-7", text: "Claude Agent SDK — Anthropic's official framework" },
          { id: "ai-8-8", text: "OpenAI Swarm + Agents SDK" },
          { id: "ai-8-9", text: "Pydantic AI — type-safe agents in Python" },
          { id: "ai-8-10", text: "Semantic Kernel (Microsoft, .NET-friendly)" },
          { id: "ai-8-11", text: "Compare frameworks — pick one for your project, justify it" },
        ]
      },
      {
        title: "Agent frameworks — visual / no-code",
        topics: [
          { id: "ai-9-1", text: "Langflow — visual LangChain (open source)" },
          { id: "ai-9-2", text: "Flowise — visual LangChain alternative" },
          { id: "ai-9-3", text: "Build a RAG chatbot in Langflow" },
          { id: "ai-9-4", text: "Build a multi-agent flow in Flowise" },
          { id: "ai-9-5", text: "Dify — open-source LLM app platform" },
          { id: "ai-9-6", text: "Build something useful in Dify and deploy it" },
        ]
      },
      {
        title: "Workflow automation tools (huge demand)",
        topics: [
          { id: "ai-10-1", text: "n8n — fundamentals (you already know this)" },
          { id: "ai-10-2", text: "n8n — local Docker deployment" },
          { id: "ai-10-3", text: "n8n — building AI agent workflows with LLM nodes" },
          { id: "ai-10-4", text: "n8n — webhooks, HTTP nodes, custom code nodes" },
          { id: "ai-10-5", text: "n8n — error handling and retry logic" },
          { id: "ai-10-6", text: "Zapier — fundamentals and AI-powered Zaps" },
          { id: "ai-10-7", text: "Zapier — multi-step Zaps with conditional logic" },
          { id: "ai-10-8", text: "Make.com (Integromat) — visual scenario builder" },
          { id: "ai-10-9", text: "Make.com — comparison vs n8n, when to use which" },
          { id: "ai-10-10", text: "Pipedream — code-first automation platform" },
          { id: "ai-10-11", text: "Activepieces — open-source Zapier alternative" },
          { id: "ai-10-12", text: "Build one cross-tool automation: WhatsApp → LLM → Notion" },
        ]
      },
      {
        title: "MCP — Model Context Protocol (the new standard)",
        topics: [
          { id: "ai-11-1", text: "Read the MCP specification (modelcontextprotocol.io)" },
          { id: "ai-11-2", text: "Why MCP exists — agent-to-tool standardisation" },
          { id: "ai-11-3", text: "Architecture — client, server, transport (stdio, SSE)" },
          { id: "ai-11-4", text: "Build your first MCP server in Python" },
          { id: "ai-11-5", text: "Build an MCP server in TypeScript" },
          { id: "ai-11-6", text: "Connect Claude Desktop to your MCP server" },
          { id: "ai-11-7", text: "Build an MCP client in code (programmatic use)" },
          { id: "ai-11-8", text: "MCP for filesystem, web search, database access" },
          { id: "ai-11-9", text: "A2A (Agent-to-Agent) protocol — overview and use cases" },
          { id: "ai-11-10", text: "Publish an MCP server to npm or PyPI" },
        ]
      },
      {
        title: "LLM evaluation, observability, guardrails",
        topics: [
          { id: "ai-12-1", text: "Building eval sets — golden questions and answers" },
          { id: "ai-12-2", text: "LLM-as-a-judge evaluation pattern" },
          { id: "ai-12-3", text: "RAGAS for RAG evaluation" },
          { id: "ai-12-4", text: "Tracing with LangSmith" },
          { id: "ai-12-5", text: "Tracing with Langfuse (open source)" },
          { id: "ai-12-6", text: "Helicone for cost and latency monitoring" },
          { id: "ai-12-7", text: "Guardrails AI — input/output validation" },
          { id: "ai-12-8", text: "NeMo Guardrails (NVIDIA)" },
          { id: "ai-12-9", text: "Prompt injection — attacks and defences" },
          { id: "ai-12-10", text: "PII redaction with Presidio" },
          { id: "ai-12-11", text: "Content moderation — OpenAI moderation, Llama Guard" },
        ]
      },
      {
        title: "Fine-tuning & advanced model work",
        topics: [
          { id: "ai-13-1", text: "When to fine-tune vs RAG vs better prompting" },
          { id: "ai-13-2", text: "LoRA — low-rank adaptation explained" },
          { id: "ai-13-3", text: "QLoRA — quantised LoRA for cheap GPU fine-tuning" },
          { id: "ai-13-4", text: "Fine-tune a small model on Hugging Face" },
          { id: "ai-13-5", text: "Unsloth for faster open-model fine-tuning" },
          { id: "ai-13-6", text: "Axolotl — config-driven fine-tuning framework" },
          { id: "ai-13-7", text: "vLLM for high-throughput LLM serving" },
          { id: "ai-13-8", text: "TGI (Text Generation Inference) by Hugging Face" },
          { id: "ai-13-9", text: "Quantisation — int8, int4, GPTQ, AWQ" },
        ]
      },
      {
        title: "Voice & multimodal AI",
        topics: [
          { id: "ai-14-1", text: "Speech-to-text — Whisper, Deepgram" },
          { id: "ai-14-2", text: "Text-to-speech — ElevenLabs, OpenAI TTS, Cartesia" },
          { id: "ai-14-3", text: "Voice agents — Vapi, Retell, LiveKit Agents" },
          { id: "ai-14-4", text: "Vision capabilities — Claude Vision, GPT-4V, Gemini" },
          { id: "ai-14-5", text: "Build a voice-driven agent prototype" },
        ]
      },
      {
        title: "Computer-use & browser automation",
        topics: [
          { id: "ai-15-1", text: "Claude Computer Use — what it is, when to use" },
          { id: "ai-15-2", text: "Browser-use library for autonomous browsing" },
          { id: "ai-15-3", text: "Playwright basics for AI-driven browser tasks" },
          { id: "ai-15-4", text: "Stagehand — AI-native browser automation" },
          { id: "ai-15-5", text: "OpenAI Operator overview" },
        ]
      },
      {
        title: "Production deployment",
        topics: [
          { id: "ai-16-1", text: "Streaming responses, async, rate limiting" },
          { id: "ai-16-2", text: "Caching strategies — semantic cache, exact match" },
          { id: "ai-16-3", text: "Cost monitoring and budget alerts" },
          { id: "ai-16-4", text: "Docker for AI apps — multi-stage builds" },
          { id: "ai-16-5", text: "Deploy to Railway, Render, Fly.io" },
          { id: "ai-16-6", text: "Deploy to Vercel (Next.js + Vercel AI SDK)" },
          { id: "ai-16-7", text: "Modal Labs for serverless GPU workloads" },
          { id: "ai-16-8", text: "Replicate for hosted model APIs" },
          { id: "ai-16-9", text: "Authentication — Clerk or NextAuth basics" },
          { id: "ai-16-10", text: "Database — Supabase or Neon for app data" },
        ]
      },
      {
        title: "AI dev tools — go deep",
        topics: [
          { id: "ai-17-1", text: "Cursor — Cmd+K, Cmd+L, Tab, Agent mode" },
          { id: "ai-17-2", text: "Cursor — .cursorrules for project conventions" },
          { id: "ai-17-3", text: "Claude Code — terminal-based agentic coding" },
          { id: "ai-17-4", text: "Claude Code — MCP integration in your workflow" },
          { id: "ai-17-5", text: "GitHub Copilot — Chat, /commands" },
          { id: "ai-17-6", text: "Codex — OpenAI's coding agent" },
          { id: "ai-17-7", text: "Windsurf — Cursor alternative with strong agents" },
          { id: "ai-17-8", text: "v0.dev — text-to-React UI" },
          { id: "ai-17-9", text: "Bolt.new — full-stack app generator" },
          { id: "ai-17-10", text: "Lovable — alternative full-stack generator" },
          { id: "ai-17-11", text: "Replit AI for quick demos" },
        ]
      },
      {
        title: "AI system design",
        topics: [
          { id: "ai-18-1", text: "Design a customer support RAG agent", resource: "AI Engineering by Chip Huyen" },
          { id: "ai-18-2", text: "Design a multi-agent research system" },
          { id: "ai-18-3", text: "Design a code-review agent" },
          { id: "ai-18-4", text: "Design a voice agent for restaurant booking" },
          { id: "ai-18-5", text: "Design a long-running autonomous agent with checkpointing" },
          { id: "ai-18-6", text: "Practice 5 mock AI system design interviews" },
        ]
      },
      {
        title: "Interview prep & job hunt",
        topics: [
          { id: "ai-19-1", text: "Polish LinkedIn for AI Engineer keywords" },
          { id: "ai-19-2", text: "100 LeetCode easy in Python" },
          { id: "ai-19-3", text: "30 LeetCode medium" },
          { id: "ai-19-4", text: "10 STAR stories from BridgeThings + OnTimeLondon" },
          { id: "ai-19-5", text: "Read 15 real AI Engineer JDs (Anthropic, OpenAI, Cohere, scale-ups)" },
          { id: "ai-19-6", text: "5 mock interviews — coding + AI system design" },
          { id: "ai-19-7", text: "Apply to 10 AI roles per week" },
          { id: "ai-19-8", text: "Cold-message 5 AI Engineers per week for chats" },
        ]
      },
      {
        title: "🚀 PROJECT — Multi-Agent Research Assistant with MCP",
        isProject: true,
        topics: [
          { id: "ai-p-1", text: "Define use case — what kind of questions will it answer?" },
          { id: "ai-p-2", text: "Design architecture — Planner, Retrievers, Synthesiser, Verifier" },
          { id: "ai-p-3", text: "Build LangGraph orchestration scaffold" },
          { id: "ai-p-4", text: "Build MCP server for web search (Brave / Tavily)" },
          { id: "ai-p-5", text: "Build MCP server for academic search (arXiv / Semantic Scholar)" },
          { id: "ai-p-6", text: "Build MCP server for personal notes via pgvector" },
          { id: "ai-p-7", text: "Add Claude API integration with tool use" },
          { id: "ai-p-8", text: "Add citation enforcement and verifier agent" },
          { id: "ai-p-9", text: "Build Streamlit / Next.js front-end" },
          { id: "ai-p-10", text: "Set up LangSmith tracing + RAGAS eval suite (30+ tests)" },
          { id: "ai-p-11", text: "Containerise with Docker, deploy to Railway / Render" },
          { id: "ai-p-12", text: "Write blog post about MCP + record demo video" },
          { id: "ai-p-13", text: "Publish your MCP servers to npm/PyPI" },
        ]
      },
    ]
  },
};

const QUOTES = [
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Compound interest is the eighth wonder of the world. He who understands it, earns it.", author: "Albert Einstein" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Tiny gains every day compound into impossible-looking results.", author: "James Clear" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "If you're not making someone else's life better, you're wasting your time.", author: "Will Smith" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
  { text: "What we know is a drop, what we don't know is an ocean.", author: "Isaac Newton" },
  { text: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell" },
  { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
  { text: "Your limitation — it's only your imagination.", author: "Anonymous" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { text: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "David Goggins" },
  { text: "The only person you should try to be better than is the person you were yesterday.", author: "Anonymous" },
  { text: "Skill is built quietly. Show up daily.", author: "Anonymous" },
  { text: "You're not behind. You're on your own timeline.", author: "Anonymous" },
  { text: "Build in silence. Let your results make the noise.", author: "Anonymous" },
];

// Export to global window scope for the app to use
window.CURRICULUM = CURRICULUM;
window.QUOTES = QUOTES;
