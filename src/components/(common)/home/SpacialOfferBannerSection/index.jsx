import { Button } from "@/components/ui/Button";
import { TimeCountdown } from "@/components/ui/TimeCountdown";
import { project } from "@/constants/project";

const SpacialOfferBannerSection = () => {
  return (
    <section>
      <div className="dark container">
        <div className="rounded-md bg-dark py-16 text-dark-foreground md:py-24">
          <div className="grid grid-cols-2">
            <div className="max-w-lg pb-4 pl-4">
              <div className="mb-6">
                <h1 className="text-neutral-50">
                  Enhance Your Music Experience
                </h1>
                <span className="mt-2 block">
                  Start Your Daily Shopping with
                  <span className="text-primary"> {project?.name}</span>
                </span>
              </div>
              <div>
                <TimeCountdown expiryDate={new Date()} />
              </div>
              <div>
                <Button>Shop Now</Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacialOfferBannerSection;
