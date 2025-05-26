import React from "react";
import s from "./FeedbackForm.module.scss";
import Image from "next/image";
import { TextField } from "@/shared/ui/text-field";
import { TextArea } from "@/shared/ui/text-area";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";

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
        <form className={s.form}>
          <div className={s.inputsContainer}>
            <TextField placeholder="Ваше имя" label="Имя" isRequired />
            <TextField placeholder="Ваш телефон" label="Телефон" isRequired />
          </div>

          <TextArea
            label="Комментарий"
            placeholder="Комментарий"
            className={s.textarea}
          />

          <div className={s.submitContainer}>
            <Checkbox
              label="Согласие на обработку персональных данных"
              privacyPolicy
            />
            <Button>
              <ArrowToTopLeftIcon />
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
