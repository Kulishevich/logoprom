"use client";
import React, { useState } from "react";
import s from "./ProductImages.module.scss";
import Image from "next/image";
import clsx from "clsx";

const images = [
  "/product-image.png",
  "/product-image.png",
  "/product-image.png",
  "/product-image.png",
];

export const ProductImages = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={s.contaner}>
      <div className={s.imagesContainer}>
        {images.map((image, index) => (
          <button
            className={clsx(s.smallImage, index === activeImage && s.active)}
            key={index}
            onClick={() => setActiveImage(index)}
          >
            <Image src={image} fill alt="product-image" />
          </button>
        ))}
      </div>
      <div className={s.bigImage}>
        <Image src={images[activeImage]} fill alt="product-image" />
        <div className={s.tagsContainer}>
          <span className="body_5">Хит</span>
        </div>
      </div>
    </div>
  );
};
