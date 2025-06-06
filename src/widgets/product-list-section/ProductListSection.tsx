import React from "react";
import s from "./ProductListSection.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { ProductCard } from "@/entities/product-card";
import clsx from "clsx";

export const ProductListSection = ({
  title,
  with_button = true,
  variant = "primary",
}: {
  title: string;
  with_button?: boolean;
  variant?: "primary" | "secondary";
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
      <div className={clsx(s.productsList, s[variant])}>
        {new Array(6).fill("").map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};
