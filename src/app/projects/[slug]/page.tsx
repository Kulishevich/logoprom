import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { ProjectSection } from "@/widgets/project-section";

export default function Contacts() {
  return (
    <>
      <BlockImage image={"/project-background.png"} title="Проекты" />
      <main>
        <ProjectSection />
        <FeedbackForm />
      </main>
    </>
  );
}
