import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  // Filter featured or best seller products
  const featuredProducts = products
    .filter(p => p.featured || p.bestSeller)
    .slice(0, 4);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
