import { BlockImage } from "@/widgets/block-image";
import { BlogList } from "@/widgets/blog-list";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Contacts() {
  return (
    <main>
      <BlockImage image={"/blog-background.jpg"} title="Блог" />
      <BlogList />
      <FeedbackForm />
    </main>
  );
}
