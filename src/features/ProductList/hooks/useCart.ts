import { useCartRequest } from './useCartRequest';
export const useCart = () => {
  const { addToCart, increaseQuantity, decreaseQuantity, deleteFromCart } = useCartRequest();

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
  };
};
