import React from 'react';
import Separator from './Separator';
import MenuItem from './MenuItem';

const menuItems = [
  {
    imgSrc: '/assets/menu/coffee-1.png',
    name: 'Expresso',
    description: 'Café puro e intenso, ideal para quem aprecia um sabor robusto.',
    price: 6.5,
  },
  {
    imgSrc: '/assets/menu/coffee-2.png',
    name: 'Capuccino',
    description: 'Espresso com leite vaporizado e uma camada de espuma cremosa.',
    price: 7.5,
  },
  {
    imgSrc: '/assets/menu/coffee-3.png',
    name: 'Café com Leite',
    description: 'Um equilíbrio suave de café espresso e leite quente.',
    price: 6.0,
  },
  {
    imgSrc: '/assets/menu/coffee-4.png',
    name: 'Americano',
    description: 'Espresso diluído em água quente, perfeito para quem prefere café menos intenso.',
    price: 5.5,
  },
  {
    imgSrc: '/assets/menu/coffee-5.png',
    name: 'Moca',
    description: 'Café com leite vaporizado e um toque de chocolate quente.',
    price: 8.5,
  },
];

const Menu = () => {
  return (
    <section
      id='menu'
      className='w-screen py-12 bg-[url("/assets/menu/texture.jpg")] bg-cover bg-center bg-no-repeat text-brown-900'
    >
      <div className='container mx-auto px-6'>
        {/* Título e descrição */}
        <div className='flex flex-col gap-4 mb-12 xl:mb-24 text-center'>
          <h2 className='h2 text-white'>Nosso Menu</h2>
          <div className='mb-4'>
            <Separator bg='accent' />
          </div>
          <p className='text-lg font-light max-w-[620px] mx-auto text-accent'>
            Descubra sabores únicos e experiências incríveis em nossa seleção de cafés. Cada bebida é preparada com grãos selecionados e técnicas especiais, trazendo o melhor da arte do café para você.
          </p>
        </div>
        {/* Menu e botão */}
        <div className='flex flex-col items-center gap-12 xl:gap-24'>
          {/* Menu grid */}
          <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16'>
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>
          {/* Botão */}
          <button className='btn'>
            Ver Menu Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
