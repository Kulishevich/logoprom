import React from "react";
import s from "./OrderSection.module.scss";
import { OrderForm } from "@/features/order-form";

export const OrderSection = () => {
  return (
    <div className={s.container}>
      <OrderForm />
      {/* <OrderPrice/> */}
    </div>
  );
};
