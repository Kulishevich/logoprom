import React from "react";
import s from "./ProjectsList.module.scss";
import { ProjectCard } from "@/entities/project-card";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";
import { Button } from "@/shared/ui/button";

const nav = [
  "Вентиляция и кондиционирование ЖКХ",
  "Пищевая промышленность",
  "Деревообрабатывающая промышленность",
  "Сельское хозяйство",
  "Транспорт",
];

export const ProjectsList = () => {
  return (
    <div className={s.continer}>
      <div className={s.navigation}>
        {nav.map((elem, index) => (
          <Button key={index} variant={"secondary"}>
            {elem}
          </Button>
        ))}
      </div>
      <div className={s.proectsList}>
        {new Array(9).fill("").map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
