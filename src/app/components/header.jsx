'use client';

import React, { useEffect, useState } from 'react'
import name from '../../../public/svg/mine.svg'
import menu from '../../../public/svg/Ham.svg'
import short from '../../../public/svg/ooo.svg'
import Image from 'next/image'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleidebar = () => {
        showSideBar(!sidebar);
        if(!sidebar) {
            document.body.style.overflow = 'hiddden';
        }else{
            document.body.style.overflow ='auto';
        }
    }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed flex flex-row justify-between w-[100%] items-center px-12  z-[10] top-0 h-[90px] ${scrolling ? 'bg-transparent ' : 'bg-transparent'}`}>
        <Image className={`${scrolling ? 'hidden' : ''} slide-in`} src={name} />
        <Image className={`${scrolling ? 'block' : 'hidden'} slide-in`} src={short} />
        <span className='relative'>
            <Image onClick={toggleMenu} className={`${scrolling ? 'bg-inherit' : 'bg-[#4831d4'} `} src={menu} />
            {isOpen && (<div className='absolute w-[300px] h-[400px] bg-white flex items-center justify-center  right-0'>
                <h2 className='text-[#4831d4]'>Coming soon!!!</h2>
            </div>)}
            
        </span>
    </div>
  )
}
