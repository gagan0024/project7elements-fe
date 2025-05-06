import React from "react";
import "../../public/style/footer.scss";
import "../../public/style/buttons.scss";
import Image from "next/image";
import Footerlogo from "../../public/images/footer-logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer padding-80">
      <div className="container">
        <div className="row upper-row flex flex-col gap-8 justify-between lg:flex-row md:flex-row ">
          <div className="footer-link">
            <p className="bold">Quick Links</p>
            <div className="links-outer">
              <div className="links-inner">
                <Link href="/">Home</Link>
                <Link href="/about-us">About us</Link>
                <Link href="/contact-us">Contact us</Link>
                <Link href="#">Login</Link>
                <Link href="#">Sign up</Link>
              </div>
            </div>
          </div>

          <div className="footer-link">
            <p className="bold">MEP Design</p>
            <div className="links-outer">
              <div className="links-inner">
                <Link href="#">MEP Design</Link>
                <Link href="#">HVAC</Link>
                <Link href="#">Fire Fight</Link>
                <Link href="#">Plumbing</Link>
              </div>
            </div>
          </div>

          <div className="footer-link">
            <p className="bold">BIM Services</p>
            <div className="links-outer">
              <div className="links-inner">
                <Link href="#">BIM Solution</Link>
                <Link href="#">Staffing/Secondment</Link>
                <Link href="#">BIM Training</Link>
                <Link href="#">E-Learning</Link>
                <Link href="#">Cad to revit</Link>
                <Link href="#">Revit plugins</Link>
              </div>
            </div>
          </div>

          <div className="footer-link">
            <p className="bold">Stay Tuned</p>
            <div className="links-outer">
              <div className="links-inner">
                <Link href="#">Facebook</Link>
                <Link href="#">LinkedIn</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Instagram</Link>
              </div>
            </div>
          </div>

          <div className="footer-link">
            <Link href="/">
              <Image src={Footerlogo} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
