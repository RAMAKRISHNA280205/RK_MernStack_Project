import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

function SkillBar({ name, percentage, color, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress-bg">
        <motion.div 
          className="skill-progress-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCard({ icon, title, description, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      <div className="skill-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        
        <div className="skills-content">
          <div className="skills-category">
            <h3>Professional Skills</h3>
            <div className="skill-bars">
              <SkillBar name="HTML/CSS" percentage={95} color="var(--color-primary-500)" delay={0.1} />
              <SkillBar name="JavaScript" percentage={90} color="var(--color-primary-600)" delay={0.2} />
              <SkillBar name="React" percentage={85} color="var(--color-secondary-500)" delay={0.3} />
              <SkillBar name="TypeScript" percentage={80} color="var(--color-secondary-600)" delay={0.4} />
              <SkillBar name="Node.js" percentage={75} color="var(--color-accent-500)" delay={0.5} />
              <SkillBar name="UI/UX Design" percentage={70} color="var(--color-accent-600)" delay={0.6} />
            </div>
          </div>
          
          <motion.div 
            ref={ref}
            className="skills-services"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3>Services I Offer</h3>
            <div className="service-cards">
              <SkillCard 
                icon="🎨"
                title="Web Design"
                description="Creating beautiful, intuitive designs focused on user experience and business goals."
                delay={0.1}
              />
              <SkillCard 
                icon="💻"
                title="Web Development"
                description="Building fast, responsive websites and applications using modern frameworks."
                delay={0.2}
              />
              <SkillCard 
                icon="📱"
                title="Responsive Design"
                description="Ensuring your site looks and works perfectly on all devices and screen sizes."
                delay={0.3}
              />
              <SkillCard 
                icon="🚀"
                title="Performance Optimization"
                description="Improving load times and overall performance for better user experience."
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;