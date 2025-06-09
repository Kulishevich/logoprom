"use client";
import {
  ArrowToTopLeftIcon,
  CloseIcon,
  LocationIcon,
  MenuIcon,
  MTSLogoIcon,
} from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";
import s from "./HeaderBurgerMenu.module.scss";
import { navigation } from "@/shared/config/constants/navigation";
import Link from "next/link";
import { FeedbackPopup } from "../feedback-popup";
import { DefaultSelect } from "@/shared/ui/default-select";

const phones = [
  {
    id: 1,
    value: "+375 (29) 871–95–68",
  },
  {
    id: 2,
    value: "+375 (29) 123-23-23",
  },
];

export const HeaderBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(phones[0]);

  return (
    <>
      <Button variant="mobile_nav" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
      {isOpen && (
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.navigation}>
              <Link className="h4" href={navigation[0].path}>
                {navigation[0].title}
              </Link>
              {navigation.slice(1, 7).map((nav, index) => (
                <Link className="h4" href={nav.path} key={index}>
                  {nav.title}
                </Link>
              ))}
            </div>
            <div className={s.contacts}>
              <div>
                <LocationIcon />
                <p className="body_3">
                  220037, г. Минск, ул. Багратиона, 62–11
                </p>
              </div>
              <div>
                <MTSLogoIcon />
                <p className="body_3">{selectedCountry.value}</p>
                <DefaultSelect
                  selected={selectedCountry}
                  onSelect={setSelectedCountry}
                  options={phones}
                  className={s.selectTrigger}
                />
              </div>
            </div>
            <FeedbackPopup isOpen={isOpenPopup} setIsOpen={setIsOpenPopup}>
              <Button>
                <ArrowToTopLeftIcon />
                Обратный звонок
              </Button>
            </FeedbackPopup>
          </div>
        </div>
      )}
    </>
  );
};
