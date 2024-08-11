import FadeLoader from 'react-spinners/FadeLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '200px auto',
};

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <FadeLoader
      loading={loading}
      cssOverride={override}
      color="var(--loader-color)"
    />
  );
};

export default Loading;
