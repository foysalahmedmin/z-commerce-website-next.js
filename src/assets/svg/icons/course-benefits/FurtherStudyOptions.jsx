import { forwardRef } from "react";

const FurtherStudyOptions = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 27 33"
      ref={ref}
      {...props}
    >
      <path
        d="M24.8032 26.2882V21.9562H6.03122C3.63872 21.9562 1.69922 23.8957 1.69922 26.2882M8.63042 30.6202H20.1824C21.7999 30.6202 22.6086 30.6202 23.2263 30.3055C23.7698 30.0286 24.2116 29.5868 24.4884 29.0434C24.8032 28.4256 24.8032 27.6169 24.8032 25.9994V6.36103C24.8032 4.7436 24.8032 3.93489 24.4884 3.31711C24.2116 2.7737 23.7698 2.33189 23.2263 2.05501C22.6086 1.74023 21.7999 1.74023 20.1824 1.74023H8.63042C6.20427 1.74023 4.9912 1.74023 4.06453 2.21239C3.24941 2.62772 2.5867 3.29043 2.17138 4.10555C1.69922 5.03221 1.69922 6.24529 1.69922 8.67143V23.689C1.69922 26.1152 1.69922 27.3283 2.17138 28.2549C2.5867 29.07 3.24941 29.7328 4.06453 30.1481C4.9912 30.6202 6.20427 30.6202 8.63042 30.6202Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

FurtherStudyOptions.displayName = "FurtherStudyOptions";

export { FurtherStudyOptions };
