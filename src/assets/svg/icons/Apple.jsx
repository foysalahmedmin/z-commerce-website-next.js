import { forwardRef } from "react";

const Apple = forwardRef((props, ref) => {
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
        id="mask0_119_9873"
        style={{ maskType: "luminance" }} // Changed style to object notation
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="29"
      >
        <rect y="0.773438" width="27.4532" height="27.4532" fill="white" />
      </mask>
      <g mask="url(#mask0_119_9873)">
        <mask
          id="mask1_119_9873"
          style={{ maskType: "luminance" }} // Changed style to object notation
          maskUnits="userSpaceOnUse"
          x="3"
          y="0"
          width="21"
          height="29"
        >
          <rect
            x="3.41016"
            y="0.773438"
            width="20.5899"
            height="27.4532"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_119_9873)">
          <path
            fillRule="evenodd" // Changed to camelCase
            clipRule="evenodd" // Changed to camelCase
            d="M20.4991 15.181C20.4884 13.2131 21.3785 11.7279 23.1801 10.634C22.172 9.19168 20.6492 8.39811 18.6385 8.24261C16.735 8.09248 14.6546 9.35254 13.8932 9.35254C13.0889 9.35254 11.2443 8.29623 9.79662 8.29623C6.80464 8.34449 3.625 10.6823 3.625 15.4384C3.625 16.8432 3.88237 18.2945 4.39712 19.7923C5.08345 21.7601 7.56068 26.5859 10.1451 26.5054C11.4964 26.4733 12.4508 25.5457 14.2095 25.5457C15.9146 25.5457 16.7993 26.5054 18.306 26.5054C20.912 26.4679 23.1533 22.0818 23.8074 20.1086C20.3114 18.4625 20.4991 15.2829 20.4991 15.181L20.4991 15.181ZM17.4657 6.37668C18.9295 4.6394 18.7955 3.05763 18.7526 2.48926C17.4603 2.56433 15.9643 3.36862 15.1118 4.36058C14.1734 5.42225 13.6212 6.73593 13.7391 8.21583C15.1386 8.32307 16.4147 7.60457 17.4657 6.37668Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
});

Apple.displayName = "Apple";

export { Apple };
