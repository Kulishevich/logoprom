import Image from "next/image";
import React from "react";
import s from "./OrderInfoSection.module.scss";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import {
  ArrowToTopLeftIcon,
  CheckCircleIcon,
  CloseCircleIcon,
} from "@/shared/assets/icons";
import { paths } from "@/shared/config/constants/paths";
import clsx from "clsx";

export const OrderInfoSection = () => {
  const status = false;

  return (
    <div className={s.container}>
      <Image
        src={status ? "/order-success.jpg" : "/order-error.jpg"}
        fill
        alt="not found"
      />
      {status ? (
        <div className={s.content}>
          <CheckCircleIcon />
          <div>
            <h2 className="h2">Ваш заказ оформлен!</h2>
            <p className="body_3">
              Номер заказа: <span>12345</span>
            </p>
            <p className="body_4">
              С вами свяжется наш менеджер для уточнения деталей заказа
              в ближайшее время.
            </p>
          </div>
          <Button as={Link} href={paths.home}>
            <ArrowToTopLeftIcon />
            На главную
          </Button>
        </div>
      ) : (
        <div className={clsx(s.content, s.error)}>
          <CloseCircleIcon />
          <div>
            <h2 className={"h2"}>Ваш заказ не оформлен...</h2>
            <p className="body_4">Пожалуйста, повторите попытку ещё раз.</p>
          </div>
          <Button as={Link} href={paths.home}>
            <ArrowToTopLeftIcon />
            Вернуться назад
          </Button>
        </div>
      )}
    </div>
  );
};
