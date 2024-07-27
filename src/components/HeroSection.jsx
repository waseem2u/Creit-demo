import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import creitBg from '../../public/image/creitBg.png';

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-[35px] p-[2rem]">
        <h1 className="text-center text-xs font-bold text-white sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          CREIT: Simplifying{" "}
          <span className="text-[#D563AE] text-base font-bold  sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Crypto-Real Estate
          </span>{" "}
          Investments
        </h1>
        <p className="w-[33%] h-[77px] font-normal text-xl text-[#E1B5E5]  text-center sm:text-sm ">
          Step into the future of investing. CREIT combines high-performing Real
          Estate dividends with the industry's leading trading bot, aiming to
          offer the best revenue share in crypto. Simplify your path to wealth.
        </p>
        <CustomButton children={'Read Whitepaper'}/>
        
      </div>
      <div className="w-full h-full">
          <Image src={creitBg} alt="creitBg" priority/>
        </div>
    </div>
  );
};

export default HeroSection;
