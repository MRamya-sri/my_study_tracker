/* ============================================================
   curriculum.js — Comprehensive 4-track curriculum
   AI Engineer track now has dedicated sections for:
   NLP, RL, Agentic AI fundamentals, Agents building,
   Vectors/Embeddings/Vector DBs, Automation & Business,
   5 Big Automation Projects, Latest AI Tools, Models Deep-Dive,
   Recommendation Systems also added to ML/DS tracks.
   ============================================================ */

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
        title: "Recommendation systems (DS perspective)",
        topics: [
          { id: "ds-11-1", text: "Why recommenders matter — Netflix, Amazon, Spotify" },
          { id: "ds-11-2", text: "Content-based filtering — feature similarity" },
          { id: "ds-11-3", text: "Collaborative filtering — user-based vs item-based" },
          { id: "ds-11-4", text: "Memory-based vs model-based CF" },
          { id: "ds-11-5", text: "Matrix factorisation — SVD, ALS" },
          { id: "ds-11-6", text: "Hybrid recommenders — combining content + CF" },
          { id: "ds-11-7", text: "Cold-start problem — strategies for new users/items" },
          { id: "ds-11-8", text: "Evaluation — precision@k, recall@k, NDCG, MAP" },
          { id: "ds-11-9", text: "Build a movie recommender on MovieLens" },
        ]
      },
      {
        title: "Visualisation & dashboarding",
        topics: [
          { id: "ds-12-1", text: "Matplotlib — figure, axes, plot types" },
          { id: "ds-12-2", text: "Seaborn — distplot, heatmap, pairplot" },
          { id: "ds-12-3", text: "Plotly for interactive charts" },
          { id: "ds-12-4", text: "Streamlit — turn a notebook into a web app" },
          { id: "ds-12-5", text: "Power BI basics for stakeholder dashboards" },
        ]
      },
      {
        title: "GenAI for data scientists",
        topics: [
          { id: "ds-13-1", text: "Using LLMs to draft EDA summaries" },
          { id: "ds-13-2", text: "LLM-generated synthetic data for prototyping" },
          { id: "ds-13-3", text: "Calling Claude / OpenAI APIs for feature ideation" },
          { id: "ds-13-4", text: "Embeddings for semantic clustering of customer behaviour" },
          { id: "ds-13-5", text: "Building a basic RAG over your project docs" },
        ]
      },
      {
        title: "AI dev tools (use these daily)",
        topics: [
          { id: "ds-14-1", text: "Cursor — AI-powered code editor" },
          { id: "ds-14-2", text: "Claude Code — terminal agent for editing files" },
          { id: "ds-14-3", text: "GitHub Copilot in Jupyter and VS Code" },
          { id: "ds-14-4", text: "Using AI to debug failing tests and unclear errors" },
        ]
      },
      {
        title: "Interview prep",
        topics: [
          { id: "ds-15-1", text: "50 ML conceptual questions", resource: "Ace the Data Science Interview" },
          { id: "ds-15-2", text: "30 statistics quick-fire questions, written answers" },
          { id: "ds-15-3", text: "10 product DS case studies" },
          { id: "ds-15-4", text: "60 SQL problems on DataLemur (mixed difficulty)" },
          { id: "ds-15-5", text: "10 STAR stories from your projects" },
          { id: "ds-15-6", text: "5 mock interviews on Pramp or with peers" },
          { id: "ds-15-7", text: "Polish LinkedIn for DS keywords, apply 8/week" },
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
    duration: "~20 weeks from scratch",
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
        title: "Reinforcement Learning",
        topics: [
          { id: "ml-9-1", text: "What RL is — agent, environment, reward, policy" },
          { id: "ml-9-2", text: "Markov Decision Processes (MDPs)", resource: "Sutton & Barto — RL: An Introduction (free PDF)" },
          { id: "ml-9-3", text: "Value functions — V(s), Q(s,a)" },
          { id: "ml-9-4", text: "Bellman equations" },
          { id: "ml-9-5", text: "Dynamic programming — value iteration, policy iteration" },
          { id: "ml-9-6", text: "Monte Carlo methods" },
          { id: "ml-9-7", text: "Temporal Difference (TD) learning" },
          { id: "ml-9-8", text: "Q-Learning — off-policy TD" },
          { id: "ml-9-9", text: "SARSA — on-policy TD" },
          { id: "ml-9-10", text: "Epsilon-Greedy and exploration vs exploitation" },
          { id: "ml-9-11", text: "Deep Q-Networks (DQN)" },
          { id: "ml-9-12", text: "Policy gradient methods (REINFORCE)" },
          { id: "ml-9-13", text: "Actor-Critic methods" },
          { id: "ml-9-14", text: "PPO (Proximal Policy Optimization)" },
          { id: "ml-9-15", text: "OpenAI Gymnasium environments" },
          { id: "ml-9-16", text: "Stable-Baselines3 library" },
          { id: "ml-9-17", text: "Train an agent to solve CartPole, then LunarLander" },
        ]
      },
      {
        title: "Recommendation systems (deep dive)",
        topics: [
          { id: "ml-10-1", text: "Content-based filtering — feature engineering for items" },
          { id: "ml-10-2", text: "User-based collaborative filtering — cosine similarity, Pearson" },
          { id: "ml-10-3", text: "Item-based collaborative filtering" },
          { id: "ml-10-4", text: "Memory-based vs model-based CF" },
          { id: "ml-10-5", text: "Matrix Factorisation — SVD, FunkSVD" },
          { id: "ml-10-6", text: "Alternating Least Squares (ALS) for implicit feedback" },
          { id: "ml-10-7", text: "Hybrid recommenders" },
          { id: "ml-10-8", text: "Neural Collaborative Filtering (NCF)" },
          { id: "ml-10-9", text: "Wide & Deep model (Google)" },
          { id: "ml-10-10", text: "Deep & Cross Networks" },
          { id: "ml-10-11", text: "Item2Vec / Word2Vec for items" },
          { id: "ml-10-12", text: "Two-tower architectures (YouTube DNN)" },
          { id: "ml-10-13", text: "MLP-based recommenders" },
          { id: "ml-10-14", text: "CNN-based recommenders (for images / text features)" },
          { id: "ml-10-15", text: "RNN / GRU4Rec for session-based recommendations" },
          { id: "ml-10-16", text: "Graph Neural Networks (GNN) for recommendation" },
          { id: "ml-10-17", text: "Autoencoder-based recommenders" },
          { id: "ml-10-18", text: "Restricted Boltzmann Machines (RBM) for CF (historical)" },
          { id: "ml-10-19", text: "GAN-based recommenders" },
          { id: "ml-10-20", text: "Sequential & session-based recommendation patterns" },
          { id: "ml-10-21", text: "Cold-start strategies — content fallback, multi-armed bandits" },
          { id: "ml-10-22", text: "Evaluation — precision@k, recall@k, NDCG, MAP, hit rate" },
          { id: "ml-10-23", text: "Candidate generation vs ranking architecture" },
          { id: "ml-10-24", text: "Build a real recommender on MovieLens or Spotify dataset" },
        ]
      },
      {
        title: "Model deployment basics",
        topics: [
          { id: "ml-11-1", text: "Flask vs FastAPI — REST API for ML" },
          { id: "ml-11-2", text: "Wrap a trained model in a FastAPI endpoint" },
          { id: "ml-11-3", text: "Pydantic for request/response validation" },
          { id: "ml-11-4", text: "Streaming responses, async endpoints" },
          { id: "ml-11-5", text: "Gunicorn / Uvicorn workers" },
          { id: "ml-11-6", text: "BentoML for production model serving" },
          { id: "ml-11-7", text: "TorchServe and Triton Inference Server" },
          { id: "ml-11-8", text: "ONNX — exporting models for cross-framework inference" },
        ]
      },
      {
        title: "Docker & containerisation",
        topics: [
          { id: "ml-12-1", text: "Docker concepts — image, container, Dockerfile" },
          { id: "ml-12-2", text: "Write a Dockerfile for a Python ML app" },
          { id: "ml-12-3", text: "Multi-stage builds, slim images" },
          { id: "ml-12-4", text: "docker-compose for multi-service apps" },
          { id: "ml-12-5", text: "Push to Docker Hub / GitHub Container Registry" },
          { id: "ml-12-6", text: "GPU containers — nvidia-docker basics" },
        ]
      },
      {
        title: "MLOps essentials",
        topics: [
          { id: "ml-13-1", text: "MLflow — runs, params, artefacts, registry", resource: "Designing ML Systems by Chip Huyen" },
          { id: "ml-13-2", text: "Weights & Biases — alternative experiment tracker" },
          { id: "ml-13-3", text: "DVC for data versioning" },
          { id: "ml-13-4", text: "Reproducibility — seeds, configs, Hydra" },
          { id: "ml-13-5", text: "Drift detection with Evidently AI" },
          { id: "ml-13-6", text: "CI/CD for ML — GitHub Actions for retraining" },
          { id: "ml-13-7", text: "Pipeline orchestration — Airflow basics" },
          { id: "ml-13-8", text: "Pipeline orchestration — Prefect basics" },
          { id: "ml-13-9", text: "Feature stores — Feast (overview)" },
          { id: "ml-13-10", text: "Made With ML walkthrough", resource: "madewithml.com (free)" },
        ]
      },
      {
        title: "Cloud ML — pick AWS or GCP",
        topics: [
          { id: "ml-14-1", text: "AWS basics — IAM, S3, EC2, Lambda" },
          { id: "ml-14-2", text: "AWS SageMaker — train, deploy, endpoints", resource: "AWS SageMaker Immersion Day (free)" },
          { id: "ml-14-3", text: "Or GCP Vertex AI alternative path" },
          { id: "ml-14-4", text: "Cost monitoring — avoid surprise bills" },
          { id: "ml-14-5", text: "Terraform basics for infra-as-code (overview)" },
        ]
      },
      {
        title: "Kubernetes & orchestration",
        topics: [
          { id: "ml-15-1", text: "Kubernetes concepts — pods, deployments, services" },
          { id: "ml-15-2", text: "Minikube or Docker Desktop K8s for local practice" },
          { id: "ml-15-3", text: "Deploy a model service to a local cluster" },
          { id: "ml-15-4", text: "Kubeflow for ML on Kubernetes (overview)" },
          { id: "ml-15-5", text: "Ray for distributed training and serving" },
          { id: "ml-15-6", text: "When K8s vs simpler options (ECS, Cloud Run)" },
        ]
      },
      {
        title: "Streaming & real-time ML",
        topics: [
          { id: "ml-16-1", text: "Kafka basics — producer, consumer, topics" },
          { id: "ml-16-2", text: "Redis Streams as a lightweight alternative" },
          { id: "ml-16-3", text: "Real-time feature pipelines" },
          { id: "ml-16-4", text: "Online learning concepts" },
        ]
      },
      {
        title: "LLMOps (emerging — high signal)",
        topics: [
          { id: "ml-17-1", text: "vLLM for high-throughput LLM serving" },
          { id: "ml-17-2", text: "SGLang for structured generation" },
          { id: "ml-17-3", text: "Text Generation Inference (TGI) by Hugging Face" },
          { id: "ml-17-4", text: "LoRA, QLoRA — parameter-efficient fine-tuning" },
          { id: "ml-17-5", text: "Quantisation — int8, GPTQ, AWQ, Q4_K_M" },
          { id: "ml-17-6", text: "Eval harnesses for LLMs (lm-evaluation-harness)" },
        ]
      },
      {
        title: "ML system design",
        topics: [
          { id: "ml-18-1", text: "Design a recommender system end-to-end", resource: "ML System Design Interview by Aminian" },
          { id: "ml-18-2", text: "Design a fraud detection system" },
          { id: "ml-18-3", text: "Design a search ranking system" },
          { id: "ml-18-4", text: "Design a real-time bidding system" },
          { id: "ml-18-5", text: "Practice 10 mock system designs on paper" },
        ]
      },
      {
        title: "AI dev tools",
        topics: [
          { id: "ml-19-1", text: "Cursor for AI-paired coding" },
          { id: "ml-19-2", text: "Claude Code for multi-file edits and refactors" },
          { id: "ml-19-3", text: "GitHub Copilot in VS Code" },
          { id: "ml-19-4", text: "Using AI to debug Docker and K8s YAML" },
        ]
      },
      {
        title: "Interview prep",
        topics: [
          { id: "ml-20-1", text: "100 LeetCode easy in Python" },
          { id: "ml-20-2", text: "50 LeetCode medium (trees, graphs, basic DP)" },
          { id: "ml-20-3", text: "ML conceptual deep-dives — derive gradient descent" },
          { id: "ml-20-4", text: "5 ML system design mocks" },
          { id: "ml-20-5", text: "Behavioural — STAR stories tied to deployments" },
          { id: "ml-20-6", text: "Apply to 5 MLE roles per week" },
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
    tagline: "LLMs, NLP, RL, agents, automation, MCP",
    accent: "#993556",
    accentSoft: "#D4537E",
    duration: "~26 weeks from scratch (the deepest track)",
    description: "Fastest-growing tech role — 143% YoY growth in early 2026. The bar shifted from 'I can call an API' to 'I ship agentic systems with eval, observability, guardrails, and automation pipelines'. Heaviest depth — covers everything from LLM theory through MCP, vector DBs, agents, automation tools, and 5 production-grade business projects.",
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
          { id: "ai-0-9", text: "Together AI / Groq / Fireworks for fast open-model inference" },
          { id: "ai-0-10", text: "Hugging Face account + token" },
          { id: "ai-0-11", text: "Pinecone, Weaviate, or Qdrant cloud free tier" },
          { id: "ai-0-12", text: "Supabase free tier (Postgres + pgvector)" },
          { id: "ai-0-13", text: "LangSmith account (free tier for tracing)" },
          { id: "ai-0-14", text: "Langfuse account (open-source alternative)" },
          { id: "ai-0-15", text: "Vercel + Railway accounts (deployment)" },
          { id: "ai-0-16", text: "Install Ollama for running local LLMs" },
          { id: "ai-0-17", text: "Install LM Studio (local model playground)" },
          { id: "ai-0-18", text: "Install n8n locally via Docker" },
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
        title: "Maths & ML refresher (just enough)",
        topics: [
          { id: "ai-4-1", text: "Linear algebra — vectors, dot product, cosine similarity", resource: "3Blue1Brown" },
          { id: "ai-4-2", text: "Probability and softmax intuition" },
          { id: "ai-4-3", text: "Gradient descent — what fine-tuning actually does" },
          { id: "ai-4-4", text: "Cross-entropy loss intuition" },
          { id: "ai-4-5", text: "Neural network forward pass walkthrough" },
          { id: "ai-4-6", text: "Backpropagation intuition (no need to derive)" },
        ]
      },
      {
        title: "NLP fundamentals",
        topics: [
          { id: "ai-5-1", text: "What NLP is — text as data, the pipeline", resource: "Speech and Language Processing by Jurafsky (free draft)" },
          { id: "ai-5-2", text: "Tokenization — word, subword, BPE, WordPiece, SentencePiece" },
          { id: "ai-5-3", text: "Stop words, stemming, lemmatization" },
          { id: "ai-5-4", text: "Part-of-Speech (POS) tagging" },
          { id: "ai-5-5", text: "Named Entity Recognition (NER)" },
          { id: "ai-5-6", text: "Bag of Words, TF-IDF representations" },
          { id: "ai-5-7", text: "Word embeddings — Word2Vec, GloVe, FastText" },
          { id: "ai-5-8", text: "spaCy library — NER, dependency parsing, pipelines" },
          { id: "ai-5-9", text: "NLTK library — text processing utilities" },
          { id: "ai-5-10", text: "Sentiment analysis — lexicon vs ML approaches" },
          { id: "ai-5-11", text: "Text classification with scikit-learn + TF-IDF" },
          { id: "ai-5-12", text: "Sequence-to-sequence basics — translation, summarization" },
          { id: "ai-5-13", text: "Attention mechanism intuition" },
          { id: "ai-5-14", text: "Transformer architecture deep-dive" },
          { id: "ai-5-15", text: "BERT and encoder models — when to use" },
          { id: "ai-5-16", text: "GPT-style decoder models — when to use" },
          { id: "ai-5-17", text: "Encoder-decoder (T5, BART) — when to use" },
          { id: "ai-5-18", text: "Hugging Face Transformers — pretrained models", resource: "Hugging Face course (free)" },
          { id: "ai-5-19", text: "Fine-tune a BERT model for classification" },
          { id: "ai-5-20", text: "Text summarization — extractive vs abstractive" },
          { id: "ai-5-21", text: "Question answering systems" },
          { id: "ai-5-22", text: "Topic modelling — LDA, BERTopic" },
        ]
      },
      {
        title: "Reinforcement Learning",
        topics: [
          { id: "ai-6-1", text: "RL fundamentals — agent, environment, reward, policy", resource: "Sutton & Barto — RL: An Introduction (free)" },
          { id: "ai-6-2", text: "Markov Decision Processes (MDPs)" },
          { id: "ai-6-3", text: "Value functions V(s) and Q(s,a)" },
          { id: "ai-6-4", text: "Bellman equations" },
          { id: "ai-6-5", text: "Dynamic programming — value & policy iteration" },
          { id: "ai-6-6", text: "Monte Carlo and Temporal Difference learning" },
          { id: "ai-6-7", text: "Q-Learning and SARSA" },
          { id: "ai-6-8", text: "Epsilon-Greedy exploration" },
          { id: "ai-6-9", text: "Deep Q-Networks (DQN)" },
          { id: "ai-6-10", text: "Policy gradient — REINFORCE" },
          { id: "ai-6-11", text: "Actor-Critic methods (A2C, A3C)" },
          { id: "ai-6-12", text: "PPO (Proximal Policy Optimization)" },
          { id: "ai-6-13", text: "RLHF (Reinforcement Learning from Human Feedback)" },
          { id: "ai-6-14", text: "DPO (Direct Preference Optimization) — simpler than RLHF" },
          { id: "ai-6-15", text: "OpenAI Gymnasium environments" },
          { id: "ai-6-16", text: "Stable-Baselines3 library" },
          { id: "ai-6-17", text: "Train an agent on CartPole then LunarLander" },
        ]
      },
      {
        title: "LLM fundamentals",
        topics: [
          { id: "ai-7-1", text: "What an LLM actually is — tokens, context, sampling", resource: "Hands-On Large Language Models by Jay Alammar" },
          { id: "ai-7-2", text: "Tokenisation — BPE, why token costs matter" },
          { id: "ai-7-3", text: "Temperature, top-p, top-k, repetition penalty" },
          { id: "ai-7-4", text: "Major model families — Claude, GPT, Gemini, Llama, Qwen, DeepSeek, Mistral, Kimi" },
          { id: "ai-7-5", text: "Calling APIs — Anthropic, OpenAI, Gemini SDK basics" },
          { id: "ai-7-6", text: "OpenRouter for cheap multi-model experimentation" },
          { id: "ai-7-7", text: "Cost and latency awareness — input vs output tokens" },
          { id: "ai-7-8", text: "Context window management strategies" },
          { id: "ai-7-9", text: "Prompt caching to cut costs (Anthropic, OpenAI)" },
          { id: "ai-7-10", text: "Streaming responses — SSE basics" },
          { id: "ai-7-11", text: "Tool use / function calling" },
          { id: "ai-7-12", text: "Structured output — JSON mode, Pydantic, schemas" },
        ]
      },
      {
        title: "Models deep-dive — why architectures and parameters matter",
        topics: [
          { id: "ai-8-1", text: "What 'parameters' actually are — weights in matrices" },
          { id: "ai-8-2", text: "Why 70B beats 7B — capacity to memorise patterns" },
          { id: "ai-8-3", text: "Diminishing returns — when bigger stops mattering" },
          { id: "ai-8-4", text: "Dense vs Mixture-of-Experts (MoE) — Kimi K2.6, Mixtral" },
          { id: "ai-8-5", text: "Active vs total parameters in MoE (e.g. 1T total / 32B active)" },
          { id: "ai-8-6", text: "Context window vs parameter count — different axes" },
          { id: "ai-8-7", text: "Attention variants — MHA, GQA, MLA (Multi-head Latent Attention)" },
          { id: "ai-8-8", text: "How long-context models work — sliding window, ring attention" },
          { id: "ai-8-9", text: "Multimodal models — vision encoders attached to LLMs" },
          { id: "ai-8-10", text: "Reasoning models vs base models — what 'thinking' means" },
          { id: "ai-8-11", text: "Quantisation explained — what bit-width does to a model" },
          { id: "ai-8-12", text: "FP16 vs BF16 vs INT8 vs INT4 — accuracy tradeoffs" },
          { id: "ai-8-13", text: "GGUF format — what it is, how llama.cpp uses it" },
          { id: "ai-8-14", text: "Q4_K_M, Q5_K_M, Q6_K, Q8_0 — Ollama quantisation tags" },
          { id: "ai-8-15", text: "GPTQ, AWQ — alternative quantisation methods" },
          { id: "ai-8-16", text: "VRAM requirements — 8GB for 7B, 24GB for 30B, 40GB+ for 70B" },
          { id: "ai-8-17", text: "Apple Silicon unified memory — viable for mid-size models" },
          { id: "ai-8-18", text: "Top open-weight models 2026 — Llama 3.3, Qwen 2.5, DeepSeek V3, Kimi K2.6, GLM-4.7, MiMo" },
          { id: "ai-8-19", text: "Top closed leaders — Claude Opus, GPT-5, Gemini 3 Pro" },
          { id: "ai-8-20", text: "Best for coding — GLM-4.7 Thinking, Qwen2.5-Coder, DeepSeek Coder V2" },
          { id: "ai-8-21", text: "Reading benchmarks — MMLU, GPQA, AIME, SWE-bench, LiveCodeBench" },
          { id: "ai-8-22", text: "Vellum / WhatLLM / LLM-Stats leaderboards" },
        ]
      },
      {
        title: "Local LLMs — Ollama and beyond",
        topics: [
          { id: "ai-9-1", text: "Ollama install and CLI basics" },
          { id: "ai-9-2", text: "ollama pull <model> — what gets downloaded" },
          { id: "ai-9-3", text: "Choosing model size for your hardware" },
          { id: "ai-9-4", text: "Modelfiles — customising system prompts and parameters" },
          { id: "ai-9-5", text: "Running Llama 3.3 8B locally" },
          { id: "ai-9-6", text: "Running Qwen 2.5 Coder for local coding help" },
          { id: "ai-9-7", text: "Ollama API — building apps against local models" },
          { id: "ai-9-8", text: "LM Studio for GUI experience" },
          { id: "ai-9-9", text: "llama.cpp directly — for custom builds and CPU inference" },
          { id: "ai-9-10", text: "Continue.dev — VS Code extension using local models" },
          { id: "ai-9-11", text: "Open WebUI — ChatGPT-like UI for local models" },
          { id: "ai-9-12", text: "When local LLMs make sense (privacy, offline, cost)" },
        ]
      },
      {
        title: "Prompt engineering — depth",
        topics: [
          { id: "ai-10-1", text: "Zero-shot, few-shot prompting" },
          { id: "ai-10-2", text: "Chain-of-Thought (CoT) prompting" },
          { id: "ai-10-3", text: "ReAct pattern — reasoning + acting" },
          { id: "ai-10-4", text: "Tree-of-thoughts and self-consistency" },
          { id: "ai-10-5", text: "System prompts vs user prompts vs assistant prefill" },
          { id: "ai-10-6", text: "Structured output — JSON mode, Pydantic, tool use" },
          { id: "ai-10-7", text: "XML tags and structured prompting (Anthropic style)" },
          { id: "ai-10-8", text: "Prompt evaluation — what 'better' actually means" },
          { id: "ai-10-9", text: "Constitutional AI / safety prompting" },
          { id: "ai-10-10", text: "Read Anthropic's prompt engineering docs end-to-end" },
        ]
      },
      {
        title: "Vectors, embeddings, and vector databases",
        topics: [
          { id: "ai-11-1", text: "What vectors are — points in high-dimensional space" },
          { id: "ai-11-2", text: "What embeddings are — numerical fingerprints of meaning" },
          { id: "ai-11-3", text: "Why embeddings cluster similar things together" },
          { id: "ai-11-4", text: "Cosine similarity vs Euclidean vs dot product" },
          { id: "ai-11-5", text: "Dimensionality — why 1536 or 3072 dims?" },
          { id: "ai-11-6", text: "Embedding models — OpenAI text-embedding-3, Cohere, BGE, E5" },
          { id: "ai-11-7", text: "Comparing embedding models — MTEB leaderboard" },
          { id: "ai-11-8", text: "Computing embeddings via API" },
          { id: "ai-11-9", text: "Computing embeddings locally (sentence-transformers)" },
          { id: "ai-11-10", text: "ANN (approximate nearest neighbour) — why it's necessary" },
          { id: "ai-11-11", text: "HNSW (Hierarchical Navigable Small Worlds) — most common ANN" },
          { id: "ai-11-12", text: "IVF (Inverted File) indexes" },
          { id: "ai-11-13", text: "Product Quantisation for embedding compression" },
          { id: "ai-11-14", text: "Pinecone — managed vector DB, hands-on tutorial" },
          { id: "ai-11-15", text: "Weaviate — open-source vector DB with hybrid search" },
          { id: "ai-11-16", text: "Qdrant — Rust-based, fast vector DB" },
          { id: "ai-11-17", text: "Chroma — embedded vector DB for local dev" },
          { id: "ai-11-18", text: "Milvus — production-scale vector DB" },
          { id: "ai-11-19", text: "pgvector — Postgres extension (Supabase uses this)" },
          { id: "ai-11-20", text: "Redis as vector store" },
          { id: "ai-11-21", text: "Choosing a vector DB — managed vs self-hosted, scale, cost" },
          { id: "ai-11-22", text: "Hybrid search — BM25 + vector combined" },
          { id: "ai-11-23", text: "Re-ranking with Cohere Rerank or cross-encoders" },
          { id: "ai-11-24", text: "Metadata filtering alongside vector search" },
          { id: "ai-11-25", text: "Multi-modal embeddings (CLIP for images + text)" },
        ]
      },
      {
        title: "RAG — Retrieval Augmented Generation",
        topics: [
          { id: "ai-12-1", text: "Why RAG — hallucinations, fresh data, citations" },
          { id: "ai-12-2", text: "RAG vs fine-tuning — when to choose which" },
          { id: "ai-12-3", text: "Chunking strategies — fixed, recursive, semantic" },
          { id: "ai-12-4", text: "Document-aware chunking (preserve structure)" },
          { id: "ai-12-5", text: "Indexing pipeline — load, chunk, embed, store" },
          { id: "ai-12-6", text: "Retrieval pipeline — query, embed, search, re-rank" },
          { id: "ai-12-7", text: "Build a basic RAG over PDFs" },
          { id: "ai-12-8", text: "Citations and source attribution in answers" },
          { id: "ai-12-9", text: "RAG evaluation — RAGAS framework" },
          { id: "ai-12-10", text: "Query rewriting and expansion" },
          { id: "ai-12-11", text: "HyDE (Hypothetical Document Embeddings)" },
          { id: "ai-12-12", text: "Multi-query retrieval" },
          { id: "ai-12-13", text: "Parent-document retrieval" },
          { id: "ai-12-14", text: "Self-query retrievers (LLM extracts metadata filters)" },
          { id: "ai-12-15", text: "Graph RAG — knowledge graphs + LLMs (Neo4j, LightRAG)" },
          { id: "ai-12-16", text: "Agentic RAG — agent decides what to retrieve" },
        ]
      },
      {
        title: "Agentic AI — fundamentals & theory",
        topics: [
          { id: "ai-13-1", text: "What an AI agent actually is — autonomous goal-pursuer" },
          { id: "ai-13-2", text: "Agent vs assistant vs workflow — definitions" },
          { id: "ai-13-3", text: "Read Anthropic's 'Building effective agents'" },
          { id: "ai-13-4", text: "Levels of autonomy — L0 (manual) → L5 (full auto)" },
          { id: "ai-13-5", text: "Reasoning + Acting (ReAct) cycle" },
          { id: "ai-13-6", text: "Plan-and-Execute pattern" },
          { id: "ai-13-7", text: "Reflexion — self-critique + retry" },
          { id: "ai-13-8", text: "Tree-of-thought — explore multiple plans" },
          { id: "ai-13-9", text: "Memory — short-term context, long-term storage, episodic" },
          { id: "ai-13-10", text: "Termination conditions — when does an agent stop?" },
          { id: "ai-13-11", text: "Human-in-the-loop checkpoints" },
          { id: "ai-13-12", text: "Multi-agent architectures — orchestrator, supervisor, swarm" },
          { id: "ai-13-13", text: "When NOT to use an agent (often a single LLM call is enough)" },
          { id: "ai-13-14", text: "Cost and reliability tradeoffs of agents" },
          { id: "ai-13-15", text: "Failure modes — loops, hallucination, over-confidence" },
        ]
      },
      {
        title: "AI Agents — building with frameworks",
        topics: [
          { id: "ai-14-1", text: "Tool use — defining tools, schemas, execution loops" },
          { id: "ai-14-2", text: "LangChain basics — chains, prompts, parsers", resource: "DeepLearning.AI short courses" },
          { id: "ai-14-3", text: "LangGraph — stateful, graph-based workflows (production #1)" },
          { id: "ai-14-4", text: "LangSmith — tracing, debugging, evaluation" },
          { id: "ai-14-5", text: "CrewAI — role-based multi-agent crews (fastest prototype)" },
          { id: "ai-14-6", text: "AutoGen / AG2 (Microsoft) — multi-agent conversations" },
          { id: "ai-14-7", text: "LlamaIndex — data framework for RAG and agents" },
          { id: "ai-14-8", text: "Claude Agent SDK — Anthropic's official framework (powers Claude Code)" },
          { id: "ai-14-9", text: "OpenAI Agents SDK + Swarm" },
          { id: "ai-14-10", text: "Pydantic AI — type-safe agents in Python" },
          { id: "ai-14-11", text: "Semantic Kernel (Microsoft, .NET-friendly)" },
          { id: "ai-14-12", text: "Smolagents (Hugging Face) — code-writing agents" },
          { id: "ai-14-13", text: "Agno — high-performance multi-modal agent runtime" },
          { id: "ai-14-14", text: "Build a research agent with LangGraph" },
          { id: "ai-14-15", text: "Build a multi-role crew with CrewAI (researcher → writer → reviewer)" },
          { id: "ai-14-16", text: "Compare frameworks — pick one for your project, justify it" },
        ]
      },
      {
        title: "AI Agents — visual / no-code builders",
        topics: [
          { id: "ai-15-1", text: "Langflow — visual LangChain (open source)" },
          { id: "ai-15-2", text: "Flowise — visual LangChain alternative" },
          { id: "ai-15-3", text: "Build a RAG chatbot in Langflow" },
          { id: "ai-15-4", text: "Build a multi-agent flow in Flowise" },
          { id: "ai-15-5", text: "Dify — open-source LLM app platform" },
          { id: "ai-15-6", text: "Vellum — AI-first agent builder with eval baked in" },
          { id: "ai-15-7", text: "Lindy — template-driven agent automation" },
          { id: "ai-15-8", text: "Build something useful in Dify and deploy it" },
        ]
      },
      {
        title: "MCP — Model Context Protocol (the new standard)",
        topics: [
          { id: "ai-16-1", text: "Read the MCP specification (modelcontextprotocol.io)" },
          { id: "ai-16-2", text: "Why MCP exists — standardised agent-to-tool communication" },
          { id: "ai-16-3", text: "Donated to Linux Foundation Dec 2025 — now industry standard" },
          { id: "ai-16-4", text: "Architecture — client, server, transport (stdio, SSE, HTTP)" },
          { id: "ai-16-5", text: "Build your first MCP server in Python" },
          { id: "ai-16-6", text: "Build an MCP server in TypeScript" },
          { id: "ai-16-7", text: "Connect Claude Desktop to your MCP server" },
          { id: "ai-16-8", text: "Build an MCP client in code (programmatic use)" },
          { id: "ai-16-9", text: "MCP for filesystem, web search, database access" },
          { id: "ai-16-10", text: "MCP server registry and ecosystem (75+ official connectors)" },
          { id: "ai-16-11", text: "A2A (Agent-to-Agent) protocol — Google's standard, 150+ orgs" },
          { id: "ai-16-12", text: "Composio — agent integration layer (10,000+ actions)" },
          { id: "ai-16-13", text: "StackOne for enterprise agent integrations" },
          { id: "ai-16-14", text: "Publish an MCP server to npm or PyPI" },
        ]
      },
      {
        title: "Automation & Business Solutions",
        topics: [
          { id: "ai-17-1", text: "n8n — fundamentals (you already know this)" },
          { id: "ai-17-2", text: "n8n — local Docker deployment" },
          { id: "ai-17-3", text: "n8n — AI Agent node and LangChain integration" },
          { id: "ai-17-4", text: "n8n — webhooks, HTTP nodes, custom code nodes" },
          { id: "ai-17-5", text: "n8n — error handling, retries, queue mode" },
          { id: "ai-17-6", text: "n8n — building MCP servers from workflows" },
          { id: "ai-17-7", text: "n8n — multi-agent orchestrator pattern" },
          { id: "ai-17-8", text: "Zapier — fundamentals (8,000+ integrations)" },
          { id: "ai-17-9", text: "Zapier — multi-step Zaps with conditional logic" },
          { id: "ai-17-10", text: "Zapier Copilot for AI-built workflows" },
          { id: "ai-17-11", text: "Zapier Agents add-on" },
          { id: "ai-17-12", text: "Make.com (formerly Integromat) — visual scenario builder" },
          { id: "ai-17-13", text: "Make Maia AI assistant (natural language to scenario)" },
          { id: "ai-17-14", text: "Make AI Agents (Oct 2025 release)" },
          { id: "ai-17-15", text: "Pipedream — code-first developer automation" },
          { id: "ai-17-16", text: "Pabbly Connect — budget Zapier alternative" },
          { id: "ai-17-17", text: "Activepieces — open-source Zapier alternative" },
          { id: "ai-17-18", text: "Power Automate — Microsoft ecosystem (RPA + cloud flows)" },
          { id: "ai-17-19", text: "Workato — enterprise iPaaS" },
          { id: "ai-17-20", text: "Lindy AI — template agents for sales/ops" },
          { id: "ai-17-21", text: "Gumloop — enterprise observability via Gumstack" },
          { id: "ai-17-22", text: "Bardeen — browser automation for tab-based work" },
          { id: "ai-17-23", text: "AirOps — sales/marketing-focused agents" },
          { id: "ai-17-24", text: "ChatGPT Agent Builder for paid subscribers" },
          { id: "ai-17-25", text: "Claude Cowork — fastest non-technical starting point" },
          { id: "ai-17-26", text: "When to choose which — decision framework" },
          { id: "ai-17-27", text: "Compose a real cross-tool flow: WhatsApp → LLM → Notion → Slack" },
        ]
      },
      {
        title: "🚀 5 BIG Automation & Business Project Ideas",
        isProject: true,
        topics: [
          { id: "ai-bp-1-1", text: "PROJECT 1: Multi-channel customer support agent (Email + WhatsApp + Slack → triage → KB lookup → reply or escalate). Stack: n8n + RAG + Claude API." },
          { id: "ai-bp-1-2", text: "→ Build the Supabase ticket store + pgvector KB" },
          { id: "ai-bp-1-3", text: "→ n8n triggers for each channel; route to triage LLM" },
          { id: "ai-bp-1-4", text: "→ Auto-reply for high-confidence + Slack escalation otherwise" },
          { id: "ai-bp-1-5", text: "→ Deploy on Hetzner + custom domain; demo video" },

          { id: "ai-bp-2-1", text: "PROJECT 2: Sales lead enrichment + outreach pipeline (LinkedIn URL → enrich via Apollo → score → personalise email → schedule send). Stack: n8n + Claude + Apollo + Gmail." },
          { id: "ai-bp-2-2", text: "→ Build LinkedIn URL ingestion form (Tally / Typeform)" },
          { id: "ai-bp-2-3", text: "→ Apollo / People Data Labs enrichment node" },
          { id: "ai-bp-2-4", text: "→ Lead-scoring agent with custom criteria" },
          { id: "ai-bp-2-5", text: "→ Personalised email draft + human approval gate + Gmail send" },

          { id: "ai-bp-3-1", text: "PROJECT 3: Content factory (topic input → research → draft → SEO → image → schedule to LinkedIn + Medium). Stack: CrewAI + Claude + DALL-E + Buffer API." },
          { id: "ai-bp-3-2", text: "→ Researcher agent (web search + summarise)" },
          { id: "ai-bp-3-3", text: "→ Writer agent (draft article in your voice)" },
          { id: "ai-bp-3-4", text: "→ SEO agent (title, meta, keywords)" },
          { id: "ai-bp-3-5", text: "→ Image generation + multi-platform scheduling" },

          { id: "ai-bp-4-1", text: "PROJECT 4: Invoice & receipt automation (Email/Drive trigger → OCR → extract → categorise → push to Google Sheets / QuickBooks). Stack: n8n + Claude Vision + Sheets API." },
          { id: "ai-bp-4-2", text: "→ Gmail / Drive trigger nodes for new attachments" },
          { id: "ai-bp-4-3", text: "→ Claude Vision OCR + structured extraction" },
          { id: "ai-bp-4-4", text: "→ Categorisation rules + monthly summary email" },
          { id: "ai-bp-4-5", text: "→ Validation step + manual review queue for edge cases" },

          { id: "ai-bp-5-1", text: "PROJECT 5: Meeting intelligence agent (Zoom/Meet recording → transcript → action items → CRM update + follow-up emails). Stack: Whisper + Claude + LangGraph + HubSpot API." },
          { id: "ai-bp-5-2", text: "→ Recording ingestion (Zoom / Meet / Otter webhook)" },
          { id: "ai-bp-5-3", text: "→ Whisper transcription + speaker diarisation" },
          { id: "ai-bp-5-4", text: "→ Extract action items + decisions + risks" },
          { id: "ai-bp-5-5", text: "→ Update CRM + draft follow-up emails for approval" },
        ]
      },
      {
        title: "LLM evaluation, observability, guardrails",
        topics: [
          { id: "ai-18-1", text: "Building eval sets — golden questions and answers" },
          { id: "ai-18-2", text: "LLM-as-a-judge evaluation pattern" },
          { id: "ai-18-3", text: "RAGAS for RAG evaluation" },
          { id: "ai-18-4", text: "Tracing with LangSmith" },
          { id: "ai-18-5", text: "Tracing with Langfuse (open source)" },
          { id: "ai-18-6", text: "Helicone for cost and latency monitoring" },
          { id: "ai-18-7", text: "Phoenix by Arize for tracing" },
          { id: "ai-18-8", text: "Guardrails AI — input/output validation" },
          { id: "ai-18-9", text: "NeMo Guardrails (NVIDIA)" },
          { id: "ai-18-10", text: "Prompt injection — attacks and defences" },
          { id: "ai-18-11", text: "PII redaction with Presidio" },
          { id: "ai-18-12", text: "Content moderation — OpenAI moderation, Llama Guard" },
        ]
      },
      {
        title: "Fine-tuning & advanced model work",
        topics: [
          { id: "ai-19-1", text: "When to fine-tune vs RAG vs better prompting" },
          { id: "ai-19-2", text: "Full fine-tuning vs PEFT (parameter-efficient)" },
          { id: "ai-19-3", text: "LoRA — low-rank adaptation explained" },
          { id: "ai-19-4", text: "QLoRA — quantised LoRA for cheap GPU fine-tuning" },
          { id: "ai-19-5", text: "DoRA, GaLore — newer PEFT methods" },
          { id: "ai-19-6", text: "Fine-tune a small model on Hugging Face" },
          { id: "ai-19-7", text: "Unsloth for faster open-model fine-tuning" },
          { id: "ai-19-8", text: "Axolotl — config-driven fine-tuning framework" },
          { id: "ai-19-9", text: "Instruction tuning vs DPO vs RLHF" },
          { id: "ai-19-10", text: "Synthetic data generation for fine-tuning" },
          { id: "ai-19-11", text: "vLLM for high-throughput LLM serving" },
          { id: "ai-19-12", text: "TGI (Text Generation Inference) by Hugging Face" },
          { id: "ai-19-13", text: "SGLang for structured generation" },
        ]
      },
      {
        title: "Voice & multimodal AI",
        topics: [
          { id: "ai-20-1", text: "Speech-to-text — Whisper (OpenAI)" },
          { id: "ai-20-2", text: "Deepgram and AssemblyAI for production STT" },
          { id: "ai-20-3", text: "Text-to-speech — ElevenLabs, OpenAI TTS, Cartesia" },
          { id: "ai-20-4", text: "Voice agents — Vapi, Retell, LiveKit Agents" },
          { id: "ai-20-5", text: "Vision — Claude Vision, GPT-4o, Gemini Vision" },
          { id: "ai-20-6", text: "Image generation — DALL-E 3, Imagen, Flux, SDXL" },
          { id: "ai-20-7", text: "Video generation — Sora, Veo, Runway, Pika, Kling, Hailuo" },
          { id: "ai-20-8", text: "Build a voice-driven agent prototype" },
        ]
      },
      {
        title: "Computer-use & browser automation",
        topics: [
          { id: "ai-21-1", text: "Claude Computer Use — what it is, when to use" },
          { id: "ai-21-2", text: "OpenAI Operator overview" },
          { id: "ai-21-3", text: "browser-use library — autonomous browsing" },
          { id: "ai-21-4", text: "Stagehand — AI-native browser automation" },
          { id: "ai-21-5", text: "Playwright basics for AI-driven browser tasks" },
          { id: "ai-21-6", text: "OpenClaw — emerging computer-use framework" },
          { id: "ai-21-7", text: "When to use computer-use vs API integration" },
        ]
      },
      {
        title: "Latest AI tools & dev tools (2026 snapshot)",
        topics: [
          { id: "ai-22-1", text: "Cursor — Cmd+K, Cmd+L, Tab autocomplete, Agent mode" },
          { id: "ai-22-2", text: "Cursor — .cursorrules for project conventions" },
          { id: "ai-22-3", text: "Claude Code — terminal agentic coding (powers many internals)" },
          { id: "ai-22-4", text: "Claude Code — MCP integration in your workflow" },
          { id: "ai-22-5", text: "Codex (OpenAI) — coding agent" },
          { id: "ai-22-6", text: "GitHub Copilot — Chat, /commands, agent mode" },
          { id: "ai-22-7", text: "Windsurf — Cursor competitor with strong agent loops" },
          { id: "ai-22-8", text: "Continue.dev — open-source coding assistant" },
          { id: "ai-22-9", text: "Aider — terminal pair-programmer" },
          { id: "ai-22-10", text: "v0.dev — text-to-React UI generator" },
          { id: "ai-22-11", text: "Bolt.new — full-stack app generator" },
          { id: "ai-22-12", text: "Lovable — alternative full-stack generator" },
          { id: "ai-22-13", text: "Replit AI for quick demos" },
          { id: "ai-22-14", text: "Perplexity — research-focused search" },
          { id: "ai-22-15", text: "Notion AI for docs and notes" },
          { id: "ai-22-16", text: "Granola for AI meeting notes" },
          { id: "ai-22-17", text: "Cluely / Pickle / Recall for context-aware assistants" },
          { id: "ai-22-18", text: "Gamma for AI presentations" },
          { id: "ai-22-19", text: "Suno / Udio for AI music" },
          { id: "ai-22-20", text: "Midjourney v7 / Flux for images" },
          { id: "ai-22-21", text: "Heygen / Synthesia for AI avatars" },
          { id: "ai-22-22", text: "OpenClaw for computer-use agent workflows" },
        ]
      },
      {
        title: "Production deployment",
        topics: [
          { id: "ai-23-1", text: "Streaming responses, async, rate limiting" },
          { id: "ai-23-2", text: "Caching strategies — semantic cache, exact match" },
          { id: "ai-23-3", text: "Cost monitoring and budget alerts" },
          { id: "ai-23-4", text: "Docker for AI apps — multi-stage builds" },
          { id: "ai-23-5", text: "Deploy to Railway, Render, Fly.io" },
          { id: "ai-23-6", text: "Deploy to Vercel (Next.js + Vercel AI SDK)" },
          { id: "ai-23-7", text: "Modal Labs for serverless GPU workloads" },
          { id: "ai-23-8", text: "Replicate for hosted model APIs" },
          { id: "ai-23-9", text: "Authentication — Clerk or NextAuth basics" },
          { id: "ai-23-10", text: "Database — Supabase or Neon for app data" },
        ]
      },
      {
        title: "AI system design",
        topics: [
          { id: "ai-24-1", text: "Design a customer support RAG agent", resource: "AI Engineering by Chip Huyen" },
          { id: "ai-24-2", text: "Design a multi-agent research system" },
          { id: "ai-24-3", text: "Design a code-review agent" },
          { id: "ai-24-4", text: "Design a voice agent for restaurant booking" },
          { id: "ai-24-5", text: "Design a long-running autonomous agent with checkpointing" },
          { id: "ai-24-6", text: "Practice 5 mock AI system design interviews" },
        ]
      },
      {
        title: "Interview prep & job hunt",
        topics: [
          { id: "ai-25-1", text: "Polish LinkedIn for AI Engineer keywords" },
          { id: "ai-25-2", text: "100 LeetCode easy in Python" },
          { id: "ai-25-3", text: "30 LeetCode medium" },
          { id: "ai-25-4", text: "10 STAR stories from BridgeThings + OnTimeLondon" },
          { id: "ai-25-5", text: "Read 15 real AI Engineer JDs (Anthropic, OpenAI, Cohere, scale-ups)" },
          { id: "ai-25-6", text: "5 mock interviews — coding + AI system design" },
          { id: "ai-25-7", text: "Apply to 10 AI roles per week" },
          { id: "ai-25-8", text: "Cold-message 5 AI Engineers per week for chats" },
        ]
      },
      {
        title: "🚀 CAPSTONE PROJECT — Multi-Agent Research Assistant with MCP",
        isProject: true,
        topics: [
          { id: "ai-cap-1", text: "Define use case — what kind of questions will it answer?" },
          { id: "ai-cap-2", text: "Design architecture — Planner, Retrievers, Synthesiser, Verifier" },
          { id: "ai-cap-3", text: "Build LangGraph orchestration scaffold" },
          { id: "ai-cap-4", text: "Build MCP server for web search (Brave / Tavily)" },
          { id: "ai-cap-5", text: "Build MCP server for academic search (arXiv / Semantic Scholar)" },
          { id: "ai-cap-6", text: "Build MCP server for personal notes via pgvector" },
          { id: "ai-cap-7", text: "Add Claude API integration with tool use" },
          { id: "ai-cap-8", text: "Add citation enforcement and verifier agent" },
          { id: "ai-cap-9", text: "Build Streamlit / Next.js front-end" },
          { id: "ai-cap-10", text: "Set up LangSmith tracing + RAGAS eval suite (30+ tests)" },
          { id: "ai-cap-11", text: "Containerise with Docker, deploy to Railway / Render" },
          { id: "ai-cap-12", text: "Write blog post about MCP + record demo video" },
          { id: "ai-cap-13", text: "Publish your MCP servers to npm/PyPI" },
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

window.CURRICULUM = CURRICULUM;
window.QUOTES = QUOTES;
(function () {
  'use strict';

  const STORAGE_KEY = 'ramya-mastery-v1';
  const DAYS_KEY = 'ramya-mastery-days-v1';
  const QUOTE_KEY = 'ramya-mastery-quote-v1';

  // Role icons (using letters in our serif italic — feels editorial)
  const ROLE_ICONS = { da: 'A', ds: 'S', ml: 'M', ai: 'AI' };
  const ROLE_ORDER = ['da', 'ds', 'ml', 'ai'];

  // ============================================================
  // State management (localStorage)
  // ============================================================
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveProgress(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (e) { console.warn('Could not save progress', e); }
  }
  function loadDays() {
    try { return JSON.parse(localStorage.getItem(DAYS_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveDays(days) {
    try { localStorage.setItem(DAYS_KEY, JSON.stringify(days)); }
    catch (e) { console.warn('Could not save days', e); }
  }

  // ============================================================
  // Helpers
  // ============================================================
  function todayKey() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function countTopicsInRole(roleData) {
    let total = 0;
    let done = 0;
    const state = loadProgress();
    roleData.sections.forEach(section => {
      section.topics.forEach(topic => {
        total++;
        if (state[topic.id]) done++;
      });
    });
    return { total, done };
  }

  function countTopicsInSection(section) {
    let done = 0;
    const state = loadProgress();
    section.topics.forEach(topic => {
      if (state[topic.id]) done++;
    });
    return { total: section.topics.length, done };
  }

  function totalAcrossAll() {
    let total = 0;
    let done = 0;
    ROLE_ORDER.forEach(roleKey => {
      const r = countTopicsInRole(window.CURRICULUM[roleKey]);
      total += r.total;
      done += r.done;
    });
    return { total, done };
  }

  // ============================================================
  // Render — tracks
  // ============================================================
  function renderTopic(topic) {
    const state = loadProgress();
    const checked = !!state[topic.id];
    const resource = topic.resource
      ? `<div class="topic-resource">${escapeHtml(topic.resource)}</div>`
      : '';
    return `
      <div class="topic ${checked ? 'checked' : ''}" data-id="${topic.id}">
        <div class="topic-check"></div>
        <div class="topic-content">
          <div class="topic-text">${escapeHtml(topic.text)}</div>
          ${resource}
        </div>
      </div>
    `;
  }

  function renderSection(section) {
    const { total, done } = countTopicsInSection(section);
    const projectClass = section.isProject ? 'is-project' : '';
    return `
      <div class="section ${projectClass}">
        <div class="section-title">
          <span>${escapeHtml(section.title)}</span>
          <span class="section-title-progress">${done}/${total}</span>
        </div>
        <div class="section-topics">
          ${section.topics.map(renderTopic).join('')}
        </div>
      </div>
    `;
  }

  function renderTrack(roleKey) {
    const role = window.CURRICULUM[roleKey];
    const { total, done } = countTopicsInRole(role);
    const pct = total ? Math.round(done / total * 100) : 0;

    return `
      <article class="track" data-role="${roleKey}">
        <header class="track-header" data-toggle="${roleKey}">
          <div class="track-icon">${ROLE_ICONS[roleKey]}</div>
          <div class="track-info">
            <div class="track-title">${escapeHtml(role.name)}</div>
            <div class="track-tagline">${escapeHtml(role.tagline)}</div>
          </div>
          <div class="track-progress">
            <div class="track-progress-pct" data-track-pct="${roleKey}">${pct}%</div>
            <div class="track-progress-bar">
              <div class="track-progress-bar-fill" data-track-bar="${roleKey}" style="width: ${pct}%"></div>
            </div>
          </div>
          <svg class="track-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </header>

        <div class="track-body">
          <div class="track-body-inner">
            <div class="track-meta-row">
              <span><strong>${role.sections.length}</strong> sections</span>
              <span><strong>${total}</strong> topics</span>
              <span><strong>${role.duration}</strong></span>
            </div>
            <p class="track-description">${escapeHtml(role.description)}</p>
            ${role.sections.map(renderSection).join('')}
          </div>
        </div>
      </article>
    `;
  }

  function renderAllTracks() {
    const tracksEl = document.getElementById('tracks');
    if (!tracksEl) return;
    tracksEl.innerHTML = ROLE_ORDER.map(renderTrack).join('');
  }

  // ============================================================
  // Render — stats
  // ============================================================
  function updateStats() {
    // Overall ring
    const { total, done } = totalAcrossAll();
    const pct = total ? (done / total) : 0;
    const ringEl = document.getElementById('overallRing');
    if (ringEl) {
      const circumference = 2 * Math.PI * 84;  // matches the r=84 in HTML
      ringEl.style.strokeDashoffset = circumference * (1 - pct);
    }
    document.getElementById('overallPct').textContent = `${Math.round(pct * 100)}%`;
    document.getElementById('overallMeta').textContent = `${done} of ${total} topics`;

    // Per-role
    ROLE_ORDER.forEach(roleKey => {
      const r = countTopicsInRole(window.CURRICULUM[roleKey]);
      const rPct = r.total ? Math.round(r.done / r.total * 100) : 0;
      const pctEl = document.getElementById(`pct-${roleKey}`);
      const countEl = document.getElementById(`count-${roleKey}`);
      const barEl = document.getElementById(`bar-${roleKey}`);
      if (pctEl) pctEl.textContent = `${rPct}%`;
      if (countEl) countEl.textContent = `${r.done}/${r.total}`;
      if (barEl) barEl.style.width = `${rPct}%`;

      // Also update the progress bar in the role header
      const trackPctEl = document.querySelector(`[data-track-pct="${roleKey}"]`);
      const trackBarEl = document.querySelector(`[data-track-bar="${roleKey}"]`);
      if (trackPctEl) trackPctEl.textContent = `${rPct}%`;
      if (trackBarEl) trackBarEl.style.width = `${rPct}%`;
    });

    // Update section pills (without re-rendering whole track, to keep DOM stable)
    document.querySelectorAll('.section').forEach(sectionEl => {
      // find topics inside, count checked
      const topicEls = sectionEl.querySelectorAll('.topic');
      const total = topicEls.length;
      let done = 0;
      topicEls.forEach(t => { if (t.classList.contains('checked')) done++; });
      const pillEl = sectionEl.querySelector('.section-title-progress');
      if (pillEl) pillEl.textContent = `${done}/${total}`;
    });
  }

  // ============================================================
  // Calendar grid + streak
  // ============================================================
  function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    const days = loadDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = '';
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const k = d.toISOString().slice(0, 10);
      const studied = !!days[k];
      const isToday = i === 0;
      html += `
        <div class="day-cell ${studied ? 'studied' : ''} ${isToday ? 'is-today' : ''}"
             data-date="${k}"
             title="${k}${isToday ? ' (today)' : ''}">${d.getDate()}</div>
      `;
    }
    grid.innerHTML = html;

    // streak
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const k = d.toISOString().slice(0, 10);
      if (days[k]) streak++;
      else break;
    }
    const totalDays = Object.keys(days).length;
    document.getElementById('streakBig').textContent = streak;
    document.getElementById('streakTotal').textContent = `${totalDays} day${totalDays === 1 ? '' : 's'} studied`;
  }

  // ============================================================
  // Quote of the day
  // ============================================================
  function renderQuote() {
    const quotes = window.QUOTES || [];
    if (!quotes.length) return;

    // Use day-of-year so it's stable across the day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const idx = dayOfYear % quotes.length;
    const q = quotes[idx];

    document.getElementById('quoteText').textContent = q.text;
    document.getElementById('quoteAuthor').textContent = `— ${q.author}`;
  }

  // ============================================================
  // Event handlers
  // ============================================================
  function attachEventListeners() {
    // Toggle a topic checkbox
    document.addEventListener('click', (e) => {
      const topic = e.target.closest('.topic');
      if (topic) {
        const id = topic.dataset.id;
        const state = loadProgress();
        if (state[id]) delete state[id];
        else state[id] = true;
        saveProgress(state);
        topic.classList.toggle('checked', !!state[id]);
        updateStats();
        return;
      }

      // Toggle a track expand/collapse
      const trackHeader = e.target.closest('.track-header');
      if (trackHeader) {
        const roleKey = trackHeader.dataset.toggle;
        const trackEl = document.querySelector(`.track[data-role="${roleKey}"]`);
        if (trackEl) {
          trackEl.classList.toggle('expanded');
        }
        return;
      }

      // Day cell toggle
      const dayCell = e.target.closest('.day-cell');
      if (dayCell) {
        const k = dayCell.dataset.date;
        const days = loadDays();
        if (days[k]) delete days[k];
        else days[k] = true;
        saveDays(days);
        renderCalendar();
        return;
      }
    });

    // Mark today studied
    const markBtn = document.getElementById('markTodayBtn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        const days = loadDays();
        const k = todayKey();
        days[k] = !days[k];
        if (!days[k]) delete days[k];
        saveDays(days);
        renderCalendar();
      });
    }

    // Expand all
    document.getElementById('expandAllBtn').addEventListener('click', () => {
      document.querySelectorAll('.track').forEach(t => t.classList.add('expanded'));
    });

    // Collapse all
    document.getElementById('collapseAllBtn').addEventListener('click', () => {
      document.querySelectorAll('.track').forEach(t => t.classList.remove('expanded'));
    });

    // Export
    document.getElementById('exportBtn').addEventListener('click', () => {
      const data = {
        progress: loadProgress(),
        days: loadDays(),
        exportedAt: new Date().toISOString(),
        version: 1,
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const dateStr = new Date().toISOString().slice(0, 10);
      a.download = `ramya-mastery-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Import
    document.getElementById('importBtn').addEventListener('click', () => {
      document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.progress) saveProgress(data.progress);
          if (data.days) saveDays(data.days);
          renderAllTracks();
          updateStats();
          renderCalendar();
          alert('Progress imported successfully.');
        } catch {
          alert('Could not parse the file. Make sure it is a valid export.');
        }
        e.target.value = '';
      };
      reader.readAsText(file);
    });

    // Reset all
    document.getElementById('resetBtn').addEventListener('click', () => {
      if (confirm('Reset ALL progress and study days? This cannot be undone.')) {
        saveProgress({});
        saveDays({});
        renderAllTracks();
        updateStats();
        renderCalendar();
      }
    });
  }

  // ============================================================
  // Init
  // ============================================================
  function init() {
    if (!window.CURRICULUM) {
      console.error('Curriculum data not loaded');
      return;
    }
    renderAllTracks();
    updateStats();
    renderCalendar();
    renderQuote();
    attachEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();