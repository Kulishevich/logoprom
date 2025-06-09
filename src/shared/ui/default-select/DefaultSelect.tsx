"use client";

import * as Popover from "@radix-ui/react-popover";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import s from "./DefaultSelect.module.scss";
import clsx from "clsx";
import { MiniArrowDown } from "@/shared/assets/icons";

export type Option = {
  id: number;
  value: string;
  icon?: ReactNode;
};

type Props = {
  onSelect: Dispatch<SetStateAction<Option>>;
  selected: Option;
  className?: string;
  options: Option[];
};

export const DefaultSelect = ({
  onSelect,
  selected,
  className,
  options,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={clsx(s.trigger, className)}>
          {selected.icon}
          <MiniArrowDown className={s.arrow} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={s.content} sideOffset={5}>
          <div className={s.list}>
            {options.map((option) => (
              <button
                key={option.id}
                className={clsx(s.item, "body_5")}
                onClick={() => {
                  onSelect(option);
                  setOpen(false);
                }}
              >
                <span>{option.value}</span>
                {!!option.icon && option.icon}
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
