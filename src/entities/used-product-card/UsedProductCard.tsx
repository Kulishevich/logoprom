import React from "react";
import s from "./UsedProductCard.module.scss";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";

export const UsedProductCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/product-image.png"} fill alt="product" />
      </div>
      <div className={s.content}>
        <p className="body_5">
          2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
        </p>
        <p className={clsx("h4", s.price)}>2600 BYN</p>
        <Button>Добавить в КП</Button>
      </div>
    </div>
  );
};
