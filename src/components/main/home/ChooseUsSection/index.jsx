import chooseUsImage from "@/../public/images/home/choose-us.png";
import { Title } from "@/components/ui/title";
import { BaggageClaim, Leaf, Snail, Truck } from "lucide-react";
import Image from "next/image";

const ChooseUsSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="w-full">
            <Image
              className="w-full object-contain object-center"
              src={chooseUsImage}
              alt="Choose us image"
            />
          </div>
          <div className="">
            <div className="mb-6">
              <Title className="mb-4">Why choose us ?</Title>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                culpa amet optio nam, dolores eaque repellendus! Quisquam
                exercitationem quidem obcaecati quis repellendus culpa laborum
                neque repellat. Odit quaerat vitae neque eius pariatur minus
                temporibus quia fuga ratione animi illo, deleniti saepe quod, ex
                dolorem iste veritatis voluptatem eligendi placeat fugiat!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <Snail className="size-24 text-primary" />
                <div>
                  <h3>Good Quality</h3>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores similique eos eius quos inventore fugiat.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Leaf className="size-24 text-primary" />
                <div>
                  <h3>Environment Friendly</h3>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores similique eos eius quos inventore fugiat.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BaggageClaim className="size-24 text-primary" />
                <div>
                  <h3>Better Service</h3>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores similique eos eius quos inventore fugiat.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="size-24 text-primary" />
                <div>
                  <h3>Fast Delivery</h3>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores similique eos eius quos inventore fugiat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
