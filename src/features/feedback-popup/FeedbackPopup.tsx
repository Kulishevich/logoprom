import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./FeedbackPopup.module.scss";
import {
  ArrowToTopLeftIcon,
  CloseCircleOutlinedIcon,
} from "@/shared/assets/icons";
import { TextField } from "@/shared/ui/text-field";
import { TextArea } from "@/shared/ui/text-area";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { Country } from "@/shared/ui/country-select";
import { countries } from "@/shared/ui/country-select/countries";
import clsx from "clsx";

export const FeedbackPopup = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.contentPopup}>
            <div className={s.header}>
              <Dialog.Title asChild>
                <h2 className="h2">Свяжитесь с нами</h2>
              </Dialog.Title>
              <Dialog.Description asChild>
                <p className="body_1">
                  Заполните форму обратной связи, и наш менеджер свяжется с вами
                  в ближайшее время.
                </p>
              </Dialog.Description>
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
                <Button>
                  <ArrowToTopLeftIcon />
                  Отправить
                </Button>
              </div>
            </form>
            <div className={clsx(s.imageContainer, "desktop-only")}>
              <Image src={"/feedback-popup.png"} fill alt="" />
            </div>
            <Dialog.DialogClose className={s.closeButton}>
              <CloseCircleOutlinedIcon />
            </Dialog.DialogClose>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
