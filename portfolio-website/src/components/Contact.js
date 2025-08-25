import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hasanbroo@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about your project…"
              required
            />
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
        <p className="contact__note">
          Prefer email? Write to{" "}
          <a href="mailto:hasanbroo@example.com">hakhasan07@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
