import React from 'react';
import styles from './PageHeader.module.css'; 
import background from '../assets/gradient-background.svg';

const PageHeader = ({ title }) => {
  return (
    <>
      <div className={styles.pageHeader}>
        <img src={background} className={styles.backgroundGradient} alt="Page header background"/>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>
    </>
  );
};

export default PageHeader;