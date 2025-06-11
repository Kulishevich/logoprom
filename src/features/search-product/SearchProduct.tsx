import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import s from "./SearchProduct.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const SearchProduct = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const in_stock = true;

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Link
          href={`${paths.product}/1`}
          className={s.imageContainer}
          onClick={() => setIsOpen(false)}
        >
          <Image src={"/product-image.png"} fill alt="product-image" />
        </Link>
        <div className={s.priceContainer}>
          <p className="body_6">
            2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
          </p>
          {in_stock ? (
            <p className={clsx("body_6", s.inStock, "mobile-only")}>
              *В наличии
            </p>
          ) : (
            <p className={clsx("body_6", s.notInStock, "mobile-only")}>
              *Под заказ
            </p>
          )}
          <p className="body_3">2600 BYN</p>
        </div>
      </div>
      <div className={s.buttonsContainer}>
        {in_stock ? (
          <p className={clsx("body_6", s.inStock, "desktop-only")}>
            *В наличии
          </p>
        ) : (
          <p className={clsx("body_6", s.notInStock, "desktop-only")}>
            *Под заказ
          </p>
        )}
        {in_stock ? (
          <>
            <Button textStyle={"body_6"}>Добавить в КП</Button>
            <Button textStyle={"body_6"} variant="secondary">
              Купить в 1 клик
            </Button>
          </>
        ) : (
          <Button variant="default">Заказать</Button>
        )}
      </div>
    </div>
  );
};
