import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            OneProduct
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link href="#features">Features</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact" className={styles.contact}>Contact</Link>
          <Link href="/login" className={styles.login}>Log In</Link>
          <Link href="/signup" className={styles.signup}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
