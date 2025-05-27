import React from "react";
import s from "./NotFoundSection.module.scss";
import Image from "next/image";
import { ArrowToTopLeftIcon, NotFoundIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const NotFoundSection = () => {
  return (
    <div className={s.container}>
      <Image src={"/not-found.jpg"} fill alt="not found" />
      <NotFoundIcon />
      <div className={s.content}>
        <h2 className="h2">страница не найдена</h2>
        <p className="body_4">
          К сожалению, страница не найдена. Возможно, она была удалена
          или вы ввели некорректный адрес (ошибка 404).
        </p>
        <Button as={Link} href={paths.home}>
          <ArrowToTopLeftIcon />
          На главную
        </Button>
      </div>
    </div>
  );
};
