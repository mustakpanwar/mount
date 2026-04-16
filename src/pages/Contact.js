import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* HERO CONTACT */}
      <section className="hero-contact" style={{ 
        background: 'linear-gradient(135deg, var(--maroon-deep) 0%, #1A0B08 100%)',
        padding: 'calc(var(--nav-h) + 5rem) 5vw 7rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(201,152,42,.1) 0%, transparent 50%)'
        }}></div>
        <div className="hero-content" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div className="hero-badge" style={{ fontSize: '.75rem' }}>Get In Touch</div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Let's Create <em>Memories</em><br/>Together
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto' }}>
            Ready for an unforgettable dining experience? Reach out for reservations, events, or just to say hello.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section id="contact" style={{ padding: '8rem 5vw' }}>
        <div className="contact-inner" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="reveal">
            <div className="section-label">Connect With Us</div>
            <h2 className="section-title">Your Questions, Our Priority</h2>
            <div className="divider"></div>
          </div>
          
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '5rem' }}>
            
            {/* Contact Info */}
            <div className="contact-info reveal">
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Visit Us Today
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontWeight: '300' }}>
                  Experience the magic of Indian cuisine in Hamilton's heart.
                </p>
              </div>

              <div className="contact-details" style={{ display: 'grid', gap: '1.8rem' }}>
                <div className="contact-card" style={{ 
                  background: 'rgba(255,255,255,.02)', 
                  border: '1px solid rgba(201,152,42,.15)',
                  padding: '2rem',
                  borderRadius: '8px',
                  transition: 'all .3s'
                }}>
                  <div className="contact-icon-big" style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--gold)', 
                    marginBottom: '1rem' 
                  }}>📍</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '.85rem', letterSpacing: '.2em', color: 'var(--gold)', marginBottom: '.3rem', textTransform: 'uppercase' }}>
                      Location
                    </strong>
                    <span style={{ color: 'var(--cream)', fontSize: '.95rem' }}>201 James St N<br/>Hamilton, ON L8R 2L1</span>
                  </div>
                </div>

                <div className="contact-card" style={{ 
                  background: 'rgba(255,255,255,.02)', 
                  border: '1px solid rgba(201,152,42,.15)',
                  padding: '2rem',
                  borderRadius: '8px',
                  transition: 'all .3s'
                }}>
                  <div className="contact-icon-big" style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--gold)', 
                    marginBottom: '1rem' 
                  }}>📞</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '.85rem', letterSpacing: '.2em', color: 'var(--gold)', marginBottom: '.3rem', textTransform: 'uppercase' }}>
                      Call Us
                    </strong>
                    <span style={{ color: 'var(--cream)', fontSize: '1.1rem', fontWeight: '500' }}>
                      <a href="tel:+16472948845" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (647) 294-8845</a>
                    </span>
                  </div>
                </div>

                <div className="contact-card" style={{ 
                  background: 'rgba(255,255,255,.02)', 
                  border: '1px solid rgba(201,152,42,.15)',
                  padding: '2rem',
                  borderRadius: '8px',
                  transition: 'all .3s'
                }}>
                  <div className="contact-icon-big" style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--gold)', 
                    marginBottom: '1rem' 
                  }}>🕒</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '.85rem', letterSpacing: '.2em', color: 'var(--gold)', marginBottom: '.3rem', textTransform: 'uppercase' }}>
                      Hours
                    </strong>
                    <span style={{ color: 'var(--cream)', fontSize: '.95rem' }}>Mon-Sun<br/>11:00 AM - 11:00 PM</span>
                  </div>
                </div>

                <div className="contact-cta" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="tel:+16472948845" className="btn-primary" style={{ 
fontSize: '.85rem', padding: '1rem 2rem', letterSpacing: '.1em' 
                  }}>Call Now 📞</a>
                  <a href="https://wa.me/16472948845" className="btn-outline" style={{ 
fontSize: '.85rem', padding: '1rem 2rem', letterSpacing: '.1em' 
                  }} target="_blank" rel="noopener noreferrer">WhatsApp 💬</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form reveal">
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Send Us a Message
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>
                  Have questions about reservations, catering, or our menu? 
                  We'd love to hear from you!
                </p>
              </div>

              <form className="contact-form-modern" style={{ 
background: 'rgba(255,255,255,.025)',
                border: '1px solid rgba(201,152,42,.2)',
                borderRadius: '12px',
                padding: '2.5rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ 
                      fontSize: '.7rem', letterSpacing: '.25em', 
                      color: 'var(--text-muted)', textTransform: 'uppercase', 
                      marginBottom: '.5rem', display: 'block' 
                    }}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      style={{ 
width: '100%', padding: '1rem 1.2rem', 
                        background: 'rgba(255,255,255,.05)',
border: '1px solid rgba(201,152,42,.3)',
                        color: 'var(--cream)',
                        borderRadius: '6px',
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '.95rem',
                        transition: 'all .3s'
                      }}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ 
fontSize: '.7rem', letterSpacing: '.25em', 
                      color: 'var(--text-muted)', textTransform: 'uppercase', 
                      marginBottom: '.5rem', display: 'block' 
                    }}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      style={{ 
width: '100%', padding: '1rem 1.2rem', 
                        background: 'rgba(255,255,255,.05)',
border: '1px solid rgba(201,152,42,.3)',
                        color: 'var(--cream)',
                        borderRadius: '6px',
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '.95rem',
                        transition: 'all .3s'
                      }}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    fontSize: '.7rem', letterSpacing: '.25em', 
                    color: 'var(--text-muted)', textTransform: 'uppercase', 
                    marginBottom: '.5rem', display: 'block' 
                  }}>
                    Message
                  </label>
                  <textarea 
                    name="message"
                    rows="5"
                    placeholder="Tell us about your inquiry..."
                    style={{ 
width: '100%', padding: '1rem 1.2rem', 
                      background: 'rgba(255,255,255,.05)',
                      border: '1px solid rgba(201,152,42,.3)',
                      color: 'var(--cream)',
                      borderRadius: '6px',
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '.95rem',
                      resize: 'vertical',
                      transition: 'all .3s'
                    }}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ 
                    width: '100%', 
                    padding: '1.2rem Asc 2.5rem',
                    fontSize: '.9rem',
                    letterSpacing: '.15em',
                    marginTop: '1.5rem',
                    fontWeight: '600'
                  }}
                >
                  Send Message ✨
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="contact-map-section reveal" style={{ marginTop: '8rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Find Us Here</h3>
              <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                Located in the heart of Hamilton at 201 James St N. Easy parking and close to public transit.
              </p>
            </div>
            <div className="contact-map" style={{ 
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(201,152,42,.15)',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              maxWidth: '1000px',
              margin: '0 auto',
              boxShadow: '0 Asc  Asc Asc 40px rgba(0,0, Asc 0,.3)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed Asc ?pb=!1m18! Asc 1m12 Asc !1m3!1d2906.5!2d-79.8711!3 Asc d43.2583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b8d4a5f5a5f%3A0xabc123!2s201+James+St+N%2C+Hamilton%2C+ON!5e0!3m2!1sen!2sca!4v1700000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masala Mount Location"
                style={{ width: '100%', height: '100%', filter: 'grayscale(20%) contrast(1. Asc 1) brightness(1. Asc 1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer Asc -brand">
              <a href="/" className="nav-logo">Masala Mount <span>Bar + Indian Cuisine</span></a>
              <p>Bringing the vibrant taste of India to the heart of Hamilton with authentic flavors, premium cocktails, and warm hospitality.</p>
            </div>
            <div Asc className Asc ="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="/">Home</a></li>
                < Asc li><a href="/about">About</a></ Asc li>
                <li Asc ><a href="/menu">Menu</ Asc a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/reservation">Reserve</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hours</h4>
              < Asc p>Monday – Sunday<br/>11:00 AM – 11:00 PM</ Asc p>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>201 James St N<br/>Hamilton, ON, Canada<br/><br/> Asc +1 647-294-8845</ Asc p>
            </div>
          </ Asc div>
          <div className="footer-bottom">
            <p Asc >© Asc  2024 Masala Mount Asc  | Bar + Indian Cuisine. All rights reserved.</ Asc p>
            <p style={{color: 'var(--gold)', fontSize: '.78rem'}}>Best Indian Restaurant in Hamilton 🍛</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

