import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const links = [
    { href: '/', name: 'Home' },
    { href: '/', name: 'Explorar' },
    { href: '/', name: 'Sobre' },
    { href: '/', name: 'Menu' },
    { href: '/', name: 'Contato' },
];

const Footer = () => {
    return (
        <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative text-accent">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/90 z-10 top-0"></div>
            <div className="container mx-auto relative z-20">
                <div className="flex flex-col items-center justify-center gap-14">
                    {/* logo */}
                    <Link
                        href="/"
                        className="relative w-[120px] h-[50px] mx-auto"
                    >
                        <Image
                            src="/assets/logo.svg"
                            fill
                            alt=""
                            className="object-contain"
                        />
                    </Link>
                    {/* nav */}
                    <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
                        {links.map((link, index) => {
                            return (
                                <Link
                                    href={link.href}
                                    key={index}
                                    className="hover:text-gray-300 transition-colors tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                    {/* social */}
                    <ul className='flex text-white text-xl gap-4'>
                        <Link href='/' className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'
                        >
                            <FaYoutube />
                        </Link>
                        <Link href='/' className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'
                        >
                            <FaFacebookF />
                        </Link>
                        <Link href='/' className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'
                        >
                            <FaTwitter />
                        </Link>
                        <Link href='/' className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all'
                        >
                            <FaInstagram />
                        </Link>
                    </ul>
                    {/* copyright */}
                    <div className='border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6'>
                        <p>
                            &copy; Copyright 2024 {' '}
                            <a
                                href="https://www.linkedin.com/in/gustavo-desenvolvedor/"
                                target="_blank"
                                rel="noopener noreferrer"
                            className="hover:text-gray-400 transition duration-200 border-b-2 border-transparent hover:border-accent"
                            >
                                Gustavo 
                                <span className='text-accent  pl-1'>Silva</span>
                            </a>
                            . Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
