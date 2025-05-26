import { Ref, SVGProps, forwardRef, memo } from "react";

const TelegramMiniIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="200"
    height="194"
    ref={ref}
    {...props}
    viewBox="0 0 200 194"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M186.712 20C192.382 20 196.659 25.0263 194.371 34.3753L166.618 166.568C164.678 175.967 159.058 178.229 151.298 173.856L85.0975 124.447C84.8408 124.261 84.6317 124.016 84.4874 123.732C84.3431 123.448 84.2678 123.133 84.2678 122.814C84.2678 122.494 84.3431 122.18 84.4874 121.896C84.6317 121.611 84.8408 121.366 85.0975 121.18L161.544 51.4146C165.026 48.2983 160.798 46.7904 156.223 49.6051L60.2784 110.776C59.9874 110.967 59.6571 111.09 59.3124 111.133C58.9676 111.177 58.6176 111.14 58.2889 111.027L17.5537 98.0087C8.50141 95.3447 8.50141 89.0618 19.5929 84.5884L182.584 21.0555C183.876 20.4289 185.28 20.07 186.712 20Z"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(TelegramMiniIcon);
const Memo = memo(ForwardRef);

export default Memo;
