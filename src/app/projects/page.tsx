import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { ProjectsList } from "@/widgets/projects-list";

export default function Projects() {
  return (
    <>
      <BlockImage image={"/projects-background.jpg"} title="Проекты" />
      <main>
        <ProjectsList />
        <FeedbackForm />
      </main>
    </>
  );
}
