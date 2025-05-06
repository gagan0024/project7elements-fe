import React from 'react'
import "../../public/style/extract.scss"
import "../../public/style/buttons.scss"
import Link from 'next/link'
import Image from 'next/image'
import Extractbanner from "../../public/images/extract-banner.png"

const ExtractBanner = () => {
    return (
        <section className="extract-banner padding-120 mt-16 !pb-5 bg-white">
            <div className="container">
                <p className="bold text-center mb-2.5">Extract Quantity</p>
                <h1>Power Up Your MEP & Architecture Quantity Takeoffs with AI</h1>
                <p className="large grey text-center leading-7 mt-2.5 mb-[30px]">Simplify your quantity estimation with our Automated Takeoff Software, which extracts accurate material quantities from CAD drawings and BIM models. Reduce manual errors and speed up project planning with real-time insights.</p>
                <div className="cta flex justify-center items-center">
                    <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                </div>

                <Image src={Extractbanner} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default ExtractBanner
