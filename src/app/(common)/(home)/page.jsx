import BannerSection from "@/components/(common)/home/BannerSection";
import DealSection from "@/components/(common)/home/DealSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import InstagramSection from "@/components/(common)/home/InstagramSection";
import ParallaxBannerSection from "@/components/(common)/home/ParallaxBannerSection";
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
      <FeatureSection />
      <TrendingSection />
      <ParallaxBannerSection />
      <DealSection />
      <SubscriptionBanner />
      <TestimonialSection />
      <InstagramSection />
    </main>
  );
};

export default HomePage;
