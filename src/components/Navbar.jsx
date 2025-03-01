import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../src/assets/Golddiggers logo .png";
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
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Button (Desktop) */}
        <div className="navbar-button">
          <a
            href="https://calendly.com/golddiggers435/golddiggers-meeting"
            className="btn"
          >
            BOOK A MEETING
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
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
                <a href="/" onClick={toggleMobileMenu} className="nav-link">
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/services"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Services
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/about"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  About
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/projects"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Projects
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="/contact"
                  onClick={toggleMobileMenu}
                  className="nav-link"
                >
                  Contact Us
                </a>
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
