import { getProducts, getProductBySlug } from "@/src/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} - ${product.brand}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  // Get related products from same category
  const allProducts = await getProducts({ category: product.category });
  const relatedProducts = allProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <article className="px-5 sm:px-10 md:px-24 sxl:px-32 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative">
          <div className="relative h-96 lg:h-[600px] w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {(product.imageUrl || product.image?.src) ? (
              <Image
                src={product.imageUrl || product.image.src}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-9xl opacity-20">🏌️</span>
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.bestSeller && (
                <span className="bg-accent dark:bg-accentDark text-white text-sm font-bold px-4 py-2 rounded-full">
                  BEST SELLER
                </span>
              )}
              {product.newArrival && (
                <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  NEW ARRIVAL
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Brand */}
          <p className="text-sm text-accent dark:text-accentDark uppercase tracking-widest font-semibold mb-2">
            {product.brand}
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-light mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mb-6">
            {product.salePrice ? (
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-red-600 dark:text-red-400">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-green-600 dark:text-green-400 font-semibold">
                  Save ${(product.price - product.salePrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-4xl font-bold text-dark dark:text-light">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <p className="text-green-600 dark:text-green-400 font-semibold flex items-center gap-2">
                <span className="text-2xl">✓</span> In Stock
              </p>
            ) : (
              <p className="text-red-500 font-semibold flex items-center gap-2">
                <span className="text-2xl">✗</span> Out of Stock
              </p>
            )}
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <dl className="grid grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="font-semibold text-dark dark:text-light">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Category */}
          <div className="mb-6">
            <Link
              href={`/categories/${product.category}`}
              className="inline-block text-accent dark:text-accentDark hover:underline"
            >
              Browse more in {product.category}
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details (Body Content) */}
      {product.bodyContent && (
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: product.bodyContent }} />
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            More from {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${relatedProduct.slug}`}
                className="group"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-3">
                  {(relatedProduct.imageUrl || relatedProduct.image?.src) ? (
                    <Image
                      src={relatedProduct.imageUrl || relatedProduct.image.src}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-6xl opacity-20">🏌️</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">{relatedProduct.brand}</p>
                <h3 className="font-semibold text-dark dark:text-light group-hover:text-accent dark:group-hover:text-accentDark transition-colors">
                  {relatedProduct.title}
                </h3>
                <p className="font-bold mt-1">
                  ${(relatedProduct.salePrice || relatedProduct.price).toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
