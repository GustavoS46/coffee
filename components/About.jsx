"use client";
import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Nossa Jornada",
    description:
      "Fundado em 2000, o Zenbrew começou como um pequeno café com a visão de oferecer café excepcional. Hoje, somos uma marca adorada, conhecida por qualidade e sustentabilidade. Movidos pela paixão, criamos experiências memoráveis. Junte-se a nós para explorar o mundo do café, uma xícara de cada vez.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Nosso Compromisso",
    description:
      "No Zenbrew, prometemos o melhor café com impacto positivo. Sourcing sustentável e respeito ao planeta são nossa base. Nossos grãos são torrados com precisão, garantindo uma experiência rica e satisfatória. Qualidade, sustentabilidade e comunidade são nossos valores centrais.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Nossa Equipe",
    description:
      "Por trás de cada grande xícara de café está a equipe dedicada do Zenbrew. Baristas habilidosos e mestres na torrefação trabalham com paixão e precisão para tornar cada experiência especial. Conheça as pessoas que trazem criatividade e cuidado a cada xícara e descubra suas histórias únicas.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollbleTriggerRef = useRef(null);

  return (
    <section 
      id="sobre"
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#100C08,#0C0906_100%)] py-12">
      <div ref={scrollbleTriggerRef}>
        <div ref={scrollableSectionRef}>
          {data.map((item, index) => {
            return (
              <div key={index} className="w-screen py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                  {/* Texto */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center md:text-left">
                    <Badge containerStyles="w-[150px] h-[150px] m-6" />
                    <div className="max-w-[560px]">
                      {/* Título */}
                      <h2 className="h2 text-white tracking-tighter flex flex-col">
                        <span className="mr-2">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">
                          {item.title.split(" ")[1]}
                        </span>
                      </h2>
                      {/* Separador */}
                      <Separator />
                      {/* Descrição */}
                      <p className="leading-relaxed mt-6 mb-8 px-4 md:px-0 tracking-tight text-white">
                        {item.description}
                      </p>
                      {/* Botão */}
                      <button className="btn">Saiba Mais</button>
                    </div>
                  </div>
                  {/* Imagem */}
                  <div className="lg:flex-1 flex w-full lg:h-[450px] md:h-[350px] h-[250px] relative items-center justify-center">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover rounded-lg"
                      quality={100}
                      priority
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
