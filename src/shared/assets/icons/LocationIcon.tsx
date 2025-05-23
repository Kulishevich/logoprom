import { Ref, SVGProps, forwardRef, memo } from "react";

const LocationIcon = (
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
      d="M23.5439 7.07202C19.3786 2.97469 12.6253 2.97469 8.45994 7.07202C4.2946 11.1707 4.2946 17.8147 8.45994 21.912L16.0013 29.332L23.5439 21.912C27.7093 17.8147 27.7093 11.1707 23.5439 7.07202ZM16.0013 17.9987C15.1106 17.9987 14.2746 17.652 13.6439 17.0227C12.3439 15.7227 12.3439 13.608 13.6439 12.308C14.2733 11.6787 15.1106 11.332 16.0013 11.332C16.8919 11.332 17.7293 11.6787 18.3586 12.308C19.6586 13.608 19.6586 15.724 18.3586 17.0227C17.7293 17.652 16.8919 17.9987 16.0013 17.9987Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(LocationIcon);
const Memo = memo(ForwardRef);

export default Memo;
