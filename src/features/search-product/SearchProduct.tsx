import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import s from "./SearchProduct.module.scss";
import clsx from "clsx";

export const SearchProduct = () => {
  const in_stock = true;

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        '<Image src={"/product-image.png"} fill alt="product-image" />
      </div>
      <div className={s.priceContainer}>
        <p className="body_6">
          2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
        </p>
        <p className="body_3">2600 BYN</p>
      </div>
      <div className={s.buttonsContainer}>
        {in_stock ? (
          <p className={clsx("body_6", s.inStock)}>*В наличии</p>
        ) : (
          <p className={clsx("body_6", s.notInStock)}>*Под заказ</p>
        )}
        <Button textStyle={"body_6"}>Добавить в КП</Button>
        <Button textStyle={"body_6"} variant="secondary">
          Купить в 1 клик
        </Button>
      </div>
    </div>
  );
};
