import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { ProductSection } from "@/widgets/product-section";

export default function Product() {
  return (
    <>
      <BlockImage image={"/category-background.png"} title="Каталог" />
      <main>
        <ProductSection />
        {/* <ProductModification/> */}
        {/* <SimularProducts/> */}
        <FeedbackForm />
      </main>
    </>
  );
}
