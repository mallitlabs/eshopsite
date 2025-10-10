import { getProducts } from "@/src/lib/api";
import HeroBanner from "../components/Product/HeroBanner";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import CategoryShowcase from "../components/Product/CategoryShowcase";

export default async function Home() {
  // Fetch all products from API
  const allProducts = await getProducts();

  return (
    <main className="flex flex-col items-center justify-center">
      <HeroBanner products={allProducts} />
      <FeaturedProducts products={allProducts} />
      <CategoryShowcase category="clubs" products={allProducts} title="Shop Clubs" />
      <CategoryShowcase category="balls" products={allProducts} title="Shop Balls" />
      <CategoryShowcase category="shoes" products={allProducts} title="Shop Shoes" />
      <CategoryShowcase category="gloves" products={allProducts} title="Shop Gloves" />
    </main>
  )
}
