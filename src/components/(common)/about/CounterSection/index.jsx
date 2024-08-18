import { numberToShortForm } from "@/lib/utils";
import {
  BadgeDollarSign,
  BarChart,
  BriefcaseBusiness,
  Store,
} from "lucide-react";

const CounterSection = () => {
  const data = [
    {
      title: "Sellers active our site",
      icon: <Store strokeWidth={1} size={48} />,
      value: 10500,
    },
    {
      title: "Monthly Product Sale",
      icon: <BadgeDollarSign strokeWidth={1} size={48} />,
      value: 33500,
    },
    {
      title: "Customer active in our site",
      icon: <BarChart strokeWidth={1} size={48} />,
      value: 45500,
    },
    {
      title: "Anual gross sale in our site",
      icon: <BriefcaseBusiness strokeWidth={1} size={48} />,
      value: 25000,
    },
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="md:pag-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-4 self-stretch rounded-md border bg-card px-4 py-6 transition-all duration-300 hover:bg-primary hover:shadow"
            >
              <div className="grid size-20 place-items-center rounded-full bg-muted">
                <div className="grid size-16 place-items-center rounded-full bg-dark text-dark-foreground transition-all duration-500 group-hover:bg-light group-hover:text-dark">
                  {item.icon}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold transition-all duration-300 group-hover:text-light">
                  {numberToShortForm(Number(item?.value || 0))}
                </h3>
                <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-light">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
