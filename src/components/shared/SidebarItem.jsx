import React from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({ image, title, route }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(route);
  };
  return (
    <div className="p-1">
      <div
        className="flex gap-2 p-2 items-center hover:bg-blue-500 rounded-sm text-sm text-gray-800 hover:text-white"
        onClick={handleNavigate}
      >
        <img
          src={image}
          alt={title}
          className="h-4 w-4 filter brightness-0 hover:invert"
        />
        <div className="">{title}</div>
      </div>
    </div>
  );
}
