import React from 'react';
import styles from './Footer.module.css';
import Pacman from '../images/Pacman.png'
import LogoImage from '../images/Logoimg.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.subscribeContainer}> 
          <div className={styles.innerSubscribe}>
            <div className={styles.subscribeContainerHeader}>
              <img src={Pacman} alt=''></img>
              <h2>Next Ripple</h2>
            </div>
            <img className={styles.subscribeImage} src={LogoImage}></img>
            <p className={styles.subscribeNow}>Subscribe now</p>
            <p className={styles.subscribeNowSub}>Industry's standard from dummy and make a type book.</p>
            <input className={styles.emailInput} type="text" placeholder="Enter Your Email..." />
            <div>
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <div className={styles.getInTouch}>
            <h3>Get in touch with</h3>
            <p>+1 917 000 1212</p>
            <p>nextripple@marketing.com</p>
          </div>
          <div className={styles.locationContainer}>
            <h3>Location</h3>
            <p>10 Suna House 65 Rivington Street</p>
            <p>London EC2A 3QQ</p>
          </div>
        </div>
        <div className={styles.rightBottom}>
          <div className={styles.pages}>
            <h3>Pages</h3>
            <nav>
              <a href="/home">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
          <div className={styles.follows}>
            <h3>Follows</h3>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
