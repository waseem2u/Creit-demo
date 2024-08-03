import React from "react";
import Image from "next/image";
import trading from "../../public/image/trading.png";

const Trading = () => {
  return (
    <div className="p-4 md:p-8 md:mt-48 md:mb-48 lg:p-0 lg:flex lg:justify-center lg:items-center lg:flex-row flex justify-center items-center flex-col md:gap[97px] md:flex-row gap-[70px] lg:gap-[180px] ">
      <div className=" lg:w-[38%] w-full pt-12 lg:pt-0">
        <h1 className="text-2xl leading-9 lg:text-[36px] font-bold lg:leading-[54px] text-[#E1B5E5]">
          CREIT uses an advanced AI trading algorithms to achieve{" "}
          <span className="text-[#D563AE] leading-9 text-2xl lg:text-[36px] font-bold lg:leading-[54px]">
            consistent double digit returns
          </span>
        </h1>
        <p className="text-base lg:w-[538px] lg:h-[180px] font-normal lg:text-xl text-[#E1B5E5] pt-[30px] lg:pt-[46px]">
          Along with our dynamic Real Estate Portfolio, the CREIT team has built
          some of the most advanced trading bots in the industry. Proven double
          digit gains over the last year, the CREIT team invest in a variety of
          Large/Medium/Small cap cryptocurrencies to reward CREIT holders with
          the highest rev share returns in the industry.
        </p>
      </div>
      <div className="hidden lg:block">
        <Image src={trading} alt="trading" width={465} height={455} priority />
      </div>
      <div className="block lg:hidden">
        <Image src={trading} alt="trading" width={368} height={369} priority />
      </div>
    </div>
  );
};

export default Trading;
