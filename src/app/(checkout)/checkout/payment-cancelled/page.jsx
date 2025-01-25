import { X } from "lucide-react";

const PaymentCancelledPage = () => {
  return (
    <main className="bg-muted bg-cover bg-fixed bg-center bg-no-repeat">
      <section className="px-container grid min-h-screen-minus-header place-items-center bg-background/50 py-12 backdrop-blur">
        <div className="h-fit w-fit">
          <div className="w-full rounded-2xl bg-card px-6 py-12 text-base md:w-[32em] md:px-8 md:py-16 lg:py-24">
            <div className="space-y-8 text-center md:space-y-12">
              <div className="relative mx-auto size-60 rounded-full bg-[#DF313B]/10 p-5">
                <div className="relative size-full rounded-full bg-[#DF313B]/10 p-5">
                  <div className="size-full rounded-full bg-[#DF313B]/10 p-5">
                    <div className="relative z-10 grid size-full place-items-center rounded-full bg-[#DF313B] p-4 text-card">
                      <X className="size-14" strokeWidth={1} />
                    </div>
                  </div>
                </div>
                <span className="absolute inset-0 m-auto inline-flex size-1/2 animate-ping rounded-full bg-[#DF313B] opacity-75" />
              </div>
              <div className="space-y-4 text-center">
                <h1 className="font-se font-roboto">Payment Cancelled</h1>
                <p className="text-xl font-medium text-title/85">
                  Sorry ! Your payment Cancelled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentCancelledPage;
