import React from 'react'
import "../../public/style/drawing.scss"
import "../../public/style/buttons.scss"
import Link from 'next/link'
import Image from 'next/image'
import drawingbanner from "../../public/images/drawing-banner.png"

const DrawingBanner = () => {
    return (
        <section className="drawing-calc-banner padding-120 mt-16 !pb-5 bg-white">
            <div className="container">
                <p className="bold text-center mb-2.5">Drawing Development</p>
                <h1>Turn Design into Drawings <br /> and 3D Model</h1>
                <p className="large grey text-center leading-7 mt-2.5 mb-[30px]">Office ipsum you must be muted. Floor let working <br /> indicators put procrastinating door thought.</p>
                <div className="cta flex justify-center items-center">
                    <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                </div>

                <Image src={drawingbanner} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default DrawingBanner
