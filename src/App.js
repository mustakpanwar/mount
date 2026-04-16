import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          Masala Mount <span>Bar + Indian Cuisine</span>
        </Link>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/menu" onClick={closeMobileMenu}>Menu</Link></li>
          <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          <li><Link to="/reservation" className="nav-cta" onClick={closeMobileMenu}>Reserve</Link></li>
        </ul>
        <button 
          className="hamburger" 
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* FLOATING BUTTONS */}
      <div className="float-btns">
        <a href="https://wa.me/16472948845" className="float-btn float-whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp">💬</a>
        <a href="tel:+16472948845" className="float-btn float-call" title="Call Us">📞</a>
      </div>
    </>
  );
}

export default App;

