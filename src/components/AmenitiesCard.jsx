import React from 'react';

const AmenitiesCard = ({name, description, imageUrl}) => {
  return (
    <div id='amenity' className='h-[350px] w-[350px] relative rounded-xl'>
      <img className='object-cover h-[350px] w-[350px] rounded-xl' src={imageUrl} alt={name} />
      <div className='rounded-xl absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black'></div>
      <h3 id='amenity-name' className='absolute bottom-10 left-1/2 -translate-x-1/2 font-extrabold text-white text-2xl text-center'>{name}</h3>
      <div id='hid-description' className='rounded-xl absolute w-full overflow-hidden bottom-0 left-0 right-0 ease-out duration-500 h-0'>
        <div className='flex flex-col gap-6 items-center py-12 px-4 bg-black opacity-90 text-white h-full'>
          <p className='font-extrabold text-2xl text-center'>{name}</p>
          <p className='text-center font-medium text-sm leading-relaxed'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AmenitiesCard;