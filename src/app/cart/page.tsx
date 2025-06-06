import { BlockImage } from "@/widgets/block-image";
import { CartSection } from "@/widgets/cart-section";
import { CartSectionMobile } from "@/widgets/cart-section-mobile";

export default function About() {
  return (
    <>
      <BlockImage
        image={"/cart-background.jpg"}
        title="Коммерческое предложение "
      />
      <main>
        <CartSection />
        <CartSectionMobile />
      </main>
    </>
  );
}
