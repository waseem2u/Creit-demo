import React from "react";
import CustomButton from "./CustomButton";

const HeroSection = () => {
  return (
    // for dextoop
    <div>
      <div className="bg-[url('/image/creitBg.png')]  md:block md:h-screen bg-no-repeat bg-cover   h-screen hidden">
        <div className="flex justify-center items-center flex-col gap-[40px] p-[18rem]">
          <h1 className="text-center text-2xl lg:text-4xl font-bold text-white sm:text-lg md:text-xl  xl:text-4xl 2xl:text-5xl">
            CREIT: Simplifying{" "}
            <span className="text-[#D563AE] text-2xl  font-bold  sm:text-lg md:text-xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
              Crypto-Real Estate
            </span>{" "}
            Investments
          </h1>
          <p className="w-full md:w-10/12 lg:w-[43%] font-normal text-base lg:text-[18px] text-[#E1B5E5]  text-center">
            Step into the future of investing. CREIT combines high-performing
            Real Estate dividends with the industry&apos;s leading trading bot,
            aiming to offer the best revenue share in crypto. Simplify your path
            to wealth.
          </p>
          <CustomButton>Read Whitepaper</CustomButton>
        </div>
      </div>

      {/* // for mobile */}
      <div className="md:hidden  block bg-[url('/image/bgMobile.png')] bg-cover bg-no-repeat bg-inherit h-[932px] w-full max-w-[430px] ">
        <div className="flex justify-center items-center flex-col gap-[40px] p-[2rem]">
          <h1 className="text-center text-2xl lg:text-4xl font-bold text-white sm:text-lg md:text-xl  xl:text-4xl 2xl:text-5xl">
            CREIT: Simplifying
            <span className="text-[#D563AE] text-2xl  font-bold  sm:text-lg md:text-xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
              Crypto-Real Estate
            </span>{" "}
            Investments
          </h1>

          <p className="w-full md:w-10/12 lg:w-[43%] font-normal text-base lg:text-[18px] text-[#E1B5E5]  text-center">
            Step into the future of investing. CREIT combines high-performing
            Real Estate dividends with the industry&apos;s leading trading bot,
            aiming to offer the best revenue share in crypto. Simplify your path
            to wealth.
          </p>
          <CustomButton>Read Whitepaper</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
