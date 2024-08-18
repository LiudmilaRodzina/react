import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles['active-nav-link'] : styles['footer-nav-link']
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/react-hook-form"
          className={({ isActive }) =>
            isActive ? styles['active-nav-link'] : styles['footer-nav-link']
          }
        >
          React Hook Form
        </NavLink>
        <NavLink
          to="/uncontrolled-form"
          className={({ isActive }) =>
            isActive ? styles['active-nav-link'] : styles['footer-nav-link']
          }
        >
          Uncontrolled Form
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
