import React from "react";
import Image from "next/image";

const CreitRevenue = () => {
  return (
    <div className="pt-20 lg:pt-80">
      <div className="pb-20">
        <h1 className="text-center text-2xl lg:text-[36px] leading-7  font-bold text-white">
          Maximize Your Earnings: CREIT&apos;s Dynamic{" "}
          <span className="text-[#D563AE] text-2xl leading-7 lg:text-[36px] font-bold lg:leading-[54px]">
            Revenue Sharing Model
          </span>{" "}
        </h1>
      </div>
      {/* for mobile  */}

      <div className="flex justify-center items-center pb-12  lg:hidden">
        <Image
          src='/image/creitRevenue.png'
          alt="revenue"
          width={342}
          height={386}
          priority
        />
      </div>

      {/* for dextop  */}

      <div className="lg:flex lg:justify-center lg:items-center hidden">
        <Image src='/image/creitRevenue.png' alt="revenue" width={547} height={548} priority />
      </div>
      <div className="flex justify-center items-start flex-col p-8 md:p-12 lg:p-32 lg:gap-10">
        <h1 className="text-[22px]  font-bold text-[#FADCFF] justify-start">
          Milestone Growth Tracker:
        </h1>

        {/* for dextop  */}
        <div className="lg:block hidden">
          <p className="font-normal text-xl text-[#E1B5E5] leading-[30px] ">
            Total market cap = 10,000,000 $
          </p>
          <p className="font-normal text-xl text-[#E1B5E5] leading-[30px]">
            As market cap milestones are achieved, corresponding increases in
            revenue share percentages will be applied to reward our valued token
            holders even more generously. Taxes will be 5% on all buys/sells and
            will be used for various needs of the project.
          </p>
          <div>
            <Image src='/image/grafh.png' width={1168} height={207} alt="grafh" priority />
          </div>
        </div>

        {/* for mobile */}

        <div className="flex justify-center items-center flex-col-reverse gap-4 md:gap-12 lg:hidden mt-14">
          <p className="font-normal text-xl text-[#E1B5E5] leading-[30px]">
            <span className="text-[#E1B5E5] font-normal leading-[30px]">
              Total market cap = 10,000,000 $
            </span>
            As market cap milestones are achieved, corresponding increases in
            revenue share percentages will be applied to reward our valued token
            holders even more generously. Taxes will be 5% on all buys/sells and
            will be used for various needs of the project.
          </p>
          <div>
            <Image
              src='/image/graphX.png'
              width={1168}
              height={207}
              alt="grafh"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreitRevenue;
