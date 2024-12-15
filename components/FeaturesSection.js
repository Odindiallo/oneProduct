import React from 'react';
import styles from '../styles/FeaturesSection.module.scss';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized solution'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Bank-grade security ensuring your data is always protected'
    },
    {
      icon: '🎯',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for the best user experience'
    },
    {
      icon: '💡',
      title: 'Smart Features',
      description: 'Advanced capabilities that adapt to your needs'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2>Why Choose Our Product?</h2>
        <p className={styles.subtitle}>Discover the features that make us stand out</p>
        
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
