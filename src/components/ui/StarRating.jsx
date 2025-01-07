"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useMemo, useState } from "react";

const StarFull = forwardRef((props, ref) => {
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
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
      ></path>
    </svg>
  );
});
StarFull.displayName = "Star";

const StarHalf = forwardRef((props, ref) => {
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
        d="M12 15.4V6.1l1.71 4.03l4.38.37l-3.32 2.89l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"
      ></path>
    </svg>
  );
});
StarHalf.displayName = "StarHalf";

const StarEmpty = forwardRef((props, ref) => {
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
        d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"
      ></path>
    </svg>
  );
});
StarEmpty.displayName = "StarEmpty";

// Utility function to process the rating
export const ratingProcessor = (rating = 0, range = 5, total = 5) => {
  if (
    rating < 0 ||
    range < 0 ||
    range < rating ||
    isNaN(rating) ||
    isNaN(range)
  ) {
    return 0;
  }
  return (Number(rating) * total) / Number(range);
};

// Utility function to generate star states (full, half, empty)
const generateStars = (rating, total) => {
  const fullStars = Array.from({ length: Math.floor(rating) }, () => "full");
  const halfStars = Array.from(
    { length: !Number.isInteger(rating) ? 1 : 0 },
    () => "half",
  );
  const emptyStars = Array.from(
    { length: total - Math.ceil(rating) },
    () => "empty",
  );
  return [...fullStars, ...halfStars, ...emptyStars];
};

const StarRating = forwardRef(
  (
    {
      setRating: setRatingProp,
      rating: ratingProp = 0,
      range: rangeProp = 5,
      total = 5,
      className,
      color = "#ff7f45",
      clickable = false,
      fullIcon = <StarFull />,
      halfIcon = <StarHalf />,
      emptyIcon = <StarEmpty />,
      ...props
    },
    ref,
  ) => {
    const [rating, setRating] = useState(
      ratingProcessor(ratingProp, rangeProp, total),
    );

    const stars = useMemo(() => generateStars(rating, total), [rating, total]);

    const onStarSelect = (index) => {
      if (!clickable) return;

      const newRating = ratingProcessor(index + 1, rangeProp, total);
      setRating(newRating);
      if (setRatingProp) {
        setRatingProp(newRating);
      }
    };

    useEffect(() => {
      if (ratingProp !== undefined) {
        setRating(ratingProp);
      }
    }, [ratingProp]);

    return (
      <ul
        className={cn(
          "inline-flex items-center justify-center gap-[0.25em]",
          className,
        )}
        value={rating}
        ref={ref}
        {...props}
      >
        {stars.map((state, index) => (
          <li
            key={index}
            className={state}
            style={{
              ...(clickable && { cursor: "pointer" }),
              ...((state === "full" || state === "half") &&
                color && {
                  color,
                }),
            }}
            onClick={() => onStarSelect(index)}
          >
            {state === "full"
              ? fullIcon
              : state === "half"
                ? halfIcon
                : emptyIcon}
          </li>
        ))}
      </ul>
    );
  },
);

StarRating.displayName = "StarRating";

export { StarRating };
