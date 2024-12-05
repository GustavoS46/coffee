"use client" 
import React from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Nav from './nav/Nav';
import Link from 'next/link';

const Header = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <header className='absolute top-[40px] left-0 right-0 z-[60]'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link href="/" className='relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]'>
                        <Image
                            src="/assets/logo.svg"
                            fill
                            alt=''
                            className='object-contain'
                        />
                    </Link>

                    {/* Menu Horizontal (exibido em telas grandes) */}
                    <nav className="hidden lg:flex gap-8 text-lg font-medium text-accent tracking-widest">
                        {[
                            { href: '/', name: 'Home' },
                            { href: '#explorar', name: 'Explorar' },
                            { href: '#sobre', name: 'Sobre' },
                            { href: '#menu', name: 'Menu' },
                            { href: '#contato', name: 'Contato' },
                        ].map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href}
                                className='hover:text-white'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Menu Burger (exibido em telas pequenas) */}
                    <button
                        className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none lg:hidden"
                        onClick={() => setNavActive(!navActive)}
                    >
                        <span
                            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"}`}
                        ></span>
                        <span
                            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-opacity duration-300 ${navActive ? "opacity-0" : "top-1/2"}`}
                        ></span>
                        <span
                            className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"}`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Menu Dropdown */}
            <AnimatePresence>{navActive && <Nav />}</AnimatePresence>
        </header>
    );
};

export default Header;
