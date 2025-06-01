import React from "react";
import s from "./ProductListSection.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { ProductCard } from "@/entities/product-card";

export const ProductListSection = ({
  title,
  with_button = true,
}: {
  title: string;
  with_button?: boolean;
}) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">{title}</h2>
        {with_button && (
          <Button className={"desktop-only"}>
            <ArrowToTopLeftIcon /> В каталог
          </Button>
        )}
      </div>
      <div className={s.productsList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
