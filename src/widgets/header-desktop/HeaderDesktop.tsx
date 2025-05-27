import { HeaderInfo } from "@/features/header-info";
import { HeaderSearch } from "@/features/header-search";
import React from "react";
import s from "./HeaderDesktop.module.scss";
import { HeaderNavigation } from "@/features/header-navigation";
import clsx from "clsx";

export const HeaderDesktop = () => {
  return (
    <div className={clsx(s.container, "desktop-only")}>
      <HeaderInfo />
      <HeaderSearch />
      <HeaderNavigation />
    </div>
  );
};
