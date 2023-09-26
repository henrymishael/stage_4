import React from 'react'
import profile from '../../../public/svg/aii.png'
import Image from 'next/image'

export const Section1 = () => {
  return (
    <section id='section1' className='w-[100vw] h-[90vh] flex justify-center flex-col bg-[#ccf381] '>
        <article className='flex flex-col  w-[65%] h-[100%] px-12 bg-[#4831d4] '>
            <div className='m-auto ml-0 flex flex-col gap-8 px-8'>
                
                <h2 className='text-[58px] leading-[63px] text-[#ccf381] font-bold'>FrontEnd <br /> Developer.</h2>
                <p className='text-white text-[17px] leading-[27px]'>I like to craft solid and scalable frontend products <br /> with great user experiences.</p>
                <div className='mt-12 w-[70%] font-medium text-[12.5px] leading-[18.5px] text-[#ccf381] justify-end flex flex-row gap-16'>
                    <h5>Highly Skilled at progressive enhancement, design systems & UI Engineering</h5>
                    <h5>Proven experience building successful products for clients across several countries</h5>
                </div>
            </div>
            
        </article>
        <div>

        </div>
        <figure className=' absolute flex items-center justify-center w-[500px] h-[500px] bg-transparent left-[50%] z-[5]'>
            <span className='z-[3] w-[298px] h-[298px] bg-black'>
                <Image className='w-full bg-contain bg-center' src={profile}/>
            </span>
            <span className='mt-16 ml-16 absolute w-[298px] h-[298px] bg-transparent border-solid border-white border-2'>

            </span>
        </figure>
    </section>
  )
}
