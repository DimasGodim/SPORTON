import HeroSection from "../components/page/home/hero";
import CategoriesSection from "../components/page/home/categories";
import ProductSection from "../components/page/home/product";
import { GetAllCategories } from "../api/service/category";
import { GetAllProducts } from "../api/service/product";

export default async function Main() {
  const [categories, products] = await Promise.all([
    GetAllCategories(),
    GetAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductSection products={products}/>
    </main>
  );}