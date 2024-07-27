import React from "react";
import Image from "next/image";
import creitMeet from "../../public/image/creitMeet.png";

const CreitMeet = () => {
  return (
    <div className="pt-48">
      <h1 className="text-center text-[36px]  font-bold text-white  pb-24">
        Unlock the Future: Where{" "}
        <span className="text-[#D563AE] text-base font-bold  sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Crypto Meets Real Estate Perks
        </span>{" "}
      </h1>
      <div className="flex justify-center items-center gap-12">
        <div>
          <Image
            src={creitMeet}
            width={602}
            height={1146}
            alt="creitMeet"
            priority
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-64">
          <div>
            <h1 className="font-bold text-xl text-[#FADCFF] leading-9">
              Problem with Current Cryptocurrencies:
            </h1>
            <p className="w-full max-w-[448px] font-normal text-xl text-[#E1B5E5] leading-[30px]">
              Many cryptocurrencies fail to offer real value or guarantees,
              leading to lost trust and disappointing investments.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-[#FADCFF] leading-9">
              CREIT's Unique Solution:
            </h1>
            <p className="w-full max-w-[448px] font-normal text-xl text-[#E1B5E5] leading-[30px]">
              CREIT introduces a revolutionary Real Estate Portfolio offering
              tangible benefits and dual returns, boosting value and trust from
              day one.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-[#FADCFF] leading-9">
              Exclusive Holiday Rentals:
            </h1>
            <p className="w-full max-w-[448px] font-normal text-xl text-[#E1B5E5] leading-[30px]">
              Benefit from special pricing on holiday rentals as a CREIT holder,
              enjoying unique advantages based on your investment level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreitMeet;
