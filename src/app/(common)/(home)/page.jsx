import BannerSection from "@/components/(common)/home/BannerSection";
import CategorySection from "@/components/(common)/home/CategorySection";
import DealSection from "@/components/(common)/home/DealSection";
import InstagramSection from "@/components/(common)/home/InstagramSection";
import ParallaxBannerSection from "@/components/(common)/home/ParallaxBannerSection";
import ServicesSection from "@/components/(common)/home/ServicesSection";
import TestimonialSection from "@/components/(common)/home/TestimonialSection";
import TrendingSection from "@/components/(common)/home/TrendingSection";
import SubscriptionBanner from "@/components/partials/SubscriptionBanner";
import { titleGenerator } from "@/lib/utils";

export const metadata = {
  title: titleGenerator(["Home"]),
  description: "Investment management made simple",
};

const HomePage = () => {
  return (
    <main>
      <BannerSection />
      <DealSection />
      <hr />
      <CategorySection />
      <hr />
      <TrendingSection />
      <hr />
      <ParallaxBannerSection />
      <hr />
      <ServicesSection />
      <hr />
      <SubscriptionBanner />
      <TestimonialSection />
      <InstagramSection />
    </main>
  );
};

export default HomePage;
