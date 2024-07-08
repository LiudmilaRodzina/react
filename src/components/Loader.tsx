import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }: { loading: boolean }) => {
  return <FadeLoader color="blue" loading={loading} cssOverride={override} />;
};

export default Spinner;
