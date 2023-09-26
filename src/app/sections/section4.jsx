import React from 'react'
import { Button } from '../components/button'
import Image from 'next/image'
import food from '../../../public/svg/getfood1.png'
import piggy from '../../../public/svg/piggy.png'
import movie from '../../../public/svg/movie.png'
import cover from '../../../public/svg/cover.png'

export const Section4 = () => {
  return (
    <section id='section4' className='w-[100vw] h-[100vh] bg-[#f9f9f9] px-20 pt-24 pb-16'>
        <div className='w-[100%] h-[100%] bg-white flex flex-row'>
            <article className=' flex flex-col justify-center gap-6 px-12 border-r-[#4831d4] border-2 border-solid outline-none w-[50%] border-white '>
                <h2 className='text-[42px] leading-[46px] text-[#4831d4] font-bold'>I build & <br /> design stuff</h2>
                <p className=' text-[#3d155f] text-[21px] leading-[28px]'>Web apps <br /> and experimentals</p>
                <Button 
                text='SEE MY WORK' />
            </article>
            <article className=' flex flex-wrap justify-center items-center gap-12 px-6 outline-none w-[50%]'>
                <div className=' bg-[#f9f8fd] w-[200px] h-[200px]'>
                    <figure className='h-[150px] w-[200px] bg-white '>
                        <Image className='w-[200px] h-[150px] ' src={food} />
                    </figure>
                    <span className='flex flex-col items-center justify-center'>
                        <h5 className='text-[16px] font-bold '>Food Delivery App</h5>
                        <a className='text-[#4831d4] text-[14px] font-bold ' href='https://getfood.vercel.app/'>visit site</a>
                    </span>
                </div>
                <div className=' bg-[#f9f8fd] w-[200px] h-[200px]'>
                    <figure className='h-[150px] w-[200px] bg-white '>
                        <Image className='w-[200px] h-[150px] ' src={piggy} />
                    </figure>
                    <span className='flex flex-col items-center justify-center'>
                        <h5 className='text-[16px] font-bold '>PiggyVest Landing Page</h5>
                        <a className='text-[#4831d4] text-[14px] font-bold ' href='https://my-projects-e7py7l0gv-henrymishael.vercel.app/HomePage'>visit site</a>
                    </span>
                </div>
                <div className=' bg-[#f9f8fd] w-[200px] h-[200px]'>
                    <figure className='h-[150px] w-[200px] bg-white '>
                        <Image className='w-[200px] h-[150px] ' src={movie} />
                    </figure>
                    <span className='flex flex-col items-center justify-center'>
                        <h5 className='text-[16px] font-bold '>Movie Box</h5>
                        <a className='text-[#4831d4] text-[14px] font-bold ' href='moviebox-weld.vercel.app'>visit site</a>
                    </span>
                </div>
                <div className=' bg-[#f9f8fd] w-[200px] h-[200px]'>
                    <figure className='h-[150px] w-[200px] bg-white '>
                        <Image className='w-[200px] h-[150px] ' src={cover} />
                    </figure>
                    <span className='flex flex-col items-center justify-center'>
                        <h5 className='text-[16px] font-bold '>Cover</h5>
                        <a className='text-[#4831d4] text-[14px] font-bold ' href='https://famous-marigold-3dd6bb.netlify.app'>visit site</a>
                    </span>
                </div>
               
                
            </article>

        </div>
    </section>
  )
}
