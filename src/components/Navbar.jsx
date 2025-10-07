import React, { useEffect } from 'react'
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
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
        <div className="navbar" id="mainNavbar">
            <img src="logo.png" alt="" className="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
            <div className="donate">Donate Us</div>
        </div>
    </div>
  )
}

export default Navbar