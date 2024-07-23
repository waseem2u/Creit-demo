import React from "react";
import Image from "next/image";
import creitAi from "../../public/svg/CreitAi.svg";

const CreitAl = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-[35px]">
        <h1 className="text-3xl font-bold text-white ">
          Welcome to CREIT AI Advanced{" "}
          <span className="text-[#D563AE] text-3xl font-bold">
            trading bots
          </span>
        </h1>
        <p className="font-normal text-xl text-[#E1B5E5] w-[819px] text-center">
          CREIT will deploy over 300 Al infused bots utilizing several different
          trading strategies including: Grid trading , Trend following ,
          Mean-revision and Momentum
        </p>
      </div>
      <div className="flex justify-center items-center mt-[50px]">
        <Image src={creitAi} width={1001} height={703} alt="creitAi" priority />
      </div>
    </div>
  );
};

export default CreitAl;
