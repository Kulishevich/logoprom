import { Ref, SVGProps, forwardRef, memo } from "react";

const ClockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    ref={ref}
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 28C22.6275 28 28 22.6275 28 16C28 9.37259 22.6275 4 16 4C9.37259 4 4 9.37259 4 16C4 22.6275 9.37259 28 16 28ZM17.3333 8.66667C17.3333 7.93029 16.7364 7.33333 16 7.33333C15.2636 7.33333 14.6667 7.93029 14.6667 8.66667V15.6667C14.6667 16.5872 15.4128 17.3333 16.3333 17.3333H20.6667C21.4031 17.3333 22 16.7364 22 16C22 15.2636 21.4031 14.6667 20.6667 14.6667H17.3333V8.66667Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ClockIcon);
const Memo = memo(ForwardRef);

export default Memo;
