"use client";
import { useState } from 'react';
import { useCart } from '@/src/contexts/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);

    // Open the cart drawer to show the added item
    setTimeout(() => {
      openCart();
    }, 300);

    // Reset the "just added" state after animation
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-semibold text-dark dark:text-light">
          Quantity:
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={decrementQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-dark dark:border-light rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-dark dark:text-light font-bold"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-12 text-center text-lg font-semibold text-dark dark:text-light">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-dark dark:border-light rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-dark dark:text-light font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`
          w-full py-4 px-8 rounded-full font-bold text-lg
          transition-all duration-300
          ${product.inStock
            ? justAdded
              ? 'bg-green-500 text-white scale-105'
              : 'bg-accent dark:bg-accentDark text-white hover:scale-105 hover:shadow-lg'
            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }
        `}
      >
        {!product.inStock
          ? 'Out of Stock'
          : justAdded
          ? '✓ Added to Cart!'
          : 'Add to Cart'
        }
      </button>

      {/* Quick Actions */}
      {product.inStock && (
        <div className="flex gap-3">
          <button
            onClick={() => {
              addToCart(product, 1);
              // Navigate to checkout would go here in a real app
              alert('Checkout functionality coming soon!');
            }}
            className="flex-1 py-3 px-6 border-2 border-accent dark:border-accentDark text-accent dark:text-accentDark rounded-full font-semibold hover:bg-accent dark:hover:bg-accentDark hover:text-white transition-colors"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
