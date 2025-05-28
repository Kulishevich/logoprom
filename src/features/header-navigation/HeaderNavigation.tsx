"use client";
import React, { useState } from "react";
import s from "./HeaderNavigation.module.scss";
import { Button } from "@/shared/ui/button";
import { MenuIcon, MiniArrowDown } from "@/shared/assets/icons";
import Link from "next/link";
import { navigation } from "@/shared/config/constants/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FeedbackPopup } from "../feedback-popup";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Button variant="catalog">
          <MenuIcon />
          Каталог
          <MiniArrowDown />
        </Button>
        <nav className={s.navigation}>
          {navigation.slice(0, 2).map((nav, index) => (
            <Link
              href={nav.path}
              className={clsx("header", pathname === nav.path && s.active)}
              key={index}
            >
              {nav.title}
            </Link>
          ))}
          <Link href={"/"} className="header">
            Услуги
          </Link>
          {navigation.slice(2).map((nav, index) => (
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
