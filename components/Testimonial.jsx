import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Importação dos módulos
import 'swiper/css';
import 'swiper/css/navigation';
import { IoMdQuote } from 'react-icons/io';

const testimonials = [
  {
    message: 'O café aqui é absolutamente incrível! Os baristas são habilidosos, e a atmosfera é perfeita tanto para trabalhar quanto para relaxar.',
    name: 'Alice Prado',
    profession: 'Recepcionista',
  },
  {
    message: 'Adoro vir a este café. Os doces estão sempre frescos, e a equipe é incrivelmente amigável. É meu lugar favorito para reuniões.',
    name: 'Douglas Garcia',
    profession: 'Escritor',
  },
  {
    message: 'Um tesouro escondido! O ambiente é acolhedor, e o menu oferece uma ótima variedade. O chai latte é imperdível!',
    name: 'Simara Santos',
    profession: 'Especialista em Marketing',
  },
];

const Testimonial = () => {
  return (
    <section className='h-[50vh] xl:h-[50vh] bg-gradient-to-r from-[#191411] via-[#432F1E] to-[#191411]'>
      <div className='container mx-auto h-full flex items-center'>
        <Swiper
          navigation={true} // Habilita a navegação manual
          autoplay={{
            delay: 5000, // Tempo em milissegundos entre os slides (5 segundos)
            disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
          }}
          modules={[Navigation, Autoplay]} // Adiciona o módulo Autoplay
          className='h-[400px]'
        >
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className='w-full h-full'>
                <div className='flex justify-center h-full xl:pt-14'>
                  <div className='max-w-[70%] text-center'>
                    <IoMdQuote className='text-6xl text-[#191411] mb-6 mx-auto' />
                    <p className='text-2xl font-light text-white italic leading-relaxed mb-8'>
                      "{person.message}"
                    </p>
                    <div className='text-center'>
                      <p className='text-xl font-bold text-[#191411] mb-1'>{person.name}</p>
                      <p className='text-base font-medium text-white'>{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
