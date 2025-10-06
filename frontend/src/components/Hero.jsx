import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import "./Hero.css";

const Hero = () => {
  const professionalPhoto = "https://customer-assets.emergentagent.com/job_aviral-showcase/artifacts/xeu4xpko_1730038534749.jpeg";

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Aviral Srivastava</span>
            </h1>
            <h2 className="hero-subtitle">Technical Analyst at Fiserv</h2>
            <p className="hero-description">
              Specialized in backend development and AI solutions. Currently working on Atrium, 
              Fiserv's operational AI platform, building intelligent systems that drive innovation.
            </p>
            <div className="hero-actions">
              <Button 
                className="primary-button"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                className="secondary-button"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Aviral-3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aviral-3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aviralsrivastava2020@vitbhopal.ac.in" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://aviral.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={professionalPhoto} alt="Aviral Srivastava" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;