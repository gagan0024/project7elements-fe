import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Integration from "@/component/common/Integration";
import TryFree from "@/component/common/TryFree";
import ExtractBanner from "@/component/page/ExtractBanner";
import ExtractProcess from "@/component/page/ExtractProcess";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <ExtractBanner />
      <TryFree />
      <ExtractProcess />
      <Integration />
      <Footer />
    </div>
  );
};

export default page;
