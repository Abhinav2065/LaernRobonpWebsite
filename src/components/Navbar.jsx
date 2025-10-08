import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/Navbar.css"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNavbar');
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
        <div className="navbar" id="mainNavbar">
            <Link to="/" className="logo-link">
              <img src="logo.png" alt="" className="logo"/>
            </Link>

            <ul className="desktop-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <Link to="/donate" className="donate"><ol>Donate Us</ol></Link>
            
            <Link onClick={toggleMobileMenu} className="hamburger-link">
              <img src="burger-bar.png" alt="Burger" className="hamburger"/> 
            </Link>

            {isMobileMenuOpen && (
              <div className="mobile-menu">
                <div className="mobile-menu-content">
                  <ul>
                    <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to="/team" onClick={closeMobileMenu}>Team</Link></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                    <li><Link to="/donate" onClick={closeMobileMenu} className="donate-mobile">Donate Us</Link></li>
                  </ul>
                </div>
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar