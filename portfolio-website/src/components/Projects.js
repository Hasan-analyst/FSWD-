import React, { useState, useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data || [])) 
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="grid">
          {(projects || []).map((p, i) => (
            <article className="card" key={i}>
              <div className="card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags">
                  {p.tags.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="card__footer">
                <a
                  className="btn btn--small"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
