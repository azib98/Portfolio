import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleScrollClick = () => {
    navigate("/portfolio");
  };

  return (
    <section className="home-section" id="home">
      {/* Stars */}
      <div className="stars"></div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape square"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-name">Azib Tanveer</h1>
        <p className="hero-title">Front-End & Full-Stack Developer</p>

        <motion.button
          className="scroll-down"
          onClick={handleScrollClick}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Home;
