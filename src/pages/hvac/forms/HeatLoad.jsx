import React, { useState } from "react";
import "./HeatLoad.css";
import logo from "../../../public/images/heatload-heading.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeatLoadSecond from "./HeatLoadSecond";

const HeatLoad = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isIEOpen, setIEIsOpen] = useState(false);
  const [isMCOpen, setMCIsOpen] = useState(false);
  const [isSCOpen, setSCIsOpen] = useState(false);
  const [occupancy, setOccupacy] = useState("");
  const [light, setLight] = useState("");
  const [equipment, setEquipment] = useState("");
  const [cfmsqft, setCfmSqft] = useState("");
  const [cfmperson, setCfmPerson] = useState("");
  const [sensibleHeat, setSensibleHeat] = useState("");
  const [latentHeat, setLatentHeat] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [area, setArea] = useState("");
  const [height, setHeight] = useState("");
  const [Soutsidedb, setSoutsidedb] = useState("");
  const [Soutsidewb, setSoutsidewb] = useState("");
  const [Soutsiderh, setSoutsiderh] = useState("");
  const [Soutside_gr_lb, setSoutside_gr_lb] = useState("");
  const [Sroomdb, setSroomdb] = useState("");
  const [Sroomrh, setSroomrh] = useState("");
  const [Sroom_gr_lb, setSroom_gr_lb] = useState("");

  const [Moutsidedb, setMoutsidedb] = useState("");
  const [Moutsidewb, setMoutsidewb] = useState("");
  const [Moutsiderh, setMoutsiderh] = useState("");
  const [Moutside_gr_lb, setMoutside_gr_lb] = useState("");
  const [Mroomdb, setMroomdb] = useState("");
  const [Mroomrh, setMroomrh] = useState("");
  const [Mroom_gr_lb, setMroom_gr_lb] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      summer: {
        outside_db: Soutsidedb || 0,
        outside_wb: Soutsidewb || 0,
        outside_rh: Soutsiderh || 0,
        outside_gr_lb: Soutside_gr_lb || 0,
        room_db: Sroomdb || 0,
        room_rh: Sroomrh || 0,
        room_gr_lb: Sroom_gr_lb || 0,
      },
      monsoon: {
        outside_db: Moutsidedb || 0,
        outside_wb: Moutsidewb || 0,
        outside_rh: Moutsiderh || 0,
        outside_gr_lb: Moutside_gr_lb || 0,
        room_db: Mroomdb || 0,
        room_rh: Mroomrh || 0,
        room_gr_lb: Mroom_gr_lb || 0,
      },
      area: area,
      height: height || 0,
      people: occupancy || 0,
      light: light || 0,
      equipment: equipment || 0,
      cfm_sqft: cfmsqft || 0,
      cfm_person: cfmperson || 0,
      sensible_heat_people: sensibleHeat || 0,
      latent_heat_people: latentHeat || 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:2025/v1.0/calculate_heat_load",
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
  console.log(data);
  const handleSelectRoom = (event) => {
    setSelectedRoom(event.target.value);
    console.log("Selected Room:", event.target.value);
  };
  const handleHeatLoadApi = (e) => {
    console.log("api Hit");
  };
  const accordionData = [
    { roomdetailsTwo: "Summer Conditions" },
    { roomdetailsTwo: "Monsoon Conditions" },
  ];
  const roomdata = [
    { label: "Signal Equipmanet Room", value: "Signal_Equipmanet_Room" },
    { label: "Telecom Equipmanet Room", value: "Telecom Equipmanet_Room" },
    { label: "USP S&T", value: "USP_S&T" },
    { label: "Station Control Room", value: "Station_Control_Room" },
    { label: "Ticket Office Manager", value: "Ticket_Office_Manager" },
    { label: "EFO", value: "EFO" },
    { label: "UPS Electrical", value: "USP_Electrical" },
  ];
  // console.log(roomdata);

  // console.log(data.data.temperature_difference.summer.db_diff);

  return (
    <div>
      <div className="heatload__main flex-col bg-white">
        <div className="w-full">
          <div className="flex w-full items-end justify-center border-b border-solid border-blue_gray-100 bg-white-a700 p-2.5">
            <div className="flex flex-1 flex-col items-start">
              <h1 className="text-[14px] font-medium">Heat Load</h1>
              <p className="text-[12px] font-normal !text-gray-400">
                No update yet
              </p>
            </div>
            <button shape="round" className="w-[42px] rounded-md px-1">
              <img src={logo} alt="Heat Load" />
            </button>
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="w-full p-2  ">
          <button
            className="flex gap-3.5 items-center text-[12px] font-normal w-full text-left p-2 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoIosArrowUp className="ml-2" />
            ) : (
              <IoIosArrowDown className="ml-2" />
            )}
            Room Details
          </button>
          {isOpen && (
            <>
              <div className="flex flex-col gap-2.5 rounded-lg border border-solid border-gray-400 p-2.5">
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
              </div>
              <div className="flex flex-col items-start mt-1 gap-2.5 rounded-lg border border-solid border-gray-400 p-2.5">
                <p className="text-[12px] font-normal">Occupancy</p>
                <div className="flex gap-1 self-stretch">
                  <input
                    shape="round"
                    name="placeholder_two"
                    placeholder={`4`}
                    value={occupancy}
                    onChange={(e) => setOccupacy(e.target.value)}
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
                    disabled
                    placeholder={`Nos`}
                    //   options={dropDownOptions}
                    className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                  />
                </div>
                <p className="text-[12px] font-normal">Light Load</p>
                <div className="flex gap-1 self-stretch">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`50`}
                    value={light}
                    onChange={(e) => setLight(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    disabled
                    indicator={
                      <img
                        src="images/img_arrowdown.svg"
                        alt="Arrow Down"
                        className="h-[14px] w-[14px] bg-gray-200"
                      />
                    }
                    name="localatomdrop"
                    placeholder={`Watts`}
                    //   options={dropDownOptions}
                    className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <p className="text-[12px] font-normal">
                    Equipment Heat Disipetion
                  </p>
                  <div className="flex gap-1 self-stretch">
                    <input
                      shape="round"
                      name="zipcode"
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      placeholder={`1000`}
                      className="w-full rounded-md px-2 bg-gray-200"
                    />
                    <input
                      shape="round"
                      disabled
                      indicator={
                        <img
                          src="images/img_arrowdown.svg"
                          alt="Arrow Down"
                          className="h-[14px] w-[14px]"
                        />
                      }
                      name="localatomdrop"
                      placeholder={`KW`}
                      // options={dropDownOptions}
                      className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-1 items-start gap-2.5 rounded-lg border border-solid border-gray-400 p-2.5">
                <p className="text-[12px] font-normal">CFM/Sqft</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`0.06`}
                    value={cfmsqft}
                    onChange={(e) => setCfmSqft(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    disabled
                    indicator={
                      <img
                        src="images/img_arrowdown.svg"
                        alt="Arrow Down"
                        className="h-[14px] w-[14px]"
                      />
                    }
                    name="localatomdrop"
                    placeholder={`CFM/Sqft`}
                    // options={dropDownOptions}
                    className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                  />
                </div>
                <p className="text-[12px] font-normal">CFM/Person</p>
                <div className="flex gap-1 self-stretch">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`5`}
                    value={cfmperson}
                    onChange={(e) => setCfmPerson(e.target.value)}
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
                    placeholder={`CFM/Person`}
                    // options={dropDownOptions}
                    className="w-full gap-[22px] rounded-md px-2 bg-gray-200"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-full p-2  ">
          <button
            className="flex gap-3.5 items-center text-[12px] font-normal w-full text-left p-2 "
            onClick={() => setIEIsOpen(!isIEOpen)}
          >
            {isIEOpen ? (
              <IoIosArrowUp className="ml-2" />
            ) : (
              <IoIosArrowDown className="ml-2" />
            )}
            Internal Heat (People){" "}
          </button>
          {isIEOpen && (
            <div className="p-2 mt-2 border border-gray-200 rounded-md bg-white">
              <p className="text-[12px] font-normal mb-2">Sensible-Heat</p>
              <div className="flex gap-1 self-stretch ">
                <input
                  shape="round"
                  name="placeholder"
                  value={sensibleHeat}
                  onChange={(e) => setSensibleHeat(e.target.value)}
                  placeholder={`245`}
                  className="w-full rounded-md px-2 bg-gray-200"
                />
              </div>
              <p className="text-[12px] font-normal mb-2 mt-4">Latent-Heat</p>
              <div className="flex gap-1 self-stretch ">
                <input
                  shape="round"
                  name="placeholder"
                  value={latentHeat}
                  onChange={(e) => setLatentHeat(e.target.value)}
                  placeholder={`245`}
                  className="w-full rounded-md px-2 bg-gray-200"
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full p-2  ">
          <button
            className="flex gap-3.5 items-center text-[12px] font-normal w-full text-left p-2 "
            onClick={() => setMCIsOpen(!isMCOpen)}
          >
            {isMCOpen ? (
              <IoIosArrowUp className="ml-2" />
            ) : (
              <IoIosArrowDown className="ml-2" />
            )}
            Summer Conditions{" "}
          </button>
          {isMCOpen && (
            <div>
              <div className="bg-gray-200 justify-evenly h-6  flex gap-1 self-stretch">
                <div className="text-[12px] font-normal ">DB(F)</div>
                <div className="text-[12px] font-normal ">WB(F)</div>
                <div className="text-[12px] font-normal ">%RH</div>
                <div className="text-[12px] font-normal ">GR/LB</div>
              </div>
              <div className="p-2 mt-2  rounded-md bg-white">
                <p className="text-[12px] font-normal mb-2">Outside (OA)</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`110`}
                    value={Soutsidedb}
                    onChange={(e) => setSoutsidedb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`75`}
                    value={Soutsidewb}
                    onChange={(e) => setSoutsidewb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`20`}
                    value={Soutsiderh}
                    onChange={(e) => setSoutsiderh(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`74.8`}
                    value={Soutside_gr_lb}
                    onChange={(e) => setSoutside_gr_lb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
                <p className="text-[12px] font-normal mb-2 mt-4">Room (RM)</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`75`}
                    value={Sroomdb}
                    onChange={(e) => setSroomdb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`--`}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`50`}
                    value={Sroomrh}
                    onChange={(e) => setSroomrh(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`65`}
                    value={Sroom_gr_lb}
                    onChange={(e) => setSroom_gr_lb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
                <div className=" border border-gray-200 mt-4 "></div>
                <p className="text-[12px] font-normal mb-2 mt-2">Difference</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={data?.data?.temperature_difference?.summer?.db_diff}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`--`}
                    disabled
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={data?.data?.temperature_difference?.summer?.rh_diff}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={
                      data?.data?.temperature_difference?.summer?.gr_lb_diff
                    }
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full p-2  ">
          <button
            className="flex gap-3.5 items-center text-[12px] font-normal w-full text-left p-2 "
            onClick={() => setSCIsOpen(!isSCOpen)}
          >
            {isSCOpen ? (
              <IoIosArrowUp className="ml-2" />
            ) : (
              <IoIosArrowDown className="ml-2" />
            )}
            Monsoon Conditions{" "}
          </button>
          {isSCOpen && (
            <div>
              <div className="bg-gray-200 justify-evenly h-6  flex gap-1 self-stretch">
                <div className="text-[12px] font-normal ">DB(F)</div>
                <div className="text-[12px] font-normal ">WB(F)</div>
                <div className="text-[12px] font-normal ">%RH</div>
                <div className="text-[12px] font-normal ">GR/LB</div>
              </div>
              <div className="p-2 mt-2  rounded-md bg-white">
                <p className="text-[12px] font-normal mb-2">Outside (OA)</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`110`}
                    value={Moutsidedb}
                    onChange={(e) => setMoutsidedb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`75`}
                    value={Moutsidewb}
                    onChange={(e) => setMoutsidewb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    value={Moutsiderh}
                    onChange={(e) => setMoutsiderh(e.target.value)}
                    placeholder={`20`}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    value={Moutside_gr_lb}
                    onChange={(e) => setMoutside_gr_lb(e.target.value)}
                    placeholder={`74.8`}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
                <p className="text-[12px] font-normal mb-2 mt-4">Room (RM)</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`75`}
                    value={Mroomdb}
                    onChange={(e) => setMroomdb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`--`}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`50`}
                    value={Mroomrh}
                    onChange={(e) => setMroomrh(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`65`}
                    value={Mroom_gr_lb}
                    onChange={(e) => setMroom_gr_lb(e.target.value)}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
                <div className=" border border-gray-200 mt-4 "></div>
                <p className="text-[12px] font-normal mb-2 mt-2">Difference</p>
                <div className="flex gap-1 self-stretch ">
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={data?.data?.temperature_difference?.monsoon?.rh_diff}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`--`}
                    disabled
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={data?.data?.temperature_difference?.monsoon?.rh_diff}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                  <input
                    shape="round"
                    name="placeholder"
                    placeholder={`TBC`}
                    disabled
                    value={data?.data?.temperature_difference?.monsoon?.rh_diff}
                    className="w-full rounded-md px-2 bg-gray-200"
                  />
                </div>
              </div>
            </div>
          )}
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
        <HeatLoadSecond data={data} />
      </div>
    </div>
  );
};

export default HeatLoad;
