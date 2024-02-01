import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LandingPageCard } from '../components';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
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
            className='relative left-1/2 transform -translate-x-1/2 translate-y-full bg-lime-500 py-3.5 px-8 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'
          > View Memberships</button>
        </div>
      </div>
      <div className='flex flex-col items-center my-12 p-10 gap-10 w-3/4 shadow-xl'>
        <h2 className='text-4xl font-extrabold text-lime-500'>What Reflex Fitness Has To Offer</h2>
        <p className='max-w-4xl text-center font-medium leading-relaxed text-lg'>At Reflex Fitness, we invite you to embark on a transformative wellness journey that transcends the ordinary. Our dedicated team is committed to empowering you to reach new heights in your fitness endeavors. From cutting-edge equipment to a diverse range of invigorating classes, we provide the tools and support you need to sculpt a healthier, stronger, and more vibrant version of yourself. Explore our comprehensive offerings, personalized training, and a vibrant community that makes every workout an uplifting experience. Your journey to optimal well-being starts here at Reflex Fitness, where we redefine fitness as a lifestyle.</p>
        <div className='grid grid-cols-3 gap-10'>
          <Link to='/amenities'>
            <LandingPageCard
              name='Amenities'
              imageUrl='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Link>
          <Link to='/classes'>
            <LandingPageCard
              name='Classes'
              imageUrl='https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Link>
          <Link to='/pricing'>
            <LandingPageCard
              name='Pricing'
              imageUrl='https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
