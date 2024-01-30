import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='relative bg-black'>
      <img className='opacity-55' src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='lifting barbel' />
      <div className='tracking-wide font-bold text-7xl flex absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
        <div className='flex mr-10'>
          <h1 className='text-lime-500'>RE</h1>
          <h1 className='text-white'>FLEX</h1>
        </div>
        <h1 className='text-white'>FITNESS</h1>
      </div>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
        <h3 className='text-white font-medium text-2xl tracking-wide'>Ignite Your Potential, Sculpt Your Strength</h3>
        <button
          onClick={() => navigate('/pricing')}
          className='relative left-1/2 transform -translate-x-1/2 translate-y-full bg-lime-500 py-3.5 px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'> View Memberships</button>
      </div>
    </div>
  )
}

export default Home;
