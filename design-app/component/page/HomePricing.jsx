import React from "react";
import "../../public/style/home.scss";
import "../../public/style/buttons.scss";
import Link from "next/link";
import Image from "next/image";
import Tick from "../../public/images/tick.svg";
import Largetick from "../../public/images/large-tick.svg";
import Arrowforward from "../../public/images/arrow-forward.svg";
import Arrowwhite from "../../public/images/arrow-forward-white.svg";

const HomePricing = () => {
  return (
    <section className="pricing-plans padding-120 bg-[#FAFAFA]">
      <div className="container">
        <h1>Pricing plans</h1>

        <div className="plan-section mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="plan-card flex flex-col items-start py-[30px] border border-solid border-[#D9D9D9] rounded-2xl bg-white">
            <div className="px-[30px]">
              <h4 className="text-left">Free Plan</h4>
              <p className="small normal dark-light mt-4 mb-5">
                Office ipsum you must be muted. Club blue game driving items
                quarter while responsible.{" "}
              </p>
            </div>

            <div className="px-[30px] flex flex-row gap-[3px] items-baseline w-full">
              <h2 className="text-left opacity-0">$299</h2>
              <sub className="text-[#4d4d4d] font-normal opacity-0">/mo</sub>
            </div>

            <div className="px-[30px] w-full">
              <Link href="/contact-us" className="simple-large-btn w-full mt-5 mb-5">
                Select Plan <Image src={Arrowforward} alt="" />
              </Link>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <p className="normal dark-light mt-5 mb-5">
                In Starter Plan you’ll have
              </p>
              <p className="bold">Design Calculation</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Electrical</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">HVAC</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Fire Fight</p>
              </div>
            </div>

            <div className="px-[30px]">
              <p className="bold mt-5">Cad to Revit</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Cad to Revit</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Project Browser</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Annotation</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Dimensioning</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sections</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Legends</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sheets</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">MEP</p>
              </div>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Quantity Extraction</p>
              </div>
            </div>

            <div className="px-[30px] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Product Comparision</p>
              </div>
            </div>
          </div>

          <div className="plan-card flex flex-col items-start py-[30px] border border-solid border-[#D9D9D9] rounded-2xl bg-white">
            <div className="px-[30px]">
              <h4 className="text-left">Starter Plan</h4>
              <p className="small normal dark-light mt-4 mb-5">
                Office ipsum you must be muted. Club blue game driving items
                quarter while responsible.{" "}
              </p>
            </div>

            <div className="px-[30px] flex flex-row gap-[3px] items-baseline w-full">
              <h2 className="text-left ">$299</h2>
              <sub className="text-[#4d4d4d] font-normal">/mo</sub>
            </div>

            <div className="px-[30px] w-full">
              <Link
                href="/contact-us"
                className="simple-large-btn white w-full mt-5 mb-5 justify-between border-transparent hover:border-transparent"
              >
                Select Plan <Image src={Arrowwhite} alt="" />
              </Link>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <p className="normal dark-light mt-5 mb-5">
                In Starter Plan you’ll have
              </p>
              <p className="bold">Design Calculation</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Electrical</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">HVAC</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Fire Fight</p>
              </div>
            </div>

            <div className="px-[30px]">
              <p className="bold mt-5">Cad to Revit</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Cad to Revit</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Project Browser</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Annotation</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Dimensioning</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sections</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Legends</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sheets</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">MEP</p>
              </div>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Quantity Extraction</p>
              </div>
            </div>

            <div className="px-[30px] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Product Comparision</p>
              </div>
            </div>
          </div>

          <div className="plan-card flex flex-col items-start py-[30px] border border-solid border-[#D9D9D9] rounded-2xl bg-white">
            <div className="px-[30px]">
              <h4 className="text-left">Professional Plan</h4>
              <p className="small normal dark-light mt-4 mb-5">
                Office ipsum you must be muted. Club blue game driving items
                quarter while responsible.{" "}
              </p>
            </div>

            <div className="px-[30px] flex flex-row gap-[3px] items-baseline w-full">
              <h2 className="text-left">$399</h2>
              <sub className="text-[#4d4d4d] font-normal">/mo</sub>
            </div>

            <div className="px-[30px] w-full">
              <Link
                href="/contact-us"
                className="simple-large-btn white w-full mt-5 mb-5 justify-between  border-transparent hover:border-transparent"
              >
                Select Plan <Image src={Arrowwhite} alt="" />
              </Link>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <p className="normal dark-light mt-5 mb-5">
                In Starter Plan you’ll have
              </p>
              <p className="bold">Design Calculation</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Electrical</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">HVAC</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Fire Fight</p>
              </div>
            </div>

            <div className="px-[30px]">
              <p className="bold mt-5">Cad to Revit</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Cad to Revit</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Project Browser</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Annotation</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Dimensioning</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sections</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Legends</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sheets</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">MEP</p>
              </div>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Quantity Extraction</p>
              </div>
            </div>

            <div className="px-[30px] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Product Comparision</p>
              </div>
            </div>
          </div>

          <div className="plan-card flex flex-col items-start py-[30px] border border-solid border-[#D9D9D9] rounded-2xl bg-white">
            <div className="px-[30px]">
              <h4 className="text-left">Team Plan</h4>
              <p className="small normal dark-light mt-4 mb-5">
                Office ipsum you must be muted. Club blue game driving items
                quarter while responsible.{" "}
              </p>
            </div>

            <div className="px-[30px] flex flex-row gap-[3px] items-baseline w-full">
              <h2 className="text-left opacity-0">$399</h2>
              <sub className="text-[#4d4d4d] font-normal opacity-0">/mo</sub>
            </div>

            <div className="px-[30px] w-full">
              <Link
                href="/contact-us"
                className="simple-large-btn white w-full mt-5 mb-5 justify-between border-transparent hover:border-transparent"
              >
                Select Plan <Image src={Arrowwhite} alt="" />
              </Link>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <p className="normal dark-light mt-5 mb-5">
                In Starter Plan you’ll have
              </p>
              <p className="bold">Design Calculation</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Electrical</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">HVAC</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Fire Fight</p>
              </div>
            </div>

            <div className="px-[30px]">
              <p className="bold mt-5">Cad to Revit</p>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Cad to Revit</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Project Browser</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Annotation</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Dimensioning</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sections</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Legends</p>
              </div>
              <div className="key-points mt-2.5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">Sheets</p>
              </div>
              <div className="key-points mt-2.5 mb-5 flex flex-row gap-2.5">
                <Image src={Tick} alt="" />
                <p className="normal dark-light">MEP</p>
              </div>
            </div>

            <div className="px-[30px] border-y-2 border-solid border-[#D9D9D9] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Quantity Extraction</p>
              </div>
            </div>

            <div className="px-[30px] w-full">
              <div className="key-points mt-5 mb-5 flex flex-row gap-2.5">
                <Image src={Largetick} alt="" />
                <p className="bold">Product Comparision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
