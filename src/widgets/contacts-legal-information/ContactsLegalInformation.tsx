import React from "react";
import s from "./ContactsLegalInformation.module.scss";

export const ContactsLegalInformation = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Юридическая иформация</h2>
      <div className={s.content}>
        <div className={s.elem}>
          <h4 className="h4">Юридический адрес:</h4>
          <p className={"body_2"}>
            220037, Беларусь, Минская область Минск, ул. Багратиона 62, каб. 11
            Адрес для почтовых уведомлений: Беларусь, Минск, ул. Баргатиона
            62, каб. 11 ООО «Логопром-сервис» УНП 191646651
          </p>
        </div>
        <div className={s.elem}>
          <h4 className="h4">Банковские реквизиты:</h4>
          <p className={"body_2"}>
            Р/с: BY21TECN30121362100130000000 Банк: ОАО «Технобанк», г. Минск,
            ул. Крапоткина 44, код TECNBY22
          </p>
        </div>
      </div>
    </div>
  );
};
