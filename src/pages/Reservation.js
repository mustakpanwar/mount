import React, { useState } from 'react';

const Reservation = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="content-section">
      <p className="eyebrow">Reservations</p>
      <h1>Book in seconds from any device.</h1>
      <p>
        Our mobile-first reservation flow helps you secure your table quickly.
        Add dietary needs, event details, and seating preferences in one request.
      </p>

      <div className="booking-layout">
        <article className="info-card">
          <h3>Guest concierge</h3>
          <p><strong>Location:</strong> 201 James St N, Hamilton, ON</p>
          <p><strong>Hours:</strong> 11:00 AM – 11:00 PM (Daily)</p>
          <p><strong>Phone:</strong> +1 (647) 294-8845</p>
          <p><strong>WhatsApp:</strong> Instant support for bookings and updates.</p>
        </article>

        {sent ? (
          <article className="success-card">
            ✅ Reservation request received.
            <p>Our team will contact you shortly with confirmation details.</p>
          </article>
        ) : (
          <form className="booking-form" onSubmit={onSubmit}>
            <label htmlFor="fullName">Full Name
              <input id="fullName" required type="text" placeholder="Guest name" />
            </label>
            <label htmlFor="phone">Phone / WhatsApp
              <input id="phone" required type="tel" placeholder="+1 ..." />
            </label>
            <div className="inline-fields">
              <label htmlFor="date">Date
                <input id="date" required type="date" />
              </label>
              <label htmlFor="time">Time
                <input id="time" required type="time" />
              </label>
            </div>
            <div className="inline-fields">
              <label htmlFor="guests">Guests
                <select id="guests" required defaultValue="">
                  <option value="" disabled>Select guests</option>
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-8</option>
                  <option>9+ (Private dining)</option>
                </select>
              </label>
              <label htmlFor="occasion">Occasion
                <select id="occasion" defaultValue="">
                  <option value="">Optional</option>
                  <option>Business dining</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Private event</option>
                </select>
              </label>
            </div>
            <label htmlFor="notes">Special Request
              <textarea id="notes" rows="4" placeholder="Allergies, accessibility, seating, or celebration details" />
            </label>
            <button className="btn btn-primary" type="submit">Request Reservation</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Reservation;
