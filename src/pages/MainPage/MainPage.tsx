import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { clearNewlyAdded } from '../../state/form/formSlice';
import { useEffect } from 'react';
import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { truncateText } from '../../utils/helpers';

const MainPage = () => {
  const forms = useSelector((state: RootState) => state.forms.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNewlyAdded());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const emptyTilesCount = 12 - forms.length;
  const emptyTiles = Array.from({ length: emptyTilesCount }, (_, index) => (
    <div className={styles.tile} key={`empty-${index}`}></div>
  ));

  return (
    <div className="content-page">
      <h1>Submitted Data</h1>
      <div className={styles['tiles-container']}>
        {forms.map((form, index) => (
          <div
            className={classNames(styles.tile, {
              [styles['newly-added']]: form.newlyAdded,
            })}
            key={index}
          >
            <div>
              <img
                src={form.profilePicture}
                alt="Profile"
                className={styles['profile-picture']}
              />
            </div>
            <p>
              <strong>Name: </strong>
              {truncateText(form.name, 10)}
            </p>
            <p>
              <strong>Age: </strong>
              {form.age}
            </p>
            <p>
              <strong>Email: </strong>
              {truncateText(form.email, 10)}
            </p>
            <p>
              <strong>Gender: </strong>
              {form.gender}
            </p>
          </div>
        ))}
        {emptyTiles}
      </div>
    </div>
  );
};

export default MainPage;
