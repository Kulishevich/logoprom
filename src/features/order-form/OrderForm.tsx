"use client";
import React, { useState } from "react";
import s from "./OrderForm.module.scss";
import { TextField } from "@/shared/ui/text-field";
import clsx from "clsx";
import { TextArea } from "@/shared/ui/text-area";
import { Button } from "@/shared/ui/button";

const deliveryMethods = [
  {
    id: "1",
    title: "По РБ (заказ > 400 BYN)",
    description: "Бесплатно",
  },
  {
    id: "2",
    title: "По РБ (заказ < 400 BYN)",
    description: "Оговаривается индивидуально",
  },
  {
    id: "3",
    title: "по Минску (заказ < 400 BYN)",
    description: "10 BYN",
  },
];

export const OrderForm = () => {
  const [activeDelivery, setActiveDelivery] = useState(deliveryMethods[0].id);

  return (
    <div className={s.container}>
      <div className={s.elem}>
        <div className={s.headerElem}>
          <h4 className="h4">
            <span>1</span>Укажите ваши контакты
          </h4>
        </div>
        <div className={s.contacts}>
          <TextField label="Имя" isRequired placeholder="Имя" />
          <TextField label="Телефон" isRequired placeholder="Телефон" />
          <TextField label="Фамилия" isRequired placeholder="Фамилия" />
          <TextField label="Email" isRequired placeholder="Email" />
          <TextField
            label="Отчество (если есть)"
            isRequired
            placeholder="Отчество"
          />
        </div>
      </div>
      <div className={s.elem}>
        <div className={s.headerElem}>
          <h4 className="h4">
            <span>2</span>Выберите способ доставки
          </h4>
        </div>
        <div className={s.deliveryMethod}>
          {deliveryMethods.map((elem, index) => (
            <button
              className={clsx(
                s.deliveryCard,
                activeDelivery === elem.id && s.activeDelivery
              )}
              onClick={() => setActiveDelivery(elem.id)}
              key={index}
            >
              <p className="body_3">{elem.title}</p>
              <p className="body_1">{elem.description}</p>
            </button>
          ))}
        </div>
      </div>
      <div className={s.elem}>
        <div className={s.headerElem}>
          <h4 className="h4">
            <span>3</span>Укажите адрес доставки
          </h4>
          <Button variant="link_1">Подробнее о доставке</Button>
        </div>
        <div className={s.deliveryAddress}>
          <TextField
            label="Адрес доставки"
            placeholder="Адрес доставки"
            isRequired
          />
          <TextArea label="Комментарий" placeholder="Комментарий" />
        </div>
      </div>
    </div>
  );
};
