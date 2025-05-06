import React from 'react'
import "../../public/style/products.scss"
import "../../public/style/buttons.scss"
import Image from 'next/image'
import compareproduct from "../../public/images/product-compare-banner.png"
import Link from 'next/link'

const ProductsBanner = () => {
    return (
        <section className="product-banner padding-120 mt-16 !pb-0 bg-white">
            <div className="container">
                <p className="bold text-center mb-2.5">Product Comparison</p>
                <h1>Compare & Choose the <br /> Best MEP Products</h1>
                <p className="large grey text-center leading-7 mt-2.5 mb-[30px]">Office ipsum you must be muted. Floor let working <br /> indicators put procrastinating door thought.</p>
                <div className="cta flex justify-center items-center">
                    <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                </div>

                <Image src={compareproduct} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default ProductsBanner
