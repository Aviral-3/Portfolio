import React from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={20} />,
      label: "Email",
      value: "aviralsrivastava994@gmail.com",
      link: "mailto:aviralsrivastava994@gmail.com"
    },
    {
      id: 2,
      icon: <Phone size={20} />,
      label: "Mobile",
      value: "+91-8299569254",
      link: "tel:+918299569254"
    },
    {
      id: 3,
      icon: <MapPin size={20} />,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Github size={24} />,
      label: "GitHub",
      username: "Aviral-3",
      link: "https://github.com/Aviral-3"
    },
    {
      id: 2,
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      username: "aviral-3",
      link: "https://www.linkedin.com/in/aviral-3/"
    },
    {
      id: 3,
      icon: <ExternalLink size={24} />,
      label: "Portfolio",
      username: "aviral.netlify.app",
      link: "https://aviral.netlify.app/"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, innovative projects, or collaboration ideas. 
          Feel free to reach out through any of the channels below!
        </p>
        
        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((item) => (
              <Card key={item.id} className="contact-info-card">
                <div className="contact-info-icon">{item.icon}</div>
                <div className="contact-info-content">
                  <p className="contact-info-label">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="contact-info-value">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contact-info-value">{item.value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="social-links-section">
            <h3 className="social-title">Connect on Social Media</h3>
            <div className="social-links-grid">
              {socialLinks.map((social) => (
                <Card key={social.id} className="social-card">
                  <div className="social-icon">{social.icon}</div>
                  <div className="social-content">
                    <p className="social-label">{social.label}</p>
                    <p className="social-username">{social.username}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="social-button"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <ExternalLink size={18} />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;