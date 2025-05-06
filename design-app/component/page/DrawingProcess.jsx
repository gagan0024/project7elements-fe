import React from 'react'
import Image from 'next/image'
import cadconversion from "../../public/images/cad-conversion.svg"
import projectbrowser from "../../public/images/project-browser.svg"
import annotation from "../../public/images/annotation.svg"
import dimensioning from "../../public/images/dimensioning.svg"
import sections from "../../public/images/sections.svg"
import legends from "../../public/images/legends.svg"
import sheets from "../../public/images/sheets.svg"
import clashresolver from "../../public/images/clash-resolver.svg"
import cadbanner from "../../public/images/Cad-to-Revit-banner.png"
import cadrevit from "../../public/images/Cad-to-Revit.svg"
import ProjectBrowser from "../../public/images/project-browser-banner.png"
import Browser from "../../public/images/browser.svg"
import Annotationbanner from "../../public/images/annotation-bannner.png"
import annotationdisc from "../../public/images/anotation-disc.svg"
import Sectionbanner from "../../public/images/section-banner.png"
import Sectionview from "../../public/images/Section-Viewer.svg"
import Legendsbanner from "../../public/images/legends-banner.png"
import Legendsdisc from "../../public/images/Legands-disc.svg"
import Sheetsbanner from "../../public/images/sheet-banner.png"
import Sheetsgeneration from "../../public/images/Sheet-Generation.svg"
import Clashbanner from "../../public/images/Clash-resolver-banner.png"
import Clashdisc from "../../public/images/clash-disc.svg"


const DrawingProcess = () => {
    return (
        <section className="process-section padding-120 bg-gradient">
            <div className="container">
                <h1>Process that covers everything</h1>

                <div className="process-cards mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={cadconversion} alt="" />
                        <h5 className="text-left my-3">Cad to Revit conversion</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={projectbrowser} alt="" />
                        <h5 className="text-left my-3"> Project Browser</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={annotation} alt="" />
                        <h5 className="text-left my-3">Annotation & Dimensioning</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={dimensioning} alt="" />
                        <h5 className="text-left my-3">E-Learning</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={sections} alt="" />
                        <h5 className="text-left my-3">Sections</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={legends} alt="" />
                        <h5 className="text-left my-3">Legends</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={sheets} alt="" />
                        <h5 className="text-left my-3">Sheets</h5>
                    </div>
                    <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
                        <Image src={clashresolver} alt="" />
                        <h5 className="text-left my-3">Clash resolver</h5>
                    </div>
                </div>

                <div className="calculation-div flex flex-col">
                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={cadbanner} alt="" className="w-full" />
                        </div>

                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={cadrevit} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Cad to Revit conversion</h3>
                            <p className="dark-light normal">Transform your 2D CAD drawings into intelligent, BIM-ready 3D Revit models with precision and efficiency. Our automated solution streamlines the transition from traditional drafting to advanced Building Information Modeling (BIM), enhancing visualization, coordination, and project execution. User can Convert CAD layouts into detailed Revit BIM models in minutes.</p>
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="content pr-0 lg:pr-20 m-auto">
                            <Image src={Browser} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Project Browser</h3>
                            <p className="dark-light normal">Effortlessly organize and navigate your Revit projects with our intelligent Project Browser Management feature. Our application simplifies the structuring of views, sheets, schedules, and families, ensuring a well-organized Revit workspace for seamless collaboration and efficiency. 
                            <br /><br />
                            Enhance your BIM workflow with an intuitive Project Browser Management system, making Revit navigation faster, smarter, and more efficient.</p>
                        </div>
                        <div className="img-col m-auto">
                            <Image src={ProjectBrowser} alt="" className="w-full" />
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={Annotationbanner} alt="" className="w-full" />
                        </div>
                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={annotationdisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Annotation & Dimensioning</h3>
                            <p className="dark-light normal">Enhance precision and efficiency with our Auto Annotation & Dimensioning feature, eliminating the need for manual drafting while ensuring compliance with industry standards. Our intelligent system automatically applies annotations, dimensions, and labels to your Revit models, saving time and reducing errors. 
                            <br /><br />
                            Automatically apply aligned, linear, and radial dimensions to building elements with precision. Maintain uniformity in annotations across multiple sheets and views.</p>
                        </div>
                    </div>


                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="content pr-0 lg:pr-20 m-auto">
                            <Image src={Sectionview} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Sections</h3>
                            <p className="dark-light normal">Simplify your workflow with our Automatic Section Creation feature, enabling effortless generation of <strong>cross-sections and longitudinal sections in Revit. </strong>
                            <br /><br />
                            No more manual slicing or tedious adjustments—our intelligent system ensures accuracy and efficiency in documenting building elements.</p>
                        </div>

                        <div className="img-col m-auto">
                            <Image src={Sectionbanner} alt="" className="w-full" />
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={Legendsbanner} alt="" className="w-full" />
                        </div>

                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={Legendsdisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Legends</h3>
                            <p className="dark-light normal">Enhance your Revit documentation with our Automated Legend Generation feature, which creates legends based on provided samples for <strong>seamless project standardization.</strong>
                            <br /><br />
                            No more manual drafting—our tool intelligently extracts relevant data and formats legends automatically. Automatically pull material, symbol, and component details from your model. Maintain uniform legend styles across all sheets using predefined templates.</p>
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="content pr-0 lg:pr-20 m-auto">
                            <Image src={Sheetsgeneration} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Sheets</h3>
                            <p className="dark-light normal">Speed up your project documentation with our Automated Sheet Generation feature, which creates multiple Revit sheets in minutes from a provided drawing list or predefined standards. Eliminate the hassle of manually setting up sheets and focus on design efficiency. 
                            <br /><br />
                            Import drawing lists to automate sheet naming and numbering. Automatically place plans, sections, elevations, and legends in designated locations.</p>
                        </div>

                        <div className="img-col m-auto">
                            <Image src={Sheetsbanner} alt="" className="w-full" />
                        </div>
                    </div>

                    <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
                        <div className="img-col m-auto">
                            <Image src={Clashbanner} alt="" className="w-full" />
                        </div>

                        <div className="content pl-0 lg:pl-20 m-auto">
                            <Image src={Clashdisc} alt="" />
                            <h3 className="mt-5 mb-[25px] text-left">Clash resolver</h3>
                            <p className="dark-light normal">Ensure seamless coordination in your MEP designs with our advanced clash detection and automated route optimization feature. Our application identifies clashes between different building elements and intelligently suggests revised routing solutions, minimizing design conflicts and rework. Get AI-driven suggestions for rerouting MEP components to resolve conflicts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DrawingProcess
