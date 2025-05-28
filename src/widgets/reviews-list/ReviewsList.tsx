import React from "react";
import s from "./ReviewsList.module.scss";
import { ReviewsCard } from "@/entities/reviews-card";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";

export const ReviewsList = () => {
  return (
    <div className={s.container}>
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <ReviewsCard />
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
