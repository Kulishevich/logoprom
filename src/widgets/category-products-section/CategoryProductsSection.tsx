import React from "react";
import s from "./CategoryProductsSection.module.scss";
import { CategoryProductsList } from "../category-products-list";
import { CategoryNavigationsAndFilters } from "../category-navigations-and-filters";
import { CategoryCards } from "../category-cards";
import { CategoryNavigation } from "../category-navigation";

export const CategoryProductsSection = () => {
  const variant = true;

  return (
    <div className={s.container}>
      {variant ? <CategoryNavigation /> : <CategoryCards />}
      <div className={s.content}>
        <CategoryNavigationsAndFilters />
        <CategoryProductsList />
      </div>
    </div>
  );
};
