"use client";

import * as Popover from "@radix-ui/react-popover";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import s from "./CountrySelect.module.scss"; // Создай CSS-модуль
import clsx from "clsx";
import { MiniArrowDown } from "@/shared/assets/icons";
import { countries } from "./countries";

export type Country = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  icon: ReactNode;
};

type Props = {
  onSelect: Dispatch<SetStateAction<Country>>;
  selectedCountry: Country;
  className?: string;
};

export const CountrySelect = ({
  onSelect,
  selectedCountry,
  className,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={clsx(s.trigger, className)}>
          {selectedCountry.icon}
          <MiniArrowDown className={s.arrow} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={s.content} sideOffset={5}>
          <div className={s.list}>
            {countries.map((country) => (
              <button
                key={country.code}
                className={clsx(s.item, "body_5")}
                onClick={() => {
                  onSelect(country);
                  setOpen(false);
                }}
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
                <span>{country.dialCode}</span>
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
