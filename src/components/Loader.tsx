import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <FadeLoader
      color="rgb(13 148 136)"
      loading={loading}
      cssOverride={override}
      height={20}
      width={6}
      radius={5}
    />
  );
};

export default Loader;
