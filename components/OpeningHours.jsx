import React from 'react';
import Image from "next/image";
import Badge from "./Badge";
import Separator from './Separator';

const OpeningHours = () => {
  return (
    <section className="flex flex-col xl:flex-row bg-primary h-auto min-h-[60vh] xl:min-h-[80vh]">
      {/* 1 - Imagem com Badge */}
      <div className="relative flex flex-1 justify-center items-center">
        {/* Overlay escuro */}
        <div className="w-full h-full absolute top-0 bg-black/60 z-10"></div>
        {/* Imagem de fundo */}
        <Image
          src="/assets/opening-hours/img.jpg"
          fill
          alt=""
          quality={100}
          priority
          className="object-cover"
        />
        {/* Badge */}
        <Badge
          containerStyles="lg:w-[260px] lg:h-[260px] w-[160px] h-[160px] absolute z-20"
        />
      </div>

      {/* 2 - Texto e Horários */}
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative p-6 xl:p-12">
        {/* Overlay escuro */}
        <div className="w-full h-full absolute top-0 bg-black/40 z-10"></div>
        {/* Conteúdo */}
        <div className="z-20 flex flex-col items-center text-center">
          <h2 className="h2 text-white mb-4">
            Funcionamento
          </h2>
          <Separator bg="accent" />
          <div className="mt-8 xl:mt-12 relative w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              fill
              className="object-contain"
              quality={100}
              priority
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
