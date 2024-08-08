import Header from './Header';
import { MainLayoutProps } from '../interfaces/interfaces';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
