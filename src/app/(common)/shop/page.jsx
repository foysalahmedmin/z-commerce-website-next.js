import ProductSection from "@/components/(common)/shop/ProductSection";
import FlashSalesProductSection from "@/components/partials/Sections/FlashSalesProductSection";
import SubscriptionBanner from "@/components/partials/Sections/SubscriptionBanner";
import Sidebar from "@/components/partials/Sidebar";

const ShopePage = () => {
  return (
    <main>
      <div className="container relative flex md:gap-x-6 xl:gap-x-8">
        <aside className="self-stretch py-4 md:w-80 md:space-y-6 md:py-6 xl:py-8">
          <Sidebar className="space-y-4" />
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
