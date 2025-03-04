import { useState } from "react";
import Reset from "../../../public/icons/Reset";
import Upload from "../../../public/icons/Upload";

export default function DrawingFileForm() {
  const [scale, setScale] = useState();
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
    </div>
  );
}
