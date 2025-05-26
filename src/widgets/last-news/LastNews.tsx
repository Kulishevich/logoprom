import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React from "react";
import s from "./LastNews.module.scss";
import { NewsCard } from "@/entities/news-card";

export const LastNews = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Последние новости</h2>
        <Button>
          <ArrowToTopLeftIcon /> Все новости
        </Button>
      </div>
      <div className={s.newsList}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
