import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

const ContactLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ContactLayout;
