import { Ref, SVGProps, forwardRef, memo } from "react";

const PhoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.67484 6.05587C2.54032 4.15014 4.15407 2.66699 6.06061 2.66699H10.1417C11.1204 2.66699 12.0031 3.25667 12.3795 4.16193L14.0861 8.26627C14.5018 9.26609 14.2067 10.4209 13.3627 11.0976L12.2989 11.9504C11.8242 12.331 11.6628 12.9872 11.9442 13.5267C13.3909 16.2991 15.5289 18.6521 18.1289 20.3559C18.6777 20.7155 19.4026 20.5725 19.8121 20.0597L20.9206 18.671C21.5958 17.8253 22.7482 17.5297 23.7459 17.9462L27.8418 19.6563C28.7453 20.0335 29.3337 20.9181 29.3337 21.8987V26.0003C29.3337 27.9109 27.7989 29.461 25.8971 29.3258C13.7365 28.4606 3.53695 18.2693 2.67484 6.05587Z"
      fill="black"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneIcon);
const Memo = memo(ForwardRef);

export default Memo;
