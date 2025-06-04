import React from "react";
import s from "./ProjectsList.module.scss";
import { ProjectCard } from "@/entities/project-card";
import { TextField } from "@/shared/ui/text-field";
import { PaginationSuspense } from "@/shared/ui/pagination-suspense";

export const ProjectsList = () => {
  return (
    <div className={s.continer}>
      <TextField variant="search_3" />
      <div className={s.proectsList}>
        {new Array(9).fill("").map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
      <PaginationSuspense totalPages={10} />
    </div>
  );
};
