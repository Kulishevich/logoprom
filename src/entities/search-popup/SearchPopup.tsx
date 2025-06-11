import React from "react";
import s from "./SearchPopup.module.scss";
import { SearchProduct } from "@/features/search-product";

export const SearchPopup = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={s.container}>
      {new Array(6).fill("").map((_, index) => (
        <SearchProduct key={index} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};
