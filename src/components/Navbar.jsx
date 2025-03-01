import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../src/assets/updated LOGO.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" onClick={scrollToTop}>
          <div className="navbar-logo">
            <img src={logo} alt="Golddiggers Logo" />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={scrollToTop}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={scrollToTop}>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Button (Desktop) */}
        <div className="navbar-button">
          <a
            href="https://calendly.com/golddiggers435/golddiggers-meeting"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK A MEETING
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span
            className={`hamburger${isMobileMenuOpen ? "active" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button className="close-button" onClick={toggleMobileMenu}>
              &times;
            </button>

            {/* Menu Items */}
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/" onClick={toggleMobileMenu} className="nav-link">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/services"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/about"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/projects"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu}
          ></motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
