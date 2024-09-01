import { products } from "@/assets/data/products";
import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-md border">
        <div className="px-8 py-12 md:px-12">
          <div className="grid grid-cols-1 overflow-x-auto">
            <table>
              <thead className="border-b">
                <tr>
                  <th className="w-16 whitespace-nowrap py-4 text-center">#</th>
                  <th className="whitespace-nowrap px-4 py-4 text-left text-lg uppercase">
                    Product
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center text-lg uppercase">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center text-lg uppercase">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-4 text-center text-lg uppercase">
                    Subtotal
                  </th>
                  <th className="w-16 whitespace-nowrap py-4 text-center text-lg uppercase">
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
        </div>
      </div>
    </section>
  );
};

export default CartSection;
