import React from 'react'
import styles from './GetStartedButton.module.css'
import { NavLink, useLocation } from 'react-router-dom';

function GetStartedButton() {
  return (
    
    <NavLink to="/contact" className={styles.button}>Get Started</NavLink>
    
  )
}

export default GetStartedButton