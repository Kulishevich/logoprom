import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { TextField, TextFieldProps, Variant } from "../text-field";
import { Dispatch, SetStateAction } from "react";
import { Option } from "../default-select";

type BaseControlledProps<T extends FieldValues> = Omit<
  TextFieldProps,
  "disabled" | "onBlur" | "onChange" | "ref" | "value"
> &
  UseControllerProps<T>;

type ControlledPhoneProps<T extends FieldValues> = BaseControlledProps<T> & {
  variant: "phone";
  selected: Option;
  onSelect: Dispatch<SetStateAction<Option>>;
  options: Option[];
};

type ControlledNonPhoneProps<T extends FieldValues> = BaseControlledProps<T> & {
  variant?: Exclude<Variant, "phone">;
  selected?: never;
  onSelect?: never;
  options?: never;
};

type ControlledTextFieldProps<T extends FieldValues> =
  | ControlledPhoneProps<T>
  | ControlledNonPhoneProps<T>;

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  errorMessage,
  name,
  rules,
  shouldUnregister,
  type,
  ...props
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (type === "tel") {
      const cleaned = inputValue.replace(/[^\d\s()+-]/g, "");
      onChange(cleaned);
    } else {
      onChange(inputValue);
    }
  };

  return (
    <TextField
      {...props}
      errorMessage={errorMessage ?? error?.message}
      onBlur={onBlur}
      onChange={handleChange}
      ref={ref}
      value={value ?? ""}
      {...field}
    />
  );
};
