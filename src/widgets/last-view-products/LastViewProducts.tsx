import React from "react";
import s from "./LastViewProducts.module.scss";
import { Slider } from "@/shared/ui/slider";
import { LastViewProductCard } from "@/entities/last-view-product-card";

export const LastViewProducts = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Вы недавно смотрели</h2>
      <Slider itemWidth={264}>
        <LastViewProductCard />
        <LastViewProductCard />
        <LastViewProductCard />
        <LastViewProductCard />
        <LastViewProductCard />
        <LastViewProductCard />
      </Slider>
    </div>
  );
};
