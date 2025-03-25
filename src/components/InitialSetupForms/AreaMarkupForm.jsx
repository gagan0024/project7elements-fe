import { useEffect, useState } from "react";
import Plus from "../../../public/icons/Plus";
import Reset from "../../../public/icons/Reset";
import { useDispatch, useSelector } from "react-redux";
import {
  SetBuildingHeight,
  SetStoreys,
} from "../../redux/features/project/projectSlice";
import DottedSquare from "../../../public/icons/DottedSquare";
import DottedCircle from "../../../public/icons/DottedCircle";
import DottedRandomShape from "../../../public/icons/DottedRandomShape";
import RoomDetailsModal from "../modals/RoomDetailsModal";

export default function AreaMarkupForm() {
  const [buildingHeight, setBuildingHeight] = useState();
  const [storey, setStorey] = useState();
  const [mode, setMode] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState();
  const rooms = JSON.parse(localStorage.getItem("rooms"));

  useEffect(() => {
    localStorage.setItem("mode", mode);
    window.dispatchEvent(
      new CustomEvent("localStorageUpdated", { detail: mode })
    );
  }, [mode]);

  // const handleRoomDetail = (val) => {
  //   setCurrentRoom(val);
  //   setIsOpen(true);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetBuildingHeight(buildingHeight));
    dispatch(SetStoreys(storey));
  }, [buildingHeight, storey]);
  return (
    <>
      {/* {isOpen && <RoomDetailsModal close={setIsOpen} val={currentRoom} />} */}

      <div className="p-4 flex flex-col w-full min-h-full overflow-y-auto">
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <div>
            <div className="font-bold text-gray-800">Area Markup</div>
            <div className="text-gray-500">Updated: Just now</div>
          </div>
          <Reset className="bg-blue-500 h-10 w-10 text-white p-2 rounded-md" />
        </div>
        <div className="my-4 flex flex-col gap-4 h-full">
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
            <div className="text-gray-800 font-bold text-sm">
              No. of storeys{" "}
            </div>
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
            <div className="text-gray-800 font-bold text-sm">
              Building Height
            </div>
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
        <div className="border-t border-gray-500 pt-4">
          <div className="text-gray-800 font-bold text-sm">Add Rooms</div>
          <div className="flex justify-between gap-2 mt-4">
            <div
              className={`${
                mode === "rectangle" ? "bg-blue-500" : "bg-gray-100"
              } p-2 w-full flex justify-center rounded-lg`}
              onClick={() => setMode("rectangle")}
            >
              <DottedSquare className="bg-white h-6 w-6" />
            </div>
            <div
              className={`${
                mode === "circle" ? "bg-blue-500" : "bg-gray-100"
              } p-2 w-full flex justify-center rounded-lg`}
              onClick={() => setMode("circle")}
            >
              <DottedCircle className="bg-white h-6 w-6" />
            </div>
            <div
              className={`${
                mode === "line" ? "bg-blue-500" : "bg-gray-100"
              } p-2 w-full flex justify-center rounded-lg`}
              onClick={() => setMode("line")}
            >
              <DottedRandomShape className="bg-white h-6 w-6" />
            </div>
          </div>
        </div>
        {rooms && (
          <div className="flex flex-col gap-2 pt-4">
            <div className="text-gray-800 font-bold text-sm">Rooms</div>
            {rooms.map((room) => (
              <div
                className="bg-gray-100 p-4 font-bold rounded-lg flex gap-2"
                key={room.name}
              >
                <div>{room.name}</div>
                <div className="text-blue-500">{`area ${room.area}`}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
