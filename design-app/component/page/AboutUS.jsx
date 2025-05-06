"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../public/style/about.scss"
import "../../public/style/buttons.scss"
import Image from 'next/image'
import Link from 'next/link'


const AboutUS = () => {
    const [data, setData] = useState(null)
    const [heroBanner, setHeroBanner] = useState(null)
    const [cardGrid, setCardGrid] = useState(null);
    const [iconCard, setIconCard] = useState(null);
    const [loading, setLoading] = useState(true)
    const fatchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/about`,)
            const data = response?.data?.data || null
            setData(data);
            const heroBanner = data?.blocks.find(
                (block) => block.__component === "blocks.hero-banner"
            );
            const cardGrid = data?.blocks.find(
                (block) => block.__component === "blocks.card-grid"
            );
            const iconCard = data?.blocks.find(
                (block) => block.__component === "blocks.icon-card-section"
            );
            setHeroBanner(heroBanner || null);
            setCardGrid(cardGrid || null);
            setIconCard(iconCard || null);
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
        <div>

            {heroBanner ? (
                <section className="about-banner padding-120 mt-16 bg-white">
                    <div className="container">
                        <div className="lg:w-2/3 mx-auto">
                            <h1>{heroBanner.title}</h1>
                            <p className="large grey text-center mt-[15px]">{heroBanner.description}</p>
                        </div>

                        {heroBanner.image?.url ? (
                            <video
                                key={heroBanner.image?.url}
                                preload="auto"
                                muted
                                autoPlay
                                loop
                                controls
                                playsInline
                                src={`${process.env.NEXT_PUBLIC_BASE_API}${heroBanner.image.url}`}
                                alt={heroBanner.image.alternativeText || heroBanner.title}
                                className="w-full margin-80 !mb-0 rounded-[10px]"
                            />
                        ) : (
                            <p>No video available</p>
                        )}


                        {/* <video src='/images/Final-video.mp4' autoPlay loop className="w-full margin-80 !mb-0" /> */}

                    </div>
                </section>
            ) : (
                <h1>Data not found</h1>
            )}

            {cardGrid ?
                (
                    <section className="what-we-do">
                        <div className="container">
                            <h1>{cardGrid?.SectionTitle}</h1>
                            <div className="compare-grid grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-10">
                                {cardGrid?.aboutcards?.length > 0 && cardGrid?.aboutcards.map((aboutCard, index) => (
                                    <div key={index}
                                        className={`card rounded-[20px] p-10 lg:p-[60px] ${aboutCard?.CardType === "Primary"
                                            ? "bg-[url('/images/perform-card.png')] bg-cover bg-no-repeat bg-center blue-card"
                                            : "bg-[#DBF4FD] light-card"
                                            }`}>
                                        <h3 className="text-left">{aboutCard?.CardTitle}</h3>
                                        {aboutCard?.CardDescription?.map((desc, i) => (
                                            <p key={i} className="normal  mt-[30px]">
                                                {desc?.children?.[0]?.text}
                                            </p>
                                        ))}

                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>
                )
                :
                <div className='container'>No data found</div>
            }
            {/* <section className="team-section padding-120">
                <div className="container">
                    <h1>Meet our team</h1>
                    <p className="large grey leading-7 text-center mt-[15px]">Office ipsum you must be muted. Productize 4-blocker looking dear.</p>

                </div>
            </section> */}

            {
                iconCard ? (

                    <section className="core-section padding-120">
                        <div className="container">
                            <h1>{iconCard?.Title}</h1>
                            <p className="large grey leading-7 text-center mt-[15px]">{iconCard?.Description}</p>
                            <div className="core-cards mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                                {iconCard?.IconCard.length > 0 && iconCard?.IconCard.map((iconItem, i) => (
                                    <div key={i} className="content-card p-[30px] rounded-[20px] border border-solid border-[#D9D9D9]">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_API}${iconItem?.Icon?.url}`}
                                            alt={iconItem.Icon.alternativeText || iconItem.Title}
                                        />
                                        <h5 className="text-left my-3">{iconItem.Title}</h5>
                                        <p className="normal grey">{iconItem.Description}</p>
                                    </div>)
                                )}

                                {/* <div className="content-card p-[30px] rounded-[20px] border border-solid border-[#D9D9D9]">
                                    <img src="/images/collaboration.svg" alt="" />
                                    <h5 className="text-left my-3">Collaboration</h5>
                                    <p className="normal grey">Creating a seamless ecosystem where engineers, designers, and technicians can work together effortlessly.</p>
                                </div>
                                <div className="content-card p-[30px] rounded-[20px] border border-solid border-[#D9D9D9]">
                                    <img src="/images/excellence.svg" alt="" />
                                    <h5 className="text-left my-3">Excellence</h5>
                                    <p className="normal grey">Delivering high-quality, error-free calculations, drawings, and models to enhance project outcomes.</p>
                                </div>
                                <div className="content-card p-[30px] rounded-[20px] border border-solid border-[#D9D9D9]">
                                    <img src="/images/empowerment.svg" alt="" />
                                    <h5 className="text-left my-3">Empowerment & Growth</h5>
                                    <p className="normal grey">Equipping industry professionals with powerful tools to enhance skills, productivity, and career advancement.</p>
                                </div> */}
                            </div>

                        </div>
                    </section>)
                    :
                    <div className='container'>No data found</div>}

            <section className="home-contact-section padding-120 bg-[url('/images/home-contact.png')] bg-cover bg-no-repeat bg-center">
                <div className="container">
                    <h1 className="white">Lets get you started!</h1>
                    <p className="large white leading-7 text-center mt-[15px]">We specialize in delivering cutting-edge engineering solutions and comprehensive BIM <br /> (Building Information Modeling) services to the Architecture, Engineering, and <br /> Construction (AEC) industry.</p>
                    <div className="cta flex justify-center items-center">
                        <Link href="/contact-us" className="primary-solid-btn white mt-10">Try for free</Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default AboutUS
