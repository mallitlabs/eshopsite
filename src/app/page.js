import { getProducts } from "@/src/lib/api";
import GolfBanner from "../components/GolfBanner";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import CategoryShowcase from "../components/Product/CategoryShowcase";

export default async function Home() {
  // Fetch all products from API
  const allProducts = await getProducts();

  return (
    <main className="flex flex-col items-center justify-center">
      <GolfBanner />
      <FeaturedProducts products={allProducts} />
      <CategoryShowcase category="clubs" products={allProducts} title="Shop Clubs" />
      <CategoryShowcase category="balls" products={allProducts} title="Shop Balls" />
      <CategoryShowcase category="shoes" products={allProducts} title="Shop Shoes" />
      <CategoryShowcase category="gloves" products={allProducts} title="Shop Gloves" />
    </main>
  )
}
