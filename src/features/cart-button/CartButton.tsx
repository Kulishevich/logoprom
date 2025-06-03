import React from "react";
import s from "./CartButton.module.scss";
import { Button } from "@/shared/ui/button";
import { CartIcon } from "@/shared/assets/icons";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const CartButton = () => {
  return (
    <Button variant={"cart"} className={s.button} as={Link} href={paths.cart}>
      <CartIcon />
      <p className="body_6">Коммерческое предложение</p>
      <p className="body_6">
        <strong>(0 товаров)</strong>
      </p>
    </Button>
  );
};
