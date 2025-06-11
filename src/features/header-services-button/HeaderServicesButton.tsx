"use client";
import { paths } from "@/shared/config/constants/paths";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import s from "./HeaderServicesButton.module.scss";
import { MiniArrowDown } from "@/shared/assets/icons";

export const HeaderServicesButton = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenCatalog = () => {
    setIsOpenNavigation(true);
  };

  const handleCloseCatalog = () => {
    setIsOpenNavigation(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("mouseenter", handleOpenCatalog);
    container.addEventListener("mouseleave", handleCloseCatalog);

    return () => {
      container.removeEventListener("mouseenter", handleOpenCatalog);
      container.removeEventListener("mouseleave", handleCloseCatalog);
    };
  }, []);

  return (
    <div className={s.container} ref={containerRef}>
      <Link href={paths.services} className="header">
        Услуги <MiniArrowDown />
      </Link>
      {isOpenNavigation && (
        <div className={s.content}>
          <Link className="body_3" href={`${paths.services}/1`}>
            Услуги
          </Link>
        </div>
      )}
    </div>
  );
};
