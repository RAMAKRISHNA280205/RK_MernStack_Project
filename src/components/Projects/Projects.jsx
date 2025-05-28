import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Web App",
    image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    description: "A comprehensive dashboard for e-commerce store management with real-time analytics and inventory tracking.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Travel Blog Platform",
    category: "Web Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCx79yfnm6spphxlxGLB-O_XAR6d4ZWBRrw&s",
    description: "A modern blogging platform designed for travel enthusiasts to share their experiences and connect with others.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    link: "#"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile App",
    image: "data:image/jpeg;base64,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",
    description: "A cross-platform fitness application that helps users track workouts, nutrition, and progress over time.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    link: "#"
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "Web Design",
    image: "https://thumbs.dreamstime.com/b/conceptual-display-website-redesign-business-approach-modernize-improver-evamp-your-s-look-feel-text-showing-inspiration-266966872.jpg",
    description: "A complete redesign of a corporate website focusing on improved user experience and conversion rates.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress"],
    link: "#"
  }
];

// Filter categories
const categories = ["All", "Web Design", "Web App", "Mobile App"];

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="project-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              &times;
            </button>
            
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="modal-content">
              <h3>{project.title}</h3>
              <p className="modal-category">{project.category}</p>
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <a href={project.link} className="button primary-button" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => onClick(project)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <span className="view-details">View Details</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;