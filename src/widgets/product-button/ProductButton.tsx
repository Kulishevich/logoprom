"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./ProductButton.module.scss";
import {
  ArrowToTopLeftIcon,
  CloseCircleOutlinedIcon,
} from "@/shared/assets/icons";
import { TextField } from "@/shared/ui/text-field";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

export const ProductButton = ({
  className,
  type,
}: {
  className?: string;
  type: "buy-one-click" | "order";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          className={className}
          variant={type === "buy-one-click" ? "secondary" : "default"}
        >
          {type === "buy-one-click" ? "Купить в 1 клик" : "Заказать"}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.contentPopup}>
            <h2 className="h2">
              {type === "buy-one-click"
                ? "Купить в один клик"
                : "Заказать товар"}
            </h2>
            <div className={s.content}>
              <div className={s.card}>
                <div className={s.imageContainer}>
                  <Image src={"/product-image.png"} fill alt="product-image" />
                </div>
                <p className="body_3">
                  2ТРМ1 обновлённый погодозависимый двухканальный регулятор
                  с RS-485
                </p>
              </div>
              <form className={s.form}>
                <div className={s.inputsContainer}>
                  <TextField label="Ваше имя" placeholder="Имя" isRequired />
                  <TextField
                    label="Ваш email"
                    placeholder="Телефон"
                    isRequired
                  />
                </div>
                <p className="h4">или</p>
                <TextField label="Ваш телефон" placeholder="Email" isRequired />
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

            <Dialog.DialogClose className={s.closeButton}>
              <CloseCircleOutlinedIcon />
            </Dialog.DialogClose>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
