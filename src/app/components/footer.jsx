import React from 'react'
import { Button } from './button'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center W-[100wh] h-[100vh] gap-16'>
            <div className=' text-[#4831d4] flex flex-col gap-3 justify-center text-center items-center md:w-[33.36%] xsm:w-[90%]'>
                <h2 className='font-bold text-[42px] leading-[54px]'>Send me a message!</h2>
                <p className='font-medium text-[20px] leading-[25px] text-[#3d155f]'>Got a question or proposal, or just want to say hello? Go ahead.</p>
            </div>
            <div className='flex md:flex-row xsm:flex-col md:gap-16 xsm:gap-12 w-[100%] justify-center text-gray-500 xsm:items-center xsm:justify-center'>
                <span className='flex flex-col'>
                <label for="name">Full name</label>
                <input id='name' className='border-gray-400 border-b-[1px] md:w-[276px] xsm:w-[200px] h-[40px] focus:border-[#4831d4] outline-none placeholder:text-[12px] 'type="text" placeholder='Enter your name' />
                </span>
                <span className='flex flex-col'>
                <label for="email">Email</label>
                <input id='email' className='border-gray-400 border-b-[1px] md:w-[276px] xsm:w-[200px] h-[40px] focus:border-[#4831d4] outline-none placeholder:text-[12px]'type="email" placeholder='Enter your email address'/>
                </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-gray-500 flex flex-col '>
                <label for="message">Your message</label>
                <input id='message' className='border-gray-400 border-b-[1px] md:w-[614px] xsm:w-[270px] h-[62px] focus:border-[#4831d4] outline-none placeholder:text-[12px]' type="text" />

                
                </span>
                <span className=''>
                <Link href='mailto:henrymishael.hm@gmail.com'>
                    <Button  text='Shoot'/>
                </Link>
                </span>
            </div>
    </div>
  )
}
