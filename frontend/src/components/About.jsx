import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <Card className="about-card">
          <div className="about-content">
            <p className="about-text">
              I'm a passionate Technical Analyst at Fiserv, specializing in backend development 
              and AI solutions. My work focuses on building and optimizing Atrium, Fiserv's 
              operational AI platform, where I leverage cutting-edge technologies to create 
              intelligent systems that drive business innovation.
            </p>
            <p className="about-text">
              With a strong foundation in Computer Science from VIT Bhopal and hands-on experience 
              in machine learning, data science, and full-stack development, I'm dedicated to 
              solving complex technical challenges and building scalable solutions.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <GraduationCap className="detail-icon" size={20} />
                <div>
                  <p className="detail-title">Education</p>
                  <p className="detail-value">B.Tech - Computer Science and Engineering</p>
                  <p className="detail-sub">Vellore Institute of Technology, Bhopal</p>
                  <p className="detail-sub">CGPA: 8.25/10.0 | Oct 2020 - Jul 2024</p>
                </div>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" size={20} />
                <div>
                  <p className="detail-title">Location</p>
                  <p className="detail-value">India</p>
                  <p className="detail-sub">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;