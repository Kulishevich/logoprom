import React from "react";
import s from "./ProjectInfo.module.scss";
import { UsedProductCard } from "@/entities/used-product-card";

export const ProjectInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.characteristics}>
        <div>
          <p className="body_2">Компания</p>
          <p className="body_2">ООО “Альфа”</p>
        </div>
        <div>
          <p className="body_2">Город</p>
          <p className="body_2">Минск</p>
        </div>
        <div>
          <p className="body_2">Категория</p>
          <p className="body_2">Пищевая промышленность</p>
        </div>
      </div>
      <div className={s.productsUsed}>
        <p className="body_2">Используемые товары</p>
        <div>
          {new Array(4).fill("").map((_, index) => (
            <UsedProductCard />
          ))}
        </div>
      </div>
    </div>
  );
};
