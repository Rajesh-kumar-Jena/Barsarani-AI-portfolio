export const profile = {
  name: "Barsarani Nayak",
  role: "Generative AI & Agentic AI Developer",
  location: "Delhi NCR, India",
  email: "barsa987987@gmail.com",
  phone: "+91-8595768813",
  github: "https://github.com/BarsaraniNayak1",
  linkedin: "https://www.linkedin.com/in/barsarani-nayak-1b2b30279/",
  resume: "/Barsarani_Nayak_Resume.pdf",
  photo: "/images/profile-cutout.png",
  summary:
    "I build LLM-powered applications, RAG pipelines, and multi-agent systems that turn complex workflows into reliable, testable software. My focus is practical AI engineering: grounded retrieval, agent orchestration, fault tolerance, and human-in-the-loop controls.",
};

export const proofPoints = [
  { value: "4", label: "end-to-end AI projects" },
  { value: "5+", label: "agent / RAG patterns" },
  { value: "8.60", label: "M.Sc. Mathematics CGPA" },
  { value: "9.55", label: "B.Sc. Mathematics CGPA" },
];

export const skillGroups = [
  {
    title: "Generative AI & LLMs",
    items: ["LangChain", "LangGraph", "OpenAI API", "Groq", "Ollama", "Hugging Face", "Transformers", "Prompt Engineering", "RAG"],
  },
  {
    title: "Agentic AI",
    items: ["AI Agents", "Multi-Agent Systems", "Agent Orchestration", "MCP", "MCP Servers", "Human-in-the-Loop", "Workflow Automation"],
  },
  {
    title: "AI / ML & Retrieval",
    items: ["Machine Learning", "Deep Learning", "NLP", "Embeddings", "Semantic Search", "ChromaDB", "LlamaIndex"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "FastAPI", "Flask", "Django", "REST APIs", "Pydantic", "MySQL", "SQLite / FTS5", "NumPy", "Pandas"],
  },
  {
    title: "Engineering Workflow",
    items: ["Git", "GitHub", "Jira", "VS Code", "pytest", "SDLC", "Automated Testing", "API Integration"],
  },
];

export const projects = [
  {
    index: "01",
    title: "Multi-Agent AI Research System",
    period: "May 2026 — Present",
    description:
      "A LangGraph research workflow that discovers sources, summarizes evidence, generates citations, analyzes trends, and evaluates source quality with explicit review checkpoints.",
    impact: [
      "Configurable same-domain crawling with robots.txt compliance and adjustable depth",
      "ChromaDB-backed RAG for grounding trend analysis in collected sources",
      "Reflection workflows for accuracy, bias, confidence, and human review thresholds",
      "Resumable human approval gates, fallbacks, malformed-response recovery, and pytest coverage",
    ],
    stack: ["Python", "LangGraph", "Groq", "ChromaDB", "Scrapy", "Pydantic", "pytest"],
  },
  {
    index: "02",
    title: "Smart Campus Multi-Agent System",
    period: "Apr 2026 — Present",
    description:
      "A full-stack campus assistant that routes natural-language requests across schedules, library services, locations, reminders, reservations, and staff approvals.",
    impact: [
      "FastAPI REST APIs paired with a responsive React 18 frontend",
      "SQLite + FTS5 for persistent, fast library catalog retrieval",
      "Automated class reminders, book reservations, loan-extension approvals, and preferences",
      "Deterministic fallback logic for offline or LLM API-unavailable scenarios",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "React 18", "SQLite", "FTS5", "Groq", "HTTPX"],
  },
  {
    index: "03",
    title: "Autonomous AI Software Engineering Team",
    period: "Feb 2026 — Aug 2026",
    description:
      "An autonomous SDLC workflow that converts natural-language requirements into backlogs, technical designs, implementation tasks, code reviews, and QA validation.",
    impact: [
      "Role-based agents with explicit responsibilities and orchestration logic",
      "Jira + GitHub integration for issue creation, tracking, repository changes, and review traceability",
      "Bounded retries, validation checks, exception handling, and human approval gates",
      "Live and offline execution modes for development and debugging without external LLM APIs",
    ],
    stack: ["Python", "LLMs", "Multi-Agent Systems", "Jira", "GitHub", "QA Automation"],
  },
  {
    index: "04",
    title: "Help Desk RAG Chatbot",
    period: "Oct 2025 — Dec 2025",
    description:
      "A grounded customer-support assistant that answers from internal knowledge-base documentation and escalates uncertain or unsupported cases into structured support tickets.",
    impact: [
      "End-to-end Markdown ingestion, chunking, embedding, semantic retrieval, and persistent storage",
      "Multi-turn conversational memory and session management",
      "Source attribution, retrieval validation, and confidence checks to reduce unsupported answers",
      "Automated JSON escalation workflow plus CLI and Streamlit interfaces",
    ],
    stack: ["Python", "LangChain", "ChromaDB", "Groq", "Llama 3.3", "Hugging Face", "Streamlit", "pytest"],
  },
];

export const education = [
  {
    degree: "Master of Science (M.Sc.) in Mathematics",
    institution: "Manav Rachna University, Faridabad",
    period: "2022 — 2024",
    result: "CGPA 8.60",
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Mathematics",
    institution: "Lingayas University, Faridabad",
    period: "2019 — 2022",
    result: "CGPA 9.55",
  },
];
