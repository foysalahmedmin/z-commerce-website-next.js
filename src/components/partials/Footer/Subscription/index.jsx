import { Button } from "@/components/ui/Button";
import { SendHorizontal } from "lucide-react";
import Logo from "../../Logo";

const Subscription = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <div className="mb-4 inline-block border-l-8 border-foreground px-4">
        <Logo />
      </div>
      <label>
        <strong className="mb-4 block text-lg">Subscribe</strong>
        <span className="mb-2 block">Get 10% off your first order</span>
        <div className="input h-8 w-full gap-2 bg-card px-0 xl:w-80">
          <input
            className="peer size-full flex-1 bg-transparent px-4 text-sm outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <Button
            className="rounded-l-none border-y-0 border-l border-r-0 border-border text-foreground hover:text-primary peer-focus-within:border-foreground"
            variant="outline"
            size="icon"
          >
            <SendHorizontal strokeWidth={1} />
          </Button>
        </div>
      </label>
    </div>
  );
};

export default Subscription;
