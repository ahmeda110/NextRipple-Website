import React from 'react'
import styles from './BlogShowcase.module.css'

function BlogShowcase({ image, category, title, description }) {
  return (
    <div className={styles.blogShowcase}>
      <div className={styles.blogImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.blogContent}>
        <h3 className={styles.blogCategory}>{category}</h3>
        <h2 className={styles.blogTitle}>{title}</h2>
        <p className={styles.blogDescription}>{description}</p>
      </div>
    </div>
  )
}

export default BlogShowcase