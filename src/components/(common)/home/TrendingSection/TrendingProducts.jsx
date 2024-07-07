"use client";

import Tabs from "@/components/ui/Tabs";
import { useEffect, useState } from "react";
import TrendingTabProducts from "./TrendingTabProducts";

// const tabs = [
//   {
//     label: "Fashion",
//     value: "fashion",
//   },
//   {
//     label: "Bags and Travel",
//     value: "bags-and-travel",
//   },
//   {
//     label: "Electronics",
//     value: "electronics",
//   },
// ];

const TrendingProducts = ({ products }) => {
  const [groupedProducts, setGroupProducts] = useState({});
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState({});

  useEffect(() => {
    if (products?.length) {
      const groupedProducts = products.reduce((acc, product) => {
        const { parentCategory } = product;
        if (!acc[parentCategory]) {
          acc[parentCategory] = [];
        }
        acc[parentCategory].push(product);
        return acc;
      }, {});

      const tabs = Object.keys(groupedProducts).map((item) => {
        return { label: item, value: item };
      });

      setGroupProducts(groupedProducts);
      setTabs(tabs);
      setSelectedTab(tabs[0]);
    }
  }, [products]);

  return (
    <>
      <div>
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={tabs}
        />
      </div>
      <div>
        {tabs.map((tab, i) => (
          <TrendingTabProducts
            key={i}
            tab={tab}
            selectedTab={selectedTab}
            products={groupedProducts[tab.value]}
          />
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
