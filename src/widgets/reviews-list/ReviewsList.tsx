import React from "react";
import s from "./ReviewsList.module.scss";
import { ReviewsCard } from "@/entities/reviews-card";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";

export const ReviewsList = () => {
  return (
    <div className={s.container}>
      {new Array(4).fill("").map((_, index) => (
        <ReviewsCard key={index} />
      ))}
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
