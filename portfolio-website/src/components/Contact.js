import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
            />
            {errors.name && <p className="error">{errors.name}</p>}
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
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button className="btn" type="submit">
            Send
          </button>
        </form>

        <p className="contact__note">
          Prefer email? Write to{" "}
          <a href="mailto:hakhasan07@gmail.com">hakhasan07@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
