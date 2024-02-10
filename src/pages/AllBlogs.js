import React, { useState } from 'react';
import styles from './AllBlogs.module.css';
import { blogArticles } from '../components/BlogData';
import BlogShowcase from '../components/BlogShowcase';
import { NavLink } from 'react-router-dom';
import BlogModal from '../components/BlogModal'; 

function AllBlogs() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
          <h2 className={styles.headerContent}>All Blogs</h2>
          <NavLink className={styles.viewAllButton} to="/blog">Main Blogs {'>'}</NavLink>
      </div>
      {blogArticles.map((article) => (
        <div onClick={() => openModal(article)} key={article.id}>
          <BlogShowcase 
            image={article.image}
            category={article.category}
            title={article.title}
            description={article.description}
          />
        </div>
      ))}
      <BlogModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        article={selectedArticle}
      />
    </div>
  )
}

export default AllBlogs;
