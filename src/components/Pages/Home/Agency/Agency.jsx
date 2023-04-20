import React, { useState } from "react";
import "./Agency.css";
import { ImManWoman } from "react-icons/im";
import { FaRocket, FaStaylinked } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";

const Agency = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section>
        <div className="px-8 py-8 bg-[#f3f3f3] dark:bg-[#0F172A]">
          {/* Agency header  */}

          <div className="flex justify-center ">
            <div className="text-center mb-10">
              <h3 className="section-title font-semibold  dark:text-[#38BDF8] st-one relative">
                Agency Statistics
              </h3>
              <h1 className="text-[#1C2880] dark:text-[#E2E8F0] text-[2rem] md:text-[3.5rem] leading-[3.2rem]  font-semibold mb-2">
                Why People’s Like Us
              </h1>
              <p className="text-[1.1rem] dark:text-[#8C9BB6] md:text-[1.375rem] font-semibold para-color mt-[1.375rem]">
                Professional Design Agency to provide solutions
              </p>
            </div>
          </div>

          <div className="md:flex justify-evenly mt-10 pb-10">
            <div className="p-10 text-center bg-white dark:bg-transparent shadow-agency  mb-8 ">
              <div className="flex justify-center mb-4">
                <ImManWoman className="text-5xl text-[#061835] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2  text-[#0D1425] dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={10} start={0} delay={0} duration={2} />
                )}
                K+
              </h3>
              <p className="text-xl text-[#0D1425] font-semibold  dark:text-[#8C9BB6]">
                Total Recruiter
              </p>
            </div>

            <div className="p-10 text-center bg-white dark:bg-transparent shadow-agency  mb-8 ">
              <div className="flex justify-center mb-4">
                <RiMoneyDollarBoxFill className="text-5xl text-[#061835] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl text-[#0D1425] font-bold mb-2 dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={102} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-[#0D1425] dark:text-[#8C9BB6]">
                Got Job
              </p>
            </div>

            <div className="p-10 text-center bg-white dark:bg-transparent shadow-agency  mb-8 ">
              <div className="flex justify-center mb-4">
                <FaStaylinked className="text-5xl text-[#061835] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl  font-bold mb-2 text-[#0D1425] dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={55} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-[#0D1425] dark:text-[#8C9BB6]">
                All interviewed
              </p>
            </div>

            <div className="p-10 text-center bg-white dark:bg-transparent shadow-agency  mb-8 ">
              <div className="flex justify-center mb-4">
                <MdRateReview className="text-5xl text-[#061835] dark:text-[#38BDF8]" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-[#0D1425] dark:text-[#E2E8F0]">
                {counterOn && (
                  <CountUp end={44} start={0} delay={0} duration={2} />
                )}
                +
              </h3>
              <p className="text-xl font-semibold text-[#0D1425] dark:text-[#8C9BB6]">
                Total Review
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Agency;
