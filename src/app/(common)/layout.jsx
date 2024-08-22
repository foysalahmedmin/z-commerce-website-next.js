import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
