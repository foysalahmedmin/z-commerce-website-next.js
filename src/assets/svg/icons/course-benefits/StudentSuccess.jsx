import { forwardRef } from "react";

const StudentSuccess = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      ref={ref}
      {...props}
    >
      <path
        d="M23.3222 11.108V6.554L27.8762 2L29.3942 5.036L32.4302 6.554L27.8762 11.108H23.3222ZM23.3222 11.108L17.2503 17.1799M32.4303 17.18C32.4303 25.5637 25.634 32.36 17.2503 32.36C8.86663 32.36 2.07031 25.5637 2.07031 17.18C2.07031 8.79632 8.86663 2 17.2503 2M24.8403 17.18C24.8403 21.3718 21.4422 24.77 17.2503 24.77C13.0585 24.77 9.66031 21.3718 9.66031 17.18C9.66031 12.9882 13.0585 9.59 17.2503 9.59"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

StudentSuccess.displayName = "StudentSuccess";

export { StudentSuccess };
