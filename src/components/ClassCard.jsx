import React from 'react';

const ClassCard = ({imageUrl, name, description}) => {
  return (
    <div className='flex w-1/2 shadow-xl rounded-2xl'>
      <div className='w-1/2 h-96 overflow-hidden'>
        <img className='w-full h-full object-cover object-top rounded-tl-2xl rounded-bl-2xl border-t border-l border-b' src={imageUrl} alt={name} />
      </div>
      <div className='w-1/2 flex flex-col justify-center gap-10 pr-8 pl-14 rounded-tr-2xl rounded-br-2xl bg-gradient-to-b from-transparent to-gray-300'>
        <h3 className='font-extrabold text-3xl'>{name}</h3>
        <p className='font-medium'>{description}</p>
      </div>
    </div>
  )
}

export default ClassCard;