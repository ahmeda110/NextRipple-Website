import React from 'react'
import styles from './AllBlogs.module.css'
import { blogArticles } from '../components/BlogData';
import BlogShowcase from '../components/BlogShowcase';
import { NavLink } from 'react-router-dom';

function AllBlogs() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
          <h2 className={styles.headerContent}>All Blogs</h2>
          <NavLink className={styles.viewAllButton} to="/blog">Main Blogs {'>'}</NavLink>
      </div>
      {blogArticles.map((article) => (
        <BlogShowcase 
          key={article.id}
          image={article.image}
          category={article.category}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  )
}

export default AllBlogs