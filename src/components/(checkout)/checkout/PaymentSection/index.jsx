"use client";

import { products } from "@/assets/data/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PaymentSection = ({ className }) => {
  const shipping = {};
  return (
    <section className={cn("space-y-8", className)}>
      <div className="rounded-md bg-card p-4">
        <div className="space-y-6">
          <strong className="block font-medium uppercase">
            3. SELECT PAYMENT METHOD
          </strong>
          <form className="space-y-4">
            <label className="group relative flex cursor-pointer items-center justify-between rounded-md border px-4 py-4 has-[:checked]:border-current">
              <div className="inline-flex items-center gap-2">
                <input
                  className="radio shrink-0 text-xl leading-none"
                  type="radio"
                  value="offline"
                  name="payment-method"
                />
                <span className="font-medium leading-none group-has-[:checked]:text-title">
                  Cash on delivery
                </span>
              </div>
              <img
                className="h-8 object-contain object-right"
                src="/images/payment-methods/bkash.png"
                alt="bkash-logo"
              />
              <span className="absolute left-4 top-0 inline-block -translate-y-1/2 bg-card px-2 font-medium">
                Express checkout
              </span>
            </label>
            <label className="group relative flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 has-[:checked]:border-current">
              <div className="inline-flex items-center gap-2">
                <input
                  className="radio shrink-0 text-xl leading-none"
                  type="radio"
                  value="online"
                  name="payment-method"
                />
                <span className="font-medium leading-none group-has-[:checked]:text-title">
                  Credit/Debit Cards
                </span>
              </div>
              <img
                className="h-6 object-contain object-right"
                src="/images/payment-methods/ssl.png"
                alt="ssl-commerce-logo"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="rounded-md bg-card pt-4">
        <div className="space-y-6">
          <strong className="block px-4 font-medium uppercase">
            ORDER SUMMARY
          </strong>
          <div className="space-y-4 px-4">
            {products?.slice(0, 3)?.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-1">
                  <span className="block text-title/85">3 × {item?.name}</span>
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <span className="text-sm">{item?.description}</span>
                    </div>
                  </div>
                </div>
                <div className="min-w-20 text-right">
                  <span className="inline-block font-medium uppercase text-title">
                    100BDT
                  </span>
                </div>
              </div>
            ))}
            <hr />
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block font-semibold uppercase text-title/85">
                  SUBTOTAL
                </span>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block font-medium uppercase text-title">
                  {products
                    ?.map((x) => x?.price * 2)
                    ?.reduce((partialSum, a) => partialSum + a, 0)}
                  BDT
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block text-title/85">Shipping</span>
                <div className="flex items-center gap-2 text-sm">
                  <span>Regular ({shipping?.days || 0} days delivery)</span>
                </div>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block font-medium uppercase text-title">
                  {shipping?.charge || 0}BDT
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-b-md bg-muted-foreground/35 px-4 py-4">
            <div className="flex items-center">
              <div className="flex-1">
                <span className="block font-semibold uppercase text-title/85">
                  ORDER TOTAL
                </span>
              </div>
              <div className="min-w-20 text-right">
                <span className="inline-block text-lg font-semibold uppercase text-title">
                  {products
                    ?.slice(0, 3)
                    ?.map((x) => x?.price * x?.quantity)
                    ?.reduce((partialSum, a) => partialSum + a, 0) +
                    (shipping?.charge || 0)}
                  BDT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            className="checkbox border border-current text-xl"
            type="checkbox"
            // checked={isAgree}
            // onChange={() => setIsAgree(!isAgree)}
          />
          <span className="inline-block text-xs font-medium capitalize leading-none">
            I have read and agree to the website{" "}
            <Link
              href="terms-conditions"
              className="font-medium text-title/85 underline"
            >
              terms and conditions *
            </Link>
          </span>
        </label>
      </div>
      <div>
        <Button className="primary w-full text-sm uppercase">
          <span>COMPLETE ORDER</span>
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default PaymentSection;
