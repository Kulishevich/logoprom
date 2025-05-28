import { Ref, SVGProps, forwardRef, memo } from "react";

const QuotesIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="72"
    height="56"
    ref={ref}
    {...props}
    viewBox="0 0 72 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 26.5083C0 7.20467 16.2066 -2.98337 32.679 0.77012V10.1538C20.1919 6.93656 10.3616 14.9797 9.56458 26.5083H28.428V56H0V26.5083ZM72 10.1538C59.5129 6.93656 49.6827 14.9797 48.8856 26.5083H67.7491V56H39.321V26.5083C39.321 7.20467 55.5277 -2.98337 72 0.77012V10.1538Z"
      fill="#008F86"
    />
  </svg>
);
const ForwardRef = forwardRef(QuotesIcon);
const Memo = memo(ForwardRef);

export default Memo;
