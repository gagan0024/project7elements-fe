import React, { useState } from "react";
import Upload from "../../../public/icons/Upload";

export default function NewProjectModal({ close }) {
  const [filename, setFilename] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.name.endsWith(".dxf")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        localStorage.setItem("uploadedDXF", e.target.result);
        setFilename(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("File not uploaded");
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => close(false)}
    >
      <div
        className="bg-white w-[50%] p-6 rounded-lg shadow-lg flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-2xl text-gray-900">Working on a new project?</div>
        <form className="flex flex-col gap-4">
          <div className="flex w-full gap-2">
            <input
              type="text"
              className="bg-gray-100 w-full p-2 text-sm rounded border border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
              placeholder="Project Name"
            />
            <button className="inline p-2 text-xs bg-blue-500 font-semibold text-white whitespace-nowrap rounded">
              Add Project
            </button>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="bg-gray-100 p-2 text-sm rounded border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label>Building Type</label>
              <select
                name="type"
                className="bg-gray-100 p-2 text-sm rounded border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
              >
                <option disabled selected hidden>
                  Select
                </option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label>Sub Building Type</label>
              <select
                name="type"
                className="bg-gray-100 p-2 text-sm rounded border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
              >
                <option disabled selected hidden>
                  Select
                </option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label>Level/Floor Count</label>
              <select
                name="type"
                className="bg-gray-100 p-2 text-sm rounded border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
              >
                <option disabled selected hidden>
                  Select
                </option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="file-upload"
              className="cursor-pointer p-2 border border-gray-300 rounded hover:border-gray-400 transition duration-200 flex justify-between items-center"
            >
              {filename !== "" ? (
                <div>{filename}</div>
              ) : (
                <>
                  <div className="flex gap-2 items-center">
                    <img src="/images/document.png" />
                    <div className="text-gray-900 text-sm">Upload File</div>
                  </div>
                  <Upload className="h-4 w-4" />
                </>
              )}
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".dxf"
              className="hidden"
              onChange={handleUpload}
            />
            <div className="text-gray-500 text-xs px-2">File format: DXF</div>
          </div>
        </form>
      </div>
    </div>
  );
}
