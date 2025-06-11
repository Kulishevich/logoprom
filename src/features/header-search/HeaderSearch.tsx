"use client";
import React, { useState } from "react";
import s from "./HeaderSearch.module.scss";
import { Logo } from "@/shared/ui/logo";
import { LocationIcon, MTSLogoIcon } from "@/shared/assets/icons";
import { SearchInput } from "../search-input";
import { DefaultSelect } from "@/shared/ui/default-select";

const phones = [
  {
    id: 1,
    value: "+375 (29) 871–95–68",
  },
  {
    id: 2,
    value: "+375 (29) 123-23-23",
  },
];

export const HeaderSearch = () => {
  const [selectedCountry, setSelectedCountry] = useState(phones[0]);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Logo className={s.logo} />
        <SearchInput />
        <div className={s.address}>
          <LocationIcon />
          <p className="body_4">220037, г. Минск, ул. Багратиона, 62–11</p>
        </div>
        <div className={s.phone}>
          <MTSLogoIcon />
          <p className="body_3">{selectedCountry.value}</p>
          <DefaultSelect
            selected={selectedCountry}
            onSelect={setSelectedCountry}
            options={phones}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};
