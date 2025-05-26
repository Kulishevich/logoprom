"use client";
import React from "react";
import s from "./HeaderNavigation.module.scss";
import { Button } from "@/shared/ui/button";
import { MenuIcon, MiniArrowDown } from "@/shared/assets/icons";
import Link from "next/link";
import { navigation } from "@/shared/config/constants/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const HeaderNavigation = () => {
  const pathname = usePathname();

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
        <Button variant="callback">Обратный звонок</Button>
      </div>
    </div>
  );
};
