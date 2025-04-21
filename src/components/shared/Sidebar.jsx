import React from "react";
import { advanced, ai_tools } from "../../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function SideBar() {
  const freeFreatures = ai_tools;
  const paidFeatures = advanced;
  return (
    <div className="w-[20%] min-h-screen flex flex-col border-r border-gray-300 overflow-y-auto">
      <div className="flex gap-2 items-center p-4 border-b border-gray-300">
        <img src="/images/designDraft.svg" alt="Design Draft Logo" />
        <div className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Design Draft
        </div>
      </div>
      <div className="border-b border-gray-300 pb-4">
        <div className="py-2">
          <SidebarItem
            image="/svg/home.svg"
            title="Home"
            route={"/dashboard"}
          />
        </div>
        <div className="">
          <div className="p-2 text-gray-500 text-sm">AI Tools</div>

          {freeFreatures.map((features) => (
            <SidebarItem
              key={features.title}
              image={features.image}
              title={features.title}
              route={features.route}
            />
          ))}
        </div>
        <div className="">
          <div className="p-2 text-gray-500 text-sm">Advanced</div>
          {paidFeatures.map((features) => (
            <SidebarItem
              key={features.title}
              image={features.image}
              title={features.title}
              route={features.route}
            />
          ))}
        </div>
      </div>
      <div className="py-2">
        <SidebarItem
          image="/svg/settings.svg"
          title="Settings"
          route={"/settings"}
        />
        <SidebarItem image="/svg/wallet.svg" title="Wallet" route={"/wallet"} />
      </div>
      <div className="p-2">
        <div className="p-2 flex items-center justify-between bg-gray-200 rounded">
          <div className="flex items-center gap-2">
            <img
              src="/images/user.png"
              alt="User Image"
              className="h-8 w-8 rounded-full"
            />
            <div className="">User</div>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
