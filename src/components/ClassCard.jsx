import React from 'react';

const ClassCard = ({imageUrl, name, description}) => {
  return (
    <div className='flex flex-col lg:flex-row w-3/4 md:w-2/3 lg:1/2 shadow-xl rounded-2xl'>
      <div className='w-full lg:w-1/2 h-72 md:h-80 lg:h-96 overflow-hidden'>
        <img className='w-full h-full object-cover object-top rounded-tr-2xl lg:rounded-tr-none rounded-tl-2xl lg:rounded-bl-2xl border-t border-l border-b' src={imageUrl} alt={name} />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col justify-center gap-5 items-center p-5 lg:items-start lg:gap-10 lg:pr-8 lg:pl-14 lg:rounded-tr-2xl rounded-bl-2xl lg:rounded-bl-none rounded-br-2xl bg-gradient-to-b from-transparent to-gray-300'>
        <h3 className='font-extrabold text-3xl'>{name}</h3>
        <p className='font-medium text-center lg:text-left'>{description}</p>
      </div>
    </div>
  )
}

export default ClassCard;