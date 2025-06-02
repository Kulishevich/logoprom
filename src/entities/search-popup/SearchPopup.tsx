import React from "react";
import s from "./SearchPopup.module.scss";
import { SearchProduct } from "@/features/search-product";

export const SearchPopup = () => {
  return (
    <div className={s.container}>
      {new Array(6).fill("").map((product) => (
        <SearchProduct />
      ))}
    </div>
  );
};
