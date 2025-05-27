import { BlockImage } from "@/widgets/block-image";
import { BlogSection } from "@/widgets/blog-section";
import { FeedbackForm } from "@/widgets/feedback-form";
import { OtherNews } from "@/widgets/other-news";

export default function Blog() {
  return (
    <>
      <BlockImage image={"/blog-solo-background.png"} title="Блог" />
      <main>
        <BlogSection />
        <OtherNews />
        <FeedbackForm />
      </main>
    </>
  );
}
