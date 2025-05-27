import { Ref, SVGProps, forwardRef, memo } from "react";

const MailIconBackground = (
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
      d="M28.6665 11.3173V22.5C28.6665 24.433 27.0995 26 25.1665 26H6.83316C4.90017 26 3.33301 24.433 3.33301 22.5V11.3173L15.5982 18.0635C15.8483 18.2011 16.1514 18.2011 16.4014 18.0635L28.6665 11.3173ZM25.1665 6C27.0714 6 28.6209 7.52184 28.6655 9.41606L15.9998 16.3823L3.33434 9.416L3.33608 9.35573C3.41174 7.48963 4.94849 6 6.83316 6H25.1665Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MailIconBackground);
const Memo = memo(ForwardRef);

export default Memo;
