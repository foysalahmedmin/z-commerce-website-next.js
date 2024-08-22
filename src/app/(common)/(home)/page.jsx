import BannerSection from "@/components/(common)/home/BannerSection";
import CategorySection from "@/components/(common)/home/CategorySection";
import DealSection from "@/components/(common)/home/DealSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import InstagramSection from "@/components/(common)/home/InstagramSection";
import SpacialOfferBannerSection from "@/components/(common)/home/SpacialOfferBannerSection";
import TrendingSection from "@/components/(common)/home/TrendingSection";
import CategoriesBar from "@/components/partials/CategoriesBar";
import ServicesSection from "@/components/partials/ServicesSection";
import TestimonialSection from "@/components/partials/TestimonialSection";
import { titleGenerator } from "@/lib/utils";

export const metadata = {
  title: titleGenerator(["Home"]),
  description: "Investment management made simple",
};

const HomePage = () => {
  return (
    <main>
      <div className="container relative flex md:gap-x-6 xl:gap-x-8">
        <aside className="self-stretch py-4 md:w-60 md:py-6 xl:w-80 xl:py-8">
          <CategoriesBar />
        </aside>
        <div className="flex-1 self-stretch py-4 md:py-6 xl:py-8">
          <BannerSection />
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <ServicesSection />
      <div className="container">
        <hr />
      </div>
      <DealSection />
      <div className="container">
        <hr />
      </div>
      <CategorySection />
      <div className="container">
        <hr />
      </div>
      <TrendingSection />
      <SpacialOfferBannerSection />
      <TestimonialSection />
      <FeatureSection />
      <InstagramSection />
    </main>
  );
};

export default HomePage;
