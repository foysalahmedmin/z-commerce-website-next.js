"use client";

import {
  StarEmpty,
  Star as StarFull,
  StarHalf,
} from "@/assets/images/icons/Stars";
import { cn } from "@/lib/utils";

const { forwardRef, useState } = require("react");
const ratingProcessor = (rating = 0, range = 5) => {
  if (
    rating < 0 ||
    range < 0 ||
    range < rating ||
    isNaN(rating) ||
    isNaN(range)
  ) {
    return 0;
  }
  return (Number(rating) * 5) / Number(range);
};

const StarRatting = forwardRef(
  (
    {
      setRating: setRatingProp = () => {},
      rating: ratingProp = 0,
      range: rangeProp = 5,
      className,
      color = "#ff7f45",
      clickable = false,
      ...props
    },
    ref,
  ) => {
    const [rating, setRating] = useState(
      ratingProcessor(ratingProp, rangeProp),
    );

    const fullStars =
      Array.from({ length: Math.floor(rating) }, (_, i) => {
        return {
          state: "half",
          element: <StarFull key={i} color={color} />,
        };
      }) || [];
    const halfStars =
      Array.from({ length: !Number.isInteger(rating) ? 1 : 0 }, (_, i) => {
        return {
          state: "half",
          element: <StarHalf key={i} color={color} />,
        };
      }) || [];
    const emptyStars =
      Array.from({ length: 5 - Math.ceil(rating) }, (_, i) => {
        return {
          state: "empty",
          element: <StarEmpty key={i} />,
        };
      }) || [];

    const stars = [...fullStars, ...halfStars, ...emptyStars];

    const onStarClick = (rating) => {
      if (!clickable) {
        return;
      }
      setRating(ratingProcessor(rating));
      setRatingProp(ratingProcessor(rating));
    };

    return (
      <ul
        className={cn(
          "inline-flex items-center justify-center gap-[0.25em]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {stars.map(({ state, element }, i) => (
          <li
            key={i}
            className={cn("", state, {
              "cursor-pointer": clickable,
            })}
            onClick={() => onStarClick(i + 1)}
          >
            {element}
          </li>
        ))}
      </ul>
    );
  },
);

StarRatting.displayName = "StarRatting";

export { StarRatting };
