import React from 'react'
import undraw from '../../../public/svg/undraw.svg'
import Image from 'next/image'

export const Section3 = () => {
  return (
    <section id='section3' className='bg-[#4831d4] w-[100%] h-[100vh] flex flex-row px-16'>
        <article className='w-[50%] flex   '>
            <span className='w-[60%] flex flex-col justify-center ml-5 gap-6 text-[14px] leading-[22px] text-white'>
                <h2 className='text-[53px] leading-[58px] font-bold text-[#ccf381]'>Over the <br /> months,</h2>
                <p>I've built personal products which are clone products for companies and businesses around the globe ranging from food delivery apps to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
                <p>Currently, I'm undergoing an internship with HNG as a frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for companies across the world.</p>
                <p>Before now, I was enrolled in the Univelcity school of engineering where I was taught the rudimentary of software engineering and what best practices to take to become a world renowned frontend engineer.</p>
            </span>
        </article>
        <figure className=' w-[50%] h-[100%] flex justify-center items-center'>
            <Image src={undraw}/>
        </figure>
    </section>
  )
}
