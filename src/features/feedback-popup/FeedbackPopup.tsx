import React, { Dispatch, ReactNode, SetStateAction } from "react";
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

export const FeedbackPopup = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content
            className={s.contentPopup}
            onClick={() => setIsOpen(false)}
          >
            <div className={s.header}>
              <h2 className="h2">Свяжитесь с нами</h2>
              <p className="body_1">
                Заполните форму обратной связи, и наш менеджер свяжется с вами
                в ближайшее время.
              </p>
            </div>
            <form className={s.form}>
              <div className={s.inputsContainer}>
                <TextField label="Ваше имя" placeholder="Имя" isRequired />
                <TextField
                  label="Ваш телефон"
                  placeholder="Телефон"
                  isRequired
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
            <div className={s.imageContainer}>
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
