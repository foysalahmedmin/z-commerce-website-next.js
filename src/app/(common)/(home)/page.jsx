import BannerSection from "@/components/(common)/home/BannerSection";
import CategorySection from "@/components/(common)/home/CategorySection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import FlashSalesProductSection from "@/components/(common)/home/FlashSalesProductSection";
import InstagramSection from "@/components/(common)/home/InstagramSection";
import SpacialOfferSection from "@/components/(common)/home/SpacialOfferSection";
import TrendingProductSection from "@/components/(common)/home/TrendingProductSection";
import ServicesSection from "@/components/partials/ServicesSection";
import Categories from "@/components/partials/Sidebar/Categories";
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
          <Categories className="h-full" />
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
      <FlashSalesProductSection />
      <div className="container">
        <hr />
      </div>
      <CategorySection />
      <div className="container">
        <hr />
      </div>
      <TrendingProductSection />
      <SpacialOfferSection />
      <TestimonialSection />
      <FeatureSection />
      <InstagramSection />
    </main>
  );
};

export default HomePage;
