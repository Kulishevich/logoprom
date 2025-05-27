import React from "react";
import s from "./ContactsImage.module.scss";
import Image from "next/image";

export const ContactsImage = () => {
  return (
    <div className={s.container}>
      <Image src={"/contacts-background.jpg"} fill alt="contacts" />
      <div className={s.content}>
        <h1 className="h1">Контакты</h1>
      </div>
    </div>
  );
};
