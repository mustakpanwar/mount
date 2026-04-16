import React from 'react';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section id="home">
        <div className="hero-bg"></div>
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">Hamilton, Ontario · Est. 2024</div>
          <h1 className="hero-title">
            Where Indian <em>Spice</em><br/>Meets Canadian Heights
          </h1>
          <p className="hero-sub">
            Experience bold Indian flavors, premium cocktails, and an unforgettable
            dining atmosphere in the heart of Hamilton.
          </p>
          <div className="hero-btns">
            <a href="/menu" className="btn-primary">View Menu</a>
            <a href="/reservation" className="btn-outline">Reserve a Table</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-wrap">
              <div className="about-img-inner">
                <div className="about-img-icon">🍛</div>
              </div>
            </div>
            <div className="about-badge">
              <div className="about-badge-num">100%</div>
              <div className="about-badge-text">Authentic<br/>Flavors</div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="section-label">Welcome to Masala Mount</div>
            <h2 className="section-title">A Taste of <em>India</em> in Hamilton</h2>
            <div className="divider"></div>
            <p>
              At Masala Mount, we bring the vibrant taste of India to the heart of Hamilton.
              Our chefs craft every dish with authentic spices, fresh ingredients, and modern
              presentation that honors generations of culinary tradition.
            </p>
            <p>
              Whether you're here for a casual meal or a night out with drinks, we promise
              a unique culinary journey — from aromatic curries to handcrafted cocktails
              inspired by the colors of India.
            </p>
            <div className="highlights">
              <div className="highlight-item"><span className="highlight-dot"></span>Authentic Indian Cuisine</div>
              <div className="highlight-item"><span className="highlight-dot"></span>Premium Bar & Cocktails</div>
              <div className="highlight-item"><span className="highlight-dot"></span>Cozy & Stylish Ambiance</div>
              <div className="highlight-item"><span className="highlight-dot"></span>Perfect for Family & Friends</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

