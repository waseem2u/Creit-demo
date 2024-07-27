// import React from 'react';

// const CustomButton = () => {
//     return (
//         <button className='w-[144px] h-[45px] color-[#ffff] rounded-[10px] bg-[#602EA6]'>bbbbbb</button>
//     );
// };

// export default CustomButton;

import React from "react";

const CustomButton = ({ onClick, className, children }) => {
  return (
    <button className={`border-none btnGradiant rounded-[10px] border text-[#FBCDFF] pt-[18px] pr-[30px] pb-[18px] pl-[30px] ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
