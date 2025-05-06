import React from "react";
import "../../public/style/products.scss";
import "../../public/style/buttons.scss";
import Image from "next/image";
import Philips from "../../public/images/philips-brand.svg";
import Havells from "../../public/images/havells-brand.svg";
import Wipro from "../../public/images/wipro-brand.svg";
import Bajaj from "../../public/images/bajaj-brand.svg";
import Syska from "../../public/images/syska-brand.svg";
import Daikin from "../../public/images/daikin-brand.svg";
import Voltas from "../../public/images/voltas-brand.svg";
import Carrier from "../../public/images/carrier-brand.svg";
import Bluestar from "../../public/images/blue-star.svg";
import Hitachi from "../../public/images/hitachi-brand.svg";
import Polycab from "../../public/images/polycab-brand.svg";
import Kei from "../../public/images/Kei-brand.svg";
import Kirloskar from "../../public/images/kirloskar-brand.svg";
import Escorts from "../../public/images/escorts-brand.svg";
import Schneider from "../../public/images/schneider-brand.svg";
import Siemens from "../../public/images/siemens-brand.svg";
import Basicdetails from "../../public/images/basic-details.svg";
import Productsbrand from "../../public/images/products-brand.svg";
import Comparision from "../../public/images/comparision.svg";
import Exportreport from "../../public/images/export-report.svg";
import Compareproductsbanner from "../../public/images/compare-products.png";
import Details from "../../public/images/Details.svg";
import Brandproduct from "../../public/images/Brand-product.svg";
import Productbrandbanner from "../../public/images/products-brand.png";
import Multipleproductsbanner from "../../public/images/multiple-products-banner.png";
import Compareproducts from "../../public/images/Product-Comparison.svg";
import Exportfile from "../../public/images/Export-File.svg";
import Exportfilebannner from "../../public/images/export-banner.png";

const ProductsProcess = () => {
  return (
    <section className="process-section padding-120 bg-white">
      <div className="container mx-auto">
        <div className="brand-section mb-[120px]">
          <h1>All range of brands to compare</h1>
          <p className="large grey text-center mt-5 mb-[60px]">
            Office ipsum you must be muted. Productize 4-blocker looking dear{" "}
            <br /> donuts talk pulling other.
          </p>

          {/* <div className="brand-logo grid grid-cols-8 justify-center items-start self-stretch content-start gap-5">
                        <Image src={Philips} alt="" className="w-full"/>
                        <Image src={Havells} alt="" className="w-full"/>
                        <Image src={Wipro} alt="" className="w-full"/>
                        <Image src={Bajaj} alt="" className="w-full"/>
                        <Image src={Syska} alt="" className="w-full"/>
                        <Image src={Daikin} alt="" className="w-full"/>
                        <Image src={Voltas} alt="" className="w-full"/>
                        <Image src={Carrier} alt="" className="w-full"/>
                        <Image src={Bluestar} alt="" className="w-full"/>
                        <Image src={Hitachi} alt="" className="w-full"/>
                        <Image src={Polycab} alt="" className="w-full"/>
                        <Image src={Kei} alt="" className="w-full"/>
                        <Image src={Kirloskar} alt="" className="w-full"/>
                        <Image src={Escorts} alt="" className="w-full"/>
                        <Image src={Schneider} alt="" className="w-full"/>
                        <Image src={Siemens} alt="" className="w-full"/>
                    </div> */}

          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Philips} alt="Philips" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Havells} alt="Havells" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Wipro} alt="Wipro" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Bajaj} alt="Bajaj" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Syska} alt="Syska" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Daikin} alt="Daikin" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Voltas} alt="Voltas" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Carrier} alt="Carrier" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Bluestar} alt="Bluestar" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Hitachi} alt="Hitachi" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Polycab} alt="Polycab" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Kei} alt="Kei" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Kirloskar} alt="Kirloskar" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Escorts} alt="Escorts" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Schneider} alt="Schneider" className="w-full" />
            </div>
            <div className="w-1/4 md:w-[10.5%] flex justify-center">
              <Image src={Siemens} alt="Siemens" className="w-full" />
            </div>
          </div>
        </div>

        <div className="compare-section">
          <h1>Easy to compare with us</h1>
          {/* <p className="large grey text-center leading-7 mt-5">With advanced algorithms, real-time data integration, and AI-driven insights, our solution empowers engineers, architects, and designers to
                        create optimized, sustainable, and cost-effective building systems effortlessly. Whether it’s load calculations, duct and pipe sizing, or
                        energy efficiency analysis, our platform streamlines every step, helping you focus on innovation while we handle the complexities.
                        Experience the future of MEP design—where automation bridges the gap between concept and reality.
                    </p> */}

          <div className="compare-cards mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
              <Image src={Basicdetails} alt="" />
              <h5 className="text-left my-3">Add Basic details</h5>
              <p className="normal grey">
                Enter specifications such as Building Type, location, service
                type, compliance standards, and budget range.
              </p>
            </div>
            <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
              <Image src={Productsbrand} alt="" />
              <h5 className="text-left my-3">Select product and brands</h5>
              <p className="normal grey">
                Choose the type of MEP product you want to compare Reply
              </p>
            </div>
            <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
              <Image src={Comparision} alt="" />
              <h5 className="text-left my-3">
                Compare multiple or get individual details
              </h5>
              <p className="normal grey">
                The system pulls real-time product details, technical
                specifications, and pricing from various brands and suppliers.
              </p>
            </div>
            <div className="content-card p-10 rounded-[20px] border border-solid border-[#D9D9D9]">
              <Image src={Exportreport} alt="" />
              <h5 className="text-left my-3">Easy export</h5>
              <p className="normal grey">
                Download a structured comparison report highlighting the
                best-suited product based on your project needs.
              </p>
            </div>
          </div>
        </div>

        <div className="calculation-div flex flex-col">
          <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
            <div className="img-col m-auto">
              <Image src={Compareproductsbanner} alt="" className="w-full" />
            </div>

            <div className="content pl-0 lg:pl-20 m-auto">
              <Image src={Details} alt="" />
              <h3 className="mt-5 mb-[25px] text-left">Add Basic details</h3>
              <p className="dark-light normal">
                Before comparing products, it's essential to define the specific
                needs of your project. This step ensures that the selected MEP
                products align with the project’s technical, financial, and
                regulatory requirements.
                <br />
                <br />
                Specify whether the project is a commercial building,
                residential complex, hospital, industrial facility, data center,
                airport, or any other infrastructure type. Different buildings
                have varying MEP requirements. Enter geographical details.
              </p>
            </div>
          </div>

          <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
            <div className="content pr-0 lg:pr-20 m-auto">
              <Image src={Brandproduct} alt="" />
              <h3 className="mt-5 mb-[25px] text-left">
                Select product and brands
              </h3>
              <p className="dark-light normal">
                Once the project requirements are defined, the next step is to
                select the type of product needed and choose from available
                brands. This ensures that the comparison is based on relevant
                product categories and industry-leading manufacturers.
              </p>
            </div>
            <div className="img-col m-auto">
              <Image src={Productbrandbanner} alt="" className="w-full" />
            </div>
          </div>

          <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
            <div className="img-col m-auto">
              <Image src={Multipleproductsbanner} alt="" className="w-full" />
            </div>
            <div className="content pl-0 lg:pl-20  m-auto">
              <Image src={Compareproducts} alt="" />
              <h3 className="mt-5 mb-[25px] text-left">
                Compare multiple or get individual details
              </h3>
              <p className="dark-light normal">
                Once the product type is chosen, users can: Select a Preferred
                Brand, Compare Multiple Brands, Filter Based on Certification &
                Standards and Check Product Availability & Lead Time
              </p>
            </div>
          </div>

          <div className="calculation-cards rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-none grid grid-cols-2 lg:mt-[120px] mt-20">
            <div className="content pr-0 lg:pr-20 m-auto">
              <Image src={Exportfile} alt="" />
              <h3 className="mt-5 mb-[25px] text-left">Easy export</h3>
              <p className="dark-light normal">
                After selecting the product type, brands, and performing a
                detailed comparison, the final step is to generate and extract a
                comprehensive result report. This report provides key insights
                for decision-making in procurement, budgeting, and technical
                validation.
                <br />
                <br />
                The system allows users to generate reports in multiple formats
                for ease of sharing and documentation.
              </p>
            </div>
            <div className="img-col m-auto">
              <Image src={Exportfilebannner} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsProcess;
