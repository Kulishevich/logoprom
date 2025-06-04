import React from "react";
import s from "./GalerySection.module.scss";
import { Slider } from "@/shared/ui/slider";
import Image from "next/image";

export const GalerySection = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className="h2">Галерея</h2>
        <p className="body_2">
          Убедитесь в качестве наших решений — изучите примеры реализованных
          проектов в разделе фотогалереи.
        </p>
      </div>
      <Slider itemWidth={330}>
        {new Array(6).fill("").map((_, index) => (
          <div className={s.imageContainer} key={index}>
            <Image src={"/galery-image.jpg"} fill alt="galery-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
