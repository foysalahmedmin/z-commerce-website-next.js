import BannerSection from "@/components/(common)/home/BannerSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import ParallaxBannerSection from "@/components/(common)/home/ParallaxBannerSection";
import TestimonialSection from "@/components/(common)/home/TestimonialSection";
import TrendingSection from "@/components/(common)/home/TrendingSection";
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
      <TrendingSection />
      <TrendingSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
