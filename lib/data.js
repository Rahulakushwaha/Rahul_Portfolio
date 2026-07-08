export const profile = {
  name: "Rahul Kushwaha",
  roleLine: "Data Analyst | Data Scientist | ML Engineer",
  role: "Data Scientist & ML Engineer",
  pitch:
    "I build practical AI-powered applications, machine learning models and data-driven solutions that solve real-world problems using Python, SQL, FastAPI, TensorFlow and modern analytics tools.",
  email: "work.rahulkushwaha06@gmail.com",
  phone: "+91-8866298746",
  linkedin: "https://www.linkedin.com/in/rahulkushwaha15/",
  github: "https://github.com/Rahulakushwaha",
  location: "Navi Mumbai, India",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science and engineering Graduate specializing in Data Science, focused on building machine learning systems that hold up outside a notebook. My work sits at the intersection of applied ML and backend engineering — models are only useful once they're reachable through an API and can handle real input.",
    "That interest shows up across what I've built: a computer-vision system that sorts 58+ waste categories for Prakriti.AI, an ETL-driven anomaly detector for network security, and a non-invasive data-leakage detection system built around Morse-code authentication. Alongside that, I'm drawn to cybersecurity and data storytelling — how a model's output gets communicated matters almost as much as the model itself.",
    "My internships at HCLTech and Sparks to Ideas gave me two very different lenses on the same problem: HCLTech had me deep in SQL Server and real-time data systems, while Sparks to Ideas had me training and evaluating ML models end to end. Moving between the two shaped how I work now — I treat data infrastructure, model development, and deployment as one continuous problem, not three separate jobs.",
    "Technically, I'm strongest where classical ML, deep learning, and systems work meet: feature engineering, model evaluation, FastAPI services, and SQL/NoSQL data layers. I'm currently looking for a full-time Data Analyst, Data Scientist, or ML Engineer role where I can keep building systems people actually rely on.",
  ],
  cards: [
    { icon: "MapPin", label: "Location", value: "Navi Mumbai, India" },
    {
      icon: "GraduationCap",
      label: "Education",
      value: "B.E. CSE (Data Science), 8.57 CGPA",
    },
    {
      icon: "Briefcase",
      label: "Experience",
      value: "2 internships — HCLTech, Sparks to Ideas",
    },
    {
      icon: "FolderGit2",
      label: "Projects",
      value: "4 end-to-end ML systems shipped",
    },
    {
      icon: "Code2",
      label: "Tech Stack",
      value: "Python, SQL, FastAPI, Machine Learning, Deep Learning, NLP, TensorFlow, Scikit-Learn, MongoDB, PowerBI, Tableau ",
    },
  ],
};

export const metrics = [
  { value: "93%", label: "peak accuracy, 58+ waste categories", mono: "prakriti.ai" },
  { value: "98.5%", label: "anomaly-detection accuracy in real time", mono: "netsec.etl" },
  { value: "4", label: "end-to-end ML systems shipped", mono: "projects" },
  { value: "8.57", label: "CGPA · Computer Science, Data Science", mono: "academics" },
];

export const experience = [
  {
    company: "HCLTech",
    location: "Noida (Remote)",
    role: "Web and Data Intern",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Designed and shipped a dynamic employee data management system with advanced filtering, grouping, and real-time CRUD, using DevExpress GridView and SQL Server.",
      "Strengthened data handling, querying, and processing workflows that fed directly into later data-analytics and decision-making work.",
    ],
  },
  {
    company: "Sparks to Ideas",
    location: "Ahmedabad (Remote)",
    role: "AI/ML Intern",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Built and evaluated machine learning models against real-world datasets using Pandas, Matplotlib, and Seaborn.",
      "Covered the full supervised/unsupervised learning loop — preprocessing, training, evaluation, and deployment.",
    ],
  },
];

export const projects = [
  {
    name: "Prakriti.AI",
    tagline: "A global recycling intelligence system",
    period: "Aug 2025 – May 2026",
    description:
      "An AI-powered waste-management platform that classifies 58+ waste categories using RepVGG and EfficientNet-B4, reaching 89–93% accuracy. FastAPI, PostgreSQL, and geolocation services turn every classification into a geo-tagged report — enabling real-time monitoring and route optimization for waste collection.",
    stack: ["RepVGG", "EfficientNet-B4", "FastAPI", "PostgreSQL", "Geolocation"],
    metric: { value: "89–93%", label: "classification accuracy" },
  },
  {
    name: "Network Security via ETL Pipelining",
    tagline: "Real-time anomaly detection for network traffic",
    period: "Jan 2025 – May 2025",
    description:
      "A FastAPI-powered security system that pairs ML threat detection with adaptive ETL monitoring. MongoDB-backed data flows and automated pipelines drive continuous traffic analysis and alerting, reaching 98.5% accuracy in real-time anomaly classification.",
    stack: ["FastAPI", "MongoDB", "ETL", "Anomaly Detection"],
    metric: { value: "98.5%", label: "anomaly-classification accuracy" },
  },
  {
    name: "Data Leakage Detection via Morse Code",
    tagline: "Non-invasive source traceability",
    period: "Aug 2024 – Nov 2024",
    description:
      "A leak-detection system using traceable fake records and Morse-code-based authentication — improving source traceability and cutting false positives without ever touching the original dataset.",
    stack: ["Data Security", "Authentication", "Traceability"],
    metric: { value: "↓", label: "false positives, source intact" },
  },
  {
    name: "Movie Recommendation System",
    tagline: "Personalized recommendations in real time",
    period: "Apr 2023 – May 2023",
    description:
      "A recommendation engine that filters and predicts preferences from user choices, surfaced through an intuitive interface for real-time, personalized suggestions.",
    stack: ["Recommender Systems", "Python"],
    metric: { value: "RT", label: "real-time personalization" },
  },
];

export const skills = [
  {
    group: "Languages & Data",
    items: ["Python", "SQL", "MySQL", "PostgreSQL", "MongoDB", "SQL Server (SSMS)"],
  },
  {
    group: "ML & Modeling",
    items: [
      "Regression",
      "Decision Trees",
      "Random Forest",
      "AdaBoost",
      "XGBoost",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    group: "Deep Learning & NLP",
    items: ["ANN", "CNN", "RNN", "Tokenization", "Stemming", "Lemmatization", "BoW", "TF-IDF"],
  },
  {
    group: "Libraries & Tools",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
      "TensorFlow/Keras",
      "Power BI",
      "Tableau",
      "Jupyter",
      "VS Code",
    ],
  },
];

export const education = [
  {
    school: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    program: "B.E. Computer Science and Engineering — Data Science",
    period: "2022 – 2026",
    detail: "CGPA 8.57/10 · Sem VIII SGPA 10.0/10.0",
  },
  {
    school: "Bhaskaracharya Jr. College (Chate Jr. College), Aurangabad",
    program: "HSC",
    period: "May 2022",
    detail: "87.67%",
  },
  {
    school: "Veer New Look Central School, Halol, Panchmahal",
    program: "SSC",
    period: "May 2020",
    detail: "81%",
  },
];

export const certifications = [
  "Coursera — SQL for Data Science",
  "IBM — Getting Started With Enterprise-Grade AI",
  "IBM — Getting Started With Enterprise-Grade Data Science",
  "SAP — Programming in Python and AI",
  "SAP — Emerging Technologies (ML, IoT, DL, CV, ABAP)",
  "Udemy — Data Analysis (SQL, Tableau, Power BI, Excel)",
  "Udemy — Bootcamp on ML, DL and NLP",
  "Talent Battle — Python Programming",
];

export const achievements = [
  {
    title: "Code Unnati Innovation Marathon 2.0",
    detail: "Finalist — top 25 teams from India, showcased in Ahmedabad.",
  },
  {
    title: "Maharashtra State Innovation Council",
    detail: "Selected at the regional level to showcase a technical project.",
  },
  {
    title: "Model Business Summit 2024",
    detail: "Winner, fintech track, representing ICICI Bank.",
  },
];
