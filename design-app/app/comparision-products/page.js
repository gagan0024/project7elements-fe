import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Integration from "@/component/common/Integration";
import TryFree from "@/component/common/TryFree";
import ProductsBanner from "@/component/page/ProductsBanner";
import ProductsProcess from "@/component/page/ProductsProcess";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <ProductsBanner />
      <TryFree />
      <ProductsProcess />
      <Integration />
      <Footer />
    </div>
  );
};

export default page;
