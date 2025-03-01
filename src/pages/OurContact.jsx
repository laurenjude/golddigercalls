import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = "service_bysgcxo";
    const templateID = "template_ggc7aej";
    const publicKey = "JRF2MHXdJ7xDg6dP_";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark", // Match the website's dark theme
          style: {
            background: "#1a1a1a", // Black background
            color: "#ffd700", // Gold text
            border: "1px solid #ffd700", // Gold border
          },
        });
        form.current.reset(); // Reset the form after submission
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: {
            background: "#1a1a1a",
            color: "#ffd700",
            border: "1px solid #ffd700",
          },
        });
      }
    );
  };

  return (
    <div className="contact-page">
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Golddiggers Team</h1>
          <p>
            We're here to help! Reach out to us for any inquiries or
            collaborations.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: Golddigers435@gmail.com</p>
            <p>github: https://github.com/laurenjude</p>

            <div className="social-links">
              <a
                href="https://www.facebook.com/share/75x3buvLoZJZitUQ/?mibextid=LQQJ4d"
                className="icon"
              >
                <FaFacebook />
              </a>
              <a href="https://x.com/golddigerscalls" className="icon">
                <FaTwitter />
              </a>
              <a href="https://linktr.ee/golddiggerscall" className="icon">
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/golddiggerscalls?igsh=NnVqbTU0NnMzbW96&utm_source=qr"
                className="icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Golddiggers Team?</h2>
          <div className="usps">
            <div className="usp-card">
              <h3>Expertise in Crypto</h3>
              <p>
                Our team has deep knowledge and experience in the crypto and
                blockchain industry.
              </p>
            </div>
            <div className="usp-card">
              <h3>Tailored Marketing Strategies</h3>
              <p>
                We create customized marketing plans to help your project stand
                out.
              </p>
            </div>
            <div className="usp-card">
              <h3>Proven Track Record</h3>
              <p>We’ve helped numerous clients achieve their business goals.</p>
            </div>
            <div className="usp-card">
              <h3>24/7 Support</h3>
              <p>We’re always available to assist you with your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurContact;
