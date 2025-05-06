import React from 'react'
import "../../public/style/home.scss"
import Link from 'next/link'

const TryFree = () => {
    return (
        <section className="try-banner padding-120 bg-[url('/images/try-banner.png')] bg-cover bg-no-repeat bg-center">
            <div className="container">
                <h2 className="white text-left">Try for Free!</h2>
                <p className="white large my-5">Discover our features and evaluate their <br />suitability for your needs.</p>
                <Link href="" className="primary-solid-btn">
                    Sign up
                </Link>
            </div>
        </section>
    )
}

export default TryFree
