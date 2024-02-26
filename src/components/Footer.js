import React from 'react';
import styles from './Footer.module.css';
import Pacman from '../images/Pacman.png'
import LogoImage from '../images/Logoimg.png'
import IconLocation from '../images/IconLocation.png'
import IconPages from '../images/Iconpages.png'
import IconSpeaker from '../images/Iconspeaker.png'
import IconPhone from '../images/IconPhone.png'

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
            <div className={styles.subheader}>
              <img src={IconPhone} alt=''></img>
              <h3>Get in touch with</h3>
            </div>
            <div>
              <div className={styles.phoneNumber}>
                <p>+1 917 000 1212</p>
              </div>
            </div>
            <p>nextripple@marketing.com</p>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.subheader}>
              <img src={IconLocation} alt=''></img>
              <h3>Location</h3>
            </div>
            
            <p className={styles.address}>10 Suna House 65 Rivington Street London EC2A 3QQ</p>
            <a href="/about" className={styles.locationLink}>location</a>  
          </div>
        </div>
        <div className={styles.rightBottom}>
          <div className={styles.pages}>
            <div className={styles.subheader}>
              <img src={IconPages} alt=''></img>
              <h3>Pages</h3>
            </div>
            <div className={styles.linkContainer}>
              <a href="/home">Home</a>
              <a href="/about">About</a>  
              <a href="/home">Blog</a>
              <a href="/about">Products</a>  
              <a href="/home">Contact</a>
            </div>
          </div>
          <div className={styles.follows}>
            <div className={styles.subheader}>
              <img src={IconSpeaker} alt=''></img>
              <h3>Follows</h3>
            </div>  
            <div className={styles.linkContainer}>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://facebook.com">Instagram</a>
              <a href="https://twitter.com">Linkedin</a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
