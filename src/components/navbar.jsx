import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-2 py-4 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
            <span className="text-2xl font-bold" style={{ color: '#12919E' }}>&lt;/&gt;</span>
            <h1 className="logo-text">Sanuthi Liyasika</h1>
            </div>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button 
            className="block md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-4 pb-4">
            {navItems.map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="nav-link block w-full text-left"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;