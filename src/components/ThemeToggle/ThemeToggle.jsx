import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle-button" 
        onClick={toggleTheme} 
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${theme}`}>
            <motion.div 
              initial={false}
              animate={{ rotate: theme === 'dark' ? 40 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </motion.div>
          </div>
        </div>
      </button>
    </div>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default ThemeToggle;