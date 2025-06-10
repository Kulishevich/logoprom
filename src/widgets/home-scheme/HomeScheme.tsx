"use client";
import React from "react";
import s from "./HomeScheme.module.scss";
import {
  CommutatorIcon,
  ControlledIcon,
  DavlenieIcon,
  EnergieBlockIcon,
  LevelIcon,
  LinesSchemeIcon,
  ModuleInputOutputIcon,
  PanelOperatorIcon,
  PCHVIcon,
  PRIcon,
  ProgrammingEnvironmentIcon,
  SCADASystemIcon,
  SensorControlledIcon,
  ServiceOWENCloudIcon,
  TeperaturaIcon,
  TRMIcon,
  VlajnostIcon,
} from "@/shared/assets/icons";
import clsx from "clsx";

const categories = [
  {
    title: "Среда программирования",
    icon: <ProgrammingEnvironmentIcon />,
  },
  {
    title: "SCADA-система",
    icon: <SCADASystemIcon />,
  },
  {
    title: "Облачный сервис OWENCloud",
    icon: <ServiceOWENCloudIcon />,
  },
  {
    title: "ПР",
    icon: <PRIcon />,
  },
  {
    title: "ТРМ",
    icon: <TRMIcon />,
  },
];

export const HomeScheme = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Все уровни автоматизации от одного производителя</h2>
      <div className={clsx(s.content, "desktop-only")}>
        <LinesSchemeIcon className={s.background} />
        <p className={clsx("body_4", s.ethernetText)}>Ethernet</p>
        <p className={clsx("body_4", s.rsText)}>RS-485</p>
        <div className={s.firstBlock}>
          <div>
            <ProgrammingEnvironmentIcon />
            <p className="body_5">Среда программирования</p>
          </div>
          <div>
            <SCADASystemIcon />
            <p className="body_5">SCADA-система</p>
          </div>
          <div>
            <ServiceOWENCloudIcon />
            <p className="body_5">Облачный сервис OWENCloud</p>
          </div>
        </div>
        <div className={s.secondBlock}>
          <div>
            <PRIcon />
            <p className="body_5">ПК</p>
          </div>
          <div>
            <TRMIcon />
            <p className="body_5">ТРМ</p>
          </div>
          <div>
            <PCHVIcon />
            <p className="body_5">ПЧВ</p>
          </div>
        </div>
        <div className={s.thirdBlock}>
          <p className="body_5">Контроллер</p>
          <ControlledIcon />
          <CommutatorIcon />
          <p className="body_5">Коммутатор</p>
        </div>
        <div className={s.fourthBlock}>
          <div>
            <PanelOperatorIcon />
            <p className="body_5">Панель оператора</p>
          </div>
          <div>
            <SensorControlledIcon />
            <p className="body_5">Сенсорный контроллер</p>
          </div>
        </div>
        <div className={s.fifthBlock}>
          <div className={s.elem}>
            <div>
              <ModuleInputOutputIcon />
              <ModuleInputOutputIcon />
              <ModuleInputOutputIcon />
              <ModuleInputOutputIcon />
            </div>
            <p className="body_5">Модули ввода-вывода</p>
          </div>
          <div className={s.elem}>
            <EnergieBlockIcon />
            <p className="body_5">Блоки питания</p>
          </div>
        </div>
        <div className={s.sixBlock}>
          <div>
            <DavlenieIcon />
            <p className="body_6">Давление</p>
          </div>
          <div>
            <TeperaturaIcon />
            <p className="body_6">Температура</p>
          </div>
          <div>
            <LevelIcon />
            <p className="body_6">Уровень</p>
          </div>
          <div>
            <VlajnostIcon />
            <p className="body_6">Влажность</p>
          </div>
        </div>
      </div>

      <div className={clsx(s.mobileContent, "mobile-only")}>
        {categories.map((category, index) => (
          <div key={index}>
            {category.icon}
            <p className="h3">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
