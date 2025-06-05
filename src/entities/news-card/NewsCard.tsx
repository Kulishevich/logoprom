import React from "react";
import s from "./NewsCard.module.scss";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon, EyeIcon } from "@/shared/assets/icons";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const NewsCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/news-image.png"} fill alt="news" />
      </div>
      <div className={s.content}>
        <div className={s.header}>
          <p className="body_5">01.04.02025</p>
          <div>
            <EyeIcon />
            <p className="body_5">10</p>
          </div>
        </div>
        <p className="h3">
          Изменение цен и расширение ассортимента датчиков температуры
        </p>
        <Button variant="link_3" as={Link} href={`${paths.blog}/1`}>
          <ArrowToTopLeftIcon />
          Подробнее
        </Button>
      </div>
    </div>
  );
};
