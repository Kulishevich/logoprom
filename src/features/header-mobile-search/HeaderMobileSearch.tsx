"use client";
import { SearchIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";
import s from "./HeaderMobileSearch.module.scss";
import { TextField } from "@/shared/ui/text-field";
import { SearchPopup } from "@/entities/search-popup";

export const HeaderMobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="mobile_nav" onClick={() => setIsOpen((prev) => !prev)}>
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className={s.container}>
          <TextField placeholder="Поиск по сайту" variant="search_3" />
          {!!isOpen && <SearchPopup setIsOpen={setIsOpen} />}
        </div>
      )}
    </>
  );
};
