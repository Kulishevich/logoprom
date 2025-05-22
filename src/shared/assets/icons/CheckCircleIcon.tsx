import { Ref, SVGProps, forwardRef, memo } from "react";

const CheckCircleIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="48"
    height="48"
    ref={ref}
    {...props}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M44 24C44 35.0456 35.0456 44 24 44C12.9543 44 4 35.0456 4 24C4 12.9543 12.9543 4 24 4C35.0456 4 44 12.9543 44 24ZM32.0606 17.9393C32.6464 18.5251 32.6464 19.4749 32.0606 20.0606L22.0606 30.0606C21.4748 30.6464 20.5252 30.6464 19.9393 30.0606L15.9393 26.0606C15.3536 25.4748 15.3536 24.5252 15.9393 23.9394C16.5251 23.3536 17.4749 23.3536 18.0607 23.9394L21 26.8786L25.4696 22.409L29.9394 17.9393C30.5252 17.3536 31.4748 17.3536 32.0606 17.9393Z"
      fill="#008F0E"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckCircleIcon);
const Memo = memo(ForwardRef);

export default Memo;
