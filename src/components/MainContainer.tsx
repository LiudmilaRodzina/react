import Header from './Header';
import { MainContainerProps } from '../interfaces/interfaces';

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
