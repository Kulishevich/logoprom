"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./SearchInput.module.scss";
import { TextField } from "@/shared/ui/text-field";
import { SearchPopup } from "@/entities/search-popup";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const searchResult = {
  //   categories: categories?.filter((category) =>
  //     category.name.toLowerCase().includes(searchValue.toLowerCase())
  //   ),
  //   products: products?.filter((product) =>
  //     product.name.toLowerCase().includes(searchValue.toLowerCase())
  //   ),
  // };

  const handleChangeValue = (value: string) => {
    setSearchValue(value);
    setIsOpen(!!value);
  };

  return (
    <div className={s.searchContainer} ref={searchRef}>
      <TextField
        placeholder="Поиск по сайту"
        variant="search_1"
        value={searchValue}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
      {!!isOpen && <SearchPopup />}
    </div>
  );
};
