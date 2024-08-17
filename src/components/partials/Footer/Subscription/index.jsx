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
        <div className="input bg-card pr-0">
          <input
            className="flex-1 bg-transparent outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <Button
            className="rounded-l-none border-y-0 border-r-0 border-border text-foreground hover:bg-primary"
            type="submit"
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
