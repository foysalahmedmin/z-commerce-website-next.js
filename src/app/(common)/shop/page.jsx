import Categories from "@/components/partials/Sidebar/Categories";
import SubscriptionBanner from "@/components/partials/SubscriptionBanner";

const ShopePage = () => {
  return (
    <>
      <main className="container relative flex md:gap-x-6 xl:gap-x-8">
        <aside className="self-stretch py-4 md:w-60 md:py-6 xl:w-80 xl:py-8">
          <Categories />
        </aside>
        <div className="flex-1 self-stretch py-4 md:py-6 xl:py-8">
          <div className="pb-4 md:pb-6 xl:pb-8">
            <SubscriptionBanner />
          </div>
          <hr className="container" />
        </div>
      </main>
    </>
  );
};

export default ShopePage;
