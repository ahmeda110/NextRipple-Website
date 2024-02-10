import React from 'react';
import styles from './Blog.module.css';
import { blogArticles } from '../components/BlogData';

function Blog() {
  const firstArticle = blogArticles.slice(0, 1);
  const nextTwoArticles = blogArticles.slice(1, 3);

  return (
    <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
            <h2>Most Recent Blogs</h2>
            <button className={styles.viewAllButton} onClick={() => {/* Implement navigation logic */}}>View All Blogs {'>'}</button>
        </div>
        <div className={styles.articlesWrapper}>
            <div className={styles.mainArticle}>
                {firstArticle.map((article, index) => (
                    <div key={index} className={styles.article}>
                        <img className={styles.articlePhoto} src={article.image} alt="Article Image"/>
                        <div className={styles.articleCategory}>{article.category}</div>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                        <p className={styles.articleDescription}>{article.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.subArticle}>
                {nextTwoArticles.map((article, index) => (
                    <div key={index} className={styles.article}>
                        <img className={styles.articlePhoto} src={article.image} alt="Article Image"/>
                        <div className={styles.articleCategory}>{article.category}</div>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Blog;