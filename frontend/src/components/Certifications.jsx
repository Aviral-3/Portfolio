import React from "react";
import { Award, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "July 2023",
      type: "certification"
    },
    {
      id: 2,
      title: "AI for Everyone",
      issuer: "Coursera",
      date: "March 2022",
      type: "certification"
    },
    {
      id: 3,
      title: "Data Science Certification",
      issuer: "Board Infinity",
      date: "March 2023",
      type: "certification"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "27th Position Globally - MLH INIT",
      description: "Secured 27th position out of 1000+ participants in Major League Hacking INIT, showcasing exceptional performance in hackathon challenges.",
      type: "achievement"
    },
    {
      id: 2,
      title: "Google DevFest'21 Quiz Winner",
      description: "Emerged victorious in Google DevFest'21 Quiz, demonstrating strong technical knowledge and problem-solving abilities.",
      date: "October 2021",
      type: "achievement"
    },
    {
      id: 3,
      title: "Machine Learning Live Quiz Winner",
      description: "Won the Machine Learning Live quiz, fostering valuable learning experience and showcasing ML expertise.",
      date: "October 2021",
      type: "achievement"
    }
  ];

  const leadership = [
    {
      id: 1,
      title: "Technical Coordinator",
      organization: "E-Cell Club, VIT Bhopal",
      period: "Apr 2022 - Apr 2023",
      description: "Organized events, conducted workshops reaching over 750+ students, and fostered entrepreneurial mindset among peers."
    },
    {
      id: 2,
      title: "Technical Team Member",
      organization: "Mozilla Firefox Club, VIT Bhopal",
      period: "Nov 2021 - Nov 2022",
      description: "Led a team of 50+ individuals and established proper set of policies for technical events and activities."
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <div className="cert-subsection">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <Card key={cert.id} className="cert-card">
                <div className="cert-icon">
                  <Award size={20} />
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="cert-subsection">
          <h2 className="section-title">Honors & Awards</h2>
          <div className="achievements-list">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="achievement-card">
                <div className="achievement-icon">
                  <Trophy size={24} />
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  {achievement.date && <p className="achievement-date">{achievement.date}</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="cert-subsection">
          <h2 className="section-title">Leadership & Volunteering</h2>
          <div className="leadership-list">
            {leadership.map((item) => (
              <Card key={item.id} className="leadership-card">
                <h3 className="leadership-title">{item.title}</h3>
                <p className="leadership-org">{item.organization}</p>
                <p className="leadership-period">{item.period}</p>
                <p className="leadership-description">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;