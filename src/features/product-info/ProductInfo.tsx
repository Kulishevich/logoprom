import React from "react";
import s from "./ProductInfo.module.scss";
import { Button } from "@/shared/ui/button";
import { ProductContent } from "@/entities/product-content";
import clsx from "clsx";
import { ProductButton } from "@/widgets/product-button";

export const ProductInfo = () => {
  const in_stock = true;

  return (
    <div className={s.container}>
      <div className={s.productHeader}>
        <p className={clsx("body_5", s.productState)}>*Под заказ</p>
        <p className={clsx("body_5", s.code)}>Код: 1234</p>
      </div>
      <div className={s.productCharacteristics}>
        <div>
          <p className="body_2">Количество каналов</p>
          <p className="body_2">1–2 канала</p>
        </div>
        <div>
          <p className="body_2">Особенности КИП</p>
          <p className="body_2">Для работы при Т 0 ⁰С</p>
        </div>
        <div>
          <p className="body_2">Тип</p>
          <p className="body_2">ON/OFF-регулятор</p>
        </div>
        <div>
          <p className="body_2">Тип крепления</p>
          <p className="body_2">
            С креплением в щит, С креплением на DIN-рейку, С креплением на стену
            (плоскую поверхность)
          </p>
        </div>
      </div>
      <p className="price">от 2600 BYN</p>
      <div className={s.buttonContainer}>
        {in_stock && <Button>Добавить в КП</Button>}
        <ProductButton type={in_stock ? "buy-one-click" : "order"} />
      </div>
      <ProductContent />
    </div>
  );
};
