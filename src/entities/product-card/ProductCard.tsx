import React from "react";
import s from "./ProductCard.module.scss";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";
import { ProductButton } from "@/widgets/product-button";
import { ChoiceProductLabelingPopup } from "@/features/choice-product-labeling-popup";

export const ProductCard = () => {
  const in_stock = true;

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/product-image.png"} fill alt="product" />
        <div className={s.tagContainer}>
          <p className={clsx(s.missing, "body_5")}>Снят с производства</p>
          <p className={clsx(s.news, "body_5")}>Новинка</p>
        </div>
      </div>
      <div className={s.content}>
        <p className="body_3">
          2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
        </p>
        <p className="body_6">*В наличии</p>
        <div className={s.characteristics}>
          <p className="body_6">
            Количество каналов:<strong>1–2 канала</strong>
          </p>
          <p className="body_6">
            Особенности КИП:<strong>Для работы при Т  0 ⁰С</strong>
          </p>
          <p className="body_6">
            Тип:<strong>ON/OFF-регулятор</strong>
          </p>
          <p className="body_6">
            Тип крепления:{" "}
            <strong>
              С креплением в щит, С креплением на DIN-рейку, С креплением
              на стену (плоскую поверхность)
            </strong>
          </p>
        </div>
        <div className={s.priceContainer}>
          <p className="h4">2600 BYN</p>
          {in_stock && (
            <ChoiceProductLabelingPopup>
              <Button>Добавить в КП</Button>
            </ChoiceProductLabelingPopup>
          )}
          <ProductButton type={in_stock ? "buy-one-click" : "order"} />
        </div>
      </div>
    </div>
  );
};
