import { cn } from "@/lib/utils";
import { Gift, PhoneCall, Repeat2, Truck } from "lucide-react";

const ServicesSection = () => {
  const data = [
    {
      title: "Free shipping order",
      description: "On orders over $100",
      icon: Truck,
    },
    {
      title: "Special gift card",
      description: "The perfect gift idea",
      icon: Gift,
    },
    {
      title: "Return & exchange",
      description: "Free return within 3 days",
      icon: Repeat2,
    },
    {
      title: "Support 24 / 7",
      description: "Customer support",
      icon: PhoneCall,
    },
  ];
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="flex items-center justify-center py-4 md:py-6">
          <div className="grid grid-cols-1 items-center justify-center divide-y md:inline-grid md:grid-cols-2 md:divide-y-0 xl:grid-cols-4">
            {data.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "flex w-full items-center justify-start gap-2 bg-card px-4 py-4 xl:justify-center",
                  {
                    "md:border-l": i === 1 || i == 3,
                  },
                  {
                    "xl:border-l": i === 2,
                  },
                )}
              >
                <item.icon className="size-12" strokeWidth={1} />
                <div className="border-l-4 border-primary pl-2">
                  <h3 className="text-sm uppercase">{item.title}</h3>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
