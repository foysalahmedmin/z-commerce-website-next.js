import SubscriptionBanner from "@/components/partials/SubscriptionBanner";

const ShopePage = () => {
  return (
    <>
      <main className="container flex">
        <aside className="py-4 md:w-80 md:py-6 xl:py-8"></aside>
        <div className="grid h-full flex-1 px-container-space md:pr-0">
          <div className="py-4 md:py-6 xl:py-8">
            <SubscriptionBanner />
          </div>
          <hr className="container" />
        </div>
      </main>
    </>
  );
};

export default ShopePage;
