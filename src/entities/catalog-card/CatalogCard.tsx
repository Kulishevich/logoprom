import React from "react";
import s from "./CatalogCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const CatalogCard = () => {
  return (
    <Link href={"/catalog/1"} className={s.container}>
      <p className="h4">Контрольно-измерительные приборы</p>
      <div className={s.imagesContainer}>
        {new Array(4).fill("").map((_, index) => (
          <div key={index}>
            <Image src={"/catalog-card.png"} fill alt="catalog-card" />
          </div>
        ))}
      </div>
    </Link>
  );
};
