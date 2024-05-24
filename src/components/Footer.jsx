import React from 'react';
import linkedinIcon from '../images/linkedin-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import githubIcon from '../images/github-icon.png';
import './Footer.css'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="location">
          <p>Location: La Ensenada, Yaracuy, Venezuela</p>
      </div>
      <div className="social-icons">
          <a href="https://www.linkedin.com/in/mario-moreno-9916043b/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" width="50" height="50" style={{ marginRight: '20px' }} /></a>
          <a href="https://www.instagram.com/servitech_lat/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" width="50" height="50" style={{ marginRight: '20px' }} /></a>
          <a href="https://github.com/Mario24874" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" width="50" height="50" style={{ marginRight: '20px' }} /></a>
      </div>
      <div className="copyright">
          <p>&copy; 2024 Mario Moreno. All Rights Reserved.</p>
      </div>
</footer>
  );
}

export default Footer;
