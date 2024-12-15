import Image from "next/image";
import styles from "../styles/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <span className={styles.badge}>🚀 Finally, One Tool For Everything</span>
        <h1>One Tool to Rule<br /><span className={styles.highlight}>Them All</span></h1>
        <p>Stop juggling multiple tools. OneProduct combines everything you need into a single, powerful solution that streamlines your workflow.</p>
        
        <div className={styles.ctaGroup}>
          <button className={styles.ctaPrimary}>Try OneProduct Free</button>
          <button className={styles.ctaSecondary}>Watch Demo</button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.number}>50K+</span>
            <span className={styles.label}>Active Users</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>4.9/5</span>
            <span className={styles.label}>User Rating</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>99.9%</span>
            <span className={styles.label}>Uptime</span>
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <div className={styles.placeholder}>
            <div className={styles.mockContent}>
              <div className={styles.mockHeader}></div>
              <div className={styles.mockBody}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.dots}></div>
      </div>
    </section>
  );
};

export default HeroSection;
