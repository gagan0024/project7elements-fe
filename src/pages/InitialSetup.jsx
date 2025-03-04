import DesignCalculationHeader from "../components/DesignCalculationHeader";
import DesignCalculationSidebar from "../components/DesignCalculationSidebar";

export default function InitialSetup() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <DesignCalculationHeader />
      <DesignCalculationSidebar />
      <div>hi</div>
    </div>
  );
}
