"use client";
import Separator from './Separator';
import Badge from './Badge';
const Hero = () => {
  return (
    <section className='h-[80vh] xl:h-screen relative text-white'>
      {/* overlay */}
      <div className='absolute w-full h-full z-10 bg-primary/[0.53]'></div>
      {/* video */}
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover'><source src='/assets/hero/video.mp4' type='video/mp4' /></video>
      <div className='container mx-auto h-full flex flex-col lg:flex-row items-center z-30 relative'>
        {/* texto */}
        <div 
          data-scroll 
          data-scroll-speed='0.4' 
          className='flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full'>
          {/* Logo e h1 */}
          <div className='flex flex-col items-center'>
          <Badge containerStyles='hidden md:flex md:w-[180px] md:h-[180px]' />
            <h1 className='h1 text-white'>
              <span className='text-accent'>Café</span> e Alegria
            </h1>
          </div>
          {/* separador */}
          <Separator />
          <p className='lead font-light max-w-[300px] ms:max-w-[430px] lx:max-w-[560px] mb-4'>
            Descubra a alegria de saborear cafés excepcionais em um ambiente acolhedor, onde cada xícara é preparada com paixão e carinho.
          </p>
          <button className='btn'>Nosso menu</button>
        </div>
      </div>
    </section>
  )
}

export default Hero