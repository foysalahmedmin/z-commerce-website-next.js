import FlashSalesProductSection from "@/components/(common)/home/FlashSalesProductSection";
import ProductSection from "@/components/(common)/shop/ProductSection";
import Categories from "@/components/partials/Sidebar/Categories";
import PriceAndVariants from "@/components/partials/Sidebar/PriceAndVariants";
import SubscriptionBanner from "@/components/partials/SubscriptionBanner";

const ShopePage = () => {
  return (
    <main>
      <div className="container relative flex md:gap-x-6 xl:gap-x-8">
        <aside className="space-y-4 self-stretch py-4 md:w-60 md:space-y-6 md:py-6 xl:w-80 xl:py-8">
          <Categories />
          <PriceAndVariants />
        </aside>
        <div className="w-full flex-1 self-stretch py-4 md:max-w-[calc(100%-16.5rem)] md:py-6 xl:max-w-[calc(100%-22rem)] xl:py-8">
          <div className="pb-4 md:pb-6 xl:pb-8">
            <SubscriptionBanner />
          </div>
          <ProductSection />
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <FlashSalesProductSection />
    </main>
  );
};

export default ShopePage;
