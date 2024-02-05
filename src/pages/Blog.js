import React from 'react'
import styles from './Blog.module.css'
import { blogArticles } from '../components/BlogData'


function Blog() {
    return (
      <div className={styles.blogContainer}>
          <div className={styles.blogHeader}>
              <h2>Most Recent Blogs</h2>
              <button className={styles.viewAllButton} onClick={() => {}}>View All Blogs</button>
          </div>
          <div className={styles.articlesContainer}>
              {blogArticles.map((article, index) => (
                  <div key={index} className={styles.article}>
                      <img className={styles.articlePhoto} src={article.image} alt={"Article Image"}/>
                      <div className={styles.articleCategory}>{article.category}</div>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <p className={styles.articleDescription}>{article.description}</p>
                  </div>
              ))}
          </div>
      </div>
    );
  }
  
  export default Blog;