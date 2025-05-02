import React, { useState } from "react";
import { ReloadIcon } from "../../icons/ReloadIcon";

// Reusable Components
const InputRow = ({ label, value, onChange, unit }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-gray-600 mb-[6px]">{label}</label>
    <div className="flex gap-2">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-1/2 h-[36px] px-3 text-[13px] rounded-[6px] text-[#374151] border border-gray-200 focus:outline-none bg-gray-200 focus:border-[#0083EE] hover:border-gray-400"
      />
      {unit && (
        <select
          className="w-1/2 h-[36px] text-[13px] px-2 rounded-[6px] text-[#374151] border border-gray-200 focus:outline-none bg-gray-200 focus:border-[#0083EE] hover:border-gray-400"
          disabled
        >
          <option>{unit}</option>
        </select>
      )}
    </div>
  </div>
);

const SelectRow = ({ label, value, onChange, options }) => (
  <div className="mb-[14px]">
    <label className="block text-[11px] text-gray-600 mb-[6px]">{label}</label>
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

const DrainagePipesForm = ({ setData }) => {
  const [room, setRoom] = useState("");
  const [wc, setWc] = useState(10);
  const [wb, setWb] = useState(10);
  const [urinal, setUrinal] = useState(10);
  const [shower, setShower] = useState(10);
  const [tap, setTap] = useState(10);
  const [fixtureUnit, setFixtureUnit] = useState(646);
  const [flowRate, setFlowRate] = useState(50);
  const [velocity, setVelocity] = useState(1.5);
  const [pipeMaterial, setPipeMaterial] = useState("");

  const handleCalculate = async () => {
    const res = await fetch("/api/water_drainage_ps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plumbing: [
          {
            num_wb: 5,
            num_health_faucet: 5,
            num_floor_drain: 15,
            num_service_sink: 2,
            num_kitchen_sink: 2,
            num_shower: 1,
            num_wc: 7,
            num_urinal: 3,
            num_urinal_trap: 1,
          },
        ],
      }),
    });
    const result = await res.json();
    console.log(result.data[0].total_raw_water);
    setData(result.data);
  };

  return (
    <div className="w-[340px] h-full flex flex-col bg-white border border-gray-200 rounded-[10px] overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-3 pb-2 border-b border-gray-200">
        <div>
          <h2 className="text-[14px] font-semibold text-gray-900 leading-none">
            Drainage Pipes
          </h2>
          <p className="text-[11px] text-gray-400 mt-[4px]">No update yet</p>
        </div>
        <button
          className="w-[24px] h-[24px] bg-[#0083EE] text-white hover:bg-sky-600 rounded-md flex items-center justify-center transition"
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
          options={["Toilet", "Bathroom", "Kitchen"]}
        />
        <InputRow label="Number of WC" value={wc} onChange={setWc} unit="Nos" />
        <InputRow label="Number of WB" value={wb} onChange={setWb} unit="Nos" />
        <InputRow
          label="Number of Urinal"
          value={urinal}
          onChange={setUrinal}
          unit="Nos"
        />
        <InputRow
          label="Number of Shower"
          value={shower}
          onChange={setShower}
          unit="Nos"
        />
        <InputRow
          label="Number of Tap"
          value={tap}
          onChange={setTap}
          unit="Nos"
        />
        <InputRow
          label="Total Fixture Unit"
          value={fixtureUnit}
          onChange={setFixtureUnit}
          unit="FU"
        />
        <InputRow
          label="Flow Rate Q"
          value={flowRate}
          onChange={setFlowRate}
          unit="m³/s"
        />
        <InputRow
          label="Velocity"
          value={velocity}
          onChange={setVelocity}
          unit="m/s"
        />
        <SelectRow
          label="Pipe Material"
          value={pipeMaterial}
          onChange={setPipeMaterial}
          options={["PVC", "CI", "HDPE"]}
        />
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
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

export default DrainagePipesForm;
