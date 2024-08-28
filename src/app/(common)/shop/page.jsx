import ProductSection from "@/components/(common)/shop/ProductSection";
import FlashSalesProductSection from "@/components/partials/Sections/FlashSalesProductSection";
import SubscriptionBanner from "@/components/partials/Sections/SubscriptionBanner";
import Categories from "@/components/partials/Sidebar/Categories";
import PopularProduct from "@/components/partials/Sidebar/PopularProduct";
import PriceAndVariants from "@/components/partials/Sidebar/PriceAndVariants";

const ShopePage = () => {
  return (
    <main>
      <div className="container relative flex md:gap-x-6 xl:gap-x-8">
        <aside className="space-y-4 self-stretch py-4 md:w-60 md:space-y-6 md:py-6 xl:w-80 xl:py-8">
          <Categories />
          <PriceAndVariants />
          <PopularProduct />
        </aside>
        <div className="w-full flex-1 space-y-4 self-stretch py-4 md:max-w-[calc(100%-16.5rem)] md:space-y-6 md:py-6 xl:max-w-[calc(100%-22rem)] xl:space-y-8 xl:py-8">
          <div>
            <SubscriptionBanner />
          </div>
          <div className="py-6 md:py-8">
            <ProductSection />
          </div>
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
