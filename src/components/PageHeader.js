import React from 'react';
import styles from './PageHeader.module.css'; 
import background from '../assets/gradient-background.svg';
import NextRippleLogo from '../images/NextRippleLogo.png'
import GetStartedButton from './GetStartedButton'
import Header from './Header';

const PageHeader = ({ title }) => {
  return (
    <div className={styles.pageHeader}>
      <img src={background} className={styles.backgroundGradient} alt="Page header background"/>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={NextRippleLogo} alt="Logo"/>
        </div>
        <div className={styles.nav}><Header/></div>
        <div className={styles.getStarted}>
          <GetStartedButton/>
        </div>
      </div>
      <h1 className={styles.pageTitle}>{title}</h1>
    </div>
  );
};

export default PageHeader;
