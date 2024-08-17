import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const passwordRegex = new RegExp(
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>_\-\/\\[\]~`+=;'])[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-\/\\[\]~`+=;']{4,}$/
// );

const passwordRegex = new RegExp(/[A-Za-z]{1}/);

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

  age: Yup.number()
    .typeError('Age must be a number')
    .min(0, 'Age cannot be a negative number')
    .required('Age is required'),

  email: Yup.string()
    .matches(
      emailRegex,
      'Please enter a valid email address in the format: example@domain.com'
    )
    .required('Email is required'),

  password: Yup.string()
    .matches(
      passwordRegex,
      'Password must contain 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character'
    )
    .required('Password is required'),

  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirmation is required'),

  gender: Yup.string().required('Gender is required'),

  terms: Yup.boolean()
    .oneOf([true], 'Please accept the Terms and Conditions')
    .required('Please accept T&C'),
});

export default validationSchema;
