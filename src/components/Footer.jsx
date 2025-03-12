import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaBloggerB,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X logo for Twitter
import { FaTelegram } from "react-icons/fa"; // Telegram logo
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="icons">
              <a
                href="https://t.me/golddigerscalls"
                target="_blank"
                rel="noopener noreferrer">
                <FaTelegram />
              </a>
              <a
                href="https://youtube.com/@golddiggerscall?si=cSF38C9AtHdu354B"
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/share/75x3buvLoZJZitUQ/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@golddiggerscall?_t=8p7RTzxx7KQ&_r=1"
                target="_blank"
                rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com/golddiggerscalls?igsh=NnVqbTU0NnMzbW96&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a
                href="https://x.com/golddigerscalls"
                target="_blank"
                rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a
                href="https://linktr.ee/golddiggerscall"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a
                href="https://golddiggerscalls.blogspot.com/?m=1"
                target="_blank"
                rel="noopener noreferrer">
                <FaBloggerB />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="copyright">
          <p>&copy; 2024 Gold Diggers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
