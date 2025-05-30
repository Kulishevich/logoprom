import React from "react";
import s from "./CatalogCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export const CatalogCard = () => {
  return (
    <Link href={"/catalog/1"} className={s.container}>
      <div className={s.imageContainer}>
        <Image src={"/catalog-card.png"} fill alt="catalog-card" />
      </div>
      <p className="body_3">Контрольно-измерительные приборы</p>
    </Link>
  );
};
