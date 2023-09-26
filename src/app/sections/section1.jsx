import React from 'react'
import profile from '../../../public/svg/aii.png'
import Image from 'next/image'

export const Section1 = () => {
  return (
    <section id='section1' className='w-[100vw] lg:h-[90vh] xsm:h-[100vh] flex justify-center  flex-col bg-[#ccf831] '>
        <article className='flex flex-col  lg:w-[65%]  xsm:w-[100%] md:h-[100%] md:px-12 bg-[#4831d4] xsm:h-[70%] top-0'>
            <div className='m-auto ml-0 flex flex-col gap-8 px-8'>
                
                <h2 className='md:text-[58px] md:leading-[63px] xsm:text-[30px] text-[#ccf381] font-bold'>FrontEnd <br /> Developer.</h2>
                <p className='text-white text-[17px] leading-[27px] xsm:hidden md:block'>I like to craft solid and scalable frontend products <br /> with great user experiences.</p>
                <p className='text-white text-[17px] leading-[27px] md:hidden'>I like to craft solid and scalable frontend products with great user experiences.</p>
                <div className='mt-12 w-[70%] font-medium text-[12.5px] leading-[18.5px] text-[#ccf381] justify-end flex flex-row gap-16 xsm:w-[100%]  md:w-[70%] '>
                    <h5>Highly Skilled at progressive enhancement, design systems & UI Engineering</h5>
                    <h5>Proven experience building successful products for clients across several countries</h5>
                </div>
            </div>
            
        </article>
        
        <figure className='lg:absolute flex items-center justify-center xsm:w-[200px] xsm:h-[200px] md:w-[500px] md:h-[500px] bg-transparent md:left-[50%] xsm:m-auto z-[5]'>
            <span className='z-[3] md:w-[298px] md:h-[298px] xsm:w-[150px] xsm:h-[150px] bg-black'>
                <Image className='w-full bg-contain bg-center' src={profile}/>
            </span>
            <span className='md:mt-16 nd:ml-16 xsm:mt-8 xsm:ml-8 absolute  md:w-[298px] md:h-[298px] xsm:w-[150px] xsm:h-[150px] bg-transparent border-solid border-white border-2'>

            </span>
        </figure>
    </section>
  )
}
