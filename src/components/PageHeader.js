import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageHeader.module.css'; 
import background from '../assets/gradient-background.svg';
import NextRippleLogo from '../images/NextRippleLogo.png'
import NextRippleLogoLight from '../images/NextRippleLogo-Light.svg'
import GetStartedButton from './GetStartedButton'
import Header from './Header';
import NextLogo from '../images/NextLogo.png'

const PageHeader = ({ title }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 930);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 930);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  function DesktopNavbar() {
    return (
      <>
        <div className={styles.logo}>
          {isHomePage ? (
              <img className={styles.imgLogo} src={NextLogo} alt="logo" height={80}/>
            ) : (
              <img src={NextRippleLogo} alt="Logo"/>
            )}
        </div>
        <div className={styles.nav}><Header/></div>
        <div className={styles.getStarted}>
          <GetStartedButton/>
        </div>
      </>
    )
  }

  function MobileNavbar() {
    return (
      <>
        <div className={styles.logo}>
          {isHomePage ? (
              <img className={styles.imgLogo} src={NextLogo} alt="logo" height={80}/>
            ) : (
              <img src={NextRippleLogo} alt="Logo"/>
            )}
        </div>
        <div className={styles.hamburgerMenu} onClick={() => setToggleMenu(!toggleMenu)}>
          <span/>
          <span/>
          <span/>
        </div>
        {toggleMenu && (
          <div className={styles.menu}>
            <div className={styles.mobileNavbarHeader}>
              <img className={styles.mobileLogo} src={NextRippleLogoLight} width={100} alt="Logo"/>
              <div className={styles.closeBtn} onClick={() => setToggleMenu(!toggleMenu)}>x</div>
            </div>
            <Header/>
            <div className={styles.getStarted}>
              <GetStartedButton/>
            </div>
          </div>
      )}
      </>
    )
  }

  return (
    <>
      <div className={styles.pageHeader}>
        { !isHomePage && (
          <img src={background} className={styles.backgroundGradient} alt="Page header background"/>
        )}
        <div className={styles.headerContent}>
          {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </div>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>
    </>
  );
};

export default PageHeader;
