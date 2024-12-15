import React from 'react';
import styles from '../styles/HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gridContainer}>
        <div className={styles.content}>
          <span className={styles.badge}>New Formula</span>
          <h1>Experience The Magic of <span className={styles.highlight}>Natural Hair Care</span></h1>
          <p>Transform your hair with our vegan moisturizing milk. Silky smooth results from the first application.</p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.number}>98%</span>
              <span className={styles.label}>Natural Ingredients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.number}>24h</span>
              <span className={styles.label}>Moisture Lock</span>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Shop Now - €3.99</button>
            <button className={styles.secondaryBtn}>Watch Demo</button>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <img src="/vegan-certified.svg" alt="Vegan Certified" className={styles.trustBadge} />
              <span>Vegan Certified</span>
            </div>
            <div className={styles.trustItem}>
              <img src="/derma-tested.svg" alt="Dermatologically Tested" className={styles.trustBadge} />
              <span>Dermatologically Tested</span>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img src="/image1.jpeg" alt="Balea Hair Milk" className={styles.productImage} />
          </div>
          <div className={styles.floatingElements}>
            <div className={styles.bubble}>
              <span className={styles.icon}>🌿</span>
              <span>100% Vegan</span>
            </div>
            <div className={styles.bubble}>
              <span className={styles.icon}>💧</span>
              <span>Deep Hydration</span>
            </div>
            <div className={styles.bubble}>
              <span className={styles.icon}>✨</span>
              <span>Silicone Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
