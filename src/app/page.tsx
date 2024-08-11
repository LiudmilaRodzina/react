import MainLayout from './../components/MainLayout';
import MainPage from './../components/MainPage';
import { PRODUCTS_API_URL } from '../services/api/api';
import { PRODUCTS_PER_PAGE } from './../constants/constants';

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page as string, 10) || 1;
  const skip = (page - 1) * PRODUCTS_PER_PAGE;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `${PRODUCTS_API_URL}products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  );

  const data = await response.json();
  const products = data.products;
  const totalProducts = data.total;

  return (
    <MainLayout>
      <MainPage
        initialProducts={products}
        initialCurrentPage={page}
        totalProducts={totalProducts}
      />
    </MainLayout>
  );
}
