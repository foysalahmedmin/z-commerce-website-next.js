import { instagram } from "@/assets/data/instagram";
import ReviewCard from "@/components/partials/Cards/ReviewCard";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const ProductReviews = () => {
  return (
    <div>
      <SectionTitle>
        <Title className="short-underline pb-1 after:border-b-4">Reviews</Title>
      </SectionTitle>
      <div className=""></div>
      <div>
        {instagram?.slice(0, 5).map((item, index) => (
          <ReviewCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
