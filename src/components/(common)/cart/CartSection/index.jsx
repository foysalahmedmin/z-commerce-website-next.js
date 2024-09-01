import { products } from "@/assets/data/products";
import { Button } from "@/components/ui/Button";
import { SendHorizontal } from "lucide-react";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-md border">
        <div className="px-8 py-12 md:px-12">
          <div className="mb-6 grid grid-cols-1 overflow-x-auto md:mb-8">
            <table>
              <thead className="border-b">
                <tr>
                  <th className="w-16 whitespace-nowrap py-4 text-center">#</th>
                  <th className="whitespace-nowrap px-4 py-4 text-left uppercase">
                    Product
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center uppercase">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center uppercase">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center uppercase">
                    Subtotal
                  </th>
                  <th className="w-16 whitespace-nowrap py-4 text-center uppercase">
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
            <div className="grid grid-cols-1 px-8 py-12 md:px-12">
              <table className="mb-4">
                <tbody className="divide-y">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-4 text-left uppercase">
                      Subtotal:
                    </th>
                    <th className="whitespace-nowrap px-4 py-4 text-right uppercase">
                      $120
                    </th>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-4 py-4 text-left uppercase">
                      Shipping:
                    </th>
                    <th className="whitespace-nowrap px-4 py-4 text-right uppercase">
                      $20
                    </th>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-4 py-4 text-left uppercase">
                      Total:
                    </th>
                    <th className="whitespace-nowrap px-4 py-4 text-right uppercase">
                      $140
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-4">
                <div className="flex h-8 w-full flex-1">
                  <input
                    className="input flex-1 rounded-r-none"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <Button
                    className="rounded-l-none border border-primary"
                    size="icon"
                  >
                    <SendHorizontal strokeWidth={1} />
                  </Button>
                </div>
                <Button>Procees to checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
