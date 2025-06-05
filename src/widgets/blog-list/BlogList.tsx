import React from "react";
import s from "./BlogList.module.scss";
import { NewsCard } from "@/entities/news-card";
import { Button } from "@/shared/ui/button";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";

export const BlogList = () => {
  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <Button className="button" variant="secondary">
          Новости
        </Button>
        <Button className="button" variant="secondary">
          Акции
        </Button>
      </div>
      <div className={s.blogList}>
        {new Array(9).fill("").map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
