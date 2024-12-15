import React from 'react';
import styles from '../styles/ProductDemo.module.scss';

const ProductDemo = () => {
  const benefits = [
    {
      icon: '💧',
      title: 'Deep Hydration',
      description: 'Instantly absorbs into hair strands',
      stat: '95%',
      statText: 'improved moisture'
    },
    {
      icon: '✨',
      title: 'Lightweight Formula',
      description: 'Feather-light texture that never weighs down',
      stat: '24h',
      statText: 'lasting softness'
    },
    {
      icon: '🌿',
      title: 'Natural Protection',
      description: 'Shields hair from daily damage',
      stat: '3x',
      statText: 'stronger hair'
    },
    {
      icon: '🌺',
      title: 'Fresh Scent',
      description: 'Long-lasting tropical fragrance',
      stat: '8h',
      statText: 'fresh scent'
    }
  ];

  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.sparkle}>✨</span>
              Experience The Magic
              <span className={styles.sparkle}>✨</span>
            </span>
          </div>
          <h2 className={styles.title}>
            Why <span className={styles.highlight}>Balea Hair Milk</span> 
            <br className={styles.titleBreak} />
            <span className={styles.accent}>is Your Hair's Best Friend</span>
          </h2>
          <p className={styles.subtitle}>
            Join thousands of satisfied customers who have discovered the secret to naturally beautiful, 
            healthy hair with our revolutionary formula
          </p>
          <div className={styles.decorativeLines}>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={styles.demoContent}>
          <div className={styles.videoSection}>
            <div className={styles.videoWrapper}>
              <div className={styles.placeholder}>
                <img 
                  src="/video-thumbnail.jpg" 
                  alt="Hair transformation preview" 
                  className={styles.thumbnail}
                />
                <div className={styles.videoOverlay}>
                  <div className={styles.playButton}>
                    <span>▶</span>
                  </div>
                  <p>Watch Real Results</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.benefitsContainer}>
            <div className={styles.benefitCards}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{benefit.icon}</span>
                  </div>
                  <div className={styles.benefitContent}>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                    <div className={styles.benefitStat}>
                      <span className={styles.statNumber}>{benefit.stat}</span>
                      <span className={styles.statText}>{benefit.statText}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <p>"My hair has never felt softer. This is now my daily essential!"</p>
            <cite>- Sarah M., Verified Buyer</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
