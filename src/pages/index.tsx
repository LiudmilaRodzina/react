import MainLayout from '@/components/MainLayout';
import MainPage from '@/components/MainPage';
import { PRODUCTS_API_URL } from '@/config/api';
import { PRODUCTS_PER_PAGE } from '@/constants/constants';
import { HomeProps } from '@/interfaces/interfaces';
import { GetServerSidePropsContext } from 'next';

const Home = ({
  initialProducts,
  initialCurrentPage,
  totalProducts,
}: HomeProps) => {
  return (
    <>
      <MainLayout>
        <MainPage
          initialProducts={initialProducts}
          initialCurrentPage={initialCurrentPage}
          totalProducts={totalProducts}
        />
      </MainLayout>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const page = parseInt(query.page as string, 10) || 1;
  const skip = (page - 1) * PRODUCTS_PER_PAGE;

  const response = await fetch(
    `${PRODUCTS_API_URL}products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  );

  const data = await response.json();
  const products = data.products;
  const totalProducts = data.total;

  return {
    props: {
      initialProducts: products,
      initialCurrentPage: page,
      totalProducts,
    },
  };
}
