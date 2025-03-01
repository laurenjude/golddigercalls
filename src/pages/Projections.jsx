import React from "react";
import { motion } from "framer-motion";
import axon from "../../src/assets/AXONDAO.png";
import sak from "../../src/assets/SACARRO .png";
import bloc from "../../src/assets/BLOCKSQURE .png";
import rite from "../../src/assets/RiteSRteam .png";
import aurus from "../../src/assets/AURUS .png";
import blx from "../../src/assets/BLOCX .png";
import ethcl from "../../src/assets/ETHERNITY CLOUD .png";
import runflx from "../../src/assets/FLUX .png";
import dynex from "../../src/assets/DYNEX .png";
import nolus from "../../src/assets/NOLUS .png";
import xgb from "../../src/assets/XDB CHAIN .png";
import stabble from "../../src/assets/STABBLE .png";
import prim from "../../src/assets/PRIMEX .png";
import ethswap from "../../src/assets/SWARM .png";
import reju from "../../src/assets/REJEVU .png";

const projects = [
  {
    name: "Axon DAO",
    logo: axon,
    website: "https://www.axondao.io/",
    description:
      "Axon DAO is a decentralized autonomous organization focused on blockchain innovation. We assisted in building their governance model and smart contract infrastructure.",
    youtube: "https://www.youtube.com/embed/_XziRGKe7mc",
  },
  {
    name: "Saakuru",
    logo: sak,
    website: "https://saakuru.com/",
    description:
      "Saakuru is a cutting-edge platform for decentralized applications. We provided strategic consulting and development support to enhance their ecosystem.",
    youtube: "https://www.youtube.com/embed/LxhJs4U4e-M",
  },
  {
    name: "Blocksquare",
    logo: bloc,
    website: "https://blocksquare.io/",
    description:
      "Blocksquare is a blockchain-based real estate platform. We helped them integrate blockchain technology into their property management system.",
    youtube: "https://www.youtube.com/embed/erjAHmJOZcU",
  },
  {
    name: "RiteStream",
    logo: rite,
    website: "https://www.ritestream.io/",
    description:
      "RiteStream is a decentralized content streaming platform. We developed their smart contracts and tokenomics model.",
    youtube: "https://www.youtube.com/embed/BQn9DPwIS-s?",
  },
  {
    name: "Aurus",
    logo: aurus,
    website: "https://aurus.io/",
    description:
      "Aurus is a blockchain-based precious metals platform. We assisted in building their tokenization infrastructure.",
    youtube: "https://www.youtube.com/embed/p_rnJJRaqFs?",
  },
  {
    name: "BlocX",
    logo: blx,
    website: "https://blocx.tech/",
    description:
      "BlocX is a decentralized cloud storage platform. We provided development support for their blockchain integration.",
    youtube: "https://www.youtube.com/embed/EfbyQaVQHDo?",
  },
  {
    name: "Ethernity Cloud",
    logo: ethcl,
    website: "https://ethernity.cloud/",
    description:
      "Ethernity Cloud is a decentralized cloud computing platform. We helped them optimize their smart contracts and network architecture.",
    youtube: "https://www.youtube.com/embed/6Jjw88jc0T8?",
  },
  {
    name: "RunOnFlux",
    logo: runflx,
    website: "http://www.runonflux.com/",
    description:
      "RunOnFlux is a decentralized computing network. We assisted in scaling their infrastructure and improving network performance.",
    youtube: "https://www.youtube.com/embed/EfbyQaVQHDo?",
  },
  {
    name: "Dynex",
    logo: dynex,
    website: "https://dynexcoin.org/",
    description:
      "Dynex is a decentralized neuromorphic computing platform. We provided development support for their blockchain and AI integration.",
    youtube: "https://www.youtube.com/embed/yjwlLX-_tlk?",
  },
  {
    name: "Nolus",
    logo: nolus,
    website: "https://nolus.io/",
    description:
      "Nolus is a decentralized finance platform. We helped them build their lending and borrowing protocols.",
    youtube: "https://www.youtube.com/embed/eNaJy_km3u0?",
  },
  {
    name: "XDB Chain",
    logo: xgb,
    website: "https://www.xdbchain.com/",
    description:
      "XDB Chain is a blockchain for digital assets. We assisted in developing their tokenization and asset management tools.",
    youtube: "https://www.youtube.com/embed/_O4yZFbxezw?",
  },
  {
    name: "Stabble",
    logo: stabble,
    website: "https://stabble.org/",
    description:
      "Stabble is a decentralized stablecoin platform. We helped them design and implement their stablecoin protocols.",
    youtube: "https://www.youtube.com/embed/WCjkl2cwmhM?",
  },
  {
    name: "Primex",
    logo: prim,
    website: "https://primex.finance/",
    description:
      "Primex is a decentralized trading platform. We provided development support for their trading and liquidity protocols.",
    youtube: "https://www.youtube.com/embed/qRQbD83yQfA?",
  },
  {
    name: "Ethereum Swarm",
    logo: ethswap,
    website: "https://ethswarm.org/",
    description:
      "Ethereum Swarm is a decentralized storage and communication system. We assisted in optimizing their network performance.",
    youtube: "https://www.youtube.com/embed/WCjkl2cwmhM?",
  },
  {
    name: "Rejuve",
    logo: reju,
    website: "https://rejuve.ai/",
    description:
      "Rejuve is a decentralized longevity research platform. We helped them integrate blockchain technology into their data-sharing ecosystem.",
    youtube: "https://www.youtube.com/embed/ckBmhvc8kAw?",
  },
];

const Projections = () => {
  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the amazing projects we've partnered with and contributed to
          their growth.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-logo">
                <img src={project.logo} alt={`${project.name} Logo`} />
              </div>
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.website}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <div className="youtube-placeholder">
                <iframe
                  width="100%"
                  height="200"
                  src={project.youtube}
                  title={`${project.name} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projections;
