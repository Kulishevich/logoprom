import React from "react";
import s from "./CategoryProductsSection.module.scss";
import { CategoryProductsList } from "../category-products-list";
import { CategoryNavigationsAndFilters } from "../category-navigations-and-filters";

export const CategoryProductsSection = () => {
  return (
    <div className={s.container}>
      <CategoryNavigationsAndFilters />
      <CategoryProductsList />
    </div>
  );
};
