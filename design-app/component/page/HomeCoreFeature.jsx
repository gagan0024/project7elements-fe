import React from 'react'
import "../../public/style/home.scss"
import Link from 'next/link'
import Image from 'next/image'
import Designcal from "../../public/images/feature-1.png"
import Drawingbanner from "../../public/images/feature-2.png"
import Extractquantity from "../../public/images/feature-3.png"
import Compareproducts from "../../public/images/feature-4.png"
import Constructionmanage from "../../public/images/feature-5.png"
import Constecommerce from "../../public/images/feature-6.png"

const HomeCoreFeature = () => {
    return (
        <section className="core-features padding-120">
            <div className="container">
                <h5 className="grey mb-2.5">End to end solutions</h5>
                <h1>Our Core Features</h1>

                <div className="features-card mt-20 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Link href="/design-calculation" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Designcal} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Design Calculation</h5>
                            <p className="normal grey mt-3">Accurate, Automated, Code-Compliant. Our platform empowers user with a powerful suite of automated tools that simplify complex engineering calculations across all building services.
                                From HVAC heat load analysis, lighting calculation (DIALux), and cable & voltage drop sizing, to pump selection, ventilation planning, and head loss estimation—our platform delivers fast, precise results backed by real-time data and engineering logic.</p>
                        </div>
                    </Link>
                    <Link href="/drawing-development" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Drawingbanner} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Drawing Development</h5>
                            <p className="normal grey mt-3">Smart Layouts, Instant Sheets, Submission-Ready. Say goodbye to hours of manual drafting. Our platform brings intelligent drawing automation to your fingertips—transforming calculated designs into detailed, standards-compliant layouts and documentation in minutes.</p>
                        </div>
                    </Link>
                    <Link href="/extract-quantity" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Extractquantity} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Extract Quantity</h5>
                            <p className="normal grey mt-3">Automated Takeoffs, Real-Time Precision, Procurement-Ready. Eliminate guesswork and manual measurement. Our platform offers automated quantity extraction directly from your architectural and MEP layouts—providing fast, reliable, and project-ready data for cost estimation, procurement, and tendering.</p>
                        </div>
                    </Link>
                    <Link href="/comparision-products" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Compareproducts} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Compare Products</h5>
                            <p className="normal grey mt-3">Compare Smart, Select Right, Design with Confidence.
                                Our platform empowers you with an intelligent Product Comparison Engine tailored for the building industry.
                                Access a comprehensive data bank of real-world products across all major categories</p>
                        </div>
                    </Link>
                    {/* <Link href="" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Constructionmanage} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Construction Management</h5>
                            <p className="normal grey mt-3">From Design Desk to Construction Site — Fully Aligned.
                            Our platform bridges the gap between design intent and on-site execution with powerful tools for construction management, progress tracking, and real-time collaboration.</p>
                        </div>
                    </Link>
                    <Link href="" className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]">
                        <Image src={Constecommerce} alt="" className="w-full" />
                        <div className="content pt-10 pb-5 px-5">
                            <h5 className="text-left">Construction Material E-Commerce</h5>
                            <p className="normal grey mt-3">From Design to Doorstep — Procure Smarter.
                            Procurement is no longer just a back-office task—it's now a strategic part of the design and delivery cycle. Our platform brings a powerful e-commerce engine for building materials, enabling designers, engineers, and contractors to move from BOQ to Purchase—all in one place.</p>
                        </div>
                    </Link> */}

                </div>
            </div>
        </section>
    )
}

export default HomeCoreFeature
