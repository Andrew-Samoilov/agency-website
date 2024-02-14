"use client"

import React, { useState } from 'react';
import MainMenu from '../main-menu/mainMenu';
import Logo from '../logo/logo';

export default function MobileMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // for stop scrollin when isMobileMenuOpen
        const html = document.querySelector('html');
        !isMobileMenuOpen ? html!.style.overflow = 'hidden' : html!.style.overflow = 'auto';
    };

    return (
        <>
            <button onClick={handleClick}
                aria-label="Open mobile menu"
                className='flex flex-col justify-center items-center md:hidden mr-2 z-30'>
                <span className={`bg-main-sky transition-all duration-300 ease-out 
                h-1 w-6 rounded-sm ${isMobileMenuOpen ?
                        'rotate-45 translate-y-1.5' : '-translate-y-1'
                    }`} >
                </span>
                <span className={`bg-main-sky transition-all duration-300 ease-out 
                h-1 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-main-sky transition-all duration-300 ease-out 
                h-1 w-6 rounded-sm ${isMobileMenuOpen ?
                        '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                    }`} >
                </span>
            </button>

            {
                isMobileMenuOpen ? (
                    <div className="z-20 fixed top-0 left-0 w-screen h-dvh p-6 flex flex-col justify-between items-center bg-white dark:bg-black">
                        <Logo
                            styleLogo='mr-auto'
                            onClickFunction={handleClick}
                        /> 
                        <hr className="rounded-sm  w-full h-1 border-t-0 bg-main-sky opacity-100 dark:opacity-30" />
                        <MainMenu
                            styleMenuItem="list-none text-xl"
                            styleNav="grid grid-rows-2 gap-8"
                            onClickFunction={handleClick}
                        />
                        <hr className=" rounded-sm w-full h-1 border-t-0 bg-main-sky opacity-100 dark:opacity-30" />
                  
                    </div>
                ) : (<></>)
            }
        </>)
}
