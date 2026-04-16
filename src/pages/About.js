import React from 'react';

const About = () => {
  return (
    <>
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

      {/* STORY */}
      <section id="about-story">
        <div className="story-inner">
          <div className="reveal">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Born from a <em>Passion</em> for Flavor</h2>
            <div className="divider"></div>
          </div>
          <div className="story-grid">
            <div className="story-text reveal">
              <p>
                Masala Mount was created with a vision to blend traditional Indian flavors
                with a modern dining experience. Located in the vibrant heart of Hamilton,
                we aim to deliver not just food, but a complete experience filled with
                taste, ambiance, and unmatched hospitality.
              </p>
              <p>
                Our chefs bring years of expertise in Indian cuisine, ensuring every dish
                reflects authenticity and passion. From slow-simmered curries to the perfect
                cocktail, every detail is crafted with intention and care.
              </p>
              <p>
                Whether you're discovering Indian cuisine for the first time or returning
                for your favourite dish, we welcome you to the Masala Mount family.
              </p>
              <div className="story-stats">
                <div className="stat-box">
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Menu Items</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">4.9★</div>
                  <div className="stat-label">Rating</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">∞</div>
                  <div className="stat-label">Good Vibes</div>
                </div>
              </div>
            </div>
            <div className="story-visual reveal">
              <div className="story-accent"></div>
              <div className="story-img">🍽️</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

