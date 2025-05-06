import React from "react";
import "../../public/style/home.scss";
import Image from "next/image";
import copilot from "../../public/images/copilot.png";
import RLogo from "../../public/images/R-logo.png";
import DDLogo from "../../public/images/D-D-logo.png";
import Teams from "../../public/images/teams.png";
import CAD from "../../public/images/CAD-logo.png";

const Integration = () => {
  return (
    <section className="integration padding-120">
      <div className="container">
        <h1>Seamless Integrations</h1>
        <p className="normal dark-light mt-2.5 text-center">
          Streamline your MEP designs with our clash detection and route
          optimization feature. Our app spots clashes between building <br />{" "}
          elements and suggests smart rerouting solutions to reduce conflicts
          and rework.
        </p>
        <div className="logo-div flex flex-wrap md:flex-row lg:flex-row justify-center items-center gap-[30px] my-16 lg:my-36 md:my-16">
          <Image src={copilot} alt="" className="w-auto" />
          <Image src={RLogo} alt="" className="w-auto" />

          {/* Wrap DDLogo in a div */}
          <div className="w-full flex justify-center md:w-auto md:flex-none">
            <Image
              src={DDLogo}
              alt=""
              className="logo rounded-[40px] shadow-[0px_100px_75px_rgba(0,0,0,0.07),0px_72.734px_50.552px_rgba(0,0,0,0.06),0px_50.625px_32.695px_rgba(0,0,0,0.05),0px_33.203px_20.288px_rgba(0,0,0,0.04),0px_20px_12.188px_rgba(0,0,0,0.04),0px_10.547px_7.251px_rgba(0,0,0,0.03),0px_4.375px_4.336px_rgba(0,0,0,0.02),0px_1.016px_2.3px_rgba(0,0,0,0.01)] w-auto"
            />
          </div>

          <Image src={Teams} alt="" className="w-auto" />
          <Image src={CAD} alt="" className="w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Integration;
