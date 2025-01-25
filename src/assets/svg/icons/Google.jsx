import { forwardRef } from "react";

const GoogleColor = forwardRef((props, ref) => {
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
        id="mask0_119_9858"
        style={{ maskType: "luminance" }} // Fixed the inline style
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="29"
      >
        <rect y="0.773438" width="27.4532" height="27.4532" fill="white" />
      </mask>
      <g mask="url(#mask0_119_9858)">
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M24.9423 12.2598H24.0209V12.2124H13.726V16.7879H20.1906C19.2475 19.4514 16.7132 21.3634 13.726 21.3634C9.9357 21.3634 6.86265 18.2904 6.86265 14.5001C6.86265 10.7099 9.9357 7.63682 13.726 7.63682C15.4755 7.63682 17.0672 8.29684 18.2792 9.37495L21.5147 6.13947C19.4717 4.23548 16.7389 3.06128 13.726 3.06128C7.40885 3.06128 2.28711 8.18302 2.28711 14.5001C2.28711 20.8172 7.40885 25.939 13.726 25.939C20.0431 25.939 25.1648 20.8172 25.1648 14.5001C25.1648 13.7332 25.0859 12.9845 24.9423 12.2598Z"
          fill="#FFC107"
        />
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M3.60742 9.17592L7.36566 11.9321C8.38257 9.41441 10.8454 7.63682 13.7274 7.63682C15.4769 7.63682 17.0687 8.29684 18.2806 9.37495L21.5161 6.13947C19.4731 4.23548 16.7404 3.06128 13.7274 3.06128C9.33371 3.06128 5.52343 5.54179 3.60742 9.17592Z"
          fill="#FF3D00"
        />
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M13.7245 25.939C16.6791 25.939 19.3638 24.8083 21.3936 22.9695L17.8533 19.9737C16.7048 20.8436 15.2773 21.3635 13.7245 21.3635C10.7492 21.3635 8.22294 19.4664 7.27122 16.8188L3.54102 19.6929C5.43414 23.3973 9.27874 25.939 13.7245 25.939Z"
          fill="#4CAF50"
        />
        <path
          fillRule="evenodd" // Changed to camelCase
          clipRule="evenodd" // Changed to camelCase
          d="M24.9429 12.2599H24.0215V12.2124H13.7266V16.7879H20.1912C19.7382 18.0674 18.9152 19.1707 17.8537 19.9742C17.8543 19.9737 17.8548 19.9737 17.8554 19.9731L21.3957 22.9689C21.1452 23.1966 25.1654 20.2196 25.1654 14.5002C25.1654 13.7332 25.0865 12.9845 24.9429 12.2599Z"
          fill="#1976D2"
        />
      </g>
    </svg>
  );
});

GoogleColor.displayName = "GoogleColor";

export { GoogleColor };
