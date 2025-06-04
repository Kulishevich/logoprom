import React from "react";
import s from "./ProjectImages.module.scss";
import Image from "next/image";

export const ProjectImages = () => {
  return (
    <div className={s.container}>
      <div className={s.bigImage}>
        <Image src={"/project-background.png"} fill alt="project-image" />
        <span className="body_5">12.04.2025</span>
      </div>
      <div className={s.smallImageContainer}>
        {new Array(4).fill("").map((_, index) => (
          <div className={s.smallImage} key={index}>
            <Image src={"/project-background.png"} fill alt="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};
