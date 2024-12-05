import React from 'react';
import Image from 'next/image';

const Explore = () => {
  return (
    <section 
      id='explorar'
      className='py-12 xl:py-0 xl:h-[90vh] xl:w-screen'>
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className='w-full flex flex-col lg:flex-row gap-12 xl:gap-20'>
          <div className='flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'>
            {/* Item 1 */}
            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                <div className='mb-6 flex justify-center items-center'>
                  <Image 
                    src='/assets/explore/coffees/coffee-1.svg' 
                    width={56} 
                    height={56} 
                    alt=''
                  />
                </div>
                <h3 className='text-3xl xl:text-4xl font-primary font-bold mv-4'>Misturas Ricas de Espresso</h3>
                <p className='max-w-[400px]'>
                  Delicie-se com os sabores profundos e robustos das nossas misturas de espresso, feitas com maestria. Perfeitas para um impulso rápido ou uma pausa tranquila à tarde.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                <div className='mb-6 flex justify-center items-center'>
                  <Image 
                    src='/assets/explore/coffees/coffee-2.svg' 
                    width={56} 
                    height={56} 
                    alt=''
                  />
                </div>
                <h3 className='text-3xl xl:text-4xl font-primary font-bold mv-4'>Café Coado Clássico</h3>
                <p className='max-w-[400px]'>
                  Aproveite o sabor reconfortante do nosso café coado clássico, preparado com perfeição. Uma escolha atemporal para os amantes de café que apreciam a simplicidade.
                </p>
              </div>
            </div>
          </div>
          {/* imagem */}
          <div className='hidden xl:flex justify-center'>
            <div className='relative w-[332px] h-[580px]'>
              <Image 
                src='/assets/explore/cup.png' 
                fill  
                alt='' 
                className='object-cover' 
                quality={100} 
                priority 
                data-scroll
                data-scroll-speed='0.1'
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none'>
            {/* Item 3 */}
            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                <div className='mb-6 flex justify-center items-center'>
                  <Image 
                    src='/assets/explore/coffees/coffee-3.svg' 
                    width={56} 
                    height={56} 
                    alt=''
                  />
                </div>
                <h3 className='text-3xl xl:text-4xl font-primary font-bold mv-4'>Refrigeração Fria Suave</h3>
                <p className='max-w-[400px]'>
                  Refresque-se com nossas opções suaves e revigorantes de cold brew. Ideais para os dias quentes em que você precisa de um toque gelado e cheio de energia.

                </p>
              </div>
            </div>
            {/* Item 4 */}
            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                <div className='mb-6 flex justify-center items-center'>
                  <Image 
                    src='/assets/explore/coffees/coffee-4.svg' 
                    width={56} 
                    height={56} 
                    alt=''
                  />
                </div>
                <h3 className='text-3xl xl:text-4xl font-primary font-bold mv-4'>Café Com Leite</h3>
                <p className='max-w-[400px]'>
                  Experimente os sabores ricos e cremosos das nossas diversas opções de café com leite. De baunilha a caramelo, temos um café com leite perfeito para cada gosto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore