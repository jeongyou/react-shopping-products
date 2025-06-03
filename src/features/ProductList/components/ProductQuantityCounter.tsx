import { IconButton } from '@/shared/components/IconButton';
import { useState } from 'react';
import minus from '../../../../public/minus.svg';
import plus from '../../../../public/plus.svg';

interface ProductQuantityCounterProps {
  cartQuantity?: number;
  isInCart: boolean;
  onAddToCart: () => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveFromCart: () => void;
}

const ProductQuantityCounter = ({
  cartQuantity = 1,
  isInCart,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}: ProductQuantityCounterProps) => {
  const [hasBeenAdded, setHasBeenAdded] = useState(isInCart);

  const handleIncrement = async () => {
    if (!hasBeenAdded && cartQuantity === 0) {
      await onAddToCart();
      setHasBeenAdded(true);
    } else {
      await onIncreaseQuantity();
    }
  };

  const handleDecrement = () => {
    if (cartQuantity < 1) {
      onRemoveFromCart();
      return;
    }

    onDecreaseQuantity();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <IconButton
        src={minus}
        aria-label="감소"
        onClick={handleDecrement}
        variant="secondary"
        style={{ width: '25px', height: '25px' }}
      />
      <span data-testid="cart-quantity" style={{ minWidth: '24px', textAlign: 'center' }}>
        {cartQuantity === 0 ? 1 : cartQuantity}
      </span>
      <IconButton
        src={plus}
        aria-label="증가"
        onClick={handleIncrement}
        variant="secondary"
        style={{ width: '25px', height: '25px' }}
      />
    </div>
  );
};

export default ProductQuantityCounter;
