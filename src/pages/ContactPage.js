import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Message sent. CertVerify will get back to ${form.name || 'you'} shortly.`);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="page-shell contact-page">
      <div className="page-header page-header--center">
        <h1>Contact us</h1>
        <p>Have a question about issuing or verifying certificates? Send us a message.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help?"
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Send message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
