import React from "react";
import Image from "next/image";
import creitRevenue from "../../public/image/creitRevenue.png";
import creitRev from "../../public/image/creitRevenue.png";
import grafh from "../../public/image/grafh.png";
import graphX from "../../public/image/graphX.png";

const CreitRevenue = () => {
  return (
    <div className="pt-20 lg:pt-80">
      <div className="pb-20">
        <h1 className="text-center text-2xl lg:text-[36px] leading-7  font-bold text-white">
          Maximize Your Earnings: CREIT's Dynamic{" "}
          <span className="text-[#D563AE] text-2xl leading-7 lg:text-[36px] font-bold lg:leading-[54px]">
            Revenue Sharing Model
          </span>{" "}
        </h1>
      </div>
      {/* for mobile  */}

      <div className="flex justify-center items-center pb-12  lg:hidden">
        <Image
          src={creitRevenue}
          alt="revenue"
          width={342}
          height={386}
          priority
        />
      </div>

      {/* for dextop  */}

      <div className="lg:flex lg:justify-center lg:items-center hidden">
        <Image src={creitRev} alt="revenue" width={547} height={548} priority />
      </div>
      <div className="flex justify-center items-start flex-col p-8 lg:p-32 lg:gap-10">
        <h1 className="text-[22px]  font-bold text-[#FADCFF] justify-start">
          Milestone Growth Tracker:
        </h1>

        {/* for dextop  */}
        <div className="lg:block hidden">
          <p className="font-normal text-xl text-[#E1B5E5] lead-[30px] ">
            Total market cap = 10,000,000 $
          </p>
          <p className=" className='font-normal text-xl text-[#E1B5E5] lead-[30px]">
            As market cap milestones are achieved, corresponding increases in
            revenue share percentages will be applied to reward our valued token
            holders even more generously. Taxes will be 5% on all buys/sells and
            will be used for various needs of the project.
          </p>
          <div>
            <Image src={grafh} width={1168} height={207} alt="grafh" piority />
          </div>
        </div>

        {/* for mobile */}

        <div className="flex justify-center items-center flex-col-reverse gap-4 lg:hidden mt-14">
          <p className=" className='font-normal text-xl text-[#E1B5E5] lead-[30px]">
            <span className="font-normal  text-[#E1B5E5] lead-[30px]">
              Total market cap = 10,000,000 $
            </span>
            As market cap milestones are achieved, corresponding increases in
            revenue share percentages will be applied to reward our valued token
            holders even more generously. Taxes will be 5% on all buys/sells and
            will be used for various needs of the project.
          </p>
          <div>
            <Image src={graphX} width={1168} height={207} alt="grafh" piority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreitRevenue;
