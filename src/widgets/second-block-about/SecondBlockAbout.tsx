import React from "react";
import s from "./SecondBlockAbout.module.scss";
import Image from "next/image";

export const SecondBlockAbout = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">
        В течение 20+ лет компания является лидером в Беларуси
      </h2>
      <div className={s.content}>
        <div>
          <div className={s.imagesContainer}>
            <div>
              <Image
                src={"/second-block-about-image1.png"}
                fill
                alt="about-image"
              />
            </div>
            <div>
              <Image
                src={"/second-block-about-image2.png"}
                fill
                alt="about-image"
              />
            </div>{" "}
            <div>
              <Image
                src={"/second-block-about-image3.png"}
                fill
                alt="about-image"
              />
            </div>
          </div>
          <p className="body_3">
            Мы предлагаем приборы, изготовленные в соответствии с самыми
            жёсткими требованиями стандартов обеспечения качества.
          </p>
        </div>
        <p className="body_4">
          Сегодня компания предлагает не только самый широкий ассортимент
          изделий в отрасли, но и огромный запас знаний и опыт в решении
          проблем, накопленный за время работы на рынке. Комплексный подход
          к решению задачи и квалифицированная помощь, минимальные сроки
          поставки, гарантийное и сервисное обслуживание — наши главные
          преимущества.
        </p>
        <p className="body_4">
          Наши приборы регулярно демонстрируются на международных и региональных
          специализированных выставках, на научных конференциях, семинарах
          и форумах.
        </p>
      </div>
    </div>
  );
};
