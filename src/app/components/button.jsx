import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const Button = ({text}) => {
  return (
  
    <div className='mt-8 relative bg-transparent text-[#4831d4] lg:w-[267px] xsm:w-[200px]  h-[51px] border-[1px] border-solid border-[#4831d4] text-[12px] font-bold leading-[13.5px] flex flex-row items-center justify-center gap-3 hover:bg-[#4831d4] hover:text-[white] '>
       <h5 className='  md:text-[21px] xsm:text-[18px] leading-[28px] '>{text}</h5>
       <span className='text-[24px]'><HiOutlineArrowLongRight/></span>
    </div>
   
  )
}
