import React from "react";
import s from "./FooterSocailMedia.module.scss";
import {
  ArrowToTopLeftIcon,
  TelegramBackgroundIcon,
  TelegramMiniIcon,
  ViberBackgroundIcon,
  ViberOutlineIcon,
  WhatsappBackgroundIcon,
  WhatsappOutlineIcon,
} from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export const FooterSocailMedia = () => {
  return (
    <div className={s.container}>
      <Link href={"/"} className={s.card}>
        <ViberBackgroundIcon className={s.icon} />
        <ViberOutlineIcon className={s.background} />
        <Button variant="link_2" className="button">
          <ArrowToTopLeftIcon />
          Viber
        </Button>
      </Link>
      <Link href={"/"} className={s.card}>
        <WhatsappBackgroundIcon className={s.icon} />
        <WhatsappOutlineIcon className={s.background} />
        <Button variant="link_2" className="button">
          <ArrowToTopLeftIcon />
          WhatsApp
        </Button>
      </Link>
      <Link href={"/"} className={s.card}>
        <TelegramBackgroundIcon className={s.icon} />
        <TelegramMiniIcon className={s.background} />
        <Button variant="link_2" className="button">
          <ArrowToTopLeftIcon />
          Telegram
        </Button>
      </Link>
    </div>
  );
};
