import React, { useState } from "react";
import { ReloadIcon } from "../../icons/ReloadIcon";

// Reusable InputRow without unit
const InputRow = ({ label, value, onChange }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border border-gray-200 focus:outline-none focus:border-[#0083EE] bg-gray-200 hover:border-gray-400"
    />
  </div>
);

const SelectRow = ({ label, value, onChange, options }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[36px] text-[13px] px-3 rounded-[6px] border border-gray-200 bg-gray-200 text-[#374151] focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const RWH = () => {
  const [building, setBuilding] = useState("Metro Station");

  const [area, setArea] = useState("3280");
  const [intensity, setIntensity] = useState("109");
  const [runOff, setRunOff] = useState("0.9");

  const [storageTime, setStorageTime] = useState("5");

  const handleCalculate = () => {
    alert("Form Data:...");
  };

  const handleReload = () => {
    console.log("Reload clicked");
  };

  return (
    <div className="w-[340px] h-full flex flex-col bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-3 pb-2 border-b border-[#E5E7EB]">
        <div>
          <h2 className="text-[14px] font-semibold text-[#111827] leading-none">
            Rainwater Dropping
          </h2>
          <p className="text-[11px] text-[#9CA3AF] mt-[4px]">No update yet</p>
        </div>
        <button
          className="w-[24px] h-[24px] bg-[#0083EE] text-white rounded-md flex items-center justify-center hover:bg-[#1C78DC] transition"
          onClick={handleReload}
        >
          <ReloadIcon className="w-[16px] h-[16px] stroke-white" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-[80px] bg-white">
        <SelectRow
          label="Select Building"
          value={building}
          onChange={setBuilding}
          options={["Metro Station", "Mall", "Office"]}
        />
        <InputRow label="Roof Area" value={area} onChange={setArea} />

        <InputRow
          label="Intensity of Rainfall"
          value={intensity}
          onChange={setIntensity}
        />
        <InputRow
          label="Run OffCoefficient"
          value={runOff}
          onChange={setRunOff}
        />
        <InputRow
          label="Storage Time Minutes"
          value={storageTime}
          onChange={setStorageTime}
        />
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-4 py-4">
        <button
          className="w-full h-[40px] bg-[#2E90FA] hover:bg-[#1C78DC] text-white text-[14px] font-semibold rounded-md transition"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default RWH;
