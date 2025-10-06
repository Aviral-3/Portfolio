import React from "react";
import { Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Aviral Srivastava. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;