import React from 'react';
import styles from '../styles/ProductDemo.module.scss';

const ProductDemo = () => {
  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        <h2>See It In Action</h2>
        <p className={styles.subtitle}>Watch how our product transforms your workflow</p>
        
        <div className={styles.demoContent}>
          <div className={styles.videoWrapper}>
            {/* Replace src with your actual demo video */}
            <div className={styles.placeholder}>
              <div className={styles.playButton}>
                <span>▶</span>
              </div>
              <p>Product Demo Video</p>
            </div>
          </div>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>Intuitive Interface</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>Quick Setup</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
