import React from "react";
import s from "./LastViewProducts.module.scss";
import { Slider } from "@/shared/ui/slider";
import { LastViewProductCard } from "@/entities/last-view-product-card";

export const LastViewProducts = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Вы недавно смотрели</h2>
      <Slider itemWidth={264}>
        {new Array(6).fill("").map((_, index) => (
          <LastViewProductCard key={index}/>
        ))}
      </Slider>
    </div>
  );
};
