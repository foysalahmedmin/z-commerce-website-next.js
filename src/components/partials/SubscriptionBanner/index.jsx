import { Button } from "@/components/ui/Button";
import { project } from "@/constants/project";
import { Mail } from "lucide-react";

const SubscriptionBanner = () => {
  return (
    <section>
      <div className="container">
        <div className="overflow-hidden rounded-2xl bg-primary/25 pr-8 pt-4">
          <div
            style={{
              backgroundImage: "url(/images/partials/subscription-banner.png)",
            }}
            className="bg-contain bg-right-bottom bg-no-repeat py-12 md:px-8 md:py-16"
          >
            <div className="max-w-xl pb-4 pl-4">
              <div className="mb-6">
                <h2>Stay home & get your daily needs from our shop </h2>
                <span className="mt-2 block">
                  Start Your Daily Shopping with{" "}
                  <span className="text-primary">{project?.name}</span>
                </span>
              </div>
              <form className="max-w-md">
                <div className="flex items-center overflow-hidden rounded-md border bg-card focus-within:border-foreground">
                  <label className="flex flex-1 items-center self-stretch pl-2">
                    <Mail />
                    <input
                      className="flex-1 self-stretch px-2 outline-none"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </label>
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
