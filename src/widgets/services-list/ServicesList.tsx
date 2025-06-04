import React from "react";
import s from "./ServicesList.module.scss";
import Image from "next/image";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";
import Link from "next/link";
import { paths } from "@/shared/config/constants/paths";

export const ServicesList = () => {
  return (
    <div className={s.container}>
      <div className={s.servicesList}>
        {new Array(6).fill("").map((_, index) => (
          <Link href={`${paths.services}/1`} className={s.card} key={index}>
            <div className={s.imageContainer}>
              <Image src={"/service-image.png"} fill alt="service" />
            </div>
            <h3 className="h3">Услуга</h3>
          </Link>
        ))}
      </div>
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
