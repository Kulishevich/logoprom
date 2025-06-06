import { BlockImage } from "@/widgets/block-image";
import { BlogList } from "@/widgets/blog-list";
import { FeedbackForm } from "@/widgets/feedback-form";

export default function Blog() {
  return (
    <>
      <BlockImage image={"/blog-background.jpg"} title="Блог" />
      <main>
        <BlogList />
        <FeedbackForm />
      </main>
    </>
  );
}
