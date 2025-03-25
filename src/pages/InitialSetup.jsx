import { useEffect, useState } from "react";
import DesignCalculationHeader from "../components/DesignCalculationHeader";
import DesignCalculationSidebar from "../components/DesignCalculationSidebar";
import DrawingBoard from "../components/DrawingBoard";
import OBJFileRenderer from "../components/OBJFileRenderer";

export default function InitialSetup() {
  const [file, setFile] = useState();
  useEffect(() => {
    const currentFile = localStorage.getItem("uploadedOBJ");
    setFile(currentFile);
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-200">
      <DesignCalculationHeader />
      <DesignCalculationSidebar />
      {console.log(file)}
      {file ? <OBJFileRenderer /> : <DrawingBoard />}
    </div>
  );
}
