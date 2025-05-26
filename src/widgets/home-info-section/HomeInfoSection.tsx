import React from "react";
import s from "./HomeInfoSection.module.scss";
import { Button } from "@/shared/ui/button";
import { ArrowToTopLeftIcon } from "@/shared/assets/icons";
import Image from "next/image";

const cards = [
  {
    title: "28",
    description: "лет на рынке",
  },
  {
    title: "60+",
    description: "тысяч сделок",
  },
  {
    title: "600+",
    description: "тысяч единиц оборудования",
  },
];

export const HomeInfoSection = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className="body_1">
          «Логопром-Сервис» поставляет КИП и системы автоматизации для разных
          отраслей.
        </p>
        <Button>
          <ArrowToTopLeftIcon /> О компании
        </Button>
      </div>
      <div className={s.cardsContainer}>
        {cards.map((card) => (
          <div className={s.card}>
            <h2 className="h2">{card.title}</h2>
            <p className="body_5">{card.description}</p>
          </div>
        ))}

        <Image src={"/home-info.png"} fill alt="info" />
      </div>
    </div>
  );
};
