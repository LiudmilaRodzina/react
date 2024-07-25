import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Loader = ({
  isLoading,
  isFetching,
}: {
  isLoading: boolean;
  isFetching: boolean;
}) => {
  return (
    <FadeLoader
      color="rgb(55 48 163)"
      loading={isLoading || isFetching}
      cssOverride={override}
    />
  );
};

export default Loader;
