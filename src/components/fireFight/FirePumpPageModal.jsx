export default function FirePumpPageModal({ data }) {
  return (
    <div>
      <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
        Pump Capacity
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600 text-sm">LPM</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].flowrate_lpm}
          </div>
        </div>
        <div className="flex-col gap">
          <div className="font-semibold text-gray-600 text-sm">HP</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].pump_capacity_hp}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold text-gray-600 text-sm">KW</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].pump_capacity_kw}
          </div>
        </div>
      </div>
    </div>
  );
}
