import React from "react";
import "../../public/style/home.scss";
import Header from "@/component/common/Header";
import Footer from "@/component/common/Footer";

const Page = () => {
  return (
    <>
      <Header />
      <section className="core-features padding-120">
        <div className="container">
          <h5 className="grey mb-2.5">End to end solutions</h5>
          <h1>Our Core Features</h1>

          <div className="features-card mt-20 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <a
              href="/design-calculation"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-1.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Design Calculation</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
            <a
              href="/drawing-development"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-2.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Drawing Development</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
            <a
              href="/extract-quantity"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-3.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Extract Quantity</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
            <a
              href="/comparision-products"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-4.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Compare Products</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
            <a
              href="#"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-5.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Construction Management</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
            <a
              href="#"
              className="card flex flex-col p-2 rounded-2xl border-2 border-solid border-[#E5E5E5]"
            >
              <img src="/images/feature-6.png" alt="" className="w-full" />
              <div className="content pt-10 pb-5 px-5">
                <h5 className="text-left">Construction Material E-Commerce</h5>
                <p className="normal grey mt-3">
                  To budget for your construction project, estimate material
                  costs like concrete and steel, then calculate labor based on
                  design complexity. Include equipment rentals and permits
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
