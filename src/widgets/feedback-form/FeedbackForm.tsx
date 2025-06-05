"use client";
import React, { useState } from "react";
import s from "./FeedbackForm.module.scss";
import Image from "next/image";
import { TextField } from "@/shared/ui/text-field";
import { TextArea } from "@/shared/ui/text-area";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import { showToast } from "@/shared/ui/toast";
import { Country } from "@/shared/ui/country-select";
import { countries } from "@/shared/ui/country-select/countries";

export const FeedbackForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

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
            <TextField label="Ваше имя" placeholder="Имя" isRequired />
            <TextField
              label="Ваш телефон"
              placeholder="(__) - ___-__-__"
              isRequired
              variant="phone"
              selectedCountry={selectedCountry}
              onSelect={setSelectedCountry}
            />
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
            <Button
              onClick={() =>
                showToast({
                  title: "Мы получили вашу заявку",
                  message:
                    "В скором времени с вами свяжется наш менеджер и ответит на все вопросы.",
                  variant: "success",
                })
              }
            >
              <ArrowToTopLeftIcon />
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
