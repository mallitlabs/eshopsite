"use client";
import Image from 'next/image';
import { useCart } from '@/src/contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const price = item.salePrice || item.price;
  const itemTotal = price * item.quantity;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-2xl">⛳</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-dark dark:text-light text-sm">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {item.brand}
          </p>
          {item.salePrice && (
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Sale Price
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center text-sm text-dark dark:text-light">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-6 h-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="font-semibold text-dark dark:text-light text-sm">
              ${itemTotal.toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ${price.toFixed(2)} each
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
