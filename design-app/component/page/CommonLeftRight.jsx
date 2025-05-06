import React from 'react'
import Image from 'next/image'
import Electrical from "../../public/images/Electrical-Main.svg"
import ElecticalCalc from "../../public/images/electrical-calculation.png"
import Hvac from "../../public/images/Hvac.svg"
import HvacCalc from "../../public/images/hvac-calculation.png"
import Firing from "../../public/images/Fire-Fight.svg"
import Firefight from "../../public/images/fire-fighting.png"
import Plumbing from "../../public/images/Plumbing.svg"
import PlumbingCalc from "../../public/images/Plumbing-calculation.png"

const CommonLeftRight = (props) => {
    return (
        <div className="calculation-div flex flex-col">
            {/* <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none row lg:mt-[120px] mt-20">
                <div className="img-col m-auto lg:w-1/2">
                    <img src={`${process.env.NEXT_PUBLIC_BASE_API}${props.image.url}`} alt="" className="w-full" />
                </div>

                <div className="content pl-0 lg:pl-20 lg:w-1/2">
                    <img src={`${process.env.NEXT_PUBLIC_BASE_API}${props.icon.url}`} alt="" />
                    <h3 className="mt-5 mb-10 text-left">{props.Title}</h3>
                    <div>
                        {props.Description.map((desc, i) => (
                            <p key={i} className="normal grey mt-3">{desc}</p>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                <div className="img-col m-auto">
                    <Image src={ElecticalCalc} alt="" className="w-full" />
                </div>
                <div className="content pl-0 lg:pl-20 m-auto">
                    <Image src={Electrical} alt="" />
                    <h3 className="mt-5 mb-10 text-left">Electrical Calculations</h3>
                    <p className="bold">Dialux</p>
                    <p className="dark-light normal mt-2.5">Optimize indoor and outdoor lighting designs, ensuring proper illuminance levels, energy efficiency, and compliance with international lighting standards.</p>
                    <p className="bold mt-5">Breaker Size</p>
                    <p className="dark-light normal mt-2.5">Determine the right circuit breaker ratings based on load calculations, short-circuit current analysis, and protection requirements to prevent electrical failures.</p>
                    <p className="bold mt-5">DB Details</p>
                    <p className="dark-light normal mt-2.5">Define DB layout with correct busbar ratings, Allocate circuits based on load distribution (lighting, power, HVAC, etc.) and Generate single-line diagrams (SLD) for better visualization</p>
                    <p className="bold mt-5">Cable Size</p>
                    <p className="dark-light normal mt-2.5">Accurately size cables considering voltage drop, current-carrying capacity, and thermal constraints, ensuring safe and efficient power distribution.</p>
                </div>
            </div>

            <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                <div className="content m-auto">
                    <Image src={Hvac} alt="" />
                    <h3 className="mt-5 mb-10 text-left">HVAC Calculations</h3>
                    <p className="bold">Heat Load</p>
                    <p className="dark-light normal mt-2.5">Calculate cooling and heating loads based on building size, occupancy, and external conditions Factor in solar heat gain, internal equipment loads, and ventilation losses</p>
                    <p className="bold mt-5">Ventilation</p>
                    <p className="dark-light normal mt-2.5">Determine fresh air requirements as per ASHRAE 62.1, ISHRAE, and local codes and Calculate ACH (Air Changes per Hour) for proper indoor air quality</p>
                    <p className="bold mt-5">Duct Sizing</p>
                    <p className="dark-light normal mt-2.5">Design ductwork based on airflow demand and static pressure loss, Use methods like equal friction, velocity reduction, and static regain for optimization</p>
                    <p className="bold mt-5">Equipment Selection & Energy Efficiency</p>
                    <p className="dark-light normal mt-2.5">Select chillers, AHUs, FCUs, and VRF/VRV systems based on calculated loads and Optimize COP (Coefficient of Performance) and EER (Energy Efficiency Ratio)</p>
                </div>
                <div className="img-col pl-0 lg:pl-20 m-auto">
                    <Image src={HvacCalc} alt="" className="w-full" />
                </div>
            </div>

            <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                <div className="img-col m-auto">
                    <Image src={Firefight} alt="" className="w-full" />
                </div>
                <div className="content pl-0 lg:pl-20 m-auto">
                    <Image src={Firing} alt="" />
                    <h3 className="mt-5 mb-10 text-left">Fire Fighting</h3>
                    <p className="bold">Head Loss</p>
                    <p className="dark-light normal mt-2.5">Determine frictional losses in pipes using Hazen-Williams or Darcy-Weisbach equation. Factor in pipe material, diameter, flow rate, and fitting losses. Optimize pipe routing to minimize pressure drops and ensure effective water delivery.</p>
                    <p className="bold mt-5">Fire Pump Sizing</p>
                    <p className="dark-light normal mt-2.5">Calculate required pump capacity (GPM/LPM) and pressure (PSI/kPa). Select the right fire pump type (electric/diesel/jockey pump) based on NFPA 20 and local codes.</p>
                    <p className="bold mt-5">Sprinkler System Design</p>
                    <p className="dark-light normal mt-2.5">Determine sprinkler head spacing and flow rate as per NFPA 13, NBC, or FM Global standards. Calculate minimum pressure requirements for effective fire suppression. Optimize the network for residential, commercial, and industrial fire safety systems.</p>
                    <p className="bold mt-5">Hydrant & Hose Reel System</p>
                    <p className="dark-light normal mt-2.5">Compute hydrant flow demand for proper coverage. Ensure adequate pressure to support manual firefighting operations. Design standpipe systems in multi-story buildings for easy fire access.</p>
                </div>
            </div>

            <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                <div className="content m-auto">
                    <Image src={Plumbing} alt="" />
                    <h3 className="mt-5 mb-10 text-left">Plumbing Calculations</h3>
                    <p className="bold">Water Supply System Sizing</p>
                    <p className="dark-light normal mt-2.5">Calculate peak water demand based on occupancy and fixture count. Determine pipe sizing using flow rate, velocity limits, and pressure loss. Ensure compliance with UPC, IPC, and IS codes for water distribution.</p>
                    <p className="bold mt-5">Pressure & Head Loss Calculation</p>
                    <p className="dark-light normal mt-2.5">Compute pressure drop due to pipe length, fittings, and elevation changes. Maintain minimum pressure at fixtures as per standards.</p>
                    <p className="bold mt-5">Drainage & Sewer System Design</p>
                    <p className="dark-light normal mt-2.5">Size drainage pipes based on DFU (Drainage Fixture Units) calculations. Ensure proper slope and venting to prevent siphoning and blockages. Design sewage pumps and sump pits for below-grade wastewater discharge.</p>
                    <p className="bold mt-5">Rainwater & Stormwater Drainage</p>
                    <p className="dark-light normal mt-2.5">Calculate rainwater pipe sizing based on roof area and rainfall intensity. Design stormwater drainage systems with proper retention and discharge planning. Integrate rainwater harvesting for sustainability.</p>
                </div>
                <div className="img-col pl-0 lg:pl-20 m-auto">
                    <Image src={PlumbingCalc} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default CommonLeftRight
