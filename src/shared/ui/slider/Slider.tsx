"use client";
import React, { ReactNode, useRef } from "react";
import s from "./Slider.module.scss";
import { Button } from "../button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/assets/icons";
import clsx from "clsx";

type SliderProps = {
  children: ReactNode;
  itemWidth: number;
};

export const Slider = ({ children, itemWidth }: SliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = itemWidth;

    if (direction === "right") {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div className={s.container}>
      <Button
        variant="nav_3"
        className={clsx(s.iconLeft, "desktop-only")}
        onClick={() => scroll("left")}
      >
        <ArrowLeftIcon />
      </Button>

      <div className={s.itemsContainer} ref={scrollRef}>
        {children}
      </div>
      <Button
        variant="nav_3"
        className={clsx(s.iconRight, "desktop-only")}
        onClick={() => scroll("right")}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
