export default function WaterDemandModal({ data }) {
  return (
    <div>
      <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
        Rainwater Dropping
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600 text-sm">
            Area Per Pipe
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.catchment_area_per_pipe_m2}
          </div>
        </div>
        <div className="flex-col gap">
          <div className="font-semibold text-gray-600 text-sm">Flow</div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.discharge_flow_m3_hr}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold text-gray-600 text-sm">
            Pipe Diameter
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.pipe_diameter_mm}
          </div>
        </div>
      </div>
    </div>
  );
}
