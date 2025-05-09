import { JSX, SVGProps } from "react";

const Close = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
    />
  </svg>
);

const CopyIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3329 5.99998C11.3313 4.02859 11.3015 3.00745 10.7277 2.30827C10.6169 2.17324 10.4931 2.04943 10.3581 1.93862C9.62047 1.33331 8.52467 1.33331 6.33301 1.33331C4.14135 1.33331 3.04553 1.33331 2.30796 1.93862C2.17293 2.04943 2.04913 2.17324 1.93831 2.30827C1.33301 3.04583 1.33301 4.14166 1.33301 6.33331C1.33301 8.52498 1.33301 9.62078 1.93831 10.3584C2.04912 10.4934 2.17293 10.6172 2.30796 10.728C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Close, CopyIcon };
