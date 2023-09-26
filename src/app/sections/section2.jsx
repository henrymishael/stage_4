import React from 'react'
import circle from '../../../public/svg/circle.svg'
import square from '../../../public/svg/roblox.svg'
import Image from 'next/image'

export const Section2 = () => {
  return (
    <section id='section2' className=' flex flex-row w-[100%] bg-white h-[100vh]  justify-center items-center px-8'>
        <article className='m-auto flex flex-col w-[50%] justify-center items-center gap-20 '>
            <span className='w-[80%] flex flex-col gap-3'>
            <h2 className='text-[52px] leading [58px] text-[#4831d4] font-bold '>Design</h2>
            <p className='text-[#3d155f] text-[14px] leading-[24px]  font-medium'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
            </span>
            <div className='w-[40%] h-[200px] flex flex-col gap-4 '>
                <span className='flex justify-end'>
                    <Image src={circle}/>
                </span>
                <span className='flex flex-grow'>
                    <Image src={circle}/>
                </span>
            </div>
        </article>
        <article className='m-auto flex flex-col w-[50%] justify-end items-center gap-20'>
            <span className='w-[40%] h-[200px] flex flex-col gap-4'>
                <span className='flex justify-end'>
                    <Image src={square}/>
                </span>
                <span className='flex flex-grow'>
                    <Image src={square}/>
                </span>
            </span>
            <span className='w-[80%] flex flex-col gap-3'>
            <h2 className='text-[52px] leading [58px] text-[#4831d4] font-bold '>Engineering</h2>
            <p className='text-[#3d155f] text-[14px] leading-[24px] font-medium'>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar</p>
            </span>
        </article>
    </section>
  )
}
