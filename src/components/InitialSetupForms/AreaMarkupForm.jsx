import { useEffect, useState } from "react";
import Plus from "../../../public/icons/Plus";
import Reset from "../../../public/icons/Reset";
import { useDispatch, useSelector } from "react-redux";
import {
  SetBuildingHeight,
  SetStoreys,
} from "../../redux/features/project/projectSlice";

export default function AreaMarkupForm() {
  const [buildingHeight, setBuildingHeight] = useState();
  const [storey, setStorey] = useState();

  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.building_height);
  useEffect(() => {
    dispatch(SetBuildingHeight(buildingHeight));
    dispatch(SetStoreys(storey));
  }, [buildingHeight, storey]);
  return (
    <div className="p-4 flex flex-col w-full">
      <div className="flex justify-between border-b border-gray-300 pb-2">
        <div>
          <div className="font-bold text-gray-800">Area Markup</div>
          <div className="text-gray-500">Updated: Just now</div>
        </div>
        <Reset className="bg-blue-500 h-10 w-10 text-white p-2 rounded-md" />
      </div>
      <div className="my-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-800 font-bold text-sm">
            Add new building
          </div>
          <Plus className="h-8 w-8 text-gray-500 bg-gray-100 p-2" />
        </div>
        <input
          type="text"
          placeholder="Building 1"
          className="bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <div className="flex flex-col gap-4">
          <div className="text-gray-800 font-bold text-sm">No. of storeys </div>
          <input
            type="number"
            min="0"
            step="any"
            value={storey}
            onBlur={(e) => setStorey(e.target.value)}
            placeholder="10"
            className="bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-gray-800 font-bold text-sm">Building Height</div>
          <input
            type="number"
            min="0"
            step="any"
            value={buildingHeight}
            placeholder="30"
            onBlur={(e) => setBuildingHeight(e.target.value)}
            className="bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
