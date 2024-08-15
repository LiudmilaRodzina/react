import { Link } from 'react-router-dom';
import img404 from '../../assets/images/404.png';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={`content-page ${styles['not-found-page']}`}>
      <h1>404 | Not Found</h1>
      <img
        src={img404}
        alt="page not found image"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <Link to="/">Go to Main Page</Link>
    </div>
  );
};

export default NotFoundPage;
