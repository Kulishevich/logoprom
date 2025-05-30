import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { CategoryProductsSection } from "@/widgets/category-products-section";
import { CategoryNavigation } from "@/widgets/category-navigation";

export default function Category() {
  return (
    <>
      <BlockImage image={"/category-background.png"} title="Каталог" />
      <main>
        <CategoryNavigation />
        <CategoryProductsSection />
        <FeedbackForm />
      </main>
    </>
  );
}
