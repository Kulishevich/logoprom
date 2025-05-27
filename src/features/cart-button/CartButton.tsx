import React from "react";
import s from "./CartButton.module.scss";
import { Button } from "@/shared/ui/button";
import { CartIcon } from "@/shared/assets/icons";

export const CartButton = () => {
  return (
    <Button variant={"cart"} className={s.button}>
      <CartIcon />
      <p className="body_6">Коммерческое предложение</p>
      <p className="body_6">
        <strong>(0 товаров)</strong>
      </p>
    </Button>
  );
};
