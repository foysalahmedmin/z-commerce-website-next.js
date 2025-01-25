import { forwardRef } from "react";

const SkillDevelopment = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 34 33"
      ref={ref}
      {...props}
    >
      <path
        d="M31.931 27.246L30.2441 29.0913C29.3495 30.0697 28.1362 30.6194 26.8711 30.6194C25.6061 30.6194 24.3928 30.0697 23.4981 29.0913C22.6022 28.1148 21.3891 27.5666 20.1244 27.5666C18.8597 27.5666 17.6465 28.1148 16.7506 29.0913M1.57031 30.6194H4.39478C5.21988 30.6194 5.63244 30.6194 6.02067 30.5262C6.36488 30.4435 6.69394 30.3072 6.99577 30.1223C7.3362 29.9137 7.62792 29.6219 8.21136 29.0385L29.401 7.84883C30.7983 6.45152 30.7983 4.18602 29.401 2.78871C28.0037 1.39139 25.7382 1.3914 24.3409 2.78871L3.1512 23.9784C2.56776 24.5618 2.27604 24.8535 2.06742 25.194C1.88246 25.4958 1.74616 25.8249 1.66352 26.1691C1.57031 26.5573 1.57031 26.9699 1.57031 27.795V30.6194Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

SkillDevelopment.displayName = "SkillDevelopment";

export { SkillDevelopment };
