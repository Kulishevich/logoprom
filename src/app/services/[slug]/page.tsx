import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { GalerySection } from "@/widgets/galery-section";
import { OurAdvantages } from "@/widgets/our-advantages";
import { ServiceFirstSection } from "@/widgets/service-first-section";
import { ServiceSecondSection } from "@/widgets/service-second-section";
import { ServiceThirdSection } from "@/widgets/service-third-section";

export default function Services() {
  return (
    <>
      <BlockImage image={"/services-background.jpg"} title="Услуга 1" />
      <main>
        <ServiceFirstSection />
        <ServiceSecondSection />
        <ServiceThirdSection />
        <OurAdvantages />
        <GalerySection />
        <FeedbackForm />
      </main>
    </>
  );
}
