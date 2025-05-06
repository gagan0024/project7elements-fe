import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Integration from "@/component/common/Integration";
import TryFree from "@/component/common/TryFree";
import DrawingBanner from "@/component/page/DrawingBanner";
import DrawingProcess from "@/component/page/DrawingProcess";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <DrawingBanner />
      <TryFree />
      <DrawingProcess />
      <Integration />
      <Footer />
    </div>
  );
};

export default page;
