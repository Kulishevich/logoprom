import React from "react";
import s from "./CategoryProductsList.module.scss";
import { ProductCard } from "@/entities/product-card";
import { Pagination } from "@/shared/ui/pagination";
import { TextField } from "@/shared/ui/text-field";
import { Select } from "@/shared/ui/select";
import { SeoTextSection } from "../seo-text-section";
import { FilterSecondIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";

const options = [
  {
    option: "Популярные",
    value: "default",
  },
  {
    option: "Сначала дешевые",
    value: "price_asc",
  },
  {
    option: "Сначала дорогие",
    value: "price_desc",
  },
  {
    option: "По алфавиту А-Я",
    value: "name_asc",
  },
  {
    option: "По алфавиту Я-А",
    value: "name_desc",
  },
];

export const CategoryProductsList = () => {
  return (
    <div className={s.container}>
      <div className={s.searchWithSort}>
        <TextField
          className={s.input}
          placeholder="Поиск по категориям"
          variant="search_2"
        />
        <div className={s.selectContainer}>
          <Select
            options={options}
            defaultValue={options[0].value}
            className={s.sort}
          />
          <Button variant="nav_3" className={clsx(s.filter, "mobile-only")}>
            <FilterSecondIcon />
          </Button>
        </div>
      </div>
      <div className={s.productsList}>
        {new Array(6).fill("").map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <Pagination totalPages={10} className={s.pagination} />
      <SeoTextSection />
    </div>
  );
};
