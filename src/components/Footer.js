import React from 'react';
import '../styles/footer.css';

// Adding a temporary comment to force a change
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/impressum" className="footer-link">Impressum</a>
          <a href="/datenschutz" className="footer-link">Datenschutz</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Defuralle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;