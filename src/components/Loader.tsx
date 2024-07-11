import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <FadeLoader
      color="rgb(165 180 252)"
      loading={loading}
      cssOverride={override}
    />
  );
};

export default Loader;
