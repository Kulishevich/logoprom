import React from "react";
import s from "./FeedbackForm.module.scss";
import Image from "next/image";

export const FeedbackForm = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Свяжитесь с нами</h2>

        <p className="body_1">
          Заполните форму обратной связи, и наш менеджер свяжется с вами
          в ближайшее время.
        </p>
      </div>

      <div className={s.content}>
        <div className={s.imageContainer}>
          <Image src={"/feedback.jpg"} fill alt="feedback" />
        </div>
      </div>
    </div>
  );
};
