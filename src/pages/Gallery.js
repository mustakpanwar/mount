import React from 'react';

const moments = [
  { title: 'Signature tasting', icon: '🍽️' },
  { title: 'Craft cocktail bar', icon: '🍸' },
  { title: 'Private dining setup', icon: '🥂' },
  { title: 'Chef specials', icon: '🔥' },
  { title: 'Weekend social nights', icon: '🎶' },
  { title: 'Celebration service', icon: '🎉' }
];

const Gallery = () => (
  <section className="content-section">
    <p className="eyebrow">Gallery</p>
    <h1>Moments from our dining experience.</h1>
    <p>Every table is designed to feel special—whether it is date night, business dinner, or family celebration.</p>

    <div className="gallery-grid">
      {moments.map((moment) => (
        <article key={moment.title} className="gallery-tile">
          <div className="tile-art">{moment.icon}</div>
          <h3>{moment.title}</h3>
        </article>
      ))}
    </div>
  </section>
);

export default Gallery;
