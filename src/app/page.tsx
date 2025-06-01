// import {
//   ArrowRightIcon,
//   ArrowToTopLeftIcon,
//   CartIcon,
// } from "@/shared/assets/icons";
// import { Button } from "@/shared/ui/button";
// import { Checkbox } from "@/shared/ui/checkbox";
// import { Select } from "@/shared/ui/select";
// import { TextField } from "@/shared/ui/text-field";
import { FeedbackForm } from "@/widgets/feedback-form";
import { HomeInfoSection } from "@/widgets/home-info-section";
import { HomeSeoTextSection } from "@/widgets/home-seo-text-section";
import { HomeSlider } from "@/widgets/home-slider";
import { LastNews } from "@/widgets/last-news";
import { ProductListSection } from "@/widgets/product-list-section";

// const options = [
//   {
//     option: "Популярные",
//     value: "default",
//   },
//   {
//     option: "Сначала дешевые",
//     value: "price_asc",
//   },
//   {
//     option: "Сначала дорогие",
//     value: "price_desc",
//   },
//   {
//     option: "По алфавиту А-Я",
//     value: "name_asc",
//   },
//   {
//     option: "По алфавиту Я-А",
//     value: "name_desc",
//   },
// ];

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <ProductListSection title="Популярные продукты" />
      <HomeInfoSection />
      <LastNews />
      <HomeSeoTextSection />
      <FeedbackForm />
    </main>
  );
}
