import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForm } from '../../state/form/formSlice';
import styles from './UncontrolledFormPage.module.scss';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import validationSchema from '../../validation/validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const UncontrolledFormPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const profilePictureRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value || '',
      age: ageRef.current?.valueAsNumber || null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      passwordConfirm: passwordConfirmRef.current?.value || '',
      gender: genderRef.current?.value || '',
      terms: termsRef.current?.checked || false,
      profilePicture: profilePictureRef.current?.files?.[0] || null,
    };

    try {
      await validationSchema.validate(data, { abortEarly: false });

      const reader = new FileReader();
      reader.onloadend = () => {
        const formData = {
          ...data,
          profilePicture: reader.result as string,
          age: data.age ?? 0,
        };
        dispatch(addForm(formData));
        navigate('/');
      };

      if (data.profilePicture) {
        reader.readAsDataURL(data.profilePicture);
      }

      setErrors({});
    } catch (validationErrors) {
      const newErrors: Record<string, string> = {};
      (validationErrors as Yup.ValidationError).inner.forEach((error) => {
        if (error.path) {
          newErrors[error.path] = error.message;
        }
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="content-page">
      <h1>Uncontrolled Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['input-container']}>
          <label>Name:</label>
          <input type="text" ref={nameRef} placeholder="Enter your name" />
        </div>
        <span className={styles['error-message']}>
          {errors.name ? errors.name : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Age:</label>
          <input type="number" ref={ageRef} placeholder="Enter your age" />
        </div>
        <span className={styles['error-message']}>
          {errors.age ? errors.age : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />
        </div>
        <span className={styles['error-message']}>
          {errors.email ? errors.email : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Password:</label>
          <div className={styles['password-wrapper']}>
            <input
              type={showPassword ? 'text' : 'password'}
              ref={passwordRef}
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
          {errors.password ? errors.password : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Confirm Password:</label>
          <div className={styles['password-wrapper']}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              ref={passwordConfirmRef}
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
          {errors.passwordConfirm ? errors.passwordConfirm : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label>Gender:</label>
          <select ref={genderRef}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <span className={styles['error-message']}>
          {errors.gender ? errors.gender : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label htmlFor="profilePicture">Profile picture:</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={profilePictureRef}
          />
        </div>
        <span className={styles['error-message']}>
          {errors.profilePicture ? errors.profilePicture : '\u00A0'}
        </span>

        <div className={styles['input-container']}>
          <label className={styles['checkbox-container']}>
            I accept the Terms and Conditions
            <input type="checkbox" ref={termsRef} className={styles.checkbox} />
          </label>
        </div>
        <span className={styles['error-message']}>
          {errors.terms ? errors.terms : '\u00A0'}
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormPage;
