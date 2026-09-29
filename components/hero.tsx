"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Phone, Sparkles } from "lucide-react";
import { profile, proofPoints } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container-shell hero-layout">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="eyebrow">
            Generative AI &amp; Agentic AI Developer
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .06 }}>
            Hi, I’m <span className="gradient-text">Barsarani Nayak</span><br />Turning Ideas into Intelligent Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .12 }} className="hero-summary">
            {profile.summary}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .18 }} className="hero-summary hero-summary-detail">
            With a strong foundation in mathematics and hands-on Python engineering, I build AI products beyond the prototype stage. My projects span research, campus support, software delivery, and customer service, with an emphasis on grounded answers, validation, and reliable fallbacks.
          </motion.p>
          <div className="hero-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            <a href={profile.resume} target="_blank" rel="noreferrer"><FileText size={14} /> Resume</a>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="phone-link"><Phone size={14} /> {profile.phone.replace(/-/g, " ")}</a>
            <a href="#contact" className="connect-link">Let’s Connect <ArrowUpRight size={13} /></a>
          </div>
          <div className="hero-stats">
            {proofPoints.map((item) => (
              <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }} className="hero-visual">
          <div className="portrait-glow" />
          <span className="portrait-note">Build<br />Innovate<br />Grow <Sparkles size={13} /></span>
          <div className="hero-portrait">
            <Image src={profile.photo} alt="Barsarani Nayak" fill priority sizes="(max-width: 800px) 70vw, 300px" className="object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
