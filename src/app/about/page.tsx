import { BlockImage } from "@/widgets/block-image";
import { FeedbackForm } from "@/widgets/feedback-form";
import { FirstBlockAbout } from "@/widgets/first-block-about";
import { SecondBlockAbout } from "@/widgets/second-block-about";
import { ThirdBlockAbout } from "@/widgets/third-block-about";

export default function About() {
  return (
    <>
      <BlockImage image={"/about-background.jpg"} title="О компании" />
      <main>
        <FirstBlockAbout />
        <SecondBlockAbout />
        <ThirdBlockAbout />
        <FeedbackForm />
      </main>
    </>
  );
}
