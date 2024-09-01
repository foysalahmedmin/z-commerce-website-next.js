import { StarRatting } from "@/components/ui/StarRating";
import Image from "next/image";

const ReviewCard = ({ item }) => {
  const { name, image, rating = 3.5, date = "12-12-2023" } = item;
  return (
    <div className="border-b p-4 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-4">
        <div className="size-10 flex-shrink-0 overflow-hidden rounded-full bg-muted/15 shadow-inner">
          {image ? (
            <Image
              className="size-full rounded-full object-cover object-center"
              src={image}
              alt={name}
              width={50}
              height={50}
            />
          ) : (
            <div className="flex size-full items-center justify-center text-xl font-semibold">
              {name[0]}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h5>{name}</h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StarRatting rating={rating} />
              <span>{rating}</span>
            </div>
            <div>{date}</div>
          </div>
        </div>
      </div>
      <div className="md:ml-14">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          aspernatur et illo nihil officiis eum obcaecati velit ea!
          Exercitationem non corporis esse consequatur excepturi fugiat nihil
          assumenda ullam aperiam ratione.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
