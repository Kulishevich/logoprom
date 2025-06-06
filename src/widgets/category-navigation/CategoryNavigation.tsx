import React from "react";
import s from "./CategoryNavigation.module.scss";
import { Select } from "@/shared/ui/select";

const categories = [
  {
    title: "Контрольно-измерительные приборы",
    subcategories: [
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для пищевых производств",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
    ],
  },
  {
    title: "Программируемые устройства",
    subcategories: [
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для пищевых производств",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
    ],
  },
  {
    title: "Силовые и коммутационные устройства",
    subcategories: [
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для пищевых производств",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
    ],
  },
  {
    title: "Датчики",
    subcategories: [
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для пищевых производств",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
    ],
  },
  {
    title: "ПО, устройства связи",
    subcategories: [
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Измерители-регуляторы",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для ГВС, отопления, вентиляции и котельных",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
      {
        title: "Для пищевых производств",
        products: [
          {
            title: "Измерители-индикаторы",
          },
          {
            title: "Регуляторы с двухпозиционным управлением",
          },
          {
            title: "ПИД-регуляторы",
          },
          {
            title: "Регуляторы с пошаговыми программами технолога",
          },
        ],
      },
    ],
  },
];

export const CategoryNavigation = () => {
  return (
    <div className={s.container}>
      {categories.map((category, index) => {
        const options = category.subcategories.map((subcategory, index) => ({
          value: String(index),
          option: subcategory.title,
        }));

        return <Select options={options} defaultValue={"0"} key={index} />;
      })}
    </div>
  );
};
