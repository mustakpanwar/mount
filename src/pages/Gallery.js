import React from 'react';

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <div className="gallery-inner">
          <div className="gallery-header reveal">
            <div className="section-label">Gallery</div>
            <h2 className="section-title">A Feast for the <em>Eyes</em></h2>
            <div className="divider"></div>
          </div>
          <div className="gallery-grid reveal">
            <div className="gallery-card gc1">
              <div className="gallery-card-inner"><div className="gallery-icon">🍛</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Signature Curries</div>
            </div>
            <div className="gallery-card gc2">
              <div className="gallery-card-inner"><div className="gallery-icon">🌯</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Tikka Wraps</div>
            </div>
            <div className="gallery-card gc3">
              <div className="gallery-card-inner"><div className="gallery-icon">🍹</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Craft Cocktails</div>
            </div>
            <div className="gallery-card gc4">
              <div className="gallery-card-inner"><div className="gallery-icon">🎊</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Special Events</div>
            </div>
            <div className="gallery-card gc5">
              <div className="gallery-card-inner"><div className="gallery-icon">✨</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Restaurant Ambiance</div>
            </div>
            <div className="gallery-card gc6">
              <div className="gallery-card-inner"><div className="gallery-icon">🍺</div></div>
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Bar Experience</div>
            </div>
          </div>

          <div className="testimonials-wrap">
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <p>Amazing authentic taste! Every dish reminded me of home-cooked Indian meals with a premium twist. Will absolutely be back.</p>
              <div className="testimonial-author">— Priya S., Hamilton</div>
            </div>
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <p>Best Indian restaurant in Hamilton, hands down. The Chicken Tikka Wrap and the cocktails are a match made in heaven!</p>
              <div className="testimonial-author">— James T., Burlington</div>
            </div>
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <p>Loved the vibe, the drinks, and the food equally. Perfect spot for a date night or a gathering with friends.</p>
              <div className="testimonial-author">— Aisha M., Oakville</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured">
        <div className="featured-inner">
          <div className="featured-visual reveal">
            <div className="dish-ring-2"></div>
            <div className="dish-ring"></div>
            <div className="dish-circle">🌯</div>
          </div>
          <div className="featured-text reveal">
            <div className="featured-tag">Chef's Signature</div>
            <h2 className="section-title">Chicken Tikka <em>Wrap</em></h2>
            <div className="divider"></div>
            <p>
              Juicy, spice-marinated chicken wrapped in soft golden bread with fresh
              garden toppings and our house signature sauces. A must-try favorite that
              captures the soul of Masala Mount in every bite.
            </p>
            <a href="/reservation" className="btn-primary">Order at the Table</a>
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

export default Gallery;

