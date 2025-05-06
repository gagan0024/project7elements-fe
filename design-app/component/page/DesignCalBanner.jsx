import React from 'react'
import "../../public/style/design.scss"
import "../../public/style/buttons.scss"
import Link from 'next/link'
import Image from 'next/image'
import featurebanner from "../../public/images/feature-banner.png"

const DesignCalBanner = () => {
    return (
        <section className="design-calc-banner padding-120 mt-16 !pb-5 bg-white">
            <div className="container">
                <p className="bold text-center mb-2.5">MEP Design Calculations</p>
                <h1>From Concept to Reality</h1>
                <p className="large grey text-center leading-7 mt-2.5 mb-[30px]">In the fast-paced world of building design, efficiency is crucial. Our MEP design automation platform simplifies complex mechanical, electrical, and plumbing calculations, ensuring precision and compliance while saving time and reducing errors.
                </p>
                <div className="cta flex justify-center items-center">
                    <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                </div>
                <Image src={featurebanner} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default DesignCalBanner

