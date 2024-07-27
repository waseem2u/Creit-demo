import Image from "next/image";
import React from "react";
import logo from "../../public/logo/logo.png";
import { navbarMenu } from "../../src/Contants.jsx";
import CustomButton from "./CustomButton";
import vector from '../../public/vector/Vector.png';

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-[25%] p-[2rem]">
      <div>
        <Image src={logo} alt="logo" width={58} height={61} priority />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-[25px]">
          {navbarMenu.map((x) => {
            return (
              <li className="text-sm font-medium text-[#FBCDFF]">
                {x.menuName}
              </li>
            );
          })}
        </ul>
      </div>

      <CustomButton className={"flex justify-center items-center gap-[15px]"}>
        Connect
        <Image src={vector} alt="vector" width={15} height={13} priority />
      </CustomButton>
    </div>
  );
};

export default Navbar;
