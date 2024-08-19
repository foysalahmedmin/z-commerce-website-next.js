import { Button } from "@/components/ui/Button";
import { project } from "@/constants/project";
import { Mail } from "lucide-react";

const SubscriptionBanner = () => {
  return (
    <section>
      <div className="dark container">
        <div className="overflow-hidden rounded-md bg-dark text-dark-foreground">
          <div
            style={{
              backgroundImage: "url(/images/partials/subscription-banner.png)",
            }}
            className="bg-contain bg-right-bottom bg-no-repeat px-8 py-16 md:px-16 md:py-24"
          >
            <div className="max-w-xl">
              <div className="mb-6">
                <h1 className="text-neutral-50">
                  Stay home & get your daily needs from our shop
                </h1>
                <span className="mt-2 block">
                  Start Your Daily Shopping with
                  <span className="text-primary"> {project?.name}</span>
                </span>
              </div>
              <form className="max-w-md">
                <div className="flex items-center overflow-hidden rounded border bg-card focus-within:border-foreground">
                  <label className="flex flex-1 items-center self-stretch pl-2">
                    <Mail />
                    <input
                      className="flex-1 self-stretch bg-transparent px-2 outline-none"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </label>
                  <Button
                    className="rounded-l-none px-4 text-xs uppercase"
                    type="submit"
                  >
                    Subscribe
                  </Button>
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
