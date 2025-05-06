"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../public/style/home.scss"
import Link from 'next/link'


const HomeBanner = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const fatchData = async () => {

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/home?populate[blocks][on][blocks.hero-banner][populate][image][fields][0]=url`, {
            })
            console.log(response?.data?.data?.blocks[0])
            setData(response?.data?.data?.blocks[0] || null)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fatchData()
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            {data ? (
                <section className="home-banner padding-120 bg-[url('/images/banner-img.png')] bg-cover bg-no-repeat bg-center mt-16 !pb-5">
                    <div className="container">
                        <h1>{data.title}</h1>
                        <p className="large grey text-center mt-2.5 mb-[30px]">{data.description}</p>
                        <div className="cta flex justify-center items-center">
                            <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                        </div>
                        {data.image?.url ? (
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_API}${data.image.url}`}
                                alt={data.image.alternativeText || data.title}
                                className="w-full"
                            />
                        ) : (
                            <p>No image available</p>
                        )}

                    </div>
                </section>
            ) : (
                <h1>Data not found</h1>
            )}


            <section className="build-solution padding-120 !pb-0">
                <div className="container">
                    <h2>Building Solutions for</h2>
                    <div className="solution-cards mt-10 flex flex-col">
                        <div className="flex flex-col items-center">
                            <div className="max-w-6xl w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                                    <div className="flex-1 bg-[#F2F2F2] p-5 rounded-2xl">
                                        <p className="text-center">Engineering Design Firms</p>
                                    </div>
                                    <div className="flex-1 bg-[#F2F2F2] p-5 rounded-2xl">
                                        <p className="text-center">Product Manufacturers</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    <div className="flex-1 bg-[#F2F2F2] p-5 rounded-2xl">
                                        <p className="text-center">Architects</p>
                                    </div>
                                    <div className="flex-1 bg-[#F2F2F2] p-5 rounded-2xl">
                                        <p className="text-center">MEP Consultants</p>
                                    </div>
                                    <div className="flex-1 bg-[#F2F2F2] p-5 rounded-2xl">
                                        <p className="text-center">Contractors</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );

}

export default HomeBanner
