import { describe, it, expect, vi } from 'vitest';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps } from './../pages/index';

describe('getServerSideProps', () => {
  it('fetches products and returns props', async () => {
    const mockProducts = {
      products: [{ id: 1, title: 'Product' }],
      total: 1,
    };
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockProducts),
    });

    const context = {
      query: { page: '1' },
    } as unknown as GetServerSidePropsContext;

    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        initialProducts: mockProducts.products,
        initialCurrentPage: 1,
        totalProducts: mockProducts.total,
      },
    });

    vi.resetAllMocks();
  });
});
