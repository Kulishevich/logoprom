import React from "react";
import s from "./CartProductCard.module.scss";
import Image from "next/image";
import { TextField } from "@/shared/ui/text-field";
import { CloseCircleOutlinedIcon } from "@/shared/assets/icons";

export const CartProductCard = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/product-image.png"} fill alt="product image" />
        <button className={s.closeButton}>
          <CloseCircleOutlinedIcon />
        </button>
      </div>
      <div className={s.content}>
        <p className={"body_6"}>
          Код: <span>1224</span>
        </p>
        <p className="body_5">
          2ТРМ1 обновлённый погодозависимый двухканальный регулятор с RS-485
        </p>
        <p className="h4">2600 BYN</p>
        <TextField variant="counter" />
      </div>
    </div>
  );
};
