import { useAPI } from '@/shared/context/APIContext';
import { ProductQuery } from '../types/Product';
import { getCartItemList } from '@/api/cart';
import { CartItem } from '../types/Cart';

export const useGetCartList = (query: Partial<ProductQuery>) => {
  //{ page: 0, size: 50 }
  return useAPI<CartItem[]>({
    name: 'cartItem',
    fetcher: () => getCartItemList(query),
  });
};
