import { Mail, Phone } from "lucide-react";

const ContactAddress = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row md:gap-8 lg:flex-col">
      <div className="space-y-4 sm:flex-1">
        <div className="flex items-center gap-4">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <Phone />
          </span>
          <strong className="text-lg">Call To Us</strong>
        </div>
        <strong className="block">We are available 24/7, 7 days a week.</strong>
        <ul className="space-y-2">
          <li>
            <strong>Phone:</strong> <span>+8801611112222</span>
          </li>
        </ul>
      </div>
      <div className="h-[1px] w-full bg-border sm:my-auto sm:h-40 sm:w-[1px] sm:self-baseline lg:h-[1px] lg:w-full" />
      <div className="space-y-4 sm:flex-1">
        <div className="flex items-center gap-4">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <Mail />
          </span>
          <strong className="text-lg">Write To Us</strong>
        </div>
        <strong className="block">
          Fill out our form and we will contact you within 24 hours.
        </strong>
        <ul className="space-y-2">
          <li>
            <strong>Emails:</strong> <span>customer@exclusive.com</span>
          </li>
          <li>
            <strong>Emails:</strong> <span>support@exclusive.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactAddress;
