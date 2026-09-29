import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <div className="footer-name"><span>BN</span> {profile.name}<small>{profile.role}</small></div>
        <div className="footer-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={13} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={13} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={13} /></a>
        </div>
        <small>© 2025 {profile.name}. All rights reserved.<br />Built with Next.js · Tailwind CSS · Framer Motion</small>
      </div>
    </footer>
  );
}
