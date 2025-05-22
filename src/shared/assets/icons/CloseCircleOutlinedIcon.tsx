import { Ref, SVGProps, forwardRef, memo } from "react";

const CloseCircleOutlinedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
      stroke="#191F1F"
    />
    <path
      d="M19.3337 12.667L12.667 19.3337M12.667 12.667L19.3337 19.3337"
      stroke="#008F86"
      stroke-linecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(CloseCircleOutlinedIcon);
const Memo = memo(ForwardRef);

export default Memo;
