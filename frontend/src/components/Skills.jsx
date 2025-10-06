import React from "react";
import { Code, Database, Cloud, Cpu } from "lucide-react";
import { Card } from "./ui/card";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "C++", "Java", "SQL", "Bash"]
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      icon: <Cpu size={24} />,
      skills: ["TensorFlow", "Keras", "PyTorch", "FastAPI", "Streamlit", "LangChain", "React.js"]
    },
    {
      id: 3,
      title: "Tools & Platforms",
      icon: <Cloud size={24} />,
      skills: ["Git", "MySQL", "Azure", "AWS", "HuggingFace", "OpenAI", "Azure AI", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Soft Skills",
      icon: <Database size={24} />,
      skills: ["Leadership", "Problem Solving", "Adaptive Learning", "Team Collaboration", "Communication"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <Card key={category.id} className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{category.icon}</div>
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;