import React from 'react';
import styles from './Products.module.css';
import PageHeader from '../components/PageHeader';
import fitness from '../assets/fitness-app-image.png';
import itinerary from '../assets/itinerary-app-image.png'; 

function Products() {
  const products = [
    {
      title: 'Fitness App',
      description: 'Transform your fitness journey with our all-in-one Fitness App. Personalized workouts, tailored meal plans, and AI-guided corrections for a safer, effective approach. Elevate your health goals effortlessly.',
      image: fitness,
    },
    {
      title: 'Itinerary App',
      description: 'Discover the ultimate travel companion in our Itinerary App. Personalized trip plans, effortless navigation with guided routes, and real-time progress tracking—no more hassle in planning or wasting time.',
      image: itinerary, 
    } 
  ]; 

  return (
    <main>
      <PageHeader title="Products" />

      <div className={styles.Products}>

      <h1><span class={styles.ourStyle}>Our</span> <span class={styles.productsStyle}>Products</span></h1>

        {products.map((product, index) => (
          <div key={index} className={`${styles.productContainer} ${product.title === 'Itinerary App' ? styles.itineraryLayout : ''}`}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p>{product.description}</p>
              <button className={styles.detailsButton}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
