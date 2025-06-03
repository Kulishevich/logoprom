import { BlockImage } from "@/widgets/block-image";
import { CartSection } from "@/widgets/cart-section";

export default function About() {
  return (
    <>
      <BlockImage
        image={"/cart-background.jpg"}
        title="Коммерческое предложение "
      />
      <main>
        <CartSection />
      </main>
    </>
  );
}
