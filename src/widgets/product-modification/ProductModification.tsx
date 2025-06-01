import React from "react";
import s from "./ProductModification.module.scss";
import Image from "next/image";

export const ProductModification = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Модификации товара</h2>
      <div className={s.tableWrapper}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className="body_3">Отличительный критерий</th>
              <th className="body_3">2ТРМ1.У</th>
              <th className="body_3">ТРМ202</th>
              <th className="body_3">2ТРМ1.У2</th>
            </tr>
          </thead>
          <tbody className="body_5">
            <tr>
              <td>Корпус</td>
              <td>
                <div className={s.imageContainer}>
                  <Image src={"/product-image.png"} fill alt="product-image" />
                </div>
              </td>
              <td>
                <div className={s.imageContainer}>
                  <Image src={"/product-image.png"} fill alt="product-image" />
                </div>
              </td>
              <td>
                <div className={s.imageContainer}>
                  <Image src={"/product-image.png"} fill alt="product-image" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Цифровой индикатор</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
            <tr>
              <td>Кнопки управления</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
            <tr>
              <td>Цифровой индикатор</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
            <tr>
              <td>Цифровой индикатор</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
            <tr>
              <td>Кнопки управления</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
            <tr>
              <td>Цифровой индикатор</td>
              <td>Один</td>
              <td>Два</td>
              <td>Два</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
