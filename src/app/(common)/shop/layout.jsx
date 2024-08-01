import Header from "@/components/partials/Header";

const ShopLayout = ({ children }) => {
  return (
    <main>
      <aside></aside>
      <div>
        <Header navigationClassName="px-container" />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default ShopLayout;
