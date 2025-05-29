import React from "react";
import s from "./CatalogSection.module.scss";
import { CatalogCard } from "@/entities/catalog-card";

export const CatalogSection = () => {
  return (
    <div className={s.container}>
      {new Array(5).fill("").map((_, index) => (
        <CatalogCard key={index} />
      ))}
    </div>
  );
};
