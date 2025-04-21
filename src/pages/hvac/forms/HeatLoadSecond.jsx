import React from "react";

export default function HeatLoadSecond({
  roomheatinfo = "Room Heat Info",
  monsoon = "Monsoon",
  summer = "Summer",
  roomsensible = "Room Sensible Heat (Btu/hour)",
  roomlatent = "Room Latent Heat (Btu/hour)",
  roomtotalheat = "Room Total Heat (Btu/hour)",
  totalheatgain,
  data = {},

  ...props
}) {
  console.log(data?.data?.grand_total.subtotal1);
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
        <div className="flex justify-center bg-gray-300 p-2">
          <p className=" font-normal !p-gray-800 ">{monsoon}</p>
          <div className="flex flex-1 items-center justify-center gap-2 px-14 md:px-5">
            <p className=" font-normal !p-gray-800">{summer}</p>
          </div>
        </div>
        <div className=" flex flex-col gap-5 m-2 ">
          <div className="flex flex-col items-start gap-2">
            <p className="p-[12px] font-normal">{roomsensible}</p>
            <div className="flex gap-1 self-stretch">
              <input
                shape="round"
                name="placeholder_six"
                placeholder={`TBC`}
                disabled
                value={
                  data?.data?.sensible_heat.internal_heat.room_sensible_heat
                }
                className="w-full rounded-md px-2  bg-gray-200 p-1"
              />
              <input
                shape="round"
                name="placeholder"
                placeholder={`TBC`}
                value={
                  data?.data?.sensible_heat.internal_heat.room_sensible_heat
                }
                disabled
                className="w-full rounded-md px-2 bg-gray-200 p-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <p className="p-[12px] font-normal">{roomlatent}</p>
            <div className="flex gap-1 self-stretch">
              <input
                shape="round"
                name="placeholder"
                placeholder={`TBC`}
                disabled
                value={data?.data?.latent_heat?.total_latent_heat_monsoon}
                className="w-full rounded-md px-2 bg-gray-200 p-1"
              />
              <input
                shape="round"
                name="placeholder"
                placeholder={`TBC`}
                disabled
                value={data?.data?.latent_heat?.total_latent_heat_monsoon}
                className="w-full rounded-md px-2 bg-gray-200 p-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 mb-5">
            <p as="p" className="p-[12px] font-normal">
              {roomtotalheat}
            </p>
            <div className="flex gap-1 self-stretch">
              <input
                shape="round"
                name="placeholder_ten"
                placeholder={`TBC`}
                disabled
                value={data?.data?.total_heat.total_heat_monsoon}
                className="w-full rounded-md px-2 bg-gray-200 p-1"
              />
              <input
                shape="round"
                name="placeholder"
                placeholder={`TBC`}
                disabled
                value={data?.data?.total_heat.total_heat_summer}
                className="w-full rounded-md px-2 bg-gray-200 p-1"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-solid pb-10 border-gray-500 ">
          <div className="flex ">
            <p as="p" className="mt-2.5 p-[12px] font-medium">
              <span>Total Heat Gain&nbsp;</span>
              <span>(Btu/hour)</span>
            </p>
          </div>
          <div className="flex gap-1 p-1">
            <input
              shape="round"
              name="placeholder"
              placeholder={`TBC`}
              disabled
              value={data?.data?.grand_total.subtotal2}
              className="w-full rounded-md px-2 bg-gray-200 p-1"
            />
            <input
              shape="round"
              name="placeholder"
              placeholder={`TBC`}
              disabled
              value={data?.data?.grand_total.subtotal1}
              className="w-full rounded-md  px-2 bg-gray-200 p-1"
            />
            <div className="pt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
