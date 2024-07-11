import CategoriesWrapper from "@/components/home-page/category_section/categories-wrapper";
import HeroSection from "@/components/home-page/hero-section_pages/herosection";
import ProductWrapper from "@/components/home-page/product/product-wrapper";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <HeroSection />
      </div>
      <CategoriesWrapper />
      <ProductWrapper />
    </div>
  );
}
