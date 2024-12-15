import React from 'react';
import styles from '../styles/PurchaseSection.module.scss';

const PurchaseSection = () => {
  return (
    <section className={styles.purchase}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.sparkle}>🎁</span>
              Special Offer
              <span className={styles.sparkle}>🎁</span>
            </span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Transform Your Hair</span>
            <br className={styles.titleBreak} />
            <span className={styles.accent}>Starting Today</span>
          </h2>
          <p className={styles.subtitle}>
            Join thousands of satisfied customers and give your hair the care it deserves
            with our premium hair milk formula
          </p>
          <div className={styles.decorativeLines}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className={styles.priceTag}>
            <span className={styles.currency}>€</span>
            <span className={styles.amount}>3</span>
            <span className={styles.period}>.99</span>
          </div>
          
          <div className={styles.discount}>
            <span className={styles.originalPrice}>€4.99</span>
            <span className={styles.saveTag}>Save 20%</span>
          </div>

          <button className={styles.buyButton}>
            Add to Cart
          </button>

          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <span className={styles.icon}>🌱</span>
              <span>Vegan Certified</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.icon}>🧪</span>
              <span>Dermatologically Tested</span>
            </div>
          </div>

          <div className={styles.testimonial}>
            <p>"My hair feels so soft and moisturized. Love that it's silicone-free!"</p>
            <div className={styles.author}>
              <span className={styles.name}>Lisa K.</span>
              <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
