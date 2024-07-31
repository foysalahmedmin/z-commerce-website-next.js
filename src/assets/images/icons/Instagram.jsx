import { forwardRef } from "react";

export const Instagram = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
          <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
          <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#bc1888", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagramGradient)"
        d="M12 9.52A2.48 2.48 0 1 0 14.48 12A2.48 2.48 0 0 0 12 9.52m9.93-2.45a6.53 6.53 0 0 0-.42-2.26a4 4 0 0 0-2.32-2.32a6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42a4 4 0 0 0-2.32 2.32a6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27a3.94 3.94 0 0 0 .91 1.4a3.89 3.89 0 0 0 1.41.91a6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42a3.89 3.89 0 0 0 1.41-.91a3.94 3.94 0 0 0 .91-1.4a6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93m-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35a3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26a2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38a2.38 2.38 0 0 0 1.41 1.41a4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26a2.38 2.38 0 0 0 1.41-1.41a4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12A3.82 3.82 0 1 1 12 15.82m4-6.89a.9.9 0 0 1 0-1.79a.9.9 0 0 1 0 1.79"
      ></path>
    </svg>
  );
});

Instagram.displayName = "Instagram";

export const InstagramColor = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      ref={ref}
      {...props}
    >
      <g fill="none">
        <rect
          width={256}
          height={256}
          fill="url(#skillIconsInstagram0)"
          rx={60}
        ></rect>
        <rect
          width={256}
          height={256}
          fill="url(#skillIconsInstagram1)"
          rx={60}
        ></rect>
        <defs>
          <radialGradient
            id="skillIconsInstagram0"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fd5"></stop>
            <stop offset={0.1} stopColor="#fd5"></stop>
            <stop offset={0.5} stopColor="#ff543e"></stop>
            <stop offset={1} stopColor="#c837ab"></stop>
          </radialGradient>
          <radialGradient
            id="skillIconsInstagram1"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3771c8"></stop>
            <stop offset={0.128} stopColor="#3771c8"></stop>
            <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
});

InstagramColor.displayName = "InstagramColor";
