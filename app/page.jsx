'use client';
import Hero from '@/components/Hero';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import '../public/css/locomotive-scroll.css'; 
import Explore from '@/components/Explore';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Testimonial from '@/components/Testimonial';
import OpeningHours from '@/components/OpeningHours';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    const loadLocomotiveScroll = async () => {
      if (scrollContainerRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 1.5,
        });
      }
    };

    loadLocomotiveScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonial />
    </div>
  );
};

export default Home;
