import Image from "next/image";
import React from "react";
import s from "./Logo.module.scss";
import clsx from "clsx";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.logoContainer, className)}>
      <div className={s.image}>
        <Image src={"/logo.png"} fill alt="image" />
      </div>
      <div className={s.title}>
        <div className={s.logo}>
          <Image src={"/logo_oven.png"} fill alt="logo" />
        </div>
        <p className="body_3">официальный дилер</p>
      </div>
    </div>
  );
};
