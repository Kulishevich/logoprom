import React from "react";
import s from "./CategoryCards.module.scss";
import Image from "next/image";

export const CategoryCards = () => {
  return (
    <div className={s.container}>
      {new Array(4).fill("").map((_, index) => (
        <div className={s.card} key={index}>
          <div className={s.imageContainer}>
            <Image src="/subcategory-image.png" fill alt="subcategory" />
          </div>
          <div className={s.content}>
            <h3 className="h3">MTP</h3>
            <ul className="body_6">
              <li>Push-in клеммы</li>
              <li>Высокая скорость монтажа</li>
              <li>Диапазон сечений 1,5 – 16 мм²</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
