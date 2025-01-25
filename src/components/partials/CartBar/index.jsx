import { products } from "@/assets/data/products";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
} from "@/components/ui/Drawer";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import ProductCartCard from "../Cards/ProductCartCard";

const CartBar = ({ isOpen, setIsOpen, size = "base", side = "right" }) => {
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawerBackdrop />
        <DrawerContent size={size} side={side}>
          <div className="space-y-6 py-6">
            <div className="space-y-4 px-6">
              <div className="flex items-center justify-between">
                <DrawerCloseTrigger
                  size="sm"
                  className="rounded-full border-current text-xs text-accent"
                />
                <div className="relative inline-flex items-center">
                  <Button
                    className="text-accent"
                    variant="none"
                    shape="none"
                    size="none"
                  >
                    <ShoppingBag className="size-6" />
                  </Button>
                  <span className="absolute right-1 top-1 inline-flex aspect-square min-h-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-accent text-[0.5rem] font-bold leading-none text-accent-foreground">
                    {products?.slice(0, 3)?.length || 0}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <p>You're almost ready to order</p>
                <progress value={50} max={100} className="w-full" />
              </div>
            </div>
            <div className="space-y-4 px-6">
              <div>
                {products?.slice(0, 3)?.map((item, index) => (
                  <ProductCartCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
            <div className="space-y-4 bg-primary/5 px-6 py-6 text-title">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block">Subtotal:</span>
                  <span className="inline-block uppercase">
                    {products
                      ?.map((x) => x?.price * x?.quantity || 0)
                      ?.reduce((partialSum, a) => partialSum + a, 0)}
                    BDT
                  </span>
                </div>
                {/*<div className="flex items-center justify-between">*/}
                {/*  <span className="inline-block">Delivery fee:</span>*/}
                {/*  <span className="inline-block uppercase">100BDT</span>*/}
                {/*</div>*/}
                <hr className="border-primary/25" />
                <div className="flex items-center justify-between">
                  <span className="inline-block font-semibold">Total:</span>
                  <span className="inline-block font-semibold uppercase">
                    {products
                      ?.map((x) => x?.price * x?.quantity)
                      ?.reduce((partialSum, a) => partialSum + a, 0)}
                    BDT
                  </span>
                </div>
              </div>
              <div>
                <Link href="/checkout">
                  <Button
                    onClick={() => setIsOpen(false)}
                    asChild={true}
                    className="w-full text-sm uppercase"
                  >
                    <span>PROCEED TO CHECKOUT</span>
                    <ArrowUpRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/*<div className="space-y-4 px-6">*/}
            {/*  <span className="block font-bold">You might also like</span>*/}
            {/*  <div>*/}
            {/*    {products?.map((item, index) => (*/}
            {/*      <div*/}
            {/*        className="border-b-2 border-b-primary/25 py-6 first:pt-0 last:border-0 last:pb-0"*/}
            {/*        key={index}*/}
            {/*      >*/}
            {/*        <ProductCard item={item} variant="cart-suggest" />*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartBar;
