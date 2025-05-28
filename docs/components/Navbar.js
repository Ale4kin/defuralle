import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  // Close dropdown when route changes (desktop only)
  useEffect(() => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  }, [location, isMobile]);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            О проекте
          </NavLink>
        </li>
        {isMobile ? (
          // Mobile view: Show submenu items directly
          <>
            <li className="nav-item">
              <NavLink 
                to="/courses" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Курсы
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/books" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Книги
              </NavLink>
            </li>
          </>
        ) : (
          // Desktop view: Show dropdown
          <li className="nav-item dropdown" ref={dropdownRef}>
            <button 
              className={`nav-link dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
              onClick={handleDropdownToggle}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Курсы и материалы
              <span className="dropdown-arrow" aria-hidden="true">
                {isDropdownOpen ? '▼' : '▶'}
              </span>
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <NavLink 
                  to="/courses" 
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Курсы
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/books" 
                  className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Книги
                </NavLink>
              </li>
            </ul>
          </li>
        )}
        <li className="nav-item">
          <NavLink to="/online-learning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Online Lernspiele
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 