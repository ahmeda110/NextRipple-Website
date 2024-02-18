import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const { pathname } = useLocation();
  const setActiveClass = ({ isActive }) => isActive ? styles.active : undefined;

  const getPageName = (path) => {
    switch(path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/blog':
        return 'Blog';
      case '/products':
        return 'Products';
      default:
        return '';
    }
  };

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
      <div className={styles.pageTitle}>{getPageName(pathname)}</div>
    </header>
  );
}

export default Header;