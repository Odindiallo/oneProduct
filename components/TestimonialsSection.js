import styles from "../styles/TestimonialsSection.module.scss";

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
        <h2>Loved by Teams Everywhere</h2>
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
