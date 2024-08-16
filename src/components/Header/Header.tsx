import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/react-hook-form"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          React Hook Form
        </NavLink>
        <NavLink
          to="/uncontrolled-form"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          Uncontrolled Form
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
