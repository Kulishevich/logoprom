import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { ServicesList } from "@/widgets/services-list";

export default function Services() {
  return (
    <>
      <BlockImage image={"/services-background.jpg"} title="Услуги" />
      <main>
        <ServicesList />
        <FeedbackForm />
      </main>
    </>
  );
}
