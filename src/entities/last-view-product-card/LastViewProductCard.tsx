import React from "react";
import s from "./LastViewProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const LastViewProductCard = () => {
  return (
    <Link href={"/"} className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/product-image.png"} fill alt="product-image" />
      </div>
      <p className="body_3">
        2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
      </p>
    </Link>
  );
};
