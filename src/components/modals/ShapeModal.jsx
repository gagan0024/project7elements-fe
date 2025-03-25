import { useEffect, useState } from "react";

export default function ShapeModal({ close, val }) {
  const [name, setName] = useState("");
  //   const [rooms, setRooms] = useState([])
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const storedRooms = JSON.parse(localStorage.getItem("rooms")) || [];
    setRooms(storedRooms);
  }, []);
  useEffect(() => {
    const filteredArray = rooms.filter((item) => item !== null);
    if (filteredArray.length > 0) {
      localStorage.setItem("rooms", JSON.stringify(filteredArray));
    }
  }, [rooms]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val, name);
    setRooms((prev) => [...prev, { name: name, area: val }]);
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => close(false)}
    >
      <div
        className="bg-white w-[20%] p-6 rounded-lg shadow-lg flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Room Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-gray-100 w-full p-2 text-sm rounded border border-transparent hover:border-gray-300 focus:ring-gray-300 focus:outline-none focus:border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-2 text-sm text-white text font-bold"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
