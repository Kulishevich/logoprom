import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { CategoryProductsSection } from "@/widgets/category-products-section";

export default function Subcategory() {
  return (
    <>
      <BlockImage image={"/category-background.png"} title="Каталог" />
      <main>
        <CategoryProductsSection />
        <FeedbackForm />
      </main>
    </>
  );
}
