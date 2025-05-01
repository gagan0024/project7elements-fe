import React, { useState } from "react";
import { ReloadIcon } from "../../icons/ReloadIcon";

// Reusable Components
const InputRow = ({ label, unit, value, onChange }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <div className="flex gap-[8px]">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-1/2 h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE]"
      />
      {unit && (
        <select className="w-1/2 h-[36px] text-[13px] px-2 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE]">
          <option>{unit}</option>
        </select>
      )}
    </div>
  </div>
);

const SelectRow = ({ label, value, onChange, options }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[36px] text-[13px] px-3 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE]"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const WaterSupplyPipesForm = () => {
  const [room, setRoom] = useState("Select");
  const [wc, setWc] = useState(0);
  const [wb, setWb] = useState(0);
  const [urinal, setUrinal] = useState(0);
  const [shower, setShower] = useState(0);
  const [tap, setTap] = useState(0);
  const [fixtureUnit, setFixtureUnit] = useState(0);
  const [flowRate, setFlowRate] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [material, setMaterial] = useState("Select");

  const handleCalculate = () => {
    alert("Calculating Water Supply Pipe Results...");
  };

  return (
    <div className="w-[340px] h-full flex flex-col bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-3 pb-2 border-b border-[#E5E7EB]">
        <div>
          <h2 className="text-[14px] font-semibold text-[#111827] leading-none">
            Water Supply Pipes
          </h2>
          <p className="text-[11px] text-[#9CA3AF] mt-[4px]">No update yet</p>
        </div>
        <button
          className="w-[24px] h-[24px] bg-[#0083EE] text-white rounded-md flex items-center justify-center hover:bg-[#1C78DC] transition"
          onClick={() => console.log("Reload clicked")}
        >
          <ReloadIcon className="w-[16px] h-[16px] stroke-white" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-[80px] bg-white">
        <SelectRow
          label="Select Room"
          value={room}
          onChange={setRoom}
          options={["Select", "Bathroom", "Kitchen", "Toilet"]}
        />
        <InputRow 
          label="Number of WC" 
          unit="Nos" 
          value={wc} 
          onChange={setWc} 
        />
        <InputRow 
          label="Number of WB" 
          unit="Nos" 
          value={wb} 
          onChange={setWb} 
        />
        <InputRow 
          label="Number of Urinal" 
          unit="Nos" 
          value={urinal} 
          onChange={setUrinal} 
        />
        <InputRow 
          label="Number of Shower" 
          unit="Nos" 
          value={shower} 
          onChange={setShower} 
        />
        <InputRow 
          label="Number of Tap" 
          unit="Nos" 
          value={tap} 
          onChange={setTap} 
        />
        <InputRow 
          label="Total Fixture Unit" 
          unit="FU" 
          value={fixtureUnit} 
          onChange={setFixtureUnit} 
        />
        <InputRow 
          label="Flow Rate Q" 
          unit="m³/s" 
          value={flowRate} 
          onChange={setFlowRate} 
        />
        <InputRow 
          label="Velocity" 
          unit="m/s" 
          value={velocity} 
          onChange={setVelocity} 
        />
        <SelectRow
          label="Pipe Material"
          value={material}
          onChange={setMaterial}
          options={["Select", "PVC", "GI", "HDPE"]}
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

export default WaterSupplyPipesForm;
