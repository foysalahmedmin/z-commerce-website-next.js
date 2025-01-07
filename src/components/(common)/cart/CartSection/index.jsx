import { products } from "@/assets/data/products";
import { Button } from "@/components/ui/Button";
import { SendHorizontal } from "lucide-react";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-md border">
        <div className="space-y-6 p-6 md:space-y-8 md:p-8">
          <div className="grid grid-cols-1 overflow-x-auto">
            <table className="text-[0.5rem] md:text-[.75rem] lg:text-[1rem]">
              <thead className="border-b">
                <tr>
                  <th className="w-16 whitespace-nowrap pb-[1em] text-center">
                    #
                  </th>
                  <th className="whitespace-nowrap px-[1em] pb-[1em] text-left text-[1em] uppercase">
                    Product
                  </th>
                  <th className="whitespace-nowrap px-[1em] pb-[1em] text-center text-[1em] uppercase">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-[1em] pb-[1em] text-center text-[1em] uppercase">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-[1em] pb-[1em] text-center text-[1em] uppercase">
                    Subtotal
                  </th>
                  <th className="w-16 whitespace-nowrap pb-[1em] text-center text-[1em] uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 5).map((item, index) => (
                  <CartItem key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="ml-auto rounded-md border xl:w-1/2">
            <div className="grid grid-cols-1 p-6 md:p-8">
              <table className="mb-[1em]">
                <tbody className="divide-y">
                  <tr>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-left text-[1em] uppercase">
                      Subtotal:
                    </th>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-right text-[1em] uppercase">
                      $120
                    </th>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-left text-[1em] uppercase">
                      Shipping:
                    </th>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-right text-[1em] uppercase">
                      $20
                    </th>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-left text-[1em] uppercase">
                      Total:
                    </th>
                    <th className="whitespace-nowrap px-[1em] pb-[1em] text-right text-[1em] uppercase">
                      $140
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col gap-[1em] sm:flex-row">
                <div className="flex h-8 w-full sm:flex-1">
                  <input
                    className="form-control form-control-variant-defaultflex-1 rounded-r-none"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <Button
                    className="rounded-l-none border border-primary"
                    shape="icon"
                  >
                    <SendHorizontal strokeWidth={1} />
                  </Button>
                </div>
                <Button className="w-full sm:w-auto">
                  Process to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
