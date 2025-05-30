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
  variant = "navigation",
}: {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "filter" | "navigation";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={clsx(s.rootState, className)}
    >
      <Collapsible.Trigger className={s.trigger}>
        <p className={variant === "filter" ? "body_4" : "body_3"}>{title}</p>
        <MiniArrowRight />
      </Collapsible.Trigger>
      <Collapsible.Content className={s.wrapper}>
        <div className={s.content}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
