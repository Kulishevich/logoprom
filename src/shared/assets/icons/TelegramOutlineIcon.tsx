import { Ref, SVGProps, forwardRef, memo } from "react";

const TelegramOutlineIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    ref={ref}
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_137_9985)">
      <path
        d="M7.56171 11.5908L15.289 18.3908C15.3784 18.4695 15.4867 18.5236 15.6033 18.5478C15.7199 18.572 15.8408 18.5655 15.9542 18.529C16.0675 18.4924 16.1694 18.4271 16.2499 18.3393C16.3304 18.2515 16.3867 18.1443 16.4133 18.0282L19.6457 3.9231C19.6737 3.80115 19.6678 3.67388 19.6288 3.55501C19.5897 3.43614 19.519 3.33018 19.4242 3.24855C19.3294 3.16691 19.2141 3.11269 19.0907 3.09174C18.9674 3.07079 18.8407 3.08389 18.7242 3.12964L2.86385 9.36049C2.72562 9.4148 2.6087 9.5124 2.53057 9.6387C2.45244 9.76499 2.4173 9.9132 2.43042 10.0611C2.44355 10.2091 2.50422 10.3488 2.60336 10.4593C2.7025 10.5699 2.83478 10.6454 2.9804 10.6745L7.56171 11.5908Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5625 11.5905L19.2596 3.14258"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4217 14.9869L8.73614 17.6725C8.63999 17.7686 8.51749 17.8341 8.38413 17.8606C8.25076 17.8872 8.11253 17.8735 7.98691 17.8215C7.86128 17.7695 7.75391 17.6814 7.67837 17.5683C7.60282 17.4552 7.5625 17.3223 7.5625 17.1863V11.5908"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_137_9985">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(TelegramOutlineIcon);
const Memo = memo(ForwardRef);

export default Memo;
