"use client";
import React, { useState } from "react";
import s from "./CustomerAssistanceSection.module.scss";
import { Button } from "@/shared/ui/button";
import { DeliverySection } from "../delivery-section";
import { PaymentSection } from "../payment-section";

export const CustomerAssistanceSection = () => {
  const content = [
    {
      id: 1,
      title: "Доставка",
      content: <DeliverySection />,
    },
    {
      id: 2,
      title: "Оплата",
      content: <PaymentSection />,
    },
  ];

  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        {content.map((elem) => (
          <Button
            key={elem.id}
            variant={elem.id === activeSection ? "primary" : "secondary"}
            onClick={() => setActiveSection(elem.id)}
            className={s.button}
          >
            {elem.title}
          </Button>
        ))}
      </div>
      {content.find((elem) => elem.id === activeSection)?.content}
    </div>
  );
};
