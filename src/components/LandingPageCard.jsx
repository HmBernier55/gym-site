import React from 'react';

const LandingPageCard = ({name, imageUrl}) => {
  return (
    <div id='landing-page-card' className='relative h-60 w-60 xl:h-72 xl:w-72 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-black rounded-xl'>
      <img id='landing-page-card-image' className='object-cover w-full h-full object-top rounded-xl' src={imageUrl} alt={name} />
      <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black rounded-xl'></div>
      <p className='absolute bottom-10 left-5 text-white font-extrabold text-3xl'>{name}</p>
    </div>
  )
}

export default LandingPageCard;