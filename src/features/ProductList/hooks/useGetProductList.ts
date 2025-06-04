import { useAPI } from '@/shared/context/APIContext';
import { Product, ProductQuery } from '../types/Product';
import { getProductList } from '@/api/product';

export const useGetProductList = (query: ProductQuery) =>
  useAPI<Product[]>({
    name: 'product',
    fetcher: () => getProductList(query),
  });
