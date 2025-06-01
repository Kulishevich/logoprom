import { Collapse } from "@/shared/ui/collapse";
import React from "react";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { DownloadIcon, FilterSecondIcon } from "@/shared/assets/icons";
import s from "./ProductContent.module.scss";

export const ProductContent = () => {
  return (
    <div className={s.productContent}>
      <Collapse title="Описание" className={s.collapse} titleSize="h4">
        <div className={s.collapseContent}>
          <p className="body_3">Описание</p>
          <p className="body_4">
            2ТРМ1 – промышленный терморегулятор, предназначенный для измерения,
            регистрации или автоматического регулирования температуры, а также
            других физических величин (давление, влажность, уровень, расход и
            т.д.) по одному или двум каналам одновременно. Прибор
            зарегистрирован в Государственном реестре средств измерений и может
            применяться на промышленных объектах, подконтрольных Ростехнадзору.
          </p>
        </div>
      </Collapse>
      <Collapse
        title="Технические характеристики"
        className={s.collapse}
        titleSize="h4"
      >
        <div className={s.collapseContent}>
          <p className="body_3">Контрольно-измерительные приборы Овен</p>
          <div className={s.technicalSpecifications}>
            <div className={s.specificationElem}>
              <p className="body_2">Количество каналов</p>
              <Checkbox label={"1–2 канала"} />
            </div>
            <div className={s.specificationElem}>
              <p className="body_2">Особенности КИП</p>
              <Checkbox label={"Для работы при Т < 0 ⁰С"} />
            </div>
            <div className={s.specificationElem}>
              <p className="body_2">Тип</p>
              <Checkbox label={"ON/OFF-регулятор"} />
            </div>
            <div className={s.specificationElem}>
              <p className="body_2">Тип крепления</p>
              <div className={s.checkboxContainer}>
                <Checkbox label={"С креплением в щит"} />
                <Checkbox label={"С креплением на DIN-рейку"} />
                <Checkbox
                  label={"С креплением на стену (плоскую поверхность)"}
                />
              </div>
            </div>
          </div>
          <Button className={s.filterButton}>
            <FilterSecondIcon /> Найти похожие
          </Button>
        </div>
      </Collapse>
      <Collapse title="Документация" className={s.collapse} titleSize="h4">
        <div className={s.collapseContent}>
          <Button variant="link_3" className={s.downloadButton}>
            <DownloadIcon />
            Руководство по эксплуатации 2ТРМ1-У2
          </Button>
          <Button variant="link_3" className={s.downloadButton}>
            <DownloadIcon />
            Руководство по эксплуатации 2ТРМ1-У2
          </Button>
        </div>
      </Collapse>
      <Collapse title="Доставка" className={s.collapse} titleSize="h4">
        <div className={s.collapseContent}>
          <ul className="body_4">
            <li>
              — по РБ - <strong>БЕСПЛАТНО</strong> (при заказе на сумму от 400
              руб)
            </li>
            <li>
              — по Минску - <strong>10 руб</strong> (при заказе на сумму менее
              400 руб)
            </li>
            <li>
              — по Беларуси - <strong>оговаривается индивидуально</strong>
              (при заказе на сумму менее 400 руб)
            </li>
          </ul>
        </div>
      </Collapse>
      <Collapse title="Варианты оплаты" className={s.collapse} titleSize="h4">
        <div className={s.collapseContent}>
          <ul className="body_4">
            <li>— ЕРИП</li>
            <li>— Безналичный расчет</li>
          </ul>
        </div>
      </Collapse>
      <Collapse title="Наци достижения" className={s.collapse} titleSize="h4">
        <div className={s.collapseContent}>
          <ul className="body_4">
            <li>— 28 лет на рынке</li>
            <li>— Более 60 000 сделок</li>
            <li>— Более чем 600 000 единиц оборудования</li>
            <li>— Лучшие цены</li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};
