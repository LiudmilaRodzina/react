import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '120px auto',
};

const Loader = ({ loading }: { loading: boolean }) => {
  return <FadeLoader color="blue" loading={loading} cssOverride={override} />;
};

export default Loader;
