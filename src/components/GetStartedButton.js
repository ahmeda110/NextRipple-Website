import React from 'react';
import styles from './GetStartedButton.module.css';
import { NavLink } from 'react-router-dom';

function GetStartedButton({ color }) {
  const backgroundColor = color === 'black' ? 'black' : '#014173'; 

  return (
    <NavLink
      to="/contact"
      className={styles.button}
      style={{ backgroundColor }} 
    >
      Get Started
    </NavLink>
  );
}

export default GetStartedButton;