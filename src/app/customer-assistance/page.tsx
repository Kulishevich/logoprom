import { BlockImage } from "@/widgets/block-image";
import { CustomerAssistanceSection } from "@/widgets/customer-assistance-section";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function CustomerAssistance() {
  return (
    <>
      <BlockImage
        image={"/customer-assistance-background.jpg"}
        title="Помощь клиенту"
      />
      <main>
        <CustomerAssistanceSection />
        <FeedbackForm />
      </main>
    </>
  );
}
