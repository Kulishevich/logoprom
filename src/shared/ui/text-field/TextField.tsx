"use client";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useRef,
} from "react";
import clsx from "clsx";

import s from "./TextField.module.scss";
import { SearchIcon } from "@/shared/assets/icons";
import { Button } from "../button";

export type TextFieldProps = {
  errorMessage?: ReactNode | string;
  isRequired?: boolean;
  label?: string;
  variant?:
    | "search_1"
    | "search_2"
    | "search_3"
    | "default"
    | "phone"
    | "counter";
} & ComponentPropsWithoutRef<"input">;

type TextFieldRef = ElementRef<"input">;

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      errorMessage,
      isRequired = false,
      label,
      onChange,
      placeholder,
      value,
      variant = "default",
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const id = useId();

    const is_counter = variant === "counter";

    const is_search =
      variant === "search_1" ||
      variant === "search_2" ||
      variant === "search_3";

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (inputRef.current) {
        inputRef.current.value = e.target.value;
      }
    };

    useEffect(() => {
      if (inputRef) {
        if (typeof value === "string" && inputRef.current) {
          inputRef.current.value = value;
        }
      }
    }, [value]);

    return (
      <div className={clsx(s.container, s[variant])}>
        {label && (
          <label
            className={clsx(
              disabled && s.disabled,
              s.label,
              "body_2",
              isRequired && "required"
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div
          className={clsx(
            s.inputContainer,
            variant === "counter" ? "body_4" : "fields"
          )}
        >
          <input
            className={clsx(
              s.input,
              s[variant],
              errorMessage && s.error,
              disabled && s.disabled,
              className
            )}
            disabled={disabled}
            id={id}
            onChange={inputChangeHandler}
            placeholder={placeholder}
            ref={ref}
            value={value}
            {...rest}
          />
          {is_counter && <Button className={s.decrement}>-</Button>}
          {is_counter && <Button className={s.increment}>+</Button>}
          {!!is_search && (
            <SearchIcon
              className={clsx(s.iconSearch, disabled && s.disabled, s[variant])}
            />
          )}
        </div>
        {errorMessage && (
          <span className={clsx("body_6", s.errorMessage)}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
