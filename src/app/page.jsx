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

  const [activeSection, setActiveSection] = useState(1);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling')
      const offset = window.innerHeight / 2;
  
      if (section1Ref.current && section1Ref.current.getBoundingClientRect().top < offset) {
        setActiveSection(1);
      } else if (section2Ref.current && section2Ref.current.getBoundingClientRect().top < offset) {
        setActiveSection(2);
      } else if (section3Ref.current && section3Ref.current.getBoundingClientRect().top < offset) {
        setActiveSection(3);
      } else if (section4Ref.current && section4Ref.current.getBoundingClientRect().top < offset) {
        setActiveSection(4);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative  w-[100vw] '>
      <header className=''>
        <Header/>
      </header>
      <main className=''>
        <Section1 iref={section1Ref} />
        <Section2 ref={section2Ref} />
        <Section3 ref={section3Ref} />
        <Section4 ref={section4Ref} />
      </main>
      <footer className='xsm:hidden md:block'>
        <Footer/>
      </footer>
      <Image className='absolute top-[300px] right-[200px] ' src={cross}/>
      <Image className='absolute top-24 right-[550px] ' src={dotted}/>
      <Image className='absolute top-24 right-[300px] ' src={ellipse}/>
    </div>
  )
}
