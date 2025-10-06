import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "InsAIghts",
      period: "Sept 2023 - Oct 2023",
      description: "An intelligent content summarization tool designed for students and professionals seeking efficient YouTube video analysis. Delivers comprehensive insights with inference times under 10 seconds.",
      technologies: ["Python", "PyTorch", "Langchain", "FastAPI", "Streamlit", "OpenAI", "Azure SQL DB"],
      highlights: [
        "Real-time video content analysis and summarization",
        "Integration with state-of-the-art LLMs via Clarifai",
        "Sub-10 second inference times for optimal user experience"
      ],
      github: "https://github.com/Aviral-3/InsAIghts",
      category: "LLM & Web App"
    },
    {
      id: 2,
      title: "RemiAItree",
      period: "Feb 2023 - Jul 2023",
      description: "An AI-powered code documentation tool that automatically analyzes and documents Python codebases. Powered by SOTA LLMs like Llama2 and WizardLM-70b with up to 90% accuracy.",
      technologies: ["Python", "React.js", "FastAPI", "PostgreSQL", "LLMs", "AST"],
      highlights: [
        "Automated in-place code documentation using AST module",
        "90% accuracy in code analysis and documentation generation",
        "Integration with cutting-edge language models"
      ],
      github: "https://github.com/Aviral-3/RemiAITree",
      category: "AI & Full Stack"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <div className="project-period">{project.period}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Button
                  variant="outline"
                  className="project-button"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} />
                  View Code
                </Button>
                <Button
                  variant="ghost"
                  className="project-link-button"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <ExternalLink size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;