import React from "react";
import Image from "next/image";
import creitAi from "../../public/svg/CreitAi.svg";

const CreitAl = () => {
  return (
    <div className="pt-5 lg:block hidden">
      <div className="flex flex-col items-center gap-9">
        <h1 className="text-center text-2xl lg:text-[36px]  font-bold text-white ">
          Welcome to CREIT AI Advanced{" "}
          <span className="text-[#D563AE] text-2xl  font-bold  sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            trading bots
          </span>
        </h1>
        <p className="font-normal text-xl text-[#E1B5E5] text-center w-full max-w-[819px]">
          CREIT will deploy over 300 Al infused bots utilizing several different
          trading strategies including: Grid trading , Trend following ,
          Mean-revision and Momentum
        </p>
      </div>
      <div className="flex justify-center items-center flex-col pt-[5rem]">
        <div>
          <Image
            src={creitAi}
            width={1001}
            height={703}
            alt="creitAi"
            priority
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-12 pt-[5rem]">
          <p className="w-full max-w-[1001px]  text-[#E1B5E5] text-center font-normal text-2xl">
            Our bots have been operational for over a year, yielding consistent
            double digit performance. CREIT will achieve at LEAST a very
            conservative <span className="text-[#D563AE]">24% APY,</span> with
            proven results coming in much higher.
          </p>
          <p className="w-full max-w-[1001px]  text-[#E1B5E5] text-center font-normal text-2xl">
            A distinct advantage to CREIT holders is that our bots will yield
            results regardless of bull/bear market sentiment. Paired with a
            solid Real Estate Portfolio, CREIT will be one of the highest rev
            share models in the crypto industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreitAl;
