import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="26"
    height="16"
    ref={ref}
    {...props}
    viewBox="0 0 26 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 7C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55228 0.947715 9 1.5 9L1.5 7ZM25.2071 8.7071C25.5976 8.31658 25.5976 7.68342 25.2071 7.29289L18.8431 0.928931C18.4526 0.538406 17.8195 0.538406 17.4289 0.928931C17.0384 1.31946 17.0384 1.95262 17.4289 2.34314L23.0858 8L17.4289 13.6569C17.0384 14.0474 17.0384 14.6805 17.4289 15.0711C17.8195 15.4616 18.4526 15.4616 18.8431 15.0711L25.2071 8.7071ZM1.5 8L1.5 9L24.5 9L24.5 8L24.5 7L1.5 7L1.5 8Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRightIcon);
const Memo = memo(ForwardRef);

export default Memo;
