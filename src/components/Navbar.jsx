import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../style/Navbar.css"

const Navbar = () => {
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
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="navbar" id="mainNavbar">
            <Link to="/" className="logo-link">
              <img src="logo.png" alt="" className="logo"/>
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/donate" className="donate">Donate Us</Link>
        </div>
    </div>
  )
}

export default Navbar