import React from "react";
import "./Testimonials.css";
import { ImQuotesLeft } from "react-icons/im";
import image from "../../../../images/img-3.jpg";
import image1 from "../../../../images/img-04.jpg";

const Testimonials = () => {
  return (
    <>
      {/* testimonials  */}
      <section className="py-20 my-20 bg-[#5956e9] testimonials">
        <div className="px-8">
          <div className="text-white md:flex ">
            <div className="md:flex-1">
              <h2 className="section-title relative text-white font-semibold titleBg">
                Testimonials
              </h2>
              <h1 className="text-3xl md:text-[2.7rem] font-bold mb-2 leading-[3.5rem]">
                What Our Client’s About Us
              </h1>
              <p className="text-xl md:text-2xl font-[500]">
                Professional Design Agency to provide solutions
              </p>
            </div>
            <div className="hidden md:block md:flex-1 flex justify-center">
              <div className="imgBox relative">
                <div className="medalBox inline-block rounded-[7rem] overflow-hidden animate-float-y">
                  <img src={image} alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex items-center text-white">
            <div className="w-full my-5 md:w-[35%]">
              <img className="p-4 rounded-[12.5rem]" src={image1} alt="img" />
            </div>
            <div className="w-full md:w-[65%] md:p-8 text-gray-100">
              <span className="text-2xl md:text-5xl">
                <ImQuotesLeft />
              </span>
              <h2 className="text-xl md:text-[2.5rem] font-[500] mb-4">
                Sit amet consectetur adipiscing elit sed do eiusmod temporincde
                idunt ut labore et dolore magnas aliqua. Quis ipsum suspendissey
                sltrices gravida. Risus commodo verra maecenas lacusvel.
              </h2>
              <h5 className="text-2xl font-[700]">MD TANVIR AHMED</h5>
              <span className="text-xl font-[500]">Senior Manager</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
