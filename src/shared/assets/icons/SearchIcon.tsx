import { Ref, SVGProps, forwardRef, memo } from "react";

const SearchIcon = (
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
      d="M4.66732 12.834C4.66732 8.32366 8.32366 4.66732 12.834 4.66732C17.3443 4.66732 21.0006 8.32366 21.0006 12.834C21.0006 17.3443 17.3443 21.0006 12.834 21.0006C8.32366 21.0006 4.66732 17.3443 4.66732 12.834ZM12.834 2.33398C7.035 2.33398 2.33398 7.035 2.33398 12.834C2.33398 18.633 7.035 23.334 12.834 23.334C15.3132 23.334 17.5917 22.4747 19.388 21.0379L23.6757 25.3256C24.1313 25.7812 24.87 25.7812 25.3256 25.3256C25.7812 24.87 25.7812 24.1313 25.3256 23.6757L21.0379 19.388C22.4747 17.5917 23.334 15.3132 23.334 12.834C23.334 7.035 18.633 2.33398 12.834 2.33398Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SearchIcon);
const Memo = memo(ForwardRef);

export default Memo;
