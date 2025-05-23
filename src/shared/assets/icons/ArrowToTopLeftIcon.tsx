import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowToTopLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="28"
    height="28"
    ref={ref}
    {...props}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.298 7.54766C16.6397 7.20594 17.1937 7.20594 17.5354 7.54766L23.3687 13.381C23.7104 13.7227 23.7104 14.2766 23.3687 14.6184L17.5354 20.4517C17.1937 20.7934 16.6397 20.7934 16.298 20.4517C15.9563 20.11 15.9563 19.556 16.298 19.2143L20.6376 14.8747H11.0833C10.2512 14.8747 8.98334 15.1316 7.94874 15.8765C6.95882 16.5892 6.125 17.7849 6.125 19.833C6.125 20.3163 5.73323 20.708 5.25 20.708C4.76677 20.708 4.375 20.3163 4.375 19.833C4.375 17.2145 5.48567 15.4935 6.92627 14.4562C8.32219 13.4511 9.97104 13.1247 11.0833 13.1247H20.6376L16.298 8.78502C15.9563 8.44331 15.9563 7.88937 16.298 7.54766Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowToTopLeftIcon);
const Memo = memo(ForwardRef);

export default Memo;
