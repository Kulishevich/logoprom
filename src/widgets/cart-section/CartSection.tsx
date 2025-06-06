import Image from "next/image";
import React from "react";
import s from "./CartSection.module.scss";
import { Button } from "@/shared/ui/button";
import { TextField } from "@/shared/ui/text-field";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";
import clsx from "clsx";

const products = [
  {
    image: "/product-image.png",
    name: "2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485",
    code: "1234",
    price: 2600,
  },
  {
    image: "/product-image.png",
    name: "2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485",
    code: "1234",
    price: 2600,
  },
  {
    image: "/product-image.png",
    name: "2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485",
    code: "1234",
    price: 2600,
  },
  {
    image: "/product-image.png",
    name: "2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485",
    code: "1234",
    price: 2600,
  },
  {
    image: "/product-image.png",
    name: "2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485",
    code: "1234",
    price: 2600,
  },
];

export const CartSection = () => {
  return (
    <div className={clsx(s.container, "desktop-only")}>
      <div className={s.tableWrapper}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className="body_3">Наименование</th>
              <th className="body_3">Код</th>
              <th className="body_3">Цена (BYN)</th>
              <th className="body_3">Количество (шт.)</th>
            </tr>
          </thead>
          <tbody className="body_5">
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className={s.tableElem}>
                    <div className={s.imageContainer}>
                      <Image src={product.image} fill alt="product-image" />
                    </div>
                    <p>{product.name}</p>
                  </div>
                </td>
                <td>{product.code}</td>
                <td>{product.price}</td>
                <td>
                  <div className={s.counterContainer}>
                    <TextField variant="counter" />
                    <Button variant="link_1">Удалить из корзины</Button>
                  </div>
                </td>
              </tr>
            ))}
            <tr className={s.lastRow}>
              <td colSpan={2}>
                <p className="body_2">Товаров в корзине на сумму:</p>
              </td>
              <td colSpan={2}>
                <p className={"price"}>13 000 BYN</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        as={Link}
        href={`${paths.cart}${paths.order}`}
        className={s.button}
      >
        <ArrowToTopLeftIcon />
        Перейти к оформлению заказа
      </Button>
    </div>
  );
};
