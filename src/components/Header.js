import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
  const setActiveClass = ({ isActive }) => isActive ? styles.active : undefined;

  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className={setActiveClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={setActiveClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={setActiveClass}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={setActiveClass}>Blog</NavLink></li>
          <li><NavLink to="/products" className={setActiveClass}>Products</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
