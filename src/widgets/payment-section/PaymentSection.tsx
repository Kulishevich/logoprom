import React from "react";
import s from "./PaymentSection.module.scss";
import { MoneyCheckIcon } from "@/shared/assets/icons";

const paymentCards = [
  {
    id: 1,
    title: "Безналичная оплата",
    description: "Текст текст текст",
    icon: <MoneyCheckIcon />,
  },
  {
    id: 2,
    title: "Через ЕРИП",
    description: "Текст текст текст",
    icon: <MoneyCheckIcon />,
  },
];

export const PaymentSection = () => {
  return (
    <div className={s.container}>
      <p className="body_4">
        В момент доставки вам будут переданы все необходимые документы: товарный
        чек и гарантийный талон. Если покупатель-организация, вам будут переданы
        счёт-фактура, а также накладная, в которой необходимо поставить печать
        вашей организации.
      </p>
      <div className={s.cardsContainer}>
        {paymentCards.map((card) => (
          <div className={s.card} key={card.id}>
            {card.icon}
            <div>
              <p className="body_1">{card.title}</p>
              <p className="body_5">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
