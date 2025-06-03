import React from "react";
import s from "./BlockImage.module.scss";
import Image from "next/image";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";

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
        <Breadcrumbs />
        <h1 className="h1">{title}</h1>
      </div>
    </div>
  );
};
