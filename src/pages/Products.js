import React from 'react';
import styles from './Products.module.css';
import PageHeader from '../components/PageHeader';
import fitness from '../assets/fitness-app-image.png';
import itinerary from '../assets/itinerary-app-image.png'; 

function Products() {
  const products = [
    {
      title: 'Fitness App',
      description: 'Transform your fitness journey with our new Fitness App! Personalized training plans tailored to your needs and goals. Stay motivated, improve your health with efficiency.',
      image: fitness,
    },
    {
      title: 'Itinerary App',
      description: 'Discover the ultimate travel companion in our Itinerary App! Personalized itinerary plans ensuring you have memorable & planning-free traveling experiences.',
      image: itinerary, 
    } 
  ]; 

  return (
    <main>
      <PageHeader title="Our Products" />
      <div className={styles.Products}>
        <h1>Our Products</h1>
        {products.map((product, index) => (
          <div key={index} className={`${styles.productContainer} ${product.title === 'Itinerary App' ? styles.itineraryLayout : ''}`}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
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
