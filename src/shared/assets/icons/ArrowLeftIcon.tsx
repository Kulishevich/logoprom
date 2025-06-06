import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="25"
    height="16"
    ref={ref}
    {...props}
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9L24 7ZM0.292892 8.7071C-0.0976315 8.31658 -0.0976314 7.68342 0.292893 7.29289L6.65686 0.928931C7.04738 0.538406 7.68054 0.538406 8.07107 0.928931C8.46159 1.31946 8.46159 1.95262 8.07107 2.34314L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM24 9L1 9L1 7L24 7L24 9Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftIcon);
const Memo = memo(ForwardRef);

export default Memo;
