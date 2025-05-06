import React from 'react'
import "../../public/style/design.scss"
import "../../public/style/buttons.scss"
import CommonLeftRight from './CommonLeftRight'
import Image from 'next/image'
import setupfile from "../../public/images/setupfile.svg"
import calculation from "../../public/images/calculation.svg"
import exportreport from "../../public/images/export-report.svg"


const DesignFeatured = () => {
    return (
        <section className="features-section padding-120 bg-gradient">
            <div className="container">
                <h1>Smart MEP Design Automation - <br /> Precision, Efficiency, Innovation</h1>
                <p className="large grey text-center leading-7 mt-5">Our solution uses advanced algorithms and AI-driven insights to help engineers, architects, and designers create efficient and sustainable building systems. From load calculations to energy efficiency analysis, our platform simplifies the process, allowing you to focus on innovation while we manage the details. Discover the future of MEP design, where automation connects ideas to reality.
                </p>

                <div className="process-cards mt-[60px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={setupfile} alt="" />
                        <h5 className="text-left my-3">Setup your file</h5>
                        <p className="normal grey">Define the building parameters, including location, Building type, and design standards. Import existing CAD/BIM models or start from scratch.</p>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={calculation} alt="" />
                        <h5 className="text-left my-3">Make Calculations</h5>
                        <p className="normal grey">Enter essential MEP details such as occupancy loads, ventilation rates, electrical demands, and plumbing requirements. Run automated heating, cooling, lighting, and water demand calculations based on industry standards.</p>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={exportreport} alt="" />
                        <h5 className="text-left my-3">Export Reports</h5>
                        <p className="normal grey">Automatically generate ductwork, piping, and electrical Design report and layouts optimized for efficiency and space constraints. Make adjustments based on real-time feedback and refine the design for better functionality.</p>
                    </div>
                </div>
                <CommonLeftRight />
            </div>
        </section>
    )
}

export default DesignFeatured
