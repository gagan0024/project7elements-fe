import React, { useState } from "react";
import { ReloadIcon } from "../../icons/ReloadIcon";

const InputRow = ({ label, unit, value, onChange }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <div className="flex gap-[8px]">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-1/2 h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border  border-gray-200  focus:outline-none focus:border-[#0083EE] bg-gray-200 hover:border-gray-400"
      />
      {unit && (
        <select className="w-1/2 h-[36px] text-[13px] px-2 rounded-[6px] text-[#374151] border border-gray-200  focus:outline-none focus:border-[#0083EE] bg-gray-200 hover:border-gray-400">
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
      className="w-full h-[36px] text-[13px] px-3 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] focus:ring-0 hover:border-gray-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const FirePumpPage = () => {
  const [pumpType, setPumpType] = useState("Sprinkler Pump");
  const [pdArea, setPdArea] = useState(646);
  const [buildingHeight, setBuildingHeight] = useState(646);
  const [residualHead, setResidualHead] = useState(1000);
  const [frictionLoss, setFrictionLoss] = useState(1000);
  const [pipeMaterial, setPipeMaterial] = useState("GI");
  const [pressure, setPressure] = useState(1833);
  const [flow, setFlow] = useState(2167.5);
  const [totalHead, setTotalHead] = useState(50);
  const [efficiency, setEfficiency] = useState(70);

  const handleCalculate = () => {
    alert("Calculating Fire Pump...");
  };

  return (
    <div className="w-[340px] h-full flex flex-col bg-white border border-[#E5E7EB] rounded-lg overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-3 pb-2 border-b border-[#E5E7EB] ">
        <div>
          <h2 className="text-[14px] font-semibold text-[#111827] leading-none">
            Fire Pump Sizing
          </h2>
          <p className="text-[11px] text-[#9CA3AF] mt-[4px]">
            Enter pump details
          </p>
        </div>
        <button
          className="w-[24px] h-[24px]  bg-[#0083EE] text-white rounded-md flex items-center justify-center hover:bg-[#1C78DC] transition"
          onClick={() => console.log("Reload clicked")}
        >
          <ReloadIcon className="w-[16px] h-[16px] stroke-white" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-[80px] bg-white overflow-hidden">
        <SelectRow
          label="Select Pump Type"
          value={pumpType}
          onChange={setPumpType}
          options={["Sprinkler Pump", "Jockey Pump", "Main Pump"]}
        />
        <InputRow
          label="Total PD Area"
          unit="m²"
          value={pdArea}
          onChange={setPdArea}
        />
        <InputRow
          label="Building Height"
          unit="m"
          value={buildingHeight}
          onChange={setBuildingHeight}
        />
        <InputRow
          label="Residual Head"
          unit="m"
          value={residualHead}
          onChange={setResidualHead}
        />
        <InputRow
          label="Friction Loss"
          unit="m"
          value={frictionLoss}
          onChange={setFrictionLoss}
        />
        <SelectRow
          label="Pipe Material"
          value={pipeMaterial}
          onChange={setPipeMaterial}
          options={["GI", "CI", "PVC"]}
        />
        <InputRow
          label="Pressure"
          unit="Bar"
          value={pressure}
          onChange={setPressure}
        />
        <InputRow label="Flow" unit="m³/s" value={flow} onChange={setFlow} />
        <InputRow
          label="Total Head"
          unit="m"
          value={totalHead}
          onChange={setTotalHead}
        />
        <InputRow
          label="Efficiency"
          unit="%"
          value={efficiency}
          onChange={setEfficiency}
        />
      </div>

      {/* Fixed Bottom Button */}
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

export default FirePumpPage;
