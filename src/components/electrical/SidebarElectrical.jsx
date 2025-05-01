import React from "react";
import DialuxIcon from "../../icons/DialuxIcon";
import { DbDetailsIcon } from "../../icons/DbDetailsIcon";
import BreakerSizingIcon from "../../icons/BreakerSizingIcon";
import CableSizeIcon from "../../icons/CableSizeIcon";
import DropletIcon from "../../icons/DropletIcon";
import CalculationIcon from "../../icons/CalculationIcon";
import DocumentationIcon from "../../icons/DocumentationIcon";
import FileBckIcon from "../../icons/FileBckIcon";

function SidebarElectrical({ activeSection, setActiveSection }) {
  const sidebarItems = [
    { icon: <DialuxIcon />, id: "dialux" },
    { icon: <DbDetailsIcon />, id: "db-details" },
    { icon: <BreakerSizingIcon />, id: "breaker-sizing" },
    { icon: <CableSizeIcon />, id: "cable-size" },
    "divider",
    { icon: <DropletIcon />, id: "flow-setting" },
    { icon: <CalculationIcon />, id: "calculate" },
    { icon: <DocumentationIcon />, id: "docs" },
    { icon: <FileBckIcon />, id: "files" },
  ];

  return (
    <div className="h-full w-[64px] bg-white border-r border-[#E5E7EB] flex flex-col justify-between py-4">
      <div className="flex flex-col items-center gap-6 mt-2">
        {sidebarItems.map((item, index) =>
          item === "divider" ? (
            <div key={index} className="h-[1px] w-8 bg-[#E5E7EB] mt-15" />
          ) : (
            <div
              key={index}
              onClick={() => setActiveSection(item.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer transition
              ${
                activeSection === item.id
                  ? "bg-[#2E90FA] text-white"
                  : "text-[#6B7280] hover:bg-gray-200 "
              }`}
            >
              {item.icon}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SidebarElectrical;
