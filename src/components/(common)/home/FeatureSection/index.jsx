import { Gift, PhoneCall, Repeat2, Truck } from "lucide-react";

const FeatureSection = () => {
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
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-start gap-2 rounded-md border bg-card px-2 py-4 md:w-64"
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
    </section>
  );
};

export default FeatureSection;
