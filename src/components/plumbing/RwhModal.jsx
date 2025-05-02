export default function WaterDemandModal({ data }) {
  return (
    <div>
      <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
        Rainwater Harvested
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600 text-sm">Discharge</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].discharge_m3hr}
          </div>
        </div>
        <div className="flex-col gap">
          <div className="font-semibold text-gray-600 text-sm">
            Total Water Volume
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].total_volume_water}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold text-gray-600 text-sm">
            Tank Capacity
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data[0].tank_capacity_m3}
          </div>
        </div>
      </div>
    </div>
  );
}
