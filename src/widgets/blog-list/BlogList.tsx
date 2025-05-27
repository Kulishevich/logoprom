import React, { Suspense } from "react";
import s from "./BlogList.module.scss";
import { NewsCard } from "@/entities/news-card";
import { Pagination } from "@/shared/ui/pagination";
import { Button } from "@/shared/ui/button";

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
      <Suspense fallback={<p className="body_4">Загрузка...</p>}>
        <Pagination totalPages={10} />
      </Suspense>
    </div>
  );
};
