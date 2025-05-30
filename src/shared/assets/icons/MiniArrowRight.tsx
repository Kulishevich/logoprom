import { Ref, SVGProps, forwardRef, memo } from "react";

const MiniArrowRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="8"
    height="10"
    ref={ref}
    {...props}
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 5.8727C8.16667 5.48483 8.16667 4.51517 7.5 4.1273L1.5 0.63651C0.833334 0.248644 0 0.733477 0 1.50921L0 8.49079C0 9.26652 0.833333 9.75136 1.5 9.36349L7.5 5.8727Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MiniArrowRight);
const Memo = memo(ForwardRef);

export default Memo;
