export default function RoomDetailsModal({ close, val }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => close(false)}
    >
      <div
        className="bg-white w-[20%] p-6 rounded-lg shadow-lg flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div>{val.name}</div>
        <div>{val.area}</div>
      </div>
    </div>
  );
}
