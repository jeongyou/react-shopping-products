import { useCallback } from 'react';

import { addCartItem, deleteCartItem, setCartQuantity } from '@/api/cart';
import { useApiRequest } from '@/shared/hooks/useApiRequest';

import { useGetCartList } from './useGetCartList';

export const useCartRequest = () => {
  const { handleRequest } = useApiRequest();
  const { refetch, isLoading } = useGetCartList({ page: 0, size: 50 });

  const addToCart = useCallback(
    async (productId: number, quantity: number = 1) => {
      return handleRequest({
        request: () => addCartItem({ productId, quantity }),
        onSuccess: async () => await refetch(),
      });
    },
    [handleRequest, refetch]
  );

  const increaseQuantity = useCallback(
    async (cartItemId: number, currentQuantity: number) => {
      return handleRequest({
        request: () => setCartQuantity({ cartItemId, quantity: currentQuantity + 1 }),
        onSuccess: async () => await refetch(),
      });
    },
    [handleRequest, refetch]
  );

  const decreaseQuantity = useCallback(
    async (cartItemId: number, currentQuantity: number) => {
      return handleRequest({
        request: () => setCartQuantity({ cartItemId, quantity: currentQuantity - 1 }),
        onSuccess: async () => await refetch(),
      });
    },
    [handleRequest, refetch]
  );

  const deleteFromCart = useCallback(
    async (cartItemId: number) => {
      return handleRequest({
        request: () => deleteCartItem(cartItemId),
        onSuccess: async () => await refetch(),
      });
    },
    [handleRequest, refetch]
  );

  return {
    refetch,
    isLoading,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
  };
};
