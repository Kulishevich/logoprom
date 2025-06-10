import { FeedbackForm } from "@/widgets/feedback-form";
import { HomeInfoSection } from "@/widgets/home-info-section";
import { HomeScheme } from "@/widgets/home-scheme";
import { HomeSeoTextSection } from "@/widgets/home-seo-text-section";
import { HomeSlider } from "@/widgets/home-slider";
import { LastNews } from "@/widgets/last-news";
import { ProductListSection } from "@/widgets/product-list-section";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <HomeScheme />
      <ProductListSection title="Популярные продукты" />
      <HomeInfoSection />
      <LastNews />
      <HomeSeoTextSection />
      <FeedbackForm />
    </main>
  );
}
