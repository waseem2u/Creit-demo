import Image from "next/image";
import React from "react";
import { navbarMenu } from "../Contants";
import CustomButton from "./CustomButton";


const Navbar = () => {
  return (
    <div className="flex justify-center items-center md:gap-20 lg:gap-[25%] p-[2rem]">
      <div>
        <Image src='/logo/logo.png' alt="logo" width={58} height={61} priority />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-[25px]">
          {navbarMenu.map((x ) => {
            return (
              <li key={x.id} className="text-sm font-medium text-[#FBCDFF]">
                {x.menuName}
              </li>
            );
          })}
        </ul>
      </div>

      <CustomButton  className={"flex justify-center items-center gap-[15px]"}>
        Connectd
        <Image src='/vector/Vector.png' alt="vector" width={15} height={13} priority />
      </CustomButton>
    </div>
  );
};

export default Navbar;
