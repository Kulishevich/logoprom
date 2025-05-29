import React from "react";
import s from "./FirstBlockAbout.module.scss";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "28",
    description: "лет на рынке",
  },
  {
    id: 2,
    title: "60+",
    description: "тысяч сделок",
  },
  {
    id: 3,
    title: "600+",
    description: "тысяч единиц оборудования",
  },
];

export const FirstBlockAbout = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <p className="body_1">
          Логопром-Сервис: Лидер на белорусском рынке в области
          контрольно-измерительных приборов и автоматизации.
        </p>
        <p className="body_2">
          Компания «Логопром-Сервис» поставляет контрольно-измерительные приборы
          (давление, температура, влажность, уровень), средства автоматизации
          и системы метрологического обеспечения для различных отраслей.
          Также выполняет проекты автоматизации производства, изготавливает
          шкафы управления и проводит пуско-наладочные работы с монтажом
          оборудования.
        </p>
      </div>
      <div className={s.imageContainer}>
        {cards.map((card) => (
          <div key={card.id}>
            <h2 className="h2">{card.title}</h2>
            <p className="body_5">{card.description}</p>
          </div>
        ))}
        <Image src={"/home-info.png"} fill alt="about-info" />
      </div>
    </div>
  );
};
