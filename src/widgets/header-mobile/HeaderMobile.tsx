import clsx from "clsx";
import React from "react";
import s from "./HeaderMobile.module.scss";
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  TelegramOutlineIcon,
  ViberOutlineIcon,
  WhatsappOutlineIcon,
} from "@/shared/assets/icons";
import Link from "next/link";
import { Logo } from "@/shared/ui/logo";
import { Button } from "@/shared/ui/button";

export const HeaderMobile = () => {
  return (
    <div className={clsx("mobile-only", s.container)}>
      <div className={s.info}>
        <div className={s.mail}>
          <MailIcon />
          <Link className="body_6" href={"mailto:logoprom@mail.ru"}>
            logoprom@mail.ru
          </Link>
        </div>
        <div className={s.socialMedia}>
          <WhatsappOutlineIcon />
          <TelegramOutlineIcon />
          <ViberOutlineIcon />
        </div>
      </div>
      <div className={s.navigation}>
        <Logo />
        <div className={s.menu}>
          <Button variant="mobile_nav">
            <SearchIcon />
          </Button>
          <Button variant="mobile_nav">
            <PhoneIcon />
          </Button>
          <Button variant="mobile_nav">
            <MenuIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
