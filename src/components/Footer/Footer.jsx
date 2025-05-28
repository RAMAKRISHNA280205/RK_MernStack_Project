import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Personel Portfolio</span>
          </div>
          
          <p className="footer-text">
            Helping People through Knowlwdge
          </p>
          
          <div className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Ramakrishnan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;