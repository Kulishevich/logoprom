import { HeaderInfo } from "@/features/header-info";
import { HeaderSearch } from "@/features/header-search";
import React from "react";
import s from "./Header.module.scss";
import { HeaderNavigation } from "@/features/header-navigation";

export const Header = () => {
  return (
    <div className={s.container}>
      <HeaderInfo />
      <HeaderSearch />
      <HeaderNavigation />
    </div>
  );
};
