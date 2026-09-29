"use client";

import { Menu, Sun, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["About", "#top"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell flex h-11 items-center justify-between">
        <a href="#top" className="brand-mark">
          <span className="gradient-text">BN</span> <span>Barsarani Nayak</span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
          <ThemeToggle />
          <a href={profile.resume} target="_blank" rel="noreferrer" className="resume-link">
            Download Resume
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="menu-button">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav sm:hidden">
          <div className="container-shell flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="mobile-nav-link">
                {label}
              </a>
            ))}
            <a href={profile.resume} target="_blank" rel="noreferrer" className="resume-link my-2 text-center">
              View Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
