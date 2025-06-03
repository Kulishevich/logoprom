import React from "react";
import s from "./OrderPrice.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { Checkbox } from "@/shared/ui/checkbox";

export const OrderPrice = () => {
  return (
    <div className={s.container}>
      <div className={s.priceAndDelivery}>
        <div className={s.elem}>
          <p className="body_4">Стоимость товаров</p>
          <p className="body_4">13 000 BYN</p>
        </div>
        <div className={s.elem}>
          <p className="body_4">Доставка </p>
          <p className="body_4">Оговаривается индивидуально</p>
        </div>
      </div>
      <div className={s.elem}>
        <p className="body_1">Итого</p>
        <p className="body_1">13 000 BYN</p>
      </div>

      <Checkbox
        label="Согласие на обработку персональных данных"
        privacyPolicy
      />
      <Button>
        <ArrowToTopLeftIcon />
        Оформить заказ
      </Button>
    </div>
  );
};
