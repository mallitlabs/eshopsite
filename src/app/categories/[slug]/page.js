import { getProducts, getCategories } from "@/src/lib/api";
import ProductCard from "@/src/components/Product/ProductCard";
import Link from "next/link";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} - Golf Equipment`,
    description: `Browse our selection of premium golf ${slug}. Find the perfect equipment for your game.`,
  };
}

const CategoryPage = async ({ params }) => {
  const { slug } = await params;

  // Get all categories
  const allCategories = await getCategories();

  // Filter products by category
  const products = await getProducts({ category: slug });

  // Get category-specific filters (example)
  const brands = [...new Set(products.map(p => p.brand))].sort();

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl capitalize">
          {slug}
        </h1>
        <span className="mt-2 inline-block text-gray-600 dark:text-gray-400">
          Showing {products.length} {products.length === 1 ? 'product' : 'products'}
        </span>
      </div>

      {/* Category Navigation */}
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 mt-8 flex flex-wrap gap-4">
        {allCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={`px-4 py-2 rounded-full border transition-colors ${
              slug === category.slug
                ? 'bg-accent dark:bg-accentDark text-white border-accent dark:border-accentDark'
                : 'border-dark dark:border-light hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Brands Filter (basic example) */}
      {brands.length > 1 && (
        <div className="px-5 sm:px-10 md:px-24 sxl:px-32 mt-6">
          <h3 className="font-semibold mb-3">Brands:</h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5 sm:px-10 md:px-24 sxl:px-32 mb-16">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </article>
  );
};

export default CategoryPage;
