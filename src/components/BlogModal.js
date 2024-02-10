import React from 'react';
import styles from './BlogModal.module.css'; 

function Modal({ isOpen, onClose, article }) {
  if (!isOpen) return null; 
  const handleOverlayClick = (e) => {
    onClose();
  };
 
  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };
 
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {article && (
          <>
            <h2>{article.title}</h2>
            <img src={article.image} alt={article.title} />
            <h4>{article.category}</h4>
            <p>{article.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
