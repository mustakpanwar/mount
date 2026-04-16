import React from 'react';

const pillars = [
  {
    title: 'Culinary authenticity',
    text: 'Traditional spice layering and modern plating techniques, led by experienced chefs.'
  },
  {
    title: 'International hospitality',
    text: 'Fast communication, dietary awareness, and service quality designed for diverse guests.'
  },
  {
    title: 'Premium atmosphere',
    text: 'A polished interior and lively bar experience, ideal for both casual and formal evenings.'
  }
];

const About = () => (
  <section className="content-section">
    <p className="eyebrow">About us</p>
    <h1>Hamilton’s destination for elevated Indian dining.</h1>
    <p>
      Masala Mount brings together the depth of Indian culinary heritage and the precision of
      contemporary global hospitality to create memorable dining moments.
    </p>
    <div className="cards-grid">
      {pillars.map((pillar) => (
        <article className="info-card" key={pillar.title}>
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default About;
