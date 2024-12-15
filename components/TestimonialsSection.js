import React from 'react';
import styles from '../styles/TestimonialsSection.module.scss';

const TestimonialsSection = () => {
  const testimonials = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      role: "Product Manager",
      feedback: "OneProduct has completely transformed how our team works. What used to take 5 different tools now takes just one!" 
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      role: "Tech Lead",
      feedback: "The efficiency gains are incredible. Our productivity has doubled since switching to OneProduct." 
    },
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <span className={styles.sparkle}>💝</span>
              Customer Love
              <span className={styles.sparkle}>💝</span>
            </span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Real Stories</span>
            <br className={styles.titleBreak} />
            <span className={styles.accent}>From Happy Customers</span>
          </h2>
          <p className={styles.subtitle}>
            See why thousands of customers have fallen in love with Balea Hair Milk
            and how it has transformed their hair care routine
          </p>
          <div className={styles.decorativeLines}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <p>"{testimonial.feedback}"</p>
              <span className={styles.name}>- {testimonial.name}</span>
              <span className={styles.role}>{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
