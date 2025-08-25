import React, { useEffect, useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data || []))
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setSkills([]);
      });
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <ul className="skillchips">
          {(skills || []).map((s, i) => (
            <li key={i} className="chip">
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
