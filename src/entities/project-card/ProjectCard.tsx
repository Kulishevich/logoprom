import React from "react";
import s from "./ProjectCard.module.scss";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";

export const ProjectCard = () => {
  return (
    <Link href={`${paths.projects}/1`} className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/project-image.png"} alt="project-image" fill />
      </div>
      <div className={s.content}>
        <h3 className="h3">
          Восстановление работоспособности станка для производства сварной сетки
        </h3>
        <div className={s.info}>
          <p className="body_5">Город: Минск</p>
          <p className="body_5">Категория: Пищевая промышленность</p>
          <p className="body_5">Используемые приборы: </p>
          <div className={s.buttonsContainer}>
            <Button textStyle="body_6" variant="secondary">
              КТП-121
            </Button>
            <Button textStyle="body_6" variant="secondary">
              КТП-121
            </Button>
            <Button textStyle="body_6" variant="secondary">
              КТП-121
            </Button>
            <Button textStyle="body_6" variant="secondary">
              КТП-121
            </Button>
            <Button textStyle="body_6" variant="secondary">
              КТП-121
            </Button>
          </div>
        </div>
        <Button variant="link_3">
          <ArrowToTopLeftIcon />
          Подробнее
        </Button>
      </div>
    </Link>
  );
};
