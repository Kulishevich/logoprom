import React from "react";
import s from "./ProductSection.module.scss";
import { ProductImages } from "../../features/product-images";
import { ProductInfo } from "@/features/product-info";

export const ProductSection = () => {
  return (
    <div className={s.container}>
      <h1 className="h1_item">
        2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
      </h1>
      <div className={s.content}>
        <ProductImages />
        <ProductInfo />
      </div>
    </div>
  );
};
