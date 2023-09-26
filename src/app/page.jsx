'use client';

import Image from 'next/image'
import { Header } from './components/header'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/section2'
import { Section3 } from './sections/section3'
import { Section4 } from './sections/section4'
import { Footer } from './components/footer';
import cross from '../../public/svg/cross.svg'
import dotted from '../../public/svg/dotted.svg'
import ellipse from '../../public/svg/ellipse.svg'
import { useEffect, useRef, useState } from 'react'




export default function Home() {

 
  

  return (
    <div  className='relative  w-[100vw] '>
      <header className=''>
        <Header/>
      </header>
      <main  className=''>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <footer className=''>
        <Footer/>
      </footer>
      <Image className='absolute top-[300px] right-[200px] ' src={cross}/>
      <Image className='absolute top-24 right-[550px] ' src={dotted}/>
      <Image className='absolute top-24 right-[300px] ' src={ellipse}/>
    </div>
  )
}
