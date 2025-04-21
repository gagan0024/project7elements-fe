import BackArrow from "../../public/icons/BackArrow";
import ElectricalIcon from "../../public/icons/ElectricalIcon";
import FireFightIcon from "../../public/icons/FireFightIcon";
import ForwardArrow from "../../public/icons/ForwardArrow";
import HVACIcon from "../../public/icons/HVACIcon";
import InitialSetupIcon from "../../public/icons/InitialSetupIcon";
import PlumbingIcon from "../../public/icons/PlumbingIcon";

export default function DesignCalculationHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-6 py-2 items-end border-b border-gray-300">
        <div className="flex gap-2 justify-center items-center border p-2 border-gray-300 rounded-sm">
          <BackArrow color="stroke-gray-600" size="w-4 h-4" />
          <div className="font-semibold text-gray-600">Project Name</div>
        </div>
        <div className="flex gap-8 text-gray-500">
          <div>Initial Setup</div>
          <div>Electrical</div>
          <div>HVAC</div>
          <div>Fire Fight</div>
          <div>Plumbing</div>
        </div>
        <div className="bg-blue-500 text-white p-2 rounded-sm font-semibold">
          Save Project
        </div>
      </div>
      <div className="flex justify-between px-6 py-2 items-end border-b border-gray-300">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex bg-gray-200 justify-center items-center p-1 rounded">
            <BackArrow color="stroke-gray-600" size="w-6 h-6" />
          </div>
          <div className="flex bg-gray-200 justify-center items-center p-1 rounded">
            <ForwardArrow color="stroke-gray-600" size="w-6 h-6" />
          </div>
        </div>
        <div className="flex gap-16">
          <InitialSetupIcon color="stroke-gray-600" size="w-8 h-8" />
          <ElectricalIcon color="stroke-gray-600" size="w-8 h-8" />
          <HVACIcon color="stroke-gray-600" size="w-8 h-8" />
          <FireFightIcon color="stroke-gray-600" size="w-8 h-8" />
          <PlumbingIcon color="stroke-gray-600" size="w-8 h-8" />
        </div>
        <div className="text-white invisible cursor-none">Save</div>
      </div>
    </div>
  );
}
