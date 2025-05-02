export default function HLFormModal({ data }) {
  return (
    <div>
      <div className="text-lg font-bold border-b border-gray-300 p-6 text-gray-800">
        Pressure Loss Info
      </div>
      <div className="flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-gray-600 text-sm">
            Pressure Loss Per Meter Length of Pipe
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.pressureLossPerMeterBar}
          </div>
        </div>
        <div className="flex-col gap">
          <div className="font-semibold text-gray-600 text-sm">
            Pressure Loss of Total Length of Pipe
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.pressureLossTotalMeter}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-semibold text-gray-600 text-sm">
            Total Pressure loss
          </div>
          <div className="border border-gray-300 p-2 rounded bg-gray-100">
            {data.pressureLossTotalBar}
          </div>
        </div>
      </div>
    </div>
  );
}
