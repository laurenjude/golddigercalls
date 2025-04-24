import React from "react";
import { motion } from "framer-motion";
import caleb from "../../src/assets/C.jpg";
import jude from "../../src/assets/J.jpg";
import samuel from "../../src/assets/S.jpg";
import moon from "../../src/assets/CH.jpg";
import mario from "../../src/assets/M.jpg";
import author from "../../src/assets/A.jpg";
import alvaro from "../../src/assets/dinkoalvro.jpg";
import scot from "../../src/assets/G .jpg";
import rob from "../../src/assets/ROB.jpg";

import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Andrew Caleb",
      role: "CEO",
      image: caleb,
      socials: [
        {
          platform: "LinkedIn",
          link: "https://www.linkedin.com/in/caleb-andrew-omojowo-160a85295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          icon: <FaLinkedin />,
        },
        {
          platform: "Telegram",
          link: "https://t.me/crypto22tomoon",
          icon: <FaTelegram />,
        },
      ],
    },
    {
      id: 2,
      name: "Lauren Jude",
      role: "DEV",
      image: jude,
      socials: [
        {
          platform: "LinkedIn",
          link: "https://www.linkedin.com/in/lauren-jude-ifeloju-ogonno-97b90b1a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          icon: <FaLinkedin />,
        },
        {
          platform: "Portfolio",
          link: "https://laurens-potfolio.vercel.app/",
          icon: <FaLinkedin />, // Use a portfolio icon if available
        },
      ],
    },
    {
      id: 3,
      name: "Andrew Samuel",
      role: "CEO",
      image: samuel,
      socials: [
        {
          platform: "LinkedIn",
          link: "https://www.linkedin.com/in/samuel-andrew-00b2b6344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          icon: <FaLinkedin />,
        },
        {
          platform: "Telegram",
          link: "https://t.me/samiandrew",
          icon: <FaTelegram />,
        },
      ],
    },

    {
      id: 4,
      name: "Moonshine",
      role: "Host",
      image: moon,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/ShineM0oN",
          icon: <FaTelegram />,
        },
        {
          platform: "Twitter",
          link: "https://x.com/shinemoon016003?s=21",
          icon: <FaXTwitter />,
        },
      ],
    },
    {
      id: 5,
      name: "Mario",
      role: "Marketer",
      image: mario,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/Mario_Noyes",
          icon: <FaTelegram />,
        },
        {
          platform: "Twitter",
          link: "https://x.com/marionoyes?",
          icon: <FaXTwitter />,
        },
      ],
    },
    {
      id: 6,
      name: "Author Drey",
      role: "Marketer",
      image: author,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/authordrey",
          icon: <FaTelegram />,
        },
      ],
    },
    {
      id: 7,
      name: "Alvaro Dinko",
      role: "Marketer",
      image: alvaro,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/Alwayspump234",
          icon: <FaTelegram />,
        },
      ],
    },
    {
      id: 8,
      name: "Scot Baker",
      role: "Marketer",
      image: scot,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/scotbakker",
          icon: <FaTelegram />,
        },
      ],
    },
    {
      id: 9,
      name: "Robert",
      role: "Marketer",
      image: rob,
      socials: [
        {
          platform: "Telegram",
          link: "https://t.me/Rocha_Roberto",
          icon: <FaTelegram />,
        },
      ],
    },
  ];

  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "We embrace creativity and new ideas.",
    },
    {
      id: 2,
      title: "Integrity",
      description: "We act with honesty and transparency.",
    },
    {
      id: 3,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section (Image Only) */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          {/* Empty container for the image background */}
        </div>
      </motion.section>

      {/* Write-Up Section */}
      <motion.section
        className="about-writeup"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>ABOUT US</h2>
          <h1>Welcome to GOLDDIGGERS</h1>
          <p>
            Founded in 2021, GOLDDIGGERS has grown into Africa’s leading Web3
            marketing agency, accelerator, and strategic partner. We empower
            innovators by transforming bold ideas into industry-defining
            successes. Specializing in blockchain, DeFi, RWA, and DePIN, we
            provide the strategy, exposure, and connections needed to drive Web3
            adoption. More than just a company, GOLDDIGGERS is shaping the
            future of decentralized innovation in Africa and beyond.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="about-mission"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to accelerate the growth of Web3 by providing
            innovators with the marketing, strategy, and support needed to scale
            groundbreaking ideas into global successes.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="about-team"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="team-member"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-handles">
                  {member.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="about-values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <motion.div
                key={value.id}
                className="value-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
