import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container-shell">
        <div className="compact-section-title"><GraduationCap size={14} /><h2>Education</h2></div>
        <div className="education-list">
          {education.map((item) => (
            <div key={item.degree} className="education-item">
              <div><h3>{item.degree}</h3><p>{item.institution} <span>({item.period})</span></p></div>
              <strong>{item.result}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}