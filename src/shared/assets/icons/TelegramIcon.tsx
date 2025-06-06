import { Ref, SVGProps, forwardRef, memo } from "react";

const TelegramIcon = (
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
      d="M14 26.25C20.7655 26.25 26.25 20.7655 26.25 14C26.25 7.23451 20.7655 1.75 14 1.75C7.23451 1.75 1.75 7.23451 1.75 14C1.75 20.7655 7.23451 26.25 14 26.25Z"
      fill="url(#paint0_linear_23_2197)"
    />
    <path
      d="M20.1133 8.9327C20.2223 8.2279 19.5522 7.67161 18.9255 7.94675L6.44422 13.4267C5.99482 13.624 6.0277 14.3048 6.49378 14.4532L9.06771 15.2729C9.55902 15.4293 10.0909 15.3484 10.5199 15.052L16.3231 11.0428C16.4981 10.9218 16.6889 11.1707 16.5393 11.3248L12.3621 15.6315C11.9569 16.0493 12.0373 16.7573 12.5247 17.0629L17.2016 19.9958C17.7262 20.3247 18.401 19.9943 18.4991 19.3603L20.1133 8.9327Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_23_2197"
        x1="14"
        y1="1.75"
        x2="14"
        y2="26.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#37BBFE" />
        <stop offset="1" stop-color="#007DBB" />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(TelegramIcon);
const Memo = memo(ForwardRef);

export default Memo;
