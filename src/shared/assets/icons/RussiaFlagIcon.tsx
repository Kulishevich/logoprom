import { Ref, SVGProps, forwardRef, memo } from "react";

const RussiaFlagIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9 6"
    width="24"
    height="24"
    ref={ref}
    {...props}
  >
    <rect fill="#fff" width="9" height="3" />
    <rect fill="#d52b1e" y="3" width="9" height="3" />
    <rect fill="#0039a6" y="2" width="9" height="2" />
  </svg>
);
const ForwardRef = forwardRef(RussiaFlagIcon);
const Memo = memo(ForwardRef);

export default Memo;
