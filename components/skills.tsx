"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Bot, Database, WandSparkles, Zap } from "lucide-react";
import {
  SiDjango,
  SiClaude,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiGithubcopilot,
  SiHuggingface,
  SiJira,
  SiLangchain,
  SiLanggraph,
  SiModelcontextprotocol,
  SiNextdotjs,
  SiOllama,
  SiPytest,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const skillTiles = [
  { title: "LangChain", detail: "LLM framework", icon: <SiLangchain />, color: "#1c8a72" },
  { title: "LangGraph", detail: "Agent orchestration", icon: <SiLanggraph />, color: "#4b91e2" },
  { title: "Groq", detail: "AI inference", icon: <Zap />, color: "#f55036" },
  { title: "Ollama", detail: "Local LLMs", icon: <SiOllama />, color: "#f3f3f3" },
  { title: "OpenAI API", detail: "LLM integration", icon: <BrainCircuit />, color: "#74aa9c" },
  { title: "Hugging Face", detail: "Models · Transformers", icon: <SiHuggingface />, color: "#ffd21e" },
  { title: "RAG", detail: "Retrieval-augmented generation", icon: <Database />, color: "#5bc8d8" },
  { title: "ChromaDB", detail: "Vector database", icon: <Database />, color: "#8b5cf6" },
  { title: "Deep Learning", detail: "Neural networks", icon: <BrainCircuit />, color: "#e875b7" },
  { title: "Prompt Engineering", detail: "LLM prompting", icon: <WandSparkles />, color: "#c494ff" },
  { title: "MCP", detail: "Model Context Protocol", icon: <SiModelcontextprotocol />, color: "#e6e9f0" },
  { title: "Agentic AI", detail: "Multi-agent systems", icon: <Bot />, color: "#53e3c0" },
  { title: "Python", detail: "Programming language", icon: <SiPython />, color: "#ffd343" },
  { title: "FastAPI", detail: "Python APIs", icon: <SiFastapi />, color: "#009688" },
  { title: "Flask", detail: "Python web framework", icon: <SiFlask />, color: "#f4f4f4" },
  { title: "Django", detail: "Python web framework", icon: <SiDjango />, color: "#44b78b" },
  { title: "React", detail: "UI development", icon: <SiReact />, color: "#61dafb" },
  { title: "Next.js", detail: "React framework", icon: <SiNextdotjs />, color: "#f4f4f4" },
  { title: "TypeScript", detail: "Typed JavaScript", icon: <SiTypescript />, color: "#3178c6" },
  { title: "GitHub", detail: "Version control", icon: <SiGithub />, color: "#f4f4f4" },
  { title: "Jira", detail: "Project management", icon: <SiJira />, color: "#579dff" },
  { title: "GitHub Copilot", detail: "AI coding assistant", icon: <SiGithubcopilot />, color: "#f4f4f4" },
  { title: "Claude", detail: "Anthropic AI models", icon: <SiClaude />, color: "#d97757" },
  { title: "pytest", detail: "Python testing", icon: <SiPytest />, color: "#0a9edc" },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container-shell">
        <div className="section-heading">
          <h2 className="section-title">My Skills</h2>
          <p>A blend of modern AI technologies, backend systems<br className="hidden sm:block" /> and developer tools to build scalable solutions.</p>
        </div>

        <div className="skill-grid">
          {skillTiles.map(({ title, detail, icon, color }) => {
            return (
              <motion.article key={title} whileHover={{ y: -3 }} transition={{ duration: .18 }} className="skill-tile">
                <span className="skill-logo" style={{ color }} aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
