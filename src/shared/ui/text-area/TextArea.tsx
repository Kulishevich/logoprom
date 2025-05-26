import { ComponentPropsWithoutRef, forwardRef } from "react";

import { clsx } from "clsx";

import s from "./TextArea.module.scss";

export type TextAreaProps = {
  errorMessage?: string;
  label?: string;
} & ComponentPropsWithoutRef<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMessage, label, ...rest }, ref) => {
    const showError = !!errorMessage;

    return (
      <div className={s.container}>
        {label && <label className={(s.label, "body_2")}>{label}</label>}
        <textarea
          className={clsx(
            s.textarea,
            showError && s.error,
            className,
            "fields"
          )}
          ref={ref}
          {...rest}
        />

        {showError && (
          <span className={clsx("body_6", s.errorMessage)}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
