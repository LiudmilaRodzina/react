import FadeLoader from 'react-spinners/FadeLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '100px auto',
};

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <FadeLoader
      className="loader"
      loading={loading}
      cssOverride={override}
      color="var(--loader-color)"
    />
  );
};

export default Loader;
