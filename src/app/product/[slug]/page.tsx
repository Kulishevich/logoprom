import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { LastViewProducts } from "@/widgets/last-view-products";
import { ProductListSection } from "@/widgets/product-list-section";
import { ProductSection } from "@/widgets/product-section";

export default function Product() {
  return (
    <>
      <BlockImage image={"/category-background.png"} title="Каталог" />
      <main>
        <ProductSection />
        {/* <ProductModification/> */}
        <ProductListSection title="Сопутствующие товары" with_button={false} />
        <LastViewProducts />
        <FeedbackForm />
      </main>
    </>
  );
}
