import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:pt-5 md:pr-[122px] md:pb-5 md:pl-[122px] lg:gap-[1200px] bg-[#20002D] lg:flex lg:justify-center lg:items-center flex justify-center items-center lg:flex-row flex-col">
      <p className="font-normal text-sm text-[#E1B5E5]">
        Copyright © 2024 – CREIT | terms & conditions
      </p>
      <div className="flex justify-center items-center gap-4">
        <FaLinkedinIn  className="text-[#E1B5E5]"/>
        <FaTwitter   className="text-[#E1B5E5]"/>
      </div>
    </div>
  );
};

export default Footer;
