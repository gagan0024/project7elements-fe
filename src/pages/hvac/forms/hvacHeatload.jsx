import React from "react";
import DesignCalculationHeader from "../DesignCalculationHeader";
import DesignCalculationSidebar from "../DesignCalculationSidebar";
import HeatLoad from "./HeatLoad";

const Hvacheat = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <DesignCalculationHeader />
      <DesignCalculationSidebar />

      {/* <Route path="/hvac" element={<Hvac />} /> */}
      <HeatLoad />

      {/* Add more routes as needed */}
    </div>
  );
};

export default Hvacheat;
