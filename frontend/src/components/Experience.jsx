import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Technical Analyst",
      company: "Fiserv",
      location: "India",
      period: "Current",
      description: "Working on backend development and AI solutions for Atrium, Fiserv's operational AI platform. Building intelligent systems that drive innovation and optimize business operations.",
      highlights: [
        "Developing and maintaining backend services for AI-powered operational tools",
        "Implementing scalable solutions for data processing and analysis",
        "Collaborating with cross-functional teams to deliver innovative features"
      ]
    },
    {
      id: 2,
      title: "Android Engineer - Intern",
      company: "Syook",
      location: "Bengaluru",
      period: "Jun 2024 - Aug 2024",
      description: "Developed secure Android applications with real-time tracking capabilities and emergency response features.",
      highlights: [
        "Implemented secure subdomain verification process with server authentication",
        "Engineered BLE scanners and GPS location data synchronization for real-time tracking",
        "Enabled SOS functionality with physical watch button integration for emergency alerts"
      ]
    },
    {
      id: 3,
      title: "Subject Matter Expert (Part-time)",
      company: "Chegg India",
      location: "Remote",
      period: "Oct 2021 - Jun 2024",
      description: "Provided expert guidance and solutions to students in computer science and AI domains.",
      highlights: [
        "Achieved 95% accuracy rate in AI solutions delivery",
        "Increased student engagement by 25% through targeted mentoring",
        "Maintained 90% student satisfaction rate with proactive guidance framework"
      ]
    },
    {
      id: 4,
      title: "Data Scientist Intern",
      company: "SmartBridge",
      location: "Remote",
      period: "May 2022 - Jul 2022",
      description: "Performed comprehensive data analysis and extracted valuable insights from company data.",
      highlights: [
        "Achieved 10% improvement in electricity consumption insights through data analysis",
        "Enhanced analytics by 20% through extraction of valuable insights from company logs"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <Card key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={20} />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-location">{exp.location}</span>
                <span className="experience-period">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;