import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

// Adding a temporary comment to force a change
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/impressum" className="footer-link">Impressum</Link>
          <Link to="/datenschutz" className="footer-link">Datenschutz</Link>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Defuralle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;