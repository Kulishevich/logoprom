import React from "react";
import s from "./BlockImage.module.scss";
import Image from "next/image";

export const BlockImage = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <div className={s.container}>
      <Image src={image} fill alt="image" />
      <div className={s.content}>
        <h1 className="h1">{title}</h1>
      </div>
    </div>
  );
};
