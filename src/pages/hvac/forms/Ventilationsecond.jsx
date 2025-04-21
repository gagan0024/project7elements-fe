import React from "react";

export default function Ventilationsecond({
  roomheatinfo = "Fan Details",
  monsoon = "Monsoon",
  summer = "Summer",
  roomsensible = "Room Sensible Heat (Btu/hour)",
  roomlatent = "Room Latent Heat (Btu/hour)",
  roomtotalheat = "Room Total Heat (Btu/hour)",
  totalheatgain,
  data = {},

  ...props
}) {
  console.log(data?.data[0]?.flowrate_per_fan);
  return (
    <div
      className={` h-full border-gray-100 border-l border-solid bg-white-700`}
    >
      <div className="flex self-stretch border-b border-solid border-blue_gray-100 p-5">
        <p className="p-1 font-medium">{roomheatinfo}</p>
      </div>
      <div className="mb-1 self-stretch ">
        <input
          size="sm"
          shape="square"
          name="name"
          placeholder={`Room Name Here`}
          className="border-b border-solid border-gray-100 p-5 font-medium p-black-900"
        />
        <div className="flex flex-col m-4 items-start gap-2.5">
          <p className="text-[12px] font-normal">
            Flowrate Capacity Q of Each Fan
          </p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`TBC`}
              disabled
              value={data?.data[0]?.flowrate_per_fan}
              //   onChange={(e) => setFanDiameter(e.target.value)}
              className="w-full rounded-md p-1 bg-gray-200"
            />
            <input
              shape="round"
              indicator={
                <img
                  src="images/img_arrowdown.svg"
                  alt="Arrow Down"
                  className="h-[14px] w-[14px]"
                />
              }
              name="localatomdrop"
              placeholder={`m3s`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col m-4 items-start gap-2.5">
          <p className="text-[12px] font-normal">Selected Diameter of a Fan</p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`TBC`}
              disabled
              value={data?.data[0]?.selected_fan_diameter}
              //   onChange={(e) => setFanDiameter(e.target.value)}
              className="w-full rounded-md p-1 bg-gray-200"
            />
            <input
              shape="round"
              indicator={
                <img
                  src="images/img_arrowdown.svg"
                  alt="Arrow Down"
                  className="h-[14px] w-[14px]"
                />
              }
              name="localatomdrop"
              placeholder={`mm`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
