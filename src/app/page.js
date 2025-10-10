import { products } from "@/.velite/generated";
import HeroBanner from "../components/Product/HeroBanner";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import CategoryShowcase from "../components/Product/CategoryShowcase";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroBanner products={products} />
      <FeaturedProducts products={products} />
      <CategoryShowcase category="clubs" products={products} title="Shop Clubs" />
      <CategoryShowcase category="balls" products={products} title="Shop Balls" />
      <CategoryShowcase category="shoes" products={products} title="Shop Shoes" />
      <CategoryShowcase category="gloves" products={products} title="Shop Gloves" />
    </main>
  )
}
