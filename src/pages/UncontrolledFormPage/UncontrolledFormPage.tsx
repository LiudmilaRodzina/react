import { Link } from 'react-router-dom';
import styles from './UncontrolledFormPage.module.scss';

const UncontrolledFormPage = () => {
  return (
    <div className="content-page">
      <h1>Uncontrolled Form Page</h1>
      <div className={styles['links-container']}>
        <Link to="/react-hook-form" className="content-link">
          React Hook Form
        </Link>
        <Link to="/" className="content-link">
          Main Page
        </Link>
      </div>
    </div>
  );
};

export default UncontrolledFormPage;
