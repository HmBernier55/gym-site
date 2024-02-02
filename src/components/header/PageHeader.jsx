import React from 'react';

const PageHeader = ({title}) => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-60 w-full'>
      <div className='flex h-60 justify-center items-center bg-slate-900 lg:w-1/2'>
        <h1 className='text-white font-bold text-5xl italic'>{title}</h1>
      </div>
      <img className='h-60 lg:w-1/2 object-cover' src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gym" />
    </div>
  )
}

export default PageHeader;