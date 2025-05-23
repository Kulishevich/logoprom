import { Ref, SVGProps, forwardRef, memo } from "react";

const MailIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.33203 6.83398L9.9987 11.7507L16.6654 6.83398"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.8333 5.41699H4.16667C3.24619 5.41699 2.5 6.16318 2.5 7.08366V15.417C2.5 16.3375 3.24619 17.0837 4.16667 17.0837H15.8333C16.7538 17.0837 17.5 16.3375 17.5 15.417V7.08366C17.5 6.16318 16.7538 5.41699 15.8333 5.41699Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(MailIcon);
const Memo = memo(ForwardRef);

export default Memo;
