import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-intro">
            Hello, I'm
          </motion.p>
          <motion.h1 variants={itemVariants} className="hero-name">
            Ramakrishna
          </motion.h1>
          <motion.h2 variants={itemVariants} className="hero-title">
            Student Freelancer
          </motion.h2>
          <motion.p variants={itemVariants} className="hero-description">
            I can help people with the experiences i gain with modern technologies.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#projects" className="button primary-button">View My Work</a>
            <a href="#contact" className="button secondary-button">Get In Touch</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="image-container">
            <div className="image-placeholder">
              <span className="profile-text">Krish</span>
            </div>
          </div>
          <div className="hero-background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;