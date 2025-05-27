import React from "react";
import s from "./PopularProducts.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { ProductCard } from "@/entities/product-card";

export const PopularProducts = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Популярные товары</h2>
        <Button className={"desktop-only"}>
          <ArrowToTopLeftIcon /> В каталог
        </Button>
      </div>
      <div className={s.productsList}>
        <ProductCard />
      </div>
    </div>
  );
};
