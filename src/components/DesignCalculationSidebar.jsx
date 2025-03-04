import { useState } from "react";
import AreaMarkupIcon from "/public/icons/AreaMarkupIcon";
import AssignMaterialIcon from "/public/icons/AssignMaterialIcon";
import DoorWindowIcon from "/public/icons/DoorWindowIcon";
import FileUploadIcon from "/public/icons/FileUploadIcon";
import DrawingFileForm from "./InitialSetupForms/DrawingFileForm";
import AreaMarkupForm from "./InitialSetupForms/AreaMarkupForm";

export default function DesignCalculationSidebar() {
  const [nav, setNav] = useState("drawing-file");
  return (
    <div className="h-[88vh] w-[50vh] p-2 fixed bottom-0">
      <div className="h-full w-full flex gap-2">
        <div className="bg-white w-[20%] rounded-md flex flex-col gap-3 items-center p-4">
          <FileUploadIcon
            className={` h-12 w-12  p-2 rounded ${
              nav === "drawing-file"
                ? "text-white bg-blue-500"
                : "text-gray-500 hover:text-white hover:bg-blue-500"
            }`}
            onClick={() => setNav("drawing-file")}
          />
          <AreaMarkupIcon
            className={` h-12 w-12  p-2 rounded ${
              nav === "area-markup"
                ? "text-white bg-blue-500"
                : "text-gray-500 hover:text-white hover:bg-blue-500"
            }`}
            onClick={() => setNav("area-markup")}
          />
          <DoorWindowIcon
            className={` h-12 w-12  p-2 rounded ${
              nav === "door-window-markup"
                ? "text-white bg-blue-500"
                : "text-gray-500 hover:text-white hover:bg-blue-500"
            }`}
            onClick={() => setNav("door-window-markup")}
          />
          <AssignMaterialIcon
            className={` h-12 w-12  p-2 rounded ${
              nav === "assign-material"
                ? "text-white bg-blue-500"
                : "text-gray-500 hover:text-white hover:bg-blue-500"
            }`}
            onClick={() => setNav("assign-material")}
          />
        </div>
        <div className="bg-white w-[80%] rounded-md">
          {nav === "drawing-file" && <DrawingFileForm />}
          {nav === "area-markup" && <AreaMarkupForm />}
        </div>
      </div>
    </div>
  );
}
