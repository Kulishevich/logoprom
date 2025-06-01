"use client";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ReactNode, useState } from "react";
import s from "./Collapse.module.scss";
import { MiniArrowRight } from "@/shared/assets/icons";
import clsx from "clsx";

export const Collapse = ({
  title,
  children,
  className,
  titleSize = "body_4",
}: {
  title: string;
  children: ReactNode;
  className?: string;
  titleSize?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={clsx(s.rootState, className)}
    >
      <Collapsible.Trigger className={s.trigger}>
        <p className={titleSize}>{title}</p>
        <MiniArrowRight />
      </Collapsible.Trigger>
      <Collapsible.Content className={s.wrapper}>
        <div className={s.content}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
