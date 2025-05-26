import { clsx } from "clsx";
import { ToastT, Toaster, toast } from "sonner";

import styles from "./Toast.module.scss";
import {
  CheckCircleIcon,
  CloseCircleOutlinedIcon,
} from "@/shared/assets/icons";

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = "top-center";

type ToastType = "error" | "info" | "success" | "warning";
type ToastOptions = {
  message?: string;
  description?: string;
  title: string;
  variant?: ToastType;
} & Omit<ToastT, "id">;

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  description,
  message,
  title,
  position = DEFAULT_POSITION,
  variant = "success",
  ...props
}: ToastOptions) => {
  const typesClass = {
    error: styles.error,
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
  }[variant];

  toast.custom(
    () => (
      <div
        onClick={() => toast.dismiss()}
        className={clsx(styles.rootClass, typesClass, className)}
        role="button"
        tabIndex={0}
      >
        <p className={clsx(styles.title, "h5")}>
          {variant === "error" && <CloseCircleOutlinedIcon />}
          {variant === "success" && <CheckCircleIcon />}
          {title}
        </p>
        {!!description && (
          <p className={clsx(styles.message, "body_5")}>{description}</p>
        )}
        {!!message && (
          <p className={clsx(styles.message, "body_7")}>{message}</p>
        )}
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  );
};

export { Toaster, showToast };
