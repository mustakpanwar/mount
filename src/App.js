import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="topbar">Open Daily · Fine Indian Dining · Reservations confirmed in under 30 minutes</header>

      <nav className={`site-nav ${navScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand">
          Masala Mount
          <span>International Restaurant & Cocktail Bar</span>
        </Link>

        <button
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}><NavLink to={item.to}>{item.label}</NavLink></li>
          ))}
          <li><NavLink to="/reservation" className="nav-cta">Book Table</NavLink></li>
        </ul>
      </nav>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div>
          <h4>Masala Mount</h4>
          <p>201 James St N, Hamilton, ON</p>
          <p>+1 (647) 294-8845</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>Mon–Sun · 11:00 AM – 11:00 PM</p>
          <p>Private dining available on request.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservations</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>

      <div className="float-actions" aria-label="quick actions">
        <a href="https://wa.me/16472948845" target="_blank" rel="noreferrer" aria-label="Message on WhatsApp">💬</a>
        <a href="tel:+16472948845" aria-label="Call the restaurant">📞</a>
      </div>
    </>
  );
}

export default App;
