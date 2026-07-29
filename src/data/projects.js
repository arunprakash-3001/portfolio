const projects = [
  {
    slug: 'trustpay',
    title: 'TrustPay',
    shortDescription: 'A secure digital payment application exploring UPI-style transaction flows and fraud-detection concepts.',
    description: 'TrustPay is a digital payment application designed to simulate secure payment workflows while incorporating fraud-detection concepts. The project brings together an Android interface, a Flask backend, and MongoDB to support authentication, payment and transaction simulation, UPI-related functionality, transaction history, and balance management.',
    technologies: ['Android', 'Java', 'XML', 'Flask', 'MongoDB'],
    github: 'https://github.com/arunprakash-3001/TrustPay',
    demo: null,
    features: ['User authentication', 'Payment and transaction simulation', 'Transaction history and balance management', 'UPI-related functionality', 'Anomaly and fraud-detection concepts, including a 3-sigma approach'],
  },
  {
    slug: 'traffic-congestion-intelligence-system',
    title: 'Traffic Congestion Intelligence System',
    shortDescription: 'An end-to-end traffic analytics project focused on ingestion, ETL, congestion insights, and dashboarding.',
    description: 'This data-focused project explores an end-to-end traffic intelligence workflow. It uses Python and SQL for data ingestion and processing, applies ETL practices to prepare traffic data for analysis, and uses congestion scoring, visualizations, and Power BI dashboards to communicate patterns and insights. The project also incorporates machine learning concepts in the broader analysis workflow.',
    technologies: ['Python', 'SQL', 'Power BI', 'ETL', 'Machine Learning'],
    github: 'https://github.com/arunprakash-3001/Traffic-Congestion-Intelligence-System',
    demo: null,
    features: ['Traffic data ingestion and processing', 'ETL-oriented data preparation', 'Traffic analytics and congestion scoring', 'Power BI visualization and dashboarding', 'Machine learning concepts'],
  },
  {
    slug: 'healthinsight-ai',
    title: 'HealthInsight AI',
    shortDescription: 'A RAG-based application for generating understandable explanations from medical and lab report information.',
    description: 'HealthInsight AI is an AI-powered medical report explainer that uses retrieval-augmented generation to help make medical and lab report information easier to understand. Built with Python and Streamlit, it combines Ollama, LangChain, ChromaDB, embeddings, and vector retrieval. It is intended for explanatory purposes and does not provide medical diagnosis, treatment, or claims of clinical accuracy.',
    technologies: ['Python', 'Streamlit', 'Ollama', 'LangChain', 'RAG', 'ChromaDB'],
    github: 'https://github.com/arunprakash-3001/HealthInsight-AI',
    demo: null,
    features: ['Medical and lab report information processing', 'Retrieval-augmented generation workflow', 'Embedding-based vector retrieval with ChromaDB', 'Streamlit application interface', 'Ollama and LangChain integration'],
  },
]

export default projects
