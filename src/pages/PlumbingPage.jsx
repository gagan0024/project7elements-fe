import React, { useState } from "react";
import TopBarSecondary from "../components/TopBarSecondary";

// Content Components

import WaterDemandForm from "../components/plumbing/WaterDemandForm";
import SidebarPlumbing from "../components/plumbing/SidebarPlumbing";
import HeadLossForm from "../components/fireFight/HeadLossForm";
import WaterSupplyPipesForm from "../components/plumbing/WaterSupplyPipesForm";
import DrainagePipesForm from "../components/plumbing/DrainagePipesForm";
import PlumbingPumpForm from "../components/plumbing/PlumbingPumpForm";

export default function PlumbingPage() {
  const [activeSection, setActiveSection] = useState("water-demand"); // Default

  const renderContent = () => {
    switch (activeSection) {
      case "water-demand":
        return <WaterDemandForm />;
      case "water-supply":
        return <WaterSupplyPipesForm />;
      case "drainage-pipe":
        return <DrainagePipesForm />;

      case "head-loss":
        return <HeadLossForm />;
      case "plumbing-pump":
        return <PlumbingPumpForm />;

      default:
        return <WaterDemandForm />;
    }
  };

  return (
    <div className=" bg-[#f8f9fb]">
      <TopBarSecondary />
      <div className="flex h-[calc(100vh-75px)] overflow-hidden">
        <SidebarPlumbing
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex p-4 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
}
