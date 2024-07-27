import React from "react";
import Image from "next/image";
import trading from "../../public/image/trading.png";

const Trading = () => {
  return (
    <div className="flex justify-center items-center gap-[140px]">
      <div className="w-[38%]">
        <h1 className="text-[36px] font-bold leading-[54px] text-[#E1B5E5]">
          CREIT uses an advanced AI trading algorithms to achieve {' '}
          <span className="text-[#D563AE] text-[36px] font-bold leading-[54px]">
            consistent double digit returns
          </span>
        </h1>
        <p className="w-[538px] h-[180px] font-normal text-xl text-[#E1B5E5] pt-[46px]">
          Along with our dynamic Real Estate Portfolio, the CREIT team has built
          some of the most advanced trading bots in the industry. Proven double
          digit gains over the last year, the CREIT team invest in a variety of
          Large/Medium/Small cap cryptocurrencies to reward CREIT holders with
          the highest rev share returns in the industry.
        </p>
      </div>
      <div>
        <Image src={trading} alt="trading" width={465} height={455} priority />
      </div>
    </div>
  );
};

export default Trading;
