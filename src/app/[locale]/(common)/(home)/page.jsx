import BannerSection from "@/components/(common)/home/BannerSection";
import ChooseUsSection from "@/components/(common)/home/ChooseUsSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
import { titleGenerator } from "@/lib/utils";
import HDrawer from "./HDrawer";

export const metadata = {
  title: titleGenerator(["Home"]),
  description: "Investment management made simple",
};

const HomePage = () => {
  return (
    <main>
      <BannerSection />
      <FeatureSection />
      <ChooseUsSection />
      <HDrawer />
    </main>
  );
};

export default HomePage;
