import React from "react";
import s from "./Footer.module.scss";
import { Logo } from "@/shared/ui/logo";
import { FooterSocailMedia } from "@/features/footer-social-media";
import Link from "next/link";
import { navigation } from "@/shared/config/constants/navigation";

const catalog = [
  "Контрольно-измерительные приборы",
  "Программируемые устройства",
  "Силовые и коммутационные устройства",
  "Датчики",
  "ПО, устройства связи",
];

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.logo}>
            <Logo />
            <p className="body_4">
              Официальный представитель и первый дилер в Республике Беларусь
            </p>
          </div>
          <div className={s.menu}>
            <div className={s.catalog}>
              <h3 className="h3">Каталог продукции</h3>
              <div>
                {catalog.map((elem, index) => (
                  <Link href={"/"} key={index} className="body_2">
                    {elem}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.navigation}>
              <h3 className="h3">Покупателям</h3>
              <div>
                {navigation.map((nav, index) => (
                  <Link href={nav.path} key={index} className="body_2">
                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.contacts}>
              <p className="body_2">
                Адрес: 220037, Республика Беларусь, г. Минск, ул. Багратиона 62,
                каб 11
              </p>
              <p className="body_2">
                Время работы: 8:30–18:00 Время работы офиса: пн-пт
                с 9:00 до 17:00 Выходные дни: суббота, воскресенье. Суббота
                и воскресенье: консультация по телефону 8–033–871–95–68
              </p>
              <Link href={"mailto:logoprom@mail.ru"} className="body_2">
                Email: logoprom@mail.ru
              </Link>
            </div>
          </div>
        </div>
        <FooterSocailMedia />
        <div className={s.info}>
          <p className="body_5">© 2025 logo-prom.by</p>
          <p className="body_5">Политика обработки персональных данных</p>
          <p className="body_5">
            Дизайн и разработка: <Link href={"/"}>Cropas.by</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
