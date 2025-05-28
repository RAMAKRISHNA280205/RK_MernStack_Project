import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
        </div>

        <nav className="desktop-nav">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </header>
  );
}

export default Header;