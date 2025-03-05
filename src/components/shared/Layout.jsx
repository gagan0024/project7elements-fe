import React from "react";
import SideBar from "./Sidebar";
export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="w-[80%] overflow-y-auto h-screen p-4 bg-gray-200">
        {children}
      </div>
    </div>
  );
}
