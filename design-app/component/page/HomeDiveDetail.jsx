"use client"
import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import "../../public/style/home.scss"
import "../../public/style/buttons.scss"
import Link from 'next/link'
import Image from 'next/image'
import Tick from "../../public/images/active-tick.svg"
import Arrowforward from "../../public/images/arrow-forward.svg"
import HvacCard from "../../public/images/hvac-card.png"
import CADCard from "../../public/images/CAD-card.png"
import Archquantity from "../../public/images/arch-quantity.png"
import Productcomp from "../../public/images/product-comparision.png"


const HomeDiveDetail = () => {
    const [selected, setSelected] = React.useState("electrical");
    const [select, setSelect] = React.useState("cad-drawing");
    return (
        <section className="features-detail padding-120 bg-[#F2F2F2]">
            <div className="container">
                <h1 className="text-left">Dive into details</h1>
                <div className="flex flex-col">
                    <div className="w-[1px] h-20 bg-[#B2B2B2]"></div>
                    <div className="flex flex-row gap-2.5">
                        <div className="w-5 h-4 border-[1px] border-[#B2B2B2] border-t-0 border-r-0 rounded-bl-full"></div>
                        <h3 className="text-left">Design Calculation</h3>
                    </div>
                </div>

                <div className="flex w-full flex-col">
                    <Tabs
                        aria-label="Options"
                        className='tab-section'
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        classNames={{
                            tabList: "tab-inner",
                            tab: 'tab-button',
                            tabContent: 'tab-content',
                            panel: 'p-0',
                            base: 'flex'
                        }}
                    >
                        <Tab key="electrical" title={<div className='content-inner'><p>Electrical</p><Image src={Tick} alt="" /></div>}>
                        <div className="hvac-card p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                <div className="img-col">
                                    <Image src={HvacCard} alt="HVAC" className="w-full" />
                                </div>
                                </div>

                                
                                <div className="w-full lg:w-1/2 m-auto">
                                <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                    <h3>Electrical</h3>
                                    <p className="light-grey normal mt-4 mb-5">
                                    Powerfully Designed. Precisely Delivered.
                                    Electrical design is at the core of every safe, efficient, and code-compliant building. Our platform offers a fully integrated Electrical Design Calculation engine, enabling consultants and engineers to plan, simulate, and optimize electrical systems — all within a smart, connected workflow.
                                    Whether you’re designing for a residential block or a high-rise commercial complex, the platform ensures your electrical layout is load-balanced, properly sized, and technically aligned with IS/IEC standards.
                                    </p>
                                    <Link href="/design-calculation" className="simple-large-btn">
                                    Learn more <Image src={Arrowforward} alt="arrow" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        </Tab>
                        
                        <Tab key="hvac" title={<div className='content-inner'> <p>HVAC</p> <Image src={Tick} alt="" /></div>}>
                            <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                <div className="img-col">
                                    <Image src={HvacCard} alt="HVAC" className="w-full" />
                                </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                    <h3>HVAC</h3>
                                    <p className="light-grey normal mt-4 mb-5">Precision-Cooled Performance. Automated HVAC Engineering.
                                        Efficient HVAC design begins with accurate calculation—and our platform delivers just that with a fully automated HVAC calculation engine that simplifies one of the most complex tasks in building design.
                                        Whether you're planning comfort cooling for a residential villa or a centralized system for a commercial tower, our platform supports room-by-room and zone-based HVAC calculations, fully aligned with ASHRAE, ECBC, and ISHRAE standards.</p>
                                    <Link href="/design-calculation" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Tab>

                        <Tab key="fire-fight" title={<div className='content-inner'> <p>Fire Fight</p> <Image src={Tick} alt="" /></div>}>
                            <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                <div className="img-col">
                                    <Image src={HvacCard} alt="HVAC" className="w-full" />
                                </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                    <h3>Fire Fight</h3>
                                    <p className="light-grey normal mt-4 mb-5">Code-Compliant Safety. Engineered with Intelligence.
                                        Fire safety is non-negotiable—and our platform makes it effortless to design and document a complete firefighting system with precision, speed, and regulatory confidence. With our Fire Fighting Design Calculation module, engineers can plan, simulate, and route fire systems directly from layout inputs or scratch designs.
                                        Built in line with NBC, NFPA, IS:15105, and other global standards, the module ensures every sprinkler, pipe, and pump is accurately calculated and perfectly placed.</p>
                                    <Link href="/design-calculation" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Tab>

                        <Tab key="plumbing" title={<div className='content-inner'> <p>Plumbing</p> <Image src={Tick} alt="" /></div>}>
                            <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                <div className="img-col">
                                    <Image src={HvacCard} alt="HVAC" className="w-full" />
                                </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                    <h3>Plumbing</h3>
                                    <p className="light-grey normal mt-4 mb-5">Flow Engineered. Pressure Balanced. Fully Automated.
                                        Efficient plumbing design is about more than just pipes—it's about pressure, flow, hygiene, and long-term reliability. Our platform delivers a smart, standards-compliant Plumbing Design Calculation module that automates sizing, layout, and documentation for water supply, drainage, and vent systems.
                                        Built for residential, commercial, and institutional projects, the module adheres to IS:1172, UPCI, and NBC standards, ensuring every system is designed for performance and safety.</p>
                                    <Link href="/design-calculation" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>



                <div className="flex flex-col">
                    <div className="w-[1px] h-20 bg-[#B2B2B2]"></div>
                    <div className="flex flex-row gap-2.5">
                        <div className="w-5 h-4 border-[1px] border-[#B2B2B2] border-t-0 border-r-0 rounded-bl-full"></div>
                        <h3 className="text-left">Drawing Development</h3>
                    </div>
                </div>
                {/* <div className="flex w-full flex-col"> */}
                <Tabs
                    aria-label="Options"
                    className='tab-section'
                    selectedKey={select}
                    onSelectionChange={setSelect}
                    classNames={{
                        tabList: "tab-inner",
                        tab: 'tab-button',
                        tabContent: 'tab-content',
                        panel: 'p-0',
                        base: 'flex'
                    }}
                >
                    <Tab key="cad-drawing" title={<div className='content-inner'><p>CAD Drawings</p><Image src={Tick} alt="" /></div>}>
                        <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                    <div className="img-col">
                                        <Image src={CADCard} alt="" className='w-full' />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                    <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                        <h3>CAD Drawings</h3>
                                        <p className="light-grey normal mt-4 mb-5">Auto Layout Generation
                                            Automated Precision. Instantly Coordinated. Drawings That Build Themselves.
                                            Creating MEP and architectural layouts manually is time-consuming, error-prone, and often misaligned across disciplines. Our platform transforms that experience with Auto Layout Generation—a powerful engine that automatically converts your design calculations into intelligent, clash-free drawings, ready for execution.
                                            Whether it's ducts for HVAC, pipe networks for plumbing and firefighting, or electrical cable paths, every line and symbol is placed with logic, speed, and technical accuracy</p>
                                        <Link href="/drawing-development" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab key="cad-to-revit" title={<div className='content-inner'> <p>Cad to Revit</p> <Image src={Tick} alt="" /></div>}>
                        <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                    <div className="img-col">
                                        <Image src={CADCard} alt="" className='w-full' />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                    <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                        <h3>Cad to Revit</h3>
                                        <p className="light-grey normal mt-4 mb-5">CAD to 3D Revit Converter
                                        From Lines to Models. Fast-Track Your BIM Transformation.
                                        Moving from 2D CAD drawings to intelligent 3D BIM models has never been easier. Our CAD to Revit Converter empowers architects, engineers, and BIM teams to instantly transform legacy CAD layouts into structured, object-based 3D Revit models—ready for coordination, documentation, and analysis.
                                        No more time-consuming remodelling or manual redrafting—our converter bridges the gap between traditional drafting and modern BIM workflows in minutes.</p>
                                        <Link href="/drawing-development" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab key="revit-plugins" title={<div className='content-inner'> <p>Revit Plugins</p> <Image src={Tick} alt="" /></div>}>
                        <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                            <div className="flex flex-col lg:flex-row w-full">
                                
                                <div className="w-full lg:w-1/2">
                                    <div className="img-col">
                                        <Image src={CADCard} alt="" className='w-full' />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 m-auto">
                                    <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                        <h3>Revit Plugins</h3>
                                        <p className="light-grey normal mt-4 mb-5">Automated Revit Functionalities
                                            Less Repetition. More Intelligence. Automation That Builds Better.
                                            Revit is powerful—but manual modeling, drafting, and documentation can be slow, repetitive, and error-prone. Our platform introduces a suite of automated Revit functionalities that drastically reduce design time, eliminate manual overhead, and enhance model consistency across disciplines.
                                            Built for architects, BIM modelers, and MEP engineers, our tools help you automate complex modeling workflows, annotation tasks, sheet generation, and more—freeing your team to focus on design, not drafting.</p>
                                        <Link href="/drawing-development" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                </Tabs>

                <div className="flex flex-col">
                    <div className="w-[1px] h-20 bg-[#B2B2B2]"></div>
                    <div className="flex flex-row gap-2.5">
                        <div className="w-5 h-4 border-[1px] border-[#B2B2B2] border-t-0 border-r-0 rounded-bl-full"></div>
                        <h3 className="text-left mb-10">Extract Quantity</h3>
                    </div>
                </div>

                <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-solid border-[#B2B2B2] bg-white">
                    <div className="flex flex-col lg:flex-row w-full">
                        
                        <div className="w-full lg:w-1/2">
                            <div className="img-col">
                                <Image src={Archquantity} alt="" className='w-full' />
                            </div>
                        </div>           

                        <div className="w-full lg:w-1/2 m-auto">
                            <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                <h3 className="text-left">Power Up Your MEP & Architecture Quantity Takeoffs with AI</h3>
                                <p className="light-grey normal mt-4 mb-5">Whether you’re an architect, contractor, estimator, or engineer, leveraging AI-powered quantity takeoffs can streamline your project planning, reduce costs, and improve project accuracy.</p>
                                <Link href="/extract-quantity" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="w-[1px] h-20 bg-[#B2B2B2]"></div>
                    <div className="flex flex-row gap-2.5">
                        <div className="w-5 h-4 border-[1px] border-[#B2B2B2] border-t-0 border-r-0 rounded-bl-full"></div>
                        <h3 className="text-left mb-10">Product Comparison</h3>
                    </div>
                </div>

                <div className="hvac-card flex flex-col lg:flex-row p-5 rounded-2xl border border-solid border-[#B2B2B2] bg-white">
                    <div className="flex flex-col lg:flex-row w-full">
                        
                        <div className="w-full lg:w-1/2">
                            <div className="img-col">
                                <Image src={Productcomp} alt="" className='w-full' />
                            </div>
                        </div>           

                        <div className="w-full lg:w-1/2 m-auto">
                            <div className="content pt-10 pr-0 pb-5 pl-0 lg:pl-10 lg:pt-5 lg:pr-5 md:pl-5 md:pr-5 flex flex-col justify-center items-start">
                                <h3 className="text-left">Compare & Choose the Best MEP Products</h3>
                                <p className="light-grey normal mt-4 mb-5">Finding the right MEP (Mechanical, Electrical, and Plumbing) equipment for your project can be overwhelming. With countless brands, specifications, and features, making the perfect choice requires time and effort.</p>
                                <Link href="/comparision-products" className="simple-large-btn">Learn more <Image src={Arrowforward} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeDiveDetail
