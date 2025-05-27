import React from "react";
import s from "./ContactsInfo.module.scss";
import {
  ClockIcon,
  LocationIcon,
  MailIconBackground,
  PhoneIcon,
} from "@/shared/assets/icons";
import { YandexMap } from "@/shared/ui/yandex-map/YandexMap";

export const ContactsInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.contacts}>
        <div className={s.elem}>
          <PhoneIcon />
          <p className="h3">
            <strong>Тел.</strong> (017) 380–21–23
          </p>
          <p className="h3">
            <strong>Тел.</strong> (017) 380–24–33, Тел. моб. 8–029–683–63–36
          </p>
          <p className="h3">
            <strong>Тел.</strong> (017) 380–21–34, Тел. моб. 8–029–871–95–68
          </p>
          <p className="h3">
            <strong>Тел.</strong> (017) 380–24–33, Тел. моб. 8–029–857–58–87
          </p>
          <p className="h3">
            <strong>Факс</strong> (017) 361–39–00, Тел. моб. 8–029–683–63–36
          </p>
        </div>

        <div className={s.elem}>
          <LocationIcon />
          <p className="h3">
            <strong>Адрес:</strong> 220037, Республика Беларусь, г. Минск,
            ул. Багратиона 62, каб 11
          </p>
        </div>
        <div className={s.elem}>
          <ClockIcon />
          <p className="h3">
            <strong>Время работы:</strong> 8:30–18:00
          </p>
          <p className="h3">
            <strong>Время работы офиса:</strong> пн-пт с 9:00 до 17:00
          </p>
          <p className="h3">
            <strong>Выходные дни:</strong> суббота, воскресенье.
          </p>
          <p className="h3">
            <strong>Суббота и воскресенье:</strong> консультация по телефону
            8–033–871–95–68
          </p>
        </div>
        <div className={s.elem}>
          <MailIconBackground />
          <p className="h3">
            <strong>Email:</strong> logoprom@mail.ru
          </p>
        </div>
      </div>
      <YandexMap />
    </div>
  );
};
