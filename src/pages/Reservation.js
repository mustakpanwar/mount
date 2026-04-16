import React, { useState } from 'react';

const Reservation = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    // Reset form after 3s or add real API call
    setTimeout(() => setFormSuccess(false), 5000);
  };

  return (
    <section id="reservation">
      <div className="res-inner">
        <div className="res-info reveal">
          <div className="section-label">Book a Table</div>
          <h2 className="section-title">Reserve Your <em>Experience</em></h2>
          <div className="divider"></div>
          <p>
            Book your table at Masala Mount and enjoy a delightful dining experience.
            Whether it's a casual outing or a special celebration, we've got you covered.
          </p>
          <div className="res-detail"><div className="res-detail-icon">📍</div> 201 James St N, Hamilton, ON</div>
          <div className="res-detail"><div className="res-detail-icon">📞</div> +1 647-294-8845</div>
          <div className="res-detail"><div className="res-detail-icon">🕒</div> Daily: 11 AM – 11 PM</div>
        </div>
        <div className="reveal">
          {!formSuccess ? (
            <form className="res-form" id="resForm" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (647) ..." required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" min="11:00" max="22:30" required />
                </div>
              </div>
              <div className="form-group">
                <label>Number of Guests</label>
                <select required>
                  <option value="">Select guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5–8 Guests</option>
                  <option>9+ Guests (Private Dining)</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{marginTop: '.5rem'}}>Book Now</button>
            </form>
          ) : (
            <div className="form-success" id="formSuccess">
              🎉 Reservation Received!<br/>
              <span style={{fontFamily: "'Jost',sans-serif", fontSize: '.9rem', color: 'var(--text-muted)'}}>
                We'll confirm your booking within 30 minutes.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;

