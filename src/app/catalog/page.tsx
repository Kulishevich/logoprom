import { BlockImage } from "@/widgets/block-image";
import { CatalogSection } from "@/widgets/catalog-section";
import { SeoTextSection } from "@/widgets/seo-text-section";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Catalog() {
  return (
    <>
      <BlockImage image={"/catalog-background.png"} title="Каталог" />
      <main>
        <CatalogSection />
        <SeoTextSection />
        <FeedbackForm />
      </main>
    </>
  );
}
