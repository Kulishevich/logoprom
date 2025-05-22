import { Ref, SVGProps, forwardRef, memo } from "react";

const MTSLogoIcon = (
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
      d="M1.02246 30.8662H30.8534V1.03711H1.02246V30.8662Z"
      fill="#FF0000"
    />
    <path
      d="M15.9377 4.10156C20.1769 4.10156 24.7071 11.6805 24.7071 18.2438C24.7071 23.399 21.6766 27.7968 15.9377 27.7968C10.1944 27.7968 7.17188 23.399 7.17188 18.2438C7.17188 11.6805 11.6978 4.10156 15.9377 4.10156Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(MTSLogoIcon);
const Memo = memo(ForwardRef);

export default Memo;
