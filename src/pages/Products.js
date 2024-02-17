import React from 'react';
import styles from './Products.module.css';
import PageHeader from '../components/PageHeader';
import fitness from '../assets/fitness-app-image.png'

function Products() {
  const products = [
    {
      title: 'Fitness App',
      description: 'Transform your fitness journey with our new Fitness App! Personalized training plans tailored to your needs and goals. Stay motivated, improve your health with efficiency.',
      image: '../assets/fitness-app-image.png',
    },
    {
      title: 'Itinerary App',
      description: 'Discover the ultimate travel companion in our Itinerary App! Personalized itinerary plans ensuring you have memorable & planning-free traveling experiences.',
      image: '../assets/fitness-app-image.png', 
    } 
  ]; 

  return (
    <main>
      <PageHeader title="Our Products" />
      <div className={styles.Products}>
        {products.map((product, index) => (
          <div key={index} className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img src={fitness} alt={product.title} className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
              <h2>{product.title}</h2>
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
