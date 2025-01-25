import { forwardRef } from "react";

const StatusDelivered = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 12"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33398 7.66667L8.00065 11L14.6673 7.66667M8.00065 1L1.33398 4.33333L8.00065 7.66667L14.6673 4.33333L8.00065 1Z"
        stroke="currentColor"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
StatusDelivered.displayName = "StatusDelivered";

const StatusOutForDelivery = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33398 11.334L8.00065 14.6673L14.6673 11.334M1.33398 8.00065L8.00065 11.334L14.6673 8.00065M8.00065 1.33398L1.33398 4.66732L8.00065 8.00065L14.6673 4.66732L8.00065 1.33398Z"
        stroke="currentColor"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
StatusOutForDelivery.displayName = "StatusOutForDelivery";

const StatusAtLastMileHub = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 16"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M7.66667 1.33398L1 9.33398H7L6.33333 14.6673L13 6.66732H7L7.66667 1.33398Z"
        stroke="currentColor"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
StatusAtLastMileHub.displayName = "StatusAtLastMileHub";

const StatusVerified = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00065 1.33398L14.6673 5.66732M8.00065 1.33398L1.33398 5.66732M8.00065 1.33398V5.66732M14.6673 5.66732V10.334M14.6673 5.66732L8.00065 10.334M14.6673 10.334L8.00065 14.6673M14.6673 10.334L8.00065 5.66732M8.00065 14.6673L1.33398 10.334M8.00065 14.6673V10.334M1.33398 10.334V5.66732M1.33398 10.334L8.00065 5.66732M1.33398 5.66732L8.00065 10.334"
        stroke="currentColor"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
StatusVerified.displayName = "StatusVerified";

const StatusConfirmed = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M5.33398 9.33398C5.33398 9.33398 6.33398 10.6673 8.00065 10.6673C9.66732 10.6673 10.6673 9.33398 10.6673 9.33398M6.00065 6.00065H6.00732M10.0007 6.00065H10.0073M14.6673 8.00065C14.6673 11.6826 11.6826 14.6673 8.00065 14.6673C4.31875 14.6673 1.33398 11.6826 1.33398 8.00065C1.33398 4.31875 4.31875 1.33398 8.00065 1.33398C11.6826 1.33398 14.6673 4.31875 14.6673 8.00065Z"
        stroke="currentColor"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
StatusConfirmed.displayName = "StatusConfirmed";

export {
  StatusAtLastMileHub,
  StatusConfirmed,
  StatusDelivered,
  StatusOutForDelivery,
  StatusVerified,
};
