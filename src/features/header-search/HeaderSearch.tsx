import React from "react";
import s from "./HeaderSearch.module.scss";
import { TextField } from "@/shared/ui/text-field";
import { Logo } from "@/shared/ui/logo";
import { LocationIcon, MTSLogoIcon } from "@/shared/assets/icons";

export const HeaderSearch = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Logo className={s.logo} />
        <TextField placeholder="Поиск по сайту" variant="search_1" />
        <div className={s.address}>
          <LocationIcon />
          <p className="body_4">220037, г. Минск, ул. Багратиона, 62–11</p>
        </div>
        <div className={s.phone}>
          <MTSLogoIcon />
          <p className="body_3">+375 (29) 871–95–68</p>
        </div>
      </div>
    </div>
  );
};
