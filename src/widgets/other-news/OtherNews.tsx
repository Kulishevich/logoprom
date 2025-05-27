import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React from "react";
import s from "./OtherNews.module.scss";
import { NewsCard } from "@/entities/news-card";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const OtherNews = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Другие новости</h2>
        <Button className={"desktop-only"} as={Link} href={paths.blog}>
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
