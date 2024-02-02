import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LandingPageCard } from '../components';
import { liftingBarbel, proteinShake, yogaClass, payment } from '../assets/index';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <div className='relative bg-black'>
        <img className='opacity-55' src={liftingBarbel} alt='lifting barbel' />
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col items-center'>
          <div className='tracking-wide font-bold text-3xl sm:text-7xl flex gap-3'>
            <div className='flex'>
              <h1 className='text-lime-500'>RE</h1>
              <h1 className='text-white'>FLEX</h1>
            </div>
            <h1 className='text-white'>FITNESS</h1>
          </div>
          <h3 className='text-white font-medium text-md sm:text-2xl tracking-wide text-center'>Ignite Your Potential, Sculpt Your Strength</h3>
          <button
            onClick={() => navigate('/pricing')}
            className='bg-lime-500 text-sm py-1.5 px-3 sm:py-3.5 sm:px-8 mt-10 rounded-full font-bold text-white tracking-wide hover:bg-lime-600'
          > View Memberships</button>
        </div>
      </div>
      <div className='flex flex-col items-center my-12 p-10 gap-10 w-11/12 shadow-xl'>
        <h2 className='text-2xl sm:text-4xl font-extrabold text-lime-500 text-center'>What Reflex Fitness Has To Offer</h2>
        <p className='max-w-4xl text-center font-medium leading-relaxed text-md sm:text-lg'>At Reflex Fitness, we invite you to embark on a transformative wellness journey that transcends the ordinary. Our dedicated team is committed to empowering you to reach new heights in your fitness endeavors. From cutting-edge equipment to a diverse range of invigorating classes, we provide the tools and support you need to sculpt a healthier, stronger, and more vibrant version of yourself. Explore our comprehensive offerings, personalized training, and a vibrant community that makes every workout an uplifting experience. Your journey to optimal well-being starts here at Reflex Fitness, where we redefine fitness as a lifestyle.</p>
        <div className='grid lg:grid-cols-3 gap-10'>
          <Link to='/amenities'>
            <LandingPageCard
              name='Amenities'
              imageUrl={proteinShake}
            />
          </Link>
          <Link to='/classes'>
            <LandingPageCard
              name='Classes'
              imageUrl={yogaClass}
            />
          </Link>
          <Link to='/pricing'>
            <LandingPageCard
              name='Pricing'
              imageUrl={payment}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
