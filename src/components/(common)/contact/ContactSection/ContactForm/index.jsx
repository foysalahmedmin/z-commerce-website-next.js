import { Button } from "@/components/ui/Button";
import { AtSign, PenLine, Phone, User } from "lucide-react";

const ContactFormSection = () => {
  return (
    <form>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <label className="form-control form-control-variant-default h-10 w-full flex-row-reverse gap-2 bg-background px-0">
          <input
            className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
            type="text"
            placeholder="Your Name *"
            required
          />
          <span
            className="inline-grid aspect-square h-full place-items-center rounded-l border-r bg-transparent text-foreground/75 transition-all duration-500 peer-focus-within:border-foreground peer-focus-within:text-foreground"
            variant="outline"
            shape="icon"
            type="button"
            asChild
          >
            <User className="size-6" strokeWidth={1} />
          </span>
        </label>
        <label className="form-control form-control-variant-default h-10 w-full flex-row-reverse gap-2 bg-background px-0">
          <input
            className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
            type="email"
            placeholder="Your Email *"
            required
          />
          <span
            className="inline-grid aspect-square h-full place-items-center rounded-l border-r bg-transparent text-foreground/75 transition-all duration-500 peer-focus-within:border-foreground peer-focus-within:text-foreground"
            variant="outline"
            shape="icon"
            type="button"
            asChild
          >
            <AtSign className="size-6" strokeWidth={1} />
          </span>
        </label>
        <label className="form-control form-control-variant-default h-10 w-full flex-row-reverse gap-2 bg-background px-0">
          <input
            className="peer size-full flex-1 bg-transparent px-2 text-sm outline-none"
            type="tel"
            placeholder="Your Email *"
            required
          />
          <span
            className="inline-grid aspect-square h-full place-items-center rounded-l border-r bg-transparent text-foreground/75 transition-all duration-500 peer-focus-within:border-foreground peer-focus-within:text-foreground"
            variant="outline"
            shape="icon"
            type="button"
            asChild
          >
            <Phone className="size-6" strokeWidth={1} />
          </span>
        </label>
        <label className="form-control form-control-variant-default w-full flex-row-reverse items-start gap-2 bg-background px-0 sm:col-span-3 lg:col-span-1 xl:col-span-3">
          <textarea
            className="peer h-40 w-full flex-1 resize-y bg-transparent px-2 py-2 text-sm outline-none lg:h-60"
            type="tel"
            cols={5}
            placeholder="Your Massage *"
            required
          />
          <span
            className="inline-grid aspect-square h-10 place-items-center rounded-br rounded-tl border-b border-r bg-transparent text-foreground/75 transition-all duration-500 peer-focus-within:border-foreground peer-focus-within:text-foreground"
            variant="outline"
            shape="icon"
            type="button"
            asChild
          >
            <PenLine className="size-6" strokeWidth={1} />
          </span>
        </label>
      </div>
      <div className="mt-6 text-center md:mt-8 md:text-right">
        <Button>Send Massage</Button>
      </div>
    </form>
  );
};

export default ContactFormSection;
