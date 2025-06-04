import React from "react";
import s from "./OurAdvantages.module.scss";

const advantages = [
  {
    id: "1",
    title: "Преимущество 1",
    description:
      "28 лет на белорусском рынке в области контрольно-измерительных приборов и автоматизации.",
  },
  {
    id: "2",
    title: "Преимущество 2",
    description:
      "60+ тысяч сделок на белорусском рынке в области контрольно-измерительных приборов и автоматизации.",
  },
  {
    id: "3",
    title: "Преимущество 3",
    description:
      "600+ тысяч единиц оборудования реализовано белорусским предприятиям и компаниям.",
  },
  {
    id: "4",
    title: "Преимущество 4",
    description:
      "600+ тысяч единиц оборудования реализовано белорусским предприятиям и компаниям.",
  },
];

export const OurAdvantages = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Наши преимущества</h2>
      <div className={s.cards}>
        {advantages.map((advantage) => (
          <div key={advantage.id}>
            <h4 className="h4">{advantage.title}</h4>
            <p className="body_5">
              28 лет на белорусском рынке в области контрольно-измерительных
              приборов и автоматизации.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
