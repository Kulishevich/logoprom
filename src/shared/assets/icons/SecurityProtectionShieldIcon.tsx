import { Ref, SVGProps, forwardRef, memo } from "react";

const SecurityProtectionShieldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    ref={ref}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 5.025C16.2 5.025 13.8 3.975 12 2.25C10.2 3.975 7.8 5.025 5.25 5.025C4.2 5.025 3.225 4.8 2.25 4.5C2.25 15 6.375 19.2 12 21.75C17.625 19.2 21.75 15 21.75 4.5C20.775 4.8 19.8 5.025 18.75 5.025Z"
      stroke="#CF2E2F"
      strokeWidth="2"
      stroke-miterlimit="10"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 12L11.25 14.25L15.75 9.75"
      stroke="#CF2E2F"
      strokeWidth="2"
      stroke-miterlimit="10"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SecurityProtectionShieldIcon);
const Memo = memo(ForwardRef);

export default Memo;
