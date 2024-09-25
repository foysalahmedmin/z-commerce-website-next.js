"use client";

import {
  StarEmpty,
  Star as StarFull,
  StarHalf,
} from "@/assets/images/icons/Stars";
import { cn } from "@/lib/utils";
import { forwardRef, useMemo, useState } from "react";

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
      setRating: setRatingProp = () => {},
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

    const handleStarClick = (index) => {
      if (!clickable) return;

      const newRating = ratingProcessor(index + 1, rangeProp, total);
      setRating(newRating);
      setRatingProp(newRating);
    };

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
            onClick={() => handleStarClick(index)}
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
