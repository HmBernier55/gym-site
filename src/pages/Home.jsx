import React from 'react';

const Home = () => {
  return (
    <div className='relative bg-black'>
      <img className='opacity-55' src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='lifting barbel' />
      <div className='tracking-wide font-bold text-7xl flex absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
        <div className='flex mr-10'>
          <h1 className='text-lime-400'>RE</h1>
          <h1 className='text-white'>FLEX</h1>
        </div>
        <h1 className='text-white'>FITNESS</h1>
      </div>
    </div>
  )
}

export default Home;
