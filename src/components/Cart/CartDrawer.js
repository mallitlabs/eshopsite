"use client";
import { useCart } from '@/src/contexts/CartContext';
import CartItem from './CartItem';
import { useEffect } from 'react';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    getCartTotal,
    getCartItemCount,
    clearCart
  } = useCart();

  const itemCount = getCartItemCount();
  const total = getCartTotal();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={closeCart}
          aria-label="Close cart"
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-light dark:bg-dark shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-dark dark:text-light">
              Shopping Cart
              {itemCount > 0 && (
                <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                  ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </span>
              )}
            </h2>
            <button
              onClick={closeCart}
              className="text-gray-500 hover:text-dark dark:hover:text-light transition-colors"
              aria-label="Close cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium text-dark dark:text-light mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Add some golf equipment to get started!
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2 bg-dark dark:bg-light text-light dark:text-dark rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between text-lg font-semibold">
                <span className="text-dark dark:text-light">Subtotal:</span>
                <span className="text-dark dark:text-light">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Shipping Note */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Shipping and taxes calculated at checkout
              </p>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  className="w-full py-3 bg-dark dark:bg-light text-light dark:text-dark rounded-full font-semibold hover:scale-105 transition-transform"
                  onClick={() => {
                    // TODO: Implement checkout
                    alert('Checkout functionality coming soon!');
                  }}
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full py-3 border border-dark dark:border-light text-dark dark:text-light rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to clear your cart?')) {
                      clearCart();
                    }
                  }}
                  className="w-full py-2 text-sm text-red-500 hover:text-red-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
