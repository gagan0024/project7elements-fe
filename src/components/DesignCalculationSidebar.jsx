import { useState } from "react";
import AreaMarkupIcon from "/public/icons/AreaMarkupIcon";
import AssignMaterialIcon from "/public/icons/AssignMaterialIcon";
import DoorWindowIcon from "/public/icons/DoorWindowIcon";
import FileUploadIcon from "/public/icons/FileUploadIcon";
import DrawingFileForm from "./InitialSetupForms/DrawingFileForm";
import AreaMarkupForm from "./InitialSetupForms/AreaMarkupForm";
import DoorWindowMarkupForm from "./InitialSetupForms/DoorWindowMarkupForm";
import AssignMaterialForm from "./InitialSetupForms/AssignMaterialForm";

export default function DesignCalculationSidebar() {
  const [nav, setNav] = useState("drawing-file");
  return (
    <div className="h-[88vh] w-[50vh] p-2 fixed bottom-0">
      <div className="h-full w-full flex gap-2">
        <div className="bg-white w-[20%] rounded-md flex flex-col gap-4 items-center p-4">
          <div
            onClick={() => setNav("drawing-file")}
            className={`${
              nav === "drawing-file" ? "text-white" : "text-gray-500"
            } `}
          >
            <FileUploadIcon
              className={` h-12 w-12  p-2 rounded cursor-pointer${
                nav === "drawing-file"
                  ? " bg-blue-500"
                  : " hover:text-white hover:bg-blue-500"
              }`}
            />
          </div>
          <div
            onClick={() => setNav("area-markup")}
            className={`${
              nav === "area-markup" ? "text-white" : "text-gray-500"
            }`}
          >
            <AreaMarkupIcon
              className={` h-12 w-12  p-2 rounded cursor-pointer${
                nav === "area-markup"
                  ? " bg-blue-500"
                  : " hover:text-white hover:bg-blue-500"
              }`}
            />
          </div>
          <div
            onClick={() => setNav("door-window-markup")}
            className={`${
              nav === "door-window-markup" ? "text-white" : "text-gray-500"
            }`}
          >
            <DoorWindowIcon
              className={` h-12 w-12  p-2 rounded cursor-pointer${
                nav === "door-window-markup"
                  ? " bg-blue-500"
                  : " hover:text-white hover:bg-blue-500"
              }`}
            />
          </div>
          <div
            onClick={() => setNav("assign-material")}
            className={`${
              nav === "assign-material" ? "text-white" : "text-gray-500"
            }`}
          >
            <AssignMaterialIcon
              className={` h-12 w-12  p-2 rounded cursor-pointer${
                nav === "assign-material"
                  ? " bg-blue-500"
                  : " hover:text-white hover:bg-blue-500"
              }`}
            />
          </div>
        </div>
        <div className="bg-white w-[80%] rounded-md">
          {nav === "drawing-file" && <DrawingFileForm />}
          {nav === "area-markup" && <AreaMarkupForm />}
          {nav === "door-window-markup" && <DoorWindowMarkupForm />}
          {nav === "assign-material" && <AssignMaterialForm />}
        </div>
      </div>
    </div>
  );
}
