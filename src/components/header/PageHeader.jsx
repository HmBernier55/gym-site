import React from 'react';
import { bwGym } from '../../assets/index';

const PageHeader = ({title}) => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-60 w-full'>
      <div className='flex h-60 justify-center items-center bg-slate-900 lg:w-1/2'>
        <h1 className='text-white font-bold text-5xl italic'>{title}</h1>
      </div>
      <img className='h-60 lg:w-1/2 object-cover' src={bwGym} alt="gym" />
    </div>
  )
}

export default PageHeader;