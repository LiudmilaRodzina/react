import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-hook-form">React Hook Form</Link>
        <Link to="/uncontrolled-form">Uncontrolled Form</Link>
      </nav>
    </header>
  );
};

export default Header;
