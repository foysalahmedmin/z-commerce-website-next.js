import Header from "@/components/partials/Header";

const ShopLayout = ({ children }) => {
  return (
    <>
      <Header navigationClassName="px-container" />
      <main>
        <aside></aside>
        <div>{children}</div>
      </main>
    </>
  );
};

export default ShopLayout;
