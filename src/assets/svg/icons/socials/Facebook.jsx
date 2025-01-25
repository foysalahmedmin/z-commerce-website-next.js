import { forwardRef } from "react";

const Facebook = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
      ></path>
    </svg>
  );
});

Facebook.displayName = "Facebook";

const FacebookColor = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 28 29"
      ref={ref}
      {...props}
    >
      <mask
        id="mask0_119_9866"
        style={{ maskType: "luminance" }} // Fixed the inline style
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="29"
      >
        <rect y="0.5" width="28" height="28" fill="white" />
      </mask>
      <g mask="url(#mask0_119_9866)">
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M14.1419 3.41675C8.02078 3.41675 3.05861 8.37891 3.05859 14.5001C3.05858 20.6212 8.02073 25.5834 14.1419 25.5834C20.263 25.5834 25.2252 20.6213 25.2252 14.5001C25.2253 8.37899 20.2631 3.41679 14.142 3.41675H14.1419Z"
          fill="#039BE5"
        />
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M15.6446 17.4377H18.5128L18.9631 14.524H15.644V12.9315C15.644 11.721 16.0395 10.6477 17.1717 10.6477H18.9911V8.10495C18.6715 8.06178 17.9954 7.96729 16.7179 7.96729C14.0503 7.96729 12.4864 9.37603 12.4864 12.5855V14.524H9.74414V17.4377H12.4864V25.4463C13.0295 25.528 13.5796 25.5834 14.1442 25.5834C14.6546 25.5834 15.1528 25.5367 15.6446 25.4702V17.4377Z"
          fill="white"
        />
      </g>
    </svg>
  );
});

FacebookColor.displayName = "FacebookColor";

export { Facebook, FacebookColor };
