"use client";
import React, { ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./ChoiceProductLabelingPopup.module.scss";
import {
  ArrowToTopLeftIcon,
  CloseCircleOutlinedIcon,
} from "@/shared/assets/icons";
import Image from "next/image";
import { TextField } from "@/shared/ui/text-field";
import { Button } from "@/shared/ui/button";

export const ChoiceProductLabelingPopup = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.contentPopup}>
            <Dialog.Title asChild>
              <h2 className="h2">Выбрать точную маркировку</h2>
            </Dialog.Title>
            <div className={s.content}>
              <div className={s.inputWithButton}>
                <TextField placeholder="Щ1 (щитовой, IP54)" />
                <p className={"body_6"}>
                  Если вы не можете выбрать точную маркировку, оставьте поле
                  пустым. Менеджер с вами свяжется и поможет подобрать её.
                </p>
                <Button>
                  <ArrowToTopLeftIcon />
                  Выбрать
                </Button>
              </div>
              <div className={s.imageContainer}>
                <Image
                  src={"/product-lebeling.png"}
                  fill
                  alt="lebeling-product"
                />
              </div>
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
