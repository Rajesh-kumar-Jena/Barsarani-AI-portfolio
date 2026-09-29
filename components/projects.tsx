"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects, profile } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container-shell">
        <div className="section-heading project-heading">
          <div><h2 className="section-title">Featured Projects</h2><p>Real-world AI solutions that solve meaningful problems.</p></div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="view-all">View All Projects <ArrowUpRight size={12} /></a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: index * .04 }} className="project-tile">
              <div className="project-icon"><Code2 size={15} /></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-impact">
                {project.impact.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="project-tags">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer">View Details <ArrowUpRight size={11} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
