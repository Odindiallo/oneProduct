import React from 'react';
import styles from '../styles/FeaturesSection.module.scss';

const FeaturesSection = () => {
  const features = [
    {
      icon: '💧',
      title: 'Deep Moisture',
      description: 'Intensive hydration for dry and damaged hair'
    },
    {
      icon: '🌿',
      title: 'Vegan Formula',
      description: 'Natural ingredients with coconut and papaya fragrance'
    },
    {
      icon: '✨',
      title: 'Silicone Free',
      description: 'Clean formula without harmful silicones'
    },
    {
      icon: '🛡️',
      title: 'Anti-Dryness',
      description: 'Protects hair from dryness and damage'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.sparkle}>🌟</span>
              Premium Features
              <span className={styles.sparkle}>🌟</span>
            </span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Advanced Formula</span>
            <br className={styles.titleBreak} />
            <span className={styles.accent}>For Exceptional Results</span>
          </h2>
          <p className={styles.subtitle}>
            Discover the unique blend of natural ingredients and cutting-edge technology
            that makes our hair milk stand out from the rest
          </p>
          <div className={styles.decorativeLines}>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
