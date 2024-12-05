import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  {href: '/', name: 'Home'},
  {href: '/', name: 'Explorar'},
  {href: '/', name: 'Sobre'},
  {href: '/', name: 'Menu'},
  {href: '/', name: 'Contato'},
]

const letterAnim = {
  initial: {
    y: '100%',
    opacity: 0
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: {duration: 1, ease: [0.75, 0, 0.23, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: '100%',
    opacity: 0,
    transition: {duration: 0.8, ease: [0.75, 0, 0.23, 1], delay: i[1] },
  }),
}

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span 
        variants={letterAnim}   
        initial='initial' 
        animate='enter' 
        exit='exit' 
        custom={[index * 0.2, (name.lenght - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavList = () => {
  return (
    <ul className='flex flex-col gap-8 font-primary lg:text-4xl text-2xl font-semibold text-accent items-center'>
      {links.map((link, index) => {
        return (
          <Link 
            href={link.href} 
            key={index}
            className='flex overflow-hidden hover:text-white transition-all'
          >
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList