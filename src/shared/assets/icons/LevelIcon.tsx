import { Ref, SVGProps, forwardRef, memo } from "react";

const LevelIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="39"
    height="68"
    ref={ref}
    {...props}
    viewBox="0 0 39 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.102 5.67334C17.7471 5.67334 16.4476 6.21533 15.4895 7.18018C14.5314 8.14503 13.9932 9.4537 13.9932 10.8182V23.3838H20.0036V13.4573C20.0036 13.0014 20.1835 12.5641 20.5036 12.2417C20.8237 11.9193 21.2579 11.7382 21.7106 11.7382H37.9988V5.68546L19.102 5.67334Z"
      fill="currentColor"
      stroke="#008F86"
      strokeWidth="0.526819"
    />
    <path
      d="M32.3862 16.4224H35.5957V0.999887H32.3862V16.4224Z"
      fill="currentColor"
      stroke="#008F86"
      strokeWidth="0.526819"
    />
    <path
      d="M19.8476 22.2095H13.08C9.15634 22.2095 5.97559 25.4125 5.97559 29.3638V42.9946C5.97559 46.9459 9.15634 50.1491 13.08 50.1491H19.8476C23.7712 50.1491 26.952 46.9459 26.952 42.9946V29.3638C26.952 25.4125 23.7712 22.2095 19.8476 22.2095Z"
      fill="currentColor"
      stroke="#008F86"
      strokeWidth="0.526819"
    />
    <path
      d="M29.7419 34.4604H3.17577C1.97412 34.4604 1 35.4414 1 36.6515V36.8089C1 38.019 1.97412 39 3.17577 39H29.7419C30.9435 39 31.9177 38.019 31.9177 36.8089V36.6515C31.9177 35.4414 30.9435 34.4604 29.7419 34.4604Z"
      fill="currentColor"
      stroke="#008F86"
      strokeWidth="0.526819"
    />
    <path
      d="M20.0156 50.1367H13.9932V66.9998H20.0156V50.1367Z"
      fill="currentColor"
      stroke="#008F86"
      strokeWidth="0.526819"
    />
  </svg>
);
const ForwardRef = forwardRef(LevelIcon);
const Memo = memo(ForwardRef);

export default Memo;
