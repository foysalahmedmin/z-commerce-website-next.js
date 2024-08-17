import BannerSection from "@/components/(common)/home/BannerSection";
import CategorySection from "@/components/(common)/home/CategorySection";
import DealSection from "@/components/(common)/home/DealSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import InstagramSection from "@/components/(common)/home/InstagramSection";
import ServicesSection from "@/components/(common)/home/ServicesSection";
import SpacialOfferBannerSection from "@/components/(common)/home/SpacialOfferBannerSection";
import TestimonialSection from "@/components/(common)/home/TestimonialSection";
import TrendingSection from "@/components/(common)/home/TrendingSection";
import CategoriesBar from "@/components/partials/CategoriesBar";
import { titleGenerator } from "@/lib/utils";

export const metadata = {
  title: titleGenerator(["Home"]),
  description: "Investment management made simple",
};

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <div className="flex">
          <aside className="w-80 border-r py-6 md:py-8">
            <CategoriesBar />
          </aside>
          <div className="grid h-full flex-1 p-6 md:p-8">
            <BannerSection />
          </div>
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
