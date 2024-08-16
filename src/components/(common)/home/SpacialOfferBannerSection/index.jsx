import { Button } from "@/components/ui/Button";
import {
  CountdownTime,
  CountdownTimeUnit,
} from "@/components/ui/CountdownTime";
import { project } from "@/constants/project";

const SpacialOfferBannerSection = () => {
  return (
    <section>
      <div className="container">
        <div className="dark rounded-md bg-dark px-16 py-16 text-dark-foreground md:py-24">
          <div className="grid grid-cols-2">
            <div className="max-w-lg space-y-6 pb-4 pl-4 md:space-y-8 ">
              <div>
                <h1 className="text-neutral-50 md:text-5xl">
                  Enhance Your Music Experience
                </h1>
                <span className="mt-2 block">
                  Start Your Daily Shopping with
                  <span className="text-primary"> {project?.name}</span>
                </span>
              </div>
              <div>
                <CountdownTime endDate={"2025-01-01"}>
                  <CountdownTimeUnit unit="day" />
                  <span className="text-xl font-bold leading-none text-card shadow">
                    :
                  </span>
                  <CountdownTimeUnit unit="hour" />
                  <span className="text-xl font-bold leading-none text-card shadow">
                    :
                  </span>
                  <CountdownTimeUnit unit="minute" />
                  <span className="text-xl font-bold leading-none text-card shadow">
                    :
                  </span>
                  <CountdownTimeUnit unit="second" />
                </CountdownTime>
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
