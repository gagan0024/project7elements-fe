import React, { useState } from "react";
import TopBarSecondary from "../components/TopBarSecondary";

// Content Components
import HeadLossForm from "../components/fireFight/HeadLossForm";
import FirePumpPage from "../components/fireFight/FirePumpPage";

import SidebarFireFight from "../components/fireFight/SidebarFireFight";
import RightModal from "../components/shared/RightModal";

export default function FireFightPage() {
  const [activeSection, setActiveSection] = useState("head-loss");
  const [data, setData] = useState();

  const renderContent = () => {
    switch (activeSection) {
      case "head-loss":
        return <HeadLossForm setData={setData} />;
      case "fire-pump":
        return <FirePumpPage />;
      default:
        return <HeadLossForm />;
    }
  };

  return (
    <div className=" bg-[#f8f9fb]">
      {/* <TopBarPrimary /> */}
      <TopBarSecondary />
      <div className="flex h-[calc(100vh-75px)] overflow-hidden">
        <SidebarFireFight
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex p-4 overflow-y-auto">{renderContent()}</div>
        {data && (
          <RightModal>
            <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
              Pressure Loss Info
            </div>
            <div className="flex flex-col gap-4 py-8 px-4">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-gray-600 text-sm">
                  Pressure Loss Per Meter Length of Pipe
                </div>
                <div className="border border-gray-300 p-2 rounded bg-gray-100">
                  {data.pressureLossPerMeterBar}
                </div>
              </div>
              <div className="flex-col gap">
                <div className="font-semibold text-gray-600 text-sm">
                  Pressure Loss of Total Length of Pipe
                </div>
                <div className="border border-gray-300 p-2 rounded bg-gray-100">
                  {data.pressureLossTotalMeter}
                </div>
              </div>
              <div className="flex-col">
                <div className="font-semibold text-gray-600 text-sm">
                  Total Pressure loss
                </div>
                <div className="border border-gray-300 p-2 rounded bg-gray-100">
                  {data.pressureLossTotalBar}
                </div>
              </div>
            </div>
          </RightModal>
        )}
      </div>
    </div>
  );
}
