import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <li className="nav-item dropdown">
          <button 
            className="nav-link dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Курсы и материалы
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <NavLink to="/courses" className="dropdown-item">
                Курсы
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="dropdown-item">
                Книги
              </NavLink>
            </li>
          </ul>
        </li>
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