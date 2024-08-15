import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../shared/interfaces';

const HookFormPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="content-page">
      <h1>React Hook Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('name', { required: true })}></input>
        </label>

        <label>
          Age:
          <input {...register('age', { required: true })}></input>
        </label>
        <button>Submit</button>
      </form>
      <Link to="/">Go to Main Page</Link>
    </div>
  );
};

export default HookFormPage;
