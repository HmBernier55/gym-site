import React from 'react';

const PriceCard = ({price, benefits, name}) => {
  return (
    <div className='w-1/4 border border-black p-6 bg-slate-950 relative'>
      <div className='p-5 rounded-2xl bg-slate-800 space-y-3 h-full flex flex-col justify-between'>
        <div>
          <p className='text-white font-medium tracking-wider'>{name}</p>
          <p className='text-white text-3xl font-bold'>Membership</p>
        </div>
        <p className='text-gray-400 absolute font-bold text-6xl top-8 right-8'>{`${price}$`}</p>
        <ul className='list-disc pl-4'>
          {benefits.map((benefit, index) => (
            <li key={index} className='text-white'>{benefit}</li>
          ))}
        </ul>
        <button className='py-3.5 px-8 rounded-full font-bold text-white tracking-wide border hover:bg-lime-500'>Subscribe Today</button>
      </div>
    </div>
  )
}

export default PriceCard;