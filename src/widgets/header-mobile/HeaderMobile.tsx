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
          <HeaderMobileSearch />
          <HeaderMobileFeedbackPopup />
          <HeaderBurgerMenu />
        </div>
      </div>
    </div>
  );
};
