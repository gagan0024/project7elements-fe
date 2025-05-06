import React from 'react'
import Image from 'next/image'
import Upload from "../../public/images/upload.svg"
import Selecticon from "../../public/images/select-icon.svg"
import Exportreport from "../../public/images/export-report.svg"
import Layoutbanner from "../../public/images/layout-banner.png"
import Fileupload from "../../public/images/File-Upload.svg"
import Measurementbanner from "../../public/images/measurement-banner.png"
import Dimensiondisc from "../../public/images/dimensioning-disc.svg"
import Extractbanner from "../../public/images/extract-quantity-banner.png"
import Extractdisc from "../../public/images/Extract-quantity.svg"
import Sheetbanner from "../../public/images/required-sheet-banner.png"
import Exportdisc from "../../public/images/Export-File.svg"




const ExtractProcess = () => {
    return (
        <section className="process-section padding-120 bg-gradient">
            <div className="container">
                <h1>Just 4 simple steps</h1>

                <div className="process-cards mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={Upload} alt="" />
                        <h5 className="text-left my-3">Upload your layout file</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={Selecticon} alt="" />
                        <h5 className="text-left my-3">Define Measurement Parameters</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={Exportreport} alt="" />
                        <h5 className="text-left my-3">Fill property details</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={Exportreport} alt="" />
                        <h5 className="text-left my-3">Export Sheet</h5>
                    </div>
                </div>

                <div className="calculation-div flex flex-col">
                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={Layoutbanner} alt="" className="w-full" />
                        </div>

                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={Fileupload} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Upload your layout file</h3>
                            <p className="dark-light normal">Seamlessly upload your 2D CAD drawings (DWG, PDF) or 3D BIM models (Revit, IFC) into the platform. The system automatically detects and categorizes architectural and MEP elements.</p>
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="content pr-0 lg:pr-20 m-auto">
                            <Image src={Dimensiondisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Define Measurement Parameters</h3>
                            <p className="dark-light normal">Customize your take-off process based on your project requirements. Set up specific measurement units, cost factors, and categorization rules to ensure accurate material and quantity estimations.</p>
                        </div>
                        <div className="img-col m-auto">
                            <Image src={Measurementbanner} alt="" className="w-full" />
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={Extractbanner} alt="" className="w-full" />
                        </div>
                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={Extractdisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Auto-Extract Quantities</h3>
                            <p className="dark-light normal">Using AI-powered automation and BIM-integrated tools, the system analyzes the drawings or models to extract precise material quantities, dimensions, and specifications. Users also have the flexibility to manually modify extracted quantities to match project-specific requirements.</p>
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="content pr-0 lg:pr-20 m-auto">
                            <Image src={Exportdisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Export your requirement sheet</h3>
                            <p className="dark-light normal">Once the takeoff is complete, generate detailed Bills of Quantities (BOQ), cost estimates, and procurement-ready reports. The platform provides options to export reports in various formats for further analysis.</p>
                        </div>
                        <div className="img-col m-auto">
                            <Image src={Sheetbanner} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExtractProcess
