import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { clearNewlyAdded } from '../../state/form/formSlice';
import { useEffect } from 'react';
import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const forms = useSelector((state: RootState) => state.forms.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNewlyAdded());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="content-page">
      <h1>Main Page</h1>
      <h2 className="">Submitted Data:</h2>
      <div className={styles['tiles-container']}>
        {forms.map((form, index) => (
          <div
            className={classNames(styles.tile, {
              [styles['newly-added']]: form.newlyAdded,
            })}
            key={index}
          >
            <p>
              <strong>Name: </strong>
              {form.name}
            </p>
            <p>
              <strong>Age: </strong>
              {form.age}
            </p>
            <p>
              <strong>Email: </strong>
              {form.email}
            </p>
            <p>
              <strong>Gender: </strong>
              {form.gender}
            </p>
          </div>
        ))}
      </div>
      <nav>
        <Link to="/react-hook-form" className="content-link">
          React Hook Form
        </Link>
        <Link to="/uncontrolled-form" className="content-link">
          Uncontrolled Form
        </Link>
        <br />
      </nav>
    </div>
  );
};

export default MainPage;
