import { Ref, SVGProps, forwardRef, memo } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="42"
    height="42"
    ref={ref}
    {...props}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10.5H35M7 21H35M7 31.5H35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(MenuIcon);
const Memo = memo(ForwardRef);

export default Memo;
