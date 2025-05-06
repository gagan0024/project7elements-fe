import "../../public/style/design.scss"
import "../../public/style/buttons.scss"
import Link from 'next/link'


export default function FeatureSingleBanner(props) {
    return (
        <section className="design-calc-banner padding-120 mt-16 !pb-5 bg-white">
            <div className="container">
                <p className="bold text-center mb-2.5">{props.subtitle}</p>
                <h1>{props.title}</h1>
                <p className="large grey text-center leading-7 mt-2.5 mb-[30px]">{props.description}</p>
                <div className="cta flex justify-center items-center">
                    <Link href="/contact-us" className="primary-solid-btn mb-10">Try for free</Link>
                </div>
                <img src={`${process.env.NEXT_PUBLIC_BASE_API}${props.image.url}`} alt="" className="w-full" />
            </div>
        </section>
    )
}

