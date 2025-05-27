import { Ref, SVGProps, forwardRef, memo } from "react";

const NotFoundIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="766"
    height="337"
    ref={ref}
    {...props}
    viewBox="0 0 766 337"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M235.459 236.941H189.486V330.596H156.706V236.941H0V197.717L144.313 6.80405H189.486V204.121H235.459V236.941ZM156.706 204.121V32.4192L26.3842 204.121H156.706Z"
      fill="white"
    />
    <path
      d="M379.454 0C459.406 0 501.78 63.2375 501.78 168.5C501.78 275.764 459.406 337 379.454 337C300.301 337 257.127 275.764 257.127 168.5C257.127 64.8385 299.901 0 379.454 0ZM379.454 304.181C430.623 304.181 469 270.16 469 168.5C469 68.4406 430.623 32.8195 379.454 32.8195C329.484 32.8195 289.907 69.2411 289.907 168.5C289.907 270.561 329.484 304.181 379.454 304.181Z"
      fill="white"
    />
    <path
      d="M766 236.941H720.028V330.596H687.247V236.941H530.541V197.717L674.855 6.80405H720.028V204.121H766V236.941ZM687.247 204.121V32.4192L556.925 204.121H687.247Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(NotFoundIcon);
const Memo = memo(ForwardRef);

export default Memo;
