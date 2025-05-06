import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Integration from "@/component/common/Integration";
import TryFree from "@/component/common/TryFree";
import DesignCalBanner from "@/component/page/DesignCalBanner";
import DesignFeatured from "@/component/page/DesignFeatured";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <DesignCalBanner />
      <TryFree />
      <DesignFeatured />
      <Integration />
      <Footer />
    </div>
  );
};

export default page;
