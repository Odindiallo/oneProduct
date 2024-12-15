import styles from "../styles/FeaturesSection.module.scss";

const FeaturesSection = () => {
  const features = [
    { 
      id: 1, 
      title: "All-in-One Solution", 
      description: "Replace your entire toolkit with a single, powerful platform that does it all." 
    },
    { 
      id: 2, 
      title: "Lightning Fast", 
      description: "Engineered for speed and efficiency, saving you hours every day." 
    },
    { 
      id: 3, 
      title: "Simple to Master", 
      description: "Intuitive design means you'll be an expert in no time, with zero learning curve." 
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2>One Product, Endless Possibilities</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
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
