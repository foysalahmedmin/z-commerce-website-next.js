import { forwardRef } from "react";

const CareerOpportunities = forwardRef((props, ref) => {
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
        d="M15.9913 6.554H16.6507C21.2764 6.554 23.5893 6.554 24.4673 7.38478C25.2262 8.10292 25.5625 9.16083 25.3576 10.1854C25.1206 11.3706 23.2323 12.7062 19.4558 15.3774L13.2858 19.7416C9.50931 22.4128 7.62104 23.7484 7.384 24.9336C7.17911 25.9582 7.51543 27.0161 8.27435 27.7342C9.15232 28.565 11.4652 28.565 16.0909 28.565H17.5093M10.6783 6.554C10.6783 9.0691 8.63942 11.108 6.12431 11.108C3.60921 11.108 1.57031 9.0691 1.57031 6.554C1.57031 4.0389 3.60921 2 6.12431 2C8.63942 2 10.6783 4.0389 10.6783 6.554ZM31.9303 27.806C31.9303 30.3211 29.8914 32.36 27.3763 32.36C24.8612 32.36 22.8223 30.3211 22.8223 27.806C22.8223 25.2909 24.8612 23.252 27.3763 23.252C29.8914 23.252 31.9303 25.2909 31.9303 27.806Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

CareerOpportunities.displayName = "CareerOpportunities";

export { CareerOpportunities };
