import React, { useState } from "react";
import { ReloadIcon } from "../../icons/ReloadIcon";

// Reusable InputRow
const InputRow = ({ label, unit, value, onChange, disabled = false }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <div className="flex gap-[8px]">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-1/2 h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
        placeholder={label}
      />
      {unit && (
        <select
          className="w-1/2 h-[36px] text-[13px] px-2 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
          disabled
        >
          <option>{unit}</option>
        </select>
      )}
    </div>
  </div>
);

const InputRow1 = ({ label, unit, value, onChange, disabled = false }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <div className="flex gap-[8px]">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="flex-1 h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
        placeholder={label}
      />
      {unit && (
        <select
          className="w-1/2 h-[36px] text-[13px] px-2 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
          disabled
        >
          <option>{unit}</option>
        </select>
      )}
    </div>
  </div>
);

// Reusable SelectRow
const SelectRow = ({ label, value, onChange, options }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-[#6B7280] mb-[6px]">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[36px] text-[13px] px-3 rounded-[6px] text-[#374151] border border-gray-200 bg-gray-200 focus:outline-none focus:border-[#0083EE] hover:border-gray-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const PlumbingPumpForm = () => {
  const [building, setBuilding] = useState("Metro Station");
  const [totalWaterDemand, setTotalWaterDemand] = useState("");
  const [fillingTime, setFillingTime] = useState("");
  const [buildingHeight, setBuildingHeight] = useState("");
  const [flowRate, setFlowRate] = useState("");
  const [pipeMaterial, setPipeMaterial] = useState("Select");
  const [frictionLoss, setFrictionLoss] = useState("");
  const [pipeDiameter, setPipeDiameter] = useState("Select");
  const [residualPressure, setResidualPressure] = useState("");
  const [pressureLoss, setPressureLoss] = useState("");
  const [totalHead, setTotalHead] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [fillingTimeUnit] = useState("Hour");

  const handleCalculate = () => {
    alert("Calculating Plumbing Pump...");
  };

  return (
    <div className="w-[340px] h-full flex flex-col bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-3 pb-2 border-b border-[#E5E7EB]">
        <div>
          <h2 className="text-[14px] font-semibold text-[#111827] leading-none">
            Plumbing Pump
          </h2>
          <p className="text-[11px] text-[#9CA3AF] mt-[4px]">No update yet</p>
        </div>
        <button
          className="w-[24px] h-[24px] bg-[#2E90FA] text-white rounded-md flex items-center justify-center hover:bg-[#1C78DC] transition"
          onClick={() => console.log("Reload clicked")}
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
          options={["Metro Station"]}
        />
        <InputRow1
          label="Total Water Demand"
          value={totalWaterDemand}
          onChange={setTotalWaterDemand}
        />
        <InputRow
          label="Filling Time"
          unit={fillingTimeUnit}
          value={fillingTime}
          onChange={setFillingTime}
        />
        <InputRow
          label="Building Height"
          unit="m"
          value={buildingHeight}
          onChange={setBuildingHeight}
        />
        <InputRow
          label="Flow Rate Q"
          unit="m³/s"
          value={flowRate}
          onChange={setFlowRate}
        />
        <SelectRow
          label="Pipe Material"
          value={pipeMaterial}
          onChange={setPipeMaterial}
          options={["Select", "GI", "CI", "PVC"]}
        />
        <InputRow
          label="Friction Loss Coefficient"
          unit="m"
          value={frictionLoss}
          onChange={setFrictionLoss}
        />
        <SelectRow
          label="Pipe Diameter"
          value={pipeDiameter}
          onChange={setPipeDiameter}
          options={["Select", "100mm", "150mm", "200mm"]}
        />
        <InputRow
          label="Residual Pressure"
          unit="Bar"
          value={residualPressure}
          onChange={setResidualPressure}
        />
        <InputRow
          label="Pressure Loss"
          unit="Bar"
          value={pressureLoss}
          onChange={setPressureLoss}
        />
        <InputRow
          label="Total Head"
          unit="m"
          value={totalHead}
          onChange={setTotalHead}
        />
        <InputRow1
          label="Efficiency"
          value={efficiency}
          onChange={setEfficiency}
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

export default PlumbingPumpForm;
