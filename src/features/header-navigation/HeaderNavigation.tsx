"use client";
import React, { useState } from "react";
import s from "./HeaderNavigation.module.scss";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { navigation } from "@/shared/config/constants/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FeedbackPopup } from "../feedback-popup";
import { BurgerButton } from "../burger-button";
import { HeaderServicesButton } from "../header-services-button";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <BurgerButton />
        <nav className={s.navigation}>
          {navigation.slice(1, 3).map((nav, index) => (
            <Link
              href={nav.path}
              className={clsx("header", pathname === nav.path && s.active)}
              key={index}
            >
              {nav.title}
            </Link>
          ))}
          <HeaderServicesButton />
          {navigation.slice(4, -1).map((nav, index) => (
            <Link
              href={nav.path}
              className={clsx("header", pathname === nav.path && s.active)}
              key={index}
            >
              {nav.title}
            </Link>
          ))}
        </nav>
        <FeedbackPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
          <Button variant="callback">Обратный звонок</Button>
        </FeedbackPopup>
      </div>
    </div>
  );
};
