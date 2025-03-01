// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "../src/pages/AboutUs";
import Careers from "../src/pages/Careers";
import OurContact from "./pages/OurContact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projections from "./pages/Projections";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar (visible on all pages) */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Careers />} />
          <Route path="/contact" element={<OurContact />} />
          <Route path="/projects" element={<Projections />} />
        </Routes>

        {/* Footer (visible on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
