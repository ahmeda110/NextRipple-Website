import React, {useEffect, useState} from 'react';
import styles from './GetStartedButton.module.css';
import { NavLink, useLocation } from 'react-router-dom';

function GetStartedButton({ color }) {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === '/');
  const backgroundColor = isHomePage ? 'black' : '#014173';

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

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