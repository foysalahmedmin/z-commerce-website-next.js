import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AboutLayout;
