import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-hook-form">React Hook Form</Link>
        <Link to="/uncontrolled-form">Uncontrolled Form</Link>
      </nav>
    </footer>
  );
};

export default Footer;
