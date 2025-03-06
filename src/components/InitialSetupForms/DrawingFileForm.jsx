import { useEffect, useState } from "react";
import Reset from "../../../public/icons/Reset";
import Upload from "../../../public/icons/Upload";
import AngleCircle from "../../../public/icons/AngleCircle";
import { useDispatch, useSelector } from "react-redux";
import { SetScale } from "../../redux/features/project/projectSlice";

export default function DrawingFileForm() {
  const [scale, setScale] = useState("");
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.scale);
  useEffect(() => {
    dispatch(SetScale(scale));
    console.log(scale);
  }, [scale]);
  return (
    <div className="p-4 flex flex-col w-full">
      <div className="flex justify-between border-b border-gray-300 pb-2">
        <div>
          <div className="font-bold text-gray-800">Drawing File</div>
          <div className="text-gray-500">Updated: Just now</div>
        </div>
        <Reset className="bg-blue-500 h-10 w-10 text-white p-2 rounded-md" />
      </div>
      <div className="my-4 flex flex-col gap-2">
        <div className="text-sm font-semibold">Uploaded file</div>
        <div className="flex gap-2 justify-center items-center">
          <div className="w-full flex justify-between bg-gray-100 items-center p-2 rounded-sm">
            <div className="flex gap-2">
              <img src="/images/document.png" className="h-6 w-6" />
              <div className="text-gray-600">Drawing file 1</div>
            </div>
            <Reset className="h-10 w-10 text-gray-600 p-2 rounded-md" />
          </div>
          <Upload className="text-gray-500 h-14 w-14 p-3 bg-gray-100 rounded-sm" />
        </div>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <div className="text-sm font-semibold">Set Scale</div>
        <div className="relative">
          <select
            className="w-full border-none px-2 py-2 border rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Meter">Meter</option>
            <option value="Inches">Inches</option>
            <option value="Feet">Feet</option>
            <option value="Square Yards">Square Yards</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-2">
        <div className="text-sm font-semibold">Positioning</div>
        <div className="border border-gray-300 rounded p-2">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-xs text-gray-500">
              Coordinate System
            </div>
            <div className="relative">
              <select
                className="w-full border-none px-2 py-2 border rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
              >
                <option value="">User Defined</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="font-bold text-xs text-gray-500">Position</div>
            <div className="flex gap-2">
              <div className="relative">
                <label className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-100 px-1 text-gray-500 text-sm">
                  X
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-100 rounded-md p-2 pl-8 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className="relative">
                <label className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-100 px-1 text-gray-500 text-sm">
                  Y
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-100 rounded-md p-2 pl-8 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className="relative">
                <label className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-100 px-1 text-gray-500 text-sm">
                  Z
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-100 rounded-md p-2 pl-8 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
            <div className="font-bold text-xs text-gray-500">Rotation</div>
            <div className="relative">
              <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-100 px-1 text-gray-500 text-sm">
                <AngleCircle className="text-gray-600 h-4 w-4" />
              </div>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-100 rounded-md p-2 pl-8 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-2 my-2">
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="window" />
          <label htmlFor="window" className="text-gray-800">
            Window
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="door" />
          <label htmlFor="door" className="text-gray-800">
            Door
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="wall" />
          <label htmlFor="wall" className="text-gray-800">
            Wall
          </label>
        </div>
      </div>
    </div>
  );
}
