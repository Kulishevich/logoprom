"use client";
import Image from "next/image";
import React from "react";
import s from "./Logo.module.scss";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const Logo = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  if (pathname === "/") {
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
  }

  return (
    <Link href={paths.home} className={clsx(s.logoContainer, className)}>
      <div className={s.image}>
        <Image src={"/logo.png"} fill alt="image" />
      </div>
      <div className={s.title}>
        <div className={s.logo}>
          <Image src={"/logo_oven.png"} fill alt="logo" />
        </div>
        <p className="body_3">официальный дилер</p>
      </div>
    </Link>
  );
};
