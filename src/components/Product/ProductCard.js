"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from '@/src/contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, openCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, 1);
    setJustAdded(true);

    // Open cart drawer after adding
    setTimeout(() => {
      openCart();
    }, 300);

    // Reset animation state
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  return (
    <div className="group relative bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800">
          {(product.imageUrl || product.image?.src) ? (
            <Image
              src={product.imageUrl || product.image.src}
              alt={product.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <span className="text-6xl">🏌️</span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestSeller && (
              <span className="bg-accent dark:bg-accentDark text-white text-xs font-bold px-3 py-1 rounded-full">
                BEST SELLER
              </span>
            )}
            {product.newArrival && (
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {product.brand}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-dark dark:text-light mt-1 mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-red-600 dark:text-red-400">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-dark dark:text-light">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <p className="text-red-500 text-sm mt-2 font-semibold">Out of Stock</p>
          )}
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`
            w-full py-2.5 px-4 rounded-full font-semibold text-sm
            transition-all duration-300
            ${product.inStock
              ? justAdded
                ? 'bg-green-500 text-white scale-105'
                : 'bg-accent dark:bg-accentDark text-white hover:scale-105 hover:shadow-md'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {!product.inStock
            ? 'Out of Stock'
            : justAdded
            ? '✓ Added!'
            : 'Add to Cart'
          }
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
