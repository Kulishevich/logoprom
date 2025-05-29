import React from "react";
import s from "./ThirdBlockAbout.module.scss";
import Image from "next/image";

export const ThirdBlockAbout = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <p className="body_1">
          Наша компания — официальный партнёр производственного объединения
          «ОВЕН», ведущего российского разработчика и производителя промышленных
          средств автоматизации.
        </p>
        <p className="body_2">
          Оборудование производства ОВЕН — это универсальная основа
          для проектирования систем автоматического управления, охватывающих
          как локальные технологические операции, так и комплексные
          многоуровневые процессы.
        </p>
      </div>
      <div className={s.imageContainer}>
        <Image src={"/logo-about.png"} fill alt="logo-about" />
      </div>
    </div>
  );
};
