import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";

import clsx from "clsx";

import styles from "./Button.module.scss";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  fullWidth?: boolean;
  variant?:
    | "callback"
    | "catalog"
    | "primary"
    | "secondary"
    | "search"
    | "filter"
    | "link_1"
    | "link_2"
    | "link_3"
    | "cart"
    | "nav_1"
    | "nav_2"
    | "nav_3"
    | "default";
} & ComponentPropsWithoutRef<T>;

export const Button = forwardRef(
  <T extends ElementType = "button">(
    props: ButtonProps<T>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      as: Component = "button",
      className,
      fullWidth,
      type = "button",
      variant = "primary",
      ...rest
    } = props;
    const cn = clsx(
      styles.button,
      styles[variant],
      fullWidth && styles.fullWidth,
      className,
      variant === "catalog" ? "header" : "button"
    );

    return <Component className={cn} ref={ref} type={type} {...rest} />;
  }
);

Button.displayName = "Button";
