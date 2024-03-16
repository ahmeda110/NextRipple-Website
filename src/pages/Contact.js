import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Contact.module.css';
import PageHeader from '../components/PageHeader';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //Need to make this your own personal info, i used emailJS
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        () => {
          console.log('SUCCESS!');
          setFormSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Invoke sendEmail function for sending email
    sendEmail(e);

    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <PageHeader title="Contact Us" />

      <div className={styles.statsContainer}></div>

      <div className={styles.whiteSpaceContainer}>
        <div className={styles.whiteRectangle}>
          <div className={styles.titleContainer}>
            <div className={styles.titleText}>Get In Touch</div>
            <div className={styles.instaIcon}>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className={styles.twitterIcon}>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className={styles.linkedinIcon}>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className={styles.subtitleText}>We Are Here For You! How Can We Help?</div>

          <form ref={form} onSubmit={handleSubmit} className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Go Ahead, We Are Listening"
              className={styles.textareaField}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>  
        </div>
      </div>

      {formSubmitted && (
        <div className={`${styles.successMessage} ${styles.fadeOut}`}>Form Submitted Successfully!</div>
      )}
    </div>
  );
}

export default Contact;
