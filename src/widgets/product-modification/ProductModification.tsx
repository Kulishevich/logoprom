import React from "react";
import s from "./ProductModification.module.scss";
import Image from "next/image";

export const ProductModification = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Модификации товара</h2>
      <div className={s.imageContainer}>
        <Image src={'/product-modification.png'} fill alt="product-modification"/> </div>
    </div>
  );
};
