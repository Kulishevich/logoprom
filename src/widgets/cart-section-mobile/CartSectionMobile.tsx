import React from "react";
import s from "./CartSectionMobile.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { CartProductCard } from "@/entities/cart-product-card";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const CartSectionMobile = () => {
  return (
    <div className={s.container}>
      <div className={s.cartHeader}>
        <p className="button">5 товаров</p>
        <Button variant="link_3">
          <ArrowToTopLeftIcon />
          Очистить корзину
        </Button>
      </div>
      <div className={s.productsList}>
        {new Array(5).fill("").map((_, index) => (
          <CartProductCard key={index} />
        ))}
      </div>
      <div className={s.price}>
        <div>
          <p className="body_4">Товаров в корзине на сумму:</p>
          <p className="body_1">13 000 BYN</p>
        </div>
        <Button as={Link} href={`${paths.cart}${paths.order}`}>
          <ArrowToTopLeftIcon />
          Перейти к оформлению заказа
        </Button>
      </div>
    </div>
  );
};
