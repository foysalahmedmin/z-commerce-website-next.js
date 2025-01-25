import { Apple } from "@/assets/svg/icons/Apple";
import { Contact } from "@/assets/svg/icons/Contact";
import { Feedback } from "@/assets/svg/icons/Feedback";
import { GoogleColor } from "@/assets/svg/icons/Google";
import { FacebookColor } from "@/assets/svg/icons/socials/Facebook";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PageHeaderSection = ({ className }) => {
  return (
    <section className={cn("h-header rounded-md bg-card px-4", className)}>
      <div className="flex size-full items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <span className="inline-block">Sign up/in using</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-grid size-8 place-items-center rounded-full bg-muted text-2xl"
            >
              <GoogleColor />
            </a>
            <a
              href="#"
              className="inline-grid size-8 place-items-center rounded-full bg-muted text-2xl"
            >
              <FacebookColor />
            </a>
            <a
              href="#"
              className="inline-grid size-8 place-items-center rounded-full bg-muted text-2xl"
            >
              <Apple />
            </a>
          </div>
          <span>Or</span>
          <Button
            size="sm"
            className="bg-muted text-foreground hover:bg-muted/50"
          >
            Continue as guest
          </Button>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="text-center">
            <a
              href="#"
              className="inline-grid size-6 place-items-center rounded-md bg-muted text-base"
            >
              <Contact />
            </a>
            <span className="block text-xs uppercase">Contact Us</span>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-grid size-6 place-items-center rounded-md bg-muted text-base"
            >
              <Feedback />
            </a>
            <span className="block text-xs uppercase">Feedback</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
