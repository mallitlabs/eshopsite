import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const CategoryShowcase = ({ category, products, title }) => {
  // Filter products by category and limit to 4
  const categoryProducts = products
    .filter(p => p.category === category && p.isPublished)
    .slice(0, 4);

  if (categoryProducts.length === 0) return null;

  return (
    <section className="w-full mt-16 sm:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          {title}
        </h2>
        <Link
          href={`/categories/${category}`}
          className="text-accent dark:text-accentDark hover:underline font-semibold"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
