import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../shared/interfaces';
import { addForm } from '../../state/form/formSlice';
import { useDispatch } from 'react-redux';
import styles from './HookFormPage.module.scss';

const HookFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate('/');
    dispatch(addForm({ ...data }));
  };

  return (
    <div className="content-page">
      <h1>React Hook Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: 'This is required' })}
            placeholder="Enter your name"
          ></input>
        </label>
        <span>{errors.name?.message}</span>

        <label>
          Age:
          <input
            type="number"
            {...register('age', { required: 'This is required' })}
            placeholder="Enter your age"
          ></input>
        </label>
        <span>{errors.age?.message}</span>

        <button>Submit</button>
      </form>
      <div className={styles['links-container']}>
        <Link to="/uncontrolled-form" className="content-link">
          Uncontrolled Form
        </Link>
        <Link to="/" className="content-link">
          Main Page
        </Link>
      </div>
    </div>
  );
};

export default HookFormPage;
