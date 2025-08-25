import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home section">
      <div className="container hero">
        <div>
          <h1>
            Hi, I'm <span className="accent">Hasan Abdul Kather</span>
          </h1>
          <p className="tagline">Data Analyst • Python Enthusiast</p>
          <p className="lead">
            I transform raw data into actionable insights using Python and
            analytics.
          </p>
          <div className="cta">
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a className="btn" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
