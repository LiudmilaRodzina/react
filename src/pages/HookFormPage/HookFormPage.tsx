import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../shared/interfaces';
import { addForm } from '../../state/form/formSlice';
import { useDispatch } from 'react-redux';
import styles from './HookFormPage.module.scss';
import validationSchema from '../../validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HookFormPage = () => {
  const {
    register,
    trigger,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = {
      ...data,
      profilePicture: profilePicture || '',
    };

    dispatch(addForm(formData));
    navigate('/');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    await trigger('profilePicture');
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
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
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
                icon={showConfirmPassword ? faEye : faEyeSlash}
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
          </select>
        </div>
        <span className={styles['error-message']}>
          {errors.gender ? errors.gender.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Profile picture:</label>
          <Controller
            name="profilePicture"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={(e) => {
                  handleImageUpload(e);
                  field.onChange?.(e.target.files?.[0]);
                }}
              />
            )}
          />
        </div>
        <span className={styles['error-message']}>
          {errors.profilePicture ? errors.profilePicture.message : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label className={styles['checkbox-container']}>
            <Link to="/terms" className="content-link">
              I accept the Terms and Conditions
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
    </div>
  );
};

export default HookFormPage;
