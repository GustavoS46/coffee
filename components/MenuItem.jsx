import Image from 'next/image';

const MenuItem = ({ imgSrc, name, description, price }) => {
  return (
    <div className='flex items-center gap-4'>
      {/* img */}
      <div className='relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full overflow-hidden'>
        <Image 
          src={imgSrc} 
          alt={name} 
          priority 
          quality={100} 
          fill 
          className='object-cover' 
        />
      </div>
      {/* conteudo */}
      <div className='flex flex-col flex-1 gap-2'>
        <div className='flex justify-between gap-4 items-baseline'>
            {/* nome */}
            <h4 className='uppercase font-primary font-semibold text-[22px] leading-none text-accent'>{name}</h4>
        
        {/* borda */}
        <div className='flex-1 border-b border-dashed border-primary'></div>
        {/* preço */}
        <div className='leading-none font-primary font-semibold text-[30px]'>
            <span className='text-md font-semibold text-white'>R$ {price.toFixed(2)}</span>
        </div>
        </div>
        {/* descrição */}
        <p className='text-sm text-white'>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem