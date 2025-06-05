import React from "react";
import s from "./ServiceThirdSection.module.scss";
import Image from "next/image";

export const ServiceThirdSection = () => {
  return (
    <div className={s.container}>
      <p className="body_1">
        &quot;Логопром-Сервис&quot; — ведущая компания Беларуси,
        специализирующаяся на разработке, поставке и внедрении
        высокотехнологичных решений в сфере контрольно-измерительных приборов
        (КИП) и промышленной автоматизации.{" "}
      </p>
      <div className={s.content}>
        <p className="body_2">
          Компания «Логопром-Сервис» поставляет контрольно-измерительные приборы
          (давление, температура, влажность, уровень), средства автоматизации
          и системы метрологического обеспечения для различных отраслей.{" "}
        </p>
        <p className="body_2">
          Также выполняет проекты автоматизации производства и изготавливает
          шкафы управления.
        </p>
      </div>
      <div className={s.imageContainer}>
        <Image src={"/service-third-section-image.jpg"} fill alt="service" />
      </div>
    </div>
  );
};
