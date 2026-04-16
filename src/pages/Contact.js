import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="content-section">
      <p className="eyebrow">Contact</p>
      <h1>We are here before, during, and after your dining experience.</h1>
      <p>For private events, media, partnerships, or menu questions, our team is ready to help.</p>

      <div className="cards-grid">
        <article className="info-card"><h3>Visit</h3><p>201 James St N, Hamilton, ON L8R 2L1</p></article>
        <article className="info-card"><h3>Call</h3><p><a href="tel:+16472948845">+1 (647) 294-8845</a></p></article>
        <article className="info-card"><h3>WhatsApp</h3><p><a href="https://wa.me/16472948845" target="_blank" rel="noreferrer">Chat with concierge</a></p></article>
      </div>

      <div className="booking-layout">
        {submitted ? (
          <article className="success-card">✅ Message sent. We'll get back to you soon.</article>
        ) : (
          <form className="booking-form" onSubmit={onSubmit}>
            <label htmlFor="name">Name<input id="name" required type="text" placeholder="Your name" /></label>
            <label htmlFor="email">Email<input id="email" required type="email" placeholder="you@example.com" /></label>
            <label htmlFor="message">Message<textarea id="message" rows="5" required placeholder="How can we help?" /></label>
            <button type="submit" className="btn btn-primary">Send message</button>
          </form>
        )}

        <div className="map-wrap">
          <iframe
            title="Masala Mount location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=201+James+St+N,+Hamilton,+ON&output=embed"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
