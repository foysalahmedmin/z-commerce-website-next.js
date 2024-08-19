import ContactAddress from "./ContactAddress";
import ContactFormSection from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
          <div className="w-full rounded-md bg-card p-6 shadow md:p-8 lg:max-w-sm">
            <ContactAddress />
          </div>
          <div className="flex-1 rounded-md bg-card p-6 shadow md:p-8">
            <ContactFormSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
