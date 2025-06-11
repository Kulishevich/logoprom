"use client";
import { Button } from "@/shared/ui/button";
import React, { useEffect, useRef, useState } from "react";
import s from "./BurgerButton.module.scss";

import { NavigationPopup } from "@/entities/navigation-popup";
import { MenuIcon, MiniArrowDown } from "@/shared/assets/icons";
import Link from "next/link";
import { navigation } from "@/shared/config/constants/navigation";

export const BurgerButton = () => {
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
    <div className={s.burgerMenu} ref={containerRef}>
      <Button
        as={Link}
        href={navigation[3].path}
        variant="catalog"
        textStyle="header"
      >
        <MenuIcon />
        {navigation[3].title}
        <MiniArrowDown />
      </Button>
      {isOpenNavigation && <NavigationPopup />}
    </div>
  );
};
