import { BlockImage } from "@/widgets/block-image";
import { CartSection } from "@/widgets/cart-section";
import { OrderSection } from "@/widgets/order-section";

export default function About() {
  return (
    <>
      <BlockImage
        image={"/cart-background.jpg"}
        title="Коммерческое предложение "
      />
      <main>
        <OrderSection />
      </main>
    </>
  );
}
