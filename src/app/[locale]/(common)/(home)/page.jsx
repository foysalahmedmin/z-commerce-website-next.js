import BannerSection from "@/components/(common)/home/BannerSection";
import ChooseUsSection from "@/components/(common)/home/ChooseUsSection";
import FeatureSection from "@/components/(common)/home/FeatureSection";
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
      <ChooseUsSection />
      <div className="flex h-screen items-center justify-center">
        <div>
          <input type="checkbox" className="switch" />
          <input type="checkbox" className="checkbox" />
          <input type="radio" className="radio" name="radio" />
          <input type="radio" className="radio" name="radio" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
