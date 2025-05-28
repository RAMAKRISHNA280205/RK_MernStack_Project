import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="about-content"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about-image">
            <div className="image-placeholder">
              <span>About</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Ramakrishnan, from Coimbatore, TamilNadu , India.
            </p>
            
            <p>
              I'm currently studying as a Student at Anna University Regional campus Coimbatore. 
              I'm pursuing my B.E in Computer Science and Engineering, where I am honing my skills in programming, software development, and problem-solving.
              I have decided to use my skills to create innovative solutions that can make a difference in people's lives.
              So here I am, Helping Out the people with my skills and knowledge, by Doning Freelance Projects and Contributing to Open Source.
            </p>
            
            <p>
              My Hobbies are Photography, Travelling, Gaming and Coding. I have a keen interest in web development and design, which has allowed me to create engaging and user-friendly websites. 
              My journey into the world of technology started with a simple curiosity about how things work, especially in the digital realm
              What began as curiosity quickly evolved into a passion that led me to pursue a career in this ever-evolving field.
            </p>
            
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Ramakrishna</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">ramakrishnanbharathig@gmail.com</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Coimbatore, Tamilnadu, India</span>
              </div>
              
              <div className="about-detail">
                <span className="detail-label">Availability:</span>
                <span className="detail-value available">Available for freelance</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="button primary-button">Contact Me</a>
              <a href="#" className="button secondary-button">Download CV</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;