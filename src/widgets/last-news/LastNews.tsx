import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React from "react";
import s from "./LastNews.module.scss";
import { NewsCard } from "@/entities/news-card";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const LastNews = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Последние новости</h2>
        <Button className={"desktop-only"} as={Link} href={paths.blog}>
          <ArrowToTopLeftIcon /> Все новости
        </Button>
      </div>
      <div className={s.newsList}>
        {new Array(5).fill("").map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </div>
  );
};
