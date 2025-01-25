import DeliveryFormSection from "@/components/(checkout)/checkout/DeliveryFormSection";
import OrderReviewSection from "@/components/(checkout)/checkout/OrderReviewSection";
import PageHeaderSection from "@/components/(checkout)/checkout/PageHeaderSection";
import PaymentSection from "@/components/(checkout)/checkout/PaymentSection";

const CheckoutPage = () => {
  return (
    <main className="min-h-screen-minus-header bg-muted">
      <div className="container space-y-8 py-8">
        <PageHeaderSection />
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <OrderReviewSection />
          <DeliveryFormSection />
          <PaymentSection />
        </section>
      </div>
    </main>
  );
};

export default CheckoutPage;
