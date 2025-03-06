import DesignCalculationHeader from "../components/DesignCalculationHeader";
import DesignCalculationSidebar from "../components/DesignCalculationSidebar";
import DrawingBoard from "../components/DrawingBoard";

export default function InitialSetup() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <DesignCalculationHeader />
      <DesignCalculationSidebar />
      <DrawingBoard />
    </div>
  );
}
