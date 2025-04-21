import React, { useState } from "react";
import "./HeatLoad.css";
import logo from "../../../public/images/heatload-heading.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeatLoadSecond from "./HeatLoadSecond";
import Ventilationsecond from "./Ventilationsecond";

const Ventilation = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [area, setArea] = useState("");
  const [height, setHeight] = useState("");
  const [volume, setVolume] = useState("");
  const [acph, setAcph] = useState("");
  const [flowrateCap, setFlowrateCap] = useState("");
  const [noFans, setNoFans] = useState("");
  const [fanCapacity, setFanCapacity] = useState("");
  const [fanDiameter, setFanDiameter] = useState("");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      rooms: [
        {
          name: selectedRoom,
          area: area,
          height: height,
          acph: acph,
          fans: noFans,
          fan_capacity: fanCapacity,
          fan_diameter: fanDiameter,
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:2025/v1.0/calculate_ventilation",
        requestOptions
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  console.log(data?.data[0]?.flowrate_m3s);

  const handleSelectRoom = (event) => {
    setSelectedRoom(event.target.value);
    console.log("Selected Room:", event.target.value);
  };

  const roomdata = [
    { label: "ASS Room", value: "ass_room" },
    { label: "Male Toilet", value: "male_toilet" },
    { label: "Female Toilet", value: "female_toilet" },
    { label: "Handicap Toilet", value: "handicap_toilet" },
    { label: "Handicap Toilet", value: "handicap_toilet" },
    { label: "DG Room", value: "dg_room" },
  ];
  // console.log(roomdata);

  // console.log(data.data.temperature_difference.summer.db_diff);

  return (
    <div>
      <div className="heatload__main flex-col bg-white">
        <div className="w-full">
          <div className="flex w-full items-end justify-center border-b border-solid border-blue_gray-100 bg-white-a700 p-2.5">
            <div className="flex flex-1 flex-col items-start">
              <h1 className="text-[14px] font-medium">Ventilation</h1>
              <p className="text-[12px] font-normal !text-gray-400">
                No update yet
              </p>
            </div>
            <button shape="round" className="w-[42px] rounded-md px-1">
              <img src={logo} alt="Heat Load" />
            </button>
          </div>
        </div>
        <>
          <div className="flex flex-col m-2.5 gap-2.5 rounded-lg border border-solid border-gray-400 p-2.5">
            <select
              name="localatomdrop"
              className="gap-[22px] rounded-md px-2 bg-gray-200"
              value={selectedRoom}
              onChange={handleSelectRoom}
            >
              <option value="" disabled>
                Select Room
              </option>
              {roomdata.map((room, index) => (
                <option key={index} value={room.value}>
                  {room.label}
                </option>
              ))}
            </select>

            <div className="flex flex-col items-start gap-2.5">
              <p className="text-[12px] font-normal">Area</p>
              <div className="flex gap-1 self-stretch">
                <input
                  shape="round"
                  name="placeholder"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder={`538`}
                  className="w-full rounded-md px-2 bg-gray-200"
                />
                <input
                  shape="round"
                  indicator={
                    <img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[14px] w-[14px] bg-gray-200"
                    />
                  }
                  name="localatomdrop"
                  placeholder={`Sq m.`}
                  options={roomdata}
                  disabled
                  className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <p className="text-[12px] font-normal">Height</p>
              <div className="flex gap-1 self-stretch">
                <input
                  shape="round"
                  name="placeholder_one"
                  placeholder={`4`}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full rounded-md px-2 bg-gray-200"
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
                  placeholder={`m`}
                  disabled
                  //   options={dropDownOptions}
                  className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <p className="text-[12px] font-normal">Volume</p>
              <div className="flex gap-1 self-stretch">
                <input
                  shape="round"
                  name="placeholder_one"
                  placeholder={`TBC`}
                  disabled
                  value={data?.data[0]?.volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full rounded-md px-2 bg-gray-200"
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
                  placeholder={`m`}
                  disabled
                  //   options={dropDownOptions}
                  className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                />
              </div>
            </div>
          </div>
        </>
        <div className="flex flex-col items-start gap-2.5 m-3">
          <p className="text-[12px] font-normal">Air Changes (AC/Hr.)</p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`4`}
              value={acph}
              onChange={(e) => setAcph(e.target.value)}
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
              placeholder={`m`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md p-1 bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col m-3 items-start gap-2.5">
          <p className="text-[12px] font-normal">Flowrate Capacity Q(m3/s) </p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`TBC`}
              value={data?.data[0]?.flowrate_m3s}
              onChange={(e) => setFlowrateCap(e.target.value)}
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
              placeholder={`m`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col m-4 items-start gap-2.5">
          <p className="text-[12px] font-normal">Number of Fans</p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`4`}
              value={noFans}
              onChange={(e) => setNoFans(e.target.value)}
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
              placeholder={`m`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col m-4 items-start gap-2.5">
          <p className="text-[12px] font-normal">Fans Capacity</p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`4`}
              value={fanCapacity}
              onChange={(e) => setFanCapacity(e.target.value)}
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
              placeholder={`m`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col m-4 items-start gap-2.5">
          <p className="text-[12px] font-normal">Fan Diameter</p>
          <div className="flex gap-1 self-stretch">
            <input
              shape="round"
              name="placeholder_one"
              placeholder={`4`}
              value={fanDiameter}
              onChange={(e) => setFanDiameter(e.target.value)}
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
              placeholder={`m`}
              disabled
              //   options={dropDownOptions}
              className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
            />
          </div>
        </div>

        <div
          onClick={handleApiCall}
          className="flex mt-[32px] m-2 border border-solid text-white rounded-lg border-blue-100 bg-blue-700 p-2.5"
        >
          <button
            size="lg"
            shape="round"
            className="w-full rounded-md px-[34px] font-medium sm:px-5"
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="heatload__second">
        <Ventilationsecond data={data} />
      </div>
    </div>
  );
};

export default Ventilation;
