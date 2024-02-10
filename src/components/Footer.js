import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>© 2024 Next Ripple. All rights reserved.</p>
    </footer>
  );
}

export default Footer;