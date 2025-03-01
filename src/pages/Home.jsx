import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import first from "../../src/assets/BYBIT LOGO .png";
import second from "../../src/assets/NEW LOGOS .png";
import third from "../../src/assets/BYBIT LOGO .png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Kols from "../../src/assets/okols.jpg";
import worlld from "../../src/assets/oworld.jpg";
import hand from "../../src/assets/safu.jpg";
import rise from "../../src/assets/ai one.jpg";
import create from "../../src/assets/create.jpg";
import goldenworld from "../../src/assets/goldenworld.jpg";
import otarget from "../../src/assets/otarget.jpg";
import heroimage from "../../src/assets/THE BEST HOME.png";
import {
  FaUser,
  FaChartLine,
  FaBook,
  FaMoneyBillWave,
  FaHandshake,
  FaCoins,
} from "react-icons/fa";

const Home = () => {
  const partnersRef = useRef(null);

  useEffect(() => {
    const partnersContainer = partnersRef.current;
    const scrollWidth = partnersContainer.scrollWidth;
    let scrollPosition = 0;

    const scrollPartners = () => {
      scrollPosition += -1; // Adjust speed here
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      partnersContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollPartners);
    };

    scrollPartners();
  }, []);

  const services = [
    {
      title: "AMA Sessions",
      description: "Interactive Q&A sessions with industry experts.",
      icon: "🎙️",
    },
    {
      title: "Web Development",
      description: "Build high-performance websites and applications.",
      icon: "🌐",
    },
    {
      title: "Incubators",
      description: "Nurture your startup with our resources and mentorship.",
      icon: "🚀",
    },
    {
      title: "Project Marketing",
      description: "Tailored marketing strategies for your projects.",
      icon: "📈",
    },
    {
      title: "Counseling",
      description: "Personalized guidance for career and business growth.",
      icon: "🧠",
    },
    {
      title: "Article Drop",
      description:
        "The idea is to generate interest in your site, build trust as an expert in your",
      icon: "💡",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Octanos",
      role: "CMO, BlOCKSQUARE",
      quote:
        "Thank you for the well organise event Seems many community leaders are following you guys. We got lots of positive feedback from people saying they listened to your AMA. Strong community.  If there is more space for coop in future please let us know.!",
    },
    {
      id: 2,
      name: "Mack Stachowiak",
      role: "CEO, AXONDAO",
      quote: "The questions where goood and it was a well maintain Xspace.",
    },
    {
      id: 3,
      name: "Jasmine Smith",
      role: "CEO, REJUVE.AI",
      quote: "Very insightful questions and highly knowledgeable community!.",
    },
    {
      id: 4,
      name: "Austin",
      role: "CED, DEEVE",
      quote: "very professional job. I enjoyed speaking with you!.",
    },
    {
      id: 5,
      name: "ALVIN NICOLAS",
      role: "FOUNDER,Metfx",
      quote:
        "“I highly recommend GOLDDIGGERS to any project owner looking to establish a strong presence in the crypto industry. As the leading African crypto community, their expertise and adaptability in the ever-evolving blockchain space make them an invaluable partner. With GOLDDIGGERS by your side, you gain a dedicated and dynamic ally committed to your project’s success.",
    },
  ];

  const achievements = [
    {
      id: 1,
      icon: <FaUser />,
      title: "KOLs",
      value: 2000,
      description:
        "We’ve collaborated with over 2000 Key Opinion Leaders in the crypto space.",
      image: Kols,
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Total Volume Generated",
      value: 1000000000,
      description:
        "Our projects have generated over $1B in total trading volume.",
      image: worlld,
    },
    {
      id: 3,
      icon: <FaBook />,
      title: "Success Stories",
      value: 300,
      description:
        "We’ve helped create over 300 successful projects and stories.",
      image: hand,
    },
    {
      id: 4,
      icon: <FaMoneyBillWave />,
      title: "Funds Raised",
      value: 200000000,
      description:
        "We’ve raised over $200M in funding for our ecosystem projects.",
      image: rise,
    },
    {
      id: 5,
      icon: <FaHandshake />,
      title: "Ecosystem Partners",
      value: 400,
      description: "We’ve partnered with over 400 ecosystem players globally.",
      image: otarget,
    },
    {
      id: 6,
      icon: <FaCoins />,
      title: "Total Volume Generated",
      value: 600000000,
      description:
        "Our projects have generated over $600M in total trading volume.",
      image: create,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            {/* Text Content */}
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>
                Welcome to <span className="gold-text">Gold Diggers</span>
              </h1>
              <p>Your trusted partner in crypto innovation and marketing.</p>
              <Link to="https://calendly.com/golddiggers435/golddiggers-meeting">
                <motion.button
                  className="cta-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={heroimage} alt="Gold Diggers" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <Link to="/services" onClick={scrollToTop}>
            <h2>Our Services</h2>
          </Link>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            No 1 African leading incubator & 𝗺𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗳𝗶𝗿𝗺 bringing web3 to
            Africa we are also exploring the intergration of Decentralised
            Physical infrastructure Network DePIN and RWA into our strategy.
          </motion.p>
          <Link to="/about" onClick={scrollToTop}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="cta-button"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <Link to="/projects" onClick={scrollToTop}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card">
                    <p>{testimonial.quote}</p>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="partners-container" ref={partnersRef}>
            <div className="partners-track">
              <img src={first} alt="Partner 1" />
              <img src={second} alt="Partner 2" />
              <img src={third} alt="Partner 3" />
              {/* Duplicate images for seamless looping */}
              <img src={first} alt="Partner 1" />
              <img src={second} alt="Partner 2" />
              <img src={third} alt="Partner 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundImage: `url(${achievement.image})` }}
              >
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">{achievement.icon}</div>
                  <h3>
                    <CountUp
                      start={0}
                      end={achievement.value}
                      duration={100}
                      separator=","
                      prefix={
                        achievement.title === "Total Volume Generated" ||
                        achievement.title === "Funds Raised"
                          ? "$"
                          : ""
                      }
                    />
                    +
                  </h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="motivational-statement"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Accelerate your Web3 success, unlocking potential through a
              seamless journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join us today and take your project to the next level.</p>
          <Link to="/contact" onClick={scrollToTop}>
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
