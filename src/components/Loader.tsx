import FadeLoader from 'react-spinners/FadeLoader';
import { useTheme } from '../hooks/useTheme';

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
  const { theme } = useTheme();
  const loaderColor =
    theme === 'dark' ? 'rgb(199, 210, 254)' : 'rgb(55 48 163)';

  return (
    <FadeLoader
      color={loaderColor}
      loading={isLoading || isFetching}
      cssOverride={override}
    />
  );
};

export default Loader;
