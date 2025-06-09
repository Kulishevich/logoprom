"use client";
import React, { useState } from "react";
import s from "./OrderForm.module.scss";
import { TextField } from "@/shared/ui/text-field";
import clsx from "clsx";
import { TextArea } from "@/shared/ui/text-area";
import { Button } from "@/shared/ui/button";
import { countries } from "@/shared/ui/default-select/countries";
import { Option } from "@/shared/ui/default-select";

const deliveryMethods = [
  {
    id: "1",
    title: "Самовывоз",
  },
  {
    id: "2",
    title: "Оговаривается индивидуально",
    description: "По РБ",
  },
  {
    id: "3",
    title: "10 BYN",
    description: "по Минску (заказ < 400 BYN)",
  },
];

export const OrderForm = () => {
  const [activeDelivery, setActiveDelivery] = useState(deliveryMethods[0].id);
  const [selectedCountry, setSelectedCountry] = useState<Option>(countries[0]);

  return (
    <div className={s.container}>
      <div className={s.elem}>
        <div className={s.headerElem}>
          <h4 className="h4">
            <span>1</span>Укажите ваши контакты
          </h4>
        </div>
        <div className={s.contacts}>
          <TextField label="ФИО" isRequired placeholder="ФИО" />
          <TextField
            label="Телефон"
            placeholder="(__) - ___-__-__"
            isRequired
            variant="phone"
            options={countries}
            selected={selectedCountry}
            onSelect={setSelectedCountry}
          />
          <TextField
            label="Наименование компании"
            isRequired
            placeholder="Наименование компании"
          />
          <TextField label="Email" isRequired placeholder="Email" />
          <TextField
            label="УНП (необязательное поле)"
            placeholder="УНП (необязательное поле)"
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
              {elem.description && <p className="body_3">{elem.description}</p>}
              <p className="body_1">{elem.title}</p>
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
