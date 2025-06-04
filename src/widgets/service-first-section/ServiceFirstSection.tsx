import React from "react";
import s from "./ServiceFirstSection.module.scss";
import Image from "next/image";

export const ServiceFirstSection = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
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
        <Image src={"/service.jpg"} fill alt="" />
      </div>
    </div>
  );
};
