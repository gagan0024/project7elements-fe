export default function WaterDemandModal({ data }) {
  return (
    <div>
      <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
        Required Water
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600 text-sm">Raw Water</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].total_raw_water}
          </div>
        </div>
        <div className="flex-col gap">
          <div className="font-semibold text-gray-600 text-sm">
            Treated Water
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].total_treated_water}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold text-gray-600 text-sm">Soft Water</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].ug_tank_halfday_treated}
          </div>
        </div>
      </div>
    </div>
  );
}
