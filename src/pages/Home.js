import React from 'react';
import { Link } from 'react-router-dom';

const experiencePoints = [
  'Chef-crafted menu inspired by regional India',
  'Global service standards with warm hospitality',
  'Dedicated guest concierge via WhatsApp and call'
];

const Home = () => (
  <>
    <section className="hero hero-panel">
      <p className="eyebrow">Modern · Elegant · Mobile-first</p>
      <h1>International-level dining and seamless table booking.</h1>
      <p className="lead">
        Discover refined Indian flavors, premium mixology, and a reservation experience
        designed for guests who expect world-class standards.
      </p>
      <div className="hero-actions">
        <Link to="/reservation" className="btn btn-primary">Reserve your table</Link>
        <Link to="/menu" className="btn btn-ghost">View menu</Link>
      </div>
      <div className="kpis">
        <article><strong>4.9★</strong><span>Average guest rating</span></article>
        <article><strong>11:00–23:00</strong><span>Daily service window</span></article>
        <article><strong>30 min</strong><span>Typical confirmation time</span></article>
      </div>
    </section>

    <section className="content-section split">
      <div>
        <p className="eyebrow">What sets us apart</p>
        <h2>Built for local food lovers and international travelers.</h2>
        <ul className="feature-list">
          {experiencePoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
      <div className="cards-grid two-up">
        <article className="info-card">
          <h3>Business dinners</h3>
          <p>Quiet seating options, efficient service, and curated set menus.</p>
        </article>
        <article className="info-card">
          <h3>Celebration bookings</h3>
          <p>Birthdays, anniversaries, and private groups with tailored support.</p>
        </article>
      </div>
    </section>
  </>
);

export default Home;
