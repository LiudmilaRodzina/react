import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../shared/interfaces';
import { addForm } from '../../state/form/formSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './HookFormPage.module.scss';
import validationSchema from '../../validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const HookFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addForm({ ...data }));
    navigate('/');
  };

  return (
    <div className="content-page">
      <h1>React Hook Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <label>Name:</label>
          <input
            type="text"
            {...register('name')}
            placeholder="Enter your name"
          />
        </div>
        <span className={styles['error-message']}>
          {errors.name ? errors.name.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Age:</label>
          <input
            type="number"
            {...register('age')}
            placeholder="Enter your age"
          />
        </div>
        <span className={styles['error-message']}>
          {errors.age ? errors.age.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Email:</label>
          <input
            type="email"
            {...register('email')}
            placeholder="Enter your email"
          />
        </div>
        <span className={styles['error-message']}>
          {errors.email ? errors.email.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Password:</label>
          <div className={styles['password-wrapper']}>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter your password"
            />
            <span
              className={styles['eye-icon']}
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>
        <span className={styles['error-message']}>
          {errors.password ? errors.password.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Confirm Password:</label>
          <div className={styles['password-wrapper']}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('passwordConfirm')}
              placeholder="Confirm your password"
            />
            <span
              className={styles['eye-icon']}
              onClick={toggleConfirmPasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </span>
          </div>
        </div>
        <span className={styles['error-message']}>
          {errors.passwordConfirm ? errors.passwordConfirm.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Gender:</label>
          <select {...register('gender')}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <span className={styles['error-message']}>
          {errors.gender ? errors.gender.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label className={styles['checkbox-container']}>
            <Link to="/terms" className="content-link">
              I have read and agree to the Terms and Conditions
            </Link>
            <input
              className={styles.checkbox}
              type="checkbox"
              {...register('terms')}
            />
          </label>
        </div>
        <span className={styles['error-message']}>
          {errors.terms ? errors.terms.message : '\u00A0'}
        </span>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
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
