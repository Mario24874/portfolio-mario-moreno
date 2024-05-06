import { useState, useEffect } from 'react';
import logo from './Logo_Mario_Moreno-SF.png';
import aboutIcon from './about-icon.svg';
import aboutMePhoto from './images/aboutMePhoto.png';
import skillsIcon from './skills-icon.svg';
import technologiesIcon from './technologies-icon.svg';
import projectsIcon from './projects-icon.svg';
import ideIconPng from './images/ide-icon.png';
import webDevIcon from './images/web-dev-icon.png';
import seoErpIcon from './images/seo-erp-icon.png';
import versionControlIcon from './images/version-control-icon.png';
import socialMediaIcon from './images/social-media-icon.png';
import problemSolvingIcon from './images/problem-solving-icon.png';
import teamworkIcon from './images/teamwork-icon.png';
import hrManagementIcon from './images/hr-management-icon.png';
import riskPreventionIcon from './images/risk-prevention-icon.png';
import agileMethodsIcon from './images/agile-methods-icon.png';
import englishIcon from './images/english-icon.png';
import italianIcon from './images/italian-icon.png';
import programmingIcon from './images/programming-icon.png';
import apiIcon from './images/api-icon.png';
import databaseIcon from './images/database-icon.png';
import cloudIcon from './images/cloud-icon.png';
import devToolsIcon from './images/dev-tools-icon.png';
import italiantonlineThumbnail from './images/italiantonline-thumbnail.png';
import maleteroThumbnail from './images/maletero-thumbnail.png';
import eduManagerThumbnail from './images/edumanager-thumbnail.png';
import urbanDriveThumbnail from './images/urbandrive-thumbnail.png';
import reactIcon from './images/react-icon.png';
import angularIcon from './images/angular-icon.png';
import web2pyIcon from './images/web2py-icon.png';
import flutterIcon from './images/flutter-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import instagramIcon from './images/instagram-icon.png';
import githubIcon from './images/github-icon.png';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedContainer, setExpandedContainer] = useState(null);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundImage = "url('/nightstorm.gif')";
    } else {
      body.style.backgroundImage = "url('/clearsky.gif')";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleContainer = (containerName) => {
    setExpandedContainer(expandedContainer === containerName ? null : containerName);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="content-container">
          <div className="welcome-message">
            <h1 lang="en">Welcome to my portfolio!</h1>
          </div>
          <div className="dark-mode-toggle-container">
            <div className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
              <div className="switch"></div>
            </div>
          </div>
          <div className="circle-text">
            <span lang="en">Full Stack Developer</span>
          </div>
          <div className="circle-text">
            <span lang="en">Web Development</span>
          </div>
          <div className="circle-text">
            <span lang="en">Mobile Applications</span>
          </div>
        </div>
      </header>

      <div className="container-section">
 <div className={`container ${expandedContainer === 'about' ? 'expanded' : ''}`} onClick={() => toggleContainer('about')}>
    <div className="container-header">
      <img src={aboutIcon} alt="About" />
      <h2>About Me</h2>
    </div>
    <div className="container-content">
    <img src={aboutMePhoto} alt="About Me Photo" className="rounded-image" />
      <p>With a solid track record of over 20 years in various companies, I stand out as a resolute, proactive, organized, and responsible person. My ability to work in a team has been a fundamental pillar in my career.</p>
      <p>I have extensive experience in project and human resources management, business and industrial consulting, budget preparation, cost structuring, and the handling of technology and information systems. I am seeking a challenging and dynamic position where I can apply and share my vast experience while acquiring and contributing new knowledge.</p>
    </div>
 </div>
 <div className={`container ${expandedContainer === 'skills' ? 'expanded' : ''}`} onClick={() => toggleContainer('skills')}>
    <div className="container-header">
      <img src={skillsIcon} alt="Skills" />
      <h2>My Skills</h2>
    </div>
    <div className="container-content">
      <div className="skill-section">
        <h3>Technical Skills</h3>
        <div className="skill">
          <img src={ideIconPng} alt="IDE" width="100" height="100" />
          <div>
            <h4>Software Management and Development Environments (IDE)</h4>
            <p>Ability to manage and optimize software and integrated development environments.</p>
          </div>
        </div>
        <div className="skill">
                <img src={webDevIcon} alt="Web and Mobile Development" width="100" height="100" />
                <div>
                  <h4>Web and Multiplatform Mobile Applications Development</h4>
                  <p>Competence in developing web solutions and mobile applications for various platforms.</p>
                </div>
              </div>
              <div className="skill">
                <img src={seoErpIcon} alt="SEO and ERP" width="100" height="100" />
                <div>
                  <h4>SEO and ERP</h4>
                  <p>Knowledge in search engine optimization and enterprise resource planning.</p>
                </div>
              </div>
              <div className="skill">
                <img src={versionControlIcon} alt="Version Control and Orchestration" width="100" height="100" />
                <div>
                  <h4>Version Control, Container Orchestration, Servers, Databases, Cloud Services</h4>
                  <p>Ability to manage and orchestrate a variety of technologies including version control, containers, servers, databases, and cloud services.</p>
                </div>
              </div>
              <div className="skill">
                <img src={socialMediaIcon} alt="Social Media Management" width="100" height="100" />
                <div>
                  <h4>Social Media Management</h4>
                  <p>Ability to manage and optimize social media presence.</p>
                </div>
              </div>
              <div className="skill">
                <img src={problemSolvingIcon} alt="Problem Solving" width="100" height="100" />
                <div>
                  <h4>Problem Solving</h4>
                  <p>Demonstrated ability to identify and efficiently solve problems.</p>
                </div>
              </div>
              <div className="skill">
                <img src={hrManagementIcon} alt="HR Management" width="100" height="100" />
                <div>
                  <h4>Human Resources Management</h4>
                  <p>Experience in team management and development.</p>
                </div>
              </div>
              <div className="skill">
                <img src={riskPreventionIcon} alt="Risk Prevention" width="100" height="100" />
                <div>
                  <h4>Risk Prevention and Safety Measures</h4>
                  <p>Knowledge in implementing safety measures and risk prevention.</p>
                </div>
              </div>
              <div className="skill">
                <img src={agileMethodsIcon} alt="Agile Methodologies" width="100" height="100" />
                <div>
                  <h4>Agile Methodologies</h4>
                  <p>Familiarity with agile methodologies for project management.</p>
                </div>
              </div>
              
            

      </div>
      <div className="skill-section">
        <h3>Management and Organization Skills</h3>
        <div className="skill">
          <img src={teamworkIcon} alt="Teamwork" width="100" height="100" />
          <div>
            <h4>Teamwork</h4>
            <p>Strong teamwork skills and ability to lead groups and collaborate with others.</p>
          </div>
        </div>
        
      </div>
      <div className="skill-section">
        <h3>Language Skills</h3>
        <div className="skill">
          <img src={englishIcon} alt="English" width="100" height="100" />
          <div>
            <h4>English</h4>
            <p>Intermediate level.</p>
          </div>
        </div>
        <div className="skill">
                <img src={italianIcon} alt="Italian" width="100" height="100" />
                <div>
                  <h4>Italian</h4>
                  <p>Intermediate level.</p>
                </div>
              </div>
      </div>
    </div>
 </div>

 <div className={`container ${expandedContainer === 'technologies' ? 'expanded' : ''}`} onClick={() => toggleContainer('technologies')}>
    <div className="container-header">
      <img src={technologiesIcon} alt="Technologies" width="100" height="100" />
      <h2>Technologies</h2>
    </div>
    <div className="container-content">
      <div className="skill">
        <img src={programmingIcon} alt="Programming Languages" width="100" height="100" />
        <div>
          <h3>Programming Languages</h3>
          <p>Proficiency in a wide range of programming languages such as HTML, CSS, JavaScript, TypeScript, Java, Python, C, C++, C#, PHP, SQL, and more.</p>
        </div>
      </div>
      <div className="skill">
              <img src={apiIcon} alt="API and Frameworks" width="100" height="100" />
              <div>
                <h3>API and Frameworks</h3>
                <p>Experience in using APIs and Frameworks such as React.JS, Angular.JS, Vue.JS, Symfony for PHP, Django REST, Flask (Python), Sinatra or Rails (Ruby), Express.JS (NodeJS), Slim, Laravel (PHP), Nancy, Core (.NET), Play or Spring Boot (Java), ASP.NET and ADO.NET.</p>
              </div>
            </div>
            <div className="skill">
              <img src={versionControlIcon} alt="Version Control" width="100" height="100" />
              <div>
                <h3>Version Control</h3>
                <p>Expertise in using version control systems like Git, GitHub, Docker, Kubernetes and other related tools.</p>
              </div>
            </div>
            <div className="skill">
              <img src={databaseIcon} alt="Databases" width="100" height="100" />
              <div>
                <h3>Databases</h3>
                <p>Knowledge and experience in working with various SQL database technologies such as MySQL, MariaDB, SQLServer and PostgreSQL, also NoSQL such as MongoDB, Redis and Cassandra, as well as cloud-based database solutions.</p>
              </div>
            </div>
            <div className="skill">
              <img src={cloudIcon} alt="Cloud Technologies" width="100" height="100" />
              <div>
                <h3>Cloud Technologies</h3>
                <p>Familiarity with cloud computing platforms and services, including AWS, Azure, and Google Cloud.</p>
              </div>
            </div>
            <div className="skill">
              <img src={devToolsIcon} alt="Development Tools" width="100" height="100" />
              <div>
                <h3>Development Tools</h3>
                <p>Proficiency in the use of various development tools in IDEs such as Visual Studio, IntelliJ IDEA and Android Studio, as well as code editors such as Visual Studio Code, Sublime Text and Vim, among other project management software.</p>
              </div>
            </div>
          
    </div>
 </div>
 <div className={`container ${expandedContainer === 'projects' ? 'expanded' : ''}`} onClick={() => toggleContainer('projects')}>
    <div className="container-header">
      <img src={projectsIcon} alt="Projects" width="100" height="100" />
      <h2>My Projects</h2>
    </div>
    <div className="container-content">
      <div className="project">
        <img src={italiantonlineThumbnail} alt="Italiantonline" width="100" height="100" />
        <div>
          <h3>Italiantonline</h3>
          <div className="technology">
            <img src={reactIcon} alt="React" width="50" height="50" />
            <div className="technology-info">
              <span>React</span>
            </div>
          </div>
          <p>Website dedicated to the teaching of the Italian language. It has many learning resources such as audios, videos, images, dictionary and translator that accompany the lessons of each course.</p>
        </div>
      </div>
      <div className="project">
 <img src={maleteroThumbnail} alt="Maletero" width="100" height="100" />
 <div>
    <h3>Maletero</h3>
    <div className="technology">
      <img src={angularIcon} alt="Angular" width="50" height="50" />
      <div className="technology-info">
        <span>Angular</span>
      </div>
    </div>
    <p>Website for buying and selling of new and used items, e-commerce and donations of all types of items between individuals. No paid applications included.</p>
 </div>
</div>
<div className="project">
 <img src={eduManagerThumbnail} alt="EduManager" width="100" height="100" />
 <div>
    <h3>EduManager</h3>
    <div className="technology">
      <img src={web2pyIcon} alt="Web2py" width="50" height="50" />
      <div className="technology-info">
        <span>Web2py</span>
      </div>
    </div>
    <p>Desktop application for the administrative management of educational centres and institutions which performs the registration of students, scheduling of classes and classrooms as well as other events; it also stores the database and performs the issuance of reports, grades and grades of students.</p>
 </div>
</div>
<div className="project">
 <img src={urbanDriveThumbnail} alt="Urban Drive" width="100" height="100" />
 <div>
    <h3>Urban Drive</h3>
    <div className="technology">
      <img src={flutterIcon} alt="Flutter" width="50" height="50" />
      <div className="technology-info">
        <span>Flutter</span>
      </div>
    </div>
    <p>This application is to geographically locate the driver of your transport or delivery service in real time. It also schedules transport routes and land trips, offers weather forecasts, as well as arrival times according to destination and forecasts; it also offers messaging and notifications of incidents and delays.</p>
 </div>
</div>
    </div>
 </div>
</div>


<footer className="footer">
 <div className="location">
    <p>Location: La Ensenada, Yaracuy, Venezuela</p>
 </div>
 <div className="social-icons">
    <a href="https://www.linkedin.com/in/mario-moreno-9916043b/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" width="30" height="30" style={{ marginRight: '20px' }} /></a>
    <a href="https://www.instagram.com/servitech_lat/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" width="30" height="30" style={{ marginRight: '20px' }} /></a>
    <a href="https://github.com/Mario24874" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" width="30" height="30" style={{ marginRight: '20px' }} /></a>
 </div>
 <div className="copyright">
    <p>&copy; 2024 Mario Moreno. All Rights Reserved.</p>
 </div>
</footer>
</div>

);
}

export default App;