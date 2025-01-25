"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { FormControl } from "@/components/ui/FormControl";
import { cn } from "@/lib/utils";

const DeliveryFormSection = ({ className }) => {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="rounded-md bg-card p-4">
        <div className="space-y-6">
          <strong className="block font-medium uppercase">
            2. DELIVERY ADDRESS
          </strong>
          <form className="space-y-4 text-sm">
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Email*
                </span>
                <FormControl
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Name*
                </span>
                <FormControl
                  type="text"
                  placeholder="Enter Your First Name"
                  name="first-name"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  City/Town*
                </span>
                <div className="input block h-auto w-full text-xs">
                  <FormControl as="select" name="city" required>
                    <option value="">Select City/Town</option>
                    {/* {cities?.map((x, i) => (
                      <option key={i} value={x?._id}>
                        {x?.name}
                      </option>
                    ))} */}
                  </FormControl>
                </div>
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Delivery address*
                </span>
                <FormControl
                  type="text"
                  placeholder="Apartment, suit, unit"
                  name="delivery-address-optional"
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Postcode/ZIP Code*
                </span>
                <FormControl
                  type="text"
                  placeholder="Enter Your Postcode/ZIP Code"
                  name="postcode"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span className="mb-1 inline-block text-sm font-medium capitalize text-title">
                  Phone*
                </span>
                <FormControl as="div">
                  <img
                    className="size-6 rounded object-contain object-center"
                    src="/images/flags/bd.svg"
                    alt="flag"
                  />
                  <input
                    type="tel"
                    className="h-full w-full flex-1 border-none outline-none"
                    placeholder="Enter Your Phone Number"
                    name="Phone"
                    required
                  />
                </FormControl>
              </label>
            </div>
            <div>
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox className="checkbox text-xl" type="checkbox" />
                <span className="inline-block font-medium capitalize leading-none text-title">
                  Use as profile address
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFormSection;
