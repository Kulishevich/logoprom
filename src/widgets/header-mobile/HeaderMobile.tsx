"use client";
import clsx from "clsx";
import s from "./HeaderMobile.module.scss";
import {
  MailIcon,
  TelegramOutlineIcon,
  ViberOutlineIcon,
  WhatsappOutlineIcon,
} from "@/shared/assets/icons";
import Link from "next/link";
import { Logo } from "@/shared/ui/logo";
import { HeaderMobileFeedbackPopup } from "@/features/header-mobile-feedback-popup";
import { HeaderBurgerMenu } from "@/features/header-burder-menu";
import { HeaderMobileSearch } from "@/features/header-mobile-search";
import { useEffect, useState } from "react";

export const HeaderMobile = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className={clsx(s.navigation, scrolled && s.scrolled)}>
        <Logo />
        <div className={s.menu}>
          <HeaderMobileSearch />
          <HeaderMobileFeedbackPopup />
          <HeaderBurgerMenu />
        </div>
      </div>
    </div>
  );
};
