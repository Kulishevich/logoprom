import { BlockImage } from "@/widgets/block-image";
import { CatalogSection } from "@/widgets/catalog-section";
import { CatalogTextContent } from "@/widgets/catalog-text-content";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Contacts() {
  return (
    <>
      <BlockImage image={"/catalog-background.png"} title="Каталог" />
      <main>
        <CatalogSection />
        <CatalogTextContent />
        <FeedbackForm />
      </main>
    </>
  );
}
