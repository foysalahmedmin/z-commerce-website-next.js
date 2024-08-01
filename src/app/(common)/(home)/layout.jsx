import Header from "@/components/partials/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
