import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { ReviewsList } from "@/widgets/reviews-list";

export default function Reviews() {
  return (
    <>
      <BlockImage image={"/reviews-background.jpg"} title="Отзывы" />
      <main>
        <ReviewsList />
        <FeedbackForm />
      </main>
    </>
  );
}
