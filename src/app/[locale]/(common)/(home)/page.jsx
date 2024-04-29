import BannerSection from "@/components/(common)/about/BannerSection";
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
      <div className="container py-12">
        <input
          style={{ background: "red" }}
          className="size-5 bg-transparent accent-red-600"
          type="checkbox"
          id="toggle"
        />
      </div>
    </main>
  );
};

export default HomePage;
