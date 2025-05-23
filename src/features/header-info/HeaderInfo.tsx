import React from "react";
import s from "./HeaderInfo.module.scss";
import {
  MailIcon,
  TelegramOutlineIcon,
  ViberOutlineIcon,
  WhatsappOutlineIcon,
} from "@/shared/assets/icons";
import Link from "next/link";

export const HeaderInfo = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.emailContainer}>
          <MailIcon />
          <Link href={"mailto:logoprom@mail.ru"} className="body_6">
            logoprom@mail.ru
          </Link>
        </div>
        <div className={s.socialMedia}>
          <WhatsappOutlineIcon />
          <TelegramOutlineIcon />
          <ViberOutlineIcon />
        </div>
      </div>
    </div>
  );
};
