import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineSearch } from "react-icons/ai";

const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [faqActiveIndex, setFaqActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setFaqActiveIndex(faqActiveIndex === index ? null : index);
  };

  const services = [
    {
      title: "AMA Sessions",
      icon: "🎙",
      description:
        "Our Ask Me Anything (AMA) sessions provide a platform for you to interact directly with industry experts. Get your questions answered in real-time and gain valuable insights.",
      details: [
        "Live Q&A with industry leaders.",
        "Exclusive insights into trending topics.",
        "Networking opportunities with like-minded individuals.",
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      description:
        "We specialize in building responsive, user-friendly, and high-performance websites. From front-end design to back-end development, we cover it all.",
      details: [
        "Custom website design and development.",
        "E-commerce solutions.",
        "SEO optimization for better visibility.",
      ],
    },
    {
      title: "Incubators",
      icon: "🚀",
      description:
        "Our incubator programs are designed to nurture startups and innovative ideas. We provide mentorship, resources, and funding to help you succeed.",
      details: [
        "Access to a network of investors.",
        "Workshops and training sessions.",
        "Funding opportunities for promising startups.",
      ],
    },
    {
      title: "Project Marketing",
      icon: "📈",
      description:
        "We help you market your projects effectively with tailored strategies. From social media campaigns to SEO, we ensure your project reaches the right audience.",
      details: [
        "Social media marketing and management.",
        "Listing and Trending.",
        "AirDrop and Campagne Support.",
        "AMA Tours",
        "Bot Tours",
      ],
    },
    {
      title: "Career Counseling",
      icon: "🧠",
      description:
        "Our counseling services offer personalized guidance for career, business, and personal growth. Let us help you make informed decisions.",
      details: [
        "One-on-one career coaching sessions.",
        "Resume and interview preparation.",
        "Personalized career roadmaps.",
      ],
    },
    {
      title: "Article Drop",
      icon: "💡",
      description:
        "The idea is to generate interest in your site, build trust as an expert in your niche, and create backlinks to your site that will improve its search engine rankings.",
      details: [
        "By creating articles for the general public, your projects reach the proper audience.",
        "More people will see the site on their search engines.",
        "The more interesting your content is, the more visitors and sales it will bring.",
      ],
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Audience & Community Size?",
      answer: [
        "Our community consists of approximately 100,000 members across Telegram, Twitter, TikTok, YouTube, Instagram, and Facebook.",
        "We typically have a minimum of 150 participants joining our AMA sessions daily, with around 4,000 views per post and strong engagement.",
        "Our audience is primarily based in Africa, with a growing presence in Asia and Europe. While we don’t have exact demographic data, our members are passionate about Web3, DePIN, RWA, and DeFi.",
      ],
    },
    {
      id: 2,
      question: "Reputation & Credibility?",
      answer: [
        "Our community has been active for over six years, hosting 200+ projects globally.",
        "We’ve worked with highly reputable projects and founders, including:",
        "- Daniel (CEO of FLUX)",
        "- Denis (CEO of Blocksquare)",
        "- Austin (DevvE.io)",
        "- Mark (CEO of Axondao)",
        "- Victor (CEO of Swarm)",
        "- Vad & Dmitry (CEO of Primex)",
        "- Clifford (Dynex).",
        "We prioritize bringing in credible, high-quality projects because we believe in supporting the future of crypto.",
      ],
    },
    {
      id: 3,
      question: "Structure & Format?",
      answer: [
        "Our AMAs are highly interactive and transparent, allowing the community to engage deeply with projects.",
        "Duration: 1-hour session",
        "- 40 minutes: Project introduction & ecosystem discussion",
        "- 20 minutes: Community Q&A",
        "We conduct both live voice and text-based sessions to accommodate all participants.",
        "All AMAs are recorded and uploaded to YouTube for those who cannot attend live.",
      ],
    },
    {
      id: 4,
      question: "Promotional Effort & Support?",
      answer: [
        "We take promotion seriously and ensure every AMA gets the exposure it deserves.",
        "Before the AMA:",
        " We post across Twitter & Telegram to build engagement.",
        "We encourage our community to tag at least five people to increase visibility.",
        "We collaborate with neighboring communities to further expand reach.",
        "After the AMA:",
        " We share recap content and highlights to maintain momentum.",
        "We ensure continued engagement for sustained interest.",
      ],
    },
    {
      id: 5,
      question: "Token Holder Growth & Utility Discussion?",
      answer: [
        "Discussing token utility and longevity is a key focus of our AMAs.",
        "We don’t promise investment commitments but provide exposure and education, allowing our community to evaluate projects independently.",
        "We always include a CTA (Call-to-Action) and encourage our community to engage with projects.",
      ],
    },
    {
      id: 6,
      question: "Compensation & Incentives?",
      answer: [
        "We accept token-based rewards, provided they are live and liquid to ensure smooth distribution.",
        "We require rewards to be sent before we start promotions.",
        "Distribution Process:",
        " Rewards are allocated based on community engagement, including thoughtful questions and Twitter interactions.",
        " To ensure transparency and accountability, rewards are sent to our community wallet before the session.",
        "This prevents delays or issues, as we’ve experienced situations where projects failed to follow through post-AMA.",
      ],
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We offer a wide range of services to help you achieve your goals.
          </motion.p>
          <motion.div
            className="search-bar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="container">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accordion Section */}
      <section className="accordion-section">
        <div className="container">
          <h2>Detailed Services</h2>
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="accordion-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{service.title}</h3>
                <span>
                  {activeIndex === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <motion.div
                  className="accordion-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="faq-header" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <span>
                  {faqActiveIndex === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
              {faqActiveIndex === index && (
                <motion.div
                  className="faq-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 2, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {faq.answer.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
