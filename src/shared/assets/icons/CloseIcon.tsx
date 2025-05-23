import { Ref, SVGProps, forwardRef, memo } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    ref={ref}
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.7998 17.0562L17.1998 2.65625"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.7998 2.65625L17.1998 17.0562"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CloseIcon);
const Memo = memo(ForwardRef);

export default Memo;
