import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="content-page">
      <h1>Main Page</h1>
      <Link to="/react-hook-form">React Hook Form</Link>
      <Link to="/uncontrolled-form">Uncontrolled Form</Link>
    </div>
  );
};

export default MainPage;
