import React, { useState } from 'react';
import styles from './Blog.module.css';
import { blogArticles } from '../components/BlogData';
import BlogModal from '../components/BlogModal'; 
import { NavLink } from 'react-router-dom';
import PageHeader from '../components/PageHeader'

function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const firstArticle = blogArticles.slice(0, 1);
  const nextTwoArticles = blogArticles.slice(1, 3);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    <PageHeader title="Blogs" />
    <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
            <h2 className={styles.headerContent}>Most Recent Blogs</h2>
            <NavLink className={styles.viewAllButton} to="/blog/allblogs">View All Blogs {'>'}</NavLink>
        </div>
        <div className={styles.articlesWrapper}>
            <div className={styles.mainArticle}>
                {firstArticle.map((article, index) => (
                    <div key={index} className={styles.article} onClick={() => openModal(article)}>
                        <img className={styles.articlePhoto} src={article.image} alt="Article Image"/>
                        <div className={styles.articleCategory}>{article.category}</div>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                        <p className={styles.articleDescription}>{article.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.subArticle}>
                {nextTwoArticles.map((article, index) => (
                    <div key={index} className={styles.article} onClick={() => openModal(article)}>
                        <img className={styles.articlePhoto} src={article.image} alt="Article Image"/>
                        <div className={styles.articleCategory}>{article.category}</div>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                    </div>
                ))}
            </div>
        </div>
        <BlogModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          article={selectedArticle}
        />
    </div>
    </div>
  );
}

export default Blog;
