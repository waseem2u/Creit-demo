import React from "react";

type CustomButtonProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const CustomButton = ({ onClick, className, children }: CustomButtonProps) => {
  return (
    <button
      className={`border-none btnGradiant rounded-[10px] border text-[#FBCDFF] pt-[18px] pr-[30px] pb-[18px] pl-[30px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
