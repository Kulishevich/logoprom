import React from "react";
import s from "./DeliverySection.module.scss";
import { LocationIcon } from "@/shared/assets/icons";
import { YandexMap } from "@/shared/ui/yandex-map/YandexMap";

const deliveryCards = [
  {
    id: 1,
    title: "По Республике Беларусь",
    description:
      "Оговаривается индивидуально (при заказе на сумму менее 400 руб)",
    icon: <LocationIcon />,
  },
  {
    id: 2,
    title: "По Республике Беларусь",
    description: "Бесплатно (при заказе на сумму от 400 руб)",
    icon: <LocationIcon />,
  },
  {
    id: 3,
    title: "по Минску",
    description: "10 ₽ (при заказе на сумму менее 400 руб)",
    icon: <LocationIcon />,
  },
];

export const DeliverySection = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className="body_4">
          В нашей компании мы гарантируем безопасную и своевременную доставку
          оборудования для автоматизации вашего производства. Независимо
          от объёма заказа — будь то датчики IoT, промышленные контроллеры
          или крупногабаритные системы — мы подберём оптимальный способ
          транспортировки с учётом ваших требований.
        </p>
        <div className={s.cardsContainer}>
          {deliveryCards.map((card) => (
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
      <div className={s.map}>
        <h3 className="h3">Самовывоз</h3>
        <p className="body_4">
          Вы можете самостоятельно забрать свой заказ, по адресу: 220037,
          Республика Беларусь, г. Минск, ул. Багратиона 62, каб 11.
        </p>
        <YandexMap />
      </div>
    </div>
  );
};
