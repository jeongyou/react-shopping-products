import { useMemo } from 'react';
import { useGetProductList } from './useGetProductList';

type ProductFilterParams = {
  sort: string;
  filter: string;
};

export const useProductListRequest = ({ sort = '전체', filter = '전체' }: ProductFilterParams) => {
  const query = useMemo(
    () => ({
      page: 0,
      size: 20,
      sort: sort !== '전체' && sort ? `price,${sort}` : '',
      category: filter === '전체' ? '' : filter,
    }),
    [sort, filter]
  );

  return useGetProductList(query);
};
