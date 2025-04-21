import React from "react";
import DesignCalculationHeader from "../DesignCalculationHeader";
import DesignCalculationSidebar from "../DesignCalculationSidebar";
import Ventilation from "./Ventilation";

const Hvacvent = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <DesignCalculationHeader />
      <DesignCalculationSidebar />

      {/* <Route path="/hvac" element={<Hvac />} /> */}
      <Ventilation />

      {/* Add more routes as needed */}
    </div>
  );
};

export default Hvacvent;
