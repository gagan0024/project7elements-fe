'use client';
import { useEffect } from 'react';
import Image from 'next/image'
import React from 'react'
import "../../public/style/header.scss"
import "../../public/style/buttons.scss"
import Logo from "../../public/images/header-logo.svg"
import DropdownArrow from "../../public/images/dropdown-arrow.svg"
import Link from 'next/link'
 
const Header = () => {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 991px)");
    
        function initMobileDropdown() {
          const navLinks = document.querySelectorAll(".nav-link");
    
          if (!navLinks.length) return;
    
          navLinks.forEach((navLink) => {
            const link = navLink.querySelector("a");
            const dropdown = navLink.querySelector(".dropdown");
            const arrow = navLink.querySelector(".nav-arrow");
    
            if (!link || !dropdown || !arrow) return;
    
            link.addEventListener("click", function (event) {
              event.preventDefault(); // Prevent link navigation
    
              const isDropdownOpen = dropdown.classList.contains("open");
    
              // Close all dropdowns
              document.querySelectorAll(".dropdown").forEach((d) => {
                d.classList.remove("open");
                d.style.display = "none";
              });
    
              document.querySelectorAll(".nav-arrow").forEach((a) => {
                a.style.transform = "rotate(0deg)";
              });
    
              // Toggle the clicked dropdown
              if (isDropdownOpen) {
                dropdown.classList.remove("open");
                dropdown.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
              } else {
                dropdown.classList.add("open");
                dropdown.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
              }
            });
          });
    
          // Close dropdowns when clicking outside
          document.addEventListener("click", function (event) {
            if (!event.target.closest(".nav-link")) {
              document.querySelectorAll(".dropdown").forEach((d) => {
                d.classList.remove("open");
                d.style.display = "none";
              });
    
              document.querySelectorAll(".nav-arrow").forEach((a) => {
                a.style.transform = "rotate(0deg)";
              });
            }
          });
        }
    
        function handleMediaQueryChange(e) {
          if (e.matches) {
            initMobileDropdown();
          }
        }
    
        if (mediaQuery.matches) {
          initMobileDropdown();
        }
    
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        // Cleanup
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }, []);
     
    return (
        <header>
            <div className="container">
                <input type="checkbox" name="check" id="check" />
                <div className="logo-container">
                    <Link href="/">
                        <Image src={Logo} alt="" />
                        {/* <img src="img/header-logo.svg" alt="" /> */}
                    </Link>
                </div>
                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link">
                                <Link href="/about-us">About</Link>
                            </li>
                            <li className="nav-link">
                                <a href="/">MEP Design
                                    <Image src={DropdownArrow} alt="" className="nav-arrow" />
                                </a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link href="/design-calculation">Design Calculation</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link href="/drawing-development">Drawing Development</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
 
                            <li className="nav-link">
                                <Link href="#">BIM Services
                                    <Image src={DropdownArrow} alt="" className="nav-arrow" />
                                </Link>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link href="/extract-quantity">Extract Quantity</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link href="/comparision-products">Compare Products</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link">
                                <Link href="/contact-us">
                                    Contact us
                                </Link>
                            </li>
 
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <div className="cta-btn">
                        <Link href="" className="simple-btn">
                            Sign up
                        </Link>
                        <Link href="" className="primary-solid-btn">
                            Login
                        </Link>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
 
            </div>
        </header>
    )
}
 
export default Header